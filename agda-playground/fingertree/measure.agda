open import Relation.Binary.PropositionalEquality
open import Level
record Monoid {a}(V : Set a) : Set a where
  constructor monoid
  infixr 5 _∙_
  field
    ε : V
    _∙_ : V → V → V
    ε-left  : ∀ (v : V) → ε ∙ v ≡ v
    ε-right : ∀ (v : V) → v ∙ ε ≡ v
    ∙-assoc : ∀ (a b c : V) → a ∙ (b ∙ c) ≡ (a ∙ b) ∙ c
