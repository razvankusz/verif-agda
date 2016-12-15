module FingerTree-Isabelle where

open import Class.Reduce
open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false)
open import Size
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

data Node {a : Level} (A : Set a) : Set a where
  Tip : A → Node A
  Node2 : Node A → Node A → Node A
  Node3 : Node A → Node A → Node A → Node A

data Digit {a : Level} (A : Set a) : Set a where
  One : Node A → Digit A
  Two : Node A → Node A → Digit A
  Three : Node A → Node A → Node A → Digit A
  Four : Node A → Node A → Node A → Node A → Digit A

data FingerTree {a : Level} (A : Set a) : Set a where
  Empty : FingerTree A
  Single : Node A → FingerTree A
  Deep : Digit A → FingerTree A → Digit A → FingerTree A

-- --------------------------------------------------------------
infixr 5 _◁'_
_◁'_ : ∀ {a} → {A : Set a} → Node A → FingerTree A → FingerTree A
x ◁' Empty = Single x
x ◁' Single x₁ = Deep (One x) Empty (One x₁)
x ◁' Deep (One x₁) ft x₂ = Deep (Two x x₁) ft x₂
x ◁' Deep (Two x₁ x₂) ft x₃ = Deep (Three x x₁ x₂) ft x₃
x ◁' Deep (Three x₁ x₂ x₃) ft x₄ = Deep (Four x x₁ x₂ x₃) ft x₄
x ◁' Deep (Four x₁ x₂ x₃ x₄) ft x₅ = Deep (Two x x₁) ((Node3 x₂ x₃ x₄) ◁' ft) x₅

infixr 5 _◁_
_◁_ : ∀ {a} → {A : Set a} → A → FingerTree A → FingerTree A
x ◁ ft = (Tip x) ◁' ft

test-tree : FingerTree ℕ
test-tree = (1 ◁ 2 ◁ 3 ◁ 4 ◁ 5 ◁ 4 ◁ 5 ◁ 4 ◁ 5 ◁ 4 ◁ 5 ◁ Empty)

-- ---------------------------------------------------------------

foldr-node : ∀ {a} → {A : Set a} → {B : Set a} → (f : A → B → B) → Node A → (ε : B) → B
foldr-node f (Tip x) ε = f x ε
foldr-node f (Node2 n n₁) ε = foldr-node f n (foldr-node f n₁ ε)
foldr-node f (Node3 n n₁ n₂) ε = foldr-node f n (foldr-node f n₁ (foldr-node f n₂ ε))

foldr-digit : ∀ {a} → {A : Set a} → {B : Set a} → (f : A → B → B) → Digit A → (ε : B) → B
foldr-digit f (One x) ε = foldr-node f x ε
foldr-digit f (Two x x₁) ε = foldr-node f x (foldr-node f x₁ ε)
foldr-digit f (Three x x₁ x₂) ε = foldr-node f x (foldr-node f x₁ (foldr-node f x₂ ε))
foldr-digit f (Four x x₁ x₂ x₃) ε = foldr-node f x (foldr-node f x₁ (foldr-node f x₂ (foldr-node f x₃ ε)))

foldr-ft : ∀ {a} → {A : Set a} → {B : Set a} → (f : A → B → B) → FingerTree A → (ε : B) → B
foldr-ft f Empty ε = ε
foldr-ft f (Single x) ε = foldr-node f x ε
foldr-ft f (Deep x ft x₁) ε = foldr-digit f x (foldr-ft f ft (foldr-digit f x₁ ε))

-- -------------------------------------------------------------------

foldl-node : ∀ {a} → {A : Set a} → {B : Set a} → (f : B → A → B) → (ε : B) → Node A → B
foldl-node f ε (Tip x) = f ε x
foldl-node f ε (Node2 n n₁) = foldl-node f (foldl-node f ε n) n₁
foldl-node f ε (Node3 n n₁ n₂) = foldl-node f (foldl-node f (foldl-node f ε n) n₁) n₂

foldl-digit : ∀ {a} → {A : Set a} → {B : Set a} → (f : B → A → B) → B → Digit A → B
foldl-digit f z (One x) = foldl-node f z x
foldl-digit f z (Two x x₁) = foldl-node f (foldl-node f z x) x₁
foldl-digit f z (Three x x₁ x₂) = foldl-node f (foldl-node f (foldl-node f z x) x₁) x₂
foldl-digit f z (Four x x₁ x₂ x₃) = foldl-node f (foldl-node f (foldl-node f (foldl-node f z x) x₁) x₂) x₃

foldl-ft : ∀ {a} → {A : Set a} → {B : Set a} → (f : B → A → B) → B → FingerTree A → B
foldl-ft f z Empty = z
foldl-ft f z (Single x) = foldl-node f z x
foldl-ft f z (Deep x t x₁) = foldl-digit f (foldl-ft f (foldl-digit f z x) t) x₁



-- -------------------------------------------------------------------------
-- here I am trying to prove the original lemma using the Isabelle structure

Associative : ∀ {A} → (A → A → A) → Set
Associative _⊕_ = ∀ x y z → x ⊕ (y ⊕ z) ≡ (x ⊕ y) ⊕ z

Commutative :  ∀ {A} → (A → A → A) → Set
Commutative _⊕_ = ∀ x y → (x ⊕ y) ≡ (y ⊕ x)


foldr-com : ∀ {A} (n : Node A) → (m : Node A) → (fun : A → A → A) → (z : A) →
            (assoc : Associative fun) → (comm : Commutative fun) →
            foldr-node fun n (foldr-node fun m z) ≡ foldr-node fun m (foldr-node fun n z)
foldr-com (Tip x) (Tip x₁) fun z assoc comm =
  begin
      fun x (fun x₁ z)
    ≡⟨ sym (cong (fun x) (comm z x₁)) ⟩
      fun x (fun z x₁)
    ≡⟨ assoc x z x₁ ⟩
      fun (fun x z) x₁
    ≡⟨ comm (fun x z) x₁ ⟩
      fun x₁ (fun x z)
    ∎
foldr-com (Tip x) (Node2 m m₁) fun z assoc comm =
  begin
    fun x (foldr-node fun m (foldr-node fun m₁ z))
  ≡⟨ {!  !} ⟩ {!   !}
foldr-com (Tip x) (Node3 m m₁ m₂) fun z assoc comm = {!   !}
foldr-com (Node2 n n₁) m fun z assoc comm = {!   !}
foldr-com (Node3 n n₁ n₂) m fun z assoc comm = {!   !}

node-reduce : ∀ {A} (n : Node A) → (fun : A → A → A) → (z : A) →
              (assoc : Associative fun) → (comm : Commutative fun) →
              foldr-node fun n z ≡ foldl-node fun z n
node-reduce (Tip x) fun z assoc comm = comm x z
node-reduce (Node2 n n₁) fun z assoc comm = begin
  foldr-node fun n (foldr-node fun n₁ z) ≡⟨ {!   !} ⟩ {!   !}
node-reduce (Node3 n n₁ n₂) fun z assoc comm = {!   !}

fingertree-reduce : ∀  {A} (ft : FingerTree A) → (fun : A → A → A) → (base : A) →
                  (assoc : Associative fun) → (comm : Commutative fun) →
                  foldr-ft fun ft base ≡ foldl-ft fun base ft
fingertree-reduce Empty fun z assoc comm = refl
fingertree-reduce (Single x) fun z assoc comm with foldr-node fun x z
... | v   = {!   !}
fingertree-reduce (Deep x ft x₁) fun z assoc comm = {!   !}
