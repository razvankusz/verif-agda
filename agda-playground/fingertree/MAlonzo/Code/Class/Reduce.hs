{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Class.Reduce where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Level
name8 = "Class.Reduce.reduceClass"
d8 a0 a1 = ()

data T8 a0 a1 = C1 a0 a1
name30 = "Class.Reduce.reduceClass.reducer"
d30 v0
  = case coe v0 of
        C1 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name36 = "Class.Reduce.reduceClass.reducel"
d36 v0
  = case coe v0 of
        C1 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name40 = "Class.Reduce.reduceClass.toList"
d40 v0 v1 v2 v3 v4 = du40 v2 v3 v4
du40 v0 v1 v2 = coe d30 v0 v1 erased (coe (:)) v2 (coe [])
name46 = "Class.Reduce._.reducel"
d46 v0 = coe d36 v0
name48 = "Class.Reduce._.reducer"
d48 v0 = coe d30 v0
name50 = "Class.Reduce._.toList"
d50 v0 v1 v2 = du50 v2
du50 v0 = coe d40 erased erased v0
name54 = "Class.Reduce.reduceInstanceList"
d54 v0 = du54
du54
  = coe C1
      (\ v0 v1 v2 v3 v4 ->
         coe MAlonzo.Code.Data.List.Base.du144 v2 v4 v3)
      (\ v0 v1 ->
         coe MAlonzo.Code.Data.List.Base.d166 erased erased erased erased)