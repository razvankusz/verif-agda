{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Qvectors where
import MAlonzo.RTE (coe, erased)
import qualified MAlonzo.RTE
import qualified Data.Text
import qualified MAlonzo.Code.Qnumbers
name6 = "vectors.V"
d6 a0 a1 a2 = ()

data T6 a0 a1 a2 = C12
                 | C20 a0 a1 a2
name22 = "vectors.test-vector"
d22
  = coe C20
      (coe MAlonzo.Code.Qnumbers.C6
         (coe MAlonzo.Code.Qnumbers.C6 (coe MAlonzo.Code.Qnumbers.C4)))
      (coe MAlonzo.Code.Qnumbers.C4)
      (coe C20
         (coe MAlonzo.Code.Qnumbers.C6 (coe MAlonzo.Code.Qnumbers.C4))
         (coe MAlonzo.Code.Qnumbers.C4)
         (coe C20 (coe MAlonzo.Code.Qnumbers.C4)
            (coe MAlonzo.Code.Qnumbers.C4)
            (coe C12)))
name32 = "vectors._++v_"
d32 v0 v1 v2 v3 v4 v5 = du32 v3 v4 v5
du32 v0 v1 v2
  = case coe v1 of
        C12 -> coe v2
        C20 v3 v4 v5 -> coe C20 (coe MAlonzo.Code.Qnumbers.d24 v3 v0) v4
                          (coe du32 v0 v5 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name48 = "vectors.headv"
d48 v0 v1 v2 v3 = du48 v3
du48 v0
  = case coe v0 of
        C20 v1 v2 v3 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name58 = "vectors.tailv"
d58 v0 v1 v2 v3 = du58 v3
du58 v0
  = case coe v0 of
        C12 -> coe C12
        C20 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name74 = "vectors.mapv"
d74 v0 v1 v2 v3 v4 v5 v6 = du74 v5 v6
du74 v0 v1
  = case coe v1 of
        C12 -> coe C12
        C20 v2 v3 v4 -> coe C20 v2 (coe v0 v3) (coe du74 v0 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError