open import FingerTree-measure-size-c
open import Size
open import Data.Nat
open import Data.Maybe
open import Data.List renaming (concat to concatlist)
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

module RandomAccessSequence-final where

    open import SizeW using (size-monoid; SizeW; getSize; size; _<ᵗ_)
    open import Entry using (entry-measure; getEntry; Entry; entry)

    Seq : ∀ {a}(A : Set a) SizeW → Set a
    Seq {a} A s = FingerTree (Entry A) (SizeW {a}) {s}

    length-seq : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ
    length-seq {s = s} ft = getSize s

    _!_ : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ → Maybe A
    seq ! n with split-Tree (λ x → size n SizeW.<ˢ x) SizeW.ε seq
    seq ! n | just (split-d _ x _) = just (getEntry x)
    seq ! n | nothing = nothing

    set : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ → A → Seq A s
    set seq n y with split-Tree (λ x → size n SizeW.<ˢ x) SizeW.ε seq
    set seq n y | just (split-d left x right)
      rewrite ∙-assoc (measure-tree left)
                      (size 1)
                      (measure-tree right)
      = concat ((entry y) ▷ left) right
    set seq n y | nothing = seq

    big-seq : (n : ℕ) → Seq ℕ (size n)
    big-seq zero = Empty
    big-seq (suc n) = (entry n) ◁ (big-seq n)

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

    open import Induction
    open import Induction.WellFounded as WF
    open import Level using (Lift)

    open import Data.Empty
    open import DependentPair
    open import AlgebraStructures

    Seq-pair : ∀ {a} (A : Set a) → Set a
    Seq-pair {a} A = Σ (SizeW {a}) (Seq A)

    pack : ∀ {a} {A : Set a} {s : SizeW} → Seq A s → Seq-pair A
    pack xs = ⟨ measure-tree xs , xs ⟩

    to-size : ∀ {a} {A : Set a} → Seq-pair A → SizeW {a}
    to-size ⟨ x , y ⟩ = x

    module Recursive-Definitions {a} (A : Set a) where

      open SizeW.less-than
      open import Function

      -- comparing Seq-pairs is just comparing the size component
      _⋖_ : ∀ {a} {A : Set a} → Seq-pair A → Seq-pair A → Set a
      _⋖_ = _<<_ on to-size

      open Inverse-image
        {A = Seq-pair A}
        {_<_ = _<<_}
        to-size
        renaming (well-founded to <<-<-wf)

    -- the comparison operation defined on the Seq-pair is well-founded
      <-WF = <<-<-wf <<-WF

      open WF.All (<-WF) renaming (wfRec to <rec)

      rev : Seq-pair A → Seq-pair A
      rev π = <rec a _ go π
        module Rev where
        go : ∀ s → (∀ p → p ⋖ s → Seq-pair A) → Seq-pair A
        go ⟨ fst , snd ⟩ rec with viewL snd
        go ⟨ .(size 0) , snd ⟩ rec | NilL = pack Empty
        go ⟨ _ , snd ⟩ rec | ConsL x xs = ⟨ measure-tree (x ▷ xs) , x ▷ xs ⟩

      rev-correct : (xs : Seq-pair A) → (to-size (rev xs) ≡ to-size xs)
      rev-correct π = <rec a _ go π
        module Rev' where
        go : ∀ s → (∀ p → p ⋖ s → (to-size (rev p) ≡ to-size p)) → (to-size (rev s) ≡ to-size s)
        go ⟨ fst , snd ⟩ rec with viewL snd
        go ⟨ .(size 0) , snd ⟩ rec | NilL = refl
        go ⟨ _ , snd ⟩ rec | ConsL x xs
          = SizeW.∙-comm (measure-tree xs) (size 1)


    open Recursive-Definitions ℕ using (rev)

    test-seq : Seq ℕ (size 10)
    test-seq = big-seq 10

    test-seq-pair : Seq-pair ℕ
    test-seq-pair = pack test-seq

    rev-seq-pair : Seq-pair ℕ
    rev-seq-pair = rev test-seq-pair
