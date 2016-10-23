{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Qexercise1 where
import qualified MAlonzo.RTE
name3 = "exercise1.Nat.suc"
name9 = "exercise1.Vec._::_"
name5 = "exercise1.Vec"
d5 a0 a1 = ()

data T5 a0 a1 a2 = C7
                 | C9 a0 a1 a2
name2 = "exercise1.Nat.zero"
name16 = "exercise1.vec"
d16
  = \ v0 ->
      case MAlonzo.RTE.mazCoerce v0 of
          C2 -> \ v1 v2 -> MAlonzo.RTE.mazCoerce C7
          C3 v1 -> \ v2 v3 ->
                     MAlonzo.RTE.mazCoerce
                       (C9 (MAlonzo.RTE.mazCoerce v1) (MAlonzo.RTE.mazCoerce v3)
                          (MAlonzo.RTE.mazCoerce
                             (d16 (MAlonzo.RTE.mazCoerce v1) (MAlonzo.RTE.mazCoerce v2)
                                (MAlonzo.RTE.mazCoerce v3))))
          _ -> MAlonzo.RTE.mazIncompleteMatch name16
name1 = "exercise1.Nat"
d1 = ()

data T1 a0 = C2
           | C3 a0
name7 = "exercise1.Vec.[]"
name10 = "exercise1.Matrix"
d10
  = \ v0 v1 v2 ->
      MAlonzo.RTE.mazCoerce
        (d5
           (MAlonzo.RTE.mazCoerce
              (d5 (MAlonzo.RTE.mazCoerce v0) (MAlonzo.RTE.mazCoerce v1)))
           (MAlonzo.RTE.mazCoerce v2))