module FingerTree-measure-size where

open import Class.Reduce
open import Level using (Level)
open import Data.Maybe
open import Data.Unit using (⊤)
open import Data.Nat using (ℕ; suc; _<_; _+_)
open import Data.Fin using (Fin)
open import Data.List using (List; []; _∷_; _++_; length; tails)
-- open import Data.List.NonEmpty using (List⁺; [_]; _∷_; _⁺++_)
open import Data.Maybe using (Maybe; just; nothing)
open import Data.Bool using (Bool; true; false; if_then_else_)
open import Function using(case_of_)
open import Size

open import Relation.Nullary.Negation using (contraposition)
open import Relation.Binary.PropositionalEquality
open ≡-Reasoning


open import AlgebraStructures

open Measured {{...}} public
open Monoid {{...}} public

------------------------------------------------------------------------

data Node {a : Level} (A : Set a)(V : Set a ) : Set a where
  Node2 : V → A → A → Node A V
  Node3 : V → A → A → A → Node A V

data Digit {a : Level} (A : Set a): Set a where
  One   : A → Digit A
  Two   : A → A → Digit A
  Three : A → A → A → Digit A
  Four  : A → A → A → A → Digit A
--
-- data FingerTree {a : Level} (A : Set a)(V : Set a ) : {i : Size} → Set a where
--   Empty  : ∀ {i : Size} → FingerTree A V {↑ i}
--   Single : ∀ {i : Size} → A → FingerTree A V {↑ i}
--   Deep   : ∀ {i : Size} → V → Digit A → FingerTree (Node A V) V {i} → Digit A →
--            FingerTree A V {↑ i}

measure-node : {a : Level} {A : Set a} {V : Set a } → Node A V → V
measure-node (Node2 x x₁ x₂) = x
measure-node (Node3 x x₁ x₂ x₃) = x


measure-digit : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Digit A → V
measure-digit ⦃ mo ⦄ ⦃ m ⦄ (One x) = Measured.∥ m ∥ x
measure-digit (Two x x₁) = ∥ x ∥ ∙ ∥ x₁ ∥
measure-digit (Three x x₁ x₂) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥
measure-digit (Four x x₁ x₂ x₃) = ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥

measure-maybe-digit : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →  Maybe (Digit A) → V
measure-maybe-digit (just x) = measure-digit x
measure-maybe-digit nothing = ε

instance uplift : ∀ {a}{A : Set a}{V : Set a } ⦃ m : Measured A V ⦄ → (Measured (Node A V) V)
uplift  = measured measure-node

data FingerTree {a : Level} (A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ :  {μ : V} → Set a where
  Empty  :  FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {ε}
  Single :  (e : A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {∥ e ∥}
  Deep   :  {s : V} → (pr : Digit A) → FingerTree (Node A V) V {s} → (sf : Digit A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {measure-digit pr ∙ s ∙ measure-digit sf}


----------------------------------------------------------------------------------

node2 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → A → A → Node A V
node2 x y = Node2 (∥ x ∥ ∙ ∥ y ∥) x y

node3 : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄  → A → A → A → Node A V
node3 x y z = Node3 (∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥) x y z


measure-tree : ∀ {a}{A : Set a}{V : Set a}{s : V}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → FingerTree A V {s} → V
measure-tree {_}{_}{_}{s} ft = s

deep : ∀ {a : Level} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s} →
  (pr : Digit A) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) →
  FingerTree A V {(measure-digit ⦃ mo ⦄ ⦃ m ⦄ pr) ∙ s ∙ (measure-digit ⦃ mo ⦄ ⦃ m ⦄ sf)}
deep pr ft sf = Deep pr ft sf


measure-lemma0 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x : V) → (y : V) →
            (x ∙ ε ∙ y) ≡ x ∙ y
measure-lemma0 x y = begin
                        x ∙ ε ∙ y ≡⟨ ∙-assoc x ε y ⟩
                     (x ∙ ε) ∙ y ≡⟨ cong (λ z → z ∙ y) (ε-right x) ⟩ x ∙ y ∎

measure-lemma1 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (b : A) → ((mo Monoid.∙ Monoid.ε mo) (measure-digit (One b)) ≡ Measured.∥ m ∥ b)
measure-lemma1 ⦃ mo ⦄ ⦃ m ⦄ b = begin (mo Monoid.∙ Monoid.ε mo) (measure-digit (One b))
                                  ≡⟨ ε-left (measure-digit (One b)) ⟩
                                  ∥ b ∥  ∎


assoc-lemma1 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (a : A) → (e : A) →
              (mo Monoid.∙ Measured.∥ m ∥ a) (Measured.∥ m ∥ e) ≡ (mo Monoid.∙ Measured.∥ m ∥ a)
     ((mo Monoid.∙ Monoid.ε mo) (Measured.∥ m ∥ e))
assoc-lemma1 a e = cong (λ x → ∥ a ∥ ∙ x) (sym (ε-left ∥ e ∥))

assoc-lemma2 : ∀ {a}{A : Set a}{V : Set a}⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (a : A) → (b : A) → (c : A) → (d : A) → (e : A) → (s : V) → (f : V)
              → (mo Monoid.∙ Measured.∥ m ∥ a) ((mo Monoid.∙ (mo Monoid.∙ Measured.∥ m ∥ b) ((mo Monoid.∙ Measured.∥ m ∥ c) ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e)))) ((mo Monoid.∙ s) f)) ≡ (mo Monoid.∙ (mo Monoid.∙ Measured.∥ m ∥ a) (Measured.∥ m ∥ b))
        ((mo Monoid.∙
         (mo Monoid.∙
          (mo Monoid.∙ Measured.∥ m ∥ c)
          ((mo Monoid.∙ Measured.∥ m ∥ d) (Measured.∥ m ∥ e)))
         s)
        f)
assoc-lemma2 a b c d e s f = begin ∥ a ∥ ∙ ((∥ b ∥ ∙ ∥ c ∥ ∙ ∥ d ∥ ∙ ∥ e ∥) ∙ (s ∙ f))
                            ≡⟨ cong (λ x → ∥ a ∥ ∙ x) (sym (∙-assoc (∥ b ∥) (∥ c ∥ ∙ ∥ d ∥ ∙ ∥ e ∥) (s ∙ f))) ⟩ ∥ a ∥ ∙ (∥ b ∥ ∙ (( ∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) ∙ (s ∙ f)))
                            ≡⟨ ∙-assoc (∥ a ∥) (∥ b ∥) (( ∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) ∙ (s ∙ f)) ⟩ (∥ a ∥ ∙ ∥ b ∥) ∙ (∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) ∙ (s ∙ f)
                            ≡⟨ cong (λ x → (∥ a ∥ ∙ ∥ b ∥) ∙ x) ((∙-assoc (∥ c ∥ ∙ (∥ d ∥ ∙ ∥ e ∥)) s f)) ⟩ refl


infixr 5 _◁_
_◁_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} → (x : A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {s} → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {∥ x ∥ ∙ s}
_◁_ {l} {A} {V} ⦃ mo ⦄ a Empty rewrite (Monoid.ε-right mo) ∥ a ∥ = Single {l}{A}{V} a
_◁_ {l} {A} {V} ⦃ mo ⦄ ⦃ m ⦄ {.(∥ e ∥)} a (Single e) rewrite assoc-lemma1 ⦃ mo ⦄ ⦃ m ⦄ a e = Deep (One a) Empty (One e)
a ◁ Deep (One b) ft sf rewrite ∙-assoc (∥ a ∥) (∥ b ∥) (measure-tree ft ∙ measure-digit sf) = Deep (Two a b) ft sf
a ◁ Deep (Two b c) ft sf rewrite ∙-assoc (∥ a ∥) (∥ b ∥ ∙ ∥ c ∥) (measure-tree ft ∙ measure-digit sf) = Deep (Three a b c) ft sf
a ◁ Deep (Three b c d) ft sf rewrite ∙-assoc (∥ a ∥) (∥ b ∥ ∙ ∥ c ∥ ∙ ∥ d ∥) (measure-tree ft ∙ measure-digit sf) = Deep (Four a b c d) ft sf
a ◁ Deep (Four b c d e) ft sf rewrite assoc-lemma2 a b c d e (measure-tree ft) (measure-digit sf) = Deep (Two a b) ((node3 c d e) ◁ ft) sf


snoc-assoc-lemma1 : ∀ {a} {V : Set a} ⦃ mo : Monoid V ⦄ → (m : V) → (n : V) → (p : V) → (q : V) →
           ((m ∙ (n ∙ p)) ∙ q) ≡ (m ∙ (n ∙ (p ∙ q)))
snoc-assoc-lemma1 m n p q = begin ((m ∙ (n ∙ p)) ∙ q)
                            ≡⟨ cong (λ x → x ∙ q) (∙-assoc m n p) ⟩
                            ((m ∙ n) ∙ p) ∙ q
                            ≡⟨ sym (∙-assoc (m ∙ n) p q) ⟩
                            (m ∙ n) ∙ (p ∙ q)
                            ≡⟨ sym (∙-assoc m n (p ∙ q)) ⟩
                            m ∙ n ∙ p ∙ q ∎

snoc-assoc-lemma2 : ∀ {a} {V : Set a} ⦃ mo : Monoid V ⦄ → (m : V) → (n : V) → (p : V) → (q : V) → (r : V) →
          (m ∙ n ∙ (p ∙ q)) ∙ r ≡ (m ∙ (n ∙ p ∙ (q ∙ r)))
snoc-assoc-lemma2 = {!   !}

snoc-assoc-lemma3 : ∀ {a} {V : Set a} ⦃ mo : Monoid V ⦄ → (m : V) → (n : V) → (p : V) → (q : V) → (r : V) → (s : V) →
          (m ∙ n ∙ p ∙ (q ∙ r)) ∙ s ≡ (m ∙ (n ∙ (p ∙ (q ∙ (r ∙ s)))))
snoc-assoc-lemma3 = {!   !}

snoc-assoc-lemma4 :  ∀ {a} {V : Set a} ⦃ mo : Monoid V ⦄ → (m : V) → (n : V) → (p : V) → (q : V) → (r : V) → (s : V) → (t : V) →
          ((m ∙ n ∙ p ∙ q ∙ (r ∙ s))) ∙ t ≡ (m ∙ (n ∙ p ∙ q ∙ r) ∙ (s ∙ t))
snoc-assoc-lemma4 = {!   !}

infixl 5 _▷_
_▷_ : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} → (x : A) → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {s} → FingerTree A V ⦃ mo ⦄ ⦃ m ⦄ {s ∙ ∥ x ∥}
_▷_ {l} {A} {V} ⦃ mo ⦄ a Empty rewrite (Monoid.ε-left mo) ∥ a ∥ = Single {l}{A}{V} a
_▷_ {l} {A} {V} ⦃ mo ⦄ ⦃ m ⦄ a (Single e) = {!   !}
a ▷ Deep pr ft (One b) rewrite (snoc-assoc-lemma1 (measure-digit pr) (measure-tree ft) (∥ b ∥) (∥ a ∥)) = Deep pr ft (Two b a)
a ▷ Deep pr ft (Two c b) rewrite (snoc-assoc-lemma2 (measure-digit pr) (measure-tree ft) (∥ c ∥) (∥ b ∥) (∥ a ∥)) = Deep pr ft (Three c b a)
a ▷ Deep pr ft (Three d c b ) rewrite (snoc-assoc-lemma3 (measure-digit pr) (measure-tree ft) (∥ d ∥) (∥ c ∥) (∥ b ∥) (∥ a ∥))= Deep pr ft (Four d c b a)
a ▷ Deep pr ft (Four e d c b) rewrite (snoc-assoc-lemma4 (measure-digit pr) (measure-tree ft) (∥ e ∥) (∥ d ∥) (∥ c ∥) (∥ b ∥) (∥ a ∥))= Deep pr ((node3 e d c) ▷ ft) (Two b a)



-- FingerTree {.a} .A .V {{.mo}} {{.m}}
-- {(.mo Monoid.∙ measure-digit {.a} {.A} {.V} {{.mo}} {{.m}} pr)
--  ((.mo Monoid.∙
--    (.mo Monoid.∙ .s)
--    ((.mo Monoid.∙ Measured.∥ .m ∥ e)
--     ((.mo Monoid.∙ Measured.∥ .m ∥ d) (Measured.∥ .m ∥ c))))
--   ((.mo Monoid.∙ Measured.∥ .m ∥ b) (Measured.∥ .m ∥ a)))}

-- FingerTree {.a} .A .V {{.mo}} {{.m}}
-- {(.mo Monoid.∙
--   (.mo Monoid.∙ measure-digit {.a} {.A} {.V} {{.mo}} {{.m}} pr)
--   ((.mo Monoid.∙ .s)
--    ((.mo Monoid.∙ Measured.∥ .m ∥ e)
--     ((.mo Monoid.∙ Measured.∥ .m ∥ d)
--      ((.mo Monoid.∙ Measured.∥ .m ∥ c) (Measured.∥ .m ∥ b))))))
--  (Measured.∥ .m ∥ a)}




-- -- To List ----------------------------------------------------------

-- is an instance of the reducer but explicitly so makes proofs easier
toList-dig : ∀{a}{A : Set a} → Digit A → List A
toList-dig (One x) = x ∷ []
toList-dig (Two x x₁) = x ∷ x₁ ∷ []
toList-dig (Three x x₁ x₂) = x ∷ x₁ ∷ x₂ ∷ []
toList-dig (Four x x₁ x₂ x₃) = x ∷ x₁ ∷ x₂ ∷ x₃ ∷ []

toList-node : ∀{a}{A : Set a}{V : Set a } → Node A V → List A
toList-node (Node2 x x₁ x₂) = x₁ ∷ x₂ ∷ []
toList-node (Node3 x x₁ x₂ x₃) = x₁ ∷ x₂ ∷ x₃ ∷ []

flatten-list : ∀{a}{A : Set a}{V : Set a } → List (Node A V) → List A
flatten-list [] = []
flatten-list (x ∷ xs) = (toList-node x) ++ (flatten-list xs)

toList-ft : ∀ {a}{A : Set a}{V : Set a }⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V}  → FingerTree A V {s} → List A
toList-ft Empty = []
toList-ft (Single x) = x ∷ []
toList-ft (Deep x₁ ft x₂) = (toList-dig x₁) ++ (flatten-list (toList-ft ft)) ++ (toList-dig x₂)


--- View from the left ------------

head-dig : ∀ {a} {A : Set a} → Digit A → A
head-dig (One x) = x
head-dig (Two x x₁) = x
head-dig (Three x x₁ x₂) = x
head-dig (Four x x₁ x₂ x₃) = x

tails-dig : ∀ {a} {A : Set a} → Digit A → Maybe (Digit A)
tails-dig (One x) = nothing
tails-dig (Two x x₁) = just (One x₁)
tails-dig (Three x x₁ x₂) = just (Two x₁ x₂)
tails-dig (Four x x₁ x₂ x₃) = just (Three x₁ x₂ x₃)

measure-dig-lemma0 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Digit A) →
      (∥ head-dig d ∥ ∙ measure-maybe-digit ⦃ mo ⦄ (tails-dig d) ≡ measure-digit d)
measure-dig-lemma0 d = {!   !}

measure-digit-lemma1 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} → (pr : Digit A) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) →
   ((measure-digit pr) ∙ (s ∙ measure-digit sf))  ≡ (∥ head-dig pr ∥ ∙ (measure-maybe-digit (tails-dig pr) ∙ (s ∙ measure-digit sf)))
measure-digit-lemma1 = {!   !}
--
-- rewrite ∙-assoc (∥ head-dig pr ∥) (measure-maybe-digit (tails-dig pr)) (measure-tree ft ∙ measure-digit sf) |
--                                             cong (λ x → x ∙ (measure-tree ft) ∙ (measure-digit sf)) (measure-dig-lemma0 ⦃ mo ⦄ ⦃ m ⦄ pr)
toTree-dig : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Digit A) → FingerTree A V {measure-digit d}
toTree-dig ⦃ mo ⦄ (One x) rewrite sym (ε-right ⦃ mo ⦄ ∥ x ∥) = x ◁ Empty
toTree-dig ⦃ mo ⦄ (Two x x₁) rewrite cong (λ t → ∥ x ∥ ∙ t) (sym (ε-right ⦃ mo ⦄ ∥ x₁ ∥)) = x ◁ x₁ ◁ Empty
toTree-dig ⦃ mo ⦄ (Three x x₁ x₂) rewrite cong (λ t → ∥ x ∥ ∙ ∥ x₁ ∥ ∙ t) (sym (ε-right ⦃ mo ⦄ ∥ x₂ ∥)) = x ◁ x₁ ◁ x₂ ◁ Empty
toTree-dig ⦃ mo ⦄ (Four x x₁ x₂ x₃) rewrite cong (λ t → ∥ x ∥ ∙ ∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ t) (sym (ε-right ⦃ mo ⦄ ∥ x₃ ∥))= x ◁ x₁ ◁ x₂ ◁ x₃ ◁ Empty

toTree-maybe-dig :  ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Maybe (Digit A)) → FingerTree A V {measure-maybe-digit d}
toTree-maybe-dig (just x) = toTree-dig x
toTree-maybe-dig nothing = Empty

measure-to-tree-maybe-dig-lemma : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Maybe (Digit A)) →
        (measure-tree ⦃ mo ⦄ (toTree-maybe-dig d) ≡ measure-maybe-digit d)
measure-to-tree-maybe-dig-lemma d = refl

-- view from the left ... ----------------------------------------------------------------------------
data ViewL {a}(A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : {s : V} → Set a where
  NilL :  ViewL A V {ε}
  ConsL : ∀ {z : V} (x : A) → (xs : FingerTree A V {z}) → ViewL A V {∥ x ∥ ∙ z}

postulate
  node2-str-axiom : ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (μ : V) → (x : A) → (y : A) → (measure-node (Node2 μ x y) ≡ ∥ x ∥ ∙ ∥ y ∥)
  node3-str-axiom : ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (μ : V) → (x : A) → (y : A) → (z : A) → (measure-node (Node3 μ x y z) ≡ ∥ x ∥ ∙ ∥ y ∥ ∙ ∥ z ∥)


assoc-lemma3 : ∀  {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x₁ : A) → (x₂ : A) → (z : V) → (sf : Digit A) →
  ε ∙ (((∥ x₁ ∥ ∙ ∥ x₂ ∥) ∙ z) ∙ (measure-digit sf)) ≡ (∥ x₁ ∥ ∙ ∥ x₂ ∥) ∙ (z ∙ measure-digit sf)
assoc-lemma3 x₁ x₂ z sf = begin
                              ε ∙ (((∥ x₁ ∥ ∙ ∥ x₂ ∥) ∙ z) ∙ (measure-digit sf))
                          ≡⟨ ε-left (((∥ x₁ ∥ ∙ ∥ x₂ ∥) ∙ z) ∙ (measure-digit sf)) ⟩
                              ((∥ x₁ ∥ ∙ ∥ x₂ ∥) ∙ z) ∙ (measure-digit sf)
                          ≡⟨ sym (∙-assoc (∥ x₁ ∥ ∙ ∥ x₂ ∥) z (measure-digit sf)) ⟩
                              (∥ x₁ ∥ ∙ ∥ x₂ ∥) ∙ (z ∙ measure-digit sf)
                          ∎

assoc-lemma4 : ∀  {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (x₁ : A) → (x₂ : A) → (x₃ : A) → (z : V) → (sf : Digit A) →
  ε ∙ (((∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥) ∙ z) ∙ (measure-digit sf)) ≡ (∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥ ) ∙ (z ∙ measure-digit sf)
assoc-lemma4 x₁ x₂ x₃ z sf = begin
                              ε ∙ (((∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥) ∙ z) ∙ (measure-digit sf))
                          ≡⟨ ε-left (((∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥) ∙ z) ∙ (measure-digit sf)) ⟩
                              ((∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥) ∙ z) ∙ (measure-digit sf)
                          ≡⟨ sym (∙-assoc (∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥) z (measure-digit sf)) ⟩
                              (∥ x₁ ∥ ∙ ∥ x₂ ∥ ∙ ∥ x₃ ∥) ∙ (z ∙ measure-digit sf)
                          ∎


mutual
  viewL : ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {i : V} →
        FingerTree A V {i} → ViewL A V {i}
  viewL Empty = NilL
  viewL ⦃ mo ⦄ ⦃ m ⦄ (Single x) rewrite sym (Monoid.ε-right mo ∥ x ∥) = ConsL x Empty
  viewL ⦃ mo ⦄ ⦃ m ⦄ (Deep pr ft sf) rewrite measure-digit-lemma1 ⦃ mo ⦄ ⦃ m ⦄ pr ft sf = ConsL (head-dig pr) (deepL (tails-dig pr) ft sf)

  deepL : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} →
        (pr : Maybe (Digit A)) → (ft : FingerTree (Node A V) V {s}) → (sf : Digit A) → FingerTree A V {measure-maybe-digit pr ∙ s ∙ measure-digit sf}
  -- deepL pr ft sf = {!   !}
  deepL (just x) ft sf = Deep x ft sf
  deepL nothing ft sf with viewL ft
  deepL ⦃ mo ⦄ ⦃ m ⦄ nothing ft sf | NilL rewrite (Monoid.ε-left mo) (ε ∙ measure-digit sf)
                                                 | (Monoid.ε-left mo) (measure-digit sf) = toTree-dig sf
  deepL nothing ft sf | ConsL (Node2 x x₁ x₂) x₃ rewrite node2-str-axiom x x₁ x₂
                                                                |  assoc-lemma3 x₁ x₂ (measure-tree x₃) sf = Deep (Two x₁ x₂) x₃ sf -- Deep (Two x₁ x₂) x₃ sf
  deepL nothing ft sf | ConsL (Node3 x x₁ x₂ x₃) x₄ rewrite node3-str-axiom x x₁ x₂ x₃
                                                        |   assoc-lemma4 x₁ x₂ x₃ (measure-tree x₄) sf = Deep (Three x₁ x₂ x₃) x₄ sf -- Deep (Three x₁ x₂ x₃) x₄ sf

-- view from the right...--------------------------------------------------------------------------------------------------

heads-dig : ∀ {a}{A : Set a} → Digit A → Maybe (Digit A)
heads-dig (One x) = nothing
heads-dig (Two x x₁) = just (One x)
heads-dig (Three x x₁ x₂) = just (Two x x₁)
heads-dig (Four x x₁ x₂ x₃) = just (Three x x₁ x₂)

tail-dig : ∀ {a}{A : Set a} → Digit A → A
tail-dig (One x) = x
tail-dig (Two x x₁) = x₁
tail-dig (Three x x₁ x₂) = x₂
tail-dig (Four x x₁ x₂ x₃) = x₃

measure-digit-lemma2 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (d : Digit A) →
    ((measure-maybe-digit ⦃ mo ⦄ ⦃ m ⦄ (heads-dig d)) ∙ ∥ tail-dig d ∥) ≡ measure-digit d
measure-digit-lemma2 d = {!  !}

viewr-deep-measure-lemma : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ → (vpr : V) → (vft : V) → (sf : Digit A) →
  (vpr ∙ vft ∙ measure-digit sf) ≡ (vpr ∙ vft ∙ (measure-maybe-digit (heads-dig sf))) ∙ ∥ tail-dig sf ∥
viewr-deep-measure-lemma = {!   !}

deepr-measure-lemma1 : ∀ {a}{V : Set a} ⦃ mo : Monoid V ⦄ → (pr : V) → (z : V) → (μ : V) → (ma : V) → (mb : V) →
              pr ∙ (z ∙ μ) ∙ ε  ≡ (pr ∙ z ∙ (ma ∙ mb))
deepr-measure-lemma1 = {!   !}

deepr-measure-lemma2 : ∀ {a}{V : Set a} ⦃ mo : Monoid V ⦄ → (pr : V) → (z : V) → (μ : V) → (ma : V) → (mb : V) → (mc : V) →
              pr ∙ (z ∙ μ) ∙ ε ≡ (pr ∙ z ∙ (ma ∙ mb ∙ mc))
deepr-measure-lemma2 = {!   !}

data ViewR {a}(A : Set a)(V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : {s : V} → Set a where
  NilR : ViewR A V {ε}
  ConsR : ∀ {z : V} (x : A) → (xs : FingerTree A V {z}) → ViewR A V {z ∙ ∥ x ∥}

mutual
  viewR :  ∀ {a} {A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {i : V} →
        FingerTree A V {i} → ViewR A V {i}
  viewR Empty = NilR
  viewR ⦃ mo ⦄ (Single x) rewrite sym (Monoid.ε-left mo ∥ x ∥) = ConsR x Empty
  viewR (Deep pr ft sf) rewrite viewr-deep-measure-lemma (measure-digit pr) (measure-tree ft) sf = ConsR (tail-dig sf) (deepR pr ft (heads-dig sf))

  deepR : ∀ {a}{A : Set a}{V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {s : V} →
        (pr : Digit A) → (ft : FingerTree (Node A V) V {s}) → (sf : Maybe (Digit A)) → FingerTree A V {measure-digit pr ∙ s ∙ measure-maybe-digit sf}
  deepR pr ft (just sf) = Deep pr ft sf
  deepR pr ft nothing with viewR ft
  deepR ⦃ mo ⦄ ⦃ m ⦄ pr ft nothing | NilR rewrite (∙-assoc (measure-digit ⦃ mo ⦄ pr) ε ε)
                                                | (Monoid.ε-right mo) (measure-digit pr ∙ ε)
                                                | (Monoid.ε-right mo) (measure-digit pr) = toTree-dig pr
  deepR ⦃ mo ⦄ pr ft nothing | ConsR (Node2 μ a b) xs rewrite deepr-measure-lemma1 ⦃ mo ⦄ (measure-digit pr) (measure-tree xs) μ (∥ a ∥) (∥ b ∥) = Deep pr xs (Two a b)
  deepR ⦃ mo ⦄ pr ft nothing | ConsR (Node3 μ a b c) xs rewrite deepr-measure-lemma2 ⦃ mo ⦄ (measure-digit pr) (measure-tree xs) μ (∥ a ∥) (∥ b ∥) (∥ c ∥) = Deep pr xs (Three a b c)

-- Split - brace : this will be a nightmare ----------------

-- first, the non-dependent split for digits -- copied from the first version

data Split {a} (F : Set a) (A : Set a) : Set a where
  split : F → A → F → Split F A


toDigit : ∀ {a} {A : Set a} {V : Set a } → Node A V → Digit A
toDigit (Node2 x x₁ x₂) = Two x₁ x₂
toDigit (Node3 x x₁ x₂ x₃) = Three x₁ x₂ x₃


splitDigit : ∀ {a} {A : Set a} {V : Set a } ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
          (p : V → Bool) → V → Digit A → Split (Maybe (Digit A)) A
splitDigit p i (One x) = split nothing x nothing
splitDigit p i (Two x x₁) =
  if (p i) then
    (split nothing x (just (One x₁)))
  else
    (split (just (One x)) x₁ nothing)
splitDigit p i (Three x x₁ x₂) =
  if (p i) then
    (split nothing x (just (Two x₁ x₂)))
  else if (p (i ∙ ∥ x ∥)) then
    split (just (One x)) x₁ (just (One x₂))
  else
    split (just (Two x x₁)) x₂ nothing
splitDigit p i (Four x x₁ x₂ x₃) = if (p i) then
    (split nothing x (just (Three x₁ x₂ x₃)))
  else if (p (i ∙ ∥ x ∥)) then
    split (just (One x)) x₁ (just (Two x₂ x₃))
  else if (p (i ∙ ∥ x ∥ ∙ ∥ x₁ ∥)) then
    split (just (Two x x₁)) x₂ (just (One x₃))
  else
    split (just (Three x x₁ x₂)) x₃ nothing

-- measuring function for the digit split result

measure-split-digit : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
                (Split (Maybe (Digit A)) A) → V
measure-split-digit (split l x r) = measure-maybe-digit l ∙ ∥ x ∥ ∙ (measure-maybe-digit r)

-- proving that during the digit split the size is conserved

splitDigit-size-lemma0 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ →
              (p : V → Bool) → (i : V) → -- predicate and initial value
              (d : Digit A) →  -- argument
              (l : Maybe (Digit A)) → (x : A) → (r : Maybe(Digit A)) → -- flattened split
              (splitDigit p i d ≡ split l x r) →  -- proof on the split
              (measure-maybe-digit ⦃ mo ⦄ l ∙ ∥ x ∥ ∙ (measure-maybe-digit r) ≡ measure-digit d) -- statement
splitDigit-size-lemma0 p i d l x r = {!  !}

-- now, defining a dependently typed split.

data Split-d {a} (A : Set a) (V : Set a) ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ : {μ : V} → Set a where
  split-d : ∀ {μ₁ : V} {μ₂ : V} → (FingerTree A V {μ₁}) → (x : A) → (FingerTree A V {μ₂}) → Split-d A V {μ₁ ∙ ∥ x ∥ ∙ μ₂}

-- the journey of a thousand miles begins with one step

--
-- split-assoc-lemma0 :

split-Tree1-measure-lemma : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {μ : V} →
              (p : V → Bool) → (i : V) → -- predicate and initial value
              (pr : Digit A) → (ft : FingerTree (Node A V) V {μ}) → (sf : Digit A) →  -- flattened deep constructor
              (l : Maybe (Digit A)) → (x : A) → (r : Maybe(Digit A)) → -- flattened split
              (splitDigit p i pr ≡ split l x r) →  -- proof on the split
              (measure-digit ⦃ mo ⦄ pr ∙ μ ∙ measure-digit sf ≡ measure-tree (toTree-maybe-dig l) ∙ ∥ x ∥ ∙ (measure-maybe-digit r ∙ μ ∙ measure-digit sf))
split-Tree1-measure-lemma p i pr ft sf l x r eq = begin measure-digit pr ∙ measure-tree ft ∙ measure-digit sf
                                                ≡⟨ cong (λ t → t ∙ measure-tree ft ∙ measure-digit sf) (sym (splitDigit-size-lemma0 p i pr l x r eq)) ⟩
                                                ((measure-maybe-digit l) ∙ ∥ x ∥ ∙ measure-maybe-digit r) ∙ measure-tree ft ∙ measure-digit sf
                                                ≡⟨ cong (λ t → t ∙ measure-tree ft ∙ measure-digit sf) ((∙-assoc (measure-maybe-digit l) (∥ x ∥) (measure-maybe-digit r))) ⟩
                                                ((measure-maybe-digit l ∙ ∥ x ∥) ∙ measure-maybe-digit r) ∙ (measure-tree ft ∙ measure-digit sf)
                                                ≡⟨ sym (∙-assoc (measure-maybe-digit l ∙ ∥ x ∥) (measure-maybe-digit r) (measure-tree ft ∙ measure-digit sf)) ⟩
                                                (measure-maybe-digit l ∙ ∥ x ∥) ∙ (measure-maybe-digit r ∙ (measure-tree ft) ∙ (measure-digit sf))
                                                ≡⟨ sym (∙-assoc (measure-maybe-digit l) (∥ x ∥) (measure-maybe-digit r ∙ (measure-tree ft) ∙ (measure-digit sf))) ⟩
                                                measure-maybe-digit l ∙ ∥ x ∥ ∙ (measure-maybe-digit r ∙ measure-tree ft ∙ measure-digit sf)
                                                ≡⟨ cong (λ t → t ∙ ∥ x ∥ ∙ (measure-maybe-digit r ∙ measure-tree ft ∙ measure-digit sf)) (measure-to-tree-maybe-dig-lemma l) ⟩
                                                measure-tree (toTree-maybe-dig l) ∙ ∥ x ∥ ∙ (measure-maybe-digit r ∙ measure-tree ft ∙ measure-digit sf) ∎

split-Tree1 : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {μ : V} →
              (p : V → Bool) → (i : V) → -- predicate and initial value
              (pr : Digit A) → (ft : FingerTree (Node A V) V {μ}) → (sf : Digit A) → -- flattened deep constructor
              Split-d A V {(measure-digit pr) ∙ μ ∙ (measure-digit sf)} -- result
split-Tree1 p i pr ft sf with splitDigit p i pr | inspect (splitDigit p i) pr
split-Tree1 p i pr ft sf | split l x r | [ eq ] rewrite split-Tree1-measure-lemma p i pr ft sf l x r eq = split-d (toTree-maybe-dig l) x (deepL r ft sf)


split-Tree-if : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {μ : V} →
            (p : V → Bool) → (i : V) → -- predicate and initial value
            (pr : Digit A) → (ft : FingerTree (Node A V) V {μ}) → (sf : Digit A) → -- flattened deep constructor
            (vpr : Bool) → (vpr ≡ p (i ∙ measure-digit pr)) → -- passing the first digit + proof we're not cheating
            (vft : Bool) → (vft ≡ p ((i ∙ measure-digit pr) ∙ (measure-tree ft))) → -- passing the tree + proof we're not cheating
            Split-d A V {(measure-digit pr) ∙ μ ∙ (measure-digit sf)} -- giving back the correct-sized split
split-Tree-if p i pr ft sf false pr1 false pr2 = {!   !} -- case3 : predicate becomes true in suffix or it doesn't become true at all
split-Tree-if p i pr ft sf false pr1 true pr2 = {!   !}  -- case2 : predicate becomes true in tree
split-Tree-if p i pr ft sf true pr1 vft pr2 = split-Tree1 p i pr ft sf -- case1 : predicate becomes true in prefix

split-Tree : ∀ {a} {A : Set a} {V : Set a} ⦃ mo : Monoid V ⦄ ⦃ m : Measured A V ⦄ {μ : V} → -- type class information
            (p : V → Bool) → (i : V) → -- predicate and inital value
            (ft : FingerTree A V {μ}) → Maybe (Split-d A V {μ}) -- argument and proof that the split has the same size
split-Tree p i Empty = nothing  -- cannot split an empty tree
split-Tree p i (Single e) = {!   !} -- this annoying case where agda cannot figure out implicit types
split-Tree p i (Deep pr ft sf) = just (split-Tree-if p i pr ft sf vpr refl vft refl) -- fantastic beasts and where to find them
  where
    vpr = p (i ∙ (measure-digit pr))
    vft = p ((i ∙ measure-digit pr) ∙ measure-tree ft)



open import numbers

instance nat : Monoid ℕ
nat = monoid 0 _+_ 0+ +0 +assoc

instance list : Monoid (List ℕ)
list = monoid [] _++_ []+ +[] ++assoc

instance nat-measure : ∀ {A : Set} →  Measured A ℕ
nat-measure = measured (λ x → 1)
