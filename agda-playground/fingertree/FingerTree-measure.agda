module FingerTree-measure where

open import Class.Reduce
open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false)
open import measure
open import Size

open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
------------------------------------------------------------------------

-- Finger tree =
--   Digit (of Nodes) + Finger Tree (of Nodes) + Digit (of Nodes)

-- prove that V is a monoid




data Node {a : Level} (A : Set a)(V : Set a) : Set a where
  Node2 : V → A → A → Node A V
  Node3 : V → A → A → A → Node A V

data Digit {a : Level} (A : Set a): Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A

data FingerTree {a : Level} (A : Set a)(V : Set a) : Set a where
  Empty  : FingerTree A V
  Single : A → FingerTree A V
  Deep   : V → Digit A → FingerTree (Node A V) V → Digit A →
           FingerTree A V

record Measure {a}(A : Set a)(V : Set a) : Set a where
  constructor measure
  field
    ε : V
    _∙_ : V → V → V
    ∥_∥ : A → V
    ε-left  : ∀ (v : V) → ε ∙ v ≡ v
    ε-right : ∀ (v : V) → v ∙ ε ≡ v
    ∙-assoc : ∀ (a b c : V) → a ∙ (b ∙ c) ≡ (a ∙ b) ∙ c

node2 : ∀ {a : Level} {A : Set a}{V : Set a} → (m : Monoid V) → (∥_∥ : A → V) → A → A → Node A V
node2 m ∥_∥ x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y
  where
    _∙_ = Monoid._∙_ m

node3 : ∀ {a : Level} {A : Set a}{V : Set a} → (m : Monoid V) → (∥_∥ : A → V) → A → A → A → Node A V
node3 m ∥_∥ x y z = Node3 (∥ x ∥ ∙ (∥ y ∥ ∙ ∥ z ∥)) x y z
  where
    _∙_ = Monoid._∙_ m

measure-node : {a : Level} {A : Set a} {V : Set a} → Node A V → V
measure-node (Node2 x x₁ x₂) = x
measure-node (Node3 x x₁ x₂ x₃) = x

measure-digit : {a : Level} {A : Set a}{V : Set a} → (m : Monoid V) → (∥_∥ : A → V) → Digit A → V
measure-digit m ∥_∥ (One x) = ∥ x ∥
measure-digit m ∥_∥ (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
  where
    _∙_ = Monoid._∙_ m
measure-digit m ∥_∥ (Three x x₁ x₂) = ∥ x ∥ ∙ (∥ x₁ ∥ ∙ ∥ x₂ ∥)
  where
    _∙_ = Monoid._∙_ m
measure-digit m ∥_∥ (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ (∥ x₁ ∥ ∙ (∥ x₂ ∥ ∙ ∥ x₃ ∥))
  where
    _∙_ = Monoid._∙_ m

measure-tree : {a : Level} {A : Set a}{V : Set a} → (m : Monoid V) →
  (∥_∥ : A → V) → FingerTree A V → V
measure-tree m ∥_∥ Empty = Monoid.ε m
measure-tree m ∥_∥ (Single x) = ∥ x ∥
measure-tree m ∥_∥ (Deep v x ft x₁) = v

-- deep pr m sf = Deep (kprk ⊕ kmk ⊕ ksf k) pr m sf
deep : ∀ {a : Level} {A : Set a}{V : Set a} → (mv : Monoid V) → (∥_∥ : A → V) →
  (pr : Digit A) → (m : FingerTree (Node A V) V) → (sf : Digit A) →
  FingerTree A V
deep mv ∥_∥ pr m sf = Deep ((measure-digit mv ∥_∥ pr) ∙ ((measure-tree mv measure-node m) ∙ (measure-digit mv ∥_∥ sf))) pr m sf
  where
    _∙_ = Monoid._∙_ mv


infixr 5 _♯_♯_◁_
_♯_♯_◁_ : ∀  {a} {A : Set a} {V : Set a} → (mv : Monoid V) → (∥_∥ : A → V) → A → FingerTree A V → FingerTree A V
mv ♯ ∥_∥ ♯ a ◁ Empty                     = Single a
mv ♯ ∥_∥ ♯ a ◁ Single b                  = deep mv ∥_∥  (One   a) Empty (One b)
mv ♯ ∥_∥ ♯ a ◁ Deep v (One   b) m sf       = deep mv ∥_∥ (Two   a b) m sf
mv ♯ ∥_∥ ♯ a ◁ Deep v (Two   b c) m sf     = deep mv ∥_∥ (Three a b c) m sf
mv ♯ ∥_∥ ♯ a ◁ Deep v (Three b c d) m sf   = deep mv ∥_∥ (Four  a b c d) m sf
mv ♯ ∥_∥ ♯ a ◁ Deep v (Four  b c d e) m sf = deep mv ∥_∥ (Two   a b) (mv ♯ ∥_∥ ♯ node3 mv ∥_∥ c d e ◁ m) sf
