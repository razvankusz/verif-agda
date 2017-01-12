module FingerTree-measure-size where

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


open import AlgebraStructures

open Measured {{...}} public
open Monoid {{...}} public

------------------------------------------------------------------------

data Node {a : Level} (A : Set a)(V : Set a ) : Set a where
  Node2 : V → A → A → Node A V
  Node3 : V → A → A → A → Node A V

data Digit {a : Level} (A : Set a): Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A
--
-- data FingerTree {a : Level} (A : Set a)(V : Set a ) : {i : Size} → Set a where
--   Empty  : ∀ {i : Size} → FingerTree A V {↑ i}
--   Single : ∀ {i : Size} → A → FingerTree A V {↑ i}
--   Deep   : ∀ {i : Size} → V → Digit A → FingerTree (Node A V) V {i} → Digit A →
--            FingerTree A V {↑ i}

measure-node : {a : Level} {A : Set a} {V : Set a } → Node A V → V
measure-node (Node2 x x₁ x₂) = x
measure-node (Node3 x x₁ x₂ x₃) = x


measure-digit : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Digit A → V
measure-digit ⦃ mo ⦄ ⦃ m ⦄ (One x) = Measured.∥ m ∥ x
measure-digit (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
measure-digit (Three x x₁ x₂) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥
measure-digit (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥

measure-maybe-digit : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Maybe (Digit A) → V
measure-maybe-digit (just x) = measure-digit x
measure-maybe-digit nothing = ε

instance uplift : ∀ {a}{A : Set a}{V : Set a } ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

data FingerTree {a : Level} (A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :  {μ : V} → Set a where
  Empty  :  FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {ε}
  Single :  (e : A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {∥ e ∥}
  Deep   :  {s : V} → (pr : Digit A) → FingerTree (Node A V) V {s} → (sf : Digit A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {measure-digit pr ∙ s ∙ measure-digit sf}


----------------------------------------------------------------------------------

node2 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y

node3 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄  → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z


measure-tree : ∀ {a}{A : Set a}{V : Set a}{s : V}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V {s} → V
measure-tree {_}{_}{_}{s} ft = s

deep : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s} →
  (pr : Digit A) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) →
  FingerTree A V {(measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) ∙ s ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ sf)}
deep pr ft sf = Deep pr ft sf


measure-lemma0 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : V) → (y : V) →
            (x ∙ ε ∙ y) ≡ x ∙ y
measure-lemma0 x y = begin
                        x ∙ ε ∙ y ≡⟨ ∙-assoc x ε y ⟩
                     (x ∙ ε) ∙ y ≡⟨ cong (λ z → z ∙ y) (ε-right x) ⟩ x ∙ y ∎

measure-lemma1 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (b : A) → ((mo Monoid.∙ Monoid.ε mo) (measure-digit (One b)) ≡ Measured.∥ m ∥ b)
measure-lemma1 ⦃ mo ⦄ ⦃ m ⦄ b = begin (mo Monoid.∙ Monoid.ε mo) (measure-digit (One b))
                                  ≡⟨ ε-left (measure-digit (One b)) ⟩
                                  ∥ b ∥  ∎


assoc-lemma1 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (a : A) → (e : A) →
              (mo Monoid.∙ Measured.∥ m ∥ a) (Measured.∥ m ∥ e) ≡ (mo Monoid.∙ Measured.∥ m ∥ a)
     ((mo Monoid.∙ Monoid.ε mo) (Measured.∥ m ∥ e))
assoc-lemma1 a e = cong (λ x → ∥ a ∥ ∙ x) (sym (ε-left ∥ e ∥))

assoc-lemma2 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (a : A) → (b : A) → (c : A) → (d : A) → (e : A) → (s : V) → (f : V)
              → (mo Monoid.∙ Measured.∥ m ∥ a) ((mo Monoid.∙ (mo Monoid.∙ Measured.∥ m ∥ b) ((mo Monoid.∙ Measured.∥ m ∥ c) ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e)))) ((mo Monoid.∙ s) f)) ≡ (mo Monoid.∙ (mo Monoid.∙ Measured.∥ m ∥ a) (Measured.∥ m ∥ b))
        ((mo Monoid.∙
         (mo Monoid.∙
          (mo Monoid.∙ Measured.∥ m ∥ c)
          ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e)))
         s)
        f)
assoc-lemma2 a b c d e s f = begin ∥ a ∥ ∙ ((∥ b ∥ ∙ ∥ c ∥ ∙ ∥ d ∥ ∙ ∥ e ∥) ∙ (s ∙ f))
                            ≡⟨ cong (λ x → ∥ a ∥ ∙ x) (sym (∙-assoc (∥ b ∥) (∥ c ∥ ∙ ∥ d ∥ ∙ ∥ e ∥) (s ∙ f))) ⟩ ∥ a ∥ ∙ (∥ b ∥ ∙ (( ∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) ∙ (s ∙ f)))
                            ≡⟨ ∙-assoc (∥ a ∥) (∥ b ∥) (( ∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) ∙ (s ∙ f)) ⟩ (∥ a ∥ ∙ ∥ b ∥) ∙ (∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) ∙ (s ∙ f)
                            ≡⟨ cong (λ x → (∥ a ∥ ∙ ∥ b ∥) ∙ x) ((∙-assoc (∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) s f)) ⟩ refl


infixr 5 _◁_
_◁_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} → (x : A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {s} → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {∥ x ∥ ∙ s}
_◁_ {l} {A} {V} ⦃ mo ⦄ a Empty rewrite (Monoid.ε-right mo) ∥ a ∥ = Single {l}{A}{V} a
_◁_ {l} {A} {V} ⦃ mo ⦄ ⦃ m ⦄ {.(∥ e ∥)} a (Single e) rewrite assoc-lemma1 ⦃ mo ⦄ ⦃ m ⦄ a e = Deep (One a) Empty (One e)
a ◁ Deep (One b) ft sf rewrite ∙-assoc (∥ a ∥) (∥ b ∥) (measure-tree ft ∙ measure-digit sf) = Deep (Two a b) ft sf
a ◁ Deep (Two b c) ft sf rewrite ∙-assoc (∥ a ∥) (∥ b ∥ ∙ ∥ c ∥) (measure-tree ft ∙ measure-digit sf) = Deep (Three a b c) ft sf
a ◁ Deep (Three b c d) ft sf rewrite ∙-assoc (∥ a ∥) (∥ b ∥ ∙ ∥ c ∥ ∙ ∥ d ∥) (measure-tree ft ∙ measure-digit sf) = Deep (Four a b c d) ft sf
a ◁ Deep (Four b c d e) ft sf rewrite assoc-lemma2 a b c d e (measure-tree ft) (measure-digit sf) = Deep (Two a b) ((node3 c d e) ◁ ft) sf


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

toList-ft : ∀ {a}{A : Set a}{V : Set a }⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V}  → FingerTree A V {s} → List A
toList-ft Empty = []
toList-ft (Single x) = x ∷ []
toList-ft (Deep x₁ ft x₂) = (toList-dig x₁) ++ (flatten-list (toList-ft ft)) ++ (toList-dig x₂)


--- View from the left ------------

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

measure-dig-lemma0 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Digit A) →
      (∥ head-dig d ∥ ∙ measure-maybe-digit ⦃ mo ⦄ (tail-dig d) ≡ measure-digit d)
measure-dig-lemma0 d = {!   !}

measure-digit-lemma1 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} → (pr : Digit A) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) →
   ((measure-digit pr) ∙ (s ∙ measure-digit sf))  ≡ (∥ head-dig pr ∥ ∙ (measure-maybe-digit (tail-dig pr) ∙ (s ∙ measure-digit sf)))
measure-digit-lemma1 = {!   !}
--
-- rewrite ∙-assoc (∥ head-dig pr ∥) (measure-maybe-digit (tail-dig pr)) (measure-tree ft ∙ measure-digit sf) |
--                                             cong (λ x → x ∙ (measure-tree ft) ∙ (measure-digit sf)) (measure-dig-lemma0 ⦃ mo ⦄ ⦃ m ⦄ pr)
toTree-dig : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Digit A) → FingerTree A V {measure-digit d}
toTree-dig d = {!   !}

data ViewL {a}(A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : {s : V} → Set a where
  NilL :  ViewL A V {ε}
  ConsL : ∀ {z : V} (x : A) → (xs : FingerTree A V {z}) → ViewL A V {∥ x ∥ ∙ z}

mutual
  viewL : ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {i : V} →
        FingerTree A V {i} → ViewL A V {i}
  viewL Empty = NilL
  viewL ⦃ mo ⦄ ⦃ m ⦄ (Single x) rewrite sym (Monoid.ε-right mo ∥ x ∥) = ConsL x Empty
  viewL ⦃ mo ⦄ ⦃ m ⦄ (Deep pr ft sf) rewrite measure-digit-lemma1 ⦃ mo ⦄ ⦃ m ⦄ pr ft sf = ConsL (head-dig pr) (deepL (tail-dig pr) ft sf)

  deepL : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} →
        (pr : Maybe (Digit A)) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) → FingerTree A V {measure-maybe-digit pr ∙ s ∙ measure-digit sf}
  -- deepL pr ft sf = {!   !}
  deepL (just x) ft sf = Deep x ft sf
  deepL nothing ft sf with viewL ft
  deepL ⦃ mo ⦄ ⦃ m ⦄ nothing ft sf | NilL rewrite (Monoid.ε-left mo) (ε ∙ measure-digit sf) | (Monoid.ε-left mo) (measure-digit sf) = toTree-dig sf
  deepL nothing ft sf | ConsL (Node2 x x₁ x₂) x₃ = {!   !} -- Deep (Two x₁ x₂) x₃ sf
  deepL nothing ft sf | ConsL (Node3 x x₁ x₂ x₃) x₄ = {!   !} -- Deep (Three x₁ x₂ x₃) x₄ sf


open import numbers

instance nat : Monoid ℕ
nat = monoid 0 _+_ 0+ +0 +assoc

instance list : Monoid (List ℕ)
list = monoid [] _++_ []+ +[] ++assoc

instance nat-measure : ∀ {A : Set} →  Measured A ℕ
nat-measure = measured (λ x → 1)
