data Nat : Set where
  zero : Nat
  suc : Nat -> Nat

data Vec (A : Set) : Nat -> Set where
  [] : Vec A zero
  _::_ : {n : Nat} -> A -> Vec A n -> Vec A (suc n)

_+_ : Nat -> Nat -> Nat
zero + b = b
suc a + b = suc (a + b)

Matrix : Set -> Nat -> Nat -> Set
Matrix A n m = Vec (Vec A n) m

vec : {A : Set} -> (n : Nat) -> A -> Vec A n
vec zero x = []
vec (suc n) x = x :: (vec n x)

applyn : {n : Nat}{A : Set}{B : Set} -> (Vec (A -> B) n) -> (Vec A n) -> (Vec B n)
applyn {zero} fx vx = []
applyn {suc n} (x :: fx) (x1 :: vx) = x(x1) :: applyn {n} fx vx
