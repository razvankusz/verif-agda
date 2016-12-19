module FingerTree-Measured-Isabelle where

open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_; foldr; foldl)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false)
open import Size
open import measure
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

data Node {a}(A : Set a)(V : Set a) : Set a where
  Tip : A → V → Node A V
  Node2 : V → Node A V → Node A V → Node A V
  Node3 : V → Node A V → Node A V → Node A V → Node A V

data Digit {a}(A : Set a)(V : Set a) : Set a where
  One : Node A V → Digit A V
  Two : Node A V → Node A V → Digit A V
  Three : Node A V → Node A V → Node A V → Digit A V
  Four : Node A V → Node A V → Node A V → Node A V → Digit A V

data FingerTree {a}(A : Set a)(V : Set a) : Set a where
  Empty : FingerTree A V
  Single : Node A V → FingerTree A V
  Deep : V → Digit A V → FingerTree A V → Digit A V → FingerTree A V

gmn : ∀ {a} {A : Set a} {V : Set a} → Node A V → V
gmn (Tip x x₁) = x₁
gmn (Node2 x node node₁) = x
gmn (Node3 x node node₁ node₂) = x

open Monoid {{...}} public
gmd : ∀ {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ → Digit A V → V
gmd (One x) = gmn x
gmd (Two x x₁) = gmn x ∙ gmn x₁
gmd (Three x x₁ x₂) = gmn x ∙ gmn x₁ ∙ gmn x₂
gmd (Four x x₁ x₂ x₃) = gmn x ∙ gmn x₁ ∙ gmn x₂ ∙ gmn x₃

gmft : ∀ {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ → FingerTree A V → V
gmft Empty = ε
gmft (Single x) = gmn x
gmft (Deep x x₁ ft x₂) = x

is-leveln-node : ∀ {a} {A : Set a} {V : Set a} → ℕ → Node A V → Bool
is-leveln-node 0 (Tip _ _) = true
is-leveln-node (Suc n) (Node2 _ n₁ n₂) = is-leveln-node n n₁ ∧ is-leveln-node n n₂
