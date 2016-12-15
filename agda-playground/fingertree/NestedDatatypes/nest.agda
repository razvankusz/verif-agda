open import Level
open import Data.Product
open import Data.Nat

data Nest {a : Level} (A : Set a) : Set a where
  nilN  : Nest A
  consN : A → Nest (A × A) → Nest A

foldl-pair : ∀ {a} {B : Set a} {A : Set a} → (f : B → A → B) → (z : B) → (A × A) → B
foldl-pair f z (x , y) = f (f z x) y

foldr-pair : ∀ {a} {B : Set a} {A : Set a} → (f : A → B → B) → (A × A) → (z : B) → B
foldr-pair f (x , y) z = f x (f y z)

foldr : ∀ {a} {B : Set a}{A : Set a} → (f : A → B → B) → (Nest A) → (z : B) → B
foldr f nilN z = z
foldr f (consN x n) z = f x (foldr (foldr-pair f) n z)

foldl : ∀ {a} {B : Set a}{A : Set a} → (f : B → A → B) → (z : B) → (Nest A) → B
foldl f z nilN = z
foldl f z (consN x n) = f (foldl (foldl-pair f) z n)  x

test-nest : Nest ℕ
test-nest = consN 1 (consN ( 2 , 3 ) nilN)

test-res : ℕ
test-res = foldr _+_ test-nest 0

-- Theorem that left and right folds are the same if the operation is commutative and associative

open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

Associative : ∀ {A} → (A → A → A) → Set
Associative _⊕_ = ∀ x y z → x ⊕ (y ⊕ z) ≡ (x ⊕ y) ⊕ z

Commutative :  ∀ {A} → (A → A → A) → Set
Commutative _⊕_ = ∀ x y → (x ⊕ y) ≡ (y ⊕ x)

th-fold : ∀ {A} → (f : A → A → A) → (z : A) → (com : Commutative f) → (assoc : Associative f) →
          (n : Nest A) → foldr f n z ≡ foldl f z n
th-fold f z com assoc nilN = refl
th-fold f z com assoc (consN x n) =
    begin
      f x (foldr (foldr-pair f) n z)
    ≡⟨ {!   !} ⟩ {!   !}
