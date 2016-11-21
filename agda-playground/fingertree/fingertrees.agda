open import Data.Bool using (Bool; true; false)
open import Data.Nat using (ℕ; suc; _<_)

open import Agda.Builtin.Equality
open import Level
open import Size 
module fingertrees where

  data Digit {l} (A : Set l) : Set l where
    One : A → Digit A
    Two : A → A → Digit A
    Three : A → A → A → Digit A
    Four : A → A → A → A → Digit A

  full : {l : Level} → {A : Set l} → Digit A → Bool
  full (Four _ _ _ _) = true
  full _ = false

  size-digit : {A : Set} → Digit A → ℕ
  size-digit (One x) = 1
  size-digit (Two x x₁) = 2
  size-digit (Three x x₁ x₂) = 3
  size-digit (Four x x₁ x₂ x₃) = 4

  append-digit : {l : Level} → {A : Set l} → A → ( d : Digit A ) → (full d ≡ false) → Digit A
  append-digit a (One x) c = Two a x
  append-digit a (Two x x₁) c = Three a x x₁
  append-digit a (Three x x₁ x₂) c = Four a x x₁ x₂
  append-digit a (Four x x₁ x₂ x₃) ()

  test-digit : Digit Bool
  test-digit = Three false false true

  test-digit-append : Digit Bool
  test-digit-append = append-digit false test-digit refl

  data Node {l} (A : Set l) : Set l where
    Node2 : A → A → Node A
    Node3 : A → A → A → Node A

  data FingerTree {l} (A : Set l) : Set l where
    Empty : FingerTree A
    Single : A → FingerTree A
    Deep  : Digit A → FingerTree (Node A) → Digit A → FingerTree A

  infixr 5 _◁_
  _◁_ : ∀ {i a} {A : Set a} → A → FingerTree A {i} → FingerTree A {↑ i}
  a ◁ Empty                     = Single a
  a ◁ Single b                  = Deep (One   a) Empty (One b)
  a ◁ Deep (One   b) m sf       = Deep (Two   a b) m sf
  a ◁ Deep (Two   b c) m sf     = Deep (Three a b c) m sf
  a ◁ Deep (Three b c d) m sf   = Deep (Four  a b c d) m sf
  a ◁ Deep (Four  b c d e) m sf = Deep (Two   a b) (Node3 c d e ◁ m) sf

  infixl 5 _▷_
  _▷_ : ∀ {i a} {A : Set a} → FingerTree A {i} → A → FingerTree A {↑ i}
  Empty                     ▷ a = Single a
  Single b                  ▷ a = Deep (One b) Empty (One a)
  Deep pr m (One   b)       ▷ a = Deep pr m (Two   b a)
  Deep pr m (Two   c b)     ▷ a = Deep pr m (Three c b a)
  Deep pr m (Three d c b)   ▷ a = Deep pr m (Four  d c b a)
  Deep pr m (Four  e d c b) ▷ a = Deep pr (m ▷ Node3 e d c) (Two b a)
