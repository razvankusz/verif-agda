module binary where

data Node (A : Set) : Set where
  node : A → A → Node A

data BinTree (A : Set) : Set where
  empty : BinTree A
  single : A → BinTree A
  deep :  BinTree (Node A) → BinTree A

open import Data.Nat
example : BinTree ℕ

example = deep( deep (single (node (node 1 2) (node 3 4))))
