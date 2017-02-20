%include polycode.fmt
%include lhs2TeX.fmt



-- node11
\begin{code}
data Node {a} (A : Set a)(V : Set a)
          ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : Set a where
  Node2 : (v : V) → (x : A) → (y : A) →
          (v ≡ ∥ x ∥ ∙ ∥ y ∥) → Node A V
  Node3 : (v : V) → (x : A) → (y : A) → (z : A) →
          (v ≡ ∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) → Node A V
\end{code}

-- digit11
\begin{code}

data Digit {a} (A : Set a): Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A

\end{code}

-- FingerTree
\begin{code}
data FingerTree {a} (A : Set a)(V : Set a)
                ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :  {μ : V} → Set a where
  Empty  :  FingerTree A V {ε}
  Single :  (e : A) → FingerTree A V {∥ e ∥}
  Deep   :  {s : V} →
            (pr : Digit A) → FingerTree (Node A V) V {s} → (sf : Digit A) →
            FingerTree A V {measure-digit pr ∙ s ∙ measure-digit sf}
\end{code}


-- cons

\begin{code}
infixr 5 _◁_
_◁_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
      {s : V} → (x : A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {s} →
      FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {∥ x ∥ ∙ s}
\end{code}

-- cons-deep-one
\begin{code}
a ◁ Deep (One b) ft sf rewrite
      ∙-assoc (∥ a ∥) (∥ b ∥) (measure-tree ft ∙ measure-digit sf)
        = Deep (Two a b) ft sf
\end{code}

-- cons--deep-four
\begin{code}
a ◁ Deep (Four b c d e) ft sf rewrite
      assoc-lemma2 a b c d e (measure-tree ft) (measure-digit sf)
        = Deep (Two a b) ((node3 c d e) ◁ ft) sf
\end{code}

-- assoc-lemma2
\begin{code}
assoc-lemma2 : ∀ {a}{A : Set a}{V : Set a}
        ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
        (a : A) → (b : A) → (c : A) → (d : A) → (e : A) → (s : V) → (f : V) →
          (mo Monoid.∙ Measured.∥ m ∥ a)
              ((mo Monoid.∙
                (mo Monoid.∙ Measured.∥ m ∥ b)
                ((mo Monoid.∙ Measured.∥ m ∥ c)
              ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e))))
            ((mo Monoid.∙ s) f))
            ≡
          (mo Monoid.∙ (mo Monoid.∙ Measured.∥ m ∥ a) (Measured.∥ m ∥ b))
              ((mo Monoid.∙
               (mo Monoid.∙
                (mo Monoid.∙ Measured.∥ m ∥ c)
                ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e)))
               s)
              f)
\end{code}
