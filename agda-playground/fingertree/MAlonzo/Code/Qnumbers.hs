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
        0 -> case coe v1 of
                 0 -> coe False
                 _ -> coe True
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
name104 = "numbers._<=nat_"
d104 v0 v1
  = case coe v0 of
        0 -> coe seq v1 (coe True)
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe False
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in coe d104 v2 v3
name116 = "numbers.\8804-refl"
d116 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe MAlonzo.Code.Data.Nat.Base.C18 v1 v1 (coe d116 v1)
name130 = "numbers.lemma++"
d130 = erased
name144 = "numbers.[]+"
d144 = erased
name154 = "numbers.+[]"
d154 = erased
name170 = "numbers.++assoc"
d170 = erased
name198 = "numbers.list-foldl-lemma"
d198 = erased
name216 = "numbers.sum-monoid"
d216
  = coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
      ((Prelude.+) :: Integer -> Integer -> Integer)
      erased
      erased
      erased
      erased
name222 = "numbers.list-monoid"
d222 v0 v1 = du222 v1
du222 v0
  = coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
      (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
      erased
      erased
      erased
      (\ v1 v2 -> v0)
name234 = "numbers.list-measure"
d234 v0 v1 = du234
du234
  = coe MAlonzo.Code.AlgebraStructures.C76
      (\ v0 -> coe (:) v0 (coe []))
name242 = "numbers.Repr"
d242 a0 = ()

data T242 a0 a1 = C244
                | C248 a0 a1
                | C252 a0 a1
name256 = "numbers._+1"
d256 v0 v1 = du256 v1
du256 v0
  = case coe v0 of
        C244 -> coe C252 (0 :: Integer) (coe C244)
        C248 v1 v2 -> coe C252 v1 v2
        C252 v1 v2 -> coe C248
                        (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                           v1)
                        (coe du256 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name264 = "numbers.repr"
d264 v0
  = case coe v0 of
        0 -> coe C244
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe du256 (coe d264 v1)