%include polycode.fmt
%include lhs2TeX.fmt

\begin{code}
module slides where
\end{code}

\begin{code}
  open import Data.Nat

  module list where
\end{code}
  \begin{code}
    data List (A : Set) : Set where
      [] : List A
      _∷_ : A → List A → List A
  \end{code}
  \begin{code}
  module vec where
  \end{code}
  \begin{code}
    data Vec (A : Set) : ℕ → Set where
      [] : Vec A 0
      _∷_ : ∀ {n} → A → Vec A n → Vec A (suc n)
    open import Data.Product
  \end{code}
  \begin{code}
  open import Data.Product
  \end{code}
  \begin{code}
  data Nest (A : Set) : Set where
    Nil : Nest A
    Cons : A → Nest (A × A) → Nest A
\end{code}
  \begin{code}

  ex : Nest ℕ
  ex = Cons 1 ( Cons (2 , 3) (Cons ((4 , 5) , (6 , 7)) Nil))

  \end{code}
  \begin{code}
  module fingertree where

    data Node {a} (A : Set a) : Set a where
      Node2 : A → A → Node A
      Node3 : A → A → A → Node A

    data Digit {a} (A : Set a) : Set a where
      One   : A → Digit A
      Two   : A → A → Digit A
      Three : A → A → A → Digit A
      Four  : A → A → A → A → Digit A
  \end{code}
  -- fingertree
  \begin{code}
    data FingerTree {a} (A : Set a) : Set a where
      Empty  : FingerTree A
      Single : A → FingerTree A
      Deep   : Digit A → FingerTree (Node A) → Digit A →
               FingerTree A
  \end{code}

  \begin{code}

    data ViewL {a}(A : Set a) : Set a where
      nilL : ViewL A
      consL : A → FingerTree A → ViewL A

  \end{code}

  \begin{code}
    viewL : ∀ {a} {A : Set a} → FingerTree A → ViewL A
    viewL ft = {!   !}
  \end{code}

  \begin{code}
    reverse : ∀{a} {A : Set a} → FingerTree A → FingerTree A
    reverse ft with viewL ft
    reverse ft | nilL = ft
    reverse ft | consL x xs = (reverse xs) ▷ x
  \end{code}

  \begin{code}
  open import Data.Empty
  \end{code}
  \begin{code}
  data Clist (A : Set) : Set where
     Var : A → Clist A
     Nil : Clist A
     RCons : ℕ → Clist (Maybe A) → Clist A
  \end{code}
  \begin{code}
   ex : CList ()
   clist2 = RCons 1 (RCons2 (RCons 3 (Var (just nothing))))
  \end{code}
