\begin{code}
open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

module list-fold-proof where
  foldl-append-lemma : ∀ {a} {A : Set a} {W : Set a}
                → (f : W → A → W)
                → (σ : W)
                → (xs : List A)
                → (ys : List A)
                → (foldl f σ (xs ++ ys) ≡ foldl f (foldl f σ xs) ys)
  foldl-append-lemma f σ [] ys = refl
  foldl-append-lemma f σ (x ∷ xs) ys = foldl-append-lemma f (f σ x) xs ys

  foldl-append-lemma2 :  ∀ {a} {A : Set a} {W : Set a}
                → (f : W → A → W)
                → (σ : W)
                → (xs : List A)
                → (ys : List A)
                → (zs : List A)
                → (foldl f σ (xs ++ ys ++ zs) ≡ foldl f (foldl f (foldl f σ xs) ys) zs)
  foldl-append-lemma2 f σ xs ys zs =
    begin
      foldl f σ (xs ++ ys ++ zs)
    ≡⟨ foldl-append-lemma f σ xs (ys ++ zs) ⟩
      foldl f (foldl f σ xs) (ys ++ zs)
    ≡⟨ foldl-append-lemma f (foldl f σ xs) ys zs ⟩
      foldl f (foldl f (foldl f σ xs) ys) zs
    ∎
\end{code}
