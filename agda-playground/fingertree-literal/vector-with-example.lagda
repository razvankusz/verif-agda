\begin{code}
open import Data.Vec
open import Data.Nat
open import numbers using (+comm)

open import Agda.Builtin.Equality

module vector-with-example where

  append : ∀ {a n m} → {A : Set a}
          → Vec A n
          → Vec A m
          → (p : +comm n m)
          → Vec A (m + n)
  append [] ys p = ys
  append (x ∷ xs) ys p = x ∷ (append xs ys)
\end{code}
