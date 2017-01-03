module FingerTree-measure where

open import Class.Reduce
open import Level using (Level)
open import Data.Maybe
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false; if_then_else_)
open import Size

open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
------------------------------------------------------------------------

data Node {a : Level} (A : Set a)(V : Set a) : Set a where
  Node2 : V → A → A → Node A V
  Node3 : V → A → A → A → Node A V

data Digit {a : Level} (A : Set a): Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A

data FingerTree {a : Level} (A : Set a)(V : Set a) : {i : Size} → Set a where
  Empty  : ∀ {i : Size} → FingerTree A V {↑ i}
  Single : ∀ {i : Size} → A → FingerTree A V {↑ i}
  Deep   : ∀ {i : Size} → V → Digit A → FingerTree (Node A V) V {i} → Digit A →
           FingerTree A V {↑ i}

record Monoid {a} (V : Set a) : Set a where
 constructor monoid
 infixr 5 _∙_
 field
   ε : V
   _∙_ : V → V → V
   ε-left  : ∀ (v : V) → ε ∙ v ≡ v
   ε-right : ∀ (v : V) → v ∙ ε ≡ v
   ∙-assoc : ∀ (a b c : V) → a ∙ (b ∙ c) ≡ (a ∙ b) ∙ c

record Measured {a}(A : Set a)(V : Set a) : Set a where
  constructor measured
  field
    ∥_∥ : A → V

open Measured {{...}} public
open Monoid {{...}} public

-- REDUCTIONS --------------------------------------------------------------


reducer-node : ∀ {a}{A : Set a}{V : Set a}{B : Set a} → (f : A → B → B) → (Node A V) → B → B
reducer-node f (Node2 x x₁ x₂) z = f x₁ (f x₂ z)
reducer-node f (Node3 x x₁ x₂ x₃) z = f x₁ (f x₂ (f x₃ z))

reducel-node : ∀ {a}{A : Set a}{V : Set a}{B : Set a} → (f : B → A → B) → B → (Node A V) → B
reducel-node f z (Node2 x x₁ x₂) = f (f z x₁) x₂
reducel-node f z (Node3 x x₁ x₂ x₃) = f (f (f z x₁) x₂) x₃

instance reduceinstance-node : ∀ {a}{V : Set a} → reduceClass (λ A → Node A V)
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


reducer-ft : ∀ {a}{A : Set a}{V : Set a}{B : Set a} → (f : A → B → B) → FingerTree A V → B → B
reducer-ft f Empty z = z
reducer-ft f (Single x) z = f x z
reducer-ft {_}{_}{V} f (Deep x x₁ ft x₂) z = fd x₁
            ((reducer-ft {V = V} (reducer-node {V = V} f)) ft (fd x₂ z))
  where
    fd = reducer-digit f
    fn = (reducer-ft {V = V} (reducer-node {V = V} f))

reducel-ft : ∀ {a}{A : Set a}{V : Set a}{B : Set a} → (f : B → A → B) → B → FingerTree A V → B
reducel-ft f z Empty = z
reducel-ft f z (Single x) = f z x
reducel-ft {_}{_}{V} f z (Deep x x₁ ft x₂) = fd
            ((reducel-ft {V = V} (reducel-node {V = V} f)) (fd z x₁) ft) x₂
  where
    fd = reducel-digit f

instance reduceinstance-ft : ∀ {a}{V : Set a} → reduceClass (λ A → FingerTree A V)
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

node2 : ∀ {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y

node3 : ∀ {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄  → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z

measure-node : {a : Level} {A : Set a} {V : Set a} → Node A V → V
measure-node (Node2 x x₁ x₂) = x
measure-node (Node3 x x₁ x₂ x₃) = x

measure-digit : {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Digit A → V
measure-digit (One x) = ∥ x ∥
measure-digit (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
measure-digit (Three x x₁ x₂) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥
measure-digit (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥

measure-tree : {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V → V
measure-tree Empty = ε 
measure-tree (Single x) = ∥ x ∥
measure-tree (Deep v x ft x₁) = v

instance uplift : ∀ {a}{A : Set a}{V : Set a} ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

deep : ∀ {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (pr : Digit A) → (ft : FingerTree (Node A V) V) → (sf : Digit A) →
  FingerTree A V
deep pr ft sf = Deep ((measure-digit pr) ∙ ((measure-tree ft) ∙ (measure-digit sf))) pr ft sf

-- -- CONS -------------------------------------------------------------

infixr 5 _◁_
_◁_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → FingerTree A V → FingerTree A V
_◁_ a Empty = Single a
_◁_ a (Single b) = deep (One a) Empty (One b)
_◁_ a (Deep v (One b) ft sf) = deep (Two a b) ft sf
_◁_ a (Deep v (Two b c) ft sf) = deep (Three a b c) ft sf
_◁_ a (Deep v (Three b c d) ft sf) = deep (Four a b c d) ft sf
_◁_ a (Deep v (Four b c d e) ft sf) = deep (Two a b) ((node3 c d e) ◁ ft) sf

-- -- TO TREE ---------------------------------------------------------

toTree : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
        {F : Set a → Set a} ⦃ r : reduceClass {a} F ⦄ → F A → FingerTree A V
toTree s = reducer _◁_ s Empty

-- -- To List ----------------------------------------------------------

-- is an instance of the reducer but explicitly so makes proofs easier
toList-dig : ∀{a}{A : Set a} → Digit A → List A
toList-dig (One x) = x ∷ []
toList-dig (Two x x₁) = x ∷ x₁ ∷ []
toList-dig (Three x x₁ x₂) = x ∷ x₁ ∷ x₂ ∷ []
toList-dig (Four x x₁ x₂ x₃) = x ∷ x₁ ∷ x₂ ∷ x₃ ∷ []

toList-node : ∀{a}{A : Set a}{V : Set a} → Node A V → List A
toList-node (Node2 x x₁ x₂) = x₁ ∷ x₂ ∷ []
toList-node (Node3 x x₁ x₂ x₃) = x₁ ∷ x₂ ∷ x₃ ∷ []

flatten-list : ∀{a}{A : Set a}{V : Set a} → List (Node A V) → List A
flatten-list [] = []
flatten-list (x ∷ xs) = (toList-node x) ++ (flatten-list xs)

toList-ft : ∀ {a}{A : Set a}{V : Set a} → FingerTree A V → List A
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

data ViewL {a}(A : Set a)(S : {j : Size} → Set a) : {i : Size} → Set a where
  NilL : ∀ {i : Size} → ViewL A S {↑ i}
  ConsL : ∀ {i : Size} → A → S {i} → ViewL A S {↑ i}

mutual
  viewL : ∀ {a}{i : Size}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        FingerTree A V {i} → ViewL A (FingerTree A V) {i}
  viewL Empty = NilL
  viewL (Single x) = ConsL x Empty
  viewL (Deep x pr ft sf) = ConsL (head-dig pr) (deepL (tail-dig pr) ft sf)

  deepL : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        Maybe (Digit A) → FingerTree (Node A V) V → Digit A → FingerTree A V
  deepL (just x) ft sf = deep x ft sf
  deepL nothing ft sf with viewL ft
  deepL nothing ft sf | NilL = toTree sf
  deepL nothing ft sf | ConsL (Node2 x x₁ x₂) x₃ = deep (Two x₁ x₂) x₃ sf
  deepL nothing ft sf | ConsL (Node3 x x₁ x₂ x₃) x₄ = deep (Three x₁ x₂ x₃) x₄ sf

  isEmpty : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            FingerTree A V → Bool
  isEmpty ft with viewL ft
  isEmpty ft | NilL = true
  isEmpty ft | ConsL _ _ = false

  headL : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
            FingerTree A V → Maybe A
  headL ft with viewL ft
  headL ft | NilL = nothing
  headL ft | ConsL x _ = just x

  tailL : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
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

data ViewR {a}(A : Set a)(S : Set a) : Set a where
  NilR : ViewR A S
  ConsR : A → S → ViewR A S

mutual
  viewR : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        FingerTree A V → ViewR A (FingerTree A V)
  viewR Empty = NilR
  viewR (Single x) = ConsR x Empty
  viewR (Deep x pr ft sf) = ConsR (headr-dig sf) (deepR pr ft (tailr-dig sf))


  deepR : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
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


toDigit : ∀ {a} {A : Set a} {V : Set a} → Node A V → Digit A
toDigit (Node2 x x₁ x₂) = Two x₁ x₂
toDigit (Node3 x x₁ x₂ x₃) = Three x₁ x₂ x₃


splitDigit : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
          (p : V → Bool) → V → Digit A → Split (Maybe (Digit A)) A
splitDigit p i (One x) = split nothing x nothing
splitDigit p i (Two x x₁) =
  if (p i) then
    (split nothing x (just (One x₁)))
  else
    (split (just (One x)) x₁ nothing)
splitDigit p i (Three x x₁ x₂) =
  if (p i) then
    (split nothing x (just (Two x₁ x₂)))
  else if (p (i ∙ ∥ x ∥)) then
    split (just (One x)) x₁ (just (One x₂))
  else
    split (just (Two x x₁)) x₂ nothing
splitDigit p i (Four x x₁ x₂ x₃) = if (p i) then
    (split nothing x (just (Three x₁ x₂ x₃)))
  else if (p (i ∙ ∥ x ∥)) then
    split (just (One x)) x₁ (just (Two x₂ x₃))
  else if (p (i ∙ ∥ x ∥ ∙ ∥ x₁ ∥)) then
    split (just (Two x x₁)) x₂ (just (One x₃))
  else
    split (just (Three x x₁ x₂)) x₃ nothing
--

-- Axioms related to splitting.
isEmpty-ft  : ∀ {a} {A : Set a}{V : Set a} → (FingerTree A V) → Bool
isEmpty-ft Empty = false
isEmpty-ft (Single x) = false
isEmpty-ft (Deep x x₁ ft x₂) = false

split-lemma0 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        (p : V → Bool) → (x : V) → (ft : FingerTree A V) → (p x ≡ true) → (p (x ∙ measure-tree (ft)) ≡ false) → (isEmpty-ft ft ≡ false)
split-lemma0 p x Empty prf1 prf2 = refl
split-lemma0 p x (Single x₁) prf1 prf2 = refl
split-lemma0 p x (Deep x₁ x₂ ft x₃) prf1 prf2 = refl

-- splitTree-pr : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
--           (p : V → Bool) → (i : V) → (pr : Digit A) → ( ft : FingerTree A V) → (sf : Digit A) →
--           (p (i ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr)) ≡ true) →
--           (p (i ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) ∙ (measure-tree ft)) ≡ false) →
--           Maybe (Split (FingerTree A V) A)
-- splitTree-pr p i pr ft sf prf1 prf2 with (splitTree p )

splitTree : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
          (p : V → Bool) → V → FingerTree A V → Maybe (Split (FingerTree A V) A)
splitTree p i Empty = nothing
splitTree p i (Single x) = just (split Empty x Empty)

-- with is required here because we need to pattern match on the RHS
-- agda only allows pattern matching after the equal sign. I can't find any workarounds
splitTree ⦃ mo ⦄ ⦃ m ⦄ p i (Deep x pr ft sf) with i ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) | i ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) ∙ (measure-tree ft)
... | vpr | vm with (p vpr) | (p vm)
splitTree p i (Deep x pr ft sf) | vpr | vm | false | false with (splitDigit p vm sf)
splitTree p i (Deep x₃ pr ft sf) | vpr | vm | false | false | split l x r = just (split (deepR pr ft l) x (toTree r))
splitTree p i (Deep x pr ft sf) | vpr | vm | false | true with (splitTree p vpr ft)
splitTree ⦃ mo ⦄ ⦃ m ⦄ p i (Deep x₃ pr ft sf) | vpr | vm | false | true | just (split ml xs mr) with (splitDigit ⦃ mo ⦄ ⦃ m ⦄ p (vpr ∙ measure-tree ml) (toDigit xs))
splitTree p i (Deep x₃ pr ft sf) | vpr | vm | false | true | just (split ml xs mr) | split l x r = just (split (deepR pr ml l) x (deepL r mr sf))
splitTree p i (Deep x pr ft sf) | vpr | vm | false | true | nothing = nothing
  -- check this case more thoroughly, it shouldn't be reached
  -- probably here I can talk about limitations of agda -- see split-lemma0
splitTree ⦃ mo ⦄ ⦃ m ⦄ p i (Deep x pr ft sf) | vpr | vm | true | _ with splitDigit ⦃ mo ⦄ ⦃ m ⦄ p i pr
splitTree p i (Deep x₃ pr ft sf) | vpr | vm | true | _ | split l x r = just (split (toTree l) x (deepL r ft sf))


-- -- -- Lemmas -------------------------------------------------------------------------

-- toList-ft2 : ∀ {a}{i : Size}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (ft : FingerTree A V {i}) → List A
-- toList-ft2 {a}{i} ft with viewL ft
-- toList-ft2 ft | NilL {i} = []
-- toList-ft2 ft | ConsL {.(↑ i)} x x₁ = toList-ft2 _ {i} x₁
--
-- viewL-lemma0 : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : A) → (ft : FingerTree A V) →
--         viewL (x ◁ ft) ≡ ConsL x ft
-- viewL-lemma0 x ft = {!   !}

-- I have tried for a long time to help agda realize that the viewL decreases the size of its argument but
-- to no avail. All the proofs would become a lot simpler if we manage that, otherwise trying to do so
-- will cause the termination check to fail -- see above example.


-- Managed to prove that consing appends to the front -- and also that toList is sane
-- First proof to go in the dissertation
cons-lemma0 : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : A) → (ft : FingerTree A V) →
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


-- -- -- TESTING ---------------------------------------------------------------------------
open import numbers

instance nat : Monoid ℕ
nat = monoid 0 _+_ 0+ +0 +assoc

instance list : Monoid (List ℕ)
list = monoid [] _++_ []+ +[] ++assoc

instance nat-measure : Measured ℕ ℕ
nat-measure = measured (λ x → 1)

instance list-measure : Measured ℕ (List ℕ)
list-measure =  measured (λ x → x ∷ [])

--
-- infixr 5 _◁_
-- _◁_ : ℕ → FingerTree ℕ (List ℕ) → FingerTree ℕ (List ℕ)
-- _◁_ = _◁_ list-measure


test-tree : FingerTree ℕ (List ℕ)
test-tree = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty

test-tree2 : FingerTree ℕ ℕ
test-tree2 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty
