module bush {a} where

-- we would like to flatten this
  data Bush (A : Set a) : Set a where
    NilB : Bush A
    ConsB : A → Bush (Bush A) → Bush A

-- into something like this
  data ViewB (A : Set a) : Set a where
    NilV : ViewB A
    ConsV : A → Bush A → ViewB A

  bushup : ∀ {A : Set a} → Bush A → Bush (Bush A)
  bushup NilB = ?
  bushup (ConsB x b) = ?

  flatten : ∀ {A : Set a} → Bush A → ViewB A
  flatten NilB = NilV
  flatten (ConsB x b) with flatten b
  flatten (ConsB x b) | NilV = ConsV x NilB
  flatten (ConsB x₂ b) | ConsV x x₁ = {!   !}
