open import Data.Nat
open import Data.Sum
open import Data.Product
open import Relation.Binary.PropositionalEquality
data Node {l} (A : Set l) : Set l where
  Node2 : A -> A -> Node A
  Node3 : A -> A -> A -> Node A

data Digit {l} (A : Set l) : {n : ℕ} -> Set l where
  One : A -> Digit A {1}
  Two : A -> A -> Digit A {2}
  Three : A -> A -> A -> Digit A {3}
  Four : A -> A -> A -> A -> Digit A {4}

{-was trying to give size information in the type, it's not at simple as I thought-}

data FingerTree {l} (A : Set l) : {size : ℕ} -> Set l where
  Empty : FingerTree A {0}
  Single : A -> FingerTree A {1}
  Deep : ∀ {i n m : ℕ} -> Digit A {n} -> FingerTree (Node A) {i} ->
    Digit A {m} -> (FingerTree A {i + n + m})


infixr 5 _::_
_::_ : ∀ {i l} {A : Set l} -> A -> FingerTree A {i} -> FingerTree A {i + 1}
x :: Empty = Single x
x :: Single x₁ = Deep (One x) Empty (One x₁)
x :: Deep (One x₁) xs x₂ = {!  !}
x :: Deep (Two x₁ x₂) xs x₃ = {!   !}
x :: Deep (Three x₁ x₂ x₃) xs x₄ = {!   !}
x :: Deep (Four x₁ x₂ x₃ x₄) xs x₅ = {!   !}
