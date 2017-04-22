\begin{code}
module FingerTree-Isabelle where

open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_; foldr; foldl)
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

-- - COMMENTS ---------------------------------------------------
--
-- One thing to note about this implementation is, although it makes
-- proofs easier and a lot more readable, it requires a lot more
-- invariants to be held explicitly. In the original implementation
-- by Ross Patterson, the invariants realted to level correctness are kept
-- in the type signature.

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
test-tree = (1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁
              1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁
              1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁
              1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁
              1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁
              1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ 1 ◁ Empty)

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

-- Abstraction to list

toList-node : ∀ {a} → {A : Set a} → Node A → List A
toList-node (Tip x) = x ∷ []
toList-node (Node2 n n₁) = (toList-node n) ++ (toList-node n₁)
toList-node (Node3 n n₁ n₂) = (toList-node n) ++ (toList-node n₁) ++ (toList-node n₂)

toList-digit : ∀ {a} → {A : Set a} → Digit A → List A
toList-digit (One x) = toList-node x
toList-digit (Two x x₁) = toList-node x ++ toList-node x₁
toList-digit (Three x x₁ x₂) = toList-node x ++ toList-node x₁ ++ toList-node x₂
toList-digit (Four x x₁ x₂ x₃) = toList-node x ++ toList-node x₁ ++ toList-node x₂ ++ toList-node x₃

toList-ft : ∀ {a} → {A : Set a} → FingerTree A → List A
toList-ft Empty = []
toList-ft (Single x) = toList-node x
toList-ft (Deep x ft x₁) = toList-digit x ++ toList-ft ft ++ toList-digit x₁

-- -----------------------------------------------------------------------------






-- -------------------------------------------------------------------------
-- here I am trying to prove the original lemma using the Isabelle structure

Associative : ∀ {A} → (A → A → A) → Set
Associative _⊕_ = ∀ x y z → x ⊕ (y ⊕ z) ≡ (x ⊕ y) ⊕ z

Commutative :  ∀ {A} → (A → A → A) → Set
Commutative _⊕_ = ∀ x y → (x ⊕ y) ≡ (y ⊕ x)

foldr-lemma0 : ∀ {a} {A : Set a}{B : Set a} → (xs : List A) → (ys : List A) → (zs : List A) → (xs ++ ys ≡ zs) →
              (fun : A → B → B) → (z : B) →
              foldr fun (foldr fun z ys) xs ≡ foldr fun z zs
foldr-lemma0 [] ys zs eq fun z = cong (foldr fun z) eq
foldr-lemma0 (x ∷ xs) ys zs eq fun z =
      begin
        fun x (foldr fun (foldr fun z ys) xs)
      ≡⟨ cong (fun x) (foldr-lemma0 xs ys (xs ++ ys) refl fun z) ⟩
        (begin
            fun x (foldr fun z (xs ++ ys))
          ≡⟨ sym (cong (λ _ → fun x (foldr fun z (xs ++ ys))) eq) ⟩
            fun x (foldr fun z (xs ++ ys))
          ≡⟨ cong (foldr fun z) eq ⟩
            foldr fun z zs
        ∎)

foldr-lemma1 : ∀ {a} {A : Set a}{B : Set a} →
            (xs : List A) → (ys : List A) → (zs : List A) → (ts : List A) →
            (xs ++ ys ++ zs ≡ ts) →
            (fun : A → B → B) → (z : B) →
            foldr fun (foldr fun (foldr fun z zs) ys) xs ≡ foldr fun z ts
foldr-lemma1 [] ys zs ts eq fun z = foldr-lemma0 ys zs ts eq fun z
foldr-lemma1 (x ∷ xs) ys zs ts eq fun z =
        begin
          fun x (foldr fun (foldr fun (foldr fun z zs) ys) xs)
         ≡⟨ cong (fun x) (foldr-lemma1 xs ys zs (xs ++ ys ++ zs) refl fun z) ⟩
          fun x (foldr fun z (xs ++ ys ++ zs))
         ≡⟨ refl ⟩
          (begin
             fun x (foldr fun z (xs ++ ys ++ zs))
            ≡⟨ sym (cong (λ _ → fun x (foldr fun z (xs ++ ys ++ zs))) eq) ⟩
             fun x (foldr fun z (xs ++ ys ++ zs))
            ≡⟨ cong (foldr fun z) eq ⟩
            foldr fun z ts
          ∎)

foldr-node-correct : ∀ {a} {A : Set a}{B : Set a} → (fun : A → B → B) → (n : Node A) → (z : B) →
                foldr-node fun n z ≡ foldr fun z (toList-node n)
foldr-node-correct fun (Tip x) z = refl
foldr-node-correct fun (Node2 n n₁) z =
          begin
            foldr-node fun n (foldr-node fun n₁ z)
          ≡⟨ cong (foldr-node fun n) (foldr-node-correct fun n₁ z ) ⟩
            foldr-node fun n (foldr fun z (toList-node n₁))
          ≡⟨ foldr-node-correct fun n (foldr fun z (toList-node n₁)) ⟩
           foldr fun (foldr fun z (toList-node n₁)) (toList-node n)
          ≡⟨ foldr-lemma0 (toList-node n) (toList-node n₁) (toList-node (Node2 n n₁)) refl fun z ⟩
          foldr fun z (toList-node n ++ toList-node n₁)
          ∎
foldr-node-correct fun (Node3 n n₁ n₂) z =
          begin
            foldr-node fun n (foldr-node fun n₁ (foldr-node fun n₂ z))
          ≡⟨ cong (λ x → foldr-node fun n (foldr-node fun n₁ x)) (foldr-node-correct fun n₂ z) ⟩
            foldr-node fun n (foldr-node fun n₁ (foldr fun z (toList-node n₂)))
          ≡⟨ cong (foldr-node fun n) (foldr-node-correct fun n₁ (foldr fun z (toList-node n₂))) ⟩
            foldr-node fun n (foldr fun (foldr fun z (toList-node n₂)) (toList-node n₁))
          ≡⟨ foldr-node-correct fun n (foldr fun (foldr fun z (toList-node n₂)) (toList-node n₁)) ⟩
            foldr fun (foldr fun (foldr fun z (toList-node n₂)) (toList-node n₁)) (toList-node n)
          ≡⟨ foldr-lemma1 (toList-node n) (toList-node n₁) (toList-node n₂) (toList-node (Node3 n n₁ n₂)) refl fun z ⟩
            foldr fun z (toList-node n ++ toList-node n₁ ++ toList-node n₂)
          ∎

foldr-digit-correct : ∀ {a} {A : Set a} {B : Set a} → (fun : A → B → B) (d : Digit A) → (z : B) →
                foldr-digit fun d z ≡ foldr fun z (toList-digit d)
foldr-digit-correct fun (One x) z =
          begin
            foldr-node fun x z
          ≡⟨ foldr-node-correct fun x z ⟩
            foldr fun z (toList-node x)
          ∎

foldr-digit-correct fun (Two x x₁) z =
          begin
            foldr-node fun x (foldr-node fun x₁ z)
          ≡⟨ cong (foldr-node fun x) (foldr-node-correct fun x₁ z) ⟩
            foldr-node fun x (foldr fun z (toList-node x₁))
          ≡⟨ foldr-node-correct fun x (foldr fun z (toList-node x₁)) ⟩
            foldr fun (foldr fun z (toList-node x₁)) (toList-node x)
          ≡⟨ foldr-lemma0 (toList-node x) (toList-node x₁) (toList-digit (Two x x₁)) refl fun z ⟩
            foldr fun z (toList-node x ++ toList-node x₁)
          ∎

foldr-digit-correct fun (Three x x₁ x₂) z =
          begin
            foldr-node fun x (foldr-node fun x₁ (foldr-node fun x₂ z))
          ≡⟨ cong (λ v → foldr-node fun x (foldr-node fun x₁ v)) (foldr-node-correct fun x₂ z) ⟩
            foldr-node fun x (foldr-node fun x₁ (foldr fun z (toList-node x₂)))
          ≡⟨ cong (foldr-node fun x) (foldr-node-correct fun x₁ (foldr fun z (toList-node x₂))) ⟩
            foldr-node fun x (foldr fun (foldr fun z (toList-node x₂)) (toList-node x₁))
          ≡⟨ foldr-node-correct fun x (foldr fun (foldr fun z (toList-node x₂)) (toList-node x₁)) ⟩
            foldr fun (foldr fun (foldr fun z (toList-node x₂)) (toList-node x₁)) (toList-node x)
          ≡⟨ foldr-lemma1 (toList-node x) (toList-node x₁) (toList-node x₂) (toList-digit (Three x x₁ x₂)) refl fun z ⟩
            foldr fun z (toList-node x ++ toList-node x₁ ++ toList-node x₂)
          ∎
foldr-digit-correct fun (Four x x₁ x₂ x₃) z = {!   !}

foldr-correct : ∀ {A}{B} → (fun : A → B → B) → (ft : FingerTree A) → (z : B) →
                foldr-ft fun ft z ≡ Data.List.foldr fun z (toList-ft ft)
foldr-correct fun Empty z =
          begin
            foldr-ft fun Empty z
          ≡⟨ refl ⟩
            z ≡⟨ refl ⟩ z
          ∎
foldr-correct fun (Single x) z =
          begin
            foldr-ft fun (Single x) z
          ≡⟨ refl ⟩
            foldr-node fun x z
          ≡⟨ foldr-node-correct fun x z ⟩
            foldr fun z (toList-node x)
          ≡⟨ cong (foldr fun z) refl ⟩
           foldr fun z (toList-ft (Single x))
          ∎

foldr-correct fun (Deep x ft x₁) z =
          begin
            foldr-digit fun x (foldr-ft fun ft (foldr-digit fun x₁ z))
          ≡⟨ cong (λ v → foldr-digit fun x (foldr-ft fun ft v)) (foldr-digit-correct fun x₁ z) ⟩
            foldr-digit fun x (foldr-ft fun ft (foldr fun z (toList-digit x₁)))
          ≡⟨ cong (foldr-digit fun x) (foldr-correct fun ft ((foldr fun z (toList-digit x₁)))) ⟩
            foldr-digit fun x (foldr fun ((foldr fun z (toList-digit x₁))) (toList-ft ft))
          ≡⟨ foldr-digit-correct fun x (foldr fun ((foldr fun z (toList-digit x₁))) (toList-ft ft)) ⟩
            foldr fun (foldr fun ((foldr fun z (toList-digit x₁))) (toList-ft ft)) (toList-digit x)
          ≡⟨ foldr-lemma1 (toList-digit x) (toList-ft ft) (toList-digit x₁) (toList-ft (Deep x ft x₁)) refl fun z ⟩
            foldr fun z ((toList-digit x) ++ (toList-ft ft) ++ (toList-digit x₁))
          ∎
\end{code}
