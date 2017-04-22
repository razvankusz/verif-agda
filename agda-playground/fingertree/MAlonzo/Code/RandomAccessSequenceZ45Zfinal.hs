{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.RandomAccessSequenceZ45Zfinal where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Unit
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.Empty
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Show
import qualified MAlonzo.Code.Data.String
import qualified MAlonzo.Code.DependentPair
import qualified MAlonzo.Code.Entry
import qualified MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.IO.Primitive
import qualified MAlonzo.Code.Induction
import qualified MAlonzo.Code.Induction.WellFounded
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary.HeterogeneousEquality
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Size
import qualified MAlonzo.Code.SizeW
name8 = "RandomAccessSequence-final.Seq"
d8 = erased
name22 = "RandomAccessSequence-final.length-seq"
d22 v0 v1 v2 v3 = du22 v2
du22 v0 = coe MAlonzo.Code.SizeW.d122 v0
name34 = "RandomAccessSequence-final._!_"
d34 v0 v1 v2 v3 v4 = du34 v0 v3 v4
du34 v0 v1 v2
  = let v3
          = coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du2456 v0
              erased
              (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                 (coe MAlonzo.Code.SizeW.d18 erased)
                 erased
                 erased
                 erased
                 erased)
              (coe MAlonzo.Code.AlgebraStructures.C76
                 (\ v3 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
              (coe MAlonzo.Code.SizeW.d42 erased (coe MAlonzo.Code.SizeW.C10 v2))
              (coe MAlonzo.Code.SizeW.C10 (0 :: Integer))
              v1
      in
      case coe v3 of
          Just v4 -> case coe v4 of
                         MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C2126 v5 v6 v7 v8
                           v9 -> coe Just (coe MAlonzo.Code.Entry.d20 v8)
                         _ -> coe MAlonzo.RTE.mazUnreachableError
          Nothing -> coe Nothing
          _ -> coe MAlonzo.RTE.mazUnreachableError
name62 = "RandomAccessSequence-final.set"
d62 v0 v1 v2 v3 v4 v5 = du62 v0 v3 v4 v5
du62 v0 v1 v2 v3
  = let v4
          = coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du2456 v0
              erased
              (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                 (coe MAlonzo.Code.SizeW.d18 erased)
                 erased
                 erased
                 erased
                 erased)
              (coe MAlonzo.Code.AlgebraStructures.C76
                 (\ v4 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
              (coe MAlonzo.Code.SizeW.d42 erased (coe MAlonzo.Code.SizeW.C10 v2))
              MAlonzo.Code.SizeW.du14
              v1
      in
      case coe v4 of
          Just v5 -> case coe v5 of
                         MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C2126 v6 v7 v8 v9
                           v10 -> coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du4326
                                    (coe MAlonzo.Code.AlgebraStructures.C56
                                       (coe MAlonzo.Code.SizeW.C10 (0 :: Integer))
                                       (coe MAlonzo.Code.SizeW.d18 erased)
                                       erased
                                       erased
                                       erased
                                       erased)
                                    (coe MAlonzo.Code.AlgebraStructures.C76
                                       (\ v11 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                                    (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du636
                                       (coe MAlonzo.Code.AlgebraStructures.C56
                                          (coe MAlonzo.Code.SizeW.C10 (0 :: Integer))
                                          (coe MAlonzo.Code.SizeW.d18 erased)
                                          erased
                                          erased
                                          erased
                                          erased)
                                       (coe MAlonzo.Code.AlgebraStructures.C76
                                          (\ v11 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                                       (coe MAlonzo.Code.Entry.C14 v3)
                                       v8)
                                    v10
                         _ -> coe MAlonzo.RTE.mazUnreachableError
          Nothing -> coe v1
          _ -> coe MAlonzo.RTE.mazUnreachableError
name100 = "RandomAccessSequence-final.big-seq"
d100 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C198
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du386
                 (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                    (coe MAlonzo.Code.SizeW.d18 erased)
                    erased
                    erased
                    erased
                    erased)
                 (coe MAlonzo.Code.AlgebraStructures.C76
                    (\ v2 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                 (coe MAlonzo.Code.Entry.C14 v1)
                 (coe d100 v1)
name104 = "RandomAccessSequence-final.show-maybe"
d104 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.Nat.Show.d22 v1
        Nothing -> coe Data.Text.pack "nothing"
        _ -> coe MAlonzo.RTE.mazUnreachableError
name112 = "RandomAccessSequence-final.Seq-pair"
d112 = erased
name122 = "RandomAccessSequence-final._\9655'_"
d122 v0 v1 v2 v3 = du122 v2 v3
du122 v0 v1
  = coe MAlonzo.Code.DependentPair.C24
      (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du258
         (coe MAlonzo.Code.SizeW.du18
            (coe MAlonzo.Code.DependentPair.d20 v0)
            (coe MAlonzo.Code.SizeW.C10 (1 :: Integer))))
      (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du636
         (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
            (coe MAlonzo.Code.SizeW.d18 erased)
            erased
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C76
            (\ v2 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
         v1
         (coe MAlonzo.Code.DependentPair.d22 v0))
name136 = "RandomAccessSequence-final.pack"
d136 v0 v1 v2 v3 = du136 v2 v3
du136 v0 v1
  = coe MAlonzo.Code.DependentPair.C24
      (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du258 v0)
      v1
name144 = "RandomAccessSequence-final.to-size"
d144 v0 v1 v2 = du144 v2
du144 v0 = coe MAlonzo.Code.DependentPair.d20 v0
name160
  = "RandomAccessSequence-final.Recursive-Definitions._\8918_"
d160 = erased
name164
  = "RandomAccessSequence-final.Recursive-Definitions._.well-founded"
d164 = erased
name168 = "RandomAccessSequence-final.Recursive-Definitions.<-WF"
d168 = erased
name172
  = "RandomAccessSequence-final.Recursive-Definitions._.wfRec"
d172 v0 v1 = du172
du172
  = coe MAlonzo.Code.Induction.WellFounded.d110 erased erased erased
      erased
      erased
name176
  = "RandomAccessSequence-final.Recursive-Definitions.Same-Size-Seq"
d176 a0 a1 a2 = ()

data T176 a0 a1 a2 a3 a4 = C184 a0 a1 a2 a3 a4
name188
  = "RandomAccessSequence-final.Recursive-Definitions.nat-lemma0"
d188 = erased
name196
  = "RandomAccessSequence-final.Recursive-Definitions.size-lemma0"
d196 = erased
name202
  = "RandomAccessSequence-final.Recursive-Definitions.size-lemma1"
d202 = erased
name208
  = "RandomAccessSequence-final.Recursive-Definitions.size-lemma2"
d208 = erased
name216
  = "RandomAccessSequence-final.Recursive-Definitions.snoc-ssq'"
d216 v0 v1 v2 v3 v4 = du216 v2 v3 v4
du216 v0 v1 v2
  = case coe v2 of
        C184 v3 v4 v5 v6 v7 -> coe C184
                                 (coe MAlonzo.Code.SizeW.du18
                                    (coe MAlonzo.Code.SizeW.C10 (1 :: Integer))
                                    (coe MAlonzo.Code.SizeW.C10 v0))
                                 (coe MAlonzo.Code.SizeW.du18 v4
                                    (coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                                 (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du386
                                    (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                                       (coe MAlonzo.Code.SizeW.d18 erased)
                                       erased
                                       erased
                                       erased
                                       erased)
                                    (coe MAlonzo.Code.AlgebraStructures.C76
                                       (\ v8 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                                    v1
                                    v5)
                                 (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du636
                                    (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                                       (coe MAlonzo.Code.SizeW.d18 erased)
                                       erased
                                       erased
                                       erased
                                       erased)
                                    (coe MAlonzo.Code.AlgebraStructures.C76
                                       (\ v8 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                                    v1
                                    v6)
                                 erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name234
  = "RandomAccessSequence-final.Recursive-Definitions.snoc-ssq"
d234 v0 v1 v2 v3 v4 = du234 v2 v3 v4
du234 v0 v1 v2
  = case coe v0 of
        MAlonzo.Code.SizeW.C10 v3 -> coe du216 v3 v1 v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name246 = "RandomAccessSequence-final.Recursive-Definitions.rev"
d246 v0 v1 v2 = du246 v0 v2
du246 v0 v1 = coe du172 v0 erased (coe d256 v0 erased erased) v1
name256 = "RandomAccessSequence-final.Recursive-Definitions.Rev.go"
d256 v0 v1 v2 v3 v4 = du256 v0 v3 v4
du256 v0 v1 v2
  = let v3
          = coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du1152 v0
              erased
              erased
              (coe MAlonzo.Code.AlgebraStructures.C56
                 (coe MAlonzo.Code.SizeW.C10 (0 :: Integer))
                 (coe MAlonzo.Code.SizeW.d18 erased)
                 erased
                 erased
                 erased
                 erased)
              (coe MAlonzo.Code.AlgebraStructures.C76
                 (\ v3 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
              (coe MAlonzo.Code.DependentPair.d22 v1)
      in
      case coe v3 of
          MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C1070 -> coe du136
                                                                     MAlonzo.Code.SizeW.du14
                                                                     (coe
                                                                        MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C198)
          MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C1078 v4 v5
            v6 -> coe du122
                    (coe v2 (coe du136 v4 v6)
                       (coe MAlonzo.Code.SizeW.du342
                          (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du258 v4)))
                    v5
          _ -> coe MAlonzo.RTE.mazUnreachableError
name282
  = "RandomAccessSequence-final.Recursive-Definitions.rev-verif"
d282 v0 v1 v2 = du282 v0 v2
du282 v0 v1 = coe du172 v0 erased (coe d292 v0 erased erased) v1
name292
  = "RandomAccessSequence-final.Recursive-Definitions.RevVerif.go"
d292 v0 v1 v2 v3 v4 = du292 v0 v3 v4
du292 v0 v1 v2
  = let v3 = coe MAlonzo.Code.DependentPair.d22 v1 in
      let v4
            = coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du1152 v0
                erased
                erased
                (coe MAlonzo.Code.AlgebraStructures.C56
                   (coe MAlonzo.Code.SizeW.C10 (0 :: Integer))
                   (coe MAlonzo.Code.SizeW.d18 erased)
                   erased
                   erased
                   erased
                   erased)
                (coe MAlonzo.Code.AlgebraStructures.C76
                   (\ v4 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                (coe MAlonzo.Code.DependentPair.d22 v1)
        in
        case coe v4 of
            MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C1070 -> coe C184
                                                                       (coe MAlonzo.Code.SizeW.C10
                                                                          (0 :: Integer))
                                                                       (coe MAlonzo.Code.SizeW.C10
                                                                          (0 :: Integer))
                                                                       v3
                                                                       v3
                                                                       erased
            MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C1078 v5 v6
              v7 -> coe du234
                      (coe MAlonzo.Code.DependentPair.d20 (coe du136 v5 v7))
                      v6
                      (coe v2 (coe du136 v5 v7)
                         (coe MAlonzo.Code.SizeW.du342
                            (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du258 v5)))
            _ -> coe MAlonzo.RTE.mazUnreachableError
name318 = "RandomAccessSequence-final.Recursive-Definitions.second"
d318 v0 v1 v2 v3 = du318 v3
du318 v0
  = case coe v0 of
        C184 v1 v2 v3 v4 v5 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name332
  = "RandomAccessSequence-final.Recursive-Definitions.pack-tab"
d332 v0 v1 v2 v3 = du332 v0 v2 v3
du332 v0 v1 v2
  = coe du34 v0 (coe MAlonzo.Code.DependentPair.d22 v1) v2
name342 = "RandomAccessSequence-final._.Same-Size-Seq"
d342 a0 = ()
name344 = "RandomAccessSequence-final._.rev"
d344 = coe d246 () erased
name346 = "RandomAccessSequence-final._.rev-verif"
d346 = coe d282 () erased
name354 = "RandomAccessSequence-final.test-seq"
d354 = coe d100 (10 :: Integer)
name356 = "RandomAccessSequence-final.test-seq-pair"
d356 = coe du136 (coe MAlonzo.Code.SizeW.C10 (10 :: Integer)) d354
name358 = "RandomAccessSequence-final.pair-tab"
d358 v0 v1 = coe du34 () (coe MAlonzo.Code.DependentPair.d22 v0) v1
name368 = "RandomAccessSequence-final.ssseq-tab"
d368 v0 v1
  = case coe v0 of
        C184 v2 v3 v4 v5 v6 -> coe du34 () v5 v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name378 = "RandomAccessSequence-final.revst"
d378
  = coe d358
      (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du3382
         (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
            (coe MAlonzo.Code.SizeW.d18 erased)
            erased
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C76
            (\ v0 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
         d356)
      (1 :: Integer)
name380 = "RandomAccessSequence-final.revst2"
d380
  = coe du34 () (coe MAlonzo.Code.DependentPair.d22 (coe d344 d356))
      (1 :: Integer)
name382 = "RandomAccessSequence-final.revst3"
d382 = coe d358 (coe d344 d356) (1 :: Integer)
name384 = "RandomAccessSequence-final.revst4"
d384 = coe d368 (coe d346 d356) (2 :: Integer)
main = d386
name386 = "RandomAccessSequence-final.main"
d386
  = coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
      (coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
         (coe MAlonzo.Code.IO.Primitive.d30
            (coe MAlonzo.Code.Data.String.d12 (coe Data.Text.pack "Hello")))
         (\ v0 ->
            coe MAlonzo.Code.IO.Primitive.d30
              (coe MAlonzo.Code.Data.String.d12 (coe d104 d384))))
      (\ v0 -> coe MAlonzo.Code.IO.Primitive.d8 () erased (1 :: Integer))