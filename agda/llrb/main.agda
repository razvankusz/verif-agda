open import Data.Bool using (Bool; true; false; if_then_else_)
open import Data.List
open import Data.Nat hiding(_≤_; _<_; compare)
open import Data.Product
open import Data.Unit
open import Level

open import Relation.Binary hiding (_⇒_)
open import Relation.Nullary

module llrb-delete
  (order : StrictTotalOrder Level.zero Level.zero Level.zero) where
