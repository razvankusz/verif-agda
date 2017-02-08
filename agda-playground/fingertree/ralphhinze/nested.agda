-- Higher order nested datatypes

{-# OPTIONS --sized-types #-}
module nested where

  module nat where
    data Nat : Set where
      Zero : Nat
      Succ : Nat → Nat

    data Nats (nat : Nat) : Set where
      Nil : Nats nat
      Cons : Nat → (Nats (Succ nat)) → Nats nat

  module stack where
    -- data Stack (A : Set) : Set where
    --   Empty : Stack A
    --   Push  : A → Stack A → Stack A

    data Empty (A : Set) : Set where
      EMPTY : Empty A

    data Push (S : Set → Set) (A : Set) : Set where
      PUSH : A → S A → Push S A

    data Stacks (S : Set → Set) (A : Set) : Set where
      NIL : Stacks S A
      CONS : S A → Stacks (Push S) A → Stacks S A

    -- data Stacks (A : Set) : Set where
    --   Nil : Stacks A
    --   Cons : (Stack A) → (Stacks (Push (λ X → Stack X)) A) → Stacks A

  -- regular tree structures
  module tree where
    -- data Bush (A : Set) : Set where
    --   Leaf : A → Bush A
    --   Fork : Bush A → Bush A → Bush A

    -- binary tree
    data Leaf (A : Set) : Set where
      LEAF : A → Leaf A
    data Fork (B : Set → Set)(A : Set) : Set where
      FORK : (B A) → (B A) → Fork B A

    -- pennant
    data Empty (A : Set) : Set where
      EMPTY : Empty A
    data Bin (T : Set → Set) (A : Set) : Set where
      BIN : (T A) → A → (T A) → Bin T A
    data Pennant (T : Set → Set) (A : Set) : Set where
      PENNANT : A → (T A) → Pennant T A

    -- binomial tree
    data Lin (A : Set) : Set where
      LIN : Lin A
    data Node (S : Set → Set) (A : Set) : Set where
      NODE : A → (S A) → Node S A
    data Snoc (S : Set → Set) (A : Set) : Set where
      SNOC : (S A) → (Node S A) → Snoc S A

    data RandomAccessList (B : Set → Set) (A : Set) : Set where
      Nil : RandomAccessList B A
      One : (B A) → (RandomAccessList (Fork B) A) → RandomAccessList B A
      Two : (Fork B A) → (RandomAccessList (Fork B) A) → RandomAccessList B A

    IxSequence : Set → Set
    IxSequence = RandomAccessList Leaf

    incr : {B : Set → Set} {A : Set} → (B A) → RandomAccessList B A → RandomAccessList B A
    incr b Nil = One b Nil
    incr b (One b₂ ds) = Two (FORK b b₂) ds
    incr b (Two b₂ ds) = One b (incr b₂ ds)

    cons : {A : Set} → A → IxSequence A → IxSequence A
    cons a s = incr (LEAF a) s

    open import Data.List

    fromList : {A : Set} → List A → IxSequence A
    fromList [] = Nil
    fromList (x ∷ xs) = cons x (fromList xs)

    zero : {B : Set → Set} {A : Set} →
      RandomAccessList (Fork B) A →
      RandomAccessList B A
    zero Nil = Nil
    zero (One b ds) = Two b (zero ds)
    zero (Two (FORK b₁ b₂) ds) = Two b₁ (One b₂ ds)

    open import Data.Product

    data View (A : Set) : Set where
      Vnil : View A
      VCns : A × IxSequence A → View A

    front : {A : Set} → IxSequence A → View A
    front Nil = Vnil
    front (One (LEAF x) ds) = VCns (x , zero ds)
    front (Two (FORK (LEAF a) b) ds) = VCns (a , One b ds)

    -- Yay, found another example of the same problem
    -- plus a source of countless other examples:
    --  http://web.comlab.ox.ac.uk/oucl/work/ralf.hinze/publications/IAI-TR-98-12.ps.gz
    --
    -- append : {A : Set} → A → IxSequence A → IxSequence A
    -- append x seq with front seq
    -- append x seq | Vnil = cons x Nil
    -- append x seq | VCns (head , tail) = cons head (append x tail)

  module tree-size where
    -- binary tree
    open import Size

    data Leaf (A : Set) : Set where
      LEAF : A → Leaf A
    data Fork (B : Set → Set)(A : Set) : Set where
      FORK : (B A) → (B A) → Fork B A

    data RandomAccessList (B : Set → Set)(A : Set) : {i : Size} → Set where
      Nil : ∀ {i} → RandomAccessList B A {i}
      One : ∀ {i} → (B A) → (RandomAccessList (Fork B) A {i}) → RandomAccessList B A {↑ i}
      Two : ∀ {i} → (Fork B A) → (RandomAccessList (Fork B) A {i}) → RandomAccessList B A {↑ ↑ i}

    IxSequence : Set → {i : Size} → Set
    IxSequence = RandomAccessList Leaf

    incr : {B : Set → Set} {A : Set} {i : Size} → (B A) → RandomAccessList B A {i} → RandomAccessList B A {↑ i}
    incr b Nil = One b Nil
    incr b (One b₂ ds) = Two (FORK b b₂) ds
    incr b (Two b₂ ds) = ? -- One b (incr b₂ ds)
