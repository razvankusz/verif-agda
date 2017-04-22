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
name50 = "SizeW._<=\738_"
d50 v0 v1 v2 = du50 v1 v2
du50 v0 v1
  = case coe v0 of
        C10 v2 -> case coe v1 of
                      C10 v3 -> coe MAlonzo.Code.Qnumbers.d104 v2 v3
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name58 = "SizeW._==\738_"
d58 v0 v1 v2 = du58 v1 v2
du58 v0 v1
  = case coe v0 of
        C10 v2 -> case coe v1 of
                      C10 v3 -> coe MAlonzo.Code.Qnumbers.d84 v2 v3
                      _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name66 = "SizeW._<\7511_"
d66 a0 a1 a2 = ()

data T66 a0 a1 a2 = C74 a0 a1 a2
name80 = "SizeW.unit-step"
d80 v0 v1 = du80 v1
du80 v0
  = coe C74 v0
      (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
         v0)
      (coe MAlonzo.Code.Data.Nat.Base.C18 v0 v0
         (coe MAlonzo.Code.Qnumbers.d116 v0))
name88 = "SizeW.\8729\949"
d88 = erased
name96 = "SizeW.\949\8729"
d96 = erased
name108 = "SizeW.\8729-assoc"
d108 = erased
name118 = "SizeW.size-monoid"
d118 v0 = du118
du118
  = coe MAlonzo.Code.AlgebraStructures.C56 du14 (coe d18 erased)
      erased
      erased
      erased
      erased
name122 = "SizeW.getSize"
d122 v0
  = case coe v0 of
        C10 v1 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name130 = "SizeW.less-than._<<_"
d130 a0 a1 a2 = ()

data T130 a0 a1 a2 = C136 a0 a1 a2
name144 = "SizeW.less-than.<-trans"
d144 v0 v1 v2 v3 v4 v5 = du144 v1 v2 v3 v4 v5
du144 v0 v1 v2 v3 v4
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
                                                                                          (coe du144
                                                                                             v5
                                                                                             v6
                                                                                             v7
                                                                                             v10
                                                                                             v13)
                                                                       _ -> coe
                                                                              MAlonzo.RTE.mazUnreachableError
                       _ -> coe MAlonzo.RTE.mazUnreachableError
name190 = "SizeW.less-than.<-trans2"
d190 v0 v1 v2 v3 v4 v5 = du190 v1 v2 v3 v4 v5
du190 v0 v1 v2 v3 v4
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
                                                                                          (coe du190
                                                                                             v5
                                                                                             v6
                                                                                             v7
                                                                                             v10
                                                                                             v13)
                                                                       _ -> coe
                                                                              MAlonzo.RTE.mazUnreachableError
                       _ -> coe MAlonzo.RTE.mazUnreachableError
name234 = "SizeW.less-than.\8804-to-<"
d234 v0 v1 v2 = du234 v1 v2
du234 v0 v1
  = case coe v0 of
        0 -> coe seq v1
               (coe MAlonzo.Code.Data.Nat.Base.C18 (0 :: Integer) v1)
        _ -> case coe v1 of
                 0 -> coe erased
                 _ -> coe MAlonzo.Code.Data.Nat.Base.C18 v0 v1
name250 = "SizeW.less-than.<<-trans"
d250 v0 v1 v2 v3 v4 v5 = du250 v1 v2 v3 v4 v5
du250 v0 v1 v2 v3 v4
  = case coe v0 of
        C10 v5 -> case coe v1 of
                      C10 v6 -> case coe v2 of
                                    C10 v7 -> case coe v3 of
                                                  C136 v8 v9 v10 -> case coe v4 of
                                                                        C136 v11 v12 v13 -> coe C136
                                                                                              v5
                                                                                              v7
                                                                                              (coe
                                                                                                 du144
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
name268 = "SizeW.less-than.<<-trans2"
d268 v0 v1 v2 v3 v4 v5 = du268 v2 v3 v4 v5
du268 v0 v1 v2 v3
  = coe seq v1
      (case coe v2 of
           C136 v4 v5 v6 -> coe C136 v4 v0
                              (coe du190 v4
                                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                                    v1)
                                 v0
                                 v6
                                 v3)
           _ -> MAlonzo.RTE.mazUnreachableError)
name304 = "SizeW.less-than.<<-trans3"
d304 v0 v1 v2 v3 v4 v5 = du304 v2 v3 v4 v5
du304 v0 v1 v2 v3
  = case coe v2 of
        C136 v4 v5 v6 -> coe C136 v4 v1 (coe du190 v4 v0 v1 v6 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name330 = "SizeW.less-than.\8804-axiom"
d330 v0 v1 = du330 v1
du330 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe MAlonzo.Code.Data.Nat.Base.C18 v1 v1 (coe du330 v1)
name336 = "SizeW.less-than.<<-axiom0"
d336 v0 v1 = du336 v1
du336 v0
  = case coe v0 of
        0 -> coe C136 (0 :: Integer) (1 :: Integer)
               (coe MAlonzo.Code.Data.Nat.Base.C18 (0 :: Integer) (0 :: Integer)
                  (coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)))
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe C136 v0
                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                    v0)
                 (coe MAlonzo.Code.Data.Nat.Base.C18 v0 v0
                    (coe MAlonzo.Code.Data.Nat.Base.C18 v1 v1 (coe du330 v1)))
name342 = "SizeW.less-than.one-step-lemma"
d342 v0 v1 = du342 v1
du342 v0
  = case coe v0 of
        C10 v1 -> coe du336 v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name346 = "SizeW.less-than.<<-Rec"
d346 = erased
name348 = "SizeW.less-than.<<-WF"
d348 = erased
name352 = "SizeW.less-than.<<-WF'"
d352 = erased
name2047 = "SizeW.less-than..absurdlambda"
d2047 = erased