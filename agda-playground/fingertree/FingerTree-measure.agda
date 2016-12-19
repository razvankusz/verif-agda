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

-- Finger tree =
--   Digit (of Nodes) + Finger Tree (of Nodes) + Digit (of Nodes)

-- prove that V is a monoid

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
measure-tree {{m}} Empty = ε {{m}}
measure-tree (Single x) = ∥ x ∥
measure-tree (Deep v x ft x₁) = v

instance uplift : ∀ {a}{A : Set a}{V : Set a} ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

deep : ∀ {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (pr : Digit A) → (ft : FingerTree (Node A V) V) → (sf : Digit A) →
  FingerTree A V
deep pr ft sf = Deep ((measure-digit pr) ∙ ((measure-tree ft) ∙ (measure-digit sf))) pr ft sf

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

-- -- VIEW FROM THE LEFT -----------------------------------------------

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

data ViewL {a}(A : Set a)(S : Set a) : Set a where
  NilL : ViewL A S
  ConsL : A → S → ViewL A S

mutual
  viewL : ∀ {a}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        FingerTree A V → ViewL A (FingerTree A V)
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

data Split {a} (F : Set a) (A : Set a) : Set a where
  split : F → A → F → Split F A

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

splitTree : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
          (p : V → Bool) → V → FingerTree A V → Maybe (Split (FingerTree A V) A)
splitTree p i Empty = nothing
splitTree p i (Single x) = just (split Empty x Empty)
-- fix this ugly bit here
splitTree ⦃ mo ⦄ ⦃ m ⦄ p i (Deep x pr ft sf) with (measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) | (measure-tree ft)
... | vpr | vm with (p vpr) | (p vm)
splitTree p i (Deep x pr ft sf) | vpr | vm | false | false with (splitDigit p vm sf)
splitTree p i (Deep x₃ pr ft sf) | vpr | vm | false | false | split l x r = just (split (deepR pr ft l) x (toTree r))
splitTree p i (Deep x pr ft sf) | vpr | vm | false | true with (splitTree p vpr ft)
splitTree p i (Deep x₃ pr ft sf) | vpr | vm | false | true | just (split x x₁ x₂) = ?
splitTree p i (Deep x pr ft sf) | vpr | vm | false | true | nothing = {!   !}
splitTree p i (Deep x pr ft sf) | vpr | vm | true | _ = {!   !}


--   where
-- --
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
test-tree2 = 1 ◁ 2 ◁ 3 ◁ Empty

test-pred : ℕ → Bool
test-pred 2 = true
test-pred _ = false

test-digit : Digit ℕ
test-digit = Four 1 2 3 4
