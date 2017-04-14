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

    seq-measure-lemma1 : ∀ {a} {A : Set a} → (x : A) → (s : SizeW) → (s <ᵗ ((Entry.measure (entry x)) ∙ s))
    seq-measure-lemma1 x (size n) = SizeW.unit-step

    seq-measure-lemma0 : ∀ {a} {A : Set a} → (x : A) → (s : Seq A) → (measure-tree s <ᵗ measure-tree (x ◀ s))
    seq-measure-lemma0 x s rewrite measure-lemma5 (entry x) s = seq-measure-lemma1 x (measure-tree s)

    big-seq : {i : Size} → ℕ → Seq ℕ
    big-seq zero = Empty
    big-seq (suc n) = (entry n) ◁ (big-seq n)

    open import IO.Primitive
    open import Data.String
    open import Agda.Builtin.Unit
    import Data.Nat.Show

    show-maybe : Maybe ℕ → String
    show-maybe (just x) = Data.Nat.Show.show x
    show-maybe nothing = "nothing"

    main = (putStrLn (toCostring "Hello") >>=
            (λ x → return (big-seq 1000) >>=
            (λ x → putStrLn (toCostring (show-maybe(x ! 2)))) >>=
            (λ x → return 1)))

    open import Function
    open import Induction.WellFounded
    open import Relation.Binary
    open import Level
