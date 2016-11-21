open import Data.Nat
open import Data.List hiding(take ; drop)
open import Data.Vec hiding(_++_ ; take ; drop)
open import Agda.Builtin.Equality

data Bit : Set where
  O : Bit
  I : Bit

Word : ℕ → Set
Word n = Vec Bit n

data SnocView {A : Set} : List A → Set where
  Nil : SnocView []
  Snoc : (xs : List A) → (x : A) → SnocView (xs ++ (x ∷ []))

view : {A : Set} → (xs : List A) → SnocView xs
view [] = Nil
view (x ∷ xs) with view xs
view (x ∷ .[]) | Nil = Snoc [] x
view (x₁ ∷ .(xs ++ x ∷ [])) | Snoc xs x = Snoc (x₁ ∷ xs) x

xs : List ℕ
xs = 1 ∷ 2 ∷ 3 ∷ 4 ∷ []

take : ∀ {A m} → (n : ℕ) -> Vec A (n + m) → Vec A n
take zero _ = []
take (suc n) (x ∷ xs) = x ∷ take n xs

drop : ∀ {A m} → (n : ℕ) → Vec A (n + m) → Vec A m
drop zero xs = xs
drop (suc n) (x ∷ xs) = drop n xs


rotateRight : {A : Set} → List A → List A
rotateRight xs with view xs
rotateRight .[] | Nil = []
rotateRight .(xs ++ x ∷ []) | Snoc xs x = x ∷ xs
