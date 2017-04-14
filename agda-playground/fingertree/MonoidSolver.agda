open import Data.Nat using (ℕ)
open import Data.Fin using (Fin)
open import Data.Vec using (Vec; lookup)
open import Data.Vec.N-ary
open import Data.List using (List; _∷_; []; [_]; _++_; foldr)
open import Level using (Level)
open import Relation.Binary.PropositionalEquality
open import Relation.Binary
open import Function
open ≡-Reasoning using (begin_; _≡⟨_⟩_; _∎)
open import AlgebraStructures

module MonoidSolver {l : Level} (A : Set l) (M : Monoid A) where
  --
  -- instance m : Monoid A
  -- m = M

  data Expr (n : ℕ) : Set where
    _⊙_ : Expr n → Expr n → Expr n
    var : Fin n → Expr n
    ξ   : Expr n

  infixl 7 _⊙_

  ⟦_⟧ : {n : ℕ} → Expr n → Vec A n → A
  ⟦ x₁ ⊙ x₂ ⟧ ρ = ⟦ x₁ ⟧ ρ ∙ ⟦ x₂ ⟧ ρ
    where
      _∙_ = Monoid._∙_ M
  ⟦ var i ⟧ ρ = lookup i ρ
  ⟦ ξ ⟧ _ = ε
    where
      ε = Monoid.ε M

  flatten : {n : ℕ} → Expr n → Vec A n → List A
  flatten (x₁ ⊙ x₂) ρ = flatten x₁ ρ ++ flatten x₂ ρ
  flatten (var i) ρ = lookup i ρ ∷ []
  flatten ξ ρ = []
  --
  sum : List A → A
  sum = foldr (Monoid._∙_ M) (Monoid.ε M)

  ⟦_⇓⟧ : {n : ℕ} → Expr n → Vec A n → A
  ⟦ x ⇓⟧ ρ = sum (flatten x ρ)

  sum-lemma : (xs ys : List A) → sum (xs ++ ys) ≡ (Monoid._∙_ M) (sum xs) (sum ys)
  sum-lemma [] ys = sym ((Monoid.ε-left M) (sum ys))
  sum-lemma (x ∷ xs) ys =
    begin
      x ∙ sum (xs ++ ys)
    ≡⟨ cong (λ z → x ∙ z) (sum-lemma xs ys) ⟩
      x ∙ (sum xs ∙ sum ys)
    ≡⟨ (∙-assoc x (sum xs) (sum ys)) ⟩
      (x ∙ sum xs) ∙ (sum ys)
    ∎
    where
      _∙_ = Monoid._∙_ M
      ∙-assoc = Monoid.∙-assoc M

  correct : {n : ℕ} (exp : Expr n) (ρ : Vec A n) → ⟦ exp ⇓⟧ ρ ≡ ⟦ exp ⟧ ρ
  correct (x ⊙ y) ρ =
    begin
      ⟦ x ⊙ y ⇓⟧ ρ
    ≡⟨ sum-lemma (flatten x ρ) (flatten y ρ) ⟩
      (⟦ x ⇓⟧ ρ) ∙ (⟦ y ⇓⟧ ρ)
    ≡⟨ cong₂ (λ z₁ z₂ → z₁ ∙ z₂) (correct x ρ) (correct y ρ) ⟩
      ⟦ x ⟧ ρ ∙ ⟦ y ⟧ ρ
    ∎
    where
    _∙_ = Monoid._∙_ M
  correct (var x) ρ = (Monoid.ε-right M) (lookup x ρ)
  correct ξ ρ = refl
  --
  import Relation.Binary.Reflection as R



  open R (setoid A) var ⟦_⟧ ⟦_⇓⟧ correct using (prove; close; solve; solve₁; _⊜_)

  -- assoc-lemma0 = solve 4 (λ a b c d → ((a ⊙ b ⊙ ξ) ⊙ ξ ⊙ (ξ ⊙ c ⊙ d)) ⊜ (a ⊙ (b ⊙ (c ⊙ d)))) refl
  -- assoc-lemma0 :
  assoc-lemma0ms = solve 4 (λ a b c d → (((a ⊙ b) ⊙ c) ⊙ d) ⊜ (a ⊙ (b ⊙ (c ⊙ d)))) refl
  assoc-lemma-5ms = solve 5 (λ a b c d e → ((((a ⊙ b) ⊙ c) ⊙ d) ⊙ e) ⊜ (a ⊙ (b ⊙ (c ⊙ (d ⊙ e))))) refl
  assoc-lemma-7ms = solve 2 (λ a b → ((ξ ⊙ a) ⊙ b) ⊜ ((a ⊙ ξ) ⊙ b)) refl
  assoc-lemma-8ms = solve 5 (λ a b c d e → ((a ⊙ (b ⊙ c)) ⊙ (d ⊙ e)) ⊜ (a ⊙ (b ⊙ (c ⊙ (d ⊙ e))))) refl 
  assoc-lemma-9ms = solve 7 (λ a b c d e f g → ((a ⊙ (b ⊙ c)) ⊙ (d ⊙ (e ⊙ (f ⊙ g)))) ⊜ (a ⊙ ((b ⊙ ((c ⊙ (d ⊙ e)) ⊙ f)) ⊙ g))) refl

  --
  -- postulate assoc-lemma0 : Set
