open import FingerTree-measure

module RandomAccessSequence where

    open import SizeW using (size-monoid; SizeW; getSize; size)
    open import Entry using (entry-measure; getEntry; Entry; entry)

    Seq : ∀ {a}(A : Set a){i : Size} → Set a
    Seq {a} A = FingerTree (Entry {a}{A})(SizeW {a})

    length-seq : ∀ {a}{A : Set a} → Seq A → ℕ
    length-seq s = getSize (measure-tree s)

    _!_ : ∀ {a}{A : Set a} → Seq A → ℕ → Maybe A
    seq ! n with splitTree (λ x → size n SizeW.<ˢ x) SizeW.ε seq
    seq ! n | just (split _ x _) = just (getEntry x)
    seq ! n | nothing = nothing


    test-seq : Seq ℕ
    test-seq = (entry 1) ◁ (entry 2) ◁ (entry 3) ◁ (entry 4) ◁ (entry 5) ◁ Empty
