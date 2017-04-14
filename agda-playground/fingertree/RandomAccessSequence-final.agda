open import FingerTree-measure-size-c
open import Size
open import Data.Nat
open import Data.Maybe
open import Data.List renaming (concat to concatlist)
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
open import Relation.Binary.HeterogeneousEquality renaming (refl to hrefl) renaming (sym to hsym) renaming (trans to htrans) renaming (cong to hcong) renaming (inspect to hinspect)


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

    _▷'_ : ∀ {a} {A : Set a}
           → Seq-pair A → Entry A → Seq-pair A
    ⟨ fst , snd ⟩ ▷' x = ⟨ measure-tree (x ▷ snd) , (x ▷ snd) ⟩

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

      data Same-Size-Seq : (s : SizeW {a}) → Set a where
        ssseq : ∀ {s} {z} → (Seq A s) → (Seq A z) → (s ≡ z) → Same-Size-Seq s

      nat-lemma0 : ∀ n → (suc n ≡ n + 1)
      nat-lemma0 zero = refl
      nat-lemma0 (suc n) = cong suc (nat-lemma0 n)

      size-lemma0 : ∀ {a} n → (size {a} (suc n) ≡ size {a} (n + 1))
      size-lemma0 n = cong size (nat-lemma0 n)

      -- snoc-trick : ∀ {n} → (x : Entry A) → (Seq A (size n)) → (Seq A (size (suc n)))
      -- snoc-trick {n} x seq rewrite (size-lemma0 {a} n) = x ▷ seq

      size-lemma1 : ∀ {n} → (size {a} (suc n) ≡ (size 1) ∙ (size n))
      size-lemma1 {zero} = refl
      size-lemma1 {suc n} = refl

      size-lemma2 : ∀ {n} → (size {a} (suc n) ≡ (size n) ∙ (size 1))
      size-lemma2 {n} = trans (size-lemma1 {n}) (SizeW.∙-comm (size 1) (size n))

      snoc-ssq' : ∀ {n}
              → (x : Entry A)
              → (Same-Size-Seq (size n))
              → (Same-Size-Seq (size (suc n)))
      snoc-ssq' {n} x (ssseq seq rev-seq pr) = ssseq (x ◁ seq) (x ▷ rev-seq)
        (begin
          size (suc n)
        ≡⟨ size-lemma2 {n} ⟩
          (size n) ∙ (size 1)
        ≡⟨ cong (_∙ Entry.measure x) pr ⟩
          ((measure-tree rev-seq) SizeW.∙ size 1)
        ∎)

      snoc-ssq : ∀ {s}
              → (x : Entry A)
              → (Same-Size-Seq s)
              → (Same-Size-Seq ((size 1) ∙ s))
      snoc-ssq {size n} x sseq rewrite size-lemma1 {n} = snoc-ssq' x sseq

      -- rev : Seq-pair A → Seq-pair A
      -- rev π = <rec a _ go π
      --   module Rev where
      --   go : ∀ s → (∀ p → p ⋖ s → Seq-pair A) → Seq-pair A
      --   go ⟨ fst , snd ⟩ rec with viewL snd
      --   go ⟨ .(size 0) , snd ⟩ rec | NilL = pack Empty
      --   go ⟨ _ , snd ⟩ rec | ConsL x xs =
      --       rec (pack (xs)) (one-step (measure-tree xs)) ▷' x

      rev : (seq : Seq-pair A) → Same-Size-Seq (to-size seq)
      rev π = <rec a _ go π
        module Rev where
        go : ∀ s
            → (∀ p → p ⋖ s → Same-Size-Seq (to-size p))
            → Same-Size-Seq (to-size s)
        go ⟨ fst , snd ⟩ rec with viewL snd
        go ⟨ .(size 0) , snd ⟩ rec | NilL = ssseq snd snd refl
        go ⟨ _ , snd ⟩ rec | ConsL x xs = snoc-ssq x
          (rec (pack xs) (one-step (measure-tree xs)))


      -- try merge sort?
      -- better try binary search

      data compare? (A : Set a) : Set a where
        equal : A → A → compare? A
        lt : A → A → compare? A
        bt : A → A → compare? A

      -- to make recursion simpler to write, will just include the variable in a module

      split-half : ∀ {s}
                  → Seq A s
                  → Maybe (Split-d (Entry A) (SizeW {a}) {s})
      split-half seq = {!   !}

      module BinSearch (cmp : A → A → compare? A) (x : A) where

        bin-search : (seq : Seq-pair A) → SizeW {a}
        bin-search π = <rec a _ go π
            module BS where
            go : ∀ s
                → (∀ p → p ⋖ s → SizeW {a})
                → SizeW {a}
            go ⟨ μ , xs ⟩ rec = {!   !}



      -- correct-reverse : ∀ {s} → (x : Entry A) → Seq A s → Seq A s
      -- correct-reverse x seq with rev (pack seq)
      -- correct-reverse x₂ seq | ssseq s₁ x x₁ = {!  !}
      -- property : Seq-pair A → Set a
      -- property xs = to-size (rev xs) ≡ to-size xs
      -- -- example property
      --
      --
      -- -- inductive-step : ∀ {s : SizeW}
      -- --           → (seq : Seq A ((size 1) ∙ s))
      -- --           → (x : Entry A)
      -- --           → (xs : Seq A s)
      -- --           → (viewL seq ≡ ConsL x xs)
      -- --           → (property (pack xs))
      -- --           → (property (pack seq))
      -- -- ind_step seq x xs p1 step with viewL seq
      -- -- ... | v = {!   !}
      --
      -- rev-correct : (xs : Seq-pair A) → property xs
      -- rev-correct π = <rec a _ go π
      --   module Rev' where
      --   go : ∀ s → (∀ p → p ⋖ s → (property p)) → (property s)
      --   go ⟨ μ , seq ⟩ rec with viewL seq
      --   go ⟨ .(size 0) , seq ⟩ rec | NilL = refl
      --   go ⟨ _ , seq ⟩ rec | ConsL x xs = {!   !}

    open Recursive-Definitions ℕ using (rev)

    test-seq : Seq ℕ (size 10)
    test-seq = big-seq 10

    test-seq-pair : Seq-pair ℕ
    test-seq-pair = pack test-seq
    --
    -- rev-seq-pair : Seq-pair ℕ
    -- rev-seq-pair = rev test-seq-pair
