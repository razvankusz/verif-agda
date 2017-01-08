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
import qualified MAlonzo.Code.Data.Bool.Base
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
name68 = "functionalarray._$_"
d68 v0 v1 v2 v3 = du68 v2 v3
du68 v0 v1
  = case coe v0 of
        C38 -> coe C40 v1 (coe C38) (coe C38)
        C40 v2 v3 v4 -> coe MAlonzo.Code.Data.Bool.Base.du14
                          (coe d54 (coe du46 v3) (coe du46 v4))
                          (coe C40 v2 (coe du68 v3 v1) v4)
                          (coe C40 v2 v3 (coe du68 v4 v1))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name80 = "functionalarray.test-tree"
d80
  = coe du68
      (coe du68
         (coe du68
            (coe du68
               (coe du68
                  (coe du68
                     (coe du68 (coe du68 (coe C38) (1 :: Integer)) (2 :: Integer))
                     (3 :: Integer))
                  (4 :: Integer))
               (5 :: Integer))
            (6 :: Integer))
         (7 :: Integer))
      (8 :: Integer)
name92 = "functionalarray._!_"
d92 v0 v1 v2 v3 v4 = du92 v3 v4
du92 v0 v1
  = case coe v1 of
        C38 -> coe Nothing
        C40 v2 v3 v4 -> case coe v0 of
                            C4 -> coe Nothing
                            C8 v5 v6 -> coe du92 v6 v3
                            C12 v5 v6 -> let v7 = coe du92 v6 v4 in
                                           case coe v6 of
                                               C4 -> coe Just v2
                                               _ -> coe v7
                            _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name124 = "functionalarray.big-tree"
d124 v0 v1
  = case coe v0 of
        0 -> coe v1
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe d124 v2 (coe du68 v1 v0)
name132 = "functionalarray.show-maybe"
d132 v0
  = case coe v0 of
        Just v1 -> coe MAlonzo.Code.Data.Nat.Show.d22 v1
        Nothing -> coe Data.Text.pack "nothing"
        _ -> coe MAlonzo.RTE.mazUnreachableError
main = d136
name136 = "functionalarray.main"
d136
  = coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
      (coe MAlonzo.Code.IO.Primitive.d30
         (coe MAlonzo.Code.Data.String.d12 (coe Data.Text.pack "Hello")))
      (\ v0 ->
         coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
           (coe MAlonzo.Code.IO.Primitive.d18 () () erased erased
              (coe MAlonzo.Code.IO.Primitive.d8 () erased
                 (coe d124 (10000 :: Integer) (coe C38)))
              (\ v1 ->
                 coe MAlonzo.Code.IO.Primitive.d30
                   (coe MAlonzo.Code.Data.String.d12
                      (coe d132 (coe du92 (coe d24 (2 :: Integer)) v1)))))
           (\ v1 ->
              coe MAlonzo.Code.IO.Primitive.d8 () erased (1 :: Integer)))
name138 = "functionalarray.input-tree"
d138
  = coe C40 (100 :: Integer)
      (coe C40 (99 :: Integer)
         (coe C40 (97 :: Integer)
            (coe C40 (93 :: Integer)
               (coe C40 (85 :: Integer)
                  (coe C40 (69 :: Integer)
                     (coe C40 (37 :: Integer) (coe C38) (coe C38))
                     (coe C40 (5 :: Integer) (coe C38) (coe C38)))
                  (coe C40 (53 :: Integer)
                     (coe C40 (21 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (77 :: Integer)
                  (coe C40 (61 :: Integer)
                     (coe C40 (29 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (45 :: Integer)
                     (coe C40 (13 :: Integer) (coe C38) (coe C38))
                     (coe C38))))
            (coe C40 (89 :: Integer)
               (coe C40 (81 :: Integer)
                  (coe C40 (65 :: Integer)
                     (coe C40 (33 :: Integer) (coe C38) (coe C38))
                     (coe C40 (1 :: Integer) (coe C38) (coe C38)))
                  (coe C40 (49 :: Integer)
                     (coe C40 (17 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (73 :: Integer)
                  (coe C40 (57 :: Integer)
                     (coe C40 (25 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (41 :: Integer)
                     (coe C40 (9 :: Integer) (coe C38) (coe C38))
                     (coe C38)))))
         (coe C40 (95 :: Integer)
            (coe C40 (91 :: Integer)
               (coe C40 (83 :: Integer)
                  (coe C40 (67 :: Integer)
                     (coe C40 (35 :: Integer) (coe C38) (coe C38))
                     (coe C40 (3 :: Integer) (coe C38) (coe C38)))
                  (coe C40 (51 :: Integer)
                     (coe C40 (19 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (75 :: Integer)
                  (coe C40 (59 :: Integer)
                     (coe C40 (27 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (43 :: Integer)
                     (coe C40 (11 :: Integer) (coe C38) (coe C38))
                     (coe C38))))
            (coe C40 (87 :: Integer)
               (coe C40 (79 :: Integer)
                  (coe C40 (63 :: Integer)
                     (coe C40 (31 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (47 :: Integer)
                     (coe C40 (15 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (71 :: Integer)
                  (coe C40 (55 :: Integer)
                     (coe C40 (23 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (39 :: Integer)
                     (coe C40 (7 :: Integer) (coe C38) (coe C38))
                     (coe C38))))))
      (coe C40 (98 :: Integer)
         (coe C40 (96 :: Integer)
            (coe C40 (92 :: Integer)
               (coe C40 (84 :: Integer)
                  (coe C40 (68 :: Integer)
                     (coe C40 (36 :: Integer) (coe C38) (coe C38))
                     (coe C40 (4 :: Integer) (coe C38) (coe C38)))
                  (coe C40 (52 :: Integer)
                     (coe C40 (20 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (76 :: Integer)
                  (coe C40 (60 :: Integer)
                     (coe C40 (28 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (44 :: Integer)
                     (coe C40 (12 :: Integer) (coe C38) (coe C38))
                     (coe C38))))
            (coe C40 (88 :: Integer)
               (coe C40 (80 :: Integer)
                  (coe C40 (64 :: Integer)
                     (coe C40 (32 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (48 :: Integer)
                     (coe C40 (16 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (72 :: Integer)
                  (coe C40 (56 :: Integer)
                     (coe C40 (24 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (40 :: Integer)
                     (coe C40 (8 :: Integer) (coe C38) (coe C38))
                     (coe C38)))))
         (coe C40 (94 :: Integer)
            (coe C40 (90 :: Integer)
               (coe C40 (82 :: Integer)
                  (coe C40 (66 :: Integer)
                     (coe C40 (34 :: Integer) (coe C38) (coe C38))
                     (coe C40 (2 :: Integer) (coe C38) (coe C38)))
                  (coe C40 (50 :: Integer)
                     (coe C40 (18 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (74 :: Integer)
                  (coe C40 (58 :: Integer)
                     (coe C40 (26 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (42 :: Integer)
                     (coe C40 (10 :: Integer) (coe C38) (coe C38))
                     (coe C38))))
            (coe C40 (86 :: Integer)
               (coe C40 (78 :: Integer)
                  (coe C40 (62 :: Integer)
                     (coe C40 (30 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (46 :: Integer)
                     (coe C40 (14 :: Integer) (coe C38) (coe C38))
                     (coe C38)))
               (coe C40 (70 :: Integer)
                  (coe C40 (54 :: Integer)
                     (coe C40 (22 :: Integer) (coe C38) (coe C38))
                     (coe C38))
                  (coe C40 (38 :: Integer)
                     (coe C40 (6 :: Integer) (coe C38) (coe C38))
                     (coe C38))))))