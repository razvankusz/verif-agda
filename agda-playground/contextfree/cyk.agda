open import Data.List
open import Data.List.Any
open Membership
open import Data.Bool using (Bool;_∨_; true; false)
open import Agda.Builtin.Equality
module cyk where

  data Rule (N T : Set) : Set where
    _⟶_   : N → T → Rule N T
    _⟶_∙_ : N → N → N → Rule N T

  

  record Grammar : Set₁ where
    field
      N : Set
      T : Set
      nullable : Bool
      S : N
      Rs : List (Rule N T)


    data _▸_ : (s : List T) → N → Set where
      emtp : nullable ≡ true → [] ▸ S
      sngl : {A : N} → {a : T} → (A ⟶ a) ∈ Rs → [ a ] ▸ A
