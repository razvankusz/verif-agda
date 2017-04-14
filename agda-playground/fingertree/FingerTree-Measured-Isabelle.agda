module FingerTree-Measured-Isabelle where

open import Level using (Level)
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_; foldr; foldl)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false; _∧_ )
open import Size
open import measure
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

-- _==_ : ℕ → ℕ → Bool
-- ℕ.zero == ℕ.zero = true
-- ℕ.zero == suc m = false
-- suc n == ℕ.zero = false
-- suc n == suc m = n == m

data Node {a}(A : Set a)(V : Set a) : Set a where
  Tip : A → V → Node A V
  Node2 : V → Node A V → Node A V → Node A V
  Node3 : V → Node A V → Node A V → Node A V → Node A V

data Digit {a}(A : Set a)(V : Set a) : Set a where
  One : Node A V → Digit A V
  Two : Node A V → Node A V → Digit A V
  Three : Node A V → Node A V → Node A V → Digit A V
  Four : Node A V → Node A V → Node A V → Node A V → Digit A V

data FingerTree {a}(A : Set a)(V : Set a) : Set a where
  Empty : FingerTree A V
  Single : Node A V → FingerTree A V
  Deep : V → Digit A V → FingerTree A V → Digit A V → FingerTree A V

gmn : ∀ {a} {A : Set a} {V : Set a} → Node A V → V
gmn (Tip x x₁) = x₁
gmn (Node2 x node node₁) = x
gmn (Node3 x node node₁ node₂) = x

open Monoid {{...}} public

gmd : ∀ {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ → Digit A V → V
gmd (One x) = gmn x
gmd (Two x x₁) = gmn x ∙ gmn x₁
gmd (Three x x₁ x₂) = gmn x ∙ gmn x₁ ∙ gmn x₂
gmd (Four x x₁ x₂ x₃) = gmn x ∙ gmn x₁ ∙ gmn x₂ ∙ gmn x₃

gmft : ∀ {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ → FingerTree A V → V
gmft Empty = ε
gmft (Single x) = gmn x
gmft (Deep x x₁ ft x₂) = x

is-leveln-node : ∀ {a} {A : Set a} {V : Set a} → ℕ → Node A V → Bool
is-leveln-node 0 (Tip _ _) = true
is-leveln-node 0 (Node2 _ _ _) = false
is-leveln-node 0 (Node3 _ _ _ _) = false
is-leveln-node (suc m) (Tip _ _) = false
is-leveln-node (suc m) (Node2 _ n₁ n₂) = (is-leveln-node m n₁) ∧ (is-leveln-node m n₂)
is-leveln-node (suc m) (Node3 _ n₁ n₂ n₃) = (is-leveln-node m n₁) ∧ (is-leveln-node m n₂) ∧ (is-leveln-node m n₃)

is-leveln-digit : ∀ {a} {A : Set a} {V : Set a} → ℕ → Digit A V → Bool
is-leveln-digit n (One x) = is-leveln-node n x
is-leveln-digit n (Two x x₁) = is-leveln-node n x ∧ is-leveln-node n x₁
is-leveln-digit n (Three x x₁ x₂) = is-leveln-node n x ∧ is-leveln-node n x₁ ∧ is-leveln-node n x₂
is-leveln-digit n (Four x x₁ x₂ x₃) = is-leveln-node n x ∧ is-leveln-node n x₁ ∧ is-leveln-node n x₂ ∧ is-leveln-node n x₃

is-leveln-tree : ∀ {a} {A : Set a} {V : Set a} → ℕ → FingerTree A V → Bool
is-leveln-tree n Empty = true
is-leveln-tree n (Single x) = is-leveln-node n x
is-leveln-tree n (Deep x x₁ ft x₂) = (is-leveln-digit n x₁) ∧ (is-leveln-digit n x₂) ∧ (is-leveln-tree (suc n) ft)



data IsMeasuredNode {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ : (Node A V) → Set a where
  MeasuredTip : ∀ (x : A) (x₁ : V) → IsMeasuredNode (Tip x x₁)
  MeasuredNode2 : ∀ (x : V) (n : Node A V) (n₁ : Node A V)
              → (IsMeasuredNode n) → (IsMeasuredNode n₁)
              → (x ≡ (gmn n) ∙ (gmn n₁)) → IsMeasuredNode (Node2 x n n₁)
  MeasuredNode3 : ∀ (x : V) (n : Node A V) (n₁ : Node A V) → (n₂ : Node A V)
              → (IsMeasuredNode n) → (IsMeasuredNode n₁) → (IsMeasuredNode n₂)
              → (x ≡ (gmn n) ∙ (gmn n₁) ∙ (gmn n₂))
              → IsMeasuredNode (Node3 x n n₁ n₂)

is-measured-node : ∀ {a} {A : Set a} {V : Set a} ⦃ m : Monoid V ⦄ → (Node A V) → Bool
is-measured-node (Tip x x₁) = true
is-measured-node (Node2 x n n₁) = (is-measured-node n) ∧ (is-measured-node n₁) ∧ (x == ((gmn n) ∙ (gmn n₁)))
is-measured-node (Node3 x n n₁ n₂) = (is-measured-node n) ∧ (is-measured-node n₁) ∧ (is-measured-node n₂) ∧ (x == ((gmn n) ∙ (gmn n₁) ∙ (gmn n₂)))


is-measured-digit : ∀ {a} {A : Set a} {V : Set a}
                    ⦃ m : Monoid V ⦄
                    → Digit A V
                    → Bool
is-measured-digit (One x) = is-measured-node x
is-measured-digit (Two x x₁) = (is-measured-node x) ∧ (is-measured-node x₁)
is-measured-digit (Three x x₁ x₂) = (is-measured-node x) ∧ (is-measured-node x₁) ∧ (is-measured-node x₂)
is-measured-digit (Four x x₁ x₂ x₃) = (is-measured-node x) ∧ (is-measured-node x₁) ∧ (is-measured-node x₂) ∧ (is-measured-node x₃)


is-measured-tree : ∀ {a} {A : Set a} {V : Set a}
                  ⦃ m : Monoid V ⦄
                  → FingerTree A V
                  → Bool
is-measured-tree Empty = true
is-measured-tree (Single x) = is-measured-node x
is-measured-tree (Deep x x₁ ft x₂) = (is-measured-digit x₁) ∧ (is-measured-tree ft) ∧ (is-measured-digit x₂) ∧ (x == ((gmd x₁) ∙ (gmft ft) ∙ (gmd x₂)))

ft-invar : ∀ {a} {A : Set a} {V : Set a}
           ⦃ m : Monoid V ⦄
           → FingerTree A V
           → Bool
ft-invar t = is-leveln-tree 0 t ∧ is-measured-tree t

-- to list ---------------------------------
open import Data.Product


node-to-list : ∀ {a} {A : Set a} {V : Set a}
              → Node A V
              → List (A × V)
node-to-list (Tip x x₁) =  (x , x₁) ∷ []
node-to-list (Node2 x n n₁) = node-to-list n ++ node-to-list n₁
node-to-list (Node3 x n n₁ n₂) = node-to-list n ++ node-to-list n₁ ++ node-to-list n₂

digit-to-list : ∀ {a} {A : Set a} {V : Set a}
              → Digit A V
              → List (A × V)
digit-to-list (One x) = node-to-list x
digit-to-list (Two x x₁) = node-to-list x ++ node-to-list x₁
digit-to-list (Three x x₁ x₂) = node-to-list x ++ node-to-list x₁ ++ node-to-list x₂
digit-to-list (Four x x₁ x₂ x₃) = node-to-list x ++ node-to-list x₁ ++ node-to-list x₂ ++ node-to-list x₃

to-list : ∀ {a} {A : Set a} {V : Set a}
        → FingerTree A V
        → List (A × V)
to-list Empty = []
to-list (Single a) = node-to-list a
to-list (Deep x pr ft sf) = digit-to-list pr ++ to-list ft ++ digit-to-list sf

list-not-nil : ∀ {a} {A : Set a}
              → (xs : List A)
              → (ys : List A)
              → (xs ≢ [])
              → (xs ++ ys ≢ [])
list-not-nil [] ys p = λ _ → p refl
list-not-nil (x ∷ xs) ys p = λ ()

node-to-list-nempty : ∀ {a} {A : Set a} {V : Set a}
                  → (n : Node A V) → node-to-list n ≢ []
node-to-list-nempty (Tip x x₁) = λ ()
node-to-list-nempty (Node2 x n n₁) = list-not-nil (node-to-list n) (node-to-list n₁) (node-to-list-nempty n)
node-to-list-nempty (Node3 x n n₁ n₂) = list-not-nil (node-to-list n) (node-to-list n₁ ++ node-to-list n₂) ((node-to-list-nempty n))

digit-to-list-nempty : ∀ {a} {A : Set a} {V : Set a}
                 →  (d : Digit A V) → digit-to-list d ≢ []
digit-to-list-nempty (One x) = node-to-list-nempty x
digit-to-list-nempty (Two x x₁) = list-not-nil (node-to-list x) (node-to-list x₁) (node-to-list-nempty x)
digit-to-list-nempty (Three x x₁ x₂) = list-not-nil (node-to-list x) (node-to-list x₁ ++ node-to-list x₂) ((node-to-list-nempty x))
digit-to-list-nempty (Four x x₁ x₂ x₃) = list-not-nil (node-to-list x) (node-to-list x₁ ++ node-to-list x₂ ++ node-to-list x₃) (node-to-list-nempty x)

list-map : ∀ {a} {A : Set a} {B : Set a}
          → (f : A → B)
          → (List A)
          → List B
list-map f [] = []
list-map f (x ∷ xs) = f x ∷ (list-map f xs)

list-map-append : ∀ {a} {A : Set a} {B : Set a}
          → (f : A → B)
          → (xs : List A)
          → (ys : List A)
          → (list-map f (xs ++ ys) ≡ (list-map f xs) ++ (list-map f ys))
list-map-append f [] ys = refl
list-map-append f (x ∷ xs) ys = cong (_∷_ (f x)) (list-map-append f xs ys)

list-sum : ∀ {a} {A : Set a}
          ⦃ m : Monoid A ⦄
          → List A
          → A
list-sum xs = foldl _∙_ ε xs

foldl-start : ∀ {a} {A : Set a}
        ⦃ m : Monoid A ⦄
        → (x : A)
        → (xs : List A)
        → (foldl _∙_ x xs ≡ foldl _∙_ ε (x ∷ xs))
foldl-start x [] = sym (ε-left x)
foldl-start x (y ∷ xs) =
  begin foldl _∙_ (x ∙ y) xs
    ≡⟨ cong (λ a → foldl _∙_ a xs) (sym (ε-left (x ∙ y))) ⟩
  foldl _∙_ (ε ∙ x ∙ y) xs
    ≡⟨ cong (λ a → foldl _∙_ a xs) (∙-assoc ε x y) ⟩
  foldl _∙_ ((ε ∙ x) ∙ y) xs
  ∎

list-sum-foldl : ∀ {a} {A : Set a}
                ⦃ m : Monoid A ⦄
                → (x : A)
                → (xs : List A)
                → (x ∙ (list-sum xs) ≡ (foldl _∙_ x xs))
list-sum-foldl x [] = ε-right x
list-sum-foldl x (y ∷ xs) = begin
  x ∙ (foldl _∙_ (ε ∙ y) xs)
    ≡⟨ cong (λ a → x ∙ (foldl _∙_ a xs)) (ε-left y) ⟩
  x ∙ (foldl _∙_ y xs)
    ≡⟨ cong (x ∙_) (sym (list-sum-foldl y xs)) ⟩
  x ∙ y ∙ (list-sum xs)
    ≡⟨ ∙-assoc x y (list-sum xs) ⟩
  (x ∙ y) ∙ (list-sum xs)
    ≡⟨ list-sum-foldl (x ∙ y) xs ⟩
  foldl _∙_ (x ∙ y) xs
  ∎

list-sum-cons : ∀ {a} {A : Set a}
              ⦃ m : Monoid A ⦄
              → (x : A)
              → (xs : List A)
              → (list-sum (x ∷ xs) ≡ x ∙ (list-sum xs))
list-sum-cons x xs =
  begin
    list-sum (x ∷ xs)
  ≡⟨ sym (foldl-start x xs) ⟩
    foldl _∙_ x xs
  ≡⟨ sym (list-sum-foldl x xs) ⟩
    x ∙ (list-sum xs)
  ∎

list-sum-append : ∀ {a} {A : Set a}
        ⦃ m : Monoid A ⦄
        → (xs : List A)
        → (ys : List A)
        → (list-sum (xs ++ ys) ≡ (list-sum xs) ∙ (list-sum ys))
list-sum-append [] ys = sym (ε-left (list-sum ys))
list-sum-append (x ∷ xs) ys =
  begin
    foldl _∙_ (ε ∙ x) (xs ++ ys)
  ≡⟨ cong (λ a → foldl _∙_ a (xs ++ ys)) (ε-left x) ⟩
    foldl _∙_ x (xs ++ ys)
  ≡⟨ sym (list-sum-foldl x (xs ++ ys)) ⟩
    x ∙ (list-sum (xs ++ ys))
  ≡⟨ cong (x ∙_) (list-sum-append xs ys) ⟩
    x ∙ (list-sum xs) ∙ (list-sum ys)
  ≡⟨ ∙-assoc x (list-sum xs) (list-sum ys) ⟩
    (x ∙ (list-sum xs)) ∙ (list-sum ys)
  ≡⟨ cong (_∙ (list-sum ys)) (sym (list-sum-cons x xs)) ⟩
    (list-sum (x ∷ xs)) ∙ (list-sum ys)
  ∎

∧fst : {a : Bool} → {b : Bool} → (a ∧ b ≡ true) → (a ≡ true)
∧fst {false} {b} ()
∧fst {true} {b} p = refl

∧snd : {a : Bool} → {b : Bool} → (a ∧ b ≡ true) → (b ≡ true)
∧snd {false} {b} ()
∧snd {true} {b} p = p

gmn-correct : ∀ {a} {A : Set a} {V : Set a}
            ⦃ m : Monoid V ⦄
            → (n : Node A V)
            → (is-measured-node n ≡ true)
            → (gmn n == list-sum (list-map proj₂ (node-to-list n))) ≡ true
gmn-correct {a} {V = V} ⦃ m ⦄ (Tip x x₁) refl =
  start
    x₁
  =≡⟨ sym (ε-left x₁) ⟩
    ==refl
  where
    open import Bool-Equality-Reasoning {a} {V} {Monoid._==_ m}

 -- ==refl {x = x₁} {ε ∙ x₁} (sym (ε-left x₁))
gmn-correct {a} {V = V} ⦃ m ⦄ (Node2 x n n₁) assum = {!   !}
  where
    open import Bool-Equality-Reasoning {a} {V} {Monoid._==_ m}
    -- assum1 = ∧fst (is-measured-node n) ((is-measured-node n₁) ∧ (x == (gmn n ∙ gmn n₁))) assum
    -- assum2 = ∧fst (is-measured-node n₁) ((x == (gmn n ∙ gmn n₁))) (∧snd (is-measured-node n) ((is-measured-node n₁) ∧ (x == (gmn n ∙ gmn n₁))) assum)
    -- assum3 = ∧snd (is-measured-node n₁) ((x == (gmn n ∙ gmn n₁))) (∧snd (is-measured-node n) ((is-measured-node n₁) ∧ (x == (gmn n ∙ gmn n₁))) assum)
    assum1 = ∧fst assum
    assum23 = ∧snd ?
    induct1 = gmn-correct n assum1
    -- induct2 = gmn-correct n₁ assum2

gmn-correct (Node3 x n n₁ n₂) assum = {!   !}
