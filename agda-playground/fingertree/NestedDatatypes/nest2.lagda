%include polycode.fmt
%include lhs2TeX.fmt
\begin{code}


open import Level
open import Data.Product
open import Data.Nat
open import Data.List

\end{code}

\begin{code}
data Nest {a : Level} (A : Set a) : Set a where
  nilN  : Nest A
  consN : (A × A) → Nest (A × A) → Nest A

\end{code}

\begin{code}
data View {a : Level} (A : Set a) : Set a where
  nilL : View A
  consL : A → Nest A → View A
\end{code}
\begin{code} z

lift-op : ∀ {a : Level} {A : Set a} → (A × A → A) → ((A × A) × (A × A)) → (A × A)
lift-op op (proj₁ , proj₂) = (op proj₁ , op proj₂)

compact : ∀ {a : Level} {A : Set a} → Nest (A × A) → (A × A → A) → Nest A
compact nilN op = nilN
compact (consN p ns) op = consN (lift-op op p) (compact ns (lift-op op))

view : ∀ {a : Level} {A : Set a} → (A × A → A) → Nest A → View A
view op nilN = nilL
view op (consN x ns) = consL (op x) (compact ns op)
\end{code}
-- toList-nest : ∀ {a : Level} {A : Set a} → (A × A → A) → Nest A → List A
-- toList-nest op ns with view op ns
-- toList-nest op ns | nilL = []
-- toList-nest op ns | consL x x₁ = x ∷ (toList-nest op x₁)
