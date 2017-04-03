open import FingerTree-measure-size
open import Size
open import Data.Nat
open import Data.Maybe
open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

module RandomAccessSequence-size where

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

    Rec : ∀ l → RecStruct (SizeW {l}) l l
    Rec l P (size zero) = Lift ⊤
    Rec l P (size (suc n)) = P (size n)

    rec-builder : ∀ {l} → RecursorBuilder (Rec l)
    rec-builder P f (size zero) = Lift.lift tt
    rec-builder P f (size (suc n)) = f (size n) (rec-builder P f (size n))

    rec : ∀ {l} → Recursor (Rec l)
    rec = build rec-builder

    open import Function

    data argTuple {a} (A : Set a) : Set a where
      atuple : (μ : SizeW) → (ft : Seq A μ) → (v : ViewL (Entry A) (SizeW {a})) → (v ≡ viewL ft) → argTuple A

    getsz : ∀ {a} {A : Set a} → (argTuple A) → SizeW {a}
    getsz (atuple μ ft v x) = μ


    open import Data.Empty
    open import DependentPair
    open import AlgebraStructures
    open import Relation.Binary.PropositionalEquality.TrustMe using (trustMe)

    -- rev : ∀ {a} {A : Set a} ⦃ mo : Monoid (SizeW {a})⦄ ⦃ m : Measured (Entry A) SizeW ⦄ → (μ : SizeW) → (ft : Seq A μ) → Seq A μ
    -- rev (size zero) ft = ft
    -- rev ⦃ mo ⦄ ⦃ m ⦄ (size (suc n)) ft with headL (λ ()) ft | tailL (λ ()) ft
    -- rev (size (suc n)) ft | hd | y , tl with size-lemma-headtail
    -- ... | fn with fn {!   !} ft
    -- ... | fn-nempty-ft = {!   !}
    -- -- yet another limitation of the with statement.

    -- rev : ∀ {a} {A : Set a} ⦃ mo : Monoid (SizeW {a})⦄ ⦃ m : Measured (Entry A) SizeW ⦄ → (μ : SizeW) → (ft : Seq A μ) → Seq A μ
    -- rev (size zero) ft = ft
    -- rev ⦃ mo ⦄ ⦃ m ⦄ (size (suc n)) ft with headL (λ ()) ft | tailL (λ ()) ft
    -- rev (size (suc n)) ft | hd | y , tl with size-lemma-headtail
    -- ... | fn with fn (λ ()) ft
    -- ... | fn-nempty-ft = {!   !}
    -- -- yet another limitation of the with statement - or probably the lambda abstraction with the absurd pattern
    -- turns out you need to inline everything.

    -- avoiding 'with' altogether by writing code without pattern matching.
    -- rev : ∀ {a} {A : Set a} ⦃ mo : Monoid (SizeW {a})⦄ ⦃ m : Measured (Entry A) SizeW ⦄ → (μ : SizeW) → (ft : Seq A μ) → Seq A μ
    -- rev (size zero) ft = ft
    -- rev ⦃ mo ⦄ ⦃ m ⦄ (size (suc n)) ft = {!    !}
    --   where
    --     hd = headL (λ ()) ft
    --     stl = tailL (λ ()) ft
    --     sze = fst stl
    --     tl = snd stl sze refl



    -- rev : ∀ {a} {A : Set a} → (μ : SizeW) → (ft : Seq A μ) → (v : ViewL (Entry A) (SizeW {a}) {μ}) → (v ≡ viewL ft) → Seq A μ
    -- rev .(size 0) ft NilL pr = ft
    -- rev (∥ x ∥ ∙ ) ft (ConsL x xs) pr = x ◁ ?

    open import FingerTree-measure-size using (_▷_)

    data _<<_ {a} : SizeW {a} → SizeW {a} → Set a where
      cmp : ∀ n m → (n < m) → (size n) << (size m)

    <-trans : ∀ n m p → n < m → m < p → n < p
    <-trans zero zero p p1 p2 = p2
    <-trans zero (suc m) zero (s≤s p1) ()
    <-trans zero (suc m) (suc p) (s≤s p1) p2 = s≤s z≤n
    <-trans (suc n) zero p ()
    <-trans (suc n) (suc m) zero p1 ()
    <-trans (suc n) (suc m) (suc p) (s≤s p1) (s≤s p2) = s≤s (<-trans n m p p1 p2)

    <-trans2 : ∀ n m p → n < m → m ≤ p → n < p
    <-trans2 zero zero p () p2
    <-trans2 zero (suc m) zero p1 ()
    <-trans2 zero (suc m) (suc p) p1 p2 = s≤s z≤n
    <-trans2 (suc n) zero p () p2
    <-trans2 (suc n) (suc m) zero p1 ()
    <-trans2 (suc n) (suc m) (suc p) (s≤s p1) (s≤s p2) = s≤s (<-trans2 n m p p1 p2)

    ≤-to-< : ∀ n m → n ≤ m → n < (suc m)
    ≤-to-< zero zero = s≤s
    ≤-to-< zero (suc m) = s≤s
    ≤-to-< (suc n) zero = λ ()
    ≤-to-< (suc n) (suc m) = s≤s

    <<-trans : ∀ {a} (σ τ μ : SizeW {a}) → σ << τ → τ << μ → σ << μ
    <<-trans (size n) (size n₁) (size n₂) (cmp .n .n₁ x) (cmp .n₁ .n₂ y) = cmp n n₂ (<-trans n n₁ n₂ x y)

    <<-trans2 : ∀ {a} (σ : SizeW {a}) → (n m : ℕ) → (σ << size (suc m)) → (suc m ≤ n) → (σ << size n)
    <<-trans2 σ zero zero p1 ()
    <<-trans2 σ zero (suc m) p1 ()
    <<-trans2 .(size s) (suc n) zero (cmp s .1 x) p2 = cmp s (suc n) (<-trans2 s 1 (suc n) x p2)
    <<-trans2 .(size s) (suc n) (suc m) (cmp s .(suc (suc m)) x) p2 = cmp s (suc n) (<-trans2 s (suc (suc m)) (suc n) x p2)

    <<-trans3 : ∀ {a} (σ : SizeW {a}) → (m n : ℕ) → (σ << size m) → (m ≤ n) → (σ << size n)
    <<-trans3 .(size s) zero n (cmp s .0 ()) p2
    <<-trans3 σ (suc m) zero p1 ()
    <<-trans3 .(size s) (suc m) (suc n) (cmp s .(suc m) x) p2 = cmp s (suc n) (<-trans2 s (suc m) (suc n) x p2)

    -- data AccS {a} {A : Set a} (n : SizeW {a}) : Set a where
    --   zro : (n ≡ size 0) → AccS (n)
    --   acc : ((m : SizeW {a}) → (_<<_ {a} m n) → AccS {A = A} m) → AccS n

    -- <<-WF : ∀ {a} {A : Set a} (n : SizeW {a}) → AccS {A = A} n
    -- <<-WF {a} {A} n = acc (go n)
    --   where
    --   go : ∀ {a} {A : Set a} (n : SizeW {a}) (m : SizeW {a}) → m << n → AccS {A = A} m
    --   go (size zero) .(size n₁) (cmp n₁ .0 ())
    --   go (size (suc n₁)) (size zero) p = zro refl
    --   go (size (suc n)) (size (suc m)) (cmp .(suc m) .(suc n) (s≤s x)) = acc (λ o o<sm → go (size n) o (<<-trans2 o n m o<sm x))



    <<-Rec : ∀ {a} → RecStruct (SizeW {a}) a a
    <<-Rec = WfRec _<<_

    mutual
      <<-WF : ∀ {a} → Well-founded (_<<_ {a})
      <<-WF n = acc (<<-WF' n)

      <<-WF' : ∀ {a} → (n : SizeW {a}) → <<-Rec (Acc _<<_) n
      <<-WF' (size zero) .(size m) (cmp m .0 ())
      <<-WF' (size (suc n)) .(size m) (cmp m .(suc n) (s≤s x)) = acc (λ o o<m → <<-WF' (size n) o (<<-trans3 o m n o<m x))

    Seq-pair : ∀ {a} (A : Set a) → Set a
    Seq-pair {a} A = Σ (SizeW {a}) (Seq A)

    to-size : ∀ {a} {A : Set a} → Seq-pair A → SizeW {a}
    to-size ⟨ fst , snd ⟩ = fst

    _⋖_ : ∀ {a} {A : Set a} → Seq-pair A → Seq-pair A → Set a
    _⋖_ = _<<_ on to-size
