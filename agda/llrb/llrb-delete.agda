open import Data.Bool using (Bool; true; false; if_then_else_)
open import Data.List
open import Data.Nat hiding(_≤_; _<_; compare)
open import Data.Product
open import Data.Unit
open import Level

open import Relation.Binary hiding (_⇒_)
open import Relation.Nullary

module llrb-delete
  (order : StrictTotalOrder Level.zero Level.zero Level.zero) where
  open module sto = StrictTotalOrder order
  A = StrictTotalOrder.Carrier order

  LowerBounds = List A
  UpperBounds = List A

  infix 5 _isleftof_
  _isleftof_ : A -> UpperBounds -> Set
  z isleftof [] = StrictTotalOrder.Carrier order
  z isleftof (b ∷ β) = z < b × z isleftof β

  infix 5 _isrightof_
  _isrightof_ : A -> LowerBounds -> Set
  z isrightof [] = StrictTotalOrder.Carrier order
  z isrightof (b ∷ γ) = b < z × z isrightof γ

  infix 5 _=>r_
  data _=>r_ : UpperBounds -> UpperBounds -> Set where
    ◾         : ∀ {γ} -> γ =>r γ
    keep_     : ∀ {γ γ' b} -> γ =>r γ' -> _=>r_ (b ∷ γ) (b ∷ γ')
    skip_     : ∀ {γ γ' b} -> γ =>r γ' -> _=>r_ (b ∷ γ) γ'
    cover_,_  : ∀ {β β' x y} -> x < y -> (x ∷ y ∷ β) =>r β' -> (x ∷ β) =>r β'


  infix 5 _=>l_
  data _=>l_ : LowerBounds -> LowerBounds -> Set where
    ◾         : ∀ {γ} -> γ =>l γ
    keep_     : ∀ {γ γ' b} -> γ =>l γ' -> _=>l_ (b ∷ γ) (b ∷ γ')
    skip_     : ∀ {γ γ' b} -> γ =>l γ' -> _=>l_ (b ∷ γ) γ'
    cover_,_  : ∀ {β β' x y} -> x < y -> (y ∷ x ∷ β) =>l β' -> (y ∷ β) =>l β'

  [[_]]r : ∀ {β β'} -> β =>r β' -> (x : A) -> x isleftof β -> x isleftof β'
  [[ ◾ ]]r z p = p
  [[ keep c ]]r z (proj₁ , proj₂) = proj₁ , [[ c ]]r z proj₂
  [[ skip c ]]r z (_ , proj₂) = [[ c ]]r z proj₂
  [[ cover x₁ , c ]]r z (p₁ , p) = [[ c ]]r z (p₁ , trans p₁ x₁ , p)

  [[_]]l : ∀ {γ γ'} -> γ =>l γ' -> (x : A) -> x isrightof γ -> x isrightof γ'
  [[ ◾ ]]l z p = p
  [[ keep h ]]l z (proj₁ , proj₂) = proj₁ , [[ h ]]l z proj₂
  [[ skip h ]]l z (_ , proj₂) = [[ h ]]l z proj₂
  [[ cover q , h ]]l z (p₁ , p) = [[ h ]]l z (p₁ , trans q p₁ , p)


  data Color : Set where
    red : Color
    black : Color

  data Tree' (β : UpperBounds) (γ : LowerBounds) : Color -> ℕ -> Set where
    lf : Tree' β γ black 0
    nr : ∀ {n}(a : A) -> a isleftof β -> a isrightof γ ->
        Tree' (a ∷ β) γ black n -> Tree' β (a ∷ γ) black n ->
        Tree' β γ red n

    nb : ∀ {leftSonColor n}(a : A) -> a isleftof β -> a isrightof γ
        -> Tree' (a ∷ β) γ leftSonColor n -> Tree' β (a ∷ γ) black n
        -> Tree' β γ black (ℕ.suc n)
