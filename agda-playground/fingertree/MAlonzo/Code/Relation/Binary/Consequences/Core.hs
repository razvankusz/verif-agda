{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Relation.Binary.Consequences.Core where
import MAlonzo.RTE (coe, erased)
import qualified MAlonzo.RTE
import qualified Data.Text
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Relation.Binary.Core
name20 = "Relation.Binary.Consequences.Core.subst\10230resp\8322"
d20 v0 v1 v2 v3 v4 v5 v6 = du20 v5 v6
du20 v0 v1
  = coe MAlonzo.Code.Data.Product.C30 (\ v2 -> coe v1 (coe v0 v2))
      (\ v2 -> coe v1 (\ v3 -> coe v0 v3 v2))