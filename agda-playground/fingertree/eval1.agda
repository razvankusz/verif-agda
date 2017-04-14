open import FingerTree-measure-size-c as FTM

open import numbers
open import AlgebraStructures
open import Data.Nat

instance nat : Monoid ℕ
nat = monoid 0 _+_ 0+ +0 +assoc _<_

instance nat-measure : ∀ {A : Set} → Measured A ℕ
nat-measure = measured (λ x → 1)

open import Data.Maybe
open import IO.Primitive
open import Data.String
open import Agda.Builtin.Unit
-- {-# BUILTIN STRING String #-}
-- {-# BUILTIN UNIT Unit #-}
open import Data.Nat.Show
show-maybe : Maybe ℕ → String
show-maybe (just x) = Data.Nat.Show.show x
show-maybe nothing = "nothing"
main : IO ℕ

open import Size
postulate i : Size

big-seq : ∀ (n : ℕ) → FTM.FingerTree ℕ ℕ {n}
big-seq zero = Empty
big-seq (suc n) = n ◁ (big-seq n)

show-viewL : ∀ {s} → ViewL ℕ ℕ {s} → String
show-viewL NilL = "nil"
show-viewL (ConsL x xs) = Data.Nat.Show.show(x)

main = (putStrLn (toCostring "Hello") >>=
        (λ x → return (big-seq 134217728) >>=
        (λ x → putStrLn (toCostring (show-viewL (viewL x)))) >>= -- (show-viewL (viewL x))
        (λ x → return 1)))
