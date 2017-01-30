open import FingerTree-measure
open import Size
open import Data.Nat
open import Data.Maybe
open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

module RandomAccessSequence where

    open import SizeW using (size-monoid; SizeW; getSize; size; _<ᵗ_)
    open import Entry using (entry-measure; getEntry; Entry; entry)

    Seq : ∀ {a}(A : Set a){i : Size} → Set a
    Seq {a} A = FingerTree (Entry A) (SizeW {a})

    length-seq : ∀ {a}{A : Set a} → Seq A → ℕ
    length-seq s = getSize (measure-tree s)

    _!_ : ∀ {a}{A : Set a} → Seq A → ℕ → Maybe A
    seq ! n with splitTree (λ x → size n SizeW.<ˢ x) SizeW.ε seq
    seq ! n | just (split _ x _) = just (getEntry x)
    seq ! n | nothing = nothing

    _◀_ : ∀ {a} {A : Set a} → (x : A) → Seq A → Seq A
    x ◀ s = entry x ◁ s

    -- this could be proved with induction on the view......


    seq-measure-lemma1 : ∀ {a} {A : Set a} → (x : A) → (s : SizeW) → (s <ᵗ ((Entry.m (entry x)) ∙ s))
    seq-measure-lemma1 x (size n) = SizeW.unit-step

    seq-measure-lemma0 : ∀ {a} {A : Set a} → (x : A) → (s : Seq A) → (measure-tree s <ᵗ measure-tree (x ◀ s))
    seq-measure-lemma0 x s rewrite measure-lemma5 (entry x) s = seq-measure-lemma1 x (measure-tree s)

    -- -- this is obviously false.
    -- please-god-let-me-prove-this : ∀ {a} {A : Set a} (s : Seq A) → (measure-tree s ≡ foldr (λ x r → ∥ x ∥ ∙ r) ε (toList-ft s))
    -- please-god-let-me-prove-this Empty = refl
    -- please-god-let-me-prove-this (Single x) = begin Entry.m x ≡⟨ sym (ε-right (Entry.m x)) ⟩ (Entry.m x SizeW.∙ size zero) ∎
    -- please-god-let-me-prove-this (Deep x x₁ s x₂) = {!   !}
    --
    --
    -- big-seq-acc : ℕ → ℕ → Seq ℕ → Seq ℕ
    -- big-seq-acc zero i ac = ac
    -- big-seq-acc (suc n) i ac = big-seq-acc n (suc i) (i ◀ ac)

    big-seq : ℕ → Seq ℕ
    big-seq zero = Empty
    big-seq suc n = (entry n) ◁ (big seq n)

    open import IO.Primitive
    open import Data.String
    open import Agda.Builtin.Unit
    -- {-# BUILTIN STRING String #-}
    -- {-# BUILTIN UNIT Unit #-}
    import Data.Nat.Show
    show-maybe : Maybe ℕ → String
    show-maybe (just x) = Data.Nat.Show.show x
    show-maybe nothing = "nothing"
    main : IO ℕ

    main = (putStrLn (toCostring "Hello") >>=
            (λ x → return (big-seq 10000) >>=
            (λ x → putStrLn (toCostring (show-maybe(x ! 2)))) >>=
            (λ x → return 1)))


    open import Function
    open import Induction.WellFounded
    open import Relation.Binary
    open import Level

    _<*_ : ∀ {a} {A : Set a} → Rel (Seq A) a
    s <* t = (measure-tree s) <ᵗ (measure-tree t)

    wf* : ∀ {a} {A : Set a} → Well-founded {a}{a}{Seq A} _<*_
    wf* = λ x → acc {!   !}

    wf*rec : ∀ {a} {A : Set a} → (x : Seq A) → WfRec {a}{a} _<*_ (Acc {a}{a}  _<*_) x
    wf*rec x Empty p = {!   !}
    wf*rec x (Single x₁) p = {!   !}
    wf*rec x (Deep x₁ x₂ y x₃) p = {!   !}
