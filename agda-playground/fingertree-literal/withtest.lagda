\begin{code}
open import Data.Nat
open import Data.List
open import Data.Product

data ViewPair (A : Set) : Set where
  Empty : ViewPair A
  Single : A → ViewPair A
  Pair : (A × A) → ViewPair A → ViewPair A

pairs : {A : Set} → List A → ViewPair A
pairs [] = Empty
pairs (x ∷ []) = Single x
pairs (x ∷ x₁ ∷ xs) = Pair (x , x₁) (pairs xs)

tolist : {A : Set} → ViewPair A → List A
tolist Empty = []
tolist (Single x) = x ∷ []
tolist (Pair (a , b) pxs) = a ∷ b ∷ (tolist pxs)

pairsum : {A : Set} → (A → A → A) → List A → List A
pairsum _+_ xs with pairs xs
pairsum _+_ xs | Empty = []
pairsum _+_ xs | Single x = x ∷ []
pairsum _+_ xs | Pair (a , b) pxs = (a + b) ∷ (pairsum _+_ (tolist pxs))
\end{code}
