open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

rev' : {A : Set} → (List A) → (List A) → List A
rev' [] ys = ys
rev' (x ∷ xs) ys = rev' xs (x ∷ ys)

rev : {A : Set} → List A → List A
rev xs = rev' xs []

nil-app-lemma : {A : Set}
              → (xs : List A)
              → (xs ++ [] ≡ xs)
nil-app-lemma [] = refl
nil-app-lemma (x ∷ xs) = cong (_∷_ x) (nil-app-lemma xs)

app-assoc-lemma : {A : Set}
              → (xs : List A)
              → (ys : List A)
              → (zs : List A)
              → xs ++ ys ++ zs ≡ (xs ++ ys) ++ zs
app-assoc-lemma [] ys zs = refl
app-assoc-lemma (x ∷ xs) ys zs = cong (_∷_ x) (app-assoc-lemma xs ys zs)

rev'-rev : ∀ {A}
          → (xs : List A)
          → (ys : List A)
          → rev' xs ys ≡ (rev xs) ++ ys
rev'-rev [] ys = refl
rev'-rev (x ∷ xs) [] = sym (nil-app-lemma (rev' xs (x ∷ [])))
rev'-rev (x ∷ xs) (y ∷ ys) =
  begin
    rev' xs (x ∷ y ∷ ys)
  ≡⟨ rev'-rev xs (x ∷ y ∷ ys) ⟩
    (rev xs) ++ x ∷ y ∷ ys
  ≡⟨ refl ⟩
    (rev xs) ++ (x ∷ []) ++ y ∷ ys
  ≡⟨ app-assoc-lemma (rev xs) (x ∷ []) (y ∷ ys) ⟩
    ((rev xs) ++ x ∷ []) ++ y ∷ ys
  ≡⟨ cong (λ a → a ++ y ∷ ys) (sym (rev'-rev xs (x ∷ []))) ⟩
    rev' xs (x ∷ []) ++ y ∷ ys
  ∎


rev-lemma0 : {A : Set}
            → (x : A)
            → (xs : List A)
            → rev (x ∷ xs) ≡ (rev xs) ++ x ∷ []
rev-lemma0 x [] = refl
rev-lemma0 x (y ∷ xs) =
  begin
    rev' (y ∷ xs) (x ∷ [])
  ≡⟨ rev'-rev (y ∷ xs) (x ∷ []) ⟩
    rev' xs (y ∷ []) ++ x ∷ []
  ∎

rev-app-lemma : {A : Set}
              → (xs : List A)
              → (ys : List A)
              → rev (xs ++ ys) ≡ (rev ys) ++ (rev xs)
rev-app-lemma [] ys = sym (nil-app-lemma (rev ys))
rev-app-lemma (x ∷ xs) ys =
  begin
    rev (x ∷ xs ++ ys)
  ≡⟨ rev-lemma0 x (xs ++ ys) ⟩
    (rev (xs ++ ys)) ++ x ∷ []
  ≡⟨ cong (λ a → a ++ (x ∷ [])) (rev-app-lemma xs ys) ⟩
    ((rev ys) ++ (rev xs)) ++ x ∷ []
  ≡⟨ sym (app-assoc-lemma (rev ys) (rev xs) (x ∷ [])) ⟩
    (rev ys) ++ (rev xs) ++ (x ∷ [])
  ≡⟨ cong (λ a → (rev ys) ++ a) (sym (rev-lemma0 x xs)) ⟩
    (rev ys) ++ (rev (x ∷ xs))
  ∎

rev-lemma : {A : Set}
          → (xs : List A)
          → rev (rev xs) ≡ xs
rev-lemma [] = refl
rev-lemma (x ∷ xs) =
  begin
    rev (rev' xs (x ∷ []))
  ≡⟨ cong rev (rev'-rev xs (x ∷ [])) ⟩
    rev ((rev xs) ++ x ∷ [])
  ≡⟨ rev-app-lemma (rev xs) (x ∷ []) ⟩
    x ∷ rev (rev xs)
  ≡⟨ cong (λ a → x ∷ a) (rev-lemma xs) ⟩
    x ∷ xs
  ∎
