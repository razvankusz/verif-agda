open import Data.Nat
open import Relation.Binary.PropositionalEquality
open import Data.Bool
open import Data.Maybe
module functionalarray where

-- we can also add the bird and meertens concepts here, but it makes implementation harder

  data Repr : ℕ → Set where
    z   : Repr 0
    2*_ : ∀ {n : ℕ} → Repr n → Repr (n * 2)
    2*_+1 : ∀ {n : ℕ} → Repr n → Repr (suc (n * 2))


  _+1 : ∀ {n : ℕ} → Repr n → Repr (suc n)
  z +1 = 2* z +1
  (2* m) +1 = 2* m +1
  2* m +1 +1 = 2* (m +1)

  repr : (n : ℕ) → Repr n
  repr zero = z
  repr (suc n) = (repr n) +1

  data BinTree {a}(A : Set a) : Set a where
    Leaf : BinTree A
    Branch : A → BinTree A → BinTree A → BinTree A

  length : ∀ {a}{A : Set a} →  BinTree A → ℕ
  length (Leaf) = 0
  length (Branch x left right) = 1 + length left + length right

  _<=_ : ℕ → ℕ → Bool
  zero <= m = true
  suc n <= zero = false
  suc n <= suc m = n <= m

  infixl 5 _$_
  _$_ : ∀ {a}{A : Set a} → BinTree A → A → BinTree A
  Leaf $ x = Branch x Leaf Leaf
  (Branch x₁ btl btr) $ x = if (length btl <= length btr) then Branch x₁ (btl $ x) btr else Branch x₁ btl (btr $ x)


  test-tree : BinTree ℕ
  test-tree = Leaf $ 1 $ 2 $ 3 $ 4 $ 5 $ 6 $ 7 $ 8

  _!_ : ∀ {a}{A : Set a}{n : ℕ} → (r : Repr n) → (bt : BinTree A) → Maybe A
  r ! Leaf = nothing
  z ! Branch x bt bt₁ = nothing
  (2* r) ! Branch x bt bt₁ = r ! bt
  2* z +1 ! Branch x bt bt₁ = just x
  2* r +1 ! Branch x bt bt₁ = r ! bt₁


  big-tree : ℕ → BinTree ℕ → BinTree ℕ
  big-tree zero acc = acc
  big-tree (suc n) acc = big-tree (n) (acc $ (suc n))

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

  input-tree : BinTree ℕ
  input-tree = Branch 100
      (Branch 99
         (Branch 97
          (Branch 93
           (Branch 85 (Branch 69 (Branch 37 Leaf Leaf) (Branch 5 Leaf Leaf))
            (Branch 53 (Branch 21 Leaf Leaf) Leaf))
           (Branch 77 (Branch 61 (Branch 29 Leaf Leaf) Leaf)
            (Branch 45 (Branch 13 Leaf Leaf) Leaf)))
          (Branch 89
           (Branch 81 (Branch 65 (Branch 33 Leaf Leaf) (Branch 1 Leaf Leaf))
            (Branch 49 (Branch 17 Leaf Leaf) Leaf))
           (Branch 73 (Branch 57 (Branch 25 Leaf Leaf) Leaf)
            (Branch 41 (Branch 9 Leaf Leaf) Leaf))))
         (Branch 95
          (Branch 91
           (Branch 83 (Branch 67 (Branch 35 Leaf Leaf) (Branch 3 Leaf Leaf))
            (Branch 51 (Branch 19 Leaf Leaf) Leaf))
           (Branch 75 (Branch 59 (Branch 27 Leaf Leaf) Leaf)
            (Branch 43 (Branch 11 Leaf Leaf) Leaf)))
          (Branch 87
           (Branch 79 (Branch 63 (Branch 31 Leaf Leaf) Leaf)
            (Branch 47 (Branch 15 Leaf Leaf) Leaf))
           (Branch 71 (Branch 55 (Branch 23 Leaf Leaf) Leaf)
            (Branch 39 (Branch 7 Leaf Leaf) Leaf)))))
        (Branch 98
         (Branch 96
          (Branch 92
           (Branch 84 (Branch 68 (Branch 36 Leaf Leaf) (Branch 4 Leaf Leaf))
            (Branch 52 (Branch 20 Leaf Leaf) Leaf))
           (Branch 76 (Branch 60 (Branch 28 Leaf Leaf) Leaf)
            (Branch 44 (Branch 12 Leaf Leaf) Leaf)))
          (Branch 88
           (Branch 80 (Branch 64 (Branch 32 Leaf Leaf) Leaf)
            (Branch 48 (Branch 16 Leaf Leaf) Leaf))
           (Branch 72 (Branch 56 (Branch 24 Leaf Leaf) Leaf)
            (Branch 40 (Branch 8 Leaf Leaf) Leaf))))
         (Branch 94
          (Branch 90
           (Branch 82 (Branch 66 (Branch 34 Leaf Leaf) (Branch 2 Leaf Leaf))
            (Branch 50 (Branch 18 Leaf Leaf) Leaf))
           (Branch 74 (Branch 58 (Branch 26 Leaf Leaf) Leaf)
            (Branch 42 (Branch 10 Leaf Leaf) Leaf)))
          (Branch 86
           (Branch 78 (Branch 62 (Branch 30 Leaf Leaf) Leaf)
            (Branch 46 (Branch 14 Leaf Leaf) Leaf))
           (Branch 70 (Branch 54 (Branch 22 Leaf Leaf) Leaf)
            (Branch 38 (Branch 6 Leaf Leaf) Leaf)))))

  main = (putStrLn (toCostring"Hello") >>=
          (λ x → return (big-tree 10000 Leaf ) >>=
          (λ x → putStrLn (toCostring (show-maybe(repr 2 ! x)))) >>=
          (λ x → return 1)))
