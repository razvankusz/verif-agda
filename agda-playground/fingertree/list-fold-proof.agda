open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

module list-fold-proof where 
  foldl-append : ∀ {a} {A : Set a} {W : Set a}
                → (f : W → A → W)
                → (σ : W)
                → (xs : List A)
                → (ys : List A)
                → (foldl f σ (xs ++ ys) ≡ foldl f (foldl f σ xs) ys)
  foldl-append f σ [] ys = refl
  foldl-append f σ (x ∷ xs) ys = foldl-append f (f σ x) xs ys

  foldl-append2 :  ∀ {a} {A : Set a} {W : Set a}
                → (f : W → A → W)
                → (σ : W)
                → (xs : List A)
                → (ys : List A)
                → (zs : List A)
                → (foldl f σ (xs ++ ys ++ zs) ≡ foldl f (foldl f (foldl f σ xs) ys) zs)
  foldl-append2 f σ xs ys zs =
    begin
      foldl f σ (xs ++ ys ++ zs)
    ≡⟨ foldl-append f σ xs (ys ++ zs) ⟩
      foldl f (foldl f σ xs) (ys ++ zs)
    ≡⟨ foldl-append f (foldl f σ xs) ys zs ⟩
      foldl f (foldl f (foldl f σ xs) ys) zs
    ∎
