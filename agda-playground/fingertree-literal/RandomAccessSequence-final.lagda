\begin{code}
open import FingerTree-measure-size-c
open import Size
open import Data.Nat
open import Data.Maybe
open import Data.List renaming (concat to concatlist)
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
open import Relation.Binary.HeterogeneousEquality renaming (refl to hrefl) renaming (sym to hsym) renaming (trans to htrans) renaming (cong to hcong) renaming (inspect to hinspect)

module RandomAccessSequence-final where

    open import SizeW using (size-monoid; SizeW; getSize; size; _<ᵗ_; _==ˢ_; _<ˢ_; _<=ˢ_)
    open import Entry using (entry-measure; getEntry; Entry; entry)

    Seq : ∀ {a}(A : Set a) SizeW → Set a
    Seq {a} A s = FingerTree (Entry A) (SizeW {a}) {s}

    length-seq : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ
    length-seq {s = s} ft = getSize s

    _!_ : ∀ {a}{A : Set a}{s : SizeW} → Seq A s → ℕ → Maybe A
    seq ! n with split-Tree (λ x → (size n) <ˢ x) (size 0) seq
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

      rev : Seq-pair A → Seq-pair A
      rev π = <rec a _ go π
        module Rev where
        go : ∀ s → (∀ p → p ⋖ s → Seq-pair A) → Seq-pair A
        go ⟨ fst , snd ⟩ rec with viewL snd
        go ⟨ .(size 0) , snd ⟩ rec | NilL = pack Empty
        go ⟨ _ , snd ⟩ rec | ConsL x xs =
            rec (pack (xs)) (one-step-lemma (measure-tree xs)) ▷' x

      rev-verif : (seq : Seq-pair A) → Same-Size-Seq (to-size seq)
      rev-verif π = <rec a _ go π
        module RevVerif where
        go : ∀ s
            → (∀ p → p ⋖ s → Same-Size-Seq (to-size p))
            → Same-Size-Seq (to-size s)
        go ⟨ fst , snd ⟩ rec with viewL snd
        go ⟨ .(size 0) , snd ⟩ rec | NilL = ssseq snd snd refl
        go ⟨ _ , snd ⟩ rec | ConsL x xs = snoc-ssq x
          (rec (pack xs) (one-step-lemma (measure-tree xs)))

      second : ∀ {μ} → Same-Size-Seq μ → Seq A μ
      second (ssseq x x₁ x₂) rewrite x₂ = x₁

      pack-tab : (seq : Seq-pair A) → ℕ → Maybe A
      pack-tab ⟨ μ , seq ⟩ n = seq ! n

      -- trying binary search
      -- open import numbers
      --
      -- data compare? (A : Set a) : Set a where
      --   equal : A → A → compare? A
      --   lt : A → A → compare? A
      --   bt : A → A → compare? A
      --
      -- -- to make recursion simpler to write, will just include the variable in a module

      --
      --
      -- module BinSearch (cmp : A → A → compare? A) (x : A) where
      --
      --   bin-search : ∀ s → A → Seq A s → Maybe (SizeW {a})
      --   bin-search (size n) x seq with repr n
      --   bin-search (size .0) x seq | zr = nothing
      --   bin-search (size _) x seq | 2* v with  split-Tree (SizeW._<ˢ_ (measure-tree seq)) ε seq
      --   bin-search (size _) x₂ seq | 2* v | just x₁ = {! x₁  !}
      --   bin-search (size _) x₁ seq | 2* v | nothing = {!   !}
      --   bin-search (size _) x seq | 2* v +1 = {!   !}

        -- bin-search : (seq : Seq-pair A) → SizeW {a}
        -- bin-search π = <rec a _ go π
        --     module BS where
        --     go : ∀ s
        --         → (∀ p → p ⋖ s → SizeW {a})
        --         → SizeW {a}
        --     go ⟨ size n , xs ⟩ rec = {!   !}



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

    open Recursive-Definitions ℕ using (rev; second; Same-Size-Seq; rev-verif)

    test-seq : Seq ℕ (size 10)
    test-seq = big-seq 10

    test-seq-pair : Seq-pair ℕ
    test-seq-pair = pack test-seq

    pair-tab : Seq-pair ℕ → ℕ → Maybe ℕ
    pair-tab ⟨ μ , seq ⟩ n = seq ! n

    ssseq-tab : ∀ {μ} → Same-Size-Seq μ → ℕ → Maybe ℕ
    ssseq-tab (Recursive-Definitions.ssseq x x₁ x₂) n = x₁ ! n

    revst = pair-tab (reverse-ft (test-seq-pair)) 1

    -- causes seg-fault -- why?
    revst2 = (snd (rev (test-seq-pair))) ! 1

    -- causes memory leak -- why?
    revst3 = pair-tab (rev test-seq-pair) 1

    revst4 = ssseq-tab (rev-verif test-seq-pair) 2

    main : IO ℕ
    main = (putStrLn (toCostring "Hello") >>=
            (λ x → putStrLn (toCostring (show-maybe(revst4)))) >>=
            (λ x → return 1))

    -- rev-seq-pair : Seq-pair ℕ
    -- rev-seq-pair = rev test-seq-pair
\end{code}
