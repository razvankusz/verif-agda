{-# OPTIONS --sized-types #-}
module Terms2 where

open import Level using (Level)
open import Size using (Size;↑_)
open import Data.Nat
data Incr {a : Level} (A : Set a) : Set a where
  Zero : Incr A
  Succ : A  → Incr A

mapI : ∀ {a : Level} {A : Set a} {B : Set a} → (A → B) → Incr A → Incr B
mapI f Zero     = Zero
mapI f (Succ x) = Succ (f x)


data Term {a : Level} (A : Set a) : {_ : Size} → Set a where
  Var : ∀ {i : Size} → A → Term A {↑ i}
  App : ∀ {i : Size} → Term A {i} → Term A {i} → Term A {↑ i}
  Lam : ∀ {i : Size} → Term (Incr A) {i} → Term A {↑ i}


mapT : ∀ {a : Level} {i : Size} {A : Set a} {B : Set a} → (A → B) → Term A {i} → Term B {i}
mapT f (Var {i} x)   = Var  (f x)
mapT f (App {i} a b) = App  (mapT f a) (mapT  f b)
mapT f (Lam {i} t)   = Lam  (mapT (mapI f) t)

gfoldT : ∀ {a : Level} →
           (M : Set a → Set a ) →
           (N : Set a → Set a ) →
           (v : ∀ (A : Set a) → M A →  N A) →
           (p : ∀ (A : Set a) → N A →  N A → N A ) →
           (l : ∀ (A : Set a) → N (Incr A) → N A) →
           (k : ∀ (A : Set a) → Incr (M A) -> M (Incr A)) →
           (A : Set a) →
           {i : Size}  →
           Term (M A) {i} →
           N A

gfoldT M N v p l k A (Var  x)   = v A x
gfoldT M N v p l k A  (App x y) = p A (gfoldT M N v p l k A x) (gfoldT M N v p l k A y)
gfoldT M N v p l k A {.(↑ i)} (Lam {i}  t)   = l A (gfoldT M N v p l k (Incr A)  (mapT  (k A) t))


-- gfoldT : ∀ {a : Level} →
--            (A : Set a) →
--            (M : Set a → Set a ) →
--            (N : Set a → Set a ) →
--            (v : M A →  N A) →
--            (p : N A →  N A → N A ) →
--            (l : N (Incr A) → N A) →
--            (k : Incr (M A) -> M (Incr A)) →
--            {i : Size}  →
--            Term (M A) {i} →
--            N A
-- gfoldT A M N v p l k (Var  x)   = v x
-- gfoldT A M N v p l k (App x y) = p (gfoldT A M N v p l k x) (gfoldT A M N v p l k y)
-- gfoldT A M N v p l k {.(↑ i)} (Lam {i}  t)   = l (gfoldT (Incr A) M N v p l k   (mapT k t))

-- {.(↑ i)}
