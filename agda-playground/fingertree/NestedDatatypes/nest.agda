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

toList : ∀ {a} {A : Set a} → Nest A → List A
toList nilN = []
toList (consN x n) = x ∷ (foldr (foldr-pair _∷_) [] (toList n) )

lemma-fold1 : ∀ {a} {A : Set a} {B : Set a} → (f : A → B → B) → (z : B) → (n' : List (A × A))
            → foldr (foldr-pair f) z n' ≡ foldr f z (foldr (foldr-pair _∷_) [] n')
lemma-fold1 f z [] = refl
lemma-fold1 f z (x ∷ n') rewrite lemma-fold1 f z n' = refl



-- we discover that this is not true in general.
-- implementation is wrong?

lemma-fold2 : ∀ {a} {A : Set a} {B : Set a} → (f : B → A → B) → (z : B) → (n' : List (A × A)) → (x : A)
            → f (foldl (foldl-pair f) z n') x ≡ foldl f (f z x) (foldr (foldr-pair _∷_) [] n')
lemma-fold2 f z [] x = refl
lemma-fold2 f z (n ∷ n') x rewrite lemma-fold2 f (foldl-pair f z n) n' x =  {!   !}


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


th-foldl : ∀ {a} {A : Set a} {B : Set a} → (f : B → A → B) → (z : B) → (n : Nest A) →
            foldl-nest f z n ≡ foldl f z (toList n)
th-foldl f z nilN = refl
th-foldl f z (consN x n) =
  begin
    foldl-nest f z (consN x n)
  ≡⟨ cong₂ f (th-foldl (foldl-pair f) z n) refl ⟩
    f (foldl (foldl-pair f) z (toList n)) x
  ≡⟨ {!   !} ⟩
    {!   !}
