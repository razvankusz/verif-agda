{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Qfunctionalarray where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Unit
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Show
import qualified MAlonzo.Code.Data.String
import qualified MAlonzo.Code.IO.Primitive
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
name2 = "functionalarray.Repr"
d2 a0 = ()

data T2 a0 a1 = C4
              | C8 a0 a1
              | C12 a0 a1
name16 = "functionalarray._+1"
d16 v0 v1 = du16 v1
du16 v0
  = case coe v0 of
        C4 -> coe C12 (0 :: Integer) (coe C4)
        C8 v1 v2 -> coe C12 v1 v2
        C12 v1 v2 -> coe C8
                       (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                          v1)
                       (coe du16 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name24 = "functionalarray.repr"
d24 v0
  = case coe v0 of
        0 -> coe C4
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe du16 (coe d24 v1)
name32 = "functionalarray.BinTree"
d32 a0 a1 = ()

data T32 a0 a1 a2 = C38
                  | C40 a0 a1 a2
name46 = "functionalarray.length"
d46 v0 v1 v2 = du46 v2
du46 v0
  = case coe v0 of
        C38 -> 0 :: Integer
        C40 v1 v2 v3 -> coe ((Prelude.+) :: Integer -> Integer -> Integer)
                          (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                             (coe du46 v2))
                          (coe du46 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name54 = "functionalarray._<=_"
d54 v0 v1
  = case coe v0 of
        0 -> coe True
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe False
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in coe d54 v2 v3
name72 = "functionalarray.append"
d72 v0 v1 v2 v3 v4 v5 = du72 v3 v4 v5
du72 v0 v1 v2
  = case coe v1 of
        C38 -> coe C40 v2 (coe C38) (coe C38)
        C40 v3 v4 v5 -> case coe v0 of
                            C4 -> coe C40 v3 v4 v5
                            C8 v6 v7 -> coe C40 v3 (coe du72 v7 v4 v2) v5
                            C12 v6 v7 -> coe C40 v3 v4 (coe du72 v7 v5 v2)
                            _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name110 = "functionalarray._$_"
d110 v0 v1 v2 v3 = du110 v2 v3
du110 v0 v1 = coe du72 (coe d24 (coe du46 v0)) v0 v1
name116 = "functionalarray.test-tree"
d116
  = coe du110
      (coe du110
         (coe du110
            (coe du110
               (coe du110
                  (coe du110
                     (coe du110 (coe du110 (coe C38) (1 :: Integer)) (2 :: Integer))
                     (3 :: Integer))
                  (4 :: Integer))
               (5 :: Integer))
            (6 :: Integer))
         (7 :: Integer))
      (8 :: Integer)
name128 = "functionalarray._!_"
d128 v0 v1 v2 v3 v4 = du128 v3 v4
du128 v0 v1
  = case coe v1 of
        C38 -> coe Nothing
        C40 v2 v3 v4 -> case coe v0 of
                            C4 -> coe Nothing
                            C8 v5 v6 -> coe du128 v6 v3
                            C12 v5 v6 -> let v7 = coe du128 v6 v4 in
                                           case coe v6 of
                                               C4 -> coe Just v2
                                               _ -> coe v7
                            _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name160 = "functionalarray.big-tree"
d160 v0 v1
  = case coe v0 of
        0 -> coe v1
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe d160 v2 (coe du110 v1 v0)
name168 = "functionalarray.show-maybe"
d168 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.Nat.Show.d22 v1
        Nothing -> coe Data.Text.pack "nothing"
        _ -> coe MAlonzo.RTE.mazUnreachableError
main = d172
name172 = "functionalarray.main"
d172
  = coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
      (coe MAlonzo.Code.IO.Primitive.d30
         (coe MAlonzo.Code.Data.String.d12 (coe Data.Text.pack "Hello")))
      (\ v0 ->
         coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
           (coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
              (coe MAlonzo.Code.IO.Primitive.d8 () erased
                 (coe d160 (10000 :: Integer) (coe C38)))
              (\ v1 ->
                 coe MAlonzo.Code.IO.Primitive.d30
                   (coe MAlonzo.Code.Data.String.d12
                      (coe d168 (coe du128 (coe d24 (2 :: Integer)) v1)))))
           (\ v1 ->
              coe MAlonzo.Code.IO.Primitive.d8 () erased (1 :: Integer)))