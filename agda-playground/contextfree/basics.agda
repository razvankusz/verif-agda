module basics where

record ∃ { A : Set } (P : A -> Set) : Set where
  constructor _,_
  field
    proj1 : A
    proj2 : P proj1

data _×_ (A B : Set) : Set where
  <_,_> : A -> B -> A × B

fst : {A B : Set} -> A × B -> A
fst < x , y > = x

snd : {A B : Set} -> A × B -> B
snd < x , y > = y

Rel : Set -> Set₁
Rel A = A -> A -> Set

Entire : {A B : Set} -> (_R_ : A -> B -> Set) -> Set
Entire _R_ = ∀ a -> ∃ λ b -> a R b

fun : {A B : Set} -> {_R_ : A -> B -> Set} -> Entire _R_ -> A -> B
fun ent a = ∃.proj1 (ent a)

correct : {A B : Set} -> {_R_ : A -> B -> Set} -> (ent : Entire _R_) ->
    let f = fun ent in ∀ {a : A} -> a R (f a)
correct ent {a} = ∃.proj2 (ent a)


UniqueSolution : {A : Set} -> Rel A -> (A -> Set) -> Set
UniqueSolution _≈_ P = ∀ {x y} -> P x -> P y -> x ≈ y

LowerBound : {A : Set} -> Rel A -> (A -> Set) -> (A -> Set)
LowerBound _≤_ P a = ∀ z -> (P z -> a ≤ z)

import Algebra.Structures
import Algebra.FunctionProperties

record mIsCommutativeMonoid {A : Set} (_≈_ : Rel A)
                (_●_ : A -> A -> A)(ε : A) : Set₁ where
  field
    isSemigroup : Algebra.Structures.IsSemigroup _≈_ _●_
    identity    : Algebra.FunctionProperties.LeftIdentity _≈_ ε _●_
    comm        : Algebra.FunctionProperties.Commutative  _≈_  _●_
    indentityr  : Algebra.FunctionProperties.RightIdentity _≈_ ε _●_

open Algebra.Structures using (IsCommutativeMonoid)
open Algebra.FunctionProperties using (LeftZero;RightZero)
record SemiNearRing : Set₁ where
  field
    s    : Set
    _≈ₛ_ : s -> s -> Set
    0ₛ   : s
    _+ₛ_ : s -> s -> s
    _⋆ₛ_ : s -> s -> s

    isCommMon   : mIsCommutativeMonoid _≈ₛ_ _+ₛ_ 0ₛ
    zerol       : ∀ x -> (0ₛ ⋆ₛ x) ≈ₛ 0ₛ
    zeror       : ∀ x -> (x ⋆ₛ 0ₛ) ≈ₛ 0ₛ
    _⅋_         : ∀ {x y u v} -> (x ≈ₛ y) -> ( x ⋆ₛ u ≈ₛ y ⋆ₛ v)

  infix 4 _≈ₛ_; infixl 6 _+ₛ_; infixl 7 _⋆ₛ_
