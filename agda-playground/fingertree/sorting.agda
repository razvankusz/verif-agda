open import Data.List using (List; []; _∷_)
open import Data.Maybe
open import Data.Nat renaming (_≤_ to _≤n_)
open import Data.Product
open import Data.Bool
open import Data.Sum
open import Relation.Binary.PropositionalEquality
open import Data.Vec using (Vec; []; _∷_)

record PartialOrder (A : Set) : Set where
  constructor poset
  field
    _≤_ : A → A → Bool
    ≤refl : ∀ a → (a ≤ a ≡ true)
    ≤trans : ∀ a b c
          → (a ≤ b ≡ true)
          → (b ≤ c ≡ true)
          → (a ≤ c ≡ true)
    ≤neg : ∀ a b → (a ≤ b ≡ false) → (b ≤ a ≡ true)

and-left : ∀ a b → (a ∧ b ≡ true) → (a ≡ true)
and-left false b p = p
and-left true b p = refl

and-right : ∀ a b → (a ∧ b ≡ true) → (b ≡ true)
and-right false false p = p
and-right true false p = p
and-right a true p = refl

and-combine : ∀ a b → (a ≡ true) → (b ≡ true) → (a ∧ b ≡ true)
and-combine .true b refl q = q

module sorting (A : Set) (pos : PartialOrder A) where

  _≤_ = PartialOrder._≤_ pos
  ≤refl = PartialOrder.≤refl pos
  ≤trans = PartialOrder.≤trans pos
  ≤neg = PartialOrder.≤neg pos

  data _∈_ {A : Set} : {n : ℕ} → (x : A) → (xs : Vec A n) → Set where
    found :  ∀ {n} → (x : A) → (xs : Vec A n) → x ∈ (x ∷ xs)
    skip : ∀ {n} (x : A) → (y : A) → (xs : Vec A n) → (x ∈ xs) → x ∈ (y ∷ xs)

  all : ∀ {n : ℕ} → (p : A → Bool) → (ys : Vec A n) → Bool
  all p [] = true
  all p (x ∷ ys) = (p x) ∧ (all p ys)

  data _ins_≡_ {A : Set} : {n : ℕ} → A → Vec A n → Vec A (suc n) → Set where
    stop : ∀ {n : ℕ} {x : A} {xs : Vec A n}
        → x ins xs ≡ (x ∷ xs)
    go : ∀ {n : ℕ} {x y} {xs : Vec A n} {ys : Vec A (suc n)}
        → x ins xs ≡ ys
        → x ins (y ∷ xs) ≡ (y ∷ ys)

  data SortedList : {n : ℕ} → Vec A n → Set where
    [] : SortedList []
    [_] : (x : A) → SortedList (x ∷ [])
    _∷_ : ∀ {n : ℕ} {ys : Vec A n} {zs}
          → (x : A)
          → (xs : SortedList ys)
          → (all (λ a → x ≤ a) ys ≡ true)
          → (x ins ys ≡ zs)
          → (SortedList zs)

  incl-prop0 : ∀ {A : Set} {n} → (x : A) → (y : A) → (xs : Vec A n) → (x ∈ xs) → (x ∈ (y ∷ xs))
  incl-prop0 x y xs prop = skip x y xs prop

  incl-prop1 : ∀ {A : Set} {n} → (x : A) → (y : A) → (z : A) → (xs : Vec A n) → (x ∈ (z ∷ xs)) → (x ∈ (z ∷ y ∷ xs))
  incl-prop1 x y .x [] (found .x .[]) = found x (y ∷ [])
  incl-prop1 x y₁ y [] (skip .x .y .[] prop) = skip x y (y₁ ∷ []) (skip x y₁ [] prop)
  incl-prop1 x y .x (x₁ ∷ xs) (found .x .(x₁ ∷ xs)) = found x (y ∷ x₁ ∷ xs)
  incl-prop1 x y z (x₁ ∷ xs) (skip .x .z .(x₁ ∷ xs) prop) = skip x z (y ∷ x₁ ∷ xs) (skip x y (x₁ ∷ xs) prop)

  get-min : ∀ {n : ℕ} → (i : A) → (xs : Vec A n) → A
  get-min i [] = i
  get-min i (x ∷ xs) = if (i ≤ x) then get-min i xs else get-min x xs


  min-is-min1 : ∀ {n : ℕ}
              → (i : A)
              → (xs : Vec A n)
              → (min : A)
              → (min ≡ get-min i xs)
              → (min ≤ i ≡ true)
  min-is-min1 i [] .i refl = ≤refl i
  min-is-min1 i (x ∷ xs) _ refl with i ≤ x | inspect (i ≤_) x
  min-is-min1 i (x ∷ xs) _ refl | false | re = ≤trans (get-min x xs) x i rec neg
    where
      rec : (get-min x xs ≤ x) ≡ true
      rec = min-is-min1 x xs (get-min x xs) refl
      --
      neg : (x ≤ i ≡ true)
      neg = ≤neg i x (Reveal_·_is_.eq re)
  min-is-min1 i (x ∷ xs) _ refl | true | r = min-is-min1 i xs (get-min i xs) refl

  min-is-min : ∀ {n : ℕ}
              → (i : A)
              → (xs : Vec A n)
              → (min : A)
              → (min ≡ get-min i xs)
              → (min ≤ i) ∧ (all (min ≤_) xs) ≡ true
  min-is-min i [] .i refl = and-combine (i ≤ i) true (≤refl i) refl
  min-is-min i (x ∷ xs) min rf with i ≤ x | inspect (i ≤_) x
  min-is-min i (x ∷ xs) .(get-min x xs) refl | false | re  = and-combine ((get-min x xs) ≤ i) ((get-min x xs ≤ x) ∧ all (_≤_ (get-min x xs)) xs) term0 term2
    where
      neg : (x ≤ i ≡ true)
      neg = ≤neg i x (Reveal_·_is_.eq re)
      term1 = min-is-min1 i xs (get-min i xs) refl
      term2 = min-is-min x xs (get-min x xs) refl
      term0 : (get-min x xs) ≤ i ≡ true
      term0 = ≤trans (get-min x xs) x i (and-left ((get-min x xs ≤ x)) (all (_≤_ (get-min x xs)) xs) term2) neg
  min-is-min i (x ∷ xs) .(get-min i xs) refl | true  | re = and-combine-3 ((get-min i xs ≤ i)) ((get-min i xs ≤ x)) (all (_≤_ (get-min i xs)) xs) term1 term2 term4
    where
      term0 : (i ≤ x ≡ true)
      term0 = Reveal_·_is_.eq re

      term1 : (get-min i xs ≤ i) ≡ true
      term1 = min-is-min1 i xs (get-min i xs) refl

      term2 : (get-min i xs ≤ x) ≡ true
      term2 = ≤trans (get-min i xs) i x term1 term0

      term3 : (get-min i xs ≤ i) ∧ all (_≤_ (get-min i xs)) xs ≡ true
      term3 = min-is-min i xs (get-min i xs) refl

      term4 : all (_≤_ (get-min i xs)) xs ≡ true
      term4 = and-right (get-min i xs ≤ i) (all (_≤_ (get-min i xs)) xs) term3

      and-combine-3 : ∀ a b c → (a ≡ true) → (b ≡ true) → (c ≡ true) → (a ∧ b ∧ c ≡ true)
      and-combine-3 .true .true .true refl refl refl = refl


  get-min-incl : ∀ {n : ℕ} → (i : A) → (xs : Vec A n) → (get-min i xs ∈ (i ∷ xs)) ⊎ (get-min i xs ∈ xs)
  get-min-incl  i [] = inj₁ (found i [])
  get-min-incl  i (x ∷ xs) with i ≤ x
  get-min-incl  i (x ∷ xs) | false with (get-min-incl x xs)
  get-min-incl  i (x ∷ xs) | false | inj₁ x₁ = inj₂ x₁
  get-min-incl  i (x ∷ xs) | false | inj₂ y = inj₂ (skip (get-min x xs) x xs y)
  get-min-incl  i (x ∷ xs) | true with (get-min-incl  i xs)
  get-min-incl  i (x ∷ xs) | true | inj₁ x₁ = inj₁ (incl-prop1 (get-min i xs) x i xs x₁)
  get-min-incl  i (x ∷ xs) | true | inj₂ y = inj₁ (skip (get-min i xs) i (x ∷ xs) (skip (get-min i xs) x xs y))

  incl-prop3 : ∀ {A : Set}{n : ℕ} → (a : A) → (x : A) → (xs : Vec A n) → (x ∈ xs) → (a ∈ (x ∷ xs)) → (a ∈ xs)
  incl-prop3 a .a xs pr1 (found .a .xs) = pr1
  incl-prop3 a x xs pr1 (skip .a .x .xs pr2) = pr2

  incl-prop2 : ∀ {A : Set}{n : ℕ} → (a : A) → (x : A) → (xs : Vec A n) → (x ∈ xs) → ((a ∈ (x ∷ xs) ⊎ a ∈ xs)) → (a ∈ xs)
  incl-prop2 a x xs prf (inj₁ x₁) = incl-prop3 a x xs prf x₁
  incl-prop2 a x xs prf (inj₂ y) = y

  extract-element : ∀ {A : Set}{n : ℕ}
                   → (x : A)
                   → (xs : Vec A (suc n))
                   → (x ∈ xs)
                   → Vec A n
  extract-element x .(x ∷ xs) (found .x xs) = xs
  extract-element {n = zero}
                  x
                  .(y ∷ [])
                  (skip .x y [] prf) = []
  extract-element {n = suc n}
                  x
                  .(y ∷ xs)
                  (skip .x y xs prf) = y ∷ extract-element x xs prf

  extract-insert : ∀ {A : Set}{n : ℕ}
                  → (x : A)
                  → (xs : Vec A (suc n))
                  → (prf : x ∈ xs)
                  → (ys : Vec A n)
                  → (ys ≡ extract-element x xs prf)
                  → (x ins ys ≡ xs)
  extract-insert x (.x ∷ ys) (found .x .ys) .ys refl = stop
  extract-insert x (y ∷ []) (skip .x .y .[] ()) .[] refl
  extract-insert x₁
                (y ∷ x ∷ xs)
                (skip .x₁ .y .(x ∷ xs) prf)
                .(y ∷ extract-element x₁ (x ∷ xs) prf)
                refl = go (extract-insert x₁ (x ∷ xs)
                                          prf
                                          (extract-element x₁ (x ∷ xs) prf)
                                          refl
                          )

  extract-element-min : ∀ {n : ℕ}
                      → (a : A)
                      → (x : A)
                      → (xs : Vec A (suc n))
                      → (prf : x ∈ xs)
                      → (all (a ≤_) xs ≡ true)
                      → (all (a ≤_) (extract-element x xs prf) ≡ true)
  extract-element-min  a x .(x ∷ xs) (found .x xs) min = and-right (a ≤ x) (all (_≤_ a) xs) min
  extract-element-min  a x .(y ∷ []) (skip .x y [] prf) min = refl
  extract-element-min  a x₁ .(y ∷ x ∷ xs) (skip .x₁ y (x ∷ xs) prf) min =
    and-combine
      (a ≤ y)
      (all (_≤_ a) (extract-element x₁ (x ∷ xs) prf))
      (and-left (a ≤ y) ((a ≤ x) ∧ all (_≤_ a) xs) min)
        (extract-element-min  a x₁ (x ∷ xs) prf (
        and-right true ((a ≤ x) ∧ all (_≤_ a) xs) (
        and-right (a ≤ y) ((a ≤ x) ∧ all (_≤_ a) xs) min)))


  min-start-prop0 : ∀ {n : ℕ} → (x : A) → (xs : Vec A n) → (get-min x (x ∷ xs) ≡ get-min x xs)
  min-start-prop0 x [] rewrite ≤refl x = refl
  min-start-prop0 x (y ∷ xs) with x ≤ x |  ≤refl x | x ≤ y
  min-start-prop0 x (y ∷ xs) | .true | refl | false = refl
  min-start-prop0 x (y ∷ xs) | .true | refl | true = refl

  sort : ∀ {n : ℕ} → (xs : Vec A n) → (SortedList xs)
  sort [] = []
  sort (x ∷ []) = [ x ]
  sort (x ∷ xs) = (min ∷ (sort rest)) min-sublist reconstruct
    where
      min = get-min x (x ∷ xs)

      min-in-list : min ∈ (x ∷ xs)
      min-in-list = (incl-prop2 min x (x ∷ xs) (found x xs) (get-min-incl x (x ∷ xs)))

      rest = extract-element min (x ∷ xs) min-in-list

      reconstruct : min ins rest ≡ (x ∷ xs)
      reconstruct = extract-insert min (x ∷ xs) min-in-list rest refl

      min-start : min ≡ get-min x xs
      min-start = min-start-prop0 x xs

      min-sublist : all (min ≤_) rest ≡ true
      min-sublist = extract-element-min
                      min
                      min
                      (x ∷ xs)
                      min-in-list
                      (min-is-min x xs min min-start)



_≤nat_ : ℕ → ℕ → Bool
zero ≤nat zero = true
zero ≤nat suc m = true
suc n ≤nat zero = false
suc n ≤nat suc m = n ≤nat m

≤reflnat : (n : ℕ) → (n ≤nat n ≡ true)
≤reflnat zero = refl
≤reflnat (suc n) = ≤reflnat n

≤transnat : (n : ℕ) → (m : ℕ) → (p : ℕ) → (n ≤nat m ≡ true) → (m ≤nat p ≡ true) → (n ≤nat p ≡ true)
≤transnat zero zero zero p1 p2 = refl
≤transnat zero zero (suc p) p1 p2 = refl
≤transnat zero (suc m) zero p1 p2 = refl
≤transnat zero (suc m) (suc p) p1 p2 = refl
≤transnat (suc n) zero p () p2
≤transnat (suc n) (suc m) zero p1 ()
≤transnat (suc n) (suc m) (suc p) p1 p2 = ≤transnat n m p p1 p2

≤neg : (n : ℕ) → (m : ℕ) → (n ≤nat m ≡ false) → (m ≤nat n ≡ true)
≤neg zero zero p = refl
≤neg zero (suc m) ()
≤neg (suc n) zero p = refl
≤neg (suc n) (suc m) p = ≤neg n m p

module simple-sorting (A : Set) (pos : PartialOrder A) where

  _≤_ = PartialOrder._≤_ pos

  min : A → List A → A
  min m [] = m
  min m (x ∷ xs) =
    if (m ≤ x)
      then min m xs
    else min x xs

  delete : A → List A → List A
  delete a [] = []
  delete a (x ∷ xs) =
    if (a ≤ x ∧ x ≤ a)
      then xs
    else x ∷ (delete a xs)

  sort : List A → List A
  sort [] = []
  sort (x ∷ xs) = m ∷ sort (delete m (x ∷ xs))
    where
      m = min x xs

-- open sorting {ℕ}

NatOrder : PartialOrder ℕ
NatOrder = poset _≤nat_ ≤reflnat ≤transnat ≤neg

open sorting ℕ NatOrder using (sort)
open simple-sorting ℕ NatOrder renaming (sort to ssort)
a = sort (2 ∷ 3 ∷ 1 ∷ 0 ∷ [])
b = ssort (3 ∷ 1 ∷ 2 ∷ [])
