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

-- We will not be able to implement this function. Agda does not use the information
-- that a particular term has failed to match some patterns when doing partial evaluation
-- quote aaron stump.




format : (f : String) → format-t f
format f = {!   !}
