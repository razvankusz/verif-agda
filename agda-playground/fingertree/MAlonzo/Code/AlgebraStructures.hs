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
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
name6 = "AlgebraStructures.Monoid"
d6 a0 a1 = ()

data T6 a0 a1 a2 a3 a4 a5 = C56 a0 a1 a2 a3 a4 a5
name34 = "AlgebraStructures.Monoid.\949"
d34 v0
  = case coe v0 of
        C56 v1 v2 v3 v4 v5 v6 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name36 = "AlgebraStructures.Monoid._\8729_"
d36 v0
  = case coe v0 of
        C56 v1 v2 v3 v4 v5 v6 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name40 = "AlgebraStructures.Monoid.\949-left"
d40 = erased
name44 = "AlgebraStructures.Monoid.\949-right"
d44 = erased
name52 = "AlgebraStructures.Monoid.\8729-assoc"
d52 = erased
name54 = "AlgebraStructures.Monoid._\8818_"
d54 = erased
name64 = "AlgebraStructures.Measured"
d64 a0 a1 a2 = ()

newtype T64 a0 = C76 a0
name74 = "AlgebraStructures.Measured.\8741_\8741"
d74 v0
  = case coe v0 of
        C76 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError