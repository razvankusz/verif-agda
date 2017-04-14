{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Entry where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.SizeW
name6 = "Entry.Entry"
d6 a0 a1 = ()

newtype T6 a0 = C14 a0
name20 = "Entry.getEntry"
d20 v0
  = case coe v0 of
        C14 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name30 = "Entry.measure"
d30 v0 = du30
du30 = coe MAlonzo.Code.SizeW.C10 (1 :: Integer)
name38 = "Entry.entry-measure"
d38 v0 v1 = du38
du38
  = coe MAlonzo.Code.AlgebraStructures.C76
      (\ v0 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer))