{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Qeval1 where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Unit
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Show
import qualified MAlonzo.Code.Data.String
import qualified MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc
import qualified MAlonzo.Code.IO.Primitive
import qualified MAlonzo.Code.Size
import qualified MAlonzo.Code.Qnumbers
name2 = "eval1.nat"
d2
  = coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
      ((Prelude.+) :: Integer -> Integer -> Integer)
      erased
      erased
      erased
      erased
name6 = "eval1.nat-measure"
d6 v0 = du6
du6 = coe MAlonzo.Code.AlgebraStructures.C76 (\ v0 -> 1 :: Integer)
name10 = "eval1.show-maybe"
d10 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.Nat.Show.d22 v1
        Nothing -> coe Data.Text.pack "nothing"
        _ -> coe MAlonzo.RTE.mazUnreachableError
main = d14
name14 = "eval1.main"
d14
  = coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
      (coe MAlonzo.Code.IO.Primitive.d30
         (coe MAlonzo.Code.Data.String.d12 (coe Data.Text.pack "Hello")))
      (\ v0 ->
         coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
           (coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
              (coe MAlonzo.Code.IO.Primitive.d8 () erased
                 (coe d20 (134217728 :: Integer)))
              (\ v1 ->
                 coe MAlonzo.Code.IO.Primitive.d30
                   (coe MAlonzo.Code.Data.String.d12
                      (coe du26
                         (coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du1152 ()
                            erased
                            (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                               ((Prelude.+) :: Integer -> Integer -> Integer)
                               erased
                               erased
                               erased
                               erased)
                            (coe MAlonzo.Code.AlgebraStructures.C76 (\ v2 -> 1 :: Integer))
                            v1)))))
           (\ v1 ->
              coe MAlonzo.Code.IO.Primitive.d8 () erased (1 :: Integer)))
name16 = "eval1.i"
d16 = error "MAlonzo Runtime Error: postulate evaluated: eval1.i"
name20 = "eval1.big-seq"
d20 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C198
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.du386
                 (coe MAlonzo.Code.AlgebraStructures.C56 (0 :: Integer)
                    ((Prelude.+) :: Integer -> Integer -> Integer)
                    erased
                    erased
                    erased
                    erased)
                 (coe MAlonzo.Code.AlgebraStructures.C76 (\ v2 -> 1 :: Integer))
                 v1
                 (coe d20 v1)
name26 = "eval1.show-viewL"
d26 v0 v1 = du26 v1
du26 v0
  = case coe v0 of
        MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C1070 -> coe
                                                                   Data.Text.pack
                                                                   "nil"
        MAlonzo.Code.FingerTreeZ45ZmeasureZ45ZsizeZ45Zc.C1078 v1 v2
          v3 -> coe MAlonzo.Code.Data.Nat.Show.d22 v2
        _ -> coe MAlonzo.RTE.mazUnreachableError