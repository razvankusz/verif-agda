%include polycode.fmt
%include lhs2TeX.fmt

open import Data.Nat

\begin{code}
data Repr : ℕ → Set where
  z   : Repr 0
  2*_ : ∀ {n : ℕ} → Repr n → Repr (n * 2)
  2*_+1 : ∀ {n : ℕ} → Repr n → Repr (suc (n * 2))
\end{code}


\begin{code}
_+1 : ∀ {n : ℕ} → Repr n → Repr (suc n)
z +1 = 2* z +1
(2* m) +1 = 2* m +1
2* m +1 +1 = 2* (m +1)

repr : (n : ℕ) → Repr n
repr zero = z
repr (suc n) = (repr n) +1
\end{code}
