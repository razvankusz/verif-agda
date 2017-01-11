{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.SizeW where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Qnumbers
name4 = "SizeW.SizeW"
d4 a0 = ()

newtype T4 a0 = C10 a0
name14 = "SizeW.\949"
d14 v0 = du14
du14 = coe C10 (0 :: Integer)
name18 = "SizeW._\8729_"
d18 v0 v1 v2 = du18 v1 v2
du18 v0 v1
  = case coe v0 of
        C10 v2 -> case coe v1 of
                      C10 v3 -> coe C10
                                  (coe ((Prelude.+) :: Integer -> Integer -> Integer) v2 v3)
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name26 = "SizeW._<\738_"
d26 v0 v1 v2 = du26 v1 v2
du26 v0 v1
  = case coe v0 of
        C10 v2 -> case coe v1 of
                      C10 v3 -> coe MAlonzo.Code.Qnumbers.d94 v2 v3
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name36 = "SizeW.\8729\949"
d36 = erased
name44 = "SizeW.\949\8729"
d44 = erased
name56 = "SizeW.\8729-assoc"
d56 = erased
name66 = "SizeW.size-monoid"
d66 v0 = du66
du66
  = coe MAlonzo.Code.AlgebraStructures.C52 du14 (coe d18 erased)
      erased
      erased
      erased
name70 = "SizeW.getSize"
d70 v0
  = case coe v0 of
        C10 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError