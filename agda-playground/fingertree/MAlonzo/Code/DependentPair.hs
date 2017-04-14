{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.DependentPair where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
name8 = "DependentPair.\931"
d8 a0 a1 a2 = ()

data T8 a0 a1 = C24 a0 a1
name20 = "DependentPair.\931.fst"
d20 v0
  = case coe v0 of
        C24 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name22 = "DependentPair.\931.snd"
d22 v0
  = case coe v0 of
        C24 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError