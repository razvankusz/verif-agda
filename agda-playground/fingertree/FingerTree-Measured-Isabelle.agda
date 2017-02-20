module FingerTree-Measured-Isabelle where

open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_; foldr; foldl)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false; _∧_ )
open import Size
open import measure
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

_==_ : ℕ → ℕ → Bool
ℕ.zero == ℕ.zero = true
ℕ.zero == suc m = false
suc n == ℕ.zero = false
suc n == suc m = n == m

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
is-leveln-node 0 (Node2 _ _ _) = false
is-leveln-node 0 (Node3 _ _ _ _) = false
is-leveln-node (suc m) (Tip _ _) = false
is-leveln-node (suc m) (Node2 _ n₁ n₂) = (is-leveln-node m n₁) ∧ (is-leveln-node m n₂)
is-leveln-node (suc m) (Node3 _ n₁ n₂ n₃) = (is-leveln-node m n₁) ∧ (is-leveln-node m n₂) ∧ (is-leveln-node m n₃)

is-leveln-digit : ∀ {a} {A : Set a} {V : Set a} → ℕ → Digit A V → Bool
is-leveln-digit n (One x) = is-leveln-node n x
is-leveln-digit n (Two x x₁) = is-leveln-node n x ∧ is-leveln-node n x₁
is-leveln-digit n (Three x x₁ x₂) = is-leveln-node n x ∧ is-leveln-node n x₁ ∧ is-leveln-node n x₂
is-leveln-digit n (Four x x₁ x₂ x₃) = is-leveln-node n x ∧ is-leveln-node n x₁ ∧ is-leveln-node n x₂ ∧ is-leveln-node n x₃

is-leveln-tree : ∀ {a} {A : Set a} {V : Set a} → ℕ → FingerTree A V → Bool
is-leveln-tree n Empty = true
is-leveln-tree n (Single x) = is-leveln-node n x
is-leveln-tree n (Deep x x₁ ft x₂) = (is-leveln-digit n x₁) ∧ (is-leveln-digit n x₂) ∧ (is-leveln-tree (suc n) ft)

is-measured-node : ∀ {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ → (Node A V) → Bool
is-measured-node (Tip x x₁) = true
is-measured-node (Node2 x n n₁) = {! (is-measured-node n) ∧ (is-measured-node n₁) ∧ (x == n ∙ n₁)  !}
is-measured-node (Node3 x n n₁ n₂) = {!   !}
