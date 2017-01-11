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


instance uplift : ∀ {a}{A : Set a}{V : Set a } ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

data FingerTree {a : Level} (A : Set a)(V : Set a ) : ⦃ mo : Monoid V ⦄ → ⦃ m : Measured A V ⦄ → {μ : V} → Set a where
  Empty  : ∀ ⦃ mo : Monoid V ⦄ → ⦃ m : Measured A V ⦄ → FingerTree A V {ε}
  Single : ∀ ⦃ mo : Monoid V ⦄ → ⦃ m : Measured A V ⦄ → (e : A) → FingerTree A V {∥ e ∥}
  Deep   : ∀ ⦃ mo : Monoid V ⦄ → ⦃ m : Measured A V ⦄ →
          {s : V} (m : V) → Digit A → FingerTree (Node A V) V {s} → Digit A → FingerTree A V {m}


----------------------------------------------------------------------------------

node2 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y

node3 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄  → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z


measure-digit : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Digit A → V
measure-digit (One x) = ∥ x ∥
measure-digit (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
measure-digit (Three x x₁ x₂) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥
measure-digit (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥

measure-tree : ∀ {a}{A : Set a}{V : Set a}{s : V}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V {s} → V
measure-tree {_}{_}{_}{s} ft = s

deep : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s} →
  (pr : Digit A) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) →
  FingerTree A V {(measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) ∙ s ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ sf)}
deep pr ft sf = Deep ((measure-digit pr) ∙ ((measure-tree ft) ∙ (measure-digit sf))) pr ft sf

--
measure-lemma0 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : V) → (y : V) →
            (x ∙ ε ∙ y) ≡ x ∙ y
measure-lemma0 x y = begin
                        x ∙ ε ∙ y ≡⟨ ∙-assoc x ε y ⟩
                     (x ∙ ε) ∙ y ≡⟨ cong (λ z → z ∙ y) (ε-right x) ⟩ x ∙ y ∎

measure-lemma1 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (b : A) → ((mo Monoid.∙ Monoid.ε mo) (measure-digit (One b)) ≡ Measured.∥ m ∥ b)
measure-lemma1 ⦃ mo ⦄ ⦃ m ⦄ b = begin (mo Monoid.∙ Monoid.ε mo) (measure-digit (One b))
                                  ≡⟨ ε-left (measure-digit (One b)) ⟩
                                  ∥ b ∥  ∎

infixr 5 _◁_
_◁_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} → (x : A) → FingerTree A V {s} → FingerTree A V {∥ x ∥ ∙ s}
_◁_ ⦃ mo ⦄ ⦃ m ⦄ {.ε} a Empty rewrite (Monoid.ε-right mo) ∥ a ∥ = Single a
_◁_ ⦃ mo ⦄ ⦃ m ⦄ {.(∥ b ∥)} a (Single b) rewrite (measure-lemma1 ⦃ mo ⦄ ⦃ m ⦄ b ) = {! deep (One a) Empty (One b) !} --deep (One a) Empty (One b)  !}
_◁_ a ft = {!   !}
-- _◁_ a (Deep v (One b) ft sf) = deep (Two a b) ft sf
-- _◁_ a (Deep v (Two b c) ft sf) = deep (Three a b c) ft sf
-- _◁_ a (Deep v (Three b c d) ft sf) = deep (Four a b c d) ft sf
-- _◁_ a (Deep v (Four b c d e) ft sf) = deep (Two a b) ((node3 c d e) ◁ ft) sf
