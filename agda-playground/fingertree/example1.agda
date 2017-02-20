module example1 where

  open import Data.Nat
  open import Data.List
  open import numbers
  open import AlgebraStructures
  open import FingerTree-measure-size

  import GeneralFingerTree
    ℕ (List ℕ) (list-monoid ℕ) (list-measure ℕ) as p
  import GeneralFingerTree
    ℕ ℕ (sum-monoid) (measured (λ x → x)) as q

  test : p.G-FingerTree
  test = 1 ◁ 2 ◁ 3 ◁ 5 ◁ Empty
  test2 : q.G-FingerTree
  test2 = 1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ Empty

  test3 : p.GFT-Pair
  test3 = p.pack test

  test4 : p.GFT-Pair
  test4 = p.rev test3
