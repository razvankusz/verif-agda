{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Agda.Builtin.TrustMe where
import MAlonzo.RTE (coe, erased)
import qualified MAlonzo.RTE
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Equality
name14 = "Agda.Builtin.TrustMe.primTrustMe"
d14
  = coe (\ v0 v1 v2 v3 -> coe MAlonzo.Code.Agda.Builtin.Equality.C20)