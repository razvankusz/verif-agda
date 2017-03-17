open import AlgebraStructures

module GeneralFingerTree
  {a}
  (A : Set a)
  (V : Set a)
  (mo : Monoid V)
  (m : Measured A V) where

  open import SizeW renaming (_∙_ to _⊛_)
  open import Pair
  open import DependentPair
  open import Relation.Binary.PropositionalEquality
  open ≡-Reasoning

  pair-equality : ∀ {a} {A : Set a} {B : Set a} →
                  (m n : A) →
                  (x y : B) →
                  (m ≡ n) →
                  (x ≡ y) →
                  (m , x) ≡ (n , y)
  pair-equality m₁ .m₁ x .x refl refl = refl

  pair-monoid : ∀ {a} {A : Set a} {B : Set a} → Monoid A → Monoid B → Monoid (A × B)
  pair-monoid m₁ m₂ = monoid
    (ε₁ , ε₂)   -- neutral element
    (λ p₁ p₂ → zip _∙₁_ _∙₂_ p₁ p₂)  -- binary operation
    (λ p → pair-equality (ε₁ ∙₁ proj₁ p) (proj₁ p) (ε₂ ∙₂ proj₂ p) (proj₂ p) (ε-left₁ (proj₁ p)) (ε-left₂ (proj₂ p)))
    (λ p → pair-equality (proj₁ p ∙₁ ε₁) (proj₁ p) (proj₂ p ∙₂ ε₂) (proj₂ p) (ε-right₁ (proj₁ p)) (ε-right₂ (proj₂ p)))
    (λ a b c → pair-equality (proj₁ a ∙₁ (proj₁ b ∙₁ proj₁ c))
                             ((proj₁ a ∙₁ proj₁ b) ∙₁ proj₁ c)
                             (proj₂ a ∙₂ (proj₂ b ∙₂ proj₂ c))
                             ((proj₂ a ∙₂ proj₂ b) ∙₂ proj₂ c)
                             (∙-assoc₁ (proj₁ a) (proj₁ b) (proj₁ c))
                             (∙-assoc₂ (proj₂ a) (proj₂ b) (proj₂ c)))
    (λ p q → (proj₁ p) ≲ (proj₁ q))
    where
      ε₁ = Monoid.ε m₁
      ε₂ = Monoid.ε m₂
      _∙₁_ = Monoid._∙_ m₁
      _∙₂_ = Monoid._∙_ m₂
      ε-left₁ = Monoid.ε-left m₁
      ε-left₂ = Monoid.ε-left m₂
      ε-right₁ = Monoid.ε-right m₁
      ε-right₂ = Monoid.ε-right m₂
      ∙-assoc₁ = Monoid.∙-assoc m₁
      ∙-assoc₂ = Monoid.∙-assoc m₂
      _≲_ = Monoid._≲_ m₁

  instance mo' : Monoid (V × SizeW {a})
  mo' = pair-monoid mo size-monoid

  pair-measure : ∀ {a} {A : Set a} {V : Set a} {W : Set a} → Measured A V → Measured A W → Measured A (V × W)
  pair-measure m₁ m₂ = measured (λ z → Measured.∥ m₁ ∥ z , Measured.∥ m₂ ∥ z)

  instance m' : Measured A (V × SizeW {a})
  m' = pair-measure (measured Measured.∥ m ∥) (measured (λ _ → size 1))

  open import FingerTree-measure-size
  G-FingerTree : {μ : V × SizeW {a}} → Set a
  G-FingerTree {μ} = FingerTree {a} A (V × SizeW {a}) ⦃ mo' ⦄ ⦃ m' ⦄ {μ}

  open SizeW.less-than
  open import Function
  open import Induction
  open import Induction.WellFounded as WF

  _<_ : (V × SizeW {a}) → (V × SizeW {a}) → Set a
  _<_ = _<<_ on proj₂

  open Inverse-image
    {A = V × SizeW {a}}
    {_<_ = _<<_}
    proj₂
    renaming (well-founded to <<-<-wf)

  -- the comparison operation defined on the General Finger Tree is well-founded
  <-WF = <<-<-wf <<-WF

  -- packing this structure in a dependent pair
  GFT-Pair : Set a
  GFT-Pair = Σ (V × SizeW {a}) (λ x → G-FingerTree {x})

  pack : ∀ {μ} → G-FingerTree {μ} → GFT-Pair
  pack gft = ⟨ measure-tree gft , gft ⟩

  -- comparing GFT-Pairs
  _⋖_ : GFT-Pair → GFT-Pair → Set a
  _⋖_ = _<_ on fst

  -- the comparison operation defined on these pairs is also well-founded

  open Inverse-image
    {A = GFT-Pair}
    {_<_ = _<_}
    fst
    renaming (well-founded to <-⋖-wf)

  ⋖-WF = <-⋖-wf <-WF

  -- the helper function for well-founded recursion
  open WF.All (⋖-WF)
    renaming (wfRec to ⋖rec)

  -- snoc uplifted for the GFT-Pair
  _▷'_ : (x : A) → (seq : GFT-Pair) → (GFT-Pair)
  x ▷' ⟨ m , ft ⟩  = ⟨ measure-tree xft , xft ⟩
    where
      xft = x ▷ ft

  ▷'-length : (x : A) → (seq : GFT-Pair) → (proj₂ (fst (x ▷' seq)) ≡ (size 1) ⊛ (proj₂ (fst (seq))) )
  ▷'-length x seq = begin
                    proj₂ (fst (x ▷' seq))
                   ≡⟨ refl ⟩
                    (proj₂ (fst seq) ⊛ size 1)
                   ≡⟨ ∙-comm (proj₂ (fst seq)) (size 1) ⟩
                    ((size 1) ⊛ (proj₂ (fst (seq))))
                   ∎

  -- cons uplifted for the GFT-Pair
  _◁'_ : (x : A) → (seq : GFT-Pair) → (GFT-Pair)
  x ◁' ⟨ m , ft ⟩  = ⟨ measure-tree xft , xft ⟩
    where
      xft = x ◁ ft
  -- rev : Seq-pair → Seq-pair
  -- rev π = ⋖rec a _ go π
  --   where
  --   go : ∀ s → (∀ p → p ⋖ s → Seq-pair) → Seq-pair
  --   go (m , seq) rec with viewL seq
  --   go (.(size 0) , seq) rec | NilL = π
  --   go (_ , seq) rec | ConsL x xs = x ▷' (rec (measure-tree xs , xs) ((<<-axiom1 (measure-tree xs) x)))

  <<-axiom1 : ∀ (z :  V × SizeW {a})→ ((proj₂ z) << (size 1 SizeW.∙ proj₂ z))
  <<-axiom1 (proj₁ , size n) = <<-axiom0 n
  -- proj₂ (measure-tree xs) << (size 1 SizeW.∙ proj₂ .z)



  rev : GFT-Pair → GFT-Pair
  rev π = ⋖rec a _ go π
    module Rev where
    go : ∀ s → (∀ p → p ⋖ s → GFT-Pair) → GFT-Pair
    go ⟨ fst , snd ⟩ rec with viewL snd
    go ⟨ _ , snd ⟩ rec | NilL = (pack Empty)
    go ⟨ _ , snd ⟩ rec | ConsL x xs = x ▷' (rec (⟨ measure-tree xs , xs ⟩) (<<-axiom1 (measure-tree xs)))

  length-preserve-property : (gft : GFT-Pair) → Set a
  length-preserve-property gft = (proj₂ (fst (rev gft)) ≡ proj₂ (fst gft))


  open import Data.List
  toList : GFT-Pair → List A
  toList ⟨ fst , snd ⟩ = toList-ft snd


  cons-view : ∀ {μ} → (x : A) → (xs : G-FingerTree {μ}) → (viewL (x ◁ xs) ≡ ConsL x xs)
  cons-view x Empty rewrite ε-left (proj₁ (Measured.∥ m' ∥ x)) = refl
  cons-view x (Single e) = {!   !}
  cons-view x (Deep pr xs sf) = {!   !}


  -- find a way to use the recursor so that you maintain more than one property
  -- in this case I am saying that if P(rev x::xs), then P(go xs)
  -- <<-axiom1 : ∀ z → (x : Entry A) → (z << (Entry.m x SizeW.∙ z))
  -- <<-axiom1 (size n) x with (Measured.∥_∥ entry-measure) (entry (x))
  -- <<-axiom1 (size n) x | mv = <<-axiom0 n
