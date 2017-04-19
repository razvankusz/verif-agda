module numbers where
  open import Data.Nat
  open import Data.List
  open import Data.Bool
  open import Relation.Binary.PropositionalEquality
  open ≡-Reasoning

  0+ : (m : ℕ) → (0 + m) ≡ m
  0+ m = refl

  +assoc : ∀ (x y z : ℕ) → (x + (y + z)) ≡ ((x + y) + z)
  +assoc zero y z = refl
  +assoc (suc x) y z rewrite +assoc x y z = refl

  +0 : (m : ℕ) → (m + 0) ≡ m
  +0 zero = refl
  +0 (suc m) rewrite +0 m = refl

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

  _<-nat_ : ℕ → ℕ → Bool
  zero <-nat m = true
  suc n <-nat zero = false
  suc n <-nat suc m = n <-nat m

  ≤-refl : ∀ (n : ℕ) → (n ≤ n)
  ≤-refl zero = z≤n
  ≤-refl (suc n) = s≤s (≤-refl n)

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


  list-foldl-lemma : ∀ {a} {A : Set a} {W : Set a} → (xs : List A) → (ys : List A) →
      (f : W → A → W) → (σ : W) → (foldl f σ (xs ++ ys) ≡ foldl f (foldl f σ xs) ys)
  list-foldl-lemma [] ys f σ = refl
  list-foldl-lemma (x ∷ xs) ys f σ = list-foldl-lemma xs ys f (f σ x)

  open import AlgebraStructures

  sum-monoid : Monoid ℕ
  sum-monoid = Monoid.monoid zero (_+_) 0+ +0 +assoc _≤_

  instance list-monoid : ∀ {a} (A : Set a) → Monoid (List A)
  list-monoid A = Monoid.monoid [] (_++_) []+ +[] ++assoc (λ _ _₁ → A)

  list-measure : ∀ {a} (A : Set a) → Measured A (List A)
  list-measure = λ {a} A → measured (λ x → x ∷ [])

-- view as half -------------------------------------------------------------

  data Repr : ℕ → Set where
    zr   : Repr 0
    2*_ : ∀ {n : ℕ} → Repr n → Repr (n * 2)
    2*_+1 : ∀ {n : ℕ} → Repr n → Repr (suc (n * 2))

  _+1 : ∀ {n : ℕ} → Repr n → Repr (suc n)
  zr +1 = 2* zr +1
  (2* m) +1 = 2* m +1
  2* m +1 +1 = 2* (m +1)

  repr : (n : ℕ) → Repr n
  repr zero = zr
  repr (suc n) = (repr n) +1
