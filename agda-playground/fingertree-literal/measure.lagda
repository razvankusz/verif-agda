\begin{code}
open import Relation.Binary.PropositionalEquality
open import Level
open import Data.Bool
record Monoid {a}(V : Set a) : Set a where
  constructor monoid
  infixr 5 _∙_
  field
    ε : V
    _∙_ : V → V → V
    ε-left  : ∀ (v : V) → ε ∙ v ≡ v
    ε-right : ∀ (v : V) → v ∙ ε ≡ v
    ∙-assoc : ∀ (a b c : V) → a ∙ (b ∙ c) ≡ (a ∙ b) ∙ c
    _==_ : V → V → Bool
    ==refl : ∀ (a : V) → (b : V) → (a ≡ b) → (a == b ≡ true)
    ==trans : ∀ (a : V) → (b : V) → (c : V) → (a == b ≡ true) → (b == c ≡ true) → (a == c ≡ true)
    ==sym : ∀ (a : V) → (b : V) → (a == b ≡ true) → (b == a ≡ true)
\end{code}
