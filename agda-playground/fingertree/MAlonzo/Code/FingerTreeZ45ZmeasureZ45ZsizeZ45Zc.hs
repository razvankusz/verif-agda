{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Class.Reduce
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.Bool.Base
import qualified MAlonzo.Code.Data.Empty
import qualified MAlonzo.Code.Data.Fin
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Unit
import qualified MAlonzo.Code.DependentPair
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.MonoidSolver
import qualified MAlonzo.Code.Relation.Binary.HeterogeneousEquality
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Relation.Nullary.Negation
import qualified MAlonzo.Code.Size
import qualified MAlonzo.Code.QlistZ45ZfoldZ45Zproof
import qualified MAlonzo.Code.Qnumbers
name4 = "FingerTree-measure-size-c._.\8741_\8741"
d4 v0 = coe MAlonzo.Code.AlgebraStructures.d74 v0
name10 = "FingerTree-measure-size-c._._\8729_"
d10 v0 = coe MAlonzo.Code.AlgebraStructures.d36 v0
name12 = "FingerTree-measure-size-c._._\8818_"
d12 = erased
name14 = "FingerTree-measure-size-c._.\949"
d14 v0 = coe MAlonzo.Code.AlgebraStructures.d34 v0
name16 = "FingerTree-measure-size-c._.\949-left"
d16 = erased
name18 = "FingerTree-measure-size-c._.\949-right"
d18 = erased
name20 = "FingerTree-measure-size-c._.\8729-assoc"
d20 = erased
name34 = "FingerTree-measure-size-c.Node"
d34 a0 a1 a2 a3 a4 = ()

data T34 a0 a1 a2 a3 a4 = C52 a0 a1 a2 a3
                        | C62 a0 a1 a2 a3 a4
name68 = "FingerTree-measure-size-c.Digit"
d68 a0 a1 = ()

data T68 a0 a1 a2 a3 = C74 a0
                     | C76 a0 a1
                     | C78 a0 a1 a2
                     | C80 a0 a1 a2 a3
name92 = "FingerTree-measure-size-c.measure-node"
d92 v0
  = case coe v0 of
        C52 v1 v2 v3 v4 -> coe v1
        C62 v1 v2 v3 v4 v5 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name122 = "FingerTree-measure-size-c.measure-digit"
d122 v0 v1 v2 v3 v4 v5 = du122 v3 v4 v5
du122 v0 v1 v2
  = case coe v2 of
        C74 v3 -> coe MAlonzo.Code.AlgebraStructures.d74 v1 v3
        C76 v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                       (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                       (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
        C78 v3 v4 v5 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                          (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                          (coe MAlonzo.Code.AlgebraStructures.d36 v0
                             (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
                             (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5))
        C80 v3 v4 v5 v6 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                             (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                             (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
                                (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name158 = "FingerTree-measure-size-c.measure-maybe-digit"
d158 v0 v1 v2 v3 v4 v5 = du158 v3 v4 v5
du158 v0 v1 v2
  = case coe v2 of
        Just v3 -> coe du122 v0 v1 v3
        Nothing -> coe MAlonzo.Code.AlgebraStructures.d34 v0
        _ -> coe MAlonzo.RTE.mazUnreachableError
name172 = "FingerTree-measure-size-c.uplift"
d172 v0 v1 v2 v3 v4 = du172
du172 = coe MAlonzo.Code.AlgebraStructures.C76 d92
name184 = "FingerTree-measure-size-c.FingerTree"
d184 a0 a1 a2 a3 a4 a5 = ()

data T184 a0 a1 a2 a3 = C198
                      | C202 a0
                      | C210 a0 a1 a2 a3
name222 = "FingerTree-measure-size-c.node2"
d222 v0 v1 v2 v3 v4 v5 v6 = du222 v3 v4 v5 v6
du222 v0 v1 v2 v3
  = coe C52
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3))
      v2
      v3
      erased
name238 = "FingerTree-measure-size-c.node3"
d238 v0 v1 v2 v3 v4 v5 v6 v7 = du238 v3 v4 v5 v6 v7
du238 v0 v1 v2 v3 v4
  = coe C62
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v2)
         (coe MAlonzo.Code.AlgebraStructures.d36 v0
            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)))
      v2
      v3
      v4
      erased
name258 = "FingerTree-measure-size-c.measure-tree"
d258 v0 v1 v2 v3 v4 v5 v6 = du258 v3
du258 v0 = coe v0
name278 = "FingerTree-measure-size-c.measure-lemma0"
d278 = erased
name298 = "FingerTree-measure-size-c.measure-lemma1"
d298 = erased
name320 = "FingerTree-measure-size-c.assoc-lemma1"
d320 = erased
name352 = "FingerTree-measure-size-c.assoc-lemma2"
d352 = erased
name386 = "FingerTree-measure-size-c._\9665_"
d386 v0 v1 v2 v3 v4 v5 v6 v7 = du386 v3 v4 v6 v7
du386 v0 v1 v2 v3
  = case coe v3 of
        C198 -> coe C202 v2
        C202 v4 -> coe C210 (coe MAlonzo.Code.AlgebraStructures.d34 v0)
                     (coe C74 v2)
                     (coe C198)
                     (coe C74 v4)
        C210 v4 v5 v6 v7 -> case coe v5 of
                                C74 v8 -> coe C210 v4 (coe C76 v2 v8) v6 v7
                                C76 v8 v9 -> coe C210 v4 (coe C78 v2 v8 v9) v6 v7
                                C78 v8 v9 v10 -> coe C210 v4 (coe C80 v2 v8 v9 v10) v6 v7
                                C80 v8 v9 v10 v11 -> coe C210
                                                       (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                                          (coe d92 (coe du238 v0 v1 v9 v10 v11))
                                                          v4)
                                                       (coe C76 v2 v8)
                                                       (coe du386 v0
                                                          (coe MAlonzo.Code.AlgebraStructures.C76
                                                             d92)
                                                          (coe du238 v0 v1 v9 v10 v11)
                                                          v6)
                                                       v7
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name480 = "FingerTree-measure-size-c.list-measure1"
d480
  = coe MAlonzo.Code.AlgebraStructures.C76
      (\ v0 -> coe (:) v0 (coe []))
name484 = "FingerTree-measure-size-c.list-monoid1"
d484
  = coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
      (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
      erased
      erased
      erased
      erased
name490 = "FingerTree-measure-size-c.ex-ft"
d490
  = coe du386
      (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
         (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
         erased
         erased
         erased
         erased)
      (coe MAlonzo.Code.AlgebraStructures.C76
         (\ v0 -> coe (:) v0 (coe [])))
      (1 :: Integer)
      (coe du386
         (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
            (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
            erased
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C76
            (\ v0 -> coe (:) v0 (coe [])))
         (2 :: Integer)
         (coe du386
            (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
               (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
               erased
               erased
               erased
               erased)
            (coe MAlonzo.Code.AlgebraStructures.C76
               (\ v0 -> coe (:) v0 (coe [])))
            (3 :: Integer)
            (coe du386
               (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
                  (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                  erased
                  erased
                  erased
                  erased)
               (coe MAlonzo.Code.AlgebraStructures.C76
                  (\ v0 -> coe (:) v0 (coe [])))
               (4 :: Integer)
               (coe du386
                  (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
                     (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                     erased
                     erased
                     erased
                     erased)
                  (coe MAlonzo.Code.AlgebraStructures.C76
                     (\ v0 -> coe (:) v0 (coe [])))
                  (5 :: Integer)
                  (coe du386
                     (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
                        (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                        erased
                        erased
                        erased
                        erased)
                     (coe MAlonzo.Code.AlgebraStructures.C76
                        (\ v0 -> coe (:) v0 (coe [])))
                     (6 :: Integer)
                     (coe du386
                        (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
                           (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                           erased
                           erased
                           erased
                           erased)
                        (coe MAlonzo.Code.AlgebraStructures.C76
                           (\ v0 -> coe (:) v0 (coe [])))
                        (7 :: Integer)
                        (coe du386
                           (coe MAlonzo.Code.AlgebraStructures.C56 (coe [])
                              (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
                              erased
                              erased
                              erased
                              erased)
                           (coe MAlonzo.Code.AlgebraStructures.C76
                              (\ v0 -> coe (:) v0 (coe [])))
                           (8 :: Integer)
                           (coe C198))))))))
name506 = "FingerTree-measure-size-c.snoc-assoc-lemma1"
d506 = erased
name534 = "FingerTree-measure-size-c.snoc-assoc-lemma2"
d534 = erased
name566 = "FingerTree-measure-size-c.snoc-assoc-lemma3"
d566 = erased
name602 = "FingerTree-measure-size-c.snoc-assoc-lemma4"
d602 = erased
name636 = "FingerTree-measure-size-c._\9655_"
d636 v0 v1 v2 v3 v4 v5 v6 v7 = du636 v3 v4 v6 v7
du636 v0 v1 v2 v3
  = case coe v3 of
        C198 -> coe C202 v2
        C202 v4 -> coe C210 (coe MAlonzo.Code.AlgebraStructures.d34 v0)
                     (coe C74 v4)
                     (coe C198)
                     (coe C74 v2)
        C210 v4 v5 v6 v7 -> case coe v7 of
                                C74 v8 -> coe C210 v4 v5 v6 (coe C76 v8 v2)
                                C76 v8 v9 -> coe C210 v4 v5 v6 (coe C78 v8 v9 v2)
                                C78 v8 v9 v10 -> coe C210 v4 v5 v6 (coe C80 v8 v9 v10 v2)
                                C80 v8 v9 v10 v11 -> coe C210
                                                       (coe MAlonzo.Code.AlgebraStructures.d36 v0 v4
                                                          (coe d92 (coe du238 v0 v1 v8 v9 v10)))
                                                       v5
                                                       (coe du636 v0
                                                          (coe MAlonzo.Code.AlgebraStructures.C76
                                                             d92)
                                                          (coe du238 v0 v1 v8 v9 v10)
                                                          v6)
                                                       (coe C76 v11 v2)
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name736 = "FingerTree-measure-size-c.toList-dig"
d736 v0
  = case coe v0 of
        C74 v1 -> coe (:) v1 (coe [])
        C76 v1 v2 -> coe (:) v1 (coe (:) v2 (coe []))
        C78 v1 v2 v3 -> coe (:) v1 (coe (:) v2 (coe (:) v3 (coe [])))
        C80 v1 v2 v3 v4 -> coe (:) v1
                             (coe (:) v2 (coe (:) v3 (coe (:) v4 (coe []))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name762 = "FingerTree-measure-size-c.toList-maybe-dig"
d762 v0 v1 v2 = du762 v2
du762 v0
  = case coe v0 of
        Just v1 -> coe d736 v1
        Nothing -> coe []
        _ -> coe MAlonzo.RTE.mazUnreachableError
name776 = "FingerTree-measure-size-c.toList-node"
d776 v0
  = case coe v0 of
        C52 v1 v2 v3 v4 -> coe (:) v2 (coe (:) v3 (coe []))
        C62 v1 v2 v3 v4 v5 -> coe (:) v2 (coe (:) v3 (coe (:) v4 (coe [])))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name806 = "FingerTree-measure-size-c.flatten-list"
d806 v0 v1 v2 v3 v4 v5 = du806 v5
du806 v0
  = case coe v0 of
        [] -> coe []
        (:) v1 v2 -> coe MAlonzo.Code.Data.List.Base.du18 (coe d776 v1)
                       (coe du806 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name824 = "FingerTree-measure-size-c.toList-ft"
d824 v0 v1 v2 v3 v4 v5 v6 = du824 v6
du824 v0
  = case coe v0 of
        C198 -> coe []
        C202 v1 -> coe (:) v1 (coe [])
        C210 v1 v2 v3 v4 -> coe MAlonzo.Code.Data.List.Base.du18
                              (coe d736 v2)
                              (coe MAlonzo.Code.Data.List.Base.du18 (coe du806 (coe du824 v3))
                                 (coe d736 v4))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name838 = "FingerTree-measure-size-c.head-dig"
d838 v0
  = case coe v0 of
        C74 v1 -> coe v1
        C76 v1 v2 -> coe v1
        C78 v1 v2 v3 -> coe v1
        C80 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name864 = "FingerTree-measure-size-c.tails-dig"
d864 v0
  = case coe v0 of
        C74 v1 -> coe Nothing
        C76 v1 v2 -> coe Just (coe C74 v2)
        C78 v1 v2 v3 -> coe Just (coe C76 v2 v3)
        C80 v1 v2 v3 v4 -> coe Just (coe C78 v2 v3 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name898 = "FingerTree-measure-size-c.measure-dig-lemma0"
d898 = erased
name938 = "FingerTree-measure-size-c.measure-digit-lemma1"
d938 = erased
name962 = "FingerTree-measure-size-c.toTree-dig"
d962 v0 v1 v2 v3 v4 v5 = du962 v3 v4 v5
du962 v0 v1 v2
  = case coe v2 of
        C74 v3 -> coe du386 v0 v1 v3 (coe C198)
        C76 v3 v4 -> coe du386 v0 v1 v3 (coe du386 v0 v1 v4 (coe C198))
        C78 v3 v4 v5 -> coe du386 v0 v1 v3
                          (coe du386 v0 v1 v4 (coe du386 v0 v1 v5 (coe C198)))
        C80 v3 v4 v5 v6 -> coe du386 v0 v1 v3
                             (coe du386 v0 v1 v4
                                (coe du386 v0 v1 v5 (coe du386 v0 v1 v6 (coe C198))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1026 = "FingerTree-measure-size-c.toTree-maybe-dig"
d1026 v0 v1 v2 v3 v4 v5 = du1026 v3 v4 v5
du1026 v0 v1 v2
  = case coe v2 of
        Just v3 -> coe du962 v0 v1 v3
        Nothing -> coe C198
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1042
  = "FingerTree-measure-size-c.measure-to-tree-maybe-dig-lemma"
d1042 = erased
name1056 = "FingerTree-measure-size-c.ViewL"
d1056 a0 a1 a2 a3 a4 a5 = ()

data T1056 a0 a1 a2 = C1070
                    | C1078 a0 a1 a2
name1098 = "FingerTree-measure-size-c.assoc-lemma3"
d1098 = erased
name1128 = "FingerTree-measure-size-c.assoc-lemma4"
d1128 = erased
name1152 = "FingerTree-measure-size-c.viewL"
d1152 v0 v1 v2 v3 v4 v5 v6 = du1152 v0 v2 v3 v4 v6
du1152 v0 v1 v2 v3 v4
  = case coe v4 of
        C198 -> coe C1070
        C202 v5 -> coe C1078 (coe MAlonzo.Code.AlgebraStructures.d34 v2) v5
                     (coe C198)
        C210 v5 v6 v7 v8 -> coe C1078
                              (coe MAlonzo.Code.AlgebraStructures.d36 v2
                                 (coe du158 v2 v3 (coe d864 v6))
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 v5
                                    (coe du122 v2 v3 v8)))
                              (coe d838 v6)
                              (coe du1172 v0 v1 v2 v3 v5 (coe d864 v6) v7 v8)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1172 = "FingerTree-measure-size-c.deepL"
d1172 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1172 v0 v2 v3 v4 v5 v6 v7 v8
du1172 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v5 of
        Just v8 -> coe C210 v4 v8 v6 v7
        Nothing -> let v8
                         = coe du1152 v0 v1 v2 (coe MAlonzo.Code.AlgebraStructures.C76 d92)
                             v6
                     in
                     case coe v8 of
                         C1070 -> coe du962 v2 v3 v7
                         C1078 v9 v10 v11 -> case coe v10 of
                                                 C52 v12 v13 v14 v15 -> coe C210 v9
                                                                          (coe C76 v13 v14)
                                                                          v11
                                                                          v7
                                                 C62 v12 v13 v14 v15 v16 -> coe C210 v9
                                                                              (coe C78 v13 v14 v15)
                                                                              v11
                                                                              v7
                                                 _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1288 = "FingerTree-measure-size-c.headL"
d1288 v0 v1 v2 v3 v4 v5 v6 v7 = du1288 v7
du1288 v0
  = case coe v0 of
        C202 v1 -> coe v1
        C210 v1 v2 v3 v4 -> case coe v2 of
                                C74 v5 -> coe v5
                                C76 v5 v6 -> coe v5
                                C78 v5 v6 v7 -> coe v5
                                C80 v5 v6 v7 v8 -> coe v5
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1362 = "FingerTree-measure-size-c.tailL"
d1362 v0 v1 v2 v3 v4 v5 v6 v7 = du1362 v0 v2 v3 v4 v7
du1362 v0 v1 v2 v3 v4
  = case coe v4 of
        C202 v5 -> coe MAlonzo.Code.DependentPair.C24
                     (coe MAlonzo.Code.AlgebraStructures.d34 v2)
                     (coe C198)
        C210 v5 v6 v7 v8 -> coe MAlonzo.Code.DependentPair.C24
                              (coe MAlonzo.Code.AlgebraStructures.d36 v2
                                 (coe du158 v2 v3 (coe d864 v6))
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 (coe du258 v5)
                                    (coe du122 v2 v3 v8)))
                              (coe du1172 v0 v1 v2 v3 v5 (coe d864 v6) v7 v8)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1388 = "FingerTree-measure-size-c.heads-dig"
d1388 v0
  = case coe v0 of
        C74 v1 -> coe Nothing
        C76 v1 v2 -> coe Just (coe C74 v1)
        C78 v1 v2 v3 -> coe Just (coe C76 v1 v2)
        C80 v1 v2 v3 v4 -> coe Just (coe C78 v1 v2 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1414 = "FingerTree-measure-size-c.tail-dig"
d1414 v0
  = case coe v0 of
        C74 v1 -> coe v1
        C76 v1 v2 -> coe v2
        C78 v1 v2 v3 -> coe v3
        C80 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1448 = "FingerTree-measure-size-c.measure-digit-lemma2"
d1448 = erased
name1486 = "FingerTree-measure-size-c.viewr-deep-measure-lemma"
d1486 = erased
name1512 = "FingerTree-measure-size-c.deepr-measure-lemma1"
d1512 = erased
name1542 = "FingerTree-measure-size-c.deepr-measure-lemma2"
d1542 = erased
name1566 = "FingerTree-measure-size-c.ViewR"
d1566 a0 a1 a2 a3 a4 a5 = ()

data T1566 a0 a1 a2 = C1580
                    | C1588 a0 a1 a2
name1602 = "FingerTree-measure-size-c.viewR"
d1602 v0 v1 v2 v3 v4 v5 v6 = du1602 v0 v2 v3 v4 v6
du1602 v0 v1 v2 v3 v4
  = case coe v4 of
        C198 -> coe C1580
        C202 v5 -> coe C1588 (coe MAlonzo.Code.AlgebraStructures.d34 v2) v5
                     (coe C198)
        C210 v5 v6 v7 v8 -> coe C1588
                              (coe MAlonzo.Code.AlgebraStructures.d36 v2 (coe du122 v2 v3 v6)
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 v5
                                    (coe du158 v2 v3 (coe d1388 v8))))
                              (coe d1414 v8)
                              (coe du1622 v0 v1 v2 v3 v5 v6 v7 (coe d1388 v8))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1622 = "FingerTree-measure-size-c.deepR"
d1622 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1622 v0 v2 v3 v4 v5 v6 v7 v8
du1622 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        Just v8 -> coe C210 v4 v5 v6 v8
        Nothing -> let v8
                         = coe du1602 v0 v1 v2 (coe MAlonzo.Code.AlgebraStructures.C76 d92)
                             v6
                     in
                     case coe v8 of
                         C1580 -> coe du962 v2 v3 v5
                         C1588 v9 v10 v11 -> case coe v10 of
                                                 C52 v12 v13 v14 v15 -> coe C210 v9 v5 v11
                                                                          (coe C76 v13 v14)
                                                 C62 v12 v13 v14 v15 v16 -> coe C210 v9 v5 v11
                                                                              (coe C78 v13 v14 v15)
                                                 _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1726 = "FingerTree-measure-size-c.Split"
d1726 a0 a1 a2 = ()

data T1726 a0 a1 a2 = C1734 a0 a1 a2
name1746 = "FingerTree-measure-size-c.toDigit"
d1746 v0 v1 v2 v3 v4 v5 = du1746 v5
du1746 v0
  = case coe v0 of
        C52 v1 v2 v3 v4 -> coe C76 v2 v3
        C62 v1 v2 v3 v4 v5 -> coe C78 v2 v3 v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1778 = "FingerTree-measure-size-c.splitDigit"
d1778 v0 v1 v2 v3 v4 v5 v6 v7 = du1778 v3 v4 v5 v6 v7
du1778 v0 v1 v2 v3 v4
  = case coe v4 of
        C74 v5 -> coe C1734 (coe Nothing) v5 (coe Nothing)
        C76 v5 v6 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                       (coe C1734 (coe Nothing) v5 (coe Just (coe C74 v6)))
                       (coe MAlonzo.Code.Data.Bool.Base.du14
                          (coe v2
                             (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                          (coe C1734 (coe Nothing) v5 (coe Just (coe C74 v6)))
                          (coe C1734 (coe Just (coe C74 v5)) v6 (coe Nothing)))
        C78 v5 v6 v7 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                          (coe C1734 (coe Nothing) v5 (coe Just (coe C76 v6 v7)))
                          (coe MAlonzo.Code.Data.Bool.Base.du14
                             (coe v2
                                (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                             (coe C1734 (coe Nothing) v5 (coe Just (coe C76 v6 v7)))
                             (coe MAlonzo.Code.Data.Bool.Base.du14
                                (coe v2
                                   (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                      (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6))))
                                (coe C1734 (coe Just (coe C74 v5)) v6 (coe Just (coe C74 v7)))
                                (coe C1734 (coe Just (coe C76 v5 v6)) v7 (coe Nothing))))
        C80 v5 v6 v7 v8 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                             (coe C1734 (coe Nothing) v5 (coe Just (coe C78 v6 v7 v8)))
                             (coe MAlonzo.Code.Data.Bool.Base.du14
                                (coe v2
                                   (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                      (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                                (coe C1734 (coe Nothing) v5 (coe Just (coe C78 v6 v7 v8)))
                                (coe MAlonzo.Code.Data.Bool.Base.du14
                                   (coe v2
                                      (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                         (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6))))
                                   (coe C1734 (coe Just (coe C74 v5)) v6 (coe Just (coe C76 v7 v8)))
                                   (coe MAlonzo.Code.Data.Bool.Base.du14
                                      (coe v2
                                         (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                            (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                               (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                               (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                                  (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6)
                                                  (coe MAlonzo.Code.AlgebraStructures.d74 v1 v7)))))
                                      (coe C1734 (coe Just (coe C76 v5 v6)) v7
                                         (coe Just (coe C74 v8)))
                                      (coe C1734 (coe Just (coe C78 v5 v6 v7)) v8 (coe Nothing)))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1826 = "FingerTree-measure-size-c.measure-split-digit"
d1826 v0 v1 v2 v3 v4 v5 = du1826 v3 v4 v5
du1826 v0 v1 v2
  = case coe v2 of
        C1734 v3 v4 v5 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                            (coe du158 v0 v1 v3)
                            (coe MAlonzo.Code.AlgebraStructures.d36 v0
                               (coe MAlonzo.Code.AlgebraStructures.d74 v1 v4)
                               (coe du158 v0 v1 v5))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1856 = "FingerTree-measure-size-c.splitDigit-size-lemma0"
d1856 = erased
name2106 = "FingerTree-measure-size-c.Split-d"
d2106 a0 a1 a2 a3 a4 a5 = ()

data T2106 a0 a1 a2 a3 a4 = C2126 a0 a1 a2 a3 a4
name2156 = "FingerTree-measure-size-c.split-Tree1-measure-lemma"
d2156 = erased
name2204 = "FingerTree-measure-size-c.split-Tree1"
d2204 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du2204 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10
du2204 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1778 v2 v3 v5 v6 v7 in
      case coe v10 of
          C1734 v11 v12 v13 -> coe C2126 (coe du158 v2 v3 v11)
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 (coe du158 v2 v3 v13)
                                    (coe MAlonzo.Code.AlgebraStructures.d36 v2 v4
                                       (coe du122 v2 v3 v9)))
                                 (coe du1026 v2 v3 v11)
                                 v12
                                 (coe du1172 v0 v1 v2 v3 v4 v13 v8 v9)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name2258 = "FingerTree-measure-size-c.assoc-lemma8"
d2258 = erased
name2278 = "FingerTree-measure-size-c._._.assoc-lemma-8ms"
d2278 = erased
name2308 = "FingerTree-measure-size-c._.assoc-lemma8'"
d2308 = erased
name2338 = "FingerTree-measure-size-c.split-Tree2-measure-lemma"
d2338 = erased
name2382 = "FingerTree-measure-size-c.split-Tree2"
d2382 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du2382 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10
du2382 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1778 v2 v3 v5 v6 v9 in
      case coe v10 of
          C1734 v11 v12 v13 -> coe C2126
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 (coe du122 v2 v3 v7)
                                    (coe MAlonzo.Code.AlgebraStructures.d36 v2 v4
                                       (coe du158 v2 v3 v11)))
                                 (coe du158 v2 v3 v13)
                                 (coe du1622 v0 v1 v2 v3 v4 v7 v8 v11)
                                 v12
                                 (coe du1026 v2 v3 v13)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name2436 = "FingerTree-measure-size-c.split-Tree-single"
d2436 v0 v1 v2 v3 v4 v5 v6 v7 = du2436 v3 v7
du2436 v0 v1
  = coe C2126 (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe C198)
      v1
      (coe C198)
name2456 = "FingerTree-measure-size-c.split-Tree"
d2456 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du2456 v0 v2 v3 v4 v6 v7 v8
du2456 v0 v1 v2 v3 v4 v5 v6
  = case coe v6 of
        C198 -> coe Nothing
        C202 v7 -> coe Just (coe du2436 v2 v7)
        C210 v7 v8 v9 v10 -> coe Just
                               (coe du2580 v0 v1 v2 v3 v7 v4 v5 v8 v9 v10
                                  (coe du2696 v2 v3 v8 v4 v5)
                                  (coe du2698 v2 v3 v7 v8 v4 v5))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2470 = "FingerTree-measure-size-c.measure-node-digit-lemma"
d2470 = erased
name2492 = "FingerTree-measure-size-c.assoc-lemma9"
d2492 = erased
name2528 = "FingerTree-measure-size-c.split-Tree3-measure-lemma"
d2528 = erased
name2552 = "FingerTree-measure-size-c.split-Tree3"
d2552 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12
  = du2552 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10
du2552 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10
          = coe du2456 v0 v1 v2 (coe MAlonzo.Code.AlgebraStructures.C76 d92)
              v5
              (coe MAlonzo.Code.AlgebraStructures.d36 v2 v6 (coe du122 v2 v3 v7))
              v8
      in
      case coe v10 of
          Just v11 -> case coe v11 of
                          C2126 v12 v13 v14 v15 v16 -> let v17
                                                             = coe du1778 v2 v3 v5
                                                                 (coe
                                                                    MAlonzo.Code.AlgebraStructures.d36
                                                                    v2
                                                                    v6
                                                                    (coe
                                                                       MAlonzo.Code.AlgebraStructures.d36
                                                                       v2
                                                                       (coe du122 v2 v3 v7)
                                                                       (coe du258 v12)))
                                                                 (coe du1746 v15)
                                                         in
                                                         case coe v17 of
                                                             C1734 v18 v19 v20 -> coe C2126
                                                                                    (coe
                                                                                       MAlonzo.Code.AlgebraStructures.d36
                                                                                       v2
                                                                                       (coe du122 v2
                                                                                          v3
                                                                                          v7)
                                                                                       (coe
                                                                                          MAlonzo.Code.AlgebraStructures.d36
                                                                                          v2
                                                                                          v12
                                                                                          (coe du158
                                                                                             v2
                                                                                             v3
                                                                                             v18)))
                                                                                    (coe
                                                                                       MAlonzo.Code.AlgebraStructures.d36
                                                                                       v2
                                                                                       (coe du158 v2
                                                                                          v3
                                                                                          v20)
                                                                                       (coe
                                                                                          MAlonzo.Code.AlgebraStructures.d36
                                                                                          v2
                                                                                          v13
                                                                                          (coe du122
                                                                                             v2
                                                                                             v3
                                                                                             v9)))
                                                                                    (coe du1622 v0
                                                                                       v1
                                                                                       v2
                                                                                       v3
                                                                                       v12
                                                                                       v7
                                                                                       v14
                                                                                       v18)
                                                                                    v19
                                                                                    (coe du1172 v0
                                                                                       v1
                                                                                       v2
                                                                                       v3
                                                                                       v13
                                                                                       v20
                                                                                       v16
                                                                                       v9)
                                                             _ -> coe
                                                                    MAlonzo.RTE.mazUnreachableError
                          _ -> coe MAlonzo.RTE.mazUnreachableError
          _ -> coe MAlonzo.RTE.mazUnreachableError
name2580 = "FingerTree-measure-size-c.split-Tree-if"
d2580 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14
  = du2580 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v13
du2580 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = case coe v10 of
        False -> case coe v11 of
                     False -> coe du2382 v0 v1 v2 v3 v4 v5
                                (coe MAlonzo.Code.AlgebraStructures.d36 v2
                                   (coe MAlonzo.Code.AlgebraStructures.d36 v2 v6
                                      (coe du122 v2 v3 v7))
                                   (coe du258 v4))
                                v7
                                v8
                                v9
                     True -> coe du2552 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
                     _ -> coe MAlonzo.RTE.mazUnreachableError
        True -> coe du2204 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2600 = "FingerTree-measure-size-c.split-lemma-empty"
d2600 = erased
name2614 = "FingerTree-measure-size-c.prop-monoid-lemma"
d2614 = erased
name2634 = "FingerTree-measure-size-c.structure-measure-lemma0"
d2634 = erased
name2654 = "FingerTree-measure-size-c.structure-measure-lemma1"
d2654 = erased
name2696 = "FingerTree-measure-size-c._.vpr"
d2696 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du2696 v3 v4 v6 v8 v9
du2696 v0 v1 v2 v3 v4
  = coe v3
      (coe MAlonzo.Code.AlgebraStructures.d36 v0 v4 (coe du122 v0 v1 v2))
name2698 = "FingerTree-measure-size-c._.vft"
d2698 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du2698 v3 v4 v5 v6 v8 v9
du2698 v0 v1 v2 v3 v4 v5
  = coe v4
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d36 v0 v5 (coe du122 v0 v1 v3))
         (coe du258 v2))
name2738 = "FingerTree-measure-size-c._._.assoc-lemma-9ms"
d2738 = erased
name2766 = "FingerTree-measure-size-c._.assoc-lemma9'"
d2766 = erased
name2794 = "FingerTree-measure-size-c._.\963pr"
d2794 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17
  = du2794 v3 v4 v9
du2794 v0 v1 v2 = coe du122 v0 v1 v2
name2796 = "FingerTree-measure-size-c._.\963sf"
d2796 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17
  = du2796 v3 v4 v10
du2796 v0 v1 v2 = coe du122 v0 v1 v2
name2798 = "FingerTree-measure-size-c._.\956\8321"
d2798 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17
  = du2798 v5
du2798 v0 = coe du258 v0
name2800 = "FingerTree-measure-size-c._.\956\8322"
d2800 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14 v15 v16 v17
  = du2800 v6
du2800 v0 = coe du258 v0
name3008 = "FingerTree-measure-size-c._.neq-bool"
d3008 = erased
name3010 = "FingerTree-measure-size-c._.diff"
d3010 = erased
name3028 = "FingerTree-measure-size-c.foldr-dig"
d3028 v0 v1 v2 v3 v4 v5 = du3028 v3 v4 v5
du3028 v0 v1 v2
  = case coe v1 of
        C74 v3 -> coe v0 v3 v2
        C76 v3 v4 -> coe v0 v3 (coe v0 v4 v2)
        C78 v3 v4 v5 -> coe v0 v3 (coe v0 v4 (coe v0 v5 v2))
        C80 v3 v4 v5 v6 -> coe v0 v3 (coe v0 v4 (coe v0 v5 (coe v0 v6 v2)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3072 = "FingerTree-measure-size-c.foldl-dig"
d3072 v0 v1 v2 v3 v4 v5 = du3072 v3 v4 v5
du3072 v0 v1 v2
  = case coe v2 of
        C74 v3 -> coe v0 v1 v3
        C76 v3 v4 -> coe v0 (coe v0 v1 v3) v4
        C78 v3 v4 v5 -> coe v0 (coe v0 (coe v0 v1 v3) v4) v5
        C80 v3 v4 v5 v6 -> coe v0 (coe v0 (coe v0 (coe v0 v1 v3) v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3124 = "FingerTree-measure-size-c.foldl-node"
d3124 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du3124 v6 v7 v8
du3124 v0 v1 v2
  = case coe v2 of
        C52 v3 v4 v5 v6 -> coe v0 (coe v0 v1 v4) v5
        C62 v3 v4 v5 v6 v7 -> coe v0 (coe v0 (coe v0 v1 v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3162 = "FingerTree-measure-size-c.foldr-node"
d3162 v0 v1 v2 v3 v4 v5 v6 v7 = du3162 v5 v6 v7
du3162 v0 v1 v2
  = case coe v1 of
        C52 v3 v4 v5 v6 -> coe v0 v4 (coe v0 v5 v2)
        C62 v3 v4 v5 v6 v7 -> coe v0 v4 (coe v0 v5 (coe v0 v6 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3202 = "FingerTree-measure-size-c.foldr"
d3202 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du3202 v6 v7 v8
du3202 v0 v1 v2
  = case coe v1 of
        C198 -> coe v2
        C202 v3 -> coe v0 v3 v2
        C210 v3 v4 v5 v6 -> coe du3028 v0 v4
                              (coe du3202 (coe d3162 erased erased erased erased erased v0) v5
                                 (coe du3028 v0 v6 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3238 = "FingerTree-measure-size-c.foldfun"
d3238 v0 v1 v2 v3 v4 v5 v6 = du3238 v3 v4 v5 v6
du3238 v0 v1 v2 v3
  = coe MAlonzo.Code.AlgebraStructures.d36 v0 v2
      (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
name3258 = "FingerTree-measure-size-c.foldfun-node"
d3258 v0 v1 v2 v3 v4 v5 v6 = du3258 v3 v5 v6
du3258 v0 v1 v2
  = coe MAlonzo.Code.AlgebraStructures.d36 v0 v1 (coe d92 v2)
name3278 = "FingerTree-measure-size-c.foldl"
d3278 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du3278 v7 v8 v9
du3278 v0 v1 v2
  = case coe v2 of
        C198 -> coe v1
        C202 v3 -> coe v0 v1 v3
        C210 v3 v4 v5 v6 -> coe du3072 v0
                              (coe du3278
                                 (coe d3124 erased erased erased erased erased erased v0)
                                 (coe du3072 v0 v1 v4)
                                 v5)
                              v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3318 = "FingerTree-measure-size-c.pack-ft"
d3318 v0 v1 v2 v3 v4 v5 v6 = du3318 v5 v6
du3318 v0 v1 = coe MAlonzo.Code.DependentPair.C24 (coe du258 v0) v1
name3336 = "FingerTree-measure-size-c.foldl-pair"
d3336 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du3336 v6 v7 v8
du3336 v0 v1 v2
  = coe du3278 v0 v1 (coe MAlonzo.Code.DependentPair.d22 v2)
name3360 = "FingerTree-measure-size-c.cons-pair"
d3360 v0 v1 v2 v3 v4 v5 v6 = du3360 v3 v4 v5 v6
du3360 v0 v1 v2 v3
  = coe du3318
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
         (coe MAlonzo.Code.DependentPair.d20 v2))
      (coe du386 v0 v1 v3 (coe MAlonzo.Code.DependentPair.d22 v2))
name3382 = "FingerTree-measure-size-c.reverse-ft"
d3382 v0 v1 v2 v3 v4 v5 = du3382 v3 v4 v5
du3382 v0 v1 v2
  = coe du3336 (coe d3360 erased erased erased v0 v1)
      (coe du3318 (coe MAlonzo.Code.AlgebraStructures.d34 v0) (coe C198))
      v2
name3406 = "FingerTree-measure-size-c.assoc-lemma5"
d3406 = erased
name3432 = "FingerTree-measure-size-c._._.assoc-lemma0ms"
d3432 = erased
name3458 = "FingerTree-measure-size-c._.assoc-lemma5'"
d3458 = erased
name3476 = "FingerTree-measure-size-c.assoc-lemma6"
d3476 = erased
name3492 = "FingerTree-measure-size-c._._.assoc-lemma-5ms"
d3492 = erased
name3526 = "FingerTree-measure-size-c._.assoc-lemma6'"
d3526 = erased
name3538 = "FingerTree-measure-size-c.assoc-lemma7"
d3538 = erased
name3556 = "FingerTree-measure-size-c._._.assoc-lemma-7ms"
d3556 = erased
name3588 = "FingerTree-measure-size-c._.assoc-lemma7'"
d3588 = erased
name3604 = "FingerTree-measure-size-c.foldl-node-lemma0"
d3604 = erased
name3632 = "FingerTree-measure-size-c.FunExt"
d3632
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure-size-c.FunExt"
name3650 = "FingerTree-measure-size-c.FunExt\8322"
d3650
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure-size-c.FunExt\8322"
name3666 = "FingerTree-measure-size-c.foldl-node-lemma1"
d3666 = erased
name3686 = "FingerTree-measure-size-c.foldl-dig-lemma0"
d3686 = erased
name3728 = "FingerTree-measure-size-c.foldl-dig-correct"
d3728 = erased
name3784 = "FingerTree-measure-size-c.foldl-node-correct"
d3784 = erased
name3830 = "FingerTree-measure-size-c.flatten-fold-lemma"
d3830 = erased
name3866 = "FingerTree-measure-size-c.foldl-correct"
d3866 = erased
name3910 = "FingerTree-measure-size-c.foldl-lemma0"
d3910 = erased
name3950 = "FingerTree-measure-size-c.lemma6"
d3950 = erased
name3960 = "FingerTree-measure-size-c.foldfun-list"
d3960 v0 v1 v2 v3 = du3960 v2 v3
du3960 v0 v1
  = coe MAlonzo.Code.Data.List.Base.du18 v0 (coe (:) v1 (coe []))
name3980 = "FingerTree-measure-size-c.toList1"
d3980 v0 v1 v2 v3 v4 v5 v6 = du3980 v6
du3980 v0 = coe du3278 (coe d3960 erased erased) (coe []) v0
name4000 = "FingerTree-measure-size-c.cons-correct"
d4000 = erased
name4102 = "FingerTree-measure-size-c.viewl-to-ft"
d4102 v0 v1 v2 v3 v4 v5 v6 = du4102 v3 v4 v6
du4102 v0 v1 v2
  = case coe v2 of
        C1070 -> coe C198
        C1078 v3 v4 v5 -> coe du386 v0 v1 v4 v5
        _ -> coe MAlonzo.RTE.mazUnreachableError
name4120 = "FingerTree-measure-size-c.toList-view"
d4120 v0 v1 v2 v3 v4 v5 v6 = du4120 v6
du4120 v0
  = case coe v0 of
        C1070 -> coe []
        C1078 v1 v2 v3 -> coe (:) v2 (coe du824 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name4140 = "FingerTree-measure-size-c.viewl-correct"
d4140 = erased
name4156 = "FingerTree-measure-size-c.measure-list"
d4156 v0 v1 v2 v3 v4 v5 = du4156 v3 v4 v5
du4156 v0 v1 v2
  = case coe v2 of
        [] -> coe MAlonzo.Code.AlgebraStructures.d34 v0
        (:) v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                       (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                       (coe du4156 v0 v1 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name4176 = "FingerTree-measure-size-c.foldfun-lemma"
d4176 = erased
name4198 = "FingerTree-measure-size-c.fold-monoid-lemma"
d4198 = erased
name4224 = "FingerTree-measure-size-c.measure-list-lemma"
d4224 = erased
name4252 = "FingerTree-measure-size-c.append-measure-lemma"
d4252 = erased
name4276 = "FingerTree-measure-size-c.toList-ft-measure-correct"
d4276 = erased
name4294 = "FingerTree-measure-size-c.append"
d4294 v0 v1 v2 v3 v4 v5 v6 v7 = du4294 v3 v4 v6 v7
du4294 v0 v1 v2 v3
  = case coe v3 of
        [] -> coe v2
        (:) v4 v5 -> coe du4294 v0 v1 (coe du636 v0 v1 v4 v2) v5
        _ -> coe MAlonzo.RTE.mazUnreachableError
name4326 = "FingerTree-measure-size-c.concat"
d4326 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du4326 v3 v4 v7 v8
du4326 v0 v1 v2 v3 = coe du4294 v0 v1 v2 (coe du824 v3)
name4342 = "FingerTree-measure-size-c.rev-digit"
d4342 v0 v1 v2 v3 = du4342 v2 v3
du4342 v0 v1
  = case coe v1 of
        C74 v2 -> coe C74 (coe v0 v2)
        C76 v2 v3 -> coe C76 (coe v0 v3) (coe v0 v2)
        C78 v2 v3 v4 -> coe C78 (coe v0 v4) (coe v0 v3) (coe v0 v2)
        C80 v2 v3 v4 v5 -> coe C80 (coe v0 v5) (coe v0 v4) (coe v0 v3)
                             (coe v0 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name4384 = "FingerTree-measure-size-c.rev-node"
d4384 v0 v1 v2 v3 v4 v5 v6 = du4384 v3 v4 v5 v6
du4384 v0 v1 v2 v3
  = case coe v3 of
        C52 v4 v5 v6 v7 -> coe du222 v0 v1 (coe v2 v6) (coe v2 v5)
        C62 v4 v5 v6 v7 v8 -> coe du238 v0 v1 (coe v2 v7) (coe v2 v6)
                                (coe v2 v5)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name4422 = "FingerTree-measure-size-c.measure-rev-list"
d4422 v0 v1 v2 v3 v4 v5 v6 = du4422 v3 v4 v5 v6
du4422 v0 v1 v2 v3
  = coe MAlonzo.Code.Data.List.Base.du166
      (coe d3238 erased erased erased v0 v1)
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe MAlonzo.Code.Data.List.Base.du234
         (coe MAlonzo.Code.Data.List.Base.du56 v2 v3))
name4444 = "FingerTree-measure-size-c.measure-rev"
d4444 v0 v1 v2 v3 v4 v5 v6 v7 = du4444 v3 v4 v6 v7
du4444 v0 v1 v2 v3
  = coe MAlonzo.Code.Data.List.Base.du166
      (coe d3238 erased erased erased v0 v1)
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe MAlonzo.Code.Data.List.Base.du234
         (coe MAlonzo.Code.Data.List.Base.du56 v2 (coe du824 v3)))
name4464 = "FingerTree-measure-size-c.measure-digit-rev"
d4464 v0 v1 v2 v3 v4 v5 v6 = du4464 v3 v4 v5 v6
du4464 v0 v1 v2 v3
  = coe MAlonzo.Code.Data.List.Base.du166
      (coe d3238 erased erased erased v0 v1)
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe MAlonzo.Code.Data.List.Base.du234
         (coe MAlonzo.Code.Data.List.Base.du56 v2 (coe d736 v3)))
name4478 = "FingerTree-measure-size-c.\949-comm-lemma"
d4478 = erased
name4484 = "FingerTree-measure-size-c.test.nat"
d4484
  = coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
      ((Prelude.+) :: Integer -> Integer -> Integer)
      erased
      erased
      erased
      erased
name4488 = "FingerTree-measure-size-c.test.nat-measure"
d4488 v0 = du4488
du4488
  = coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer)
name4492 = "FingerTree-measure-size-c.test.ex-ft1"
d4492
  = coe du386
      (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
         ((Prelude.+) :: Integer -> Integer -> Integer)
         erased
         erased
         erased
         erased)
      (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
      (0 :: Integer)
      (coe du386
         (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
            ((Prelude.+) :: Integer -> Integer -> Integer)
            erased
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
         (1 :: Integer)
         (coe du386
            (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
               ((Prelude.+) :: Integer -> Integer -> Integer)
               erased
               erased
               erased
               erased)
            (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
            (2 :: Integer)
            (coe du386
               (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                  ((Prelude.+) :: Integer -> Integer -> Integer)
                  erased
                  erased
                  erased
                  erased)
               (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
               (3 :: Integer)
               (coe du386
                  (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                     ((Prelude.+) :: Integer -> Integer -> Integer)
                     erased
                     erased
                     erased
                     erased)
                  (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
                  (4 :: Integer)
                  (coe du386
                     (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                        ((Prelude.+) :: Integer -> Integer -> Integer)
                        erased
                        erased
                        erased
                        erased)
                     (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
                     (5 :: Integer)
                     (coe du386
                        (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                           ((Prelude.+) :: Integer -> Integer -> Integer)
                           erased
                           erased
                           erased
                           erased)
                        (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
                        (6 :: Integer)
                        (coe du386
                           (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                              ((Prelude.+) :: Integer -> Integer -> Integer)
                              erased
                              erased
                              erased
                              erased)
                           (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
                           (7 :: Integer)
                           (coe du386
                              (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                                 ((Prelude.+) :: Integer -> Integer -> Integer)
                                 erased
                                 erased
                                 erased
                                 erased)
                              (coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer))
                              (8 :: Integer)
                              (coe C198)))))))))
name28881 = "FingerTree-measure-size-c._..absurdlambda"
d28881 = erased