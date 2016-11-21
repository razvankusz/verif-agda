open import Data.Nat using (ℕ; _+_)
open import Data.List
open import Agda.Builtin.Equality
module lambda where

  data Type : Set where
    ı   : Type
    _⟶_ : Type → Type → Type

  data Equal? : Type → Type → Set where
    yes : ∀ {τ} → Equal? τ τ
    no  : ∀ {τ σ} → Equal? σ τ

  data _∈_ {A : Set}(x : A) : List A → Set where
    hd : ∀ {xs} → x ∈ (x ∷ xs)
    tl : ∀ {y xs} → x ∈ xs → x ∈ (y ∷ xs)

  index : ∀ {A} {x : A} {xs} → x ∈ xs → ℕ
  index hd = ℕ.zero
  index (tl p) = ℕ.suc (index p)

  data Lookup {A : Set} (xs : List A) : ℕ → Set where
    inside : (x : A)(p : x ∈ xs) → Lookup xs (index p)
    outside : (m : ℕ) → Lookup xs (length xs + m)

  _!_ : {A : Set}(xs : List A)(n : ℕ) → Lookup xs n
  [] ! n = outside n
  (x ∷ xs) ! ℕ.zero = inside x hd
  (x ∷ xs) ! ℕ.suc n with xs ! n
  (x₁ ∷ xs) ! ℕ.suc .(index p) | inside x p = inside x (tl p)
  (x ∷ xs) ! ℕ.suc .(foldr (λ _ → ℕ.suc) 0 xs + m) | outside m = outside m

  _=?=_ : (σ τ : Type) → Equal? σ τ
  ı =?= ı = yes
  ı =?= (b ⟶ b₁) = no
  (a ⟶ a₁) =?= ı = no
  (a ⟶ a₁) =?= (b ⟶ b₁) with a =?= b | a₁ =?= b₁
  (σ ⟶ τ) =?= (.σ ⟶ .τ) | yes | yes = yes
  (a ⟶ a₁) =?= (b ⟶ b₁) | _ | _ = no

  infixl 80 _$_
  data Raw : Set where
    var : ℕ → Raw
    _$_ : Raw → Raw → Raw
    lam : Type → Raw → Raw

  Ctx = List Type

  data Term (Γ : Ctx) : Type → Set where
    var : ∀ {τ} → τ ∈ Γ → Term Γ τ
    _$_ : ∀ {σ τ} → Term Γ (σ ⟶ τ) → Term Γ σ → Term Γ τ
    lam : ∀ σ {τ} → Term (σ ∷ Γ) τ → Term Γ (σ ⟶ τ)

  erase : ∀ {Γ τ} → Term Γ τ → Raw
  erase (var x) = var (index x)
  erase (term $ term₁) = erase term $ erase term₁
  erase (lam σ term) = lam σ (erase term)


  data Infer (Γ : Ctx) : Raw → Set where
    ok : (τ : Type)(t : Term Γ τ) → Infer Γ (erase t)
    bad : {e : Raw} → Infer Γ e

  infer : (Γ : Ctx)(e : Raw) → Infer Γ e

  infer Γ (var n) with Γ ! n
  infer Γ (var .(index p)) | inside x p = ok x (var p)
  infer Γ (var .(foldr (λ _ → ℕ.suc) 0 Γ + m)) | outside m = bad
  infer Γ (e₁ $ e₂) with
    infer Γ e₁
  infer Γ (e₁ $ e₂) | bad = bad
  infer Γ (.(erase t) $ e₂) | ok ı t = bad
  infer Γ (.(erase t) $ e₂) | ok (σ ⟶ τ) t with
    infer Γ e₂
  infer Γ (.(erase t₁) $ .(erase t)) | ok (σ ⟶ τ₁) t₁ | ok τ t with
    σ =?= τ
  infer Γ (.(erase t₁) $ .(erase t)) | ok (τ ⟶ τ₁) t₁ | ok .τ t | yes = ok τ₁ (t₁ $ t)
  infer Γ (.(erase t₁) $ .(erase t)) | ok (σ ⟶ τ₁) t₁ | ok τ t | no = bad
  infer Γ (.(erase t) $ e₂) | ok (σ ⟶ τ) t | bad = bad
  infer Γ (lam σ e) with infer (σ ∷ Γ) e
  infer Γ (lam σ .(erase t)) | ok τ t = ok (σ ⟶ τ) (lam σ t)
  infer Γ (lam σ e) | bad = bad


  test-term : Raw
  test-term = (lam ı (var 1)) $ (var 0)

  example-a : infer (ı ∷ []) test-term ≡ ok _ _
  example-a = refl

--  example-b : infer ((ı ⟶ ı) ∷ []) test-term ≡ ok _ _
--  example-b = refl
