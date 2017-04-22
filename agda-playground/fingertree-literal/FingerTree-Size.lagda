\begin{code}

-- FingerTrees with a natural size -- which is also the number of elements.

open import Class.Reduce
open import Level using (Level)
open import Data.Maybe
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false; if_then_else_)
open import Function using(case_of_)
open import Size

open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

data Node {a : Level} (A : Set a)(V : Set a) : Set a where
  Node2 : V → A → A → Node A V
  Node3 : V → A → A → A → Node A V

data Digit {a : Level} (A : Set a) : {i : ℕ} → Set a where
  One   : A → Digit A {1}
  Two   : A → A → Digit A {2}
  Three : A → A → A → Digit A {3}
  Four  : A → A → A → A → Digit A {4}

data FingerTree {a : Level} (A : Set a)(V : Set a) : {i : ℕ} → Set a where
  Empty  : FingerTree A V {0}
  Single : A → FingerTree A V {1}
  Deep   : ∀ {n m p : ℕ} → V → Digit A {n} → FingerTree (Node A V) V {m} → Digit A {p} →
           FingerTree A V {n + m + p}

record Monoid {a} (V : Set a) : Set a where
  constructor monoid
  infixr 5 _∙_
  field
    ε : V
    _∙_ : V → V → V
    ε-left  : ∀ (v : V) → ε ∙ v ≡ v
    ε-right : ∀ (v : V) → v ∙ ε ≡ v
    ∙-assoc : ∀ (a b c : V) → a ∙ (b ∙ c) ≡ (a ∙ b) ∙ c

record Measured {a}(A : Set a)(V : Set a) : Set a where
  constructor measured
  field
    ∥_∥ : A → V

open Measured {{...}} public
open Monoid {{...}} public



node2 : ∀ {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y

node3 : ∀ {a : Level} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄  → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z

measure-node : {a : Level} {A : Set a} {V : Set a} → Node A V → V
measure-node (Node2 x x₁ x₂) = x
measure-node (Node3 x x₁ x₂ x₃) = x

measure-digit : {a : Level}{n : ℕ}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Digit A {n} → V
measure-digit (One x) = ∥ x ∥
measure-digit (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
measure-digit (Three x x₁ x₂) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥
measure-digit (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥

measure-tree : {a : Level}{n : ℕ}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V {n} → V
measure-tree Empty = ε
measure-tree (Single x) = ∥ x ∥
measure-tree (Deep v x ft x₁) = v

instance uplift : ∀ {a}{A : Set a}{V : Set a} ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

deep : ∀ {a : Level}{pn mn sn : ℕ}{A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
  (pr : Digit A {pn}) → (ft : FingerTree (Node A V) V {mn}) → (sf : Digit A {sn}) →
  FingerTree A V {pn + mn + sn}
deep pr ft sf = Deep ((measure-digit pr) ∙ ((measure-tree ft) ∙ (measure-digit sf))) pr ft sf

infixr 5 _◁_
_◁_ : ∀ {a}{n : ℕ}{A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → FingerTree A V {n} → FingerTree A V {suc n}
_◁_ a Empty = Single a
_◁_ a (Single b) = deep (One a) Empty (One b)
_◁_ a (Deep v (One b) ft sf) = deep (Two a b) ft sf
_◁_ a (Deep v (Two b c) ft sf) = deep (Three a b c) ft sf
_◁_ a (Deep v (Three b c d) ft sf) = deep (Four a b c d) ft sf
_◁_ a (Deep v (Four b c d e) ft sf) = deep (Two a b) ((node3 c d e) ◁ ft) sf
\end{code}
