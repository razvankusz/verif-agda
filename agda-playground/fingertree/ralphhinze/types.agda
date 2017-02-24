module types where
  _∧_ : Set → Set → Set
  A ∧ B = λ p → ((A → B → p) → p)
