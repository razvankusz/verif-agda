%include polycode.fmt
%include lhs2TeX.fmt
\begin{code}
module test where
\end{code}
\begin{code}
  data ℕ : Set where
    zero : ℕ
    suc : ℕ → ℕ
\end{code}

\begin{code}
  _+_ : ℕ → ℕ → ℕ
  zero + m = m
  suc n + m = suc (n + m)
\end{code}

\begin{code}
  data Vec (A : Set) : ℕ → Set where
    nil : Vec A zero
    _∷_ : ∀ {n : ℕ} → A → Vec A n → Vec A (suc n)
\end{code}


\begin{code}
  infix 4 _==_
  data _==_ : ℕ → ℕ → Set where
    z : zero == zero
    s : ∀ {n m} → n == m → (suc n) == (suc m)
\end{code}

\begin{code}
  0-left : ∀ (n : ℕ) → (zero + n == n)
  0-left zero = z
  0-left (suc n) = s (0-left n)
\end{code}

\begin{code}
  infix 4 _≤_
  data _≤_ : ℕ → ℕ → Set where
    leq-zero : ∀ {n : ℕ} → zero ≤ n
    leq-suc  : ∀ {n : ℕ} {m : ℕ} → m ≤ n → suc m ≤ suc n

  leq-antisym : ∀ (n : ℕ) (m : ℕ) → (n ≤ m) → (m ≤ n) → (n == m)
  leq-antisym zero zero leq-zero leq-zero = z
  leq-antisym zero (suc m) leq-zero ()
  leq-antisym (suc n) (suc m) (leq-suc p1) (leq-suc p2) = s (leq-antisym n m p1 p2)
\end{code}
