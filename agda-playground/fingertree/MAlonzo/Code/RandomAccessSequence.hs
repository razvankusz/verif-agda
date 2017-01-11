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
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Show
import qualified MAlonzo.Code.Data.String
import qualified MAlonzo.Code.Entry
import qualified MAlonzo.Code.FingerTreeZ45Zmeasure
import qualified MAlonzo.Code.IO.Primitive
import qualified MAlonzo.Code.Size
import qualified MAlonzo.Code.SizeW
name8 = "RandomAccessSequence.Seq"
d8 = erased
name18 = "RandomAccessSequence.length-seq"
d18 v0 v1 v2 = du18 v2
du18 v0
  = coe MAlonzo.Code.SizeW.d70
      (coe MAlonzo.Code.FingerTreeZ45Zmeasure.du496
         (coe MAlonzo.Code.AlgebraStructures.C52 MAlonzo.Code.SizeW.du14
            (coe MAlonzo.Code.SizeW.d18 erased)
            erased
            erased
            erased)
         (coe MAlonzo.Code.AlgebraStructures.C72
            (coe MAlonzo.Code.Entry.d20 erased erased))
         v0)
name26 = "RandomAccessSequence._!_"
d26 v0 v1 v2 v3 = du26 v0 v2 v3
du26 v0 v1 v2
  = let v3
          = coe MAlonzo.Code.FingerTreeZ45Zmeasure.d1410 v0 erased erased
              (coe MAlonzo.Code.AlgebraStructures.C52 MAlonzo.Code.SizeW.du14
                 (coe MAlonzo.Code.SizeW.d18 erased)
                 erased
                 erased
                 erased)
              (coe MAlonzo.Code.AlgebraStructures.C72
                 (coe MAlonzo.Code.Entry.d20 erased erased))
              (coe MAlonzo.Code.SizeW.d26 erased (coe MAlonzo.Code.SizeW.C10 v2))
              MAlonzo.Code.SizeW.du14
              v1
      in
      case coe v3 of
          Just v4 -> case coe v4 of
                         MAlonzo.Code.FingerTreeZ45Zmeasure.C1110 v5 v6 v7 -> coe Just
                                                                                (coe
                                                                                   MAlonzo.Code.Entry.d28
                                                                                   v6)
                         _ -> coe MAlonzo.RTE.mazUnreachableError
          Nothing -> coe Nothing
          _ -> coe MAlonzo.RTE.mazUnreachableError
name54 = "RandomAccessSequence._\9664_"
d54 v0 v1 v2 v3 = du54 v2 v3
du54 v0 v1
  = coe MAlonzo.Code.FingerTreeZ45Zmeasure.du552
      (coe MAlonzo.Code.AlgebraStructures.C52 MAlonzo.Code.SizeW.du14
         (coe MAlonzo.Code.SizeW.d18 erased)
         erased
         erased
         erased)
      (coe MAlonzo.Code.AlgebraStructures.C72
         (coe MAlonzo.Code.Entry.d20 erased erased))
      (coe MAlonzo.Code.Entry.C14 v0)
      v1
name60 = "RandomAccessSequence.big-seq-acc"
d60 v0 v1 v2
  = case coe v0 of
        0 -> coe v2
        _ -> let v3
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe d60 v3
                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                    v1)
                 (coe du54 v1 v2)
name72 = "RandomAccessSequence.big-seq"
d72 v0
  = coe d60 v0 (0 :: Integer)
      (coe MAlonzo.Code.FingerTreeZ45Zmeasure.C56
         MAlonzo.Code.Agda.Builtin.Size.d14)
name76 = "RandomAccessSequence.show-maybe"
d76 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.Nat.Show.d22 v1
        Nothing -> coe Data.Text.pack "nothing"
        _ -> coe MAlonzo.RTE.mazUnreachableError
main = d80
name80 = "RandomAccessSequence.main"
d80
  = coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
      (coe MAlonzo.Code.IO.Primitive.d30
         (coe MAlonzo.Code.Data.String.d12 (coe Data.Text.pack "Hello")))
      (\ v0 ->
         coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
           (coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
              (coe MAlonzo.Code.IO.Primitive.d8 () erased
                 (coe d72 (10000 :: Integer)))
              (\ v1 ->
                 coe MAlonzo.Code.IO.Primitive.d30
                   (coe MAlonzo.Code.Data.String.d12
                      (coe d76 (coe du26 () v1 (2 :: Integer))))))
           (\ v1 ->
              coe MAlonzo.Code.IO.Primitive.d8 () erased (1 :: Integer)))