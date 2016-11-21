data Bool : Set where
  true : Bool
  false : Bool

_and_ : Bool → Bool → Bool
true and true = true
true and false = false
false and _ = false

data Nat : Set where
  zero : Nat
  suc  : Nat → Nat

_+_ : Nat -> Nat -> Nat
zero + y = y
suc x + y = suc (x + y)

_AryBoolOp : Nat → Set
zero AryBoolOp = Bool
suc x AryBoolOp = Bool → x AryBoolOp

taut : (x : Nat) → x AryBoolOp → Bool
taut zero f = f
taut (suc x) f = taut x (f true) and taut x (f false)

data Vec (A : Set) : Nat -> Set where
  [] : Vec A zero
  _::_ : {n : Nat} -> (x : A) -> Vec A n -> Vec A (suc n)

_app_ : {A : Set} -> {n m : Nat} -> Vec A n -> Vec A m -> Vec A (n + m)
[] app ys = ys
(x :: xs) app ys = x :: (xs app ys)

_++_ : ∀ {n} -> Vec Nat n -> Vec Nat n -> Vec Nat n
[] ++ [] = []
(x :: xs) ++ (y :: ys) = (x + y) :: (xs ++ ys)
