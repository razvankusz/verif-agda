{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.AlgebraStructures where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
name6 = "AlgebraStructures.Monoid"
d6 a0 a1 = ()

data T6 a0 a1 a2 a3 a4 = C52 a0 a1 a2 a3 a4
name32 = "AlgebraStructures.Monoid.\949"
d32 v0
  = case coe v0 of
        C52 v1 v2 v3 v4 v5 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name34 = "AlgebraStructures.Monoid._\8729_"
d34 v0
  = case coe v0 of
        C52 v1 v2 v3 v4 v5 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name38 = "AlgebraStructures.Monoid.\949-left"
d38 = erased
name42 = "AlgebraStructures.Monoid.\949-right"
d42 = erased
name50 = "AlgebraStructures.Monoid.\8729-assoc"
d50 = erased
name60 = "AlgebraStructures.Measured"
d60 a0 a1 a2 = ()

newtype T60 a0 = C72 a0
name70 = "AlgebraStructures.Measured.\8741_\8741"
d70 v0
  = case coe v0 of
        C72 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError