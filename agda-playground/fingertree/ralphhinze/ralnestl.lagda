-- Higher order nested datatypes


-- All taken from this paper:
--  http://web.comlab.ox.ac.uk/oucl/work/ralf.hinze/publications/IAI-TR-98-12.ps.gz
%include polycode.fmt
%include lhs2TeX.fmt

\begin{code}

{-# OPTIONS --sized-types #-}

module ralnestl where

\end{code}

\begin{code}
  module bush where

    data Bush (A : Set) : Set where
      Leaf : A → Bush A
      Fork : Bush A → Bush A → Bush A

\end{code}

\begin{code}
  module ral where

    data Leaf (A : Set) : Set where
      LEAF : A → Leaf A

    data Fork (B : Set → Set)(A : Set) : Set where
      FORK : (B A) → (B A) → Fork B A

\end{code}
\begin{code}
    data RandomAccessList (B : Set → Set) (A : Set) : Set where
      Nil : RandomAccessList B A
      One : (B A) → (RandomAccessList (Fork B) A)
        → RandomAccessList B A
      Two : (Fork B A) → (RandomAccessList (Fork B) A)
        → RandomAccessList B A

\end{code}

\begin{code}
    IxSequence : Set → Set
    IxSequence = RandomAccessList Leaf

\end{code}

\begin{code}
    incr : {B : Set → Set} {A : Set} → (B A) → RandomAccessList B A
      → RandomAccessList B A
    incr b Nil = One b Nil
    incr b (One b₂ ds) = Two (FORK b b₂) ds
    incr b (Two b₂ ds) = One b (incr b₂ ds)
\end{code}
\begin{code}
    cons : {A : Set} → A → IxSequence A → IxSequence A
    cons a s = incr (LEAF a) s
\end{code}

\begin{code}
    open import Data.List

    fromList : {A : Set} → List A → IxSequence A
    fromList [] = Nil
    fromList (x ∷ xs) = cons x (fromList xs)
\end{code}
\begin{code}
    zero : {B : Set → Set} {A : Set} →
      RandomAccessList (Fork B) A →
      RandomAccessList B A
    zero Nil = Nil
    zero (One b ds) = Two b (zero ds)
    zero (Two (FORK b₁ b₂) ds) = Two b₁ (One b₂ ds)

\end{code}

\begin{code}
    open import Data.Product

    data View (A : Set) : Set where
      Vnil : View A
      VCns : A × IxSequence A → View A

    front : {A : Set} → IxSequence A → View A
    front Nil = Vnil
    front (One (LEAF x) ds) = VCns (x , zero ds)
    front (Two (FORK (LEAF a) b) ds) = VCns (a , One b ds)

\end{code}

\begin{code}
    append : {A : Set} → A → IxSequence A → IxSequence A
    append x seq with front seq
    append x seq | Vnil = cons x Nil
    append x seq | VCns (head , tail) = cons head (append x tail)
\end{code}

\begin{code}
  module ral-sized where
    -- binary tree
    open import Size

    data Leaf (A : Set) : Set where
      LEAF : A → Leaf A
    data Fork (B : Set → Set)(A : Set) : Set where
      FORK : (B A) → (B A) → Fork B A

    data RandomAccessList (B : Set → Set)(A : Set) : {i : Size} → Set where
      Nil : ∀ {i} → RandomAccessList B A {i}
      One : ∀ {i} → (B A) → (RandomAccessList (Fork B) A {i})
        → RandomAccessList B A {↑ i}
      Two : ∀ {i} → (Fork B A) → (RandomAccessList (Fork B) A {i})
        → RandomAccessList B A {↑ ↑ i}

    IxSequence : Set → {i : Size} → Set
    IxSequence = RandomAccessList Leaf

    incr : {B : Set → Set} {A : Set} {i : Size} → (B A)
      → RandomAccessList B A {i} → RandomAccessList B A {↑ i}
    incr b Nil = One b Nil
    incr b (One b₂ ds) = Two (FORK b b₂) ds
    incr b (Two b₂ ds) = {!   !}  -- One b (incr b₂ ds)
\end{code}
