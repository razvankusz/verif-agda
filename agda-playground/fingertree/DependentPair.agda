open import Relation.Binary.PropositionalEquality

record Σ {a} (A : Set a) (B : A → Set a) : Set a where
  constructor ⟨_,_⟩
  field
    fst : A
    snd : B fst
open Σ public 
