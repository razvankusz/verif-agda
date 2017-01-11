{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.FingerTreeZ45Zmeasure where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Size
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Class.Reduce
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.Bool.Base
import qualified MAlonzo.Code.Data.Fin
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Unit
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Relation.Nullary.Negation
import qualified MAlonzo.Code.Size
import qualified MAlonzo.Code.Qnumbers
name8 = "FingerTree-measure.Node"
d8 a0 a1 a2 = ()

data T8 a0 a1 a2 a3 = C16 a0 a1 a2
                    | C18 a0 a1 a2 a3
name24 = "FingerTree-measure.Digit"
d24 a0 a1 = ()

data T24 a0 a1 a2 a3 = C30 a0
                     | C32 a0 a1
                     | C34 a0 a1 a2
                     | C36 a0 a1 a2 a3
name44 = "FingerTree-measure.FingerTree"
d44 a0 a1 a2 a3 = ()

data T44 a0 a1 a2 a3 a4 = C56 a0
                        | C60 a0 a1
                        | C64 a0 a1 a2 a3 a4
name68 = "FingerTree-measure._.\8741_\8741"
d68 v0 = coe MAlonzo.Code.AlgebraStructures.d70 v0
name74 = "FingerTree-measure._._\8729_"
d74 v0 = coe MAlonzo.Code.AlgebraStructures.d34 v0
name76 = "FingerTree-measure._.\949"
d76 v0 = coe MAlonzo.Code.AlgebraStructures.d32 v0
name78 = "FingerTree-measure._.\949-left"
d78 = erased
name80 = "FingerTree-measure._.\949-right"
d80 = erased
name82 = "FingerTree-measure._.\8729-assoc"
d82 = erased
name96 = "FingerTree-measure.reducer-node"
d96 v0 v1 v2 v3 v4 v5 v6 = du96 v4 v5 v6
du96 v0 v1 v2
  = case coe v1 of
        C16 v3 v4 v5 -> coe v0 v4 (coe v0 v5 v2)
        C18 v3 v4 v5 v6 -> coe v0 v4 (coe v0 v5 (coe v0 v6 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name130 = "FingerTree-measure.reducel-node"
d130 v0 v1 v2 v3 v4 v5 v6 = du130 v4 v5 v6
du130 v0 v1 v2
  = case coe v2 of
        C16 v3 v4 v5 -> coe v0 (coe v0 v1 v4) v5
        C18 v3 v4 v5 v6 -> coe v0 (coe v0 (coe v0 v1 v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name160 = "FingerTree-measure.reduceinstance-node"
d160 v0 v1 = du160
du160
  = coe MAlonzo.Code.Class.Reduce.C1
      (\ v0 -> coe d96 erased erased erased)
      (\ v0 -> coe d130 erased erased erased)
name170 = "FingerTree-measure.reducer-digit"
d170 v0 v1 v2 v3 v4 v5 = du170 v3 v4 v5
du170 v0 v1 v2
  = case coe v1 of
        C30 v3 -> coe v0 v3 v2
        C32 v3 v4 -> coe v0 v3 (coe v0 v4 v2)
        C34 v3 v4 v5 -> coe v0 v3 (coe v0 v4 (coe v0 v5 v2))
        C36 v3 v4 v5 v6 -> coe v0 v3 (coe v0 v4 (coe v0 v5 (coe v0 v6 v2)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name216 = "FingerTree-measure.reducer-maybe-digit"
d216 v0 v1 v2 v3 v4 v5 = du216 v3 v4 v5
du216 v0 v1 v2
  = case coe v1 of
        Just v3 -> coe du170 v0 v3 v2
        Nothing -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name236 = "FingerTree-measure.reducel-digit"
d236 v0 v1 v2 v3 v4 v5 = du236 v3 v4 v5
du236 v0 v1 v2
  = case coe v2 of
        C30 v3 -> coe v0 v1 v3
        C32 v3 v4 -> coe v0 (coe v0 v1 v3) v4
        C34 v3 v4 v5 -> coe v0 (coe v0 (coe v0 v1 v3) v4) v5
        C36 v3 v4 v5 v6 -> coe v0 (coe v0 (coe v0 (coe v0 v1 v3) v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name282 = "FingerTree-measure.reducel-maybe-digit"
d282 v0 v1 v2 v3 v4 v5 = du282 v3 v4 v5
du282 v0 v1 v2
  = case coe v2 of
        Just v3 -> coe du236 v0 v1 v3
        Nothing -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name296 = "FingerTree-measure.reduceinstance-digit"
d296 v0 = du296
du296
  = coe MAlonzo.Code.Class.Reduce.C1 (coe d170 erased)
      (coe d236 erased)
name302 = "FingerTree-measure.reduceinstance-maybe-digit"
d302 v0 = du302
du302
  = coe MAlonzo.Code.Class.Reduce.C1 (coe d216 erased)
      (coe d282 erased)
name314 = "FingerTree-measure.reducer-ft"
d314 v0 v1 v2 v3 v4 v5 v6 = du314 v4 v5 v6
du314 v0 v1 v2
  = case coe v1 of
        C56 v3 -> coe v2
        C60 v3 v4 -> coe v0 v4 v2
        C64 v3 v4 v5 v6 v7 -> coe du344 v0 v5
                                (coe du314 (coe d96 erased erased erased erased v0) v6
                                   (coe du344 v0 v7 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name344 = "FingerTree-measure._.fd"
d344 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du344 v4
du344 v0 = coe d170 erased erased erased v0
name358 = "FingerTree-measure.reducel-ft"
d358 v0 v1 v2 v3 v4 v5 v6 = du358 v4 v5 v6
du358 v0 v1 v2
  = case coe v2 of
        C56 v3 -> coe v1
        C60 v3 v4 -> coe v0 v1 v4
        C64 v3 v4 v5 v6 v7 -> coe du388 v0
                                (coe du358 (coe d130 erased erased erased erased v0)
                                   (coe du388 v0 v1 v5)
                                   v6)
                                v7
        _ -> coe MAlonzo.RTE.mazUnreachableError
name388 = "FingerTree-measure._.fd"
d388 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du388 v4
du388 v0 = coe d236 erased erased erased v0
name396 = "FingerTree-measure.reduceinstance-ft"
d396 v0 v1 = du396
du396
  = coe MAlonzo.Code.Class.Reduce.C1
      (\ v0 -> coe d314 erased erased erased)
      (\ v0 -> coe d358 erased erased erased)
name408 = "FingerTree-measure.node2"
d408 v0 v1 v2 v3 v4 v5 v6 = du408 v3 v4 v5 v6
du408 v0 v1 v2 v3
  = coe C16
      (coe MAlonzo.Code.AlgebraStructures.d34 v0
         (coe MAlonzo.Code.AlgebraStructures.d70 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d70 v1 v3))
      v2
      v3
name424 = "FingerTree-measure.node3"
d424 v0 v1 v2 v3 v4 v5 v6 v7 = du424 v3 v4 v5 v6 v7
du424 v0 v1 v2 v3 v4
  = coe C18
      (coe MAlonzo.Code.AlgebraStructures.d34 v0
         (coe MAlonzo.Code.AlgebraStructures.d70 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d34 v0
            (coe MAlonzo.Code.AlgebraStructures.d70 v1 v3)
            (coe MAlonzo.Code.AlgebraStructures.d70 v1 v4)))
      v2
      v3
      v4
name438 = "FingerTree-measure.measure-node"
d438 v0
  = case coe v0 of
        C16 v1 v2 v3 -> coe v1
        C18 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name464 = "FingerTree-measure.measure-digit"
d464 v0 v1 v2 v3 v4 v5 = du464 v3 v4 v5
du464 v0 v1 v2
  = case coe v2 of
        C30 v3 -> coe MAlonzo.Code.AlgebraStructures.d70 v1 v3
        C32 v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d34 v0
                       (coe MAlonzo.Code.AlgebraStructures.d70 v1 v3)
                       (coe MAlonzo.Code.AlgebraStructures.d70 v1 v4)
        C34 v3 v4 v5 -> coe MAlonzo.Code.AlgebraStructures.d34 v0
                          (coe MAlonzo.Code.AlgebraStructures.d70 v1 v3)
                          (coe MAlonzo.Code.AlgebraStructures.d34 v0
                             (coe MAlonzo.Code.AlgebraStructures.d70 v1 v4)
                             (coe MAlonzo.Code.AlgebraStructures.d70 v1 v5))
        C36 v3 v4 v5 v6 -> coe MAlonzo.Code.AlgebraStructures.d34 v0
                             (coe MAlonzo.Code.AlgebraStructures.d70 v1 v3)
                             (coe MAlonzo.Code.AlgebraStructures.d34 v0
                                (coe MAlonzo.Code.AlgebraStructures.d70 v1 v4)
                                (coe MAlonzo.Code.AlgebraStructures.d34 v0
                                   (coe MAlonzo.Code.AlgebraStructures.d70 v1 v5)
                                   (coe MAlonzo.Code.AlgebraStructures.d70 v1 v6)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name496 = "FingerTree-measure.measure-tree"
d496 v0 v1 v2 v3 v4 v5 = du496 v3 v4 v5
du496 v0 v1 v2
  = case coe v2 of
        C56 v3 -> coe MAlonzo.Code.AlgebraStructures.d32 v0
        C60 v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d70 v1 v4
        C64 v3 v4 v5 v6 v7 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name516 = "FingerTree-measure.uplift"
d516 v0 v1 v2 v3 = du516
du516 = coe MAlonzo.Code.AlgebraStructures.C72 d438
name534 = "FingerTree-measure.deep"
d534 v0 v1 v2 v3 v4 v5 v6 v7 = du534 v3 v4 v5 v6 v7
du534 v0 v1 v2 v3 v4
  = coe C64 MAlonzo.Code.Agda.Builtin.Size.d14
      (coe MAlonzo.Code.AlgebraStructures.d34 v0 (coe du464 v0 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d34 v0
            (coe du496 v0 (coe MAlonzo.Code.AlgebraStructures.C72 d438) v3)
            (coe du464 v0 v1 v4)))
      v2
      v3
      v4
name552 = "FingerTree-measure._\9665_"
d552 v0 v1 v2 v3 v4 v5 v6 = du552 v3 v4 v5 v6
du552 v0 v1 v2 v3
  = case coe v3 of
        C56 v4 -> coe C60 MAlonzo.Code.Agda.Builtin.Size.d14 v2
        C60 v4 v5 -> coe du534 v0 v1 (coe C30 v2)
                       (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
                       (coe C30 v5)
        C64 v4 v5 v6 v7 v8 -> case coe v6 of
                                  C30 v9 -> coe du534 v0 v1 (coe C32 v2 v9) v7 v8
                                  C32 v9 v10 -> coe du534 v0 v1 (coe C34 v2 v9 v10) v7 v8
                                  C34 v9 v10 v11 -> coe du534 v0 v1 (coe C36 v2 v9 v10 v11) v7 v8
                                  C36 v9 v10 v11 v12 -> coe du534 v0 v1 (coe C32 v2 v9)
                                                          (coe du552 v0
                                                             (coe MAlonzo.Code.AlgebraStructures.C72
                                                                d438)
                                                             (coe du424 v0 v1 v10 v11 v12)
                                                             v7)
                                                          v8
                                  _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name626 = "FingerTree-measure.toTree"
d626 v0 v1 v2 v3 v4 v5 v6 v7 = du626 v1 v3 v4 v6 v7
du626 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Class.Reduce.d30 v3 v0 erased
      (coe d552 erased erased erased v1 v2)
      v4
      (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
name634 = "FingerTree-measure.toList-dig"
d634 v0
  = case coe v0 of
        C30 v1 -> coe (:) v1 (coe [])
        C32 v1 v2 -> coe (:) v1 (coe (:) v2 (coe []))
        C34 v1 v2 v3 -> coe (:) v1 (coe (:) v2 (coe (:) v3 (coe [])))
        C36 v1 v2 v3 v4 -> coe (:) v1
                             (coe (:) v2 (coe (:) v3 (coe (:) v4 (coe []))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name662 = "FingerTree-measure.toList-node"
d662 v0
  = case coe v0 of
        C16 v1 v2 v3 -> coe (:) v2 (coe (:) v3 (coe []))
        C18 v1 v2 v3 v4 -> coe (:) v2 (coe (:) v3 (coe (:) v4 (coe [])))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name684 = "FingerTree-measure.flatten-list"
d684 v0 v1 v2 v3 = du684 v3
du684 v0
  = case coe v0 of
        [] -> coe []
        (:) v1 v2 -> coe MAlonzo.Code.Data.List.Base.du18 (coe d662 v1)
                       (coe du684 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name696 = "FingerTree-measure.toList-ft"
d696 v0 v1 v2 v3 = du696 v3
du696 v0
  = case coe v0 of
        C56 v1 -> coe []
        C60 v1 v2 -> coe (:) v2 (coe [])
        C64 v1 v2 v3 v4 v5 -> coe MAlonzo.Code.Data.List.Base.du18
                                (coe d634 v3)
                                (coe MAlonzo.Code.Data.List.Base.du18 (coe du684 (coe du696 v4))
                                   (coe d634 v5))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name712 = "FingerTree-measure.head-dig"
d712 v0
  = case coe v0 of
        C30 v1 -> coe v1
        C32 v1 v2 -> coe v1
        C34 v1 v2 v3 -> coe v1
        C36 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name738 = "FingerTree-measure.tail-dig"
d738 v0
  = case coe v0 of
        C30 v1 -> coe Nothing
        C32 v1 v2 -> coe Just (coe C30 v2)
        C34 v1 v2 v3 -> coe Just (coe C32 v2 v3)
        C36 v1 v2 v3 v4 -> coe Just (coe C34 v2 v3 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name766 = "FingerTree-measure.ViewL"
d766 a0 a1 a2 a3 = ()

data T766 a0 a1 a2 = C778 a0
                   | C782 a0 a1 a2
name796 = "FingerTree-measure.viewL"
d796 v0 v1 v2 v3 v4 v5 v6 = du796 v0 v2 v3 v4 v5 v6
du796 v0 v1 v2 v3 v4 v5
  = case coe v5 of
        C56 v6 -> coe C778 (coe MAlonzo.Code.Agda.Builtin.Size.d12 v6)
        C60 v6 v7 -> coe C782 v6 v7
                       (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
        C64 v6 v7 v8 v9 v10 -> coe C782 v6 (coe d712 v8)
                                 (coe du810 v0 v1 v2 v3 v4 (coe d738 v8) v9 v10)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name810 = "FingerTree-measure.deepL"
d810 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du810 v0 v2 v3 v4 v5 v6 v7 v8
du810 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v5 of
        Just v8 -> coe du534 v3 v4 v8 v6 v7
        Nothing -> let v8
                         = coe du796 v0 erased v2 v3
                             (coe MAlonzo.Code.AlgebraStructures.C72 d438)
                             v6
                     in
                     case coe v8 of
                         C778 v9 -> coe du626 v1 v3 v4
                                      (coe MAlonzo.Code.Class.Reduce.C1 (coe d170 erased)
                                         (coe d236 erased))
                                      v7
                         C782 v9 v10 v11 -> case coe v10 of
                                                C16 v12 v13 v14 -> coe du534 v3 v4 (coe C32 v13 v14)
                                                                     v11
                                                                     v7
                                                C18 v12 v13 v14 v15 -> coe du534 v3 v4
                                                                         (coe C34 v13 v14 v15)
                                                                         v11
                                                                         v7
                                                _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name822 = "FingerTree-measure.isEmpty"
d822 v0 v1 v2 v3 v4 v5
  = let v6 = coe du796 v0 v1 v2 v3 v4 v5 in
      case coe v6 of
          C778 v7 -> coe True
          C782 v7 v8 v9 -> coe False
          _ -> coe MAlonzo.RTE.mazUnreachableError
name834 = "FingerTree-measure.headL"
d834 v0 v1 v2 v3 v4 v5
  = let v6 = coe du796 v0 v1 v2 v3 v4 v5 in
      case coe v6 of
          C778 v7 -> coe Nothing
          C782 v7 v8 v9 -> coe Just v8
          _ -> coe MAlonzo.RTE.mazUnreachableError
name846 = "FingerTree-measure.tailL"
d846 v0 v1 v2 v3 v4 v5
  = let v6 = coe du796 v0 v1 v2 v3 v4 v5 in
      case coe v6 of
          C778 v7 -> coe Nothing
          C782 v7 v8 v9 -> coe Just v9
          _ -> coe MAlonzo.RTE.mazUnreachableError
name942 = "FingerTree-measure.headr-dig"
d942 v0
  = case coe v0 of
        C30 v1 -> coe v1
        C32 v1 v2 -> coe v2
        C34 v1 v2 v3 -> coe v3
        C36 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name968 = "FingerTree-measure.tailr-dig"
d968 v0
  = case coe v0 of
        C30 v1 -> coe Nothing
        C32 v1 v2 -> coe Just (coe C30 v1)
        C34 v1 v2 v3 -> coe Just (coe C32 v1 v2)
        C36 v1 v2 v3 v4 -> coe Just (coe C34 v1 v2 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name998 = "FingerTree-measure.ViewR"
d998 a0 a1 a2 a3 = ()

data T998 a0 a1 a2 = C1010 a0
                   | C1014 a0 a1 a2
name1028 = "FingerTree-measure.viewR"
d1028 v0 v1 v2 v3 v4 v5 v6 = du1028 v0 v2 v3 v4 v5 v6
du1028 v0 v1 v2 v3 v4 v5
  = case coe v5 of
        C56 v6 -> coe C1010 (coe MAlonzo.Code.Agda.Builtin.Size.d12 v6)
        C60 v6 v7 -> coe C1014 v6 v7
                       (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
        C64 v6 v7 v8 v9 v10 -> coe C1014 v6 (coe d942 v10)
                                 (coe d1040 v0 v1 v2 v3 v4 v8 v9 (coe d968 v10))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1040 = "FingerTree-measure.deepR"
d1040 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        Just v8 -> coe du534 v3 v4 v5 v6 v8
        Nothing -> let v8
                         = coe du1028 v0 erased v2 v3
                             (coe MAlonzo.Code.AlgebraStructures.C72 d438)
                             v6
                     in
                     case coe v8 of
                         C1010 v9 -> coe du626 v1 v3 v4
                                       (coe MAlonzo.Code.Class.Reduce.C1 (coe d170 erased)
                                          (coe d236 erased))
                                       v5
                         C1014 v9 v10 v11 -> case coe v10 of
                                                 C16 v12 v13 v14 -> coe du534 v3 v4 v5 v11
                                                                      (coe C32 v13 v14)
                                                 C18 v12 v13 v14 v15 -> coe du534 v3 v4 v5 v11
                                                                          (coe C34 v13 v14 v15)
                                                 _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1102 = "FingerTree-measure.Split"
d1102 a0 a1 a2 = ()

data T1102 a0 a1 a2 = C1110 a0 a1 a2
name1118 = "FingerTree-measure.toDigit"
d1118 v0 v1 v2 v3 = du1118 v3
du1118 v0
  = case coe v0 of
        C16 v1 v2 v3 -> coe C32 v2 v3
        C18 v1 v2 v3 v4 -> coe C34 v2 v3 v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1146 = "FingerTree-measure.splitDigit"
d1146 v0 v1 v2 v3 v4 v5 v6 v7 = du1146 v3 v4 v5 v6 v7
du1146 v0 v1 v2 v3 v4
  = case coe v4 of
        C30 v5 -> coe C1110 (coe Nothing) v5 (coe Nothing)
        C32 v5 v6 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                       (coe C1110 (coe Nothing) v5 (coe Just (coe C30 v6)))
                       (coe C1110 (coe Just (coe C30 v5)) v6 (coe Nothing))
        C34 v5 v6 v7 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                          (coe C1110 (coe Nothing) v5 (coe Just (coe C32 v6 v7)))
                          (coe MAlonzo.Code.Data.Bool.Base.du14
                             (coe v2
                                (coe MAlonzo.Code.AlgebraStructures.d34 v0 v3
                                   (coe MAlonzo.Code.AlgebraStructures.d70 v1 v5)))
                             (coe C1110 (coe Just (coe C30 v5)) v6 (coe Just (coe C30 v7)))
                             (coe C1110 (coe Just (coe C32 v5 v6)) v7 (coe Nothing)))
        C36 v5 v6 v7 v8 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                             (coe C1110 (coe Nothing) v5 (coe Just (coe C34 v6 v7 v8)))
                             (coe MAlonzo.Code.Data.Bool.Base.du14
                                (coe v2
                                   (coe MAlonzo.Code.AlgebraStructures.d34 v0 v3
                                      (coe MAlonzo.Code.AlgebraStructures.d70 v1 v5)))
                                (coe C1110 (coe Just (coe C30 v5)) v6 (coe Just (coe C32 v7 v8)))
                                (coe MAlonzo.Code.Data.Bool.Base.du14
                                   (coe v2
                                      (coe MAlonzo.Code.AlgebraStructures.d34 v0 v3
                                         (coe MAlonzo.Code.AlgebraStructures.d34 v0
                                            (coe MAlonzo.Code.AlgebraStructures.d70 v1 v5)
                                            (coe MAlonzo.Code.AlgebraStructures.d70 v1 v6))))
                                   (coe C1110 (coe Just (coe C32 v5 v6)) v7 (coe Just (coe C30 v8)))
                                   (coe C1110 (coe Just (coe C34 v5 v6 v7)) v8 (coe Nothing))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1190 = "FingerTree-measure.notEmpty"
d1190 a0 a1 a2 a3 = ()

data T1190 a0 a1 = C1200 a0 a1
name1218 = "FingerTree-measure.struct-lemma1"
d1218 = erased
name1242 = "FingerTree-measure.measure-lemma1"
d1242 = erased
name1256 = "FingerTree-measure.measure-lemma2"
d1256 = erased
name1278 = "FingerTree-measure.struct-lemma2"
d1278 = erased
name1290 = "FingerTree-measure.neq-bool-lemma0"
d1290 = erased
name1308 = "FingerTree-measure.struct-lemma3"
d1308 = erased
name1334 = "FingerTree-measure.splitTree1"
d1334 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1146 v3 v4 v5 v6 v7 in
      case coe v10 of
          C1110 v11 v12 v13 -> coe C1110
                                 (coe du626 v1 v3 v4
                                    (coe MAlonzo.Code.Class.Reduce.C1 (coe d216 erased)
                                       (coe d282 erased))
                                    v11)
                                 v12
                                 (coe du810 v0 v1 v2 v3 v4 v13 v8 v9)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name1350 = "FingerTree-measure.splitTree2"
d1350 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1146 v3 v4 v5 v6 v9 in
      case coe v10 of
          C1110 v11 v12 v13 -> coe C1110 (coe d1040 v0 v1 v2 v3 v4 v7 v8 v11)
                                 v12
                                 (coe du626 v1 v3 v4
                                    (coe MAlonzo.Code.Class.Reduce.C1 (coe d216 erased)
                                       (coe d282 erased))
                                    v13)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name1370 = "FingerTree-measure.splitTree3"
d1370 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = du1370 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
du1370 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10
          = coe d1410 v0 erased v2 v3
              (coe MAlonzo.Code.AlgebraStructures.C72 d438)
              v5
              (coe MAlonzo.Code.AlgebraStructures.d34 v3 v6 (coe du464 v3 v4 v7))
              v8
      in
      case coe v10 of
          Just v11 -> case coe v11 of
                          C1110 v12 v13 v14 -> let v15
                                                     = coe du1146 v3 v4 v5
                                                         (coe MAlonzo.Code.AlgebraStructures.d34 v3
                                                            v6
                                                            (coe MAlonzo.Code.AlgebraStructures.d34
                                                               v3
                                                               (coe du464 v3 v4 v7)
                                                               (coe du496 v3
                                                                  (coe
                                                                     MAlonzo.Code.AlgebraStructures.C72
                                                                     d438)
                                                                  v12)))
                                                         (coe du1118 v13)
                                                 in
                                                 case coe v15 of
                                                     C1110 v16 v17 v18 -> coe C1110
                                                                            (coe d1040 v0 v1 v2 v3
                                                                               v4
                                                                               v7
                                                                               v12
                                                                               v16)
                                                                            v17
                                                                            (coe du810 v0 v1 v2 v3
                                                                               v4
                                                                               v18
                                                                               v14
                                                                               v9)
                                                     _ -> coe MAlonzo.RTE.mazUnreachableError
                          _ -> coe MAlonzo.RTE.mazUnreachableError
          _ -> coe MAlonzo.RTE.mazUnreachableError
name1396 = "FingerTree-measure.splitTree4"
d1396 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13
  = du1396 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v12
du1396 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = case coe v10 of
        False -> case coe v11 of
                     False -> coe d1350 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
                     True -> coe du1370 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
                     _ -> coe MAlonzo.RTE.mazUnreachableError
        True -> coe d1334 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1410 = "FingerTree-measure.splitTree"
d1410 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        C56 v8 -> coe Nothing
        C60 v8 v9 -> coe Just
                       (coe C1110 (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14) v9
                          (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14))
        C64 v8 v9 v10 v11 v12 -> coe Just
                                   (coe du1396 v0 v1 v2 v3 v4 v5 v6 v10 v11 v12
                                      (coe du1696 v3 v4 v5 v6 v10)
                                      (coe du1698 v3 v4 v5 v6 v10 v11))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1428 = "FingerTree-measure.split-lemma4"
d1428
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure.split-lemma4"
name1446 = "FingerTree-measure.split-lemma5"
d1446 = erased
name1696 = "FingerTree-measure._.vpr"
d1696 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du1696 v3 v4 v5 v6 v8
du1696 v0 v1 v2 v3 v4
  = coe v2
      (coe MAlonzo.Code.AlgebraStructures.d34 v0 v3 (coe du464 v0 v1 v4))
name1698 = "FingerTree-measure._.vft"
d1698 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du1698 v3 v4 v5 v6 v8 v9
du1698 v0 v1 v2 v3 v4 v5
  = coe v2
      (coe MAlonzo.Code.AlgebraStructures.d34 v0
         (coe MAlonzo.Code.AlgebraStructures.d34 v0 v3 (coe du464 v0 v1 v4))
         (coe du496 v0 (coe MAlonzo.Code.AlgebraStructures.C72 d438) v5))
name1720 = "FingerTree-measure.cons-lemma0"
d1720 = erased
name1806 = "FingerTree-measure._==_"
d1806 a0 a1 a2 a3 a4 a5 a6 = ()

data T1806 a0 a1 a2 = C1826 a0 a1 a2
name1832 = "FingerTree-measure.tail"
d1832 v0
  = case coe v0 of
        [] -> coe []
        (:) v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1850 = "FingerTree-measure.toList-dig-lemma0"
d1850 = erased
name1888 = "FingerTree-measure.toList-lemma11"
d1888 = erased
name1964 = "FingerTree-measure.toList-lemma12"
d1964 = erased
name1982 = "FingerTree-measure.toList-lemma1"
d1982 = erased
name2298 = "FingerTree-measure.toList-lemma0"
d2298 = erased
name2314 = "FingerTree-measure.toList-dig-lemma1"
d2314 = erased
name2356 = "FingerTree-measure.toTree-lemma0"
d2356 v0 v1 v2 v3 v4 v5 = du2356 v1 v3 v4 v5
du2356 v0 v1 v2 v3
  = coe C1826
      (coe du626 v0 v1 v2
         (coe MAlonzo.Code.Class.Reduce.C1
            (\ v4 v5 v6 v7 v8 ->
               coe MAlonzo.Code.Data.List.Base.du144 v6 v8 v7)
            (\ v4 v5 ->
               coe MAlonzo.Code.Data.List.Base.d166 erased erased erased erased))
         (coe du696 v3))
      v3
      erased
name2372 = "FingerTree-measure.view-lemma3"
d2372 = erased
name2402 = "FingerTree-measure.view-lemma4"
d2402 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du2402 v0 v1 v2 v3 v4 v5
du2402 v0 v1 v2 v3 v4 v5
  = case coe v5 of
        C60 v6 v7 -> coe C1826
                       (coe C60 MAlonzo.Code.Agda.Builtin.Size.d14 v7)
                       (coe du552 v3 v4 v7 (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14))
                       erased
        C64 v6 v7 v8 v9 v10 -> coe C1826
                                 (coe du552 v3 v4 (coe d712 v8)
                                    (coe du810 v0 v1 v2 v3 v4 (coe d738 v8) v9 v10))
                                 (coe C64 MAlonzo.Code.Agda.Builtin.Size.d14 v7 v8 v9 v10)
                                 erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2424 = "FingerTree-measure.size-dig"
d2424 v0 v1 v2 = du2424 v2
du2424 v0 = coe MAlonzo.Code.Data.List.Base.du226 (coe d634 v0)
name2438 = "FingerTree-measure.size-ft"
d2438 v0 v1 v2 v3 v4 v5 = du2438 v5
du2438 v0 = coe MAlonzo.Code.Data.List.Base.du226 (coe du696 v0)
name2452 = "FingerTree-measure.size-view"
d2452 v0 v1 v2 v3 v4 v5 = du2452 v5
du2452 v0
  = case coe v0 of
        C778 v1 -> 0 :: Integer
        C782 v1 v2 v3 -> coe ((Prelude.+) :: Integer -> Integer -> Integer)
                           (1 :: Integer)
                           (coe du2438 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2462 = "FingerTree-measure.size-mbdig"
d2462 v0 v1 v2 = du2462 v2
du2462 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.List.Base.du226 (coe d634 v1)
        Nothing -> 0 :: Integer
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2480 = "FingerTree-measure.sym=="
d2480 v0 v1 v2 v3 v4 v5 v6 v7 = du2480 v5 v6 v7
du2480 v0 v1 v2
  = case coe v2 of
        C1826 v3 v4 v5 -> coe C1826 v1 v0 erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2500 = "FingerTree-measure.Acc"
d2500 a0 a1 a2 a3 a4 a5 = ()

data T2500 a0 a1 a2 a3 = C2518 a0 a1 a2 a3
                       | C2520 a0
name2532 = "FingerTree-measure._\8818_"
d2532 a0 a1 a2 a3 a4 a5 a6 = ()

data T2532 a0 a1 a2 = C2552 a0 a1 a2
name2554 = "FingerTree-measure.nat"
d2554
  = coe MAlonzo.Code.AlgebraStructures.C52 (0 :: Integer)
      ((Prelude.+) :: Integer -> Integer -> Integer)
      erased
      erased
      erased
name2556 = "FingerTree-measure.list"
d2556
  = coe MAlonzo.Code.AlgebraStructures.C52 (coe [])
      (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
      erased
      erased
      erased
name2560 = "FingerTree-measure.nat-measure"
d2560 v0 = du2560
du2560
  = coe MAlonzo.Code.AlgebraStructures.C72 (\ v0 -> 1 :: Integer)
name2564 = "FingerTree-measure.list-measure"
d2564
  = coe MAlonzo.Code.AlgebraStructures.C72
      (\ v0 -> coe (:) v0 (coe []))
name2568 = "FingerTree-measure.test-tree"
d2568
  = coe du552
      (coe MAlonzo.Code.AlgebraStructures.C52 (coe [])
         (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
         erased
         erased
         erased)
      (coe MAlonzo.Code.AlgebraStructures.C72
         (\ v0 -> coe (:) v0 (coe [])))
      (1 :: Integer)
      (coe du552
         (coe MAlonzo.Code.AlgebraStructures.C52 (coe [])
            (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C72
            (\ v0 -> coe (:) v0 (coe [])))
         (2 :: Integer)
         (coe du552
            (coe MAlonzo.Code.AlgebraStructures.C52 (coe [])
               (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
               erased
               erased
               erased)
            (coe MAlonzo.Code.AlgebraStructures.C72
               (\ v0 -> coe (:) v0 (coe [])))
            (3 :: Integer)
            (coe du552
               (coe MAlonzo.Code.AlgebraStructures.C52 (coe [])
                  (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                  erased
                  erased
                  erased)
               (coe MAlonzo.Code.AlgebraStructures.C72
                  (\ v0 -> coe (:) v0 (coe [])))
               (4 :: Integer)
               (coe du552
                  (coe MAlonzo.Code.AlgebraStructures.C52 (coe [])
                     (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                     erased
                     erased
                     erased)
                  (coe MAlonzo.Code.AlgebraStructures.C72
                     (\ v0 -> coe (:) v0 (coe [])))
                  (5 :: Integer)
                  (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)))))
name2570 = "FingerTree-measure.test-tree2"
d2570
  = coe du552
      (coe MAlonzo.Code.AlgebraStructures.C52 (0 :: Integer)
         ((Prelude.+) :: Integer -> Integer -> Integer)
         erased
         erased
         erased)
      (coe MAlonzo.Code.AlgebraStructures.C72 (\ v0 -> 1 :: Integer))
      (1 :: Integer)
      (coe du552
         (coe MAlonzo.Code.AlgebraStructures.C52 (0 :: Integer)
            ((Prelude.+) :: Integer -> Integer -> Integer)
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C72 (\ v0 -> 1 :: Integer))
         (2 :: Integer)
         (coe du552
            (coe MAlonzo.Code.AlgebraStructures.C52 (0 :: Integer)
               ((Prelude.+) :: Integer -> Integer -> Integer)
               erased
               erased
               erased)
            (coe MAlonzo.Code.AlgebraStructures.C72 (\ v0 -> 1 :: Integer))
            (3 :: Integer)
            (coe du552
               (coe MAlonzo.Code.AlgebraStructures.C52 (0 :: Integer)
                  ((Prelude.+) :: Integer -> Integer -> Integer)
                  erased
                  erased
                  erased)
               (coe MAlonzo.Code.AlgebraStructures.C72 (\ v0 -> 1 :: Integer))
               (4 :: Integer)
               (coe du552
                  (coe MAlonzo.Code.AlgebraStructures.C52 (0 :: Integer)
                     ((Prelude.+) :: Integer -> Integer -> Integer)
                     erased
                     erased
                     erased)
                  (coe MAlonzo.Code.AlgebraStructures.C72 (\ v0 -> 1 :: Integer))
                  (5 :: Integer)
                  (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)))))
name9275 = "FingerTree-measure..absurdlambda"
d9275 = erased