module examples_for_diss where


open import Data.Nat

data Vec (A : Set) : ℕ → Set where
  nil : Vec A 0
  _∷_ : ∀ {n : ℕ} → A → Vec A n → Vec A (suc n)


sum : ∀ {n : ℕ} → Vec ℕ n → Vec ℕ n → Vec ℕ n
sum nil nil = nil
sum (x ∷ xs) (y ∷ ys) = (x + y) ∷ (sum xs ys)
