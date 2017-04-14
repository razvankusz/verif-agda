{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Qnumbers where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Base
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
name4 = "numbers.0+"
d4 = erased
name14 = "numbers.+assoc"
d14 = erased
name32 = "numbers.+0"
d32 = erased
name44 = "numbers.+suc"
d44 = erased
name60 = "numbers.+comm"
d60 = erased
name84 = "numbers._==_"
d84 v0 v1
  = case coe v0 of
        0 -> case coe v1 of
                 0 -> coe True
                 _ -> coe False
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe False
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in coe d84 v2 v3
name94 = "numbers._<-nat_"
d94 v0 v1
  = case coe v0 of
        0 -> coe True
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe False
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in coe d94 v2 v3
name106 = "numbers.\8804-refl"
d106 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe MAlonzo.Code.Data.Nat.Base.C18 v1 v1 (coe d106 v1)
name120 = "numbers.lemma++"
d120 = erased
name134 = "numbers.[]+"
d134 = erased
name144 = "numbers.+[]"
d144 = erased
name160 = "numbers.++assoc"
d160 = erased
name188 = "numbers.list-foldl-lemma"
d188 = erased
name206 = "numbers.sum-monoid"
d206
  = coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
      ((Prelude.+) :: Integer -> Integer -> Integer)
      erased
      erased
      erased
      erased
name212 = "numbers.list-monoid"
d212 v0 v1 = du212 v1
du212 v0
  = coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
      (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
      erased
      erased
      erased
      (\ v1 v2 -> v0)
name224 = "numbers.list-measure"
d224 v0 v1 = du224
du224
  = coe MAlonzo.Code.AlgebraStructures.C76
      (\ v0 -> coe (:) v0 (coe []))