begin{code}
module test where
  open import Data.Nat

  data Vec (A : Set) : ℕ → Set where
    nil : Vec A 0
    _∷_ : ∀ {n : ℕ} → A → Vec A n → Vec A (suc n)


  sum nil nil = nil
  sum (x ∷ xs) (y ∷ ys) = (x + y) ∷ (sum xs ys)
\end{code}
