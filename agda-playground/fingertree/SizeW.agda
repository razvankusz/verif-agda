-- this wraps around the natural numbers because we will end up having too many Instances of the same type (ℕ)
-- and we will have to specify them explicitly. This helps for readability.
open import Data.Nat
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
open import numbers
open import AlgebraStructures
open import Level
open import Data.Bool
module SizeW where
  data SizeW {a} : Set a  where
    size : ∀ (n : ℕ) → SizeW

  -- proving the monoid properties of this datatype
  ε : ∀ {a : Level} → SizeW {a}
  ε = size 0

  _∙_ :  ∀ {a} → SizeW {a} → SizeW {a} → SizeW {a}
  size n ∙ size m = size (n + m)

  _<ˢ_ : ∀ {a} → SizeW {a} → SizeW {a} → Bool
  size n <ˢ size m = n <-nat m

  ∙ε : ∀ {a} (s : SizeW {a}) → (s ∙ ε ≡ s)
  ∙ε (size n) = cong size (+0 n)

  ε∙ : ∀ {a} (s : SizeW {a}) → (ε ∙ s ≡ s)
  ε∙ (size n) = refl

  ∙-assoc : ∀ {a} (s p q : SizeW {a}) → (s ∙ (p ∙ q) ≡ (s ∙ p) ∙ q)
  ∙-assoc (size n) (size m) (size o) = cong size (+assoc n m o)

  -- in main program only export these ones
  instance size-monoid : ∀ {a} → Monoid (SizeW {a})
  size-monoid = monoid ε _∙_ ε∙ ∙ε ∙-assoc

  getSize : ∀ {a} → SizeW {a} → ℕ
  getSize (size n) = n
