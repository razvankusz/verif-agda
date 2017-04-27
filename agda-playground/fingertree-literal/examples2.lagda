\begin{code}
open import Data.Nat

data Node (A : Set) : Set where
  Node2 : A → A → Node A
  Node3 : A → A → A → Node A

data Tree (A : Set) : Set where
  Zero : A → Tree A
  Succ : Tree (Node A) → Tree A

test-tree : Tree ℕ
test-tree = Succ(Succ(Succ(Zero
              (Node2
                  (Node3
                    (Node3 1 2 3)
                    (Node2 4 5)
                    (Node2 6 7))
                  (Node2
                    (Node3 8 9 10)
                    (Node2 11 12))))))
\end{code}
