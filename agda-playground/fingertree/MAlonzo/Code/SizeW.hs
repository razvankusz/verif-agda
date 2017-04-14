{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.SizeW where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Base
import qualified MAlonzo.Code.Induction
import qualified MAlonzo.Code.Induction.WellFounded
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Qnumbers
name4 = "SizeW.SizeW"
d4 a0 = ()

newtype T4 a0 = C10 a0
name14 = "SizeW.\949"
d14 v0 = du14
du14 = coe C10 (0 :: Integer)
name18 = "SizeW._\8729_"
d18 v0 v1 v2 = du18 v1 v2
du18 v0 v1
  = case coe v0 of
        C10 v2 -> case coe v1 of
                      C10 v3 -> coe C10
                                  (coe ((Prelude.+) :: Integer -> Integer -> Integer) v2 v3)
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name30 = "SizeW.\8729-comm"
d30 = erased
name42 = "SizeW._<\738_"
d42 v0 v1 v2 = du42 v1 v2
du42 v0 v1
  = case coe v0 of
        C10 v2 -> case coe v1 of
                      C10 v3 -> coe MAlonzo.Code.Qnumbers.d94 v2 v3
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name50 = "SizeW._<\7511_"
d50 a0 a1 a2 = ()

data T50 a0 a1 a2 = C58 a0 a1 a2
name64 = "SizeW.unit-step"
d64 v0 v1 = du64 v1
du64 v0
  = coe C58 v0
      (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
         v0)
      (coe MAlonzo.Code.Data.Nat.Base.C18 v0 v0
         (coe MAlonzo.Code.Qnumbers.d106 v0))
name72 = "SizeW.\8729\949"
d72 = erased
name80 = "SizeW.\949\8729"
d80 = erased
name92 = "SizeW.\8729-assoc"
d92 = erased
name102 = "SizeW.size-monoid"
d102 v0 = du102
du102
  = coe MAlonzo.Code.AlgebraStructures.C56 du14 (coe d18 erased)
      erased
      erased
      erased
      erased
name106 = "SizeW.getSize"
d106 v0
  = case coe v0 of
        C10 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name114 = "SizeW.less-than._<<_"
d114 a0 a1 a2 = ()

data T114 a0 a1 a2 = C120 a0 a1 a2
name128 = "SizeW.less-than.<-trans"
d128 v0 v1 v2 v3 v4 v5 = du128 v1 v2 v3 v4 v5
du128 v0 v1 v2 v3 v4
  = case coe v0 of
        0 -> case coe v1 of
                 0 -> coe v4
                 _ -> let v5
                            = coe ((Prelude.-) :: Integer -> Integer -> Integer) v2
                                (1 :: Integer)
                        in
                        case coe v3 of
                            MAlonzo.Code.Data.Nat.Base.C18 v6 v7 v8 -> coe
                                                                         MAlonzo.Code.Data.Nat.Base.C18
                                                                         (0 :: Integer)
                                                                         v5
                                                                         (coe
                                                                            MAlonzo.Code.Data.Nat.Base.C10
                                                                            v5)
                            _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> let v5
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               let v6
                     = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                         (1 :: Integer)
                 in
                 let v7
                       = coe ((Prelude.-) :: Integer -> Integer -> Integer) v2
                           (1 :: Integer)
                   in
                   case coe v3 of
                       MAlonzo.Code.Data.Nat.Base.C18 v8 v9 v10 -> case coe v4 of
                                                                       MAlonzo.Code.Data.Nat.Base.C18
                                                                         v11 v12 v13 -> coe
                                                                                          MAlonzo.Code.Data.Nat.Base.C18
                                                                                          v0
                                                                                          v7
                                                                                          (coe du128
                                                                                             v5
                                                                                             v6
                                                                                             v7
                                                                                             v10
                                                                                             v13)
                                                                       _ -> coe
                                                                              MAlonzo.RTE.mazUnreachableError
                       _ -> coe MAlonzo.RTE.mazUnreachableError
name174 = "SizeW.less-than.<-trans2"
d174 v0 v1 v2 v3 v4 v5 = du174 v1 v2 v3 v4 v5
du174 v0 v1 v2 v3 v4
  = case coe v0 of
        0 -> let v5
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v2
                       (1 :: Integer)
               in
               coe MAlonzo.Code.Data.Nat.Base.C18 (0 :: Integer) v5
                 (coe MAlonzo.Code.Data.Nat.Base.C10 v5)
        _ -> let v5
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               let v6
                     = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                         (1 :: Integer)
                 in
                 let v7
                       = coe ((Prelude.-) :: Integer -> Integer -> Integer) v2
                           (1 :: Integer)
                   in
                   case coe v3 of
                       MAlonzo.Code.Data.Nat.Base.C18 v8 v9 v10 -> case coe v4 of
                                                                       MAlonzo.Code.Data.Nat.Base.C18
                                                                         v11 v12 v13 -> coe
                                                                                          MAlonzo.Code.Data.Nat.Base.C18
                                                                                          v0
                                                                                          v7
                                                                                          (coe du174
                                                                                             v5
                                                                                             v6
                                                                                             v7
                                                                                             v10
                                                                                             v13)
                                                                       _ -> coe
                                                                              MAlonzo.RTE.mazUnreachableError
                       _ -> coe MAlonzo.RTE.mazUnreachableError
name218 = "SizeW.less-than.\8804-to-<"
d218 v0 v1 v2 = du218 v1 v2
du218 v0 v1
  = case coe v0 of
        0 -> coe seq v1
               (coe MAlonzo.Code.Data.Nat.Base.C18 (0 :: Integer) v1)
        _ -> case coe v1 of
                 0 -> coe erased
                 _ -> coe MAlonzo.Code.Data.Nat.Base.C18 v0 v1
name234 = "SizeW.less-than.<<-trans"
d234 v0 v1 v2 v3 v4 v5 = du234 v1 v2 v3 v4 v5
du234 v0 v1 v2 v3 v4
  = case coe v0 of
        C10 v5 -> case coe v1 of
                      C10 v6 -> case coe v2 of
                                    C10 v7 -> case coe v3 of
                                                  C120 v8 v9 v10 -> case coe v4 of
                                                                        C120 v11 v12 v13 -> coe C120
                                                                                              v5
                                                                                              v7
                                                                                              (coe
                                                                                                 du128
                                                                                                 v5
                                                                                                 v6
                                                                                                 v7
                                                                                                 v10
                                                                                                 v13)
                                                                        _ -> coe
                                                                               MAlonzo.RTE.mazUnreachableError
                                                  _ -> coe MAlonzo.RTE.mazUnreachableError
                                    _ -> coe MAlonzo.RTE.mazUnreachableError
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name252 = "SizeW.less-than.<<-trans2"
d252 v0 v1 v2 v3 v4 v5 = du252 v2 v3 v4 v5
du252 v0 v1 v2 v3
  = coe seq v1
      (case coe v2 of
           C120 v4 v5 v6 -> coe C120 v4 v0
                              (coe du174 v4
                                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                                    v1)
                                 v0
                                 v6
                                 v3)
           _ -> MAlonzo.RTE.mazUnreachableError)
name288 = "SizeW.less-than.<<-trans3"
d288 v0 v1 v2 v3 v4 v5 = du288 v2 v3 v4 v5
du288 v0 v1 v2 v3
  = case coe v2 of
        C120 v4 v5 v6 -> coe C120 v4 v1 (coe du174 v4 v0 v1 v6 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name314 = "SizeW.less-than.\8804-axiom"
d314 v0 v1 = du314 v1
du314 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe MAlonzo.Code.Data.Nat.Base.C18 v1 v1 (coe du314 v1)
name320 = "SizeW.less-than.<<-axiom0"
d320 v0 v1 = du320 v1
du320 v0
  = case coe v0 of
        0 -> coe C120 (0 :: Integer) (1 :: Integer)
               (coe MAlonzo.Code.Data.Nat.Base.C18 (0 :: Integer) (0 :: Integer)
                  (coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)))
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe C120 v0
                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                    v0)
                 (coe MAlonzo.Code.Data.Nat.Base.C18 v0 v0
                    (coe MAlonzo.Code.Data.Nat.Base.C18 v1 v1 (coe du314 v1)))
name326 = "SizeW.less-than.one-step"
d326 v0 v1 = du326 v1
du326 v0
  = case coe v0 of
        C10 v1 -> coe du320 v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name330 = "SizeW.less-than.<<-Rec"
d330 = erased
name332 = "SizeW.less-than.<<-WF"
d332 = erased
name336 = "SizeW.less-than.<<-WF'"
d336 = erased
name1975 = "SizeW.less-than..absurdlambda"
d1975 = erased