module Permutation(A : Set) where

open import Data.List
open import Data.Product
open import Algebra
open import Algebra.Structures


data _/_⟶_ : List A → A → List A → Set where
  removeFromHead : {x : A} {xs : List A} → (x ∷ xs) / x ⟶ xs
  removeFromTail : {x y  : A} {xs ys : List A} → xs / y ⟶ ys →
                    (x ∷ xs) / y ⟶ (x ∷ ys)

data _∼_ : List A → List A → Set where
  ∼[] : [] ∼ []
  ∼x  : {x : A} {xs ys xs' ys' : List A} → (xs / x ⟶ xs') →
                                           (ys / x ⟶ ys') →
                                           (xs' ∼ ys')
            → xs ∼ ys

data _∼p_ : List A → List A × List A → Set where
  ∼[]r : (xs : List A) → xs ∼p ([] , xs)
  ~[]l : (xs : List A) → xs ∼p (xs , [])
  
