

-- Introduction
data Bool : Set where
 true  : Bool
 false : Bool


not : Bool -> Bool
not true = false
not false = true


data Nat : Set where
  zero : Nat
  suc  : Nat -> Nat

infixl 40 _+_
_+_ : Nat -> Nat -> Nat
zero + m = m
suc n + m = suc (n + m)

infixl 60 _*_
_*_ : Nat -> Nat -> Nat
zero * m = zero
suc n * m = m + ( n * m )

infixr 20 _or_
_or_ : Bool -> Bool -> Bool
true or y = true
false or y = y

infix 5 if_then_else_
if_then_else_ : {A : Set} -> Bool -> A -> A -> A
if true then y else z = y
if false then y else z = z

identity : (A : Set) -> A -> A
identity A x = x

zero' : Nat
zero' = identity Nat zero

apply : (A : Set)(B : A -> Set) -> ((x : A) -> B x) -> (a : A) -> B a
apply A B f a = f a

infixr 40 _::_
data List (A : Set) : Set where
 [] : List A
 _::_ : A -> List A -> List A

map : {A B : Set} -> ( A -> B) -> List A -> List B
map f [] = []
map f (x :: xs) = f x :: map f xs

_++_ : {A : Set} -> List A -> List A -> List A
[] ++ ys = ys
x :: xs ++ ys = x :: ( xs ++ ys )

data Vec (A : Set) : Nat -> Set where
 [] : Vec A zero
 _::_ : {n : Nat} -> A -> Vec A n -> Vec A (suc n)

head : {A : Set}{n : Nat} -> Vec A (suc n) -> A
head (x :: xs) = x

vmap : {A B : Set}{n : Nat} -> (A -> B) -> Vec A n -> Vec B n
vmap f [] = []
vmap f (x :: xs) = f x :: vmap f xs

_o_ : {A B C : Set} -> (B -> C) -> (A -> B) -> (A -> C)
f o g = λ z → f (g z)


data Fin : Nat -> Set where
 fzero : {n : Nat} -> Fin (suc n)
 fsuc  : {n : Nat} -> Fin n -> Fin (suc n)

magic : {A : Set} -> Fin zero -> A
magic ()

_!_ : {n : Nat}{A : Set} -> Vec A n -> Fin n -> A
[] ! ()
x :: xs ! fzero = x
x :: xs ! fsuc i = xs ! i

tabulate : {n : Nat}{A : Set} -> (Fin n -> A) -> Vec A n
tabulate {zero} f = []
tabulate {suc n} f = f fzero :: tabulate (f o fsuc)

-- Programs as proofs
data False : Set where
record True : Set where

trivial : True
trivial = _

isTrue : Bool -> Set
isTrue true = True
isTrue false = False


_<_ : Nat -> Nat -> Bool
n < zero = false
zero < suc m = true
suc n < suc m = n < m

length : {A : Set} -> List A -> Nat
length [] = zero
length (x :: xs) = suc (length xs)

lookup : {A : Set}(xs : List A)(n : Nat) -> isTrue (n < length xs) -> A
lookup [] i ()
lookup (x :: xs) zero p = x
lookup (x :: xs) (suc i) p = lookup xs i p

data _==_ { A : Set}(x : A) : A -> Set where
  refl : x == x

data _≤_ : Nat -> Nat -> Set where
  leq-zero : {n : Nat} -> zero ≤ n
  leq-suc  : {n m : Nat} -> m ≤ n -> suc m ≤ suc n

leq-trans : {l m n : Nat} -> l ≤ m -> m ≤ n -> l ≤ n
leq-trans leq-zero p2 = leq-zero
leq-trans (leq-suc p1) (leq-suc p2) = leq-suc (leq-trans p1 p2)


min : Nat -> Nat -> Nat
min x y with x < y
min x y | false = y
min x y | true = x

filter : {A : Set} -> (A -> Bool) -> List A -> List A
filter p [] = []
filter p (x :: xs) with p x
filter p (x :: xs) | true = x :: filter p xs
filter p (x :: xs) | false = filter p xs

data _≠_ : Nat -> Nat -> Set where
 z≠s : {n : Nat} -> zero ≠ suc n
 s≠z : {n : Nat} -> suc n ≠ zero
 s≠s : {m n : Nat} -> m ≠ n -> suc m ≠ suc n

data Equal? (n m : Nat) : Set where
  eq : n == m -> Equal? n m
  neq : n ≠ m -> Equal? n m

equal? : (n m : Nat) -> Equal? n m
equal? zero zero = eq refl
equal? zero (suc m) = neq z≠s
equal? (suc n) zero = neq s≠z
equal? (suc n) (suc m) with equal? n m
equal? (suc n) (suc .n) | eq refl = eq refl
equal? (suc n) (suc m) | neq x = neq (s≠s x)

infix 20 _⊂_
data _⊂_ {A : Set} : List A -> List A -> Set where
  stop : [] ⊂ []
  drop : forall {xs y ys} -> xs ⊂ ys -> xs ⊂ y :: ys
  keep : forall {x xs ys} -> xs ⊂ ys -> x :: xs ⊂ x :: ys


--Exercises

Matrix : Set -> Nat -> Nat -> Set
Matrix A n m = Vec (Vec A n) m

vec : {n : Nat}{A : Set} -> A -> Vec A n
vec {zero} x = []
vec {suc n} x = x :: vec {n} x

infixl 90 _$_
_$_ : {n : Nat}{A B : Set} -> Vec (A -> B) n -> Vec A n -> Vec B n
[] $ xs = []
(x :: fs) $ (x₁ :: xs) = x x₁ :: fs $ xs


append : forall {A n} -> A -> Vec A n -> Vec A (suc n)
append x xs = x :: xs

--transpose : forall {A n m} -> Matrix A n m -> Matrix A m n
--transpose {n = zero} xss = []
--transpose {n = suc n} xss = {! vec {n} append  !} $ {!   !}

--vector lookup

lem-!-tab : forall {A n} (f : Fin n -> A)(i : Fin n) -> (tabulate f ! i) == (f i)
lem-!-tab f fzero = refl
lem-!-tab f (fsuc i) = lem-!-tab (λ z → f (fsuc z)) i

lem-tab-! : forall {n A} (xs : Vec A n) -> tabulate (_!_ xs) == xs
lem-tab-! {zero} [] = refl
lem-tab-! {suc n} (x :: xs) with tabulate (_!_ xs) | lem-tab-! xs
lem-tab-! {suc .zero} (x :: .[]) | [] | refl = refl
lem-tab-! {suc ._} (x₁ :: .(x :: p)) | x :: p | refl = refl

⊂-refl : {A : Set}{xs : List A} -> xs ⊂ xs
⊂-refl {xs = []} = stop
⊂-refl {xs = x :: xs} = keep ⊂-refl

⊂-trans : {A : Set}{xs ys zs : List A} -> xs ⊂ ys -> ys ⊂ zs -> xs ⊂ zs
⊂-trans p stop = p
⊂-trans p (drop q) = drop (⊂-trans p q)
⊂-trans (drop p) (keep q) = drop (⊂-trans p q)
⊂-trans (keep p) (keep q) = keep (⊂-trans p q)

data SubList {A : Set} : List A -> Set where
 [] : SubList []
 _::_ : forall x {xs} -> SubList xs -> SubList (x :: xs)
 skip : forall {x xs} -> SubList xs -> SubList (x :: xs)

forget : {A : Set}{xs : List A} -> SubList xs -> List A
forget [] = []
forget (x :: s) = x :: forget s
forget (skip s) = forget s

lem-forget : {A : Set}{xs : List A}(zs : SubList xs) -> forget zs ⊂ xs
lem-forget [] = stop
lem-forget (x :: zs) = keep (lem-forget zs)
lem-forget (skip zs) = drop (lem-forget zs)

filter' : {A : Set} -> (A -> Bool) -> (xs : List A) -> SubList xs
filter' p [] = []
filter' p (x :: xs) with p x
filter' p (x :: xs) | true = x :: filter' p xs
filter' p (x :: xs) | false = skip (filter' p xs)

complement : {A : Set}{xs : List A} -> SubList xs -> SubList xs
complement [] = []
complement {_} {_} (x :: zs) = skip (complement zs)
complement (skip {x} {xs} zs) = x :: (complement zs)

sublists : {A : Set}(xs : List A) -> List (SubList xs)
sublists [] = []
//too hard
sublists (x :: xs) = {!   !}
