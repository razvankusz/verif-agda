open import Data.Nat using (ℕ)
open import Data.Fin using (Fin)
open import Data.Vec using (Vec; lookup)
open import Data.List using (List; _∷_; []; [_]; _++_; foldr)
open import Level using (Level)
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning using (begin_; _≡⟨_⟩_; _∎)
open import AlgebraStructures

module MonoidSolver {l : Level} (A : Set l) (M : Monoid A) where

  open Monoid {{...}} public

  instance m : Monoid A
  m = M

  data Expr (n : ℕ) : Set where
    _⊙_ : Expr n → Expr n → Expr n
    var : Fin n → Expr n
    ξ   : Expr n

  infixl 7 _⊙_

  ⟦_⟧ : {n : ℕ} → Expr n → Vec A n → A
  ⟦ x₁ ⊙ x₂ ⟧ ρ = ⟦ x₁ ⟧ ρ ∙ ⟦ x₂ ⟧ ρ
  ⟦ var i ⟧ ρ = lookup i ρ
  ⟦ ξ ⟧ _ = ε

  flatten : {n : ℕ} → Expr n → Vec A n → List A
  flatten (x₁ ⊙ x₂) ρ = flatten x₁ ρ ++ flatten x₂ ρ
  flatten (var i) ρ = lookup i ρ ∷ []
  flatten ξ ρ = []

  sum : List A → A
  sum = foldr _∙_ ε

  ⟦_⇓⟧ : {n : ℕ} → Expr n → Vec A n → A
  ⟦ x ⇓⟧ ρ = sum (flatten x ρ)

  sum-lemma : (xs ys : List A) → sum (xs ++ ys) ≡ sum xs ∙ sum ys
  sum-lemma [] ys = sym (ε-left (sum ys))
  sum-lemma (x ∷ xs) ys =
    begin
      x ∙ sum (xs ++ ys)
    ≡⟨ cong (λ z → x ∙ z) (sum-lemma xs ys) ⟩
      x ∙ (sum xs ∙ sum ys)
    ≡⟨ (∙-assoc x (sum xs) (sum ys)) ⟩
      (x ∙ sum xs) ∙ (sum ys)
    ∎

  correct : {n : ℕ} (exp : Expr n) (ρ : Vec A n) → ⟦ exp ⇓⟧ ρ ≡ ⟦ exp ⟧ ρ
  correct (x ⊙ y) ρ =
    begin
      ⟦ x ⊙ y ⇓⟧ ρ
    ≡⟨ sum-lemma (flatten x ρ) (flatten y ρ) ⟩
      (⟦ x ⇓⟧ ρ) ∙ (⟦ y ⇓⟧ ρ)
    ≡⟨ cong₂ (λ z₁ z₂ → z₁ ∙ z₂) (correct x ρ) (correct y ρ) ⟩
      ⟦ x ⟧ ρ ∙ ⟦ y ⟧ ρ
    ∎
  correct (var x) ρ = ε-right (lookup x ρ)
  correct ξ ρ = refl

  import Relation.Binary.Reflection as R


  open R (setoid A) var ⟦_⟧ ⟦_⇓⟧ correct using (prove; close; solve; solve₁; _⊜_)

  -- assoc-lemma0 = solve 4 (λ a b c d → ((a ⊙ b ⊙ ξ) ⊙ ξ ⊙ (ξ ⊙ c ⊙ d)) ⊜ (a ⊙ (b ⊙ (c ⊙ d)))) refl

  assoc-lemma1 = solve 4 (λ a b c d → (a ⊙ (b ⊙ (c ⊙ d))) ⊜ (((a ⊙ b) ⊙ c) ⊙ d)) refl
