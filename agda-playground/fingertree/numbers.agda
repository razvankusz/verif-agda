
module numbers where
  open import Data.Nat
  open import Data.List
  open import Data.Bool
  open import Relation.Binary.PropositionalEquality
  open ≡-Reasoning

  0+ : (m : ℕ) → (0 + m) ≡ m
  0+ m = refl

  +0 : (m : ℕ) → (m + 0) ≡ m
  +0 zero = refl
  +0 (suc m) rewrite +0 m = refl

  +assoc : ∀ (x y z : ℕ) → (x + (y + z)) ≡ ((x + y) + z)
  +assoc zero y z = refl
  +assoc (suc x) y z rewrite +assoc x y z = refl

  +suc : ∀ (x y : ℕ) → (x + (suc y)) ≡ (suc (x + y))
  +suc zero y = refl
  +suc (suc x) y rewrite +suc x y = refl
  -- (x + (suc y))
  +comm : ∀ (x y : ℕ) → (x + y) ≡ (y + x)
  +comm zero y rewrite +0 y = refl
  +comm (suc x) y rewrite +suc x y |
                          +suc y x |
                          +comm x y = refl

  _==_ : ℕ → ℕ → Bool
  ℕ.zero == ℕ.zero = true
  ℕ.zero == suc m = false
  suc n == ℕ.zero = false
  suc n == suc m = n == m


  lemma++ : ∀ {a} {A : Set a} → (x : A) → (xs : List A) → (ys : List A)
        → (x ∷ xs) ++ ys ≡ x ∷ (xs ++ ys)
  lemma++ x xs ys =
        begin
          x ∷ xs ++ ys
        ∎

  []+ : ∀ {a} {A : Set a} → (xs : List A) → ([] ++ xs) ≡ xs
  []+ xs = refl

  +[] : ∀ {a} {A : Set a} → (xs : List A) → (xs ++ []) ≡ xs
  +[] [] = refl
  +[] (x ∷ xs) =
    begin
      x ∷ xs ++ []
    ≡⟨ lemma++ x xs [] ⟩
      cong (_∷_ x) (+[] xs)

  ++assoc : ∀ {a} {A : Set a} → (xs : List A) → (ys : List A) → (zs : List A) →
      xs ++ (ys ++ zs) ≡ (xs ++ ys) ++ zs
  ++assoc [] ys zs = refl
  ++assoc (x ∷ xs) ys zs = cong (_∷_ x) (++assoc xs ys zs)
