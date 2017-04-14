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
import qualified
       MAlonzo.Code.Relation.Binary.PropositionalEquality.TrustMe
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
                       (coe C1734 (coe Just (coe C74 v5)) v6 (coe Nothing))
        C78 v5 v6 v7 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                          (coe C1734 (coe Nothing) v5 (coe Just (coe C76 v6 v7)))
                          (coe MAlonzo.Code.Data.Bool.Base.du14
                             (coe v2
                                (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                   (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                             (coe C1734 (coe Just (coe C74 v5)) v6 (coe Just (coe C74 v7)))
                             (coe C1734 (coe Just (coe C76 v5 v6)) v7 (coe Nothing)))
        C80 v5 v6 v7 v8 -> coe MAlonzo.Code.Data.Bool.Base.du14 (coe v2 v3)
                             (coe C1734 (coe Nothing) v5 (coe Just (coe C78 v6 v7 v8)))
                             (coe MAlonzo.Code.Data.Bool.Base.du14
                                (coe v2
                                   (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                      (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)))
                                (coe C1734 (coe Just (coe C74 v5)) v6 (coe Just (coe C76 v7 v8)))
                                (coe MAlonzo.Code.Data.Bool.Base.du14
                                   (coe v2
                                      (coe MAlonzo.Code.AlgebraStructures.d36 v0 v3
                                         (coe MAlonzo.Code.AlgebraStructures.d36 v0
                                            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v5)
                                            (coe MAlonzo.Code.AlgebraStructures.d74 v1 v6))))
                                   (coe C1734 (coe Just (coe C76 v5 v6)) v7 (coe Just (coe C74 v8)))
                                   (coe C1734 (coe Just (coe C78 v5 v6 v7)) v8 (coe Nothing))))
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
name1882 = "FingerTree-measure-size-c.Split-d"
d1882 a0 a1 a2 a3 a4 a5 = ()

data T1882 a0 a1 a2 a3 a4 = C1902 a0 a1 a2 a3 a4
name1932 = "FingerTree-measure-size-c.split-Tree1-measure-lemma"
d1932 = erased
name1980 = "FingerTree-measure-size-c.split-Tree1"
d1980 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du1980 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10
du1980 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1778 v2 v3 v5 v6 v7 in
      case coe v10 of
          C1734 v11 v12 v13 -> coe C1902 (coe du158 v2 v3 v11)
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 (coe du158 v2 v3 v13)
                                    (coe MAlonzo.Code.AlgebraStructures.d36 v2 v4
                                       (coe du122 v2 v3 v9)))
                                 (coe du1026 v2 v3 v11)
                                 v12
                                 (coe du1172 v0 v1 v2 v3 v4 v13 v8 v9)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name2046 = "FingerTree-measure-size-c.split-Tree2-measure-lemma"
d2046 = erased
name2088 = "FingerTree-measure-size-c.split-Tree2"
d2088 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du2088 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10
du2088 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10 = coe du1778 v2 v3 v5 v6 v9 in
      case coe v10 of
          C1734 v11 v12 v13 -> coe C1902
                                 (coe MAlonzo.Code.AlgebraStructures.d36 v2 (coe du122 v2 v3 v7)
                                    (coe MAlonzo.Code.AlgebraStructures.d36 v2 v4
                                       (coe du158 v2 v3 v11)))
                                 (coe du158 v2 v3 v13)
                                 (coe du1622 v0 v1 v2 v3 v4 v7 v8 v11)
                                 v12
                                 (coe du1026 v2 v3 v13)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name2142 = "FingerTree-measure-size-c.split-Tree-single"
d2142 v0 v1 v2 v3 v4 v5 v6 v7 = du2142 v3 v7
du2142 v0 v1
  = coe C1902 (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
      (coe C198)
      v1
      (coe C198)
name2162 = "FingerTree-measure-size-c.split-Tree"
d2162 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du2162 v0 v2 v3 v4 v6 v7 v8
du2162 v0 v1 v2 v3 v4 v5 v6
  = case coe v6 of
        C198 -> coe Nothing
        C202 v7 -> coe Just (coe du2142 v2 v7)
        C210 v7 v8 v9 v10 -> coe Just
                               (coe du2250 v0 v1 v2 v3 v7 v4 v5 v8 v9 v10
                                  (coe du2366 v2 v3 v8 v4 v5)
                                  (coe du2368 v2 v3 v7 v8 v4 v5))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2198 = "FingerTree-measure-size-c.split-Tree3-measure-lemma"
d2198 = erased
name2222 = "FingerTree-measure-size-c.split-Tree3"
d2222 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12
  = du2222 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10
du2222 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10
          = coe du2162 v0 v1 v2 (coe MAlonzo.Code.AlgebraStructures.C76 d92)
              v5
              (coe MAlonzo.Code.AlgebraStructures.d36 v2 v6 (coe du122 v2 v3 v7))
              v8
      in
      case coe v10 of
          Just v11 -> case coe v11 of
                          C1902 v12 v13 v14 v15 v16 -> let v17
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
                                                             C1734 v18 v19 v20 -> coe C1902
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
name2250 = "FingerTree-measure-size-c.split-Tree-if"
d2250 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v12 v13 v14
  = du2250 v0 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11 v13
du2250 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = case coe v10 of
        False -> case coe v11 of
                     False -> coe du2088 v0 v1 v2 v3 v4 v5
                                (coe MAlonzo.Code.AlgebraStructures.d36 v2
                                   (coe MAlonzo.Code.AlgebraStructures.d36 v2 v6
                                      (coe du122 v2 v3 v7))
                                   (coe du258 v4))
                                v7
                                v8
                                v9
                     True -> coe du2222 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
                     _ -> coe MAlonzo.RTE.mazUnreachableError
        True -> coe du1980 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2270 = "FingerTree-measure-size-c.split-lemma-empty"
d2270 = erased
name2284 = "FingerTree-measure-size-c.prop-monoid-lemma"
d2284 = erased
name2304 = "FingerTree-measure-size-c.structure-measure-lemma0"
d2304 = erased
name2324 = "FingerTree-measure-size-c.structure-measure-lemma1"
d2324 = erased
name2366 = "FingerTree-measure-size-c._.vpr"
d2366 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du2366 v3 v4 v6 v8 v9
du2366 v0 v1 v2 v3 v4
  = coe v3
      (coe MAlonzo.Code.AlgebraStructures.d36 v0 v4 (coe du122 v0 v1 v2))
name2368 = "FingerTree-measure-size-c._.vft"
d2368 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 = du2368 v3 v4 v5 v6 v8 v9
du2368 v0 v1 v2 v3 v4 v5
  = coe v4
      (coe MAlonzo.Code.AlgebraStructures.d36 v0
         (coe MAlonzo.Code.AlgebraStructures.d36 v0 v5 (coe du122 v0 v1 v3))
         (coe du258 v2))
name2594 = "FingerTree-measure-size-c._.neq-bool"
d2594 = erased
name2596 = "FingerTree-measure-size-c._.diff"
d2596 = erased
name2614 = "FingerTree-measure-size-c.foldr-dig"
d2614 v0 v1 v2 v3 v4 v5 = du2614 v3 v4 v5
du2614 v0 v1 v2
  = case coe v1 of
        C74 v3 -> coe v0 v3 v2
        C76 v3 v4 -> coe v0 v3 (coe v0 v4 v2)
        C78 v3 v4 v5 -> coe v0 v3 (coe v0 v4 (coe v0 v5 v2))
        C80 v3 v4 v5 v6 -> coe v0 v3 (coe v0 v4 (coe v0 v5 (coe v0 v6 v2)))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2658 = "FingerTree-measure-size-c.foldl-dig"
d2658 v0 v1 v2 v3 v4 v5 = du2658 v3 v4 v5
du2658 v0 v1 v2
  = case coe v2 of
        C74 v3 -> coe v0 v1 v3
        C76 v3 v4 -> coe v0 (coe v0 v1 v3) v4
        C78 v3 v4 v5 -> coe v0 (coe v0 (coe v0 v1 v3) v4) v5
        C80 v3 v4 v5 v6 -> coe v0 (coe v0 (coe v0 (coe v0 v1 v3) v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2710 = "FingerTree-measure-size-c.foldl-node"
d2710 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du2710 v6 v7 v8
du2710 v0 v1 v2
  = case coe v2 of
        C52 v3 v4 v5 v6 -> coe v0 (coe v0 v1 v4) v5
        C62 v3 v4 v5 v6 v7 -> coe v0 (coe v0 (coe v0 v1 v4) v5) v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2748 = "FingerTree-measure-size-c.foldr-node"
d2748 v0 v1 v2 v3 v4 v5 v6 v7 = du2748 v5 v6 v7
du2748 v0 v1 v2
  = case coe v1 of
        C52 v3 v4 v5 v6 -> coe v0 v4 (coe v0 v5 v2)
        C62 v3 v4 v5 v6 v7 -> coe v0 v4 (coe v0 v5 (coe v0 v6 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2788 = "FingerTree-measure-size-c.foldr"
d2788 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du2788 v6 v7 v8
du2788 v0 v1 v2
  = case coe v1 of
        C198 -> coe v2
        C202 v3 -> coe v0 v3 v2
        C210 v3 v4 v5 v6 -> coe du2614 v0 v4
                              (coe du2788 (coe d2748 erased erased erased erased erased v0) v5
                                 (coe du2614 v0 v6 v2))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2824 = "FingerTree-measure-size-c.foldfun"
d2824 v0 v1 v2 v3 v4 v5 v6 = du2824 v3 v4 v5 v6
du2824 v0 v1 v2 v3
  = coe MAlonzo.Code.AlgebraStructures.d36 v0 v2
      (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
name2844 = "FingerTree-measure-size-c.foldfun-node"
d2844 v0 v1 v2 v3 v4 v5 v6 = du2844 v3 v5 v6
du2844 v0 v1 v2
  = coe MAlonzo.Code.AlgebraStructures.d36 v0 v1 (coe d92 v2)
name2864 = "FingerTree-measure-size-c.foldl"
d2864 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2864 v7 v8 v9
du2864 v0 v1 v2
  = case coe v2 of
        C198 -> coe v1
        C202 v3 -> coe v0 v1 v3
        C210 v3 v4 v5 v6 -> coe du2658 v0
                              (coe du2864
                                 (coe d2710 erased erased erased erased erased erased v0)
                                 (coe du2658 v0 v1 v4)
                                 v5)
                              v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2902 = "FingerTree-measure-size-c.assoc-lemma5"
d2902 = erased
name2924 = "FingerTree-measure-size-c._._.assoc-lemma0"
d2924 = erased
name2950 = "FingerTree-measure-size-c._.assoc-lemma5'"
d2950 = erased
name2968 = "FingerTree-measure-size-c.assoc-lemma6"
d2968 = erased
name2984 = "FingerTree-measure-size-c._._.assoc-lemma-5v"
d2984 = erased
name3014 = "FingerTree-measure-size-c._.assoc-lemma6'"
d3014 = erased
name3026 = "FingerTree-measure-size-c.assoc-lemma7"
d3026 = erased
name3044 = "FingerTree-measure-size-c._._.assoc-lemma-7"
d3044 = erased
name3072 = "FingerTree-measure-size-c._.assoc-lemma7'"
d3072 = erased
name3088 = "FingerTree-measure-size-c.foldl-node-lemma0"
d3088 = erased
name3116 = "FingerTree-measure-size-c.FunExt"
d3116
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure-size-c.FunExt"
name3134 = "FingerTree-measure-size-c.FunExt\8322"
d3134
  = error
      "MAlonzo Runtime Error: postulate evaluated: FingerTree-measure-size-c.FunExt\8322"
name3150 = "FingerTree-measure-size-c.foldl-node-lemma1"
d3150 = erased
name3170 = "FingerTree-measure-size-c.foldl-dig-lemma0"
d3170 = erased
name3212 = "FingerTree-measure-size-c.foldl-dig-correct"
d3212 = erased
name3268 = "FingerTree-measure-size-c.foldl-node-correct"
d3268 = erased
name3314 = "FingerTree-measure-size-c.flatten-fold-lemma"
d3314 = erased
name3350 = "FingerTree-measure-size-c.foldl-correct"
d3350 = erased
name3394 = "FingerTree-measure-size-c.foldl-lemma0"
d3394 = erased
name3434 = "FingerTree-measure-size-c.lemma6"
d3434 = erased
name3444 = "FingerTree-measure-size-c.foldfun-list"
d3444 v0 v1 v2 v3 = du3444 v2 v3
du3444 v0 v1
  = coe MAlonzo.Code.Data.List.Base.du18 v0 (coe (:) v1 (coe []))
name3464 = "FingerTree-measure-size-c.toList1"
d3464 v0 v1 v2 v3 v4 v5 v6 = du3464 v6
du3464 v0 = coe du2864 (coe d3444 erased erased) (coe []) v0
name3484 = "FingerTree-measure-size-c.cons-correct"
d3484 = erased
name3586 = "FingerTree-measure-size-c.viewl-to-ft"
d3586 v0 v1 v2 v3 v4 v5 v6 = du3586 v3 v4 v6
du3586 v0 v1 v2
  = case coe v2 of
        C1070 -> coe C198
        C1078 v3 v4 v5 -> coe du386 v0 v1 v4 v5
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3604 = "FingerTree-measure-size-c.toList-view"
d3604 v0 v1 v2 v3 v4 v5 v6 = du3604 v6
du3604 v0
  = case coe v0 of
        C1070 -> coe []
        C1078 v1 v2 v3 -> coe (:) v2 (coe du824 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3624 = "FingerTree-measure-size-c.viewl-correct"
d3624 = erased
name3640 = "FingerTree-measure-size-c.measure-list"
d3640 v0 v1 v2 v3 v4 v5 = du3640 v3 v4 v5
du3640 v0 v1 v2
  = case coe v2 of
        [] -> coe MAlonzo.Code.AlgebraStructures.d34 v0
        (:) v3 v4 -> coe MAlonzo.Code.AlgebraStructures.d36 v0
                       (coe MAlonzo.Code.AlgebraStructures.d74 v1 v3)
                       (coe du3640 v0 v1 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3660 = "FingerTree-measure-size-c.foldfun-lemma"
d3660 = erased
name3682 = "FingerTree-measure-size-c.fold-monoid-lemma"
d3682 = erased
name3708 = "FingerTree-measure-size-c.measure-list-lemma"
d3708 = erased
name3736 = "FingerTree-measure-size-c.append-measure-lemma"
d3736 = erased
name3760 = "FingerTree-measure-size-c.toList-ft-measure-correct"
d3760 = erased
name3778 = "FingerTree-measure-size-c.append"
d3778 v0 v1 v2 v3 v4 v5 v6 v7 = du3778 v3 v4 v6 v7
du3778 v0 v1 v2 v3
  = case coe v3 of
        [] -> coe v2
        (:) v4 v5 -> coe du3778 v0 v1 (coe du636 v0 v1 v4 v2) v5
        _ -> coe MAlonzo.RTE.mazUnreachableError
name3810 = "FingerTree-measure-size-c.concat"
d3810 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du3810 v3 v4 v7 v8
du3810 v0 v1 v2 v3 = coe du3778 v0 v1 v2 (coe du824 v3)
name3822 = "FingerTree-measure-size-c.test.nat"
d3822
  = coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
      ((Prelude.+) :: Integer -> Integer -> Integer)
      erased
      erased
      erased
      erased
name3826 = "FingerTree-measure-size-c.test.nat-measure"
d3826 v0 = du3826
du3826
  = coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer)
name3830 = "FingerTree-measure-size-c.test.ex-ft1"
d3830
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
name20857 = "FingerTree-measure-size-c._..absurdlambda"
d20857 = erased