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
d68 v0 = coe MAlonzo.Code.AlgebraStructures.d74 v0
name74 = "FingerTree-measure._._\8729_"
d74 v0 = coe MAlonzo.Code.AlgebraStructures.d36 v0
name76 = "FingerTree-measure._._\8818_"
d76 = erased
name78 = "FingerTree-measure._.\949"
d78 v0 = coe MAlonzo.Code.AlgebraStructures.d34 v0
name80 = "FingerTree-measure._.\949-left"
d80 = erased
name82 = "FingerTree-measure._.\949-right"
d82 = erased
name84 = "FingerTree-measure._.\8729-assoc"
d84 = erased
name98 = "FingerTree-measure.reducer-node"
d98 v0 v1 v2 v3 v4 v5 v6 = du98 v4 v5 v6
du98 v0 v1 v2
  = case coe v1 of
        C16 v3 v4 v5 -> coe v0 v4 (coe v0 v5 v2)
        C18 v3 v4 v5 v6 -> coe v0 v4 (coe v0 v5 (coe v0 v6 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name132 = "FingerTree-measure.reducel-node"
d132 v0 v1 v2 v3 v4 v5 v6 = du132 v4 v5 v6
du132 v0 v1 v2
  = case coe v2 of
        C16 v3 v4 v5 -> coe v0 (coe v0 v1 v4) v5
        C18 v3 v4 v5 v6 -> coe v0 (coe v0 (coe v0 v1 v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name162 = "FingerTree-measure.reduceinstance-node"
d162 v0 v1 = du162
du162
  = coe MAlonzo.Code.Class.Reduce.C1
      (\ v0 -> coe d98 erased erased erased)
      (\ v0 -> coe d132 erased erased erased)
name172 = "FingerTree-measure.reducer-digit"
d172 v0 v1 v2 v3 v4 v5 = du172 v3 v4 v5
du172 v0 v1 v2
  = case coe v1 of
        C30 v3 -> coe v0 v3 v2
        C32 v3 v4 -> coe v0 v3 (coe v0 v4 v2)
        C34 v3 v4 v5 -> coe v0 v3 (coe v0 v4 (coe v0 v5 v2))
        C36 v3 v4 v5 v6 -> coe v0 v3 (coe v0 v4 (coe v0 v5 (coe v0 v6 v2)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name218 = "FingerTree-measure.reducer-maybe-digit"
d218 v0 v1 v2 v3 v4 v5 = du218 v3 v4 v5
du218 v0 v1 v2
  = case coe v1 of
        Just v3 -> coe du172 v0 v3 v2
        Nothing -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name238 = "FingerTree-measure.reducel-digit"
d238 v0 v1 v2 v3 v4 v5 = du238 v3 v4 v5
du238 v0 v1 v2
  = case coe v2 of
        C30 v3 -> coe v0 v1 v3
        C32 v3 v4 -> coe v0 (coe v0 v1 v3) v4
        C34 v3 v4 v5 -> coe v0 (coe v0 (coe v0 v1 v3) v4) v5
        C36 v3 v4 v5 v6 -> coe v0 (coe v0 (coe v0 (coe v0 v1 v3) v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name284 = "FingerTree-measure.reducel-maybe-digit"
d284 v0 v1 v2 v3 v4 v5 = du284 v3 v4 v5
du284 v0 v1 v2
  = case coe v2 of
        Just v3 -> coe du238 v0 v1 v3
        Nothing -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name298 = "FingerTree-measure.reduceinstance-digit"
d298 v0 = du298
du298
  = coe MAlonzo.Code.Class.Reduce.C1 (coe d172 erased)
      (coe d238 erased)
name304 = "FingerTree-measure.reduceinstance-maybe-digit"
d304 v0 = du304
du304
  = coe MAlonzo.Code.Class.Reduce.C1 (coe d218 erased)
      (coe d284 erased)
name316 = "FingerTree-measure.reducer-ft"
d316 v0 v1 v2 v3 v4 v5 v6 = du316 v4 v5 v6
du316 v0 v1 v2
  = case coe v1 of
        C56 v3 -> coe v2
        C60 v3 v4 -> coe v0 v4 v2
        C64 v3 v4 v5 v6 v7 -> coe du346 v0 v5
                                (coe du316 (coe d98 erased erased erased erased v0) v6
                                   (coe du346 v0 v7 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name346 = "FingerTree-measure._.fd"
d346 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du346 v4
du346 v0 = coe d172 erased erased erased v0
name360 = "FingerTree-measure.reducel-ft"
d360 v0 v1 v2 v3 v4 v5 v6 = du360 v4 v5 v6
du360 v0 v1 v2
  = case coe v2 of
        C56 v3 -> coe v1
        C60 v3 v4 -> coe v0 v1 v4
        C64 v3 v4 v5 v6 v7 -> coe du390 v0
                                (coe du360 (coe d132 erased erased erased erased v0)
                                   (coe du390 v0 v1 v5)
                                   v6)
                                v7
        _ -> coe MAlonzo.RTE.mazUnreachableError
name390 = "FingerTree-measure._.fd"
d390 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du390 v4
du390 v0 = coe d238 erased erased erased v0
name398 = "FingerTree-measure.reduceinstance-ft"
d398 v0 v1 = du398
du398
  = coe MAlonzo.Code.Class.Reduce.C1
      (\ v0 -> coe d316 erased erased erased)
      (\ v0 -> coe d360 erased erased erased)
name410 = "FingerTree-measure.node2"
d410 v0 v1 v2 v3 v4 v5 v6 = du410 v3 v4 v5 v6
du410 v0 v1 v2 v3
  = coe C16
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3))
      v2
      v3
name426 = "FingerTree-measure.node3"
d426 v0 v1 v2 v3 v4 v5 v6 v7 = du426 v3 v4 v5 v6 v7
du426 v0 v1 v2 v3 v4
  = coe C18
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d36 v0
            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)))
      v2
      v3
      v4
name440 = "FingerTree-measure.measure-node"
d440 v0
  = case coe v0 of
        C16 v1 v2 v3 -> coe v1
        C18 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name466 = "FingerTree-measure.measure-digit"
d466 v0 v1 v2 v3 v4 v5 = du466 v3 v4 v5
du466 v0 v1 v2
  = case coe v2 of
        C30 v3 -> coe MAlonzo.Code.AlgebraStructures.d74 v1 v3
        C32 v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                       (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                       (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
        C34 v3 v4 v5 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                          (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                          (coe MAlonzo.Code.AlgebraStructures.d36 v0
                             (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
                             (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5))
        C36 v3 v4 v5 v6 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                             (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                             (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
                                (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name498 = "FingerTree-measure.measure-tree"
d498 v0 v1 v2 v3 v4 v5 = du498 v3 v4 v5
du498 v0 v1 v2
  = case coe v2 of
        C56 v3 -> coe MAlonzo.Code.AlgebraStructures.d34 v0
        C60 v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d74 v1 v4
        C64 v3 v4 v5 v6 v7 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name518 = "FingerTree-measure.uplift"
d518 v0 v1 v2 v3 = du518
du518 = coe MAlonzo.Code.AlgebraStructures.C76 d440
name536 = "FingerTree-measure.deep"
d536 v0 v1 v2 v3 v4 v5 v6 v7 = du536 v3 v4 v5 v6 v7
du536 v0 v1 v2 v3 v4
  = coe C64 MAlonzo.Code.Agda.Builtin.Size.d14
      (coe MAlonzo.Code.AlgebraStructures.d36 v0 (coe du466 v0 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d36 v0
            (coe du498 v0 (coe MAlonzo.Code.AlgebraStructures.C76 d440) v3)
            (coe du466 v0 v1 v4)))
      v2
      v3
      v4
name554 = "FingerTree-measure._\9665_"
d554 v0 v1 v2 v3 v4 v5 v6 = du554 v3 v4 v5 v6
du554 v0 v1 v2 v3
  = case coe v3 of
        C56 v4 -> coe C60 MAlonzo.Code.Agda.Builtin.Size.d14 v2
        C60 v4 v5 -> coe du536 v0 v1 (coe C30 v2)
                       (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
                       (coe C30 v5)
        C64 v4 v5 v6 v7 v8 -> case coe v6 of
                                  C30 v9 -> coe du536 v0 v1 (coe C32 v2 v9) v7 v8
                                  C32 v9 v10 -> coe du536 v0 v1 (coe C34 v2 v9 v10) v7 v8
                                  C34 v9 v10 v11 -> coe du536 v0 v1 (coe C36 v2 v9 v10 v11) v7 v8
                                  C36 v9 v10 v11 v12 -> coe du536 v0 v1 (coe C32 v2 v9)
                                                          (coe du554 v0
                                                             (coe MAlonzo.Code.AlgebraStructures.C76
                                                                d440)
                                                             (coe du426 v0 v1 v10 v11 v12)
                                                             v7)
                                                          v8
                                  _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name628 = "FingerTree-measure.toTree"
d628 v0 v1 v2 v3 v4 v5 v6 v7 = du628 v1 v3 v4 v6 v7
du628 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Class.Reduce.d30 v3 v0 erased
      (coe d554 erased erased erased v1 v2)
      v4
      (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
name636 = "FingerTree-measure.toList-dig"
d636 v0
  = case coe v0 of
        C30 v1 -> coe (:) v1 (coe [])
        C32 v1 v2 -> coe (:) v1 (coe (:) v2 (coe []))
        C34 v1 v2 v3 -> coe (:) v1 (coe (:) v2 (coe (:) v3 (coe [])))
        C36 v1 v2 v3 v4 -> coe (:) v1
                             (coe (:) v2 (coe (:) v3 (coe (:) v4 (coe []))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name664 = "FingerTree-measure.toList-node"
d664 v0
  = case coe v0 of
        C16 v1 v2 v3 -> coe (:) v2 (coe (:) v3 (coe []))
        C18 v1 v2 v3 v4 -> coe (:) v2 (coe (:) v3 (coe (:) v4 (coe [])))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name686 = "FingerTree-measure.flatten-list"
d686 v0 v1 v2 v3 = du686 v3
du686 v0
  = case coe v0 of
        [] -> coe []
        (:) v1 v2 -> coe MAlonzo.Code.Data.List.Base.du18 (coe d664 v1)
                       (coe du686 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name698 = "FingerTree-measure.toList-ft"
d698 v0 v1 v2 v3 = du698 v3
du698 v0
  = case coe v0 of
        C56 v1 -> coe []
        C60 v1 v2 -> coe (:) v2 (coe [])
        C64 v1 v2 v3 v4 v5 -> coe MAlonzo.Code.Data.List.Base.du18
                                (coe d636 v3)
                                (coe MAlonzo.Code.Data.List.Base.du18 (coe du686 (coe du698 v4))
                                   (coe d636 v5))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name714 = "FingerTree-measure.head-dig"
d714 v0
  = case coe v0 of
        C30 v1 -> coe v1
        C32 v1 v2 -> coe v1
        C34 v1 v2 v3 -> coe v1
        C36 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name740 = "FingerTree-measure.tail-dig"
d740 v0
  = case coe v0 of
        C30 v1 -> coe Nothing
        C32 v1 v2 -> coe Just (coe C30 v2)
        C34 v1 v2 v3 -> coe Just (coe C32 v2 v3)
        C36 v1 v2 v3 v4 -> coe Just (coe C34 v2 v3 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name768 = "FingerTree-measure.ViewL"
d768 a0 a1 a2 a3 = ()

data T768 a0 a1 a2 = C780 a0
                   | C784 a0 a1 a2
name798 = "FingerTree-measure.viewL"
d798 v0 v1 v2 v3 v4 v5 v6 = du798 v0 v2 v3 v4 v5 v6
du798 v0 v1 v2 v3 v4 v5
  = case coe v5 of
        C56 v6 -> coe C780 (coe MAlonzo.Code.Agda.Builtin.Size.d12 v6)
        C60 v6 v7 -> coe C784 v6 v7
                       (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
        C64 v6 v7 v8 v9 v10 -> coe C784 v6 (coe d714 v8)
                                 (coe du812 v0 v1 v2 v3 v4 (coe d740 v8) v9 v10)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name812 = "FingerTree-measure.deepL"
d812 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du812 v0 v2 v3 v4 v5 v6 v7 v8
du812 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v5 of
        Just v8 -> coe du536 v3 v4 v8 v6 v7
        Nothing -> let v8
                         = coe du798 v0 erased v2 v3
                             (coe MAlonzo.Code.AlgebraStructures.C76 d440)
                             v6
                     in
                     case coe v8 of
                         C780 v9 -> coe du628 v1 v3 v4
                                      (coe MAlonzo.Code.Class.Reduce.C1 (coe d172 erased)
                                         (coe d238 erased))
                                      v7
                         C784 v9 v10 v11 -> case coe v10 of
                                                C16 v12 v13 v14 -> coe du536 v3 v4 (coe C32 v13 v14)
                                                                     v11
                                                                     v7
                                                C18 v12 v13 v14 v15 -> coe du536 v3 v4
                                                                         (coe C34 v13 v14 v15)
                                                                         v11
                                                                         v7
                                                _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name824 = "FingerTree-measure.isEmpty"
d824 v0 v1 v2 v3 v4 v5
  = let v6 = coe du798 v0 v1 v2 v3 v4 v5 in
      case coe v6 of
          C780 v7 -> coe True
          C784 v7 v8 v9 -> coe False
          _ -> coe MAlonzo.RTE.mazUnreachableError
name836 = "FingerTree-measure.headL"
d836 v0 v1 v2 v3 v4 v5
  = let v6 = coe du798 v0 v1 v2 v3 v4 v5 in
      case coe v6 of
          C780 v7 -> coe Nothing
          C784 v7 v8 v9 -> coe Just v8
          _ -> coe MAlonzo.RTE.mazUnreachableError
name848 = "FingerTree-measure.tailL"
d848 v0 v1 v2 v3 v4 v5
  = let v6 = coe du798 v0 v1 v2 v3 v4 v5 in
      case coe v6 of
          C780 v7 -> coe Nothing
          C784 v7 v8 v9 -> coe Just v9
          _ -> coe MAlonzo.RTE.mazUnreachableError
name944 = "FingerTree-measure.headr-dig"
d944 v0
  = case coe v0 of
        C30 v1 -> coe v1
        C32 v1 v2 -> coe v2
        C34 v1 v2 v3 -> coe v3
        C36 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name970 = "FingerTree-measure.tailr-dig"
d970 v0
  = case coe v0 of
        C30 v1 -> coe Nothing
        C32 v1 v2 -> coe Just (coe C30 v1)
        C34 v1 v2 v3 -> coe Just (coe C32 v1 v2)
        C36 v1 v2 v3 v4 -> coe Just (coe C34 v1 v2 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1000 = "FingerTree-measure.ViewR"
d1000 a0 a1 a2 a3 = ()

data T1000 a0 a1 a2 = C1012 a0
                    | C1016 a0 a1 a2
name1030 = "FingerTree-measure.viewR"
d1030 v0 v1 v2 v3 v4 v5 v6 = du1030 v0 v2 v3 v4 v5 v6
du1030 v0 v1 v2 v3 v4 v5
  = case coe v5 of
        C56 v6 -> coe C1012 (coe MAlonzo.Code.Agda.Builtin.Size.d12 v6)
        C60 v6 v7 -> coe C1016 v6 v7
                       (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14)
        C64 v6 v7 v8 v9 v10 -> coe C1016 v6 (coe d944 v10)
                                 (coe d1042 v0 v1 v2 v3 v4 v8 v9 (coe d970 v10))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1042 = "FingerTree-measure.deepR"
d1042 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        Just v8 -> coe du536 v3 v4 v5 v6 v8
        Nothing -> let v8
                         = coe du1030 v0 erased v2 v3
                             (coe MAlonzo.Code.AlgebraStructures.C76 d440)
                             v6
                     in
                     case coe v8 of
                         C1012 v9 -> coe du628 v1 v3 v4
                                       (coe MAlonzo.Code.Class.Reduce.C1 (coe d172 erased)
                                          (coe d238 erased))
                                       v5
                         C1016 v9 v10 v11 -> case coe v10 of
                                                 C16 v12 v13 v14 -> coe du536 v3 v4 v5 v11
                                                                      (coe C32 v13 v14)
                                                 C18 v12 v13 v14 v15 -> coe du536 v3 v4 v5 v11
                                                                          (coe C34 v13 v14 v15)
                                                 _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1104 = "FingerTree-measure.Split"
d1104 a0 a1 a2 = ()

data T1104 a0 a1 a2 = C1112 a0 a1 a2
name1120 = "FingerTree-measure.toDigit"
d1120 v0 v1 v2 v3 = du1120 v3
du1120 v0
  = case coe v0 of
        C16 v1 v2 v3 -> coe C32 v2 v3
        C18 v1 v2 v3 v4 -> coe C34 v2 v3 v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1148 = "FingerTree-measure.splitDigit"
d1148 v0 v1 v2 v3 v4 v5 v6 v7 = du1148 v3 v4 v5 v6 v7
du1148 v0 v1 v2 v3 v4
  = case coe v4 of
        C30 v5 -> coe C1112 (coe Nothing) v5 (coe Nothing)
        C32 v5 v6 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                       (coe C1112 (coe Nothing) v5 (coe Just (coe C30 v6)))
                       (coe C1112 (coe Just (coe C30 v5)) v6 (coe Nothing))
        C34 v5 v6 v7 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                          (coe C1112 (coe Nothing) v5 (coe Just (coe C32 v6 v7)))
                          (coe MAlonzo.Code.Data.Bool.Base.du14
                             (coe v2
                                (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                             (coe C1112 (coe Just (coe C30 v5)) v6 (coe Just (coe C30 v7)))
                             (coe C1112 (coe Just (coe C32 v5 v6)) v7 (coe Nothing)))
        C36 v5 v6 v7 v8 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                             (coe C1112 (coe Nothing) v5 (coe Just (coe C34 v6 v7 v8)))
                             (coe MAlonzo.Code.Data.Bool.Base.du14
                                (coe v2
                                   (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                      (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                                (coe C1112 (coe Just (coe C30 v5)) v6 (coe Just (coe C32 v7 v8)))
                                (coe MAlonzo.Code.Data.Bool.Base.du14
                                   (coe v2
                                      (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                         (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6))))
                                   (coe C1112 (coe Just (coe C32 v5 v6)) v7 (coe Just (coe C30 v8)))
                                   (coe C1112 (coe Just (coe C34 v5 v6 v7)) v8 (coe Nothing))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1192 = "FingerTree-measure.notEmpty"
d1192 a0 a1 a2 a3 = ()

data T1192 a0 a1 = C1202 a0 a1
name1220 = "FingerTree-measure.struct-lemma1"
d1220 = erased
name1244 = "FingerTree-measure.measure-lemma1"
d1244 = erased
name1258 = "FingerTree-measure.measure-lemma2"
d1258 = erased
name1280 = "FingerTree-measure.struct-lemma2"
d1280 = erased
name1292 = "FingerTree-measure.neq-bool-lemma0"
d1292 = erased
name1310 = "FingerTree-measure.struct-lemma3"
d1310 = erased
name1336 = "FingerTree-measure.splitTree1"
d1336 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1148 v3 v4 v5 v6 v7 in
      case coe v10 of
          C1112 v11 v12 v13 -> coe C1112
                                 (coe du628 v1 v3 v4
                                    (coe MAlonzo.Code.Class.Reduce.C1 (coe d218 erased)
                                       (coe d284 erased))
                                    v11)
                                 v12
                                 (coe du812 v0 v1 v2 v3 v4 v13 v8 v9)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name1352 = "FingerTree-measure.splitTree2"
d1352 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1148 v3 v4 v5 v6 v9 in
      case coe v10 of
          C1112 v11 v12 v13 -> coe C1112 (coe d1042 v0 v1 v2 v3 v4 v7 v8 v11)
                                 v12
                                 (coe du628 v1 v3 v4
                                    (coe MAlonzo.Code.Class.Reduce.C1 (coe d218 erased)
                                       (coe d284 erased))
                                    v13)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name1372 = "FingerTree-measure.splitTree3"
d1372 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = du1372 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
du1372 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10
          = coe d1412 v0 erased v2 v3
              (coe MAlonzo.Code.AlgebraStructures.C76 d440)
              v5
              (coe MAlonzo.Code.AlgebraStructures.d36 v3 v6 (coe du466 v3 v4 v7))
              v8
      in
      case coe v10 of
          Just v11 -> case coe v11 of
                          C1112 v12 v13 v14 -> let v15
                                                     = coe du1148 v3 v4 v5
                                                         (coe MAlonzo.Code.AlgebraStructures.d36 v3
                                                            v6
                                                            (coe MAlonzo.Code.AlgebraStructures.d36
                                                               v3
                                                               (coe du466 v3 v4 v7)
                                                               (coe du498 v3
                                                                  (coe
                                                                     MAlonzo.Code.AlgebraStructures.C76
                                                                     d440)
                                                                  v12)))
                                                         (coe du1120 v13)
                                                 in
                                                 case coe v15 of
                                                     C1112 v16 v17 v18 -> coe C1112
                                                                            (coe d1042 v0 v1 v2 v3
                                                                               v4
                                                                               v7
                                                                               v12
                                                                               v16)
                                                                            v17
                                                                            (coe du812 v0 v1 v2 v3
                                                                               v4
                                                                               v18
                                                                               v14
                                                                               v9)
                                                     _ -> coe MAlonzo.RTE.mazUnreachableError
                          _ -> coe MAlonzo.RTE.mazUnreachableError
          _ -> coe MAlonzo.RTE.mazUnreachableError
name1398 = "FingerTree-measure.splitTree4"
d1398 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13
  = du1398 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v12
du1398 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = case coe v10 of
        False -> case coe v11 of
                     False -> coe d1352 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
                     True -> coe du1372 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
                     _ -> coe MAlonzo.RTE.mazUnreachableError
        True -> coe d1336 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1412 = "FingerTree-measure.splitTree"
d1412 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        C56 v8 -> coe Nothing
        C60 v8 v9 -> coe Just
                       (coe C1112 (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14) v9
                          (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14))
        C64 v8 v9 v10 v11 v12 -> coe Just
                                   (coe du1398 v0 v1 v2 v3 v4 v5 v6 v10 v11 v12
                                      (coe du1698 v3 v4 v5 v6 v10)
                                      (coe du1700 v3 v4 v5 v6 v10 v11))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1430 = "FingerTree-measure.split-lemma4"
d1430
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure.split-lemma4"
name1448 = "FingerTree-measure.split-lemma5"
d1448 = erased
name1698 = "FingerTree-measure._.vpr"
d1698 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du1698 v3 v4 v5 v6 v8
du1698 v0 v1 v2 v3 v4
  = coe v2
      (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3 (coe du466 v0 v1 v4))
name1700 = "FingerTree-measure._.vft"
d1700 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du1700 v3 v4 v5 v6 v8 v9
du1700 v0 v1 v2 v3 v4 v5
  = coe v2
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3 (coe du466 v0 v1 v4))
         (coe du498 v0 (coe MAlonzo.Code.AlgebraStructures.C76 d440) v5))
name1722 = "FingerTree-measure.cons-lemma0"
d1722 = erased
name1808 = "FingerTree-measure._==_"
d1808 a0 a1 a2 a3 a4 a5 a6 = ()

data T1808 a0 a1 a2 = C1828 a0 a1 a2
name1834 = "FingerTree-measure.tail"
d1834 v0
  = case coe v0 of
        [] -> coe []
        (:) v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1852 = "FingerTree-measure.toList-dig-lemma0"
d1852 = erased
name1890 = "FingerTree-measure.toList-lemma11"
d1890 = erased
name1966 = "FingerTree-measure.toList-lemma12"
d1966 = erased
name1984 = "FingerTree-measure.toList-lemma1"
d1984 = erased
name2300 = "FingerTree-measure.toList-lemma0"
d2300 = erased
name2316 = "FingerTree-measure.toList-dig-lemma1"
d2316 = erased
name2358 = "FingerTree-measure.toTree-lemma0"
d2358 v0 v1 v2 v3 v4 v5 = du2358 v1 v3 v4 v5
du2358 v0 v1 v2 v3
  = coe C1828
      (coe du628 v0 v1 v2
         (coe MAlonzo.Code.Class.Reduce.C1
            (\ v4 v5 v6 v7 v8 ->
               coe MAlonzo.Code.Data.List.Base.du144 v6 v8 v7)
            (\ v4 v5 ->
               coe MAlonzo.Code.Data.List.Base.d166 erased erased erased erased))
         (coe du698 v3))
      v3
      erased
name2372 = "FingerTree-measure.measureList"
d2372 v0 v1 v2 v3 v4 v5 = du2372 v3 v4 v5
du2372 v0 v1 v2
  = coe MAlonzo.Code.Data.List.Base.du144
      (\ v3 ->
         coe MAlonzo.Code.AlgebraStructures.d36 v0
           (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3))
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      v2
name2392 = "FingerTree-measure.view-lemma3"
d2392 = erased
name2422 = "FingerTree-measure.view-lemma4"
d2422 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du2422 v0 v1 v2 v3 v4 v5
du2422 v0 v1 v2 v3 v4 v5
  = case coe v5 of
        C60 v6 v7 -> coe C1828
                       (coe C60 MAlonzo.Code.Agda.Builtin.Size.d14 v7)
                       (coe du554 v3 v4 v7 (coe C56 MAlonzo.Code.Agda.Builtin.Size.d14))
                       erased
        C64 v6 v7 v8 v9 v10 -> coe C1828
                                 (coe du554 v3 v4 (coe d714 v8)
                                    (coe du812 v0 v1 v2 v3 v4 (coe d740 v8) v9 v10))
                                 (coe C64 MAlonzo.Code.Agda.Builtin.Size.d14 v7 v8 v9 v10)
                                 erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2454 = "FingerTree-measure.measure-lemma5"
d2454
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure.measure-lemma5"
name2468 = "FingerTree-measure.toTree-measure-lemma0"
d2468 = erased
name2482 = "FingerTree-measure.size-dig"
d2482 v0 v1 v2 = du2482 v2
du2482 v0 = coe MAlonzo.Code.Data.List.Base.du226 (coe d636 v0)
name2496 = "FingerTree-measure.size-ft"
d2496 v0 v1 v2 v3 v4 v5 = du2496 v5
du2496 v0 = coe MAlonzo.Code.Data.List.Base.du226 (coe du698 v0)
name2510 = "FingerTree-measure.size-view"
d2510 v0 v1 v2 v3 v4 v5 = du2510 v5
du2510 v0
  = case coe v0 of
        C780 v1 -> 0 :: Integer
        C784 v1 v2 v3 -> coe ((Prelude.+) :: Integer -> Integer -> Integer)
                           (1 :: Integer)
                           (coe du2496 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2520 = "FingerTree-measure.size-mbdig"
d2520 v0 v1 v2 = du2520 v2
du2520 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.List.Base.du226 (coe d636 v1)
        Nothing -> 0 :: Integer
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2538 = "FingerTree-measure.sym=="
d2538 v0 v1 v2 v3 v4 v5 v6 v7 = du2538 v5 v6 v7
du2538 v0 v1 v2
  = case coe v2 of
        C1828 v3 v4 v5 -> coe C1828 v1 v0 erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name9275 = "FingerTree-measure..absurdlambda"
d9275 = erased