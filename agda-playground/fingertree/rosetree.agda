open import Data.List
open import Data.Nat

data RoseTree (A : Set) : Set where
  rose : A → List (RoseTree A) → RoseTree A
