open import Level

module clist {a : Level} where
  open import Data.Nat
  open import Data.Maybe
  open import Data.Empty
  open import Data.List
  --
  -- data Clist (A : Set a) : Set a  where
  --    Var : A → Clist A
  --    Nil : Clist A
  --    RCons : ℕ → Clist (Maybe A) → Clist A

  data Clist (A : Set) : Set where
     Var : A → Clist A
     Nil : Clist A
     RCons : ℕ → Clist (Maybe A) → Clist A

  data View (A : Set) : Set where
     NilV : View A
     ConsV : ℕ → Clist A → View A

  clist1 : Clist ⊥
  clist1 = RCons 1 (RCons 2 (RCons 3 (Var (just (nothing)))))

  shift : {A : Set} → Clist A → Clist (Maybe A)
  shift (Var x) = Var (just x)
  shift Nil = Nil
  shift (RCons x xs) = RCons x (shift xs)

  ccons : ℕ → Clist ⊥ → Clist ⊥
  ccons x xs = RCons x (shift xs)

  chead : Clist ⊥ → Maybe ℕ
  chead (Var ())
  chead Nil = nothing
  chead (RCons x c) = just x

  csnoc : {A : Set} → ℕ → Clist (Maybe A) → Clist A
  csnoc y (Var (just x)) = Var x
  csnoc y (Var nothing) = RCons y (Var nothing)
  csnoc y Nil = Nil
  csnoc y (RCons x c) = RCons x (csnoc y c)

  ctail : Clist ⊥ → Maybe (Clist ⊥)
  ctail (Var ())
  ctail Nil = nothing
  ctail (RCons x c) = just (csnoc x c)

  view : {A : Set} → Clist A → View A
  view (Var x) = NilV
  view Nil = NilV
  view (RCons x cl) = ConsV x (csnoc x cl)

  unwind : {A : Set} → ℕ → Clist A → List ℕ
  unwind ℕ.zero c = []
  unwind (ℕ.suc n) c with view c
  unwind (ℕ.suc n) c | NilV = []
  unwind (ℕ.suc n) c | ConsV x x₁ = x ∷ unwind n x₁
