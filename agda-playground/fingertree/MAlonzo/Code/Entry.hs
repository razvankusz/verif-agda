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
name20 = "Entry.m"
d20 v0 v1 v2 = du20 v2
du20 v0
  = case coe v0 of
        C14 v1 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name28 = "Entry.getEntry"
d28 v0
  = case coe v0 of
        C14 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name36 = "Entry.entry-measure"
d36 v0 v1 = du36
du36
  = coe MAlonzo.Code.AlgebraStructures.C72 (coe d20 erased erased)