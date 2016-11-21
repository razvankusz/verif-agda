{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Qnumbers where
import MAlonzo.RTE (coe, erased)
import qualified MAlonzo.RTE
import qualified Data.Text
name2 = "numbers.\8469"
d2 = ()

data T2 a0 = C4
           | C6 a0
name8 = "numbers.pred"
d8 v0
  = case coe v0 of
        C4 -> coe C4
        C6 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name16 = "numbers._==_"
d16 a0 a1 a2 = ()

data T16 = C22
name24 = "numbers._+_"
d24 v0 v1
  = case coe v0 of
        C4 -> coe v1
        C6 v2 -> coe C6 (coe d24 v2 v1)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name34 = "numbers.0+"
d34 = erased
name40 = "numbers.+0"
d40 = erased
name56 = "numbers.+assoc"
d56 = erased
name82 = "numbers.+suc"
d82 = erased
name102 = "numbers.+comm"
d102 = erased