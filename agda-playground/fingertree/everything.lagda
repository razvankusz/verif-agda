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


\begin{code}
_▷_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
        {s : V} → (x : A) → FingerTree A V {s} →
        FingerTree A V {s ∙ ∥ x ∥}
\end{code}



--ViewL

\begin{code}
data ViewL {a}(A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :
            {s : V} → Set a where
  NilL :  ViewL A V {ε}
  ConsL : ∀ {z : V} (x : A) → (xs : FingerTree A V {z}) →
          ViewL A V {∥ x ∥ ∙ z}
\end{code}


--viewL

\begin{code}
viewL : ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
            {i : V} → FingerTree A V {i} → ViewL A V {i}
\end{code}

\begin{code}
deepL : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
      {s : V} →
      (pr : Maybe (Digit A)) →
      (ft : FingerTree (Node A V) V {s}) →
      (sf : Digit A) →
      FingerTree A V {measure-maybe-digit pr ∙ s ∙ measure-digit sf}
\end{code}

--split

\begin{code}
data Split-d {a} (A : Set a) (V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :
          {μ : V} → Set a where
  split-d : ∀ {μ₁ : V} {μ₂ : V} →
            (FingerTree A V {μ₁}) →
            (x : A) →
            (FingerTree A V {μ₂}) →
            Split-d A V {μ₁ ∙ ∥ x ∥ ∙ μ₂}
\end{code}

--split-main

\begin{code}

split-Tree : ∀ {a} {A : Set a} {V : Set a}
            ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
            -- type class information
            {μ : V} →
            (p : V → Bool) → (i : V) →
            -- predicate and inital value
            (ft : FingerTree A V {μ}) → Maybe (Split-d A V {μ})
            -- argument and proof that the split has the same size
split-Tree p i Empty = nothing  -- cannot split an empty tree
split-Tree ⦃ mo ⦄ p i (Single e) = just (split-Tree-single p i e)
split-Tree p i (Deep pr ft sf) = just (split-Tree-if p i pr ft sf vpr refl vft refl)
  where
    vpr = p (i ∙ (measure-digit pr))
    vft = p ((i ∙ measure-digit pr) ∙ measure-tree ft)
\end{code}


\begin{code}
split-Tree-if : ∀ {a} {A : Set a} {V : Set a}
            ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
            -- type class information
            {μ : V} →
            (p : V → Bool) → (i : V) →
            -- predicate and initial value
            (pr : Digit A) →
            (ft : FingerTree (Node A V) V {μ}) →
            (sf : Digit A) →
            -- flattened deep constructor
            (vpr : Bool) → (vpr ≡ p (i ∙ measure-digit pr)) →
            -- passing the cummulated value at the prefix + proof of not cheating
            (vft : Bool) → (vft ≡ p ((i ∙ measure-digit pr) ∙ (measure-tree ft))) →
            -- passing the cummulated value at the suffix + proof of not cheating
            Split-d A V {(measure-digit pr) ∙ μ ∙ (measure-digit sf)}
            -- giving back the correct-sized split
split-Tree-if p i pr ft sf false pr1 false pr2
  = split-Tree2 p ((i ∙ measure-digit pr) ∙ (measure-tree ft)) pr ft sf
    -- case2 : predicate becomes true in suffix or it doesn't become true at all
split-Tree-if p i pr ft sf false pr1 true pr2
  = split-Tree3 p i pr ft sf (sym pr1) (sym pr2)
    -- case3 : predicate becomes true in tree
split-Tree-if p i pr ft sf true pr1 vft pr2
  = split-Tree1 p i pr ft sf
    -- case1 : predicate becomes true in prefix
\end{code}
