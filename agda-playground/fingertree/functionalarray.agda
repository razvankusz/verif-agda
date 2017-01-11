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

  append : ∀ {a} {A : Set a}{n : ℕ} → (r : Repr n) → BinTree A → A → BinTree A
  append r Leaf x = Branch x Leaf Leaf
  append z (Branch x bt bt₁) x₁ = Branch x bt bt₁
  append (2* r) (Branch x bt bt₁) x₁ = Branch x (append r bt x₁) bt₁
  append 2* r +1 (Branch x bt bt₁) x₁ = Branch x bt (append r bt₁ x₁)

  -- infixl 5 _$_
  -- _$_ : ∀ {a}{A : Set a} → BinTree A → A → BinTree A
  -- Leaf $ x = Branch x Leaf Leaf
  -- (Branch x₁ btl btr) $ x = if (length btl <= length btr) then Branch x₁ (btl $ x) btr else Branch x₁ btl (btr $ x)

  infixl 5 _$_
  _$_ : ∀ {a}{A : Set a} → BinTree A → A → BinTree A
  bt $ x = append (repr (length bt)) bt x

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

  main = (putStrLn (toCostring "Hello") >>=
          (λ x → return (big-tree 10000 Leaf ) >>=
          (λ x → putStrLn (toCostring (show-maybe(repr 2 ! x)))) >>=
          (λ x → return 1)))
          
