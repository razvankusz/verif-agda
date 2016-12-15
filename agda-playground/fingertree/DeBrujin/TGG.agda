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

module TGG where

open import Class.Reduce
open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
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


data FingerTree2 {a : Level} (A : Set a) : Set a where
  Empty2  : FingerTree2 A
  Single2 : A → FingerTree2 A
  Deep2   : Digit A → FingerTree2 (Node A) → Digit A → FingerTree2 A

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

infixr 5 _◁₂_
_◁₂_ : ∀ {a} {A : Set a} → A → FingerTree2 A → FingerTree2 A
a ◁₂ Empty2                     = Single2 a
a ◁₂ Single2 b                  = Deep2 (One   a) Empty2 (One b)
a ◁₂ Deep2 (One   b) m sf       = Deep2 (Two   a b) m sf
a ◁₂ Deep2 (Two   b c) m sf     = Deep2 (Three a b c) m sf
a ◁₂ Deep2 (Three b c d) m sf   = Deep2 (Four  a b c d) m sf
a ◁₂ Deep2 (Four  b c d e) m sf = Deep2 (Two   a b) (Node3 c d e ◁₂ m) sf



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
reducerNode _⤙_ (Node2 a b) z   = a ⤙ (b ⤙ z)
reducerNode _⤙_ (Node3 a b c) z = a ⤙ (b ⤙ (c ⤙ z))

reducelNode : ∀ {a} {A : Set a} {B : Set a} → (B → A → B) → B → Node A → B
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

νᵣ : ∀ {a} {A : Set a} {B : Set a} → (A → B → B) → Node A → B → B
νᵣ = reducerNode

νₗ : ∀ {a} {A : Set a} {B : Set a} → (B → A → B) → B → Node A → B
νₗ =  reducelNode

δₗ  : ∀ {a} {A : Set a} {B : Set a} → (B → A → B) → B → Digit A → B
δₗ  = reducelDigit


δᵣ  : ∀ {a} {A : Set a} {B : Set a} → (A → B → B) → Digit A → B → B
δᵣ  = reducerDigit


ρᵣ : ∀ {a} {A : Set a} {B : Set a} → {i : Size} → (A → B → B) → FingerTree A {i} → B → B
ρᵣ {a} {A} {B} {.(↑ i)} f (Empty {i}) z = z
ρᵣ {a} {A} {B} {.(↑ i)} f (Single {i} x) z = f x z
ρᵣ {a} {A} {B} {.(↑ i)} f (Deep {i} pr m sf) z = δᵣ f pr (ρᵣ (νᵣ f) m (δᵣ f sf z))


ρₗ : ∀ {a} {A : Set a} {B : Set a} → {i : Size} → (B → A → B) → B → FingerTree A {i} → B

ρₗ {a} {A} {B} {.(↑ i)} f z (Empty {i}) = z
ρₗ {a} {A} {B} {.(↑ i)} f z (Single {i} x) = f z x
ρₗ {a} {A} {B} {.(↑ i)} f z (Deep {i} pr m sf) = δₗ f (ρₗ (νₗ f) (δₗ f z pr) m ) sf


ρ₂ : ∀ {a} {A : Set a} {B : Set a} → (B → A → B) → B → FingerTree2 A → B
ρ₂ {a} {A} {B} f z (Empty2 ) = z
ρ₂ {a} {A} {B} f z (Single2 x) = f z x
ρ₂ {a} {A} {B} f z (Deep2 pr m sf) = δₗ f (ρ₂ (νₗ f) (δₗ f z pr) m ) sf






reduceInstanceDigit : {a : Level} → reduceClass Digit
reduceInstanceDigit {a} = record {
  reducer = reducerDigit {a};
  reducel = reducelDigit }





-- reducerFingerTree : ∀ {a} {A : Set a} {B : Set a} → {i : Size} →
--                     (A → B → B) → FingerTree A {i} → B → B
-- reducerFingerTree {a} {A} {B} {.(↑ i)} _⤙_ (Empty {i}) z = z
-- reducerFingerTree {a} {A} {B} {.(↑ i)} _⤙_ (Single {i} x) z = x ⤙ z
-- reducerFingerTree {a} {A} {B} {.(↑ i)} _⤙_ (Deep {i} pr m sf) z = pr < ⤙ ] (m ⤙″ (sf < ⤙ ] z))
--   where _⤙′_ : Digit A → B → B
--         _⤙′_  = reducerDigit _⤙_
--         _⤙″_ : FingerTree (Node A) {i} → B → B
--         _⤙″_ = reducerFingerTree (reducerNode _⤙_)

reducelFingerTree : ∀ {a} {A : Set a} {B : Set a} → {i : Size} →
                    (B → A → B) → B → FingerTree A {i} → B
reducelFingerTree {a} {A} {B} {.(↑ i)} _⤚_ z (Empty {i}) = z
reducelFingerTree {a} {A} {B} {.(↑ i)} _⤚_ z (Single {i} x) = z ⤚ x
reducelFingerTree {a} {A} {B} {.(↑ i)} _⤚_ z (Deep {i} pr m sf) = ((z ⤚′ pr) ⤚″ m ) ⤚′ sf
  where _⤚′_ : B → Digit A → B
        _⤚′_  = reducelDigit _⤚_
        _⤚″_ : B → FingerTree (Node A) {i} → B
        _⤚″_ = reducelFingerTree (reducelNode _⤚_)

-- reduceInstanceFingerTree : {a : Level} → reduceClass (λ A → FingerTree A)
-- reduceInstanceFingerTree {a} = record {
--   reducer = reducerFingerTree {a};
--   reducel = reducelFingerTree }

------------------------------------------------------------------------
-- Lifted cons and snoc

_◁′_ : ∀ {a} {F : Set a → Set a} {{r : reduceClass F}} {A : Set a} →
       F A → FingerTree A → FingerTree A
_◁′_ = reducer _◁_

_▷′_ : ∀ {a} {F : Set a → Set a} {{r : reduceClass F}} {A : Set a} →
       FingerTree A → F A → FingerTree A
_▷′_ = reducel _▷_

------------------------------------------------------------------------
-- A few helper functions

toTree : ∀ {a} {F : Set a → Set a} {{r : reduceClass F}} {A : Set a} →
         F A → FingerTree A
toTree s = s ◁′ Empty

head : ∀ {a} {A : Set a} → Digit A → A
head (One a) = a
head (Two a b) = a
head (Three a b c) = a
head (Four a b c d) = a

tail : ∀ {a} {A : Set a} → Digit A → Maybe (Digit A)
tail (One a) = nothing
tail (Two a b) = just (One b)
tail (Three a b c) = just (Two b c)
tail (Four a b c d) = just (Three b c d)

------------------------------------------------------------------------
-- The view, headL and tailL

data ViewL {a : Level} (A : Set a) : Set a where
  nilL : ViewL A
  consL : A → FingerTree A → ViewL A

mutual
  viewL : ∀ {a} {A : Set a} → FingerTree A → ViewL A
  viewL Empty = nilL
  viewL (Single x) = consL x Empty
  viewL (Deep pr m sf) = consL (head pr) (deepL (tail pr) m sf)

  deepL : ∀ {a} {A : Set a} → Maybe (Digit A) →
           FingerTree (Node A) → Digit A → FingerTree A
  deepL (just pr) m sf = Deep pr m sf
  deepL {l} nothing m sf with viewL m
  ...                | nilL = toTree {l} {_} {{reduceInstanceDigit {l}}} {_} sf
  ...                | consL (Node2 a b)   m′ = Deep (Two a b) m′ sf
  ...                | consL (Node3 a b c) m′ = Deep (Three a b c) m′ sf

isEmpty : ∀ {a} {A : Set a} → FingerTree A → Bool
isEmpty x with viewL x
...       | nilL      = true
...       | consL _ _ = false

headL : ∀ {a} {A : Set a} → FingerTree A → Maybe A
headL x with viewL x
...     | nilL      = nothing
...     | consL a _ = just a

tailL : ∀ {a} {A : Set a} → FingerTree A → Maybe (FingerTree A)
tailL x with viewL x
...     | nilL      = nothing
...     | consL _ b = just b

------------------------------------------------------------------------
-- The corresponding views and head + tail on the right side

last : ∀ {a} {A : Set a} → Digit A → A
last (One a)        = a
last (Two a b)      = b
last (Three a b c)  = c
last (Four a b c d) = d

init : ∀ {a} {A : Set a} → Digit A → Maybe (Digit A)
init (One a)        = nothing
init (Two a b)      = just (One b)
init (Three a b c)  = just (Two a b)
init (Four a b c d) = just (Three a b c)

data ViewR {a : Level} (A : Set a) : Set a where
  nilR : ViewR A
  consR : FingerTree A → A → ViewR A

mutual
  viewR : ∀ {a} {A : Set a} → FingerTree A → ViewR A
  viewR Empty = nilR
  viewR (Single x) = consR Empty x
  viewR (Deep pr m sf) = consR (deepR pr m (init sf)) (last sf)

  deepR : ∀ {a} {A : Set a} → Digit A → FingerTree (Node A) →
          Maybe (Digit A) → FingerTree A
  deepR pr m (just sf) = Deep pr m sf
  deepR {l} pr m nothing with viewR m
  ...                | nilR = toTree {l} {_} {{reduceInstanceDigit {l}}} {_} pr
  ...                | consR m′ (Node2 a b)   = Deep pr m′ (Two a b)
  ...                | consR m′ (Node3 a b c) = Deep pr m′ (Three a b c)

headR : ∀ {a} {A : Set a} → FingerTree A → Maybe A
headR x with viewR x
...     | nilR      = nothing
...     | consR _ a = just a

tailR : ∀ {a} {A : Set a} → FingerTree A → Maybe (FingerTree A)
tailR x with viewR x
...     | nilR      = nothing
...     | consR b _ = just b

------------------------------------------------------------------------
-- Helper functions for concatenation

data List⁺ {a} (A : Set a) : Set a where
  [_] : (x : A) → List⁺ A
  _∷_ : (x : A) (xs : List⁺ A) → List⁺ A

data List⁺⁺ {a} (A : Set a) : Set a where
  [_,_] : (x : A) → (y : A) → List⁺⁺ A
  _∷_ : (x : A) (xs : List⁺⁺ A) → List⁺⁺ A

_⁺++_ : ∀ {a} {A : Set a} → List⁺ A → List A → List⁺ A
xs ⁺++ [] = xs
[ x ] ⁺++ (y ∷ ys) = x ∷ ([ y ] ⁺++ ys)
(x ∷ xs) ⁺++ (y ∷ ys) = x ∷ (xs ⁺++ (y ∷ ys))

_⁺++⁺_ : ∀ {a} {A : Set a} → List⁺ A → List⁺ A → List⁺⁺ A
[ x ] ⁺++⁺ [ y ] = [ x , y ]
[ x ] ⁺++⁺ (y ∷ ys) = x ∷ ([ y ] ⁺++⁺ ys)
(x ∷ xs) ⁺++⁺ ys = x ∷ (xs ⁺++⁺ ys)

toList⁺ : ∀ {a} {A : Set a} → Digit A → List⁺ A
toList⁺ (One a)        = [ a ]
toList⁺ (Two a b)      = a ∷ [ b ]
toList⁺ (Three a b c)  = a ∷ b ∷ [ c ]
toList⁺ (Four a b c d) = a ∷ b ∷ c ∷ [ d ]

toList⁺⁺ : ∀ {a} {A : Set a} → Digit A → List A → Digit A → List⁺⁺ A
toList⁺⁺ sf ts pr = ((toList⁺ sf) ⁺++ ts) ⁺++⁺ toList⁺ pr

nodes : ∀ {a} {A : Set a} → List⁺⁺ A → List (Node A)
nodes [ a , b ]           = (Node2 a b) ∷ []
nodes (a ∷ [ b , c ])     = (Node3 a b c) ∷ []
nodes (a ∷ b ∷ [ c , d ]) = (Node2 a b) ∷ (Node2 c d) ∷ []
nodes (a ∷ b ∷ c ∷ xs)    = (Node3 a b c) ∷ (nodes xs)


----------------------------------------------------------------------------
----------------------------------------------------------------------------


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
-- fingertree-reduce : ∀  {A} (ft : FingerTree A) → (fun : A → A → A) → (base : A) →
--                   (assoc : Associative fun) → (comm : Commutative fun) →
--                   reducerFingerTree fun ft base ≡ reducelFingerTree fun base ft
-- fingertree-reduce Empty fun z assoc comm = refl
-- fingertree-reduce (Single x) fun z assoc comm = comm x z
-- fingertree-reduce (Deep x ft x₁) fun z assoc comm
--               rewrite digit-reduce x₁ fun z assoc comm |
--                       digit-reduce x fun (reducerFingerTree (reducerNode fun) ft (reducelDigit fun z x₁)) assoc comm = {!   !}

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


--- tgg

open import Relation.Binary.PropositionalEquality as PropEq
  using (_≡_; _≢_; refl; sym; cong-app; cong; cong₂)
open import Function
open PropEq.≡-Reasoning

data Integer : Set where
  Zero : Integer
  Next : Integer → Integer

add : Integer → Integer → Integer
add Zero y = y
add (Next x) y = Next(add x y)


add-right-identity : ∀ n → add n Zero ≡ n
add-right-identity Zero = refl
--add-right-identity (Next n) = cong Next $ add-right-identity n
add-right-identity (Next n) = (cong Next) (add-right-identity n)

add-suc : ∀ m n → add m (Next n) ≡ Next (add m  n)
add-suc Zero    n = refl
add-suc (Next m) n = cong Next (add-suc m n)

add-comm : ∀ m n → (add m  n) ≡ (add n  m)
add-comm Zero     n = sym $ add-right-identity n
add-comm (Next m) n =
  begin
    add (Next m) n
  ≡⟨ refl ⟩
    Next (add m n)
  ≡⟨ cong Next (add-comm m n) ⟩
    Next (add n m)
  ≡⟨ sym (add-suc n m) ⟩
    add n (Next m)
  ∎

add-comm2 : ∀ m n → (add m n) ≡ (add n m)
add-comm2 Zero n = sym $ add-right-identity n
add-comm2 (Next m) n =
    begin
    add (Next m) n ≡⟨ refl ⟩
    Next (add m n) ≡⟨ cong Next (add-comm m n) ⟩ {!   !}
-- open import Data.Nat using (ℕ; suc; _<_)

--- Single 1
t1 : FingerTree ℕ
t1 = 1 ◁ Empty

--- Deep (One 1) Empty (One 2)
t2 : FingerTree ℕ
t2 = 1 ◁ 2 ◁ Empty

--- Deep (Two 1 2) Empty (One 3)
t3 : FingerTree ℕ
t3 = 1 ◁ 2 ◁ 3 ◁ Empty

--- Deep (Three 1 2 3) Empty (One 4)
t4 : FingerTree ℕ
t4 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ Empty

--- Deep (Four 1 2 3 4) Empty (One 5)
t5 : FingerTree ℕ
t5 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty


--- Deep (Two 1 2) (Single (Node3 3 4 5)) (One 6)
t6 : FingerTree ℕ
t6 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ Empty


--- Deep (Three 1 2 3) (Single (Node3 4 5 6)) (One 7)
t7 : FingerTree ℕ
t7 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ Empty


--- Deep (Four 1 2 3 4) (Single (Node3 5 6 7)) (One 8)
t8 : FingerTree ℕ
t8 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ Empty


--- Deep (Two 1 2)
---      (Deep (One (Node3 3 4 5)) Empty (One (Node3 6 7 8)))
---      (One 9)
t9 : FingerTree ℕ
t9 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ Empty


--- Deep (Three 1 2 3)
---      (Deep (One (Node3 4 5 6)) Empty (One (Node3 7 8 9)))
---      (One 10)
t10 : FingerTree ℕ
t10 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ Empty


--- Deep (Four 1 2 3 4)
---      (Deep (One (Node3 5 6 7)) Empty (One (Node3 8 9 10)))
---      (One 11)
t11 : FingerTree ℕ
t11 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ Empty


--- Deep (Two 1 2)
 ---     (Deep (Two (Node3 3 4 5) (Node3 6 7 8))
 ---            Empty
 ---            (One (Node3 9 10 11)))
 ---     (One 12)
t12 : FingerTree ℕ
t12 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ Empty

--- Deep (Three 1 2 3)
---      (Deep (Two (Node3 4 5 6) (Node3 7 8 9))
---            Empty
---            (One (Node3 10 11 12)))
---      (One 13)
t13 : FingerTree ℕ
t13 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ Empty

--- Deep (Four 1 2 3 4)
---      (Deep (Two (Node3 5 6 7) (Node3 8 9 10))
---            Empty
---            (One (Node3 11 12 13))))
---      (One 14)
t14 : FingerTree ℕ
t14 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ Empty

--- Deep (Two 1 2)
---      (Deep (Three (Node3 3 4 5) (Node3 6 7 8) (Node3 9 10 11))
---            Empty
---            (One (Node3 12 13 14)))
---      (One 15)
t15 : FingerTree ℕ
t15 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ Empty

--- Deep (Three 1 2 3)
---      (Deep (Three (Node3 4 5 6) (Node3 7 8 9) (Node3 10 11 12))
---            Empty
---            (One (Node3 13 14 15)))
---      (One 16)
t16 : FingerTree ℕ
t16 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ 16 ◁ Empty

-- Deep (Four 1 2 3 4)
--      (Deep (Three (Node3 5 6 7) (Node3 8 9 10) (Node3 11 12 13))
--             Empty
--            (One (Node3 14 15 16)))
--      (One 17)
t17 : FingerTree ℕ
t17 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ 16 ◁ 17 ◁ Empty

t18 : FingerTree ℕ
t18 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ 16 ◁ 17 ◁ 18 ◁ Empty


t19 : FingerTree ℕ
t19 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ 16 ◁ 17 ◁ 18 ◁ 19 ◁ Empty

-- Deep (Four 1 2 3 4)
--      (Deep (Four (Node3 5 6 7) (Node3 8 9 10) (Node3 11 12 13) (Node3 14 15 16))
--            Empty
--            (One (Node3 17 18 19)))
--      (One 20)
t20 : FingerTree ℕ
t20 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁ 11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ 16 ◁ 17 ◁ 18 ◁ 19 ◁ 20 ◁ Empty

-- Deep (Two 1 2)
--      (Deep (Two (Node3 3 4 5) (Node3 6 7 8))
--            (Deep (One (Node3 (Node3 9 10 11) (Node3 12 13 14) (Node3 15 16 17)))
--                  Empty
--                 (One (Node3 (Node3 18 19 20) (Node3 21 22 23) (Node3 24 25 26))))
--            (One (Node3 27 28 29)))
--      (One 30)
t30 : FingerTree ℕ
t30 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 6 ◁ 7 ◁ 8 ◁ 9 ◁ 10 ◁
      11 ◁ 12 ◁ 13 ◁ 14 ◁ 15 ◁ 16 ◁ 17 ◁ 18 ◁ 19 ◁ 20 ◁
      21 ◁ 22 ◁ 23 ◁ 24 ◁ 25 ◁ 26 ◁ 27 ◁ 28 ◁ 29 ◁ 30 ◁
      Empty

-- Deep (One 1)
--      (Deep (One (Node3 2 3 4))
--            (Deep (One (Node3 (Node3 5 6 7) (Node3 8 9 10) (Node3 11 12 13)))
--                   Empty
--                   (One (Node3 (Node3 14 15 16) (Node3 17 18 19) (Node3 20 21 22))))
--             (Two (Node3 23 24 25) (Node3 26 27 28)))
--      (Two 29 30)
s30 : FingerTree ℕ
s30 = Empty ▷
      1 ▷ 2 ▷ 3 ▷ 4 ▷ 5 ▷ 6 ▷ 7 ▷ 8 ▷ 9 ▷ 10 ▷
      11 ▷ 12 ▷ 13 ▷ 14 ▷ 15 ▷ 16 ▷ 17 ▷ 18 ▷ 19 ▷ 20 ▷
      21 ▷ 22 ▷ 23 ▷ 24 ▷ 25 ▷ 26 ▷ 27 ▷ 28 ▷ 29 ▷ 30




-- Deep (One 1)
--      (Deep (One (Node3 1 1 1))
--            (Deep (One (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1)))
--                  (Deep (One
--                             (Node3 (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))
--                                    (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))
--                                    (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))))
--                        Empty
--                        (One
--                            (Node3 (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))
--                                   (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))
--                                   (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1)))))
--                   (Two
--                        (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))
--                        (Node3 (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1))))
--             (Four (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1) (Node3 1 1 1)))
--      (Three 1 1 1)
s100 = Empty ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷
      1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1 ▷ 1

test : ℕ
test = ρₗ _+_ 0 s100


w100 : FingerTree2 ℕ
w100 = 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂
      1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ 1 ◁₂ Empty2


test2 : ℕ
test2 = ρ₂ _+_ 0 w100

open import Data.Nat.Properties.Simple



aux2 : ∀ (m b : ℕ)  → (sf : Digit ℕ)  → δₗ _+_ (m + b) sf ≡ m + (δₗ _+_ b sf)
aux2 = {!   !}

aux1 : ∀ (m b : ℕ)  → (sf : Digit ℕ)  → (t : FingerTree (Node ℕ))  → δₗ _+_ (ρₗ (νₗ _+_) (m + b) t) sf ≡ m + (δₗ _+_ (ρₗ (νₗ _+_) b t) sf)
aux1 m b sf Empty =
  begin
    δₗ _+_ (ρₗ (νₗ _+_) (m + b) Empty) sf
  ≡⟨ refl ⟩
    δₗ _+_ (m + b) sf
  ≡⟨ aux2 m b sf ⟩
    m + (δₗ _+_ b sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) b Empty) sf)
  ∎
aux1 m b sf (Single n) =
  begin
    δₗ _+_ (ρₗ (νₗ _+_) (m + b) (Single n)) sf
  ≡⟨ refl ⟩
    δₗ _+_ ((νₗ _+_) (m + b) n) sf
  ≡⟨ {! !} ⟩
    m + (δₗ _+_ ((νₗ _+_) b n) sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) b (Single n)) sf)
 ∎
aux1 m b sf (Deep pr t' sf') =
  begin
    δₗ _+_ (ρₗ (νₗ _+_) (m + b) (Deep pr t' sf')) sf
  ≡⟨ refl ⟩
    δₗ _+_ (δₗ (νₗ _+_) (ρₗ (νₗ (νₗ _+_)) (δₗ (νₗ _+_) (m + b) pr) t' ) sf') sf
--         δₗ     _+_  (ρₗ    (νₗ _+_)              (m + b)     t)        sf
  ≡⟨ {! !} ⟩
--  m + (δₗ _+_             (ρₗ    (νₗ _+_)              b     t)        sf)
    m + (δₗ _+_ (δₗ (νₗ _+_) (ρₗ (νₗ (νₗ _+_)) (δₗ (νₗ _+_) b pr) t' ) sf') sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) b (Deep pr t' sf')) sf)
 ∎
---

aux2v2 : ∀ {a : Level} {A : Set a} (m b : A)  → (sf : Digit A)  → (f : A → A → A) → δₗ f (f m b) sf ≡ f m (δₗ f b sf)
aux2v2 = {! !}

aux1v2 : ∀ {a : Level} {A : Set a} (t : FingerTree (Node A)) (m b : A) (sf : Digit A) → (f : A → A → A) →
            δₗ f (ρₗ (νₗ f) (f m b) t) sf ≡ f m (δₗ f (ρₗ (νₗ f) b t) sf)
aux1v2 Empty m b sf f =
  begin
    δₗ f (ρₗ (νₗ f) (f m b) Empty) sf
  ≡⟨ refl ⟩
    δₗ f (f m b) sf
  ≡⟨ aux2v2 m b sf f ⟩
    f m (δₗ f b sf)
  ≡⟨ refl ⟩
    f m (δₗ f (ρₗ (νₗ f) b Empty) sf)
  ∎
aux1v2 (Single n) m b sf f =
  begin
    δₗ f (ρₗ (νₗ f) (f m b) (Single n)) sf
  ≡⟨ refl ⟩
    δₗ f ((νₗ f) (f m b) n) sf
  ≡⟨ {! !} ⟩
    f m (δₗ f ((νₗ f) b n) sf)
  ≡⟨ refl ⟩
    f m (δₗ f (ρₗ (νₗ f) b (Single n)) sf)
 ∎
aux1v2 (Deep pr t' sf') m b sf f =
  begin
    δₗ f (ρₗ (νₗ f) (f m b) (Deep pr t' sf')) sf
  ≡⟨ refl ⟩
    δₗ f (δₗ (νₗ f) (ρₗ (νₗ (νₗ f)) (δₗ (νₗ f) (f m b) pr) t' ) sf') sf
---      δₗ     f  (ρₗ    (νₗ f)            (f m b)     t  ) sf'
  ≡⟨ {! !} ⟩
--  f m (δₗ f           (ρₗ (νₗ    f)           b      t  ) sf )
    f m (δₗ f (δₗ (νₗ f) (ρₗ (νₗ (νₗ f)) (δₗ (νₗ f) b pr) t' ) sf') sf)
  ≡⟨ refl ⟩
    f m (δₗ f (ρₗ (νₗ f) b (Deep pr t' sf')) sf)
 ∎



lemma : ∀ (t : FingerTree ℕ)  → (m : ℕ)  → ρₗ _+_ 0 (m ◁ t) ≡ m + (ρₗ _+_ 0 t)
lemma Empty m      =
  begin
    ρₗ _+_ 0 (m ◁ Empty)
  ≡⟨ refl ⟩
    ρₗ _+_ 0 (Single m)
  ≡⟨ refl ⟩
    m
  ≡⟨ sym $ +-right-identity m ⟩
    m + 0
  ≡⟨ refl ⟩
    m + (ρₗ _+_ 0 Empty)
  ∎
lemma (Single n) m = refl
lemma (Deep (One b) t' sf) m =
  begin
    ρₗ _+_ 0 (m ◁ (Deep (One b) t' sf))
  ≡⟨ refl ⟩
    ρₗ _+_ 0 (Deep (Two m b) t' sf)
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (Two m b)) t' ) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) ((0 + m) + b) t' ) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (m + b) t') sf
  ≡⟨ aux1  m b sf t' ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) b t') sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (0 + b) t' ) sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (One b)) t' ) sf)
  ≡⟨ refl ⟩
    m + (ρₗ _+_ 0 (Deep (One b) t' sf))
  ∎
lemma (Deep (Two b c) t' sf) m =
  begin
    ρₗ _+_ 0 (m ◁ (Deep (Two b c) t' sf))
  ≡⟨ refl ⟩
    ρₗ _+_ 0 (Deep (Three m b c) t' sf)
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (Three m b c)) t' ) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (((0 + m) + b) + c) t' ) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) ((m + b) + c) t') sf
  ≡⟨ cong-app (cong (δₗ _+_) (cong-app (cong (ρₗ (νₗ _+_)) (+-assoc m b c)) t')) sf ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (m + (b + c)) t') sf
  ≡⟨ aux1  m (b + c) sf t' ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (b + c) t') sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) ((0 + b) + c) t' ) sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (Two b c)) t' ) sf)
  ≡⟨ refl ⟩
    m + (ρₗ _+_ 0 (Deep (Two b c) t' sf))
  ∎
lemma (Deep (Three b c d) t' sf) m =
  begin
    ρₗ _+_ 0 (m ◁ (Deep (Three b c d) t' sf))
  ≡⟨ refl ⟩
    ρₗ _+_ 0 (Deep (Four m b c d) t' sf)
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (Four m b c d)) t' ) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) ((((0 + m) + b) + c) + d) t' ) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (((m + b) + c) + d) t') sf
  ≡⟨ cong-app (cong (δₗ _+_) (cong-app (cong (ρₗ (νₗ _+_)) (cong₂ _+_ (+-assoc m b c) refl)) t')) sf ⟩
    δₗ _+_ (ρₗ (νₗ _+_) ((m + (b + c)) + d) t') sf
  ≡⟨ cong-app (cong (δₗ _+_) (cong-app (cong (ρₗ (νₗ _+_)) (+-assoc m (b + c) d)) t')) sf ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (m + ((b + c) + d)) t') sf
  ≡⟨ aux1  m ((b + c) + d) sf t' ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) ((b + c) + d) t') sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (((0 + b) + c) + d) t' ) sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (Three b c d)) t' ) sf)
  ≡⟨ refl ⟩
    m + (ρₗ _+_ 0 (Deep (Three b c d) t' sf))
  ∎
lemma (Deep (Four b c d e) t' sf) m =
  begin
    ρₗ _+_ 0 (m ◁ (Deep (Four b c d e) t' sf))
  ≡⟨ refl ⟩
    ρₗ _+_ 0 (Deep (Two m b) ((Node3 c d e) ◁ t') sf)
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 ((Two m b))) ((Node3 c d e) ◁ t')) sf
  ≡⟨ refl ⟩
    δₗ _+_ (ρₗ (νₗ _+_) ((0 + m) + b) ((Node3 c d e) ◁ t')) sf
  ≡⟨ refl ⟩
--- ρₗ _+_ 0 (m ◁ t) ≡ m + (ρₗ _+_ 0 t)
    δₗ _+_ (ρₗ (νₗ _+_) (m + b) ((Node3 c d e) ◁ t')) sf  --- HERE
  ≡⟨ {!  !} ⟩
--    δₗ _+_ (ρₗ (νₗ _+_) (m + b) ((νₗ _+_ 0 (Node3 c d e)) + (ρₗ _+_ 0 t'))) sf
--  ≡⟨ {!!} ⟩
    δₗ _+_ (ρₗ (νₗ _+_) (m + (((b + c) + d) + e)) t') sf
  ≡⟨ aux1  m (((b + c) + d) + e) sf t' ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (((b + c) + d) + e) t') sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) ((((0 + b) + c) + d) + e) t' ) sf)
  ≡⟨ refl ⟩
    m + (δₗ _+_ (ρₗ (νₗ _+_) (δₗ _+_ 0 (Four b c d e)) t' ) sf)
  ≡⟨ refl ⟩
    m + (ρₗ _+_ 0 (Deep (Four b c d e) t' sf))
  ∎





-- Deep (Two 30 29)
--      (Deep (Two (Node3 28 27 26) (Node3 25 24 23))
--            (Deep (One (Node3 (Node3 22 21 20) (Node3 19 18 17) (Node3 16 15 14)))
--                  Empty
---                 (One (Node3 (Node3 13 12 11) (Node3 10 9 8) (Node3 7 6 5))))
--             (One (Node3 4 3 2)))
--      (One 1)
u30 : FingerTree ℕ
u30 = 30 ◁ 29 ◁ 28 ◁ 27 ◁ 26 ◁ 25 ◁ 24 ◁ 23 ◁ 22 ◁ 21 ◁
      20 ◁ 19 ◁ 18 ◁ 17 ◁ 16 ◁ 15 ◁ 14 ◁ 13 ◁ 12 ◁ 11 ◁
      10 ◁ 9 ◁ 8 ◁ 7 ◁ 6 ◁ 5 ◁ 4 ◁ 3 ◁ 2 ◁ 1 ◁
      Empty

-- Deep (One 1) Empty (One 2)
v1 : FingerTree ℕ
v1 = (1 ◁ Empty) ▷ 2

-- Deep (One 2) Empty (One 1)
v2 : FingerTree ℕ
v2 = 2 ◁ (Empty ▷ 1)

-- Deep (Two 3 1) Empty (Two 2 4)
v3 : FingerTree ℕ
v3 = (3 ◁ ((1 ◁ Empty) ▷ 2)) ▷ 4

-- Deep (Two 4 2) Empty (Two 1 3)
v4 : FingerTree ℕ
v4 = 4 ◁ ((2 ◁ (Empty ▷ 1)) ▷ 3)
