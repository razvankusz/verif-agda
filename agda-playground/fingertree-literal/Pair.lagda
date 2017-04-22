\begin{code}
module Pair where

  record _×_ {a} (A : Set a) (B : Set a) : Set a where
    constructor _,_
    field
      proj₁ : A
      proj₂ : B

  open _×_ public 
  -- data _×_ {a} (A : Set a) (B : Set a) : Set a where
  --   _,_ : A → B → A × B
  --
  -- proj₁ : ∀ {a} {A : Set a} {B : Set a} → A × B → A
  -- proj₁ (x , y) = x
  --
  -- proj₂ : ∀ {a} {A : Set a} {B : Set a} → A × B → B
  -- proj₂ (x , y) = y

  zip : ∀ {a} {A : Set a} {B : Set a} {C : Set a} {D : Set a} {E : Set a} {F : Set a} →
       (A → B → C) → (D → E → F) → (A × D) → (B × E) → (C × F)
  zip f g p q = f (proj₁ p) (proj₁ q) , g (proj₂ p) (proj₂ q)
\end{code}
