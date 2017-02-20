open import FingerTree-measure-size
open import Size
open import Data.Nat
open import Data.Maybe
open import Data.List
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning

module RandomAccessSequence-size2 {a} {A : Set a} where

    open import SizeW
    open import Entry using (entry-measure; getEntry; Entry; entry)

    Seq : SizeW {a} → Set a
    Seq s = FingerTree (Entry A) (SizeW {a}) {s}

    length-seq : {s : SizeW} → Seq s → ℕ
    length-seq {s = s} ft = getSize s

    _!_ : ∀ {s : SizeW} → Seq s → ℕ → Maybe A
    seq ! n with split-Tree (λ x → size n SizeW.<ˢ x) SizeW.ε seq
    seq ! n | just (split-d _ x _) = just (getEntry x)
    seq ! n | nothing = nothing

    --
    -- big-seq : (n : ℕ) → Seq ℕ (size n)
    -- big-seq zero = Empty
    -- big-seq (suc n) = (entry n) ◁ (big-seq n)

    open import IO.Primitive
    open import Data.String
    open import Agda.Builtin.Unit
    -- {-# BUILTIN STRING String #-}
    -- {-# BUILTIN UNIT Unit #-}
    import Data.Nat.Show
    show-maybe : Maybe ℕ → String
    show-maybe (just x) = Data.Nat.Show.show x
    show-maybe nothing = "nothing"
    -- main : IO ℕ
    -- --
    -- main = (putStrLn (toCostring "Hello") >>=
    --         (λ x → return (big-seq 10000) >>=
    --         (λ x → putStrLn (toCostring (show-maybe(x ! 2)))) >>=
    --         (λ x → return 1)))


    open import Induction
    open import Induction.WellFounded as WF
    open import Level using (Lift)
    open import Function
    open import Data.Empty
    open import DependentPair
    open import AlgebraStructures
    open import Relation.Binary.PropositionalEquality.TrustMe using (trustMe)

    open import FingerTree-measure-size using (_▷_)


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


    open SizeW.less-than {a}

    Seq-pair : Set a
    Seq-pair = Σ (SizeW {a}) Seq

    to-size : Seq-pair → SizeW {a}
    to-size (x , y) = x

    _⋖_ : Seq-pair → Seq-pair → Set a
    _⋖_ = _<<_ on to-size

    -- from Larry Paulson's paper -- Inverse image

    open Inverse-image
      {A = Seq-pair}
      {_<_ = _<<_}
      to-size
      renaming (well-founded to <<-⋖-wf)

    ⋖-wf = <<-⋖-wf <<-WF

    open WF.All (⋖-wf)
      renaming (wfRec to ⋖rec)

    _▷'_ : (x : Entry A) → (seq : Seq-pair) → (Seq-pair)
    x ▷' (m , ft) = (measure-tree xft , xft)
      where
        xft = x ▷ ft

    <<-axiom1 : ∀ z → (x : Entry A) → (z << (Entry.m x SizeW.∙ z))
    <<-axiom1 (size n) x with (Measured.∥_∥ entry-measure) (entry (x))
    <<-axiom1 (size n) x | mv = <<-axiom0 n

    rev : Seq-pair → Seq-pair
    rev π = ⋖rec a _ go π
      where
      go : ∀ s → (∀ p → p ⋖ s → Seq-pair) → Seq-pair
      go (m , seq) rec with viewL seq
      go (.(size 0) , seq) rec | NilL = π
      go (_ , seq) rec | ConsL x xs = x ▷' (rec (measure-tree xs , xs) ((<<-axiom1 (measure-tree xs) x)))
