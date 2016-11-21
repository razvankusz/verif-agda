open import Data.Bool using (Bool; true; false; if_then_else_)
open import Data.List
open import Data.Nat hiding (_≤_; _<_; compare)
open import Data.Product
open import Data.Unit hiding (_≟_)
open import Level

open import Relation.Binary hiding (_⇒_)
open import Relation.Nullary


module llrb
  (order : StrictTotalOrder Level.zero Level.zero Level.zero) where

  open module sto = StrictTotalOrder order
  A = StrictTotalOrder.Carrier order

  LowerBounds = List A
  UpperBounds = List A

  infix 5 _isleftof_
  _isleftof_ : A → UpperBounds → Set
  z isleftof [] = ⊤
  z isleftof (x ∷ β) = z < x × z isleftof β

  infix 5 _isrightof_
  _isrightof_ : A → LowerBounds → Set
  z isrightof [] = ⊤
  z isrightof (x ∷ γ) = x < z × z isrightof γ

  infix 4 _⇒ᵣ_
  data _⇒ᵣ_ : UpperBounds → UpperBounds → Set where
    ■     : ∀ {γ} → γ ⇒ᵣ γ
    keep_ : ∀ {γ γ' b} → γ ⇒ᵣ γ' → b ∷ γ ⇒ᵣ b ∷ γ'
    skip_ : ∀ {γ γ' b} → γ ⇒ᵣ γ' → b ∷ γ ⇒ᵣ γ'
    cover_,_ : ∀ {β β' x y} → x < y → x ∷ y ∷ β ⇒ᵣ β' → x ∷ β ⇒ᵣ β'
