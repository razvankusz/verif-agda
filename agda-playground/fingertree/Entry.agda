-- Wrapper for entries
open import AlgebraStructures
open import SizeW using (SizeW; getSize)

module Entry where
  data Entry {a}(A : Set a) : Set a where
    entry : (x : A) → Entry A

  m : ∀ {a}{A : Set a} → (x : Entry A) → SizeW {a}
  m x = SizeW.size 1

  getEntry : ∀{a}{A : Set a} → Entry A → A
  getEntry (entry x) = x

  instance entry-measure : ∀{a}{A : Set a} → Measured (Entry A) SizeW
  entry-measure = measured m
