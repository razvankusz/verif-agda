
module numbers where
  open import Data.Nat
  open import Relation.Binary.PropositionalEquality

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
