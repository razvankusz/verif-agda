-- Definitions of the Monoid and Measured records, used in FingerTree. 

open import Relation.Binary.PropositionalEquality
open import Level
open import Data.Maybe
module AlgebraStructures where

  record Monoid {a} (V : Set a) : Set (suc a) where
   constructor monoid
   infixr 5 _∙_
   field
     ε : V
     _∙_ : V → V → V
     ε-left  : ∀ (v : V) → ε ∙ v ≡ v
     ε-right : ∀ (v : V) → v ∙ ε ≡ v
     ∙-assoc : ∀ (a b c : V) → a ∙ (b ∙ c) ≡ (a ∙ b) ∙ c
     _≲_ : V → V → Set a

  record Measured {a}(A : Set a)(V : Set a) : Set a where
    constructor measured
    field
      ∥_∥ : A → V
