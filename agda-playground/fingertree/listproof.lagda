%include polycode.fmt
%include lhs2TeX.fmt

\begin{code}
open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
\end{code}

\begin{code}
-- helper function
rev' : {A : Set} → (List A) → (List A) → List A
rev' [] ys = ys
rev' (x ∷ xs) ys = rev' xs (x ∷ ys)

rev : {A : Set} → List A → List A
rev xs = rev' xs []
\end{code}

\begin{code}
rev'-rev : ∀ {A}
          → (xs : List A)
          → (ys : List A)
          → rev' xs ys ≡ (rev xs) ++ ys
\end{code}

\begin{code}
rev-app-lemma : {A : Set}
              → (xs : List A)
              → (ys : List A)
              → rev (xs ++ ys) ≡ (rev ys) ++ (rev xs)
\end{code}

\begin{code}
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
\end{code}
