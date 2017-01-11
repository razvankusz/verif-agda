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
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
name4 = "numbers.0+"
d4 = erased
name10 = "numbers.+0"
d10 = erased
name24 = "numbers.+assoc"
d24 = erased
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
name114 = "numbers.lemma++"
d114 = erased
name128 = "numbers.[]+"
d128 = erased
name138 = "numbers.+[]"
d138 = erased
name154 = "numbers.++assoc"
d154 = erased