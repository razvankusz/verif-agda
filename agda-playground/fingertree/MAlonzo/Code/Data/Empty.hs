{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Data.Empty where
import MAlonzo.RTE (coe, erased)
import qualified MAlonzo.RTE
import qualified Data.Text
import qualified MAlonzo.Code.Level

data AgdaEmpty {- OMG hack :: -}
name4 = "Data.Empty.\8869"
d4 = ()

cover4 :: MAlonzo.Code.Data.Empty.AgdaEmpty -> ()
cover4 x = ()
name10 = "Data.Empty.\8869-elim"
d10 = MAlonzo.RTE.mazUnreachableError