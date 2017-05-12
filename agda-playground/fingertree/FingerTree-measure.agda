{-# OPTIONS --sized-types #-}
module FingerTree-measure where

open import Class.Reduce
open import Level using (Level)
open import Data.Maybe
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_; length; tails)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false; if_then_else_)
open import Function using(case_of_)
open import Size

open import Relation.Nullary.Negation using (contraposition)
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

------------------------------------------------------------------------

data Node {a : Level} (A : Set a)(V : Set a ) : Set a where
  Node2 : V → A → A → Node A V
  Node3 : V → A → A → A → Node A V

data Digit {a : Level} (A : Set a): Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A

data FingerTree {a : Level} (A : Set a)(V : Set a ) : {i : Size} → Set a where
  Empty  : ∀ {i : Size} → FingerTree A V {↑ i}
  Single : ∀ {i : Size} → A → FingerTree A V {↑ i}
  Deep   : ∀ {i : Size} → V → Digit A → FingerTree (Node A V) V {i} → Digit A →
           FingerTree A V {↑ i}
open import AlgebraStructures

open Measured {{...}} public
open Monoid {{...}} public

-- REDUCTIONS --------------------------------------------------------------


reducer-node : ∀ {a}{A : Set a}{V : Set a }{B : Set a} → (f : A → B → B) → (Node A V) → B → B
reducer-node f (Node2 x x₁ x₂) z = f x₁ (f x₂ z)
reducer-node f (Node3 x x₁ x₂ x₃) z = f x₁ (f x₂ (f x₃ z))

reducel-node : ∀ {a}{A : Set a}{V : Set a }{B : Set a} → (f : B → A → B) → B → (Node A V) → B
reducel-node f z (Node2 x x₁ x₂) = f (f z x₁) x₂
reducel-node f z (Node3 x x₁ x₂ x₃) = f (f (f z x₁) x₂) x₃

instance reduceinstance-node : ∀ {a}{V : Set a } → reduceClass (λ A → Node A V)
reduceinstance-node =
  record
    { reducer = reducer-node ;
      reducel = reducel-node
    }

reducer-digit : ∀ {a}{A : Set a}{B : Set a} → (f : A → B → B) → (Digit A) → B → B
reducer-digit f (One x) z = f x z
reducer-digit f (Two x x₁) z = f x (f x₁ z)
reducer-digit f (Three x x₁ x₂) z = f x (f x₁ (f x₂ z))
reducer-digit f (Four x x₁ x₂ x₃) z = f x (f x₁ (f x₂ (f x₃ z)))

reducer-maybe-digit :  ∀ {a}{A : Set a}{B : Set a} → (f : A → B → B) → Maybe (Digit A) → B → B
reducer-maybe-digit f (just x) z = reducer-digit f x z
reducer-maybe-digit f nothing z = z

reducel-digit : ∀ {a}{A : Set a}{B : Set a} → (f : B → A → B) → B → (Digit A) → B
reducel-digit f z (One x) = f z x
reducel-digit f z (Two x x₁) = f (f z x) x₁
reducel-digit f z (Three x x₁ x₂) = f (f (f z x) x₁) x₂
reducel-digit f z (Four x x₁ x₂ x₃) = f ( f ( f (f z x) x₁) x₂) x₃

reducel-maybe-digit : ∀ {a}{A : Set a}{B : Set a} → (f : B → A → B) → B → Maybe (Digit A) → B
reducel-maybe-digit f z (just x) = reducel-digit f z x
reducel-maybe-digit f z nothing = z

instance reduceinstance-digit : ∀ {a : Level} → reduceClass {a} Digit
reduceinstance-digit =
  record {
    reducer = reducer-digit ;
    reducel = reducel-digit
  }

instance reduceinstance-maybe-digit : ∀ {a : Level} → reduceClass {a} (λ A → Maybe (Digit A))
reduceinstance-maybe-digit = record
  { reducer = reducer-maybe-digit ;
    reducel = reducel-maybe-digit }


reducer-ft : ∀ {a}{A : Set a}{V : Set a }{B : Set a} → (f : A → B → B) → FingerTree A V → B → B
reducer-ft f Empty z = z
reducer-ft f (Single x) z = f x z
reducer-ft {_}{_}{V} f (Deep x x₁ ft x₂) z = fd x₁
            ((reducer-ft {V = V} (reducer-node {V = V} f)) ft (fd x₂ z))
  where
    fd = reducer-digit f
    fn = (reducer-ft {V = V} (reducer-node {V = V} f))

reducel-ft : ∀ {a}{A : Set a}{V : Set a }{B : Set a} → (f : B → A → B) → B → FingerTree A V → B
reducel-ft f z Empty = z
reducel-ft f z (Single x) = f z x
reducel-ft {_}{_}{V} f z (Deep x x₁ ft x₂) = fd
            ((reducel-ft {V = V} (reducel-node {V = V} f)) (fd z x₁) ft) x₂
  where
    fd = reducel-digit f

instance reduceinstance-ft : ∀ {a}{V : Set a } → reduceClass (λ A → FingerTree A V)
reduceinstance-ft =
      record
        { reducer = reducer-ft ;
          reducel = reducel-ft
        }

-- SMART CONSTRUCTORS -------------------------------------------------------

-- These constructors also perform the computation required to update the annotation -- or measure
-- of each element. If throughout the code we replace the lowercase constructors with their
-- uppercase equivalents, we obtain the implementation for the initial datastructure.

-- However, the datastructure with annotation helps this project both by adding novelty to the
-- previous Agda implementation and by allowing development of higher level data structures

node2 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y

node3 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄  → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z

measure-node : {a : Level} {A : Set a} {V : Set a } → Node A V → V
measure-node (Node2 x x₁ x₂) = x
measure-node (Node3 x x₁ x₂ x₃) = x

measure-digit : {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Digit A → V
measure-digit (One x) = ∥ x ∥
measure-digit (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
measure-digit (Three x x₁ x₂) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥
measure-digit (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥

measure-tree : {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V → V
measure-tree Empty = ε
measure-tree (Single x) = ∥ x ∥
measure-tree (Deep v x ft x₁) = v

instance uplift : ∀ {a}{A : Set a}{V : Set a } ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

deep : ∀ {a i} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (pr : Digit A) → (ft : FingerTree (Node A V) V {i}) → (sf : Digit A) →
  FingerTree A V {↑ i}
deep pr ft sf = Deep ((measure-digit pr) ∙ ((measure-tree ft) ∙ (measure-digit sf))) pr ft sf

-- -- CONS -------------------------------------------------------------

infixr 5 _◁_
_◁_ : ∀ {a i} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → FingerTree A V {i} → FingerTree A V {↑ i}
_◁_ a Empty = Single a
_◁_ a (Single b) = deep (One a) Empty (One b)
_◁_ a (Deep v (One b) ft sf) = deep (Two a b) ft sf
_◁_ a (Deep v (Two b c) ft sf) = deep (Three a b c) ft sf
_◁_ a (Deep v (Three b c d) ft sf) = deep (Four a b c d) ft sf
_◁_ a (Deep v (Four b c d e) ft sf) = deep (Two a b) ((node3 c d e) ◁ ft) sf

-- -- TO TREE ---------------------------------------------------------
--
-- toTree : ∀ {a i}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
--         {F : Set a → Set a} ⦃ r : reduceClass {a} F ⦄ → F A → FingerTree A V {i}
-- toTree s = reducer _◁_ s Empty

-- -- To List ----------------------------------------------------------

-- is an instance of the reducer but explicitly so makes proofs easier
toList-dig : ∀{a}{A : Set a} → Digit A → List A
toList-dig (One x) = x ∷ []
toList-dig (Two x x₁) = x ∷ x₁ ∷ []
toList-dig (Three x x₁ x₂) = x ∷ x₁ ∷ x₂ ∷ []
toList-dig (Four x x₁ x₂ x₃) = x ∷ x₁ ∷ x₂ ∷ x₃ ∷ []

toList-node : ∀{a}{A : Set a}{V : Set a } → Node A V → List A
toList-node (Node2 x x₁ x₂) = x₁ ∷ x₂ ∷ []
toList-node (Node3 x x₁ x₂ x₃) = x₁ ∷ x₂ ∷ x₃ ∷ []

flatten-list : ∀{a}{A : Set a}{V : Set a } → List (Node A V) → List A
flatten-list [] = []
flatten-list (x ∷ xs) = (toList-node x) ++ (flatten-list xs)

toList-ft : ∀ {a}{A : Set a}{V : Set a } → FingerTree A V → List A
toList-ft Empty = []
toList-ft (Single x) = x ∷ []
toList-ft (Deep x x₁ ft x₂) = (toList-dig x₁) ++ (flatten-list (toList-ft ft)) ++ (toList-dig x₂)


-- -- VIEW FROM THE LEFT -----------------------------------------------

-- the head and tail operations on digits
head-dig : ∀ {a} {A : Set a} → Digit A → A
head-dig (One x) = x
head-dig (Two x x₁) = x
head-dig (Three x x₁ x₂) = x
head-dig (Four x x₁ x₂ x₃) = x

tail-dig : ∀ {a} {A : Set a} → Digit A → Maybe (Digit A)
tail-dig (One x) = nothing
tail-dig (Two x x₁) = just (One x₁)
tail-dig (Three x x₁ x₂) = just (Two x₁ x₂)
tail-dig (Four x x₁ x₂ x₃) = just (Three x₁ x₂ x₃)

data ViewL {a}(A : Set a)(S : Set a) : {i : Size} → Set a where
  NilL : ∀ {i : Size} → ViewL A S {↑ i}
  ConsL : ∀ {i : Size} → A → S → ViewL A S {↑ i}

mutual
  viewL : ∀ {a}{i : Size}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        FingerTree A V {i} → ViewL A (FingerTree A V) {i}
  viewL Empty = NilL
  viewL (Single x) = ConsL x Empty
  viewL (Deep x pr ft sf) = ConsL (head-dig pr) (deepL (tail-dig pr) ft sf)

  deepL : ∀ {a i} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        Maybe (Digit A) → FingerTree (Node A V) V {i} → Digit A → FingerTree A V {↑ i}
  deepL (just x) ft sf = deep x ft sf
  deepL nothing ft sf with viewL ft
  deepL nothing ft sf | NilL = toTree sf
  deepL nothing ft sf | ConsL (Node2 x x₁ x₂) x₃ = deep (Two x₁ x₂) x₃ sf
  deepL nothing ft sf | ConsL (Node3 x x₁ x₂ x₃) x₄ = deep (Three x₁ x₂ x₃) x₄ sf

  isEmpty : ∀ {a}{A : Set a}{V : Set a }⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            FingerTree A V → Bool
  isEmpty ft with viewL ft
  isEmpty ft | NilL = true
  isEmpty ft | ConsL _ _ = false

  headL : ∀ {a}{A : Set a}{V : Set a }⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            FingerTree A V → Maybe A
  headL ft with viewL ft
  headL ft | NilL = nothing
  headL ft | ConsL x _ = just x

  tailL : ∀ {a}{A : Set a}{V : Set a }⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            FingerTree A V → Maybe (FingerTree A V)
  tailL ft with viewL ft
  tailL ft | NilL = nothing
  tailL ft | ConsL x x₁ = just x₁

-- ------ VIEW FROM THE RIGHT ------------------------------------------------

headr-dig : ∀ {a} {A : Set a} → Digit A → A
headr-dig (One x) = x
headr-dig (Two x x₁) = x₁
headr-dig (Three x x₁ x₂) = x₂
headr-dig (Four x x₁ x₂ x₃) = x₃

tailr-dig : ∀ {a} {A : Set a} → Digit A → Maybe (Digit A)
tailr-dig (One x) = nothing
tailr-dig (Two x x₁) = just (One x)
tailr-dig (Three x x₁ x₂) = just (Two x x₁)
tailr-dig (Four x x₁ x₂ x₃) = just (Three x x₁ x₂)

data ViewR {a}(A : Set a)(S : {j : Size} → Set a) : {i : Size} → Set a where
  NilR : ∀ {i} → ViewR A S {i}
  ConsR : ∀ {i} → A → S {i} → ViewR A S {↑ i}

mutual
  viewR : ∀ {a}{i : Size}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        FingerTree A V {i} → ViewR A (FingerTree A V) {i}
  viewR Empty = NilR
  viewR (Single x) = ConsR x Empty
  viewR (Deep x pr ft sf) = ConsR (headr-dig sf) (deepR pr ft (tailr-dig sf))


  deepR : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        Digit A → FingerTree (Node A V) V → Maybe (Digit A) → FingerTree A V
  deepR pr ft (just x) = deep pr ft x
  deepR pr ft nothing with viewR ft
  deepR pr ft nothing | NilR = toTree pr
  deepR pr ft nothing | ConsR (Node2 x x₁ x₂) x₃ = deep pr x₃ (Two x₁ x₂)
  deepR pr ft nothing | ConsR (Node3 x x₁ x₂ x₃) x₄ = deep pr x₄ (Three x₁ x₂ x₃)


-- -- -- SPLITING ---------------------------------------------

-- Splitting referes to splitting a datastructures in two parts plus the element at which
-- the datastructure has split -- we use this to split a finger at the point where the cumulative 'sum'
-- of the elements until that point fails to satisfy some property p


data Split {a} (F : Set a) (A : Set a) : Set a where
  split : F → A → F → Split F A


toDigit : ∀ {a} {A : Set a} {V : Set a } → Node A V → Digit A
toDigit (Node2 x x₁ x₂) = Two x₁ x₂
toDigit (Node3 x x₁ x₂ x₃) = Three x₁ x₂ x₃


splitDigit : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (p : V → Bool) → V → Digit A → Split (Maybe (Digit A)) A
splitDigit p i (One x) = split nothing x nothing
splitDigit p i (Two x x₁) =
  if (p i) then
    (split nothing x (just (One x₁)))
  else if (p (i ∙ ∥ x ∥)) then
    (split nothing x (just (One x₁)))
  else
    (split (just (One x)) x₁ nothing)
splitDigit p i (Three x x₁ x₂) =
  if (p i) then
    (split nothing x (just (Two x₁ x₂)))
  else if (p (i ∙ ∥ x ∥)) then
    (split nothing x (just (Two x₁ x₂)))
  else if (p (i ∙ ∥ x ∥ ∙ ∥ x₁ ∥) ) then
    split (just (One x)) x₁ (just (One x₂))
  else
    split (just (Two x x₁)) x₂ nothing
splitDigit p i (Four x x₁ x₂ x₃) =
  if (p i) then
    (split nothing x (just (Three x₁ x₂ x₃)))
  else if (p (i ∙ ∥ x ∥)) then
    (split nothing x (just (Three x₁ x₂ x₃)))
  else if (p (i ∙ ∥ x ∥ ∙ ∥ x₁ ∥)) then
    split (just (One x)) x₁ (just (Two x₂ x₃))
  else if (p (i ∙ ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥)) then
    split (just (Two x x₁)) x₂ (just (One x₃))
  else
    split (just (Three x x₁ x₂)) x₃ nothing

data notEmpty {a} {A : Set a}{V : Set a} : FingerTree A V → Set a where
  nempty : ∀ (ft : FingerTree A V) → (ft ≢ Empty) → notEmpty ft

-- notEmpty :  ∀ {a} {A : Set a} {V : Set a } → FingerTree A V → Bool
-- notEmpty Empty = false
-- notEmpty (Single x) = true
-- notEmpty (Deep x x₁ ft x₂) = true

-- if the value of p x changes after passing through the ft, then ft can't be empty
struct-lemma1 : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
           (p : V → Bool) → (x : V) → (ft : FingerTree A V) → (measure-tree ft ≡ ε) →
           (p x ≡ p (x ∙ (measure-tree ft)))
struct-lemma1 p x ft pr =
  begin
    p x
  ≡⟨ cong p ( sym (ε-right x) ) ⟩
    p (x ∙ ε)
  ≡⟨ cong (λ t → p (x ∙ t)) (sym pr) ⟩
    p (x ∙ (measure-tree ft))
  ∎

measure-lemma1 :  ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
           (ft : FingerTree A V) → (ft ≡ Empty) → (measure-tree ft ≡ ε)
measure-lemma1 .Empty refl = refl

measure-lemma2 :  ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
           (ft : FingerTree A V) → (measure-tree ft ≢ ε) → (ft ≢ Empty)
measure-lemma2 ft neg = (contraposition(measure-lemma1 ft) neg)

struct-lemma2 : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
           (p : V → Bool) → (x : V) → (ft : FingerTree A V) → (p x ≢ p (x ∙ (measure-tree ft))) → (measure-tree ft ≢ ε)
struct-lemma2 p x ft = contraposition (struct-lemma1 p x ft)

neq-bool-lemma0 : ∀ (p : Bool) → (q : Bool) → (p ≡ false) → (q ≡ true) → (p ≢ q)
neq-bool-lemma0 .false .true refl refl = λ ()

struct-lemma3 : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
           (p : V → Bool) → (x : V) → (ft : FingerTree A V) → (p x ≡ false) → (p (x ∙ (measure-tree ft)) ≡ true) → (ft ≢ Empty)
struct-lemma3 p x ft p1 p2 = measure-lemma2 ft (struct-lemma2 p x ft (neq-bool-lemma0 (p x) (p (x ∙ measure-tree ft)) p1 p2))


mutual

  splitTree1 : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            (p : V → Bool) → (i : V) → (Digit A) → (FingerTree (Node A V) V) → (Digit A) → Split (FingerTree A V) A
  splitTree1 p i pr ft sf with splitDigit p i pr
  splitTree1 p i pr ft sf | split l x r = split (toTree l) x (deepL r ft sf)

  splitTree2 : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            (p : V → Bool) → (i : V) → (Digit A) → (FingerTree (Node A V) V) → (Digit A) → Split (FingerTree A V) A
  splitTree2 p i pr ft sf with splitDigit p i sf
  splitTree2 p i pr ft sf | split l x r = split (deepR pr ft l) x (toTree r)

  splitTree3 : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            (p : V → Bool) → (i : V) → (pr : Digit A) → (ft : FingerTree (Node A V) V) → (Digit A) →
            (p (i ∙ (measure-digit pr)) ≡ false) → (p ((i ∙ (measure-digit pr)) ∙ (measure-tree ft)) ≡ true) → Split (FingerTree A V) A
  splitTree3 p i pr ft sf prf1 prf2 with split-lemma5 p (i ∙ (measure-digit pr)) ft (struct-lemma3 p (i ∙ (measure-digit pr)) ft prf1 prf2) | splitTree p (i ∙ (measure-digit pr)) ft |
                                                                                                                inspect (λ x → (splitTree x (i ∙ (measure-digit pr)) ft)) p
  splitTree3 p i pr ft sf prf1 prf2 | slemma | just (split ml mx mr) | [ eq ] with splitDigit p (i ∙ (measure-digit pr) ∙ (measure-tree ml)) (toDigit mx)
  ... | split l x r = split (deepR pr ml l) x (deepL r mr sf)
  splitTree3 p i pr ft sf prf1 prf2 | slemma | nothing | [ eq ] with slemma eq
  splitTree3 p i pr ft sf prf1 prf2 | slemma | nothing | [ eq ] | ()
        --
  -- splitTree3 p i pr ft sf prf1 prf2 | just (split ml mx mr) | strlemma with splitDigit p (i ∙ (measure-digit pr) ∙ (measure-tree ml)) (toDigit mx)
  -- splitTree3 p i pr ft sf prf1 prf2 | just (split ml mx mr) | strlemma | split l x r = split (deepR pr ml l) x (deepL r mr sf)
  --

  splitTree4 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            (p : V → Bool) → (i : V) → (pr : Digit A) → (ft : FingerTree (Node A V) V) → (sf : Digit A) →
            (vpr : Bool) → (vpr ≡ p (i ∙ (measure-digit pr))) →
            (vft : Bool) → (vft ≡ p ((i ∙ measure-digit pr) ∙ measure-tree ft)) →
            Split (FingerTree A V) A
  splitTree4 p i pr ft sf false pf1 false pf2 = splitTree2 p i pr ft sf
  splitTree4 p i pr ft sf false pf1 true pf2 = splitTree3 p i pr ft sf (sym pf1) (sym pf2)
  splitTree4 p i pr ft sf true pf1 vft pf2 = splitTree1 p i pr ft sf

  splitTree : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            (p : V → Bool) → V → FingerTree A V → Maybe (Split (FingerTree A V) A)
  splitTree p i Empty = nothing
  splitTree p i (Single x) = just (split Empty x Empty)
  splitTree p i (Deep x pr ft sf) = just (splitTree4 p i pr ft sf vpr refl vft refl)
    where
      vpr = p (i ∙ (measure-digit pr))
      vft = p ((i ∙ measure-digit pr) ∙ measure-tree ft)

  -- splitTree p i (Deep x pr ft sf) with    p (i ∙ (measure-digit pr)) |
  --                                 inspect p (i ∙ (measure-digit pr)) |
  --                                         p ((i ∙ measure-digit pr) ∙ measure-tree ft) |
  --                                 inspect p ((i ∙ measure-digit pr) ∙ measure-tree ft)
  -- splitTree p i (Deep x pr ft sf) | false | _ | false | _ = just (splitTree2 p i pr ft sf)
  -- splitTree p i (Deep x pr ft sf) | false | [ eq ] | true | [ eq₁ ] = just (splitTree3 p i pr ft sf eq eq₁)
  -- splitTree p i (Deep x pr ft sf) | true | _ | _ | _ = just (splitTree1 p i pr ft sf)

  postulate
    split-lemma4 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            (p : V → Bool) → (x : V) → (ft : FingerTree A V) → (splitTree p x ft ≡ nothing) → (ft ≡ Empty)
  -- split-lemma4 p x Empty refl = refl
  -- split-lemma4 p x (Single x₁) ()
  -- split-lemma4 p x (Deep x₁ x₂ ft x₃) pr with  splitTree p x (Deep x₁ x₂ ft x₃) | inspect (splitTree p x) (Deep x₁ x₂ ft x₃)
  -- split-lemma4 p x (Deep x₄ x₂ ft x₃) () | just _ | [ refl ]
  -- split-lemma4 p x (Deep x₄ x₂ ft x₃) pr | nothing | [ () ]

  split-lemma5 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
          (p : V → Bool) → (x : V) → (ft : FingerTree A V) → (ft ≢ Empty) → (splitTree p x ft ≢ nothing)
  split-lemma5 p x ft = contraposition (split-lemma4 p x ft)

-- ----- Random access sequences --------------------------------------------------------




-- -- -- Lemmas -------------------------------------------------------------------------

-- toList-ft2 : ∀ {a}{i : Size}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V {i}) → List A
-- toList-ft2 {a}{i} ft with viewL ft
-- toList-ft2 ft | NilL {i} = []
-- toList-ft2 ft | ConsL {.(↑ i)} x x₁ = toList-ft2 _ {i} x₁
--
-- viewL-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : A) → (ft : FingerTree A V) →
--         viewL (x ◁ ft) ≡ ConsL x ft
-- viewL-lemma0 x ft = {!   !}

-- I have tried for a long time to help agda realize that the viewL decreases the size of its argument but
-- to no avail. All the proofs would become a lot simpler if we manage that, otherwise trying to do so
-- will cause the termination check to fail -- see above example.


-- Managed to prove that consing appends to the front -- and also that toList is sane
-- First proof to go in the dissertation
cons-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : A) → (ft : FingerTree A V) →
        toList-ft (x ◁ ft) ≡ x ∷ (toList-ft ft)
cons-lemma0 x Empty = refl
cons-lemma0 x (Single x₁) = refl
cons-lemma0 x (Deep x₁ (One x₂) ft x₃) =
  begin
    toList-ft (x ◁ (Deep x₁ (One x₂) ft x₃))
  ≡⟨ refl ⟩
    x ∷ x₂ ∷ flatten-list (toList-ft ft) ++ toList-dig x₃
  ≡⟨ cong (λ xs → x ∷ xs) refl ⟩
    x ∷ (toList-ft ) (Deep x₁ (One x₂) ft x₃)
  ∎
cons-lemma0 x (Deep x₁ (Two x₂ x₃) ft x₄) =
  begin
    toList-ft (x ◁ (Deep x₁ (Two x₂ x₃) ft x₄))
  ≡⟨ refl ⟩
    x ∷ x₂ ∷ x₃ ∷ flatten-list (toList-ft ft) ++ toList-dig x₄
  ≡⟨ cong (λ xs → x ∷ xs) refl ⟩
    x ∷ (toList-ft (Deep x₁ (Two x₂ x₃) ft x₄))
  ∎
cons-lemma0 x (Deep x₁ (Three x₂ x₃ x₄) ft x₅) =
  begin
    toList-ft (x ◁ Deep x₁ (Three x₂ x₃ x₄) ft x₅)
  ≡⟨ refl ⟩
    x ∷ x₂ ∷ x₃ ∷ x₄ ∷ flatten-list (toList-ft ft) ++ toList-dig x₅
  ≡⟨ cong (λ xs → x ∷ xs) refl ⟩
    x ∷ toList-ft (Deep x₁ (Three x₂ x₃ x₄) ft x₅)
  ∎
cons-lemma0 {_}{_}{_} ⦃ mo ⦄ ⦃ m ⦄ x (Deep x₁ (Four x₂ x₃ x₄ x₅) ft x₆) =
  begin
    toList-ft (x ◁ Deep x₁ (Four x₂ x₃ x₄ x₅) ft x₆)
  ≡⟨ refl ⟩
    x ∷ x₂ ∷ (flatten-list (toList-ft ((node3 x₃ x₄ x₅) ◁ ft)) ++ toList-dig x₆)
  ≡⟨ cong (λ r → x ∷ x₂ ∷ (flatten-list r ++ toList-dig x₆)) (cons-lemma0 (node3 x₃ x₄ x₅) ft) ⟩
    x ∷ x₂ ∷ (flatten-list ((node3 x₃ x₄ x₅) ∷ (toList-ft ft)) ++ toList-dig x₆)
  ≡⟨ cong (λ r → x ∷ x₂ ∷ r) refl ⟩
    x ∷ x₂ ∷ ((x₃ ∷ x₄ ∷ x₅ ∷ (flatten-list (toList-ft ft))) ++ toList-dig x₆)
  ≡⟨ cong (λ r → x ∷ r) refl ⟩
    x ∷ toList-ft (Deep x₁ (Four x₂ x₃ x₄ x₅) ft x₆)
  ∎

-- measure-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (measure-tree ft ≡ foldr (λ x y → ∥ x ∥ ∙ y) ε toList-ft)
-- -- proof that viewL and ◁ are inverses fails because it's not true.
-- need to define a new equality for fingertrees
data _==_ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : (f1 : FingerTree A V) → (f2 : FingerTree A V) → Set a where
  leq : ∀ (f1 : FingerTree A V)(f2 : FingerTree A V) → (toList-ft f1 ≡ toList-ft f2) → f1 == f2

-- view-lemma3 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V) →
--   (hd : A) → (tl1 : FingerTree A V) → (tl2 : FingerTree A V) → (viewL (hd ◁ tl1) ≡ ConsL hd tl2) → (tl1 == tl2)
-- view-lemma3 ft hd tl1 tl2 prp = {!   !}

-- view-lemma4 : ∀ {a}{A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V) →
--     (hd : A) → (tl : FingerTree A V) → (viewL ft ≡ ConsL hd tl) → ((hd ◁ tl) == ft)
-- view-lemma4 Empty hd tl ()
-- view-lemma4 (Single x) .x .Empty refl = leq (x ◁ Empty) (Single x) refl
-- view-lemma4 (Deep x (One x₁) ft x₂) .x₁ .(deepL nothing ft x₂) refl with viewL ft | inspect viewL ft
-- view-lemma4 (Deep x (One x₁) ft x₂) .x₁ .(deepL nothing ft x₂) refl | NilL | [ eq ] = {!   !}
-- view-lemma4 (Deep x (One x₁) ft x₂) .x₁ .(deepL nothing ft x₂) refl | ConsL x₃ x₄ | re = {!   !}
-- --
-- -- = leq (x₁ ◁ (deepL nothing ft x₂)) ((Deep x (One x₁) ft x₂))
-- --     (begin
-- --         toList-ft (x₁ ◁ deepL nothing ft x₂)
-- --       ≡⟨ cons-lemma0 x₁ (deepL nothing ft x₂) ⟩
-- --     x₁ ∷ toList-ft (deepL nothing ft x₂)
-- --       ≡⟨ refl ⟩ {!   !} ≡⟨ {!   !} ⟩ {!   !})
-- view-lemma4 (Deep x (Two x₁ x₂) ft x₃) hd tl prp = {!   !}
-- view-lemma4 (Deep x (Three x₁ x₂ x₃) ft x₄) hd tl prp = {!   !}
-- view-lemma4 (Deep x (Four x₁ x₂ x₃ x₄) ft x₅) hd tl prp = {!   !}

tail : ∀ {a} {A : Set a} → List A → List A
tail [] = []
tail (x ∷ xs) = xs

toList-dig-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (pr : Digit A) → (toList-ft (toTree ⦃ mo ⦄ ⦃ m ⦄ pr) ≡ (toList-dig pr))
toList-dig-lemma0 (One x) = refl
toList-dig-lemma0 (Two x x₁) = refl
toList-dig-lemma0 (Three x x₁ x₂) = refl
toList-dig-lemma0 (Four x x₁ x₂ x₃) = refl

toList-lemma11 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (pr : Digit A) → (ft : FingerTree (Node A V) V) → (sf : Digit A) → (viewL ft ≡ NilL) →
  (toList-ft (deepL (tail-dig pr) ft sf) ≡ tail (toList-ft (deep pr ft sf)))
toList-lemma11 (One x) Empty sf prop =
  begin
    toList-ft (deepL (tail-dig (One x)) Empty sf)
  ≡⟨ refl ⟩
    toList-ft (reducer-digit _◁_ sf Empty)
  ≡⟨ toList-dig-lemma0 sf ⟩
    refl
toList-lemma11 (Two x x₁) Empty sf prop = refl
toList-lemma11 (Three x x₁ x₂) Empty sf prop = refl
toList-lemma11 (Four x x₁ x₂ x₃) Empty sf prop = refl
toList-lemma11 pr (Single x) sf ()
toList-lemma11 pr (Deep x x₁ ft x₂) sf ()

mutual
  toList-lemma12 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
    (pr : Digit A) → (ft : FingerTree (Node A V) V) → (sf : Digit A) → (hd : Node A V) →
    (tl : FingerTree (Node A V) V) → (viewL ft ≡ ConsL hd tl) →
    (toList-ft (deepL (tail-dig pr) ft sf) ≡ tail (toList-ft (deep pr ft sf)))
  toList-lemma12 pr Empty sf hd tl ()
  toList-lemma12 (One x₃) (Single (Node2 x x₁ x₂)) sf .(Node2 x x₁ x₂) .Empty refl = refl
  toList-lemma12 (One x₄) (Single (Node3 x x₁ x₂ x₃)) sf .(Node3 x x₁ x₂ x₃) .Empty refl = refl
  toList-lemma12 (Two x₁ x₂) (Single x) sf .x .Empty refl = refl
  toList-lemma12 (Three x₁ x₂ x₃) (Single x) sf .x .Empty refl = refl
  toList-lemma12 (Four x₁ x₂ x₃ x₄) (Single x) sf .x .Empty refl = refl
  toList-lemma12 (One x₅) (Deep x₃ (One (Node2 x x₁ x₂)) ft x₄) sf .(Node2 x x₁ x₂) .(deepL nothing ft x₄) refl =
    cong (λ reclist → x₁ ∷ x₂ ∷ flatten-list (reclist) ++ toList-dig sf) (toList-lemma1 (One (Node2 x x₁ x₂)) ft x₄)
  toList-lemma12 (One x₆) (Deep x₄ (One (Node3 x x₁ x₂ x₃)) ft x₅) sf .(Node3 x x₁ x₂ x₃) .(deepL nothing ft x₅) refl =
    cong (λ reclist → x₁ ∷ x₂ ∷ x₃ ∷ flatten-list (reclist) ++ toList-dig sf) (toList-lemma1 (One (Node3 x x₁ x₂ x₃)) ft x₅)
  toList-lemma12 (One x₅) (Deep x₆ (Two (Node2 x x₁ x₂) x₃) ft x₄) sf .(Node2 x x₁ x₂) _ refl = refl
  toList-lemma12 (One x₆) (Deep x₇ (Two (Node3 x x₁ x₂ x₃) x₄) ft x₅) sf .(Node3 x x₁ x₂ x₃) _ refl = refl
  toList-lemma12 (One x₆) (Deep x₇ (Three (Node2 x x₁ x₂) x₃ x₄) ft x₅) sf .(Node2 x x₁ x₂) _ refl = refl
  toList-lemma12 (One x₇) (Deep x₈ (Three (Node3 x x₁ x₂ x₃) x₄ x₅) ft x₆) sf .(Node3 x x₁ x₂ x₃) _ refl = refl
  toList-lemma12 (One x₇) (Deep x₈ (Four (Node2 x x₁ x₂) x₃ x₄ x₅) ft x₆) sf .(Node2 x x₁ x₂) _ refl = refl
  toList-lemma12 (One x₈) (Deep x₉ (Four (Node3 x x₁ x₂ x₃) x₄ x₅ x₆) ft x₇) sf .(Node3 x x₁ x₂ x₃) _ refl = refl
  toList-lemma12 (Two x₃ x₄) (Deep x x₁ ft x₂) sf .(head-dig x₁) .(deepL (tail-dig x₁) ft x₂) refl = refl
  toList-lemma12 (Three x₃ x₄ x₅) (Deep x x₁ ft x₂) sf .(head-dig x₁) .(deepL (tail-dig x₁) ft x₂) refl = refl
  toList-lemma12 (Four x₃ x₄ x₅ x₆) (Deep x x₁ ft x₂) sf .(head-dig x₁) .(deepL (tail-dig x₁) ft x₂) refl = refl

  toList-lemma1 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
    (pr : Digit A) → (ft : FingerTree (Node A V) V) → (sf : Digit A) →
    (toList-ft (deepL (tail-dig pr) ft sf) ≡ tail (toList-ft (deep pr ft sf)))
  toList-lemma1 pr ft sf with viewL ft | inspect viewL ft
  toList-lemma1 pr ft sf | NilL | [ eq ] = toList-lemma11 pr ft sf eq
  toList-lemma1 pr ft sf | ConsL x₁ x₂ | [ eq ] = toList-lemma12 pr ft sf x₁ x₂ eq

toList-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (xs : List A) → (toList-ft (toTree ⦃ mo ⦄ ⦃ m ⦄ xs) ≡ xs )
toList-lemma0 [] = refl
toList-lemma0 (x ∷ xs) =
  begin
    toList-ft (x ◁ (toTree xs))
  ≡⟨ cons-lemma0 x (toTree xs) ⟩
    x ∷ toList-ft (toTree xs)
  ≡⟨ cong (λ r → x ∷ r) (toList-lemma0 xs) ⟩
    x ∷ xs ∎

toList-dig-lemma1 : ∀{a} {A : Set a} → (x : Digit A) → (rest : List A) →
  head-dig x ∷ tail (toList-dig x ++ rest) ≡ (toList-dig x ++ rest)
toList-dig-lemma1 (One x) rest = refl
toList-dig-lemma1 (Two x x₁) rest = refl
toList-dig-lemma1 (Three x x₁ x₂) rest = refl
toList-dig-lemma1 (Four x x₁ x₂ x₃) rest = refl

toTree-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (ft : FingerTree A V) → (toTree (toList-ft ft) == ft)
toTree-lemma0 ft = leq ((toTree (toList-ft ft))) ft (toList-lemma0 (toList-ft ft))


measureList : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (List A) → V
measureList xs = Data.List.foldr (λ x r → ∥ x ∥ ∙ r) ε xs


view-lemma3 : ∀ {a}{A : Set a} {V : Set a }
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              → (ft : FingerTree A V)
              → (viewL ft ≡ NilL)
              → (ft ≡ Empty)
view-lemma3 Empty p = refl
view-lemma3 (Single x) ()
view-lemma3 (Deep x x₁ ft x₂) ()

view-lemma4 : ∀ {a}{A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V) →
    (hd : A) → (tl : FingerTree A V) → (viewL ft ≡ ConsL hd tl) → ((hd ◁ tl) == ft)
view-lemma4 Empty hd tl ()
view-lemma4 (Single x) .x .Empty refl = leq (Single x) (x ◁ Empty) refl
view-lemma4 (Deep x x₁ ft x₂) .(head-dig x₁)
      .(deepL (tail-dig x₁) ft x₂) refl =
    leq ((head-dig) x₁ ◁ (deepL (tail-dig x₁) ft x₂)) ((Deep x x₁ ft x₂))
          (begin
            toList-ft (head-dig x₁ ◁ deepL (tail-dig x₁) ft x₂)
          ≡⟨ cons-lemma0 (head-dig x₁) (deepL (tail-dig x₁) ft x₂) ⟩
            head-dig x₁ ∷ toList-ft (deepL (tail-dig x₁) ft x₂)
        ≡⟨ cong (λ y → head-dig x₁ ∷ y) (toList-lemma1 x₁ ft x₂) ⟩
          head-dig x₁ ∷ tail (toList-dig x₁ ++ flatten-list (toList-ft ft) ++ toList-dig x₂)
        ≡⟨ toList-dig-lemma1 x₁ (flatten-list (toList-ft ft) ++ toList-dig x₂) ⟩
          refl)

postulate
  measure-lemma5 : ∀ {a}{A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : A) → (ft : FingerTree A V)
            → (measure-tree (x ◁ ft) ≡ ∥ x ∥ ∙ measure-tree ft)


toTree-measure-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (xs : List A) →
    (measureList ⦃ mo ⦄ xs ≡ measure-tree (toTree xs))
toTree-measure-lemma0 [] = refl
toTree-measure-lemma0 ⦃ mo ⦄ (x ∷ xs) = begin
                                          measureList ⦃ mo ⦄ (x ∷ xs)
                                         ≡⟨ refl ⟩
                                          ∥ x ∥ ∙ measureList ⦃ mo ⦄ xs
                                         ≡⟨ cong (λ t → ∥ x ∥ ∙ t) (toTree-measure-lemma0 xs) ⟩
                                          ∥ x ∥ ∙ (measure-tree (toTree xs))
                                         ≡⟨ sym (measure-lemma5 x (toTree xs)) ⟩
                                          measure-tree (toTree (x ∷ xs)) ∎
--
-- -- this is not true in general, same fallacy caused by the fact that our data structure is NOT dependently typed. There's no guarantee that the correct constructors are in use.
-- toList-measure-lemma0 : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V) →
--   (measure-tree ft ≡ (measureList (toList-ft ft)))
-- toList-measure-lemma0 ft = {!   !}
--
-- -- same goes for this one. I can enforce equality to constraint the measure, in which case I get this for free.
-- measure-equal-lemma0 :  ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (f1 : FingerTree A V) → (f2 : FingerTree A V) →
--                   (f1 == f2) → (measure-tree f1 ≡ measure-tree f2)
-- measure-equal-lemma0 f1 f2 (leq .f1 .f2 x) = {!   !}
--
-- toList-view-lemma0 : ∀ {a} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : A) → (f : FingerTree A V)
--                 → (ft : FingerTree A V) → (viewL ft ≡ ConsL x f) → (∥ x ∥ ∙ measure-tree f ≡ measure-tree ft)
-- toList-view-lemma0 x f ft pr = {!   !}
 -- measure-lemma5 x Empty =
--         begin ∥ x ∥ ≡⟨ sym (ε-right ∥ x ∥) ⟩ ∥ x ∥ ∙ ε ∎
-- measure-lemma5 x (Single y) =
--         begin (measure-tree (x ◁ (Single y)))
--           ≡⟨ refl ⟩ {!   !}
-- measure-lemma5 x (Deep x₁ x₂ ft x₃) = {!   !}

-- ------REVERSING ------------------------------------------------------------------------

-- this, as before, fails termination check - I need to find a solution for this - it should involve sized types but cannot figure it out
-- reverse : ∀ {a}{i : Size}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V {i} → FingerTree A V
-- reverse ft with viewR ft
-- reverse ft | NilR = Empty
-- reverse ft | ConsR x x₁ = x ◁ reverse x₁

-- ------ SIZING ATTEMPT -----------------------------------------------------------------
-- Finally, I have perfectly understood the problem that is present in the Coq Paper, under the dependency hell.
-- We cannot run recursion on the ViewL because the termination check fails - and the system becomes inconsistent
-- We need to teach agda that the viewL always results in a smaller fingertree. This is not obvious in the recursive case


-- The first idea, presented in the Coq paper as well is to find a way to measure the number of elements in a FingerTree
-- One idea I have here is to use the measurment information associated such that
-- a ∙ b > a and a ∙ b > b and a > ε and b > ε
-- For this to work, we need to not allow elements with ∥ a ∥ = ε in the FingerTree

-- We can define a new view to be a functor from FingerTree A V to FingerTree A ℕ with a special monoid and measure function
-- haha, remember why this fails.
-- myView : ∀ {A : Set}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V → FingerTree A ℕ
-- myView Empty = Empty
-- myView (Single x) = Single x
-- myView (Deep x x₁ ft x₂) = {! deep ⦃ nat ⦄ ⦃ nat-measure ⦄ x₁ (myView ft) x₂  !}



-- Another idea would be to define some partial order that is sufficient for the viewL and viewR sizing
-- The complicated case is the recursive one, as always.

-- Another idea is to implement some subtraction function (i.e concatenation with negative fingertrees)
-- that would behave like okasaki's numerical representations

-- so far, I have shown that we can find an ambiguous numerical representation that counts the sizes of
-- the two fingers at each level only if we get rid of the the node2 constructor, which is actually not reachable.



-- Another idea is to simply convert to list and then to length, but it seems silly at first
-- size-node : ∀ {a}{A : Set a}{V : Set a } → Node A V → ℕ
-- size-node n = {!   !}

size-dig :  ∀ {a}{A : Set a} → Digit A → ℕ
size-dig d = Data.List.length (toList-dig d)

size-ft : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V → ℕ
size-ft ft = Data.List.length (toList-ft ft)

size-view : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → ViewL A (FingerTree A V) → ℕ
size-view NilL = ℕ.zero
size-view (ConsL x x₁) = 1 + size-ft x₁

size-mbdig :  ∀ {a}{A : Set a} → Maybe (Digit A) → ℕ
size-mbdig (just x) = Data.List.length (toList-dig x)
size-mbdig nothing = 0


sym== : ∀ {a}{A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (f1 : FingerTree A V) → (f2 : FingerTree A V) →
      (f1 == f2) → (f2 == f1)
sym== f1 f2 (leq .f1 .f2 x) = leq f2 f1 (sym x)



-- Need to find a way to convince agda that in viewL ft  = Cons x x₁  x₁ is structurally smaller than ft
-- http://stackoverflow.com/questions/19642921/assisting-agdas-termination-checker


-- acc-WF : ∀ {a}{A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V) → Acc ft
-- acc-WF ft with viewL ft | inspect viewL ft
-- acc-WF ft | NilL | [ eq ] = acc-empty (view-lemma3 ft eq)
-- acc-WF ft | ConsL x x₁ | [ eq ] = acc x x₁ (sym== (x ◁ x₁) ft (view-lemma4 ft x x₁ eq)) (acc-WF x₁)




-- wrong implemntation but using it to see if I can trick the termination check
-- reverse : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V → FingerTree A V
-- reverse ft with viewL ft | inspect viewL ft
-- reverse ft | NilL | v  = Empty
-- reverse ft | ConsL x x₁ | [ eq ] with size-view-lemma0 ft x x₁ eq
-- ... | svl = x ◁ (reverse x₁)

-- -- TESTING ---------------------------------------------------------------------------
open import numbers
--
-- instance nat : Monoid ℕ
-- nat = monoid 0 _+_ 0+ +0 +assoc
--
-- instance list : Monoid (List ℕ)
-- list = monoid [] _++_ []+ +[] ++assoc
--
-- instance nat-measure : ∀ {A : Set} →  Measured A ℕ
-- nat-measure = measured (λ x → 1)
--
-- instance list-measure : Measured ℕ (List ℕ)
-- list-measure =  measured (λ x → x ∷ [])
--
--
-- test-tree : FingerTree ℕ (List ℕ)
-- test-tree = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty
--
-- test-tree2 : FingerTree ℕ ℕ
-- test-tree2 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty
