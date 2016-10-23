
data ℕ : Set where
 zero : ℕ
 suc  : ℕ -> ℕ

_+_ : ℕ -> ℕ -> ℕ
zero + b = b
suc a + b = suc (a + b)

data _≡_ {a}{A : Set a }(x : A) : A -> Set a  where
 refl : x ≡ x
{-# BUILTIN EQUALITY _≡_ #-}
{-# BUILTIN EQUALITY refl #-}

0+ : ∀ (x : ℕ) -> ( zero + x ) ≡ x
0+ x = refl

+0 : ∀ (x : ℕ) -> (x + zero ) ≡ x
+0 zero = refl
+0 (suc x) rewrite +0 x = ?
