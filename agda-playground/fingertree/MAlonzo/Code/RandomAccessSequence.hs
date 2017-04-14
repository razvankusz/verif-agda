{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.RandomAccessSequence where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Size
import qualified MAlonzo.Code.Agda.Builtin.Unit
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Show
import qualified MAlonzo.Code.Data.String
import qualified MAlonzo.Code.Entry
import qualified MAlonzo.Code.FingerTreeZ45Zmeasure
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.IO.Primitive
import qualified MAlonzo.Code.Induction.WellFounded
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Size
import qualified MAlonzo.Code.SizeW
name8 = "RandomAccessSequence.Seq"
d8 = erased
name18 = "RandomAccessSequence.length-seq"
d18 v0 v1 v2 = du18 v2
du18 v0
  = coe MAlonzo.Code.SizeW.d106
      (coe MAlonzo.Code.FingerTreeZ45Zmeasure.du498
         (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
            (coe MAlonzo.Code.SizeW.d18 erased)
            erased
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C76
            (\ v1 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
         v0)
name26 = "RandomAccessSequence._!_"
d26 v0 v1 v2 v3 = du26 v0 v2 v3
du26 v0 v1 v2
  = let v3
          = coe MAlonzo.Code.FingerTreeZ45Zmeasure.d1412 v0 erased erased
              (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                 (coe MAlonzo.Code.SizeW.d18 erased)
                 erased
                 erased
                 erased
                 erased)
              (coe MAlonzo.Code.AlgebraStructures.C76
                 (\ v3 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
              (coe MAlonzo.Code.SizeW.d42 erased (coe MAlonzo.Code.SizeW.C10 v2))
              MAlonzo.Code.SizeW.du14
              v1
      in
      case coe v3 of
          Just v4 -> case coe v4 of
                         MAlonzo.Code.FingerTreeZ45Zmeasure.C1112 v5 v6 v7 -> coe Just
                                                                                (coe
                                                                                   MAlonzo.Code.Entry.d20
                                                                                   v6)
                         _ -> coe MAlonzo.RTE.mazUnreachableError
          Nothing -> coe Nothing
          _ -> coe MAlonzo.RTE.mazUnreachableError
name54 = "RandomAccessSequence._\9664_"
d54 v0 v1 v2 v3 = du54 v2 v3
du54 v0 v1
  = coe MAlonzo.Code.FingerTreeZ45Zmeasure.du554
      (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
         (coe MAlonzo.Code.SizeW.d18 erased)
         erased
         erased
         erased
         erased)
      (coe MAlonzo.Code.AlgebraStructures.C76
         (\ v2 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
      (coe MAlonzo.Code.Entry.C14 v0)
      v1
name68 = "RandomAccessSequence.seq-measure-lemma1"
d68 v0 v1 v2 v3 = du68 v3
du68 v0
  = case coe v0 of
        MAlonzo.Code.SizeW.C10 v1 -> coe MAlonzo.Code.SizeW.du64 v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name82 = "RandomAccessSequence.seq-measure-lemma0"
d82 v0 v1 v2 v3 = du82 v3
du82 v0
  = coe du68
      (coe MAlonzo.Code.FingerTreeZ45Zmeasure.du498
         (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
            (coe MAlonzo.Code.SizeW.d18 erased)
            erased
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C76
            (\ v1 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
         v0)
name94 = "RandomAccessSequence.big-seq"
d94 v0 v1 = du94 v1
du94 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.FingerTreeZ45Zmeasure.C56
               MAlonzo.Code.Agda.Builtin.Size.d14
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe MAlonzo.Code.FingerTreeZ45Zmeasure.du554
                 (coe MAlonzo.Code.AlgebraStructures.C56 MAlonzo.Code.SizeW.du14
                    (coe MAlonzo.Code.SizeW.d18 erased)
                    erased
                    erased
                    erased
                    erased)
                 (coe MAlonzo.Code.AlgebraStructures.C76
                    (\ v2 -> coe MAlonzo.Code.SizeW.C10 (1 :: Integer)))
                 (coe MAlonzo.Code.Entry.C14 v1)
                 (coe du94 v1)
name98 = "RandomAccessSequence.show-maybe"
d98 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.Nat.Show.d22 v1
        Nothing -> coe Data.Text.pack "nothing"
        _ -> coe MAlonzo.RTE.mazUnreachableError
main = d102
name102 = "RandomAccessSequence.main"
d102
  = coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
      (coe MAlonzo.Code.IO.Primitive.d30
         (coe MAlonzo.Code.Data.String.d12 (coe Data.Text.pack "Hello")))
      (\ v0 ->
         coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
           (coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
              (coe MAlonzo.Code.IO.Primitive.d8 () erased
                 (coe du94 (1000 :: Integer)))
              (\ v1 ->
                 coe MAlonzo.Code.IO.Primitive.d30
                   (coe MAlonzo.Code.Data.String.d12
                      (coe d98 (coe du26 () v1 (2 :: Integer))))))
           (\ v1 ->
              coe MAlonzo.Code.IO.Primitive.d8 () erased (1 :: Integer)))