%include polycode.fmt
%include lhs2TeX.fmt

\begin{code}
module test where
\end{code}


\begin{code}
  open import Data.Nat
  infix 4 _==_
  data _==_ : ℕ → ℕ → Set where
    ze : zero == zero
    sc : ∀ {n m} → n == m → (suc n) == (suc m)
\end{code}

  \begin{code}
  0-left : ∀ (n : ℕ) → (zero + n == n)
  0-left zero = ze
  0-left (suc n) = sc (0-left n)
  \end{code}

\begin{code}
  leq-antisym : ∀ (n : ℕ) (m : ℕ) → (n ≤ m) → (m ≤ n) → (n == m)
  leq-antisym zero zero z≤n z≤n = ze
  leq-antisym zero (suc m) z≤n ()
  leq-antisym (suc n) (suc m) (s≤s p1) (s≤s p2) = sc (leq-antisym n m p1 p2)
\end{code}

\begin{code}
  open import Relation.Binary.PropositionalEquality

  +assoc : ∀ (x y z : ℕ) → (x + (y + z)) ≡ ((x + y) + z)
  +assoc zero y z = refl
  +assoc (suc x) y z rewrite +assoc x y z = refl
\end{code}

\begin{code}
  open import Data.Nat
\end{code}

  This imports the standard library version of natural numbers, which is declared in the exactly same way.
  It allows us to use actual digits for their representations, which can enhance readability.

  Further down are some further proofs we need in order to show natural numbers are commutative.

\begin{code}
  +0 : (m : ℕ) → (m + 0) ≡ m
  +0 zero = refl
  +0 (suc m) rewrite +0 m = refl

  +suc : ∀ (x y : ℕ) → (x + (suc y)) ≡ (suc (x + y))
  +suc zero y = refl
  +suc (suc x) y rewrite +suc x y = refl
\end{code}

  Finally, the main proof:

\begin{code}
  +comm : ∀ (x y : ℕ) → (x + y) ≡ (y + x)
  +comm zero y rewrite +0 y = refl
  +comm (suc x) y rewrite +suc x y |
                          +suc y x |
                          +comm x y = refl
\end{code}

\begin{code}
  open ≡-Reasoning
\end{code}

  This is the module where all the equivalence reasoning primitives are declared.
  Now, the proof which uses this module.

\begin{code}
  +comm2 : ∀ (x y : ℕ) → (x + y) ≡ (y + x)
  +comm2 zero y =
      begin
        zero + y
      ≡⟨ sym (+0 y) ⟩
        y + zero
      ∎
  +comm2 (suc x) y =
    begin
      suc (x + y)
    ≡⟨ cong suc (+comm2 x y) ⟩
      suc (y + x)
    ≡⟨ sym (+suc y x) ⟩
      y + suc x
    ∎
\end{code}

  Although it is longer, due to the extra syntax, it allows reading off intermediate results, so that
  proofs become more readable. \\
  It can also aid the proving process. There are cases when you know it's
  possible to prove an equivalence from A to B inside of a bigger proof, but you want to leave that out
  for the moment and come back to it later.
  In this case, you can just introduce a hole in the ≡⟨ {!   !} ⟩ operator, and continue the main proof,
  filling in side lemmas at the end.
