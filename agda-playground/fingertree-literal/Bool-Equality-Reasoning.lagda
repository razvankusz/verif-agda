\begin{code}
open import Data.Bool
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
open import Level

module Bool-Equality-Reasoning {a : Level} {A : Set a} { _==_ : A → A → Bool }  where

  postulate conversion : ∀ {x} {y} → (x == y ≡ true) → (x ≡ y)
  postulate sym-conversion : ∀ {x} {y} → (x ≡ y) → (x == y ≡ true)

  ==refl : ∀ {x} → (x == x ≡ true)
  ==refl {x} = sym-conversion refl

  ==sym : ∀ {x y : A} → (x == y ≡ true) → (y == x ≡ true)
  ==sym {x} {y} x==y = sym-conversion (sym (conversion x==y))

  ==trans : ∀ {x y z : A} → (x == y ≡ true) → (y == z ≡ true) → (x == z ≡ true)
  ==trans x==y y==z = sym-conversion (trans (conversion x==y) (conversion y==z))

  infixr 2 _==⟨⟩_ _==⟨_⟩_
  infix  1 start_
  infixl 3 _done
  
  start_ : ∀ {x y : A} → (x == y ≡ true) → (x == y ≡ true)
  start_ x==y = x==y

  _==⟨⟩_ : ∀ (x {y} : A) → (x == y ≡ true) → (x == y ≡ true)
  _==⟨⟩_ x x==y = x==y

  _==⟨_⟩_ : ∀ (x {y z} : A) → (x == y ≡ true) → (y == z ≡ true) → (x == z ≡ true)
  _ ==⟨ x==y ⟩ y==z = sym-conversion (trans (conversion x==y) (conversion y==z))

  _=≡⟨_⟩_ : ∀ (x {y z} : A) → (x ≡ y) → (y == z ≡ true) → (x == z ≡ true)
  _ =≡⟨ x==y ⟩ y==z = sym-conversion (trans x==y (conversion y==z))

  _done : ∀ (x : A) → (x == x ≡ true)
  _done _ = ==refl
\end{code}
