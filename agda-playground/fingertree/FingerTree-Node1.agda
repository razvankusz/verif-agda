------------------------------------------------------------------------
-- Finger trees for Agda
------------------------------------------------------------------------

-- Finger trees are an efficient general-purpose data structure.

-- This module implements non-dependent finger trees and is very
-- similar to the Haskell version described by Hinze and Paterson
-- in their paper "Finger Trees: A Simple General-purpose Data
-- Structure" (2006).

-- Finger trees support many different operations. The most important
-- ones are:
--  • _◁_; _▷_ (a.k.a cons and snoc)
--  • headL; tailL; headR; tailR (a.k.a head, tail, init and last)
--  • viewL; viewR (allow list-like views)
--  • toList; toTree (conversion from - and to lists)
--  • isEmpty (a.k.a null)
--  • _⋈_ (a.k.a _++_)

{-# OPTIONS --sized-types #-}

module FingerTree-Node1 where

open import Class.Reduce
open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false)
open import Size

------------------------------------------------------------------------
-- Finger tree =
--   Digit (of Nodes) + Finger Tree (of Nodes) + Digit (of Nodes)

data Node {a : Level} (A : Set a) : Set a where
  Node1 : A → Node A
  Node2 : A → A → Node A
  Node3 : A → A → A → Node A

data Digit {a : Level} (A : Set a) : Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A

data FingerTree {a : Level} (A : Set a) : {size : Size} → Set a where
  Empty  : {i : Size} → FingerTree A {↑ i}
  Single : {i : Size} → A → FingerTree A {↑ i}
  Deep   : ∀ {i : Size} → Digit A → FingerTree (Node A) {i} → Digit A →
           FingerTree A {↑ i}

------------------------------------------------------------------------
-- cons and snoc

infixr 5 _◁_
_◁_ : ∀ {i a} {A : Set a} → A → FingerTree A {i} → FingerTree A {↑ i}
a ◁ Empty                     = Single a
a ◁ Single b                  = Deep (One   a) Empty (One b)
a ◁ Deep (One   b) m sf       = Deep (Two   a b) m sf
a ◁ Deep (Two   b c) m sf     = Deep (Three a b c) m sf
a ◁ Deep (Three b c d) m sf   = Deep (Four  a b c d) m sf
a ◁ Deep (Four  b c d e) m sf = Deep (Two   a b) (Node3 c d e ◁ m) sf

infixl 5 _▷_
_▷_ : ∀ {i a} {A : Set a} → FingerTree A {i} → A → FingerTree A {↑ i}
Empty                     ▷ a = Single a
Single b                  ▷ a = Deep (One b) Empty (One a)
Deep pr m (One   b)       ▷ a = Deep pr m (Two   b a)
Deep pr m (Two   c b)     ▷ a = Deep pr m (Three c b a)
Deep pr m (Three d c b)   ▷ a = Deep pr m (Four  d c b a)
Deep pr m (Four  e d c b) ▷ a = Deep pr (m ▷ Node3 e d c) (Two b a)

------------------------------------------------------------------------
-- Instances of the Reduce type class

reducerNode : ∀ {a} {A : Set a} {B : Set a} → (A → B → B) → Node A → B → B
reducerNode _⤙_ (Node1 a) z = a ⤙ z
reducerNode _⤙_ (Node2 a b) z   = a ⤙ (b ⤙ z)
reducerNode _⤙_ (Node3 a b c) z = a ⤙ (b ⤙ (c ⤙ z))

reducelNode : ∀ {a} {A : Set a} {B : Set a} → (B → A → B) → B → Node A → B
reducelNode _⤚_ z (Node1 a) = z ⤚ a
reducelNode _⤚_ z (Node2 b a)   = (z ⤚ b) ⤚ a
reducelNode _⤚_ z (Node3 c b a) = ((z ⤚ c) ⤚ b) ⤚ a

reduceInstanceNode : {a : Level} → reduceClass Node
reduceInstanceNode {a} = record {
  reducer = reducerNode {a} ;
  reducel = reducelNode }

reducerDigit : ∀ {a} {A : Set a} {B : Set a} → (A → B → B) → Digit A → B → B
reducerDigit _⤙_ (One a)        z = a ⤙ z
reducerDigit _⤙_ (Two a b)      z = a ⤙ (b ⤙ z)
reducerDigit _⤙_ (Three a b c)  z = a ⤙ (b ⤙ (c ⤙ z))
reducerDigit _⤙_ (Four a b c d) z = a ⤙ (b ⤙ (c ⤙ (d ⤙ z)))

reducelDigit : ∀ {a} {A : Set a} {B : Set a} → (B → A → B) → B → Digit A → B
reducelDigit _⤚_ z (One a)        = z ⤚ a
reducelDigit _⤚_ z (Two b a)      = (z ⤚ b) ⤚ a

-- surprisingly verified programming helped me find a problem in his code ^^
-- old version reducelDigit _⤚_ z (Three c b a)  = ((z ⤚ b) ⤚ c) ⤚ a
-- old version reducelDigit _⤚_ z (Four d b c a) = (((z ⤚ d) ⤚ c) ⤚ b) ⤚ a
-- those mistakes are too consistent maybe I am the one going wrong here
reducelDigit _⤚_ z (Three c b a)  = ((z ⤚ c) ⤚ b) ⤚ a
reducelDigit _⤚_ z (Four d c b a) = (((z ⤚ d) ⤚ c) ⤚ b) ⤚ a

reduceInstanceDigit : {a : Level} → reduceClass Digit
reduceInstanceDigit {a} = record {
  reducer = reducerDigit {a};
  reducel = reducelDigit }


wrappedReducerNode : ∀ {a} {A : Set a} → (fun : A → A → A) → (ε : A) → Node A → Node A → Node A
wrappedReducerNode fun ε = λ x z → Node1 (fun (reducerNode fun x ε) (reducerNode fun z ε))

wrappedReducelNode : ∀ {a} {A : Set a} → (fun : A → A → A) → (ε : A) → Node A → Node A → Node A
wrappedReducelNode fun ε = λ x z → Node1 (fun (reducelNode fun ε x) (reducelNode fun ε z))

-- this requires z to be the neutre element
reducerFingerTree1 : ∀ {a} {A : Set a} → {i : Size} → (A → A → A) → FingerTree A {i} → A → A
reducerFingerTree1 _⊕_ Empty z = z
reducerFingerTree1 _⊕_ (Single x) z = x ⊕ z
reducerFingerTree1 {a} {A} {.(↑ i)} _⊕_ (Deep {i} x ft y) z = Node1 (x ⊕d ())
  where _⊕d_ : Digit A → A → A
        _⊕d_ = reducerDigit _⊕_
        _⊕n_ : Node A → A → A
        _⊕n_ = reducerNode _⊕_
        _⊕nw_ : FingerTree (Node A) → Node A → Node A
        _⊕nw_ = reducerFingerTree1 (wrappedReducerNode _⊕_ z)

reducerFingerTree : ∀ {a} {A : Set a} {B : Set a} → {i : Size} →
                    (A → B → B) → FingerTree A {i} → B → B
reducerFingerTree {a} {A} {B} {.(↑ i)} _⤙_ (Empty {i}) z = z
reducerFingerTree {a} {A} {B} {.(↑ i)} _⤙_ (Single {i} x) z = x ⤙ z
reducerFingerTree {a} {A} {B} {.(↑ i)} _⤙_ (Deep {i} pr m sf) z = pr ⤙′ (m ⤙″ (sf ⤙′ z))
  where _⤙′_ : Digit A → B → B
        _⤙′_  = reducerDigit _⤙_
        _⤙″_ : FingerTree (Node A) {i} → B → B
        _⤙″_ = reducerFingerTree (reducerNode _⤙_)

        -- reduce-node-new :: (fun : A → A → A) → Node A → Node A → Node A
        -- reduce-node-new fun = λ x z. Node1 (fun (reduceNode x) (reduceNode z))

reducelFingerTree : ∀ {a} {A : Set a} {B : Set a} → {i : Size} →
                    (B → A → B) → B → FingerTree A {i} → B
reducelFingerTree {a} {A} {B} {.(↑ i)} _⤚_ z (Empty {i}) = z
reducelFingerTree {a} {A} {B} {.(↑ i)} _⤚_ z (Single {i} x) = z ⤚ x
reducelFingerTree {a} {A} {B} {.(↑ i)} _⤚_ z (Deep {i} pr m sf) = ((z ⤚′ pr) ⤚″ m ) ⤚′ sf
  where _⤚′_ : B → Digit A → B
        _⤚′_  = reducelDigit _⤚_
        _⤚″_ : B → FingerTree (Node A) {i} → B
        _⤚″_ = reducelFingerTree (reducelNode _⤚_)

reduceInstanceFingerTree : {a : Level} → reduceClass (λ A → FingerTree A)
reduceInstanceFingerTree {a} = record {
  reducer = reducerFingerTree {a};
  reducel = reducelFingerTree }

test-tree : FingerTree ℕ
test-tree = (1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty) ▷ 7 ▷ 8 ▷ 9 ▷ 10 ▷ 7 ▷ 8 ▷ 9 ▷ 10 ▷ 7 ▷ 8 ▷ 9 ▷ 10

sum : FingerTree ℕ → ℕ
sum ft = reducelFingerTree (Data.Nat._+_) ℕ.zero ft

open import Agda.Builtin.Equality

Associative : ∀ {A} → (A → A → A) → Set
Associative _⊕_ = ∀ x y z → x ⊕ (y ⊕ z) ≡ (x ⊕ y) ⊕ z

Commutative :  ∀ {A} → (A → A → A) → Set
Commutative _⊕_ = ∀ x y → (x ⊕ y) ≡ (y ⊕ x)


-- simple test to get myself started
assoc+comm : ∀ {A} → (x y z : A) → (_*_ : A → A → A) → (Commutative _*_) →
            x * (y * z) ≡ x * (z * y)
assoc+comm x y z _*_ comm rewrite comm y z = refl

-- a very annoying thing with the rewrite directive is that it can't figure it out
-- that if eqn = a ≡ b it can replace b with a instead, so we have to use the
-- with b | eqn ... pattern
-- needed for Node2
assoc+comm2 : ∀ {A} → (x y z : A) → (_*_ : A → A → A) → (Associative _*_) → (Commutative _*_) →
            x * (y * z) ≡ (z * x) * y
assoc+comm2 x y z _*_ assoc comm with (y * z) | comm y z
assoc+comm2 x y z _*_ assoc comm | .(z * y) | refl with x * (z * y) | assoc x z y
assoc+comm2 x y z _*_ assoc comm | .(z * y) | refl | .((x * z) * y) | refl
                                                   with (x * z) | comm x z
assoc+comm2 x y z _*_ assoc comm | .(z * y) | refl | .((x * z) * y) | refl | .(z * x) | refl = refl
-- figure out how to reuse this for Node3

-- reducelNode _⤚_ z (Node3 c b a) = ((z ⤚ c) ⤚ b) ⤚ a
-- reducerNode _⤙_ (Node3 a b c) z = a ⤙ (b ⤙ (c ⤙ z))
assoc+comm3 : ∀ {A} → (a b c z : A) → (_*_ : A → A → A) → (Associative _*_) → (Commutative _*_) →
            a * (b * (c * z)) ≡ ((z * a) * b) * c
assoc+comm3 a b c z _*_ assoc comm rewrite assoc+comm2 b c z _*_ assoc comm |
                                           assoc a (z * b) c |
                                           assoc a z b |
                                           comm a z = refl

-- reducelDigit _⤚_ z (Four d b c a) = (((z ⤚ d) ⤚ c) ⤚ b) ⤚ a
-- reducerDigit _⤙_ (Four a b c d) z = a ⤙ (b ⤙ (c ⤙ (d ⤙ z)))
assoc+comm4 : ∀ {A} → (a b c d z : A) → (_*_ : A → A → A) → (Associative _*_) → (Commutative _*_) →
           a * (b * (c * (d * z))) ≡ (((z * a) * b) * c) * d
assoc+comm4 a b c d z _*_ assoc comm rewrite assoc+comm3 b c d z _*_ assoc comm |
                                             assoc a ((z * b) * c) d |
                                             assoc a (z * b) c |
                                             assoc a z b |
                                             comm a z = refl

node-reduce : ∀ {A} (n : Node A) → (fun : A → A → A) → (z : A) →
      (assoc : Associative fun) → (comm : Commutative fun) →
      reducerNode fun n z ≡ reducelNode fun z n
node-reduce (Node1 x) fun z assoc comm = comm x z
node-reduce (Node2 x x₁) fun z assoc comm rewrite assoc+comm2 x x₁ z fun assoc comm = refl
node-reduce (Node3 x x₁ x₂) fun z assoc comm rewrite assoc+comm3 x x₁ x₂ z fun assoc comm = refl

digit-reduce : ∀ {A} (d : Digit A) → (fun : A → A → A) → (z : A) →
      (assoc : Associative fun) → (comm : Commutative fun) →
      reducerDigit fun d z ≡ reducelDigit fun z d
digit-reduce (One x) fun z assoc comm = comm x z
digit-reduce (Two x x₁) fun z assoc comm rewrite assoc+comm2 x x₁ z fun assoc comm = refl
digit-reduce (Three x x₁ x₂) fun z assoc comm rewrite assoc+comm3 x x₁ x₂ z fun assoc comm = refl
digit-reduce (Four x x₁ x₂ x₃) fun z assoc comm rewrite assoc+comm4 x x₁ x₂ x₃ z fun assoc comm = refl


-- (Deep {i} pr m sf) z = pr ⤙′ (m ⤙″ (sf ⤙′ z))
-- (reducerDigit fun) x (reducerFingerTree (reducerNode fun) ft ((reducerDigit fun) x₁ z))
fingertree-reduce : ∀  {A} (ft : FingerTree A) → (fun : A → A → A) → (base : A) →
                  (assoc : Associative fun) → (comm : Commutative fun) →
                  reducerFingerTree fun ft base ≡ reducelFingerTree fun base ft
fingertree-reduce Empty fun z assoc comm = refl
fingertree-reduce (Single x) fun z assoc comm = comm x z
fingertree-reduce (Deep x ft x₁) fun z assoc comm
              rewrite digit-reduce x₁ fun z assoc comm |
                      digit-reduce x fun (reducerFingerTree (reducerNode fun) ft (reducelDigit fun z x₁)) assoc comm = {!   !}

-- this is clearly an issue here. I am thinking of solving the problem by introducing a Node1 constructor and use it
-- to give a result for an associative and commutative reduction function on NodeA
-- reduce-node-new :: (fun : A → A → A) → Node A → Node A → Node A
-- reduce-node-new fun = λ x z. Node1 (fun (reduceNode x) (reduceNode z))
-- this also requires us to rework the reducerFingerTree and reducelFingerTree methods



-- ignore this for now
--    ---------------------------------------------------------------------
-- app3 : ∀ {a} {A : Set a} → FingerTree A → List A → FingerTree A → FingerTree A
-- app3 Empty ts xs      = ts ◁′ xs
-- app3 xs ts Empty      = xs ▷′ ts
-- app3 (Single x) ts xs = x ◁ (ts ◁′ xs)
-- app3 xs ts (Single x) = (xs ▷′ ts) ▷ x
-- app3 (Deep pr₁ m₁ sf₁) ts (Deep pr₂ m₂ sf₂)
--  = Deep pr₁ (app3 m₁ (nodes ((toList⁺⁺ sf₁ ts pr₂))) m₂) sf₂

-- Concatenation itself

-- _⋈_ : ∀ {a} {A : Set a} → FingerTree A → FingerTree A → FingerTree A
-- xs ⋈ ys = app3 xs [] ys
