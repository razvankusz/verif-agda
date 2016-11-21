open import numbers
open import IO
data V {l} (A : Set l) : ℕ -> Set l where
  [] : V A zero
  _::_ : {n : ℕ} (x : A) (xs : V A n) -> V A (suc n)

test-vector : V ℕ (suc(suc(suc(zero))))
test-vector = zero :: (zero :: (zero :: []))

_++v_ : ∀ {l} {A : Set l} {n m : ℕ} ->
  V A n -> V A m -> V A (n + m)
[] ++v ys = ys
(x :: xs) ++v ys = x :: (xs ++v ys)

headv : ∀ {l} {A : Set l} {n : ℕ} -> V A (suc n) -> A
headv ( x :: _) = x

tailv : ∀ {l} {A : Set l} {n : ℕ} -> V A n -> V A (pred n)
tailv [] = []
tailv (x :: xs) = xs

mapv : ∀ {l} {l'} {A : Set l} {B : Set l'} {n : ℕ} ->
  (A -> B) -> V A n -> V B n
mapv f [] = []
mapv f (x :: xs) = f x :: mapv f xs

main = run (headv test-vector)
