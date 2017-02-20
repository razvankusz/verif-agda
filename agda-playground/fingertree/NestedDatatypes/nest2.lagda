%include polycode.fmt
%include lhs2TeX.fmt
\begin{code}


open import Level using (Level)
open import Data.Product using(_×_ ;_,_)
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
\begin{code}

lift-op : ∀ {a : Level} {A : Set a} → (A × A → A) → ((A × A) × (A × A)) → (A × A)
lift-op op (proj₁ , proj₂) = (op proj₁ , op proj₂)

compact : ∀ {a : Level} {A : Set a} → Nest (A × A) → (A × A → A) → Nest A
compact nilN op = nilN
compact (consN p ns) op = consN (lift-op op p) (compact ns (lift-op op))
-- this operation was created to generate a structurally smaller nest, it doesn't
-- have any practical opperation at all.

view : ∀ {a : Level} {A : Set a} → (A × A → A) → Nest A → View A
view op nilN = nilL
view op (consN x ns) = consL (op x) (compact ns op)
--
-- toList-nest : ∀ {a : Level} {A : Set a} → (A × A → A) → Nest A → List A
-- toList-nest op ns with view op ns
-- toList-nest op ns | nilL = []
-- toList-nest op ns | consL x x₁ = x ∷ (toList-nest op x₁)

\end{code}

-- I have tried to overcome the termination problem by making the types dependent, so Agda
-- can see that terms actually become smaller as was suggested in the work of Ross Patterson et al.

-- I also changed the semantics of the operations a bit to comply with the typing scheme,
-- but it shouldn't cause any difference.

\begin{code}

data dNest {a : Level} (A : Set a) : ℕ → Set a where
  dnilN : dNest A zero
  dconsN : ∀ {n : ℕ} → (A × A) → dNest (A × A) n → dNest A (suc n)

data dView {a : Level} (A : Set a) : ℕ → Set a where
  dnilV : dView A zero
  dconsV : ∀ {n : ℕ} → A → dNest A n → dView A (suc n)

dcompact : ∀ {a : Level} {A : Set a} {n : ℕ} → dNest (A × A) (suc n) → (op : A × A → A) → dNest A n
dcompact {n = zero} (dconsN x ns) op = dnilN
dcompact {n = suc n} (dconsN x ns) op = dconsN (lift-op op x) (dcompact ns (lift-op op))

dview : ∀ {a : Level} {A : Set a} {n : ℕ} → (op : A × A → A) → dNest A (suc n) → dView A n
dview {n = zero} op ns = dnilV
dview {n = suc zero} op (dconsN x ns) = dconsV (op x) dnilN
dview {n = suc (suc n)} op (dconsN x ns) = dconsV (op x) (dcompact ns op)

open import DependentPair using (Σ'; _,_)
open import Induction.WellFounded

-- toList-dnest : ∀ {a : Level} {A : Set a}{n : ℕ} → (op : A × A → A) → dNest A n → List A
-- toList-dnest {n = zero} op ns = []
-- toList-dnest {n = suc n} op ns with dview op ns
-- toList-dnest {a} {A} {suc .0} op ns | dnilV = []
-- toList-dnest {a} {A} {suc _} op ns | dconsV x x₁ = x ∷ (toList-dnest op ns)
-- here, I know the types become smaller and smaller, so it should terminate.
-- the fact is obvious from the deffinitions above.
-- How do I convice agda?

Nest-pair : ∀ {a} (A : Set a) → Set a
Nest-pair {a} A = Σ' {a = a} ℕ (dNest A)



\end{code}

\begin{code}


-- you might want to compare this approach with this very simple reimplementation of
-- append on lists vs vec
--
-- append : ∀ {a} {A : Set a} → A → List A → List A
-- append x xs with xs
-- append x xs | [] = Data.List.[ x ]
-- append x xs | y ∷ ys = y ∷ append x ys
--
-- this should work but it doesn't, even if you remember agda where y ∷ ys actually came from

open import Relation.Binary.PropositionalEquality
-- append2 : ∀ {a} {A : Set a} → A → List A → List A
-- append2 x xs with xs | inspect (λ x → x) xs
-- append2 x xs | [] | [ eq ] = Data.List.[ x ]
-- append2 x xs | y ∷ ys | Reveal_·_is_.[ refl ] = y ∷ (append2 x ys)

-- however, implementing it with dependent types (i.e. Vec) it suddenly works.

open import Data.Vec
append3 : ∀ {a} {A : Set a} {n : ℕ} → A → Vec A n → Vec A (suc n)
append3 x xs with xs
append3 x xs | [] = x ∷ []
append3 x xs | y ∷ ys = y ∷ (append3 x ys)

-- apply technique to de brujin index
-- and nest2 ^

\end{code}
