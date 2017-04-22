-- this wraps around the natural numbers because we will end up having too many Instances of the same type (ℕ)
-- and we will have to specify them explicitly. This helps for readability.
open import Data.Nat
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning
open import numbers
open import AlgebraStructures
open import Level using (Level)
open import Data.Bool
open import Data.Nat
open import Data.Maybe
open import Induction
open import Induction.WellFounded as WF
module SizeW where

  data SizeW {a} : Set a  where
    size : ∀ (n : ℕ) → SizeW {a}

  ε : ∀ {a : Level} → SizeW {a}
  ε = size 0

  _∙_ :  ∀ {a} → SizeW {a} → SizeW {a} → SizeW {a}
  size n ∙ size m = size (n + m)

  -- proving the monoid properties of this datatype
  import numbers

  ∙-comm : ∀ {a} → (x : SizeW {a})→ (y : SizeW {a}) → (x ∙ y ≡ y ∙ x)
  ∙-comm (size n) (size m) rewrite +comm n m = refl

  _<ˢ_ : ∀ {a} → SizeW {a} → SizeW {a} → Bool
  size n <ˢ size m = n <-nat m

  _<=ˢ_ : ∀ {a} → SizeW {a} → SizeW {a} → Bool
  size n <=ˢ size m = n <=nat m

  _==ˢ_ : ∀ {a} → SizeW {a} → SizeW {a} → Bool
  size n ==ˢ size m = n == m

  data _<ᵗ_ {a} : SizeW {a} → SizeW {a} → Set a where
    lt : ∀ {n : ℕ} {m : ℕ} → (n < m) → size n <ᵗ size m


  unit-step : ∀ {a : Level} → {n : ℕ} → (size {a} n) <ᵗ (size 1  ∙ size n)
  unit-step {_}{n} = lt (s≤s (numbers.≤-refl n))

  ∙ε : ∀ {a} (s : SizeW {a}) → (s ∙ ε ≡ s)
  ∙ε (size n) = cong size (+0 n)

  ε∙ : ∀ {a} (s : SizeW {a}) → (ε ∙ s ≡ s)
  ε∙ (size n) = refl

  ∙-assoc : ∀ {a} (s p q : SizeW {a}) → (s ∙ (p ∙ q) ≡ (s ∙ p) ∙ q)
  ∙-assoc (size n) (size m) (size o) = cong size (+assoc n m o)

  instance size-monoid : ∀ {a} → Monoid (SizeW {a})
  size-monoid = monoid ε _∙_ ε∙ ∙ε ∙-assoc _<ᵗ_

  getSize : ∀ {a} → SizeW {a} → ℕ
  getSize (size n) = n

  module less-than {a} where
  -- proofs required for termination checking

    data _<<_ : SizeW {a} → SizeW {a} → Set a where
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

    <<-trans : ∀ (σ τ μ : SizeW {a}) → σ << τ → τ << μ → σ << μ
    <<-trans (size n) (size n₁) (size n₂) (cmp .n .n₁ x) (cmp .n₁ .n₂ y) = cmp n n₂ (<-trans n n₁ n₂ x y)

    <<-trans2 : (σ : SizeW {a}) → (n m : ℕ) → (σ << size (suc m)) → (suc m ≤ n) → (σ << size n)
    <<-trans2 σ zero zero p1 ()
    <<-trans2 σ zero (suc m) p1 ()
    <<-trans2 .(size s) (suc n) zero (cmp s .1 x) p2 = cmp s (suc n) (<-trans2 s 1 (suc n) x p2)
    <<-trans2 .(size s) (suc n) (suc m) (cmp s .(suc (suc m)) x) p2 = cmp s (suc n) (<-trans2 s (suc (suc m)) (suc n) x p2)

    <<-trans3 : (σ : SizeW {a}) → (m n : ℕ) → (σ << size m) → (m ≤ n) → (σ << size n)
    <<-trans3 .(size s) zero n (cmp s .0 ()) p2
    <<-trans3 σ (suc m) zero p1 ()
    <<-trans3 .(size s) (suc m) (suc n) (cmp s .(suc m) x) p2 = cmp s (suc n) (<-trans2 s (suc m) (suc n) x p2)

    ≤-axiom : ∀ n → (n ≤ n)
    ≤-axiom zero = z≤n
    ≤-axiom (suc n) = s≤s (≤-axiom n)

    <<-axiom0 : ∀ n → (size n) << (size (suc n))
    <<-axiom0 zero = cmp zero (suc zero) (s≤s z≤n)
    <<-axiom0 (suc n) = cmp (suc n) (suc (suc n)) (s≤s (s≤s (≤-axiom n)))

    one-step-lemma : ∀ (s : SizeW {a}) → (s << ((size 1) ∙ s))
    one-step-lemma (size n) = <<-axiom0 n

    <<-Rec : RecStruct (SizeW {a}) a a
    <<-Rec = WfRec _<<_

    mutual
      <<-WF : Well-founded (_<<_ )
      <<-WF n = acc (<<-WF' n)

      <<-WF' : (n : SizeW {a}) → <<-Rec (Acc _<<_) n
      <<-WF' (size zero) .(size m) (cmp m .0 ())
      <<-WF' (size (suc n)) .(size m) (cmp m .(suc n) (s≤s x)) = acc (λ o o<m → <<-WF' (size n) o (<<-trans3 o m n o<m x))
