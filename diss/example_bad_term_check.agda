
  split-Tree3 : ∀ {a} {A : Set a}{V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {μ : V} →
                (p : V → Bool) → (i : V) →
                (pr : Digit A) → (ft : FingerTree (Node A V) V {μ}) → (sf : Digit A) →
                (p (i ∙ measure-digit pr) ≡ false) →
                (p ((i ∙ measure-digit pr) ∙ μ) ≡ true) →
                Split-d A V {(measure-digit pr) ∙ μ ∙ (measure-digit sf)}
  split-Tree3 p i pr ft sf eq1 eq2 with split-Tree p (i ∙ measure-digit pr) ft | inspect (split-Tree p (i ∙ measure-digit pr)) ft
  -- inspect here is needed to enforce structure-measure-lemma1. It will be named rem in the other case - for rememeber.

  split-Tree3 p i pr ft sf eq1 eq2 | just (split-d ml mx mr) | _ with splitDigit p (i ∙ measure-digit pr ∙ measure-tree ml) (toDigit mx) |
                                                                        inspect (splitDigit p (i ∙ measure-digit pr ∙ measure-tree ml)) (toDigit mx)
  split-Tree3 p i pr ft sf eq1 eq2 | just (split-d ml mx mr) | _ | split l x r | [ eq ] rewrite split-Tree3-measure-lemma p i pr sf ml mx mr l x r eq = split-d (deepR pr ml l) x (deepL r mr sf)

  -- see explanation at structure-measure-lemma1
  split-Tree3 p i pr ft sf eq1 eq2 | nothing | [ eq ] with structure-measure-lemma1 p (i ∙ measure-digit pr) ft eq1 eq2 eq
  split-Tree3 p i pr ft sf eq1 eq2 | nothing | [ eq ] | ()

-- from FingerTree-measure-size
