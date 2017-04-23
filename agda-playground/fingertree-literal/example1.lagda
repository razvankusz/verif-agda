\begin{code}
open import Data.Product

data _≡_ {a} {A : Set a} (x : A) : A → Set a where
  refl : x ≡ x

data List (A : Set) : Set where
  [] : List A
  _∷_ : A → List A → List A

data Nest (A : Set) : Set where
  Nil : Nest A
  Cons : A → Nest (A × A) → Nest A

head : ∀ {A} → List A → A
head (x ∷ xs) = x
head {A} [] = a-fake
  where
    postulate a-fake : A


open import Data.Nat

example : Nest ℕ
example = Cons 1 (Cons (2 , 3) (Cons ((4 , 5) , (6 , 7)) Nil))

open import Data.Vec

append : ∀ {a n m} → {A : Set a}
      → Vec A n
      → Vec A m
      → Vec A (n + m)
append [] ys = ys
append (x ∷ xs) ys = x ∷ append xs ys

snoc : ∀ {A} → A → List A → List A
snoc x xs with xs
snoc x xs | [] = x ∷ []
snoc x xs | y ∷ ys = y ∷ (snoc x ys)
\end{code}
