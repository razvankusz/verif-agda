open import Data.String
open import Data.Char
open import Data.Nat
open import Data.List

format-th : List Char → Set
format-th ('%' ∷ 'n' ∷ f) = ℕ → format-th f
format-th ('%' ∷ 's' ∷ f) = String → format-th f
format-th (c ∷ f) = format-th f
format-th [] = String

format-t : String → Set
format-t s = format-th (toList s)

format : (f : String) → format-t f
format f = {!   !}
