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
name12 = "numbers._==_"
d12 a0 a1 a2 = ()

data T12 = C18
name20 = "numbers._+_"
d20 v0 v1
  = case coe v0 of
        C4 -> coe v1
        C6 v2 -> coe C6 (coe d20 v2 v1)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name30 = "numbers.0+"
d30 = erased
name36 = "numbers.+0"
d36 = erased
name52 = "numbers.+assoc"
d52 = erased
name78 = "numbers.+suc"
d78 = erased
name98 = "numbers.+comm"
d98 = erased