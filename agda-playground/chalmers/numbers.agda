data ℕ : Set where
  zero : ℕ
  suc  : ℕ -> ℕ

pred : ℕ -> ℕ
pred zero = zero
pred (suc n) = n

data _==_ { A : Set}(x : A) : A -> Set where
  refl : x == x

_+_ : ℕ -> ℕ -> ℕ
zero + m = m
suc n + m = suc (n + m)

0+ : {m : ℕ} -> (zero + m) == m
0+ {m} = refl

+0 : {m : ℕ} -> (m + zero) == m
+0 {zero} = refl
+0 {suc m} with (m + zero) | +0 {m}
+0 {suc .zero} | zero | refl = refl
+0 {suc .(suc p)} | suc p | refl = refl

+assoc : ∀ (x y z : ℕ) → (x + (y + z)) == ((x + y) + z)
+assoc zero y z = refl
+assoc (suc x) y z with (x + (y + z)) | +assoc x y z
+assoc (suc x) y z | .((x + y) + z) | refl = refl

+suc : ∀ (x y : ℕ) → (x + (suc y)) == (suc (x + y))
+suc zero y = refl
+suc (suc x) y with (x + (suc y)) | +suc x y
+suc (suc x) y | .(suc (x + y)) | refl = refl

+comm : ∀ (x y : ℕ) → (x + y) == (y + x)
+comm zero y with y + zero | +0 {y}
+comm zero y | .y | refl = refl
+comm (suc x) y with (x + y) | +comm x y | y + suc x | +suc y x
+comm (suc x) y | .(y + x) | refl | .(suc (y + x)) | refl = refl
