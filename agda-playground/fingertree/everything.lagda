%include polycode.fmt
%include lhs2TeX.fmt

\begin{code}
open import Data.List
open import Data.Maybe
open import Data.Nat
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
\end{code}

\begin{code}
data List (A : Set) : Set where
  [] : List A
  _∷_ : A → List A → List A
\end{code}

\begin{code}
sort : ∀ {n : ℕ} → (xs : Vec A n) → (SortedList xs)
\end{code}

\begin{code}
data SortedList : {n : ℕ} → Vec A n → Set where
  [] : SortedList []
  [_] : (x : A) → SortedList (x ∷ [])
  _∷_ : ∀ {n : ℕ} {ys : Vec A n} {zs}
        → (x : A)
        → (xs : SortedList ys)
        → (all (λ a → x ≤ a) ys ≡ true)
        → (x ins ys ≡ zs)
        → (SortedList zs)
\end{code}



\begin{code}
head : ∀ {A} → List A → A
head x ∷ xs = x
\end{code}


-- \begin{code}
-- +assoc : ∀ (a b c : ℕ) → a + (b + c) ≡ (a + b) + c
-- +assoc zero b c = refl
-- +assoc (suc a) b c = cong suc (+assoc a b c)
-- \end{code}

-- -- node11
-- \begin{code}
-- data Node {a} (A : Set a)(V : Set a)
--           ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : Set a where
--   Node2 : (v : V) → (x : A) → (y : A) →
--           (v ≡ ∥ x ∥ ∙ ∥ y ∥) → Node A V
--   Node3 : (v : V) → (x : A) → (y : A) → (z : A) →
--           (v ≡ ∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) → Node A V
-- \end{code}
--
-- -- digit11
-- \begin{code}
--
-- data Digit {a} (A : Set a): Set a where
--   One   : A → Digit A
--   Two   : A → A → Digit A
--   Three : A → A → A → Digit A
--   Four  : A → A → A → A → Digit A
--
-- \end{code}
--
-- -- FingerTree
\begin{code}
data FingerTree {a} (A : Set a)(V : Set a)
                ⦃ mo : Monoid V ⦄
                ⦃ m : Measured A V ⦄ :
                {μ : V} → Set a where
  Empty  :  FingerTree A V {ε}
  Single :  (e : A) → FingerTree A V {∥ e ∥}
  Deep   :  {s : V}
            → (pr : Digit A)
            → FingerTree (Node A V) V {s}
            → (sf : Digit A)
            → FingerTree A V {measure-digit pr ∙ s ∙ measure-digit sf}
\end{code}

-- smartc onstructors
\begin{code}
node2 : ∀ {a} {A : Set a}{V : Set a }
        ⦃ mo : Monoid V ⦄
        ⦃ m : Measured A V ⦄
        → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y refl

node3 : ∀ {a} {A : Set a}{V : Set a }
        ⦃ mo : Monoid V ⦄
        ⦃ m : Measured A V ⦄
        → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z refl

\end{code}
-- -- cons
\begin{code}
_◁_ : ∀ {a} {A : Set a} {V : Set a}
      ⦃ mo : Monoid V ⦄
      ⦃ m : Measured A V ⦄
      {s : V}
      → (x : A)
      → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {s}
      → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {∥ x ∥ ∙ s}
\end{code}

\begin{code}
_◁_ {l} {A} {V} ⦃ mo ⦄ a Empty
  rewrite (Monoid.ε-right mo) ∥ a ∥
  = Single {l}{A}{V} a
_◁_ {l} {A} {V} ⦃ mo ⦄ ⦃ m ⦄ {.(∥ e ∥)} a (Single e)
  rewrite assoc-lemma1 ⦃ mo ⦄ ⦃ m ⦄ a e
  = Deep (One a) Empty (One e)
a ◁ Deep (One b) ft sf
  rewrite ∙-assoc (∥ a ∥) (∥ b ∥) (measure-tree ft ∙ measure-digit sf)
  = Deep (Two a b) ft sf
a ◁ Deep (Two b c) ft sf
  rewrite ∙-assoc (∥ a ∥) (∥ b ∥ ∙ ∥ c ∥) (measure-tree ft ∙ measure-digit sf)
  = Deep (Three a b c) ft sf
a ◁ Deep (Three b c d) ft sf
  rewrite ∙-assoc (∥ a ∥) (∥ b ∥ ∙ ∥ c ∥ ∙ ∥ d ∥) (measure-tree ft ∙ measure-digit sf)
  = Deep (Four a b c d) ft sf
a ◁ Deep (Four b c d e) ft sf
  rewrite assoc-lemma2 a b c d e (measure-tree ft) (measure-digit sf)
  = Deep (Two a b) ((node3 c d e) ◁ ft) sf
\end{code}


-- to list
\begin{code}
toList-ft : ∀ {a}{A : Set a}{V : Set a }
          ⦃ mo : Monoid V ⦄
          ⦃ m : Measured A V ⦄ {s : V}
          → FingerTree A V {s}
          → List A
toList-ft Empty = []
toList-ft (Single x) = x ∷ []
toList-ft (Deep x₁ ft x₂) = (toList-dig x₁) ++
                            (flatten-list (toList-ft ft)) ++
                            (toList-dig x₂)
\end{code}

-- cons correct
\begin{code}
cons-correct : ∀ {a}{A : Set a}{V : Set a }
        ⦃ mo : Monoid V ⦄
        ⦃ m : Measured A V ⦄
        {v : V} →
        (x : A) →
        (ft : FingerTree A V {v}) →
        toList-ft (x ◁ ft) ≡ (x ∷ []) ++ (toList-ft ft)
\end{code}

-- view left
\begin{code}
data ViewL {a}(A : Set a)(V : Set a)
          ⦃ mo : Monoid V ⦄
          ⦃ m : Measured A V ⦄ :
          {s : V} → Set a where
  NilL :  ViewL A V {ε}
  ConsL : ∀ {z}
          (x : A)
          → (xs : FingerTree A V {z})
          → ViewL A V {∥ x ∥ ∙ z}
\end{code}

-- viewl and deepL

\begin{code}
mutual
  viewL : ∀ {a} {A : Set a}{V : Set a }
          ⦃ mo : Monoid V ⦄
          ⦃ m : Measured A V ⦄
          {i : V} → FingerTree A V {i}
          → ViewL A V {i}
  viewL Empty = NilL
  viewL ⦃ mo ⦄ ⦃ m ⦄ (Single x)
    rewrite sym (Monoid.ε-right mo ∥ x ∥)
    = ConsL x Empty
  viewL ⦃ mo ⦄ ⦃ m ⦄ (Deep pr ft sf)
    rewrite measure-digit-lemma1 ⦃ mo ⦄ ⦃ m ⦄ pr ft sf
    = ConsL (head-dig pr) (deepL (tails-dig pr) ft sf)

  deepL : ∀ {a}{A : Set a}{V : Set a }
        ⦃ mo : Monoid V ⦄
        ⦃ m : Measured A V ⦄
        {s : V}
        → (pr : Maybe (Digit A))
        → (ft : FingerTree (Node A V) V {s})
        → (sf : Digit A)
        → FingerTree A V {measure-maybe-digit pr ∙ s ∙ measure-digit sf}
  -- deepL pr ft sf = {!   !}
  deepL (just x) ft sf = Deep x ft sf
  deepL nothing ft sf with viewL ft
  deepL ⦃ mo ⦄ ⦃ m ⦄ nothing ft sf | NilL
    rewrite (Monoid.ε-left mo) (ε ∙ measure-digit sf)
          | (Monoid.ε-left mo) (measure-digit sf)
    = toTree-dig sf
  deepL nothing ft sf | ConsL (Node2 x x₁ x₂ r) x₃
    rewrite r
          | assoc-lemma3 x₁ x₂ (measure-tree x₃) sf
    = Deep (Two x₁ x₂) x₃ sf -- Deep (Two x₁ x₂) x₃ sf
  deepL nothing ft sf | ConsL (Node3 x x₁ x₂ x₃ r) x₄
    rewrite r
          | assoc-lemma4 x₁ x₂ x₃ (measure-tree x₄) sf
    = Deep (Three x₁ x₂ x₃) x₄ sf -- Deep (Three x₁ x₂ x₃) x₄ sf

\end{code}

-- viewl correct
\begin{code}
viewL-correct : ∀ {a}{A : Set a} {V : Set a}
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              → {v : V}
              → (ft : FingerTree A V {v})
              → (toList-view (viewL ft) ≡ toList-ft ft)
\end{code}

-- flatten-list
\begin{code}

flatten-list : ∀ {a}{A : Set a}{V : Set a }
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              → List (Node A V)
              → List A
flatten-list [] = []
flatten-list (x ∷ xs) = (toList-node x) ++ (flatten-list xs)

\end{code}

-- foldl
\begin{code}
foldl : ∀ {a} {A : Set a} {V : Set a}
        {W : Set a}
        ⦃ mo : Monoid V ⦄
        ⦃ m : Measured A V ⦄
        {s : V}
        → (W → A → W)
        → W
        → FingerTree A V {s}
        → W
foldl f i Empty = i
foldl f i (Single e) = f i e
foldl {W = W} f i (Deep pr ft sf) =
  foldl-dig f
            (foldl (foldl-node f)
                   (foldl-dig f i pr)
                   ft
            )
            sf
\end{code}


-- fold-correct
\begin{code}
foldl-correct : ∀ {a} {A : Set a}{V : Set a}
              {W : Set a}
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              → {s : V}
              → (f : W → A → W)
              → (σ : W)
              → (ft : FingerTree A V {s})
              → (foldl f σ ft ≡ Data.List.foldl f σ (toList-ft ft))
\end{code}

-- fold-lemma
\begin{code}
foldl-lemma0 : ∀ {a} {A : Set a} {V : Set a}
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              → {s : V}
              → (v : V)
              → (ft : FingerTree A V {s})
              → (foldl foldfun v ft ≡ v ∙ s)
\end{code}

-- viewL-example
\begin{code}
view-lemma3 : ∀ {a}{A : Set a} {V : Set a }
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              → (ft : FingerTree A V)
              → (viewL ft ≡ NilL)
              → (ft ≡ Empty)
view-lemma3 Empty p = refl
view-lemma3 (Single x) ()
view-lemma3 (Deep x x₁ ft x₂) ()
\end{code}


-- append-fail
\begin{code}
append : ∀ {a n m} → {A : Set a}
        → Vec A n
        → Vec A m
        → Vec A (m + n)
append [] ys = ys
append (x ∷ xs) ys = x ∷ (append xs ys)
\end{code}

-- append-fail2
\begin{code}
append : ∀ {a} {A : Set a} → A → List A → List A
append x xs with xs
append x xs | [] = Data.List.[ x ]
append x xs | y ∷ ys = y ∷ append x ys
\end{code}

-- split
\begin{code}
data Split-d {a} (A : Set a) (V : Set a)
            ⦃ mo : Monoid V ⦄
            ⦃ m : Measured A V ⦄ :
            {μ : V} → Set a where
  split-d : ∀ {μ₁ : V} {μ₂ : V}
          → (FingerTree A V {μ₁})  -- left side
          → (x : A)                -- middle
          → (FingerTree A V {μ₂})  -- right side
          → Split-d A V {μ₁ ∙ ∥ x ∥ ∙ μ₂}
\end{code}

-- main split
\begin{code}
split-Tree : ∀ {a} {A : Set a} {V : Set a}
            ⦃ mo : Monoid V ⦄
            ⦃ m : Measured A V ⦄
            {μ : V}                              -- type class information
            → (p : V → Bool) → (i : V)       -- predicate and inital value
            → (ft : FingerTree A V {μ})                        -- argument
            → Maybe (Split-d A V {μ})
split-Tree p i Empty
  = nothing                                  -- cannot split an empty tree
split-Tree p i (Single e)
  = just (split-Tree-single p i e)                     -- superfluous case
split-Tree p i (Deep pr ft sf)
  = just (split-Tree-if p i pr ft sf vpr refl vft refl)  -- recursive case
  where
    vpr = p (i ∙ (measure-digit pr))
    vft = p ((i ∙ measure-digit pr) ∙ measure-tree ft)
\end{code}

-- if --
\begin{code}
split-Tree-if : ∀ {a} {A : Set a} {V : Set a}
              ⦃ mo : Monoid V ⦄
              ⦃ m : Measured A V ⦄
              {μ : V}
              → (p : V → Bool) → (i : V) → -- predicate and initial value
              → (pr : Digit A)             -- prefix
              → (ft : FingerTree (Node A V) V {μ}) -- nested tree
              → (sf : Digit A)           -- suffix
              → (vpr : Bool)             -- value of predicate after prefix
              → (vpr ≡ p (i ∙ measure-digit pr)) -- correctness check
              → (vft : Bool)             -- value of predicate after tree
              → (vft ≡ p ((i ∙ measure-digit pr) ∙ (measure-tree ft))) -- check
              → Split-d A V {(measure-digit pr) ∙ μ ∙ (measure-digit sf)}
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


-- sizeW
\begin{code}
data SizeW {a} : Set a  where
  size : ∀ (n : ℕ) → SizeW {a}

ε : ∀ {a : Level} → SizeW {a}
ε = size 0

_∙_ :  ∀ {a} → SizeW {a} → SizeW {a} → SizeW {a}
size n ∙ size m = size (n + m)
\end{code}

-- monoid and measure c
\begin{code}
-- assign a constant value of 1 to any entry.
measure : ∀ {a}{A : Set a} → (x : Entry A) → SizeW {a}
measure x = SizeW.size 1

-- by using the instance keyword, the methods that require an argument
-- of this type, specified by ⦃_⦄, will be able to access it.
instance entry-measure : ∀{a}{A : Set a} → Measured (Entry A) SizeW
entry-measure = measured measure

instance size-monoid : ∀ {a} → Monoid (SizeW {a})
size-monoid = ...
\end{code}

-- seq instance
\begin{code}
Seq : ∀ {a}(A : Set a) SizeW → Set a
Seq {a} A s = FingerTree (Entry A) (SizeW {a}) {s}
\end{code}


-- tab
\begin{code}
_!_ : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ → Maybe A
seq ! n with split-Tree (λ x → size n SizeW.< x) SizeW.ε seq
seq ! n | just (split-d _ x _) = just (getEntry x)
seq ! n | nothing = nothing
\end{code}

-- set
\begin{code}
set : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ → A → Seq A s
set seq n y with split-Tree (λ x → size n SizeW.< x) SizeW.ε seq
set seq n y | just (split-d left x right)
  rewrite ∙-assoc (measure-tree left)
                  (size 1)
                  (measure-tree right)
  = concat ((entry y) ▷ left) right
set seq n y | nothing = seq
\end{code}

-- well-founded
\begin{code}
-- comparing Seq-pairs is just comparing the size component
_⋖_ : ∀ {a} {A : Set a} → Seq-pair A → Seq-pair A → Set a
_⋖_ = _<<_ on to-size

open Inverse-image
  {A = Seq-pair A}
  {_<_ = _<<_}
  to-size
  renaming (well-founded to <<-<-wf)

-- the comparison operation defined on the Seq-pair is well-founded
<-WF = <<-<-wf <<-WF
\end{code}

-- reverse1
\begin{code}
open WF.All (<-WF) renaming (wfRec to <rec)

rev : Seq-pair A → Seq-pair A
rev π = <rec a _ go π
  module Rev where
  go : ∀ s → (∀ p → p ⋖ s → Seq-pair A) → Seq-pair A
  go ⟨ fst , snd ⟩ rec with viewL snd
  go ⟨ .(size 0) , snd ⟩ rec | NilL = pack Empty
  go ⟨ _ , snd ⟩ rec | ConsL x xs =
      rec (pack (xs)) (one-step (measure-tree xs)) ▷ x
\end{code}


-- property
\begin{code}
property : Seq-pair A → Set a
property xs = to-size (rev xs) ≡ to-size xs
-- example property
\end{code}
-- induction
\begin{code}
inductive_step : ∀ {s : SizeW}
          → (seq : Seq A ((size 1) ∙ s))
          → (x : Entry A)
          → (xs : Seq A s)
          → (viewL seq ≡ ConsL x xs)
          → (property (pack xs))
          → (property (pack seq))
\end{code}

-- -- cons-deep-one
-- \begin{code}
-- a ◁ Deep (One b) ft sf rewrite
--       ∙-assoc (∥ a ∥) (∥ b ∥) (measure-tree ft ∙ measure-digit sf)
--         = Deep (Two a b) ft sf
-- \end{code}
--
-- -- cons--deep-four
-- \begin{code}
-- a ◁ Deep (Four b c d e) ft sf rewrite
--       assoc-lemma2 a b c d e (measure-tree ft) (measure-digit sf)
--         = Deep (Two a b) ((node3 c d e) ◁ ft) sf
-- \end{code}
--
-- -- assoc-lemma2
-- \begin{code}
-- assoc-lemma2 : ∀ {a}{A : Set a}{V : Set a}
--         ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
--         (a : A) → (b : A) → (c : A) → (d : A) → (e : A) → (s : V) → (f : V) →
--           (mo Monoid.∙ Measured.∥ m ∥ a)
--               ((mo Monoid.∙
--                 (mo Monoid.∙ Measured.∥ m ∥ b)
--                 ((mo Monoid.∙ Measured.∥ m ∥ c)
--               ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e))))
--             ((mo Monoid.∙ s) f))
--             ≡
--           (mo Monoid.∙ (mo Monoid.∙ Measured.∥ m ∥ a) (Measured.∥ m ∥ b))
--               ((mo Monoid.∙
--                (mo Monoid.∙
--                 (mo Monoid.∙ Measured.∥ m ∥ c)
--                 ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e)))
--                s)
--               f)
-- \end{code}
-- --
--
-- \begin{code}
-- _▷_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
--         {s : V} → (x : A) → FingerTree A V {s} →
--         FingerTree A V {s ∙ ∥ x ∥}
-- \end{code}
--
--
--
-- --ViewL
--
-- \begin{code}
-- data ViewL {a}(A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :
--             {s : V} → Set a where
--   NilL :  ViewL A V {ε}
--   ConsL : ∀ {z : V} (x : A) → (xs : FingerTree A V {z}) →
--           ViewL A V {∥ x ∥ ∙ z}
-- \end{code}
--
--
-- --viewL
--
-- \begin{code}
-- viewL : ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
--             {i : V} → FingerTree A V {i} → ViewL A V {i}
-- \end{code}
--
-- \begin{code}
-- deepL : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
--       {s : V} →
--       (pr : Maybe (Digit A)) →
--       (ft : FingerTree (Node A V) V {s}) →
--       (sf : Digit A) →
--       FingerTree A V {measure-maybe-digit pr ∙ s ∙ measure-digit sf}
-- \end{code}
--
-- --split
--
-- \begin{code}
-- data Split-d {a} (A : Set a) (V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :
--           {μ : V} → Set a where
--   split-d : ∀ {μ₁ : V} {μ₂ : V} →
--             (FingerTree A V {μ₁}) →
--             (x : A) →
--             (FingerTree A V {μ₂}) →
--             Split-d A V {μ₁ ∙ ∥ x ∥ ∙ μ₂}
-- \end{code}
--
-- --split-main
--
-- ̱̱̱\begin{code}
--
-- split-Tree : ∀ {a} {A : Set a} {V : Set a}
--             ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
--             -- type class information
--             {μ : V} →
--             (p : V → Bool) → (i : V) →
--             -- predicate and inital value
--             (ft : FingerTree A V {μ}) → Maybe (Split-d A V {μ})
--             -- argument and proof that the split has the same size
-- split-Tree p i Empty = nothing  -- cannot split an empty tree
-- split-Tree ⦃ mo ⦄ p i (Single e) = just (split-Tree-single p i e)
-- split-Tree p i (Deep pr ft sf) = just (split-Tree-if p i pr ft sf vpr refl vft refl)
--   where
--     vpr = p (i ∙ (measure-digit pr))
--     vft = p ((i ∙ measure-digit pr) ∙ measure-tree ft)
-- \end{code}
--
--
-- \begin{code}
-- split-Tree-if : ∀ {a} {A : Set a} {V : Set a}
--             ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄
--             -- type class information
--             {μ : V} →
--             (p : V → Bool) → (i : V) →
--             -- predicate and initial value
--             (pr : Digit A) →
--             (ft : FingerTree (Node A V) V {μ}) →
--             (sf : Digit A) →
--             -- flattened deep constructor
--             (vpr : Bool) → (vpr ≡ p (i ∙ measure-digit pr)) →
--             -- passing the cummulated value at the prefix + proof of not cheating
--             (vft : Bool) → (vft ≡ p ((i ∙ measure-digit pr) ∙ (measure-tree ft))) →
--             -- passing the cummulated value at the suffix + proof of not cheating
--             Split-d A V {(measure-digit pr) ∙ μ ∙ (measure-digit sf)}
--             -- giving back the correct-sized split
-- split-Tree-if p i pr ft sf false pr1 false pr2
--   = split-Tree2 p ((i ∙ measure-digit pr) ∙ (measure-tree ft)) pr ft sf
--     -- case2 : predicate becomes true in suffix or it doesn't become true at all
-- split-Tree-if p i pr ft sf false pr1 true pr2
--   = split-Tree3 p i pr ft sf (sym pr1) (sym pr2)
--     -- case3 : predicate becomes true in tree
-- split-Tree-if p i pr ft sf true pr1 vft pr2
--   = split-Tree1 p i pr ft sf
--     -- case1 : predicate becomes true in prefix
-- \end{code}


-- reverse finger tree
\begin{code}
reverse-ft : ∀ {a} {A : Set a} {V : Set a}
          ⦃ mo : Monoid V ⦄
          ⦃ m : Measured A V ⦄
          {s : V}
          → (Σ V (λ v → FingerTree A V {v}))
          → (Σ V (λ v → FingerTree A V {v}))
reverse-ft {a} {A} {V} pair =
  foldl-pair cons-pair (pack-ft {A = A} {V = V} Empty) pair
\end{code}


-- ssseq
\begin{code}
data Same-Size-Seq : (s : SizeW {a}) → Set a where
  ssseq : ∀ {s} {z} → (Seq A s) → (Seq A z) → (s ≡ z) → Same-Size-Seq s
\end{code}
