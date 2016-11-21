module Nat where

  open import Data.Nat hiding (pred)
  open import Size

  data NatLt : ℕ → Set where
    zero : (ι : ℕ) → NatLt (suc ι)
    succ : (ι : ℕ) → NatLt ι → NatLt (suc ι)

  upcast : (ι : ℕ) → NatLt ι → NatLt (suc ι)
  upcast .(suc ι) (zero ι) = zero (suc ι)
  upcast .(suc ι) (succ ι y) = succ (suc ι) (upcast ι y)

  minus : (i : ℕ) → NatLt i → ℕ → NatLt i
  minus _ x zero = x
  minus .(suc i) (zero i) _ = zero i
  minus .(suc i) (succ i x) (suc y) = upcast i (minus i x y)
