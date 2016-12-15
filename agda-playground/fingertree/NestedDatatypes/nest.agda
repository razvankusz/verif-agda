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

foldr-nest : ∀ {a} {B : Set a}{A : Set a} → (f : A → B → B) → (Nest A) → (z : B) → B
foldr-nest f nilN z = z
foldr-nest f (consN x n) z = f x (foldr-nest (foldr-pair f) n z)

foldl-nest : ∀ {a} {B : Set a}{A : Set a} → (f : B → A → B) → (z : B) → (Nest A) → B
foldl-nest f z nilN = z
foldl-nest f z (consN x n) = f (foldl-nest (foldl-pair f) z n)  x

test-nest : Nest ℕ
test-nest = consN 1 (consN ( 2 , 3 ) nilN)

-- Theorem that left and right folds are the same if the operation is commutative and associative

open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
open import Data.List

Associative : ∀ {A} → (A → A → A) → Set
Associative _⊕_ = ∀ x y z → x ⊕ (y ⊕ z) ≡ (x ⊕ y) ⊕ z

Commutative :  ∀ {A} → (A → A → A) → Set
Commutative _⊕_ = ∀ x y → (x ⊕ y) ≡ (y ⊕ x)

toList-pair : ∀ {a} {A : Set a} → A × A → List A
toList-pair (x , y) = x ∷ y ∷ []

append-pair : ∀ {a} {A : Set a} → A × A → List A → List A
append-pair (x , y) l = x ∷ y ∷ l

toList : ∀ {a} {A : Set a} → Nest A → List A
toList nilN = []
toList (consN x n) = x ∷ (foldr (foldr-pair _∷_) [] (toList n) )

lemma-fold0 : ∀ {a} {A : Set a} {B : Set a} → (f : A → B → B) → (z : B) → (p : A × A) →
              foldr-pair f p z ≡ foldr f z (append-pair p [])
lemma-fold0 f z (x , y) = refl

lemma-fold1 : ∀ {a} {A : Set a} {B : Set a} → (f : A → B → B) → (z : B) → (n' : List (A × A))
            → foldr (foldr-pair f) z n' ≡ foldr f z (foldr (foldr-pair _∷_) [] n')
lemma-fold1 f z [] = refl
lemma-fold1 f z (x ∷ n') rewrite lemma-fold1 f z n' = refl

th-fold : ∀ {a} {A : Set a} {B : Set a} → (f : A → B → B) → (z : B) → (n : Nest A) →
              foldr-nest f n z ≡ Data.List.foldr f z (toList n)
th-fold f z nilN =
  begin
    z ≡⟨ refl ⟩ z
  ∎
th-fold f z (consN x n) =
  begin
    foldr-nest f (consN x n) z
  ≡⟨ cong (f x) (th-fold (foldr-pair f) z n) ⟩
    f x (foldr (foldr-pair f) z (toList n))
  ≡⟨ cong (f x) (lemma-fold1 f z (toList n)) ⟩
    f x (foldr f z (foldr (foldr-pair _∷_) [] (toList n)))
  ∎
