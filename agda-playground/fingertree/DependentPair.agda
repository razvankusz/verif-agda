open import Relation.Binary.PropositionalEquality

data Σ {a} (A : Set a) (B : A → Set a) : Set a where
  _,_ : (x : A) → (y : B x) → Σ A B

fst : ∀ {a} {A : Set a} {B : A → Set a} → Σ A B → A
fst (x , y) = x

snd : ∀ {a} {A : Set a} {B : A → Set a} → (p : Σ A B) → (x : A) → (fst p ≡ x) → B x
snd (x , y) .x refl = y
