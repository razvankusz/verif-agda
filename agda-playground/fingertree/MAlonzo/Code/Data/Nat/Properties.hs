{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Data.Nat.Properties where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Nat
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified
       MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing
import qualified MAlonzo.Code.Algebra.RingSolver.Simple
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Base
import qualified MAlonzo.Code.Data.Nat.Properties.Simple
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Data.Sum
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified
       MAlonzo.Code.Relation.Binary.PropositionalEquality.Core
import qualified MAlonzo.Code.Relation.Nullary
name8 = "Data.Nat.Properties._.refl"
d8 v0
  = coe MAlonzo.Code.Relation.Binary.d38
      (coe MAlonzo.Code.Relation.Binary.d268
         (coe MAlonzo.Code.Relation.Binary.d842
            (coe MAlonzo.Code.Relation.Binary.d970
               (coe MAlonzo.Code.Relation.Binary.d1052
                  MAlonzo.Code.Data.Nat.d12))))
      v0
      v0
      (coe MAlonzo.Code.Relation.Binary.Core.d516
         (coe MAlonzo.Code.Relation.Binary.d36
            (coe MAlonzo.Code.Relation.Binary.d268
               (coe MAlonzo.Code.Relation.Binary.d842
                  (coe MAlonzo.Code.Relation.Binary.d970
                     (coe MAlonzo.Code.Relation.Binary.d1052
                        MAlonzo.Code.Data.Nat.d12)))))
         v0)
name14 = "Data.Nat.Properties._._DistributesOver_"
d14 = erased
name22 = "Data.Nat.Properties._.Absorptive"
d22 = erased
name32 = "Data.Nat.Properties._.Identity"
d32 = erased
name52 = "Data.Nat.Properties._.Zero"
d52 = erased
name58 = "Data.Nat.Properties.isCommutativeSemiring"
d58
  = coe MAlonzo.Code.Algebra.Structures.C313
      (coe MAlonzo.Code.Algebra.Structures.C71
         (coe MAlonzo.Code.Algebra.Structures.C25
            MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
            erased
            erased)
         erased
         erased)
      (coe MAlonzo.Code.Algebra.Structures.C71
         (coe MAlonzo.Code.Algebra.Structures.C25
            MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
            erased
            erased)
         erased
         erased)
      erased
      erased
name64 = "Data.Nat.Properties.commutativeSemiring"
d64
  = coe MAlonzo.Code.Algebra.C239 erased erased
      ((Prelude.+) :: Integer -> Integer -> Integer)
      ((Prelude.*) :: Integer -> Integer -> Integer)
      (0 :: Integer)
      (1 :: Integer)
      d58
name68 = "Data.Nat.Properties.SemiringSolver._*H_"
d68
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d118 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name70 = "Data.Nat.Properties.SemiringSolver._*HN_"
d70
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d120 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name72 = "Data.Nat.Properties.SemiringSolver._*N_"
d72
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d122 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name74 = "Data.Nat.Properties.SemiringSolver._*NH_"
d74
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d124 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name80 = "Data.Nat.Properties.SemiringSolver._*x+H_"
d80
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d130 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name82 = "Data.Nat.Properties.SemiringSolver._*x+HN_"
d82
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d132 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name84 = "Data.Nat.Properties.SemiringSolver._+H_"
d84
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d134 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name86 = "Data.Nat.Properties.SemiringSolver._+N_"
d86
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d136 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name88 = "Data.Nat.Properties.SemiringSolver._:*_"
d88
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d138 erased erased
      erased
      erased
name90 = "Data.Nat.Properties.SemiringSolver._:+_"
d90
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d140 erased erased
      erased
      erased
name92 = "Data.Nat.Properties.SemiringSolver._:-_"
d92
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d142 erased erased
      erased
      erased
name94 = "Data.Nat.Properties.SemiringSolver._\8860_"
d94 = MAlonzo.Code.Algebra.RingSolver.Simple.du144
name98 = "Data.Nat.Properties.SemiringSolver._^N_"
d98
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d148 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name100 = "Data.Nat.Properties.SemiringSolver._\8776H_"
d100 a0 a1 a2 = ()
name102 = "Data.Nat.Properties.SemiringSolver._\8776N_"
d102 a0 a1 a2 = ()
name104 = "Data.Nat.Properties.SemiringSolver._\8799H_"
d104
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d154 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name106 = "Data.Nat.Properties.SemiringSolver._\8799N_"
d106
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d156 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name108 = "Data.Nat.Properties.SemiringSolver.*H-homo"
d108 = erased
name110 = "Data.Nat.Properties.SemiringSolver.*HN-homo"
d110 = erased
name112 = "Data.Nat.Properties.SemiringSolver.*N-homo"
d112 = erased
name114 = "Data.Nat.Properties.SemiringSolver.*NH-homo"
d114 = erased
name116 = "Data.Nat.Properties.SemiringSolver.*x+H-homo"
d116 = erased
name118 = "Data.Nat.Properties.SemiringSolver.*x+HN\8776*x+"
d118 = erased
name120 = "Data.Nat.Properties.SemiringSolver.+H-homo"
d120 = erased
name122 = "Data.Nat.Properties.SemiringSolver.+N-homo"
d122 = erased
name124 = "Data.Nat.Properties.SemiringSolver.-H_"
d124
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d174 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name126 = "Data.Nat.Properties.SemiringSolver.-H\8255-homo"
d126 = erased
name128 = "Data.Nat.Properties.SemiringSolver.-N_"
d128
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d178 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name130 = "Data.Nat.Properties.SemiringSolver.-N\8255-homo"
d130 = erased
name132 = "Data.Nat.Properties.SemiringSolver.0H"
d132 = MAlonzo.Code.Algebra.RingSolver.Simple.du182
name134 = "Data.Nat.Properties.SemiringSolver.0N"
d134
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du184
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
name136 = "Data.Nat.Properties.SemiringSolver.0N-homo"
d136 = erased
name138
  = "Data.Nat.Properties.SemiringSolver.0\8776\10214\&0\10215"
d138 = erased
name140 = "Data.Nat.Properties.SemiringSolver.1H"
d140
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d190 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name142 = "Data.Nat.Properties.SemiringSolver.1N"
d142
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d192 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name144 = "Data.Nat.Properties.SemiringSolver.1N-homo"
d144 = erased
name148 = "Data.Nat.Properties.SemiringSolver.HNF"
d148 a0 = ()
name150 = "Data.Nat.Properties.SemiringSolver.Normal"
d150 a0 = ()
name152 = "Data.Nat.Properties.SemiringSolver.Op"
d152 = ()
name154 = "Data.Nat.Properties.SemiringSolver.Polynomial"
d154 a0 = ()
name160 = "Data.Nat.Properties.SemiringSolver.^N-homo"
d160 = erased
name168 = "Data.Nat.Properties.SemiringSolver.correct"
d168 = erased
name170 = "Data.Nat.Properties.SemiringSolver.correct-con"
d170 = erased
name172 = "Data.Nat.Properties.SemiringSolver.correct-var"
d172 = erased
name174 = "Data.Nat.Properties.SemiringSolver.normalise"
d174
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d224 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name176 = "Data.Nat.Properties.SemiringSolver.normalise-con"
d176
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d226 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name178 = "Data.Nat.Properties.SemiringSolver.normalise-var"
d178
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d228 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name186 = "Data.Nat.Properties.SemiringSolver.prove"
d186 = erased
name188 = "Data.Nat.Properties.SemiringSolver.sem"
d188
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du238
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
name190 = "Data.Nat.Properties.SemiringSolver.solve"
d190
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d240 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name198 = "Data.Nat.Properties.SemiringSolver.\8709*x+HN-homo"
d198 = erased
name200 = "Data.Nat.Properties.SemiringSolver.\10214_\10215"
d200
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du250
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
name202 = "Data.Nat.Properties.SemiringSolver.\10214_\10215H"
d202
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d252 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name204 = "Data.Nat.Properties.SemiringSolver.\10214_\10215H-cong"
d204 = erased
name206 = "Data.Nat.Properties.SemiringSolver.\10214_\10215N"
d206
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d256 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name208 = "Data.Nat.Properties.SemiringSolver.\10214_\10215N-cong"
d208 = erased
name210 = "Data.Nat.Properties.SemiringSolver.\10214_\10215\8595"
d210
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d260 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d64)
      MAlonzo.Code.Data.Nat.Base.d220
name254 = "Data.Nat.Properties.\8852-assoc"
d254 = erased
name270 = "Data.Nat.Properties.\8852-identity"
d270 = coe MAlonzo.Code.Data.Product.C30 erased erased
name276 = "Data.Nat.Properties._.n\8852\&0\8801n"
d276 = erased
name282 = "Data.Nat.Properties.\8852-comm"
d282 = erased
name292 = "Data.Nat.Properties.\8851-assoc"
d292 = erased
name308 = "Data.Nat.Properties.\8851-zero"
d308 = coe MAlonzo.Code.Data.Product.C30 erased erased
name314 = "Data.Nat.Properties._.n\8851\&0\8801\&0"
d314 = erased
name320 = "Data.Nat.Properties.\8851-comm"
d320 = erased
name330 = "Data.Nat.Properties.distrib-\8851-\8852"
d330 = coe MAlonzo.Code.Data.Product.C30 erased erased
name336 = "Data.Nat.Properties._.distrib\691-\8851-\8852"
d336 = erased
name356 = "Data.Nat.Properties._.distrib\737-\8851-\8852"
d356 = erased
name364
  = "Data.Nat.Properties.\8852-\8851-0-isCommutativeSemiringWithoutOne"
d364
  = coe MAlonzo.Code.Algebra.Structures.C287
      (coe MAlonzo.Code.Algebra.Structures.C199
         (coe MAlonzo.Code.Algebra.Structures.C71
            (coe MAlonzo.Code.Algebra.Structures.C25
               MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
               erased
               erased)
            (coe MAlonzo.Code.Data.Product.d26 d270)
            erased)
         (coe MAlonzo.Code.Algebra.Structures.C25
            MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
            erased
            erased)
         d330
         d308)
      erased
name366
  = "Data.Nat.Properties.\8852-\8851-0-commutativeSemiringWithoutOne"
d366
  = coe MAlonzo.Code.Algebra.C217 erased erased
      MAlonzo.Code.Data.Nat.Base.d192
      MAlonzo.Code.Data.Nat.Base.d202
      (0 :: Integer)
      d364
name368 = "Data.Nat.Properties.absorptive-\8851-\8852"
d368 = coe MAlonzo.Code.Data.Product.C30 erased erased
name374 = "Data.Nat.Properties._.abs-\8852-\8851"
d374 = erased
name384 = "Data.Nat.Properties._.abs-\8851-\8852"
d384 = erased
name394 = "Data.Nat.Properties.isDistributiveLattice"
d394
  = coe MAlonzo.Code.Algebra.Structures.C573
      (coe MAlonzo.Code.Algebra.Structures.C539
         MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
         erased
         erased
         erased
         erased
         erased
         erased
         d368)
      (coe MAlonzo.Code.Data.Product.d28 d330)
name396 = "Data.Nat.Properties.distributiveLattice"
d396
  = coe MAlonzo.Code.Algebra.C355 erased erased
      MAlonzo.Code.Data.Nat.Base.d202
      MAlonzo.Code.Data.Nat.Base.d192
      d394
name398 = "Data.Nat.Properties.\8851-sel"
d398 v0 v1
  = case coe v0 of
        0 -> coe Left erased
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe Right erased
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in
                          let v4 = coe d398 v2 v3 in
                            case coe v4 of
                                Left v5 -> coe Left erased
                                Right v5 -> coe Right erased
                                _ -> coe MAlonzo.RTE.mazUnreachableError
name422 = "Data.Nat.Properties.\8852-sel"
d422 v0 v1
  = case coe v0 of
        0 -> coe Right erased
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe Left erased
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in
                          let v4 = coe d422 v2 v3 in
                            case coe v4 of
                                Left v5 -> coe Left erased
                                Right v5 -> coe Right erased
                                _ -> coe MAlonzo.RTE.mazUnreachableError
name450 = "Data.Nat.Properties.\8804-step"
d450 v0 v1 v2 = du450 v1 v2
du450 v0 v1
  = case coe v1 of
        MAlonzo.Code.Data.Nat.Base.C10 v2 -> coe
                                               MAlonzo.Code.Data.Nat.Base.C10
                                               (coe ((Prelude.+) :: Integer -> Integer -> Integer)
                                                  (1 :: Integer)
                                                  v0)
        MAlonzo.Code.Data.Nat.Base.C18 v2 v3 v4 -> coe
                                                     MAlonzo.Code.Data.Nat.Base.C18
                                                     v2
                                                     (coe
                                                        ((Prelude.+) :: Integer -> Integer -> Integer)
                                                        (1 :: Integer)
                                                        v3)
                                                     (coe du450 v3 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name454 = "Data.Nat.Properties.\8804\8242\8658\8804"
d454 v0 v1 v2 = du454 v0 v2
du454 v0 v1
  = case coe v1 of
        MAlonzo.Code.Data.Nat.Base.C68 -> coe d8 v0
        MAlonzo.Code.Data.Nat.Base.C74 v2 v3 -> coe du450 v2
                                                  (coe du454 v0 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name460 = "Data.Nat.Properties.z\8804\8242n"
d460 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C68
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe MAlonzo.Code.Data.Nat.Base.C74 v1 (coe d460 v1)
name468 = "Data.Nat.Properties.s\8804\8242s"
d468 v0 v1 v2 = du468 v2
du468 v0
  = case coe v0 of
        MAlonzo.Code.Data.Nat.Base.C68 -> coe
                                            MAlonzo.Code.Data.Nat.Base.C68
        MAlonzo.Code.Data.Nat.Base.C74 v1 v2 -> coe
                                                  MAlonzo.Code.Data.Nat.Base.C74
                                                  (coe
                                                     ((Prelude.+) :: Integer -> Integer -> Integer)
                                                     (1 :: Integer)
                                                     v1)
                                                  (coe du468 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name472 = "Data.Nat.Properties.\8804\8658\8804\8242"
d472 v0 v1 v2 = du472 v1 v2
du472 v0 v1
  = case coe v1 of
        MAlonzo.Code.Data.Nat.Base.C10 v2 -> coe d460 v0
        MAlonzo.Code.Data.Nat.Base.C18 v2 v3 v4 -> coe du468
                                                     (coe du472 v3 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name482 = "Data.Nat.Properties.\8804-steps"
d482 v0 v1 v2 v3 = du482 v1 v2 v3
du482 v0 v1 v2
  = case coe v1 of
        0 -> coe v2
        _ -> let v3
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                       (1 :: Integer)
               in
               coe du450
                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) v3 v0)
                 (coe du482 v0 v3 v2)
name494 = "Data.Nat.Properties.m\8804m+n"
d494 v0 v1
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 v1
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe MAlonzo.Code.Data.Nat.Base.C18 v2
                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) v2 v1)
                 (coe d494 v2 v1)
name506 = "Data.Nat.Properties.m\8804\8242m+n"
d506 v0 v1
  = coe du472
      (coe ((Prelude.+) :: Integer -> Integer -> Integer) v0 v1)
      (coe d494 v0 v1)
name516 = "Data.Nat.Properties.n\8804\8242m+n"
d516 v0 v1
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C68
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe MAlonzo.Code.Data.Nat.Base.C74
                 (coe ((Prelude.+) :: Integer -> Integer -> Integer) v2 v1)
                 (coe d516 v2 v1)
name528 = "Data.Nat.Properties.n\8804m+n"
d528 v0 v1 = coe du454 v1 (coe d516 v0 v1)
name536 = "Data.Nat.Properties.n\8804\&1+n"
d536 v0 = coe du450 v0 (coe d8 v0)
name540 = "Data.Nat.Properties.1+n\8816n"
d540 = erased
name548 = "Data.Nat.Properties.\8804pred\8658\8804"
d548 v0 v1 v2 = du548 v1 v2
du548 v0 v1
  = case coe v0 of
        0 -> coe v1
        _ -> coe du450 (coe MAlonzo.Code.Data.Nat.Base.d180 v0) v1
name564 = "Data.Nat.Properties.\8804\8658pred\8804"
d564 v0 v1 v2
  = case coe v0 of
        0 -> coe v2
        _ -> let v3
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                 (coe MAlonzo.Code.Data.Nat.d76 v3 v0 v1 (coe d536 v3)
                    (coe MAlonzo.Code.Data.Nat.d76 v0 v1 v1 v2
                       (coe MAlonzo.Code.Data.Nat.d70 v1)))
name580 = "Data.Nat.Properties.<\8658\8804pred"
d580 v0 v1 v2 = du580 v2
du580 v0
  = case coe v0 of
        MAlonzo.Code.Data.Nat.Base.C18 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name588 = "Data.Nat.Properties.\172i+1+j\8804i"
d588 = erased
name598 = "Data.Nat.Properties.n\8760m\8804n"
d598 v0 v1
  = case coe v0 of
        0 -> coe d8
               (coe MAlonzo.Code.Agda.Builtin.Nat.d22 v1 (0 :: Integer))
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe d8
                          (coe MAlonzo.Code.Agda.Builtin.Nat.d22 (0 :: Integer) v0)
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in
                          coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                            (coe MAlonzo.Code.Data.Nat.d76
                               (coe MAlonzo.Code.Agda.Builtin.Nat.d22 v3 v2)
                               v3
                               v1
                               (coe d598 v2 v3)
                               (coe MAlonzo.Code.Data.Nat.d76 v3 v1 v1 (coe d536 v3)
                                  (coe MAlonzo.Code.Data.Nat.d70 v1)))
name612 = "Data.Nat.Properties.n\8804m+n\8760m"
d612 v0 v1
  = case coe v1 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10
               (coe ((Prelude.+) :: Integer -> Integer -> Integer)
                  (coe MAlonzo.Code.Agda.Builtin.Nat.d22 (0 :: Integer) v0)
                  v0)
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                       (1 :: Integer)
               in
               case coe v0 of
                   0 -> coe d8 v1
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                                  (1 :: Integer)
                          in
                          coe MAlonzo.Code.Data.Nat.Base.C18 v2
                            (coe ((Prelude.+) :: Integer -> Integer -> Integer) v3
                               (coe MAlonzo.Code.Agda.Builtin.Nat.d22 v2 v3))
                            (coe d612 v3 v2)
name626 = "Data.Nat.Properties.m\8851n\8804m"
d626 v0 v1
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 (0 :: Integer)
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe MAlonzo.Code.Data.Nat.Base.C10 v0
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in
                          coe MAlonzo.Code.Function.du158
                            (coe MAlonzo.Code.Data.Nat.Base.C18
                               (coe MAlonzo.Code.Data.Nat.Base.d202 v2 v3)
                               v2)
                            (coe d626 v2 v3)
name638 = "Data.Nat.Properties.m\8804m\8852n"
d638 v0 v1
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10
               (coe MAlonzo.Code.Data.Nat.Base.d192 (0 :: Integer) v1)
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe d8 v0
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in
                          coe MAlonzo.Code.Function.du158
                            (coe MAlonzo.Code.Data.Nat.Base.C18 v2
                               (coe MAlonzo.Code.Data.Nat.Base.d192 v2 v3))
                            (coe d638 v2 v3)
name648 = "Data.Nat.Properties.\8968n/2\8969\8804\8242n"
d648 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C68
        1 -> coe MAlonzo.Code.Data.Nat.Base.C68
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (2 :: Integer)
               in coe du468 (coe MAlonzo.Code.Data.Nat.Base.C74 v1 (coe d648 v1))
name654 = "Data.Nat.Properties.\8970n/2\8971\8804\8242n"
d654 v0
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C68
        _ -> let v1
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in coe MAlonzo.Code.Data.Nat.Base.C74 v1 (coe d648 v1)
name658 = "Data.Nat.Properties.<-trans"
d658 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe MAlonzo.Code.Data.Nat.d76
         (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
            v0)
         v1
         v2
         v3
         (coe MAlonzo.Code.Data.Nat.d76 v1
            (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
               v1)
            v2
            (coe d536 v1)
            (coe MAlonzo.Code.Data.Nat.d76
               (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
                  v1)
               v2
               v2
               v4
               (coe MAlonzo.Code.Data.Nat.d70 v2))))
name670 = "Data.Nat.Properties.\8816\8658>"
d670 v0 v1 v2 = du670 v0 v1
du670 v0 v1
  = case coe v0 of
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   0 -> coe MAlonzo.Code.Data.Nat.Base.C18 (0 :: Integer) v2
                          (coe MAlonzo.Code.Data.Nat.Base.C10 v2)
                   _ -> let v3
                              = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                                  (1 :: Integer)
                          in coe MAlonzo.Code.Data.Nat.Base.C18 v1 v2 (coe du670 v2 v3)
name688 = "Data.Nat.Properties.\8804\8243\8658\8804"
d688 v0 v1 v2 = du688 v0 v2
du688 v0 v1
  = case coe v1 of
        MAlonzo.Code.Data.Nat.Base.C112 v2 v3 -> coe d494 v0 v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name690 = "Data.Nat.Properties.\8804\8658\8804\8243"
d690 v0 v1 v2 = du690 v0 v1
du690 v0 v1
  = coe MAlonzo.Code.Data.Nat.Base.C112 (coe du702 v0 v1) erased
name702 = "Data.Nat.Properties._.k"
d702 v0 v1 v2 v3 v4 v5 = du702 v3 v4
du702 v0 v1
  = case coe v0 of
        0 -> coe v1
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               let v3
                     = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                         (1 :: Integer)
                 in coe du702 v2 v3
name720 = "Data.Nat.Properties._.proof"
d720 = erased
name728 = "Data.Nat.Properties.m\8802\&1+m+n"
d728 = erased
name734 = "Data.Nat.Properties.strictTotalOrder"
d734
  = coe MAlonzo.Code.Relation.Binary.C683 erased erased erased
      (coe MAlonzo.Code.Relation.Binary.C561
         MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
         d658
         d748)
name744 = "Data.Nat.Properties._.2+m+n\8816m"
d744 = erased
name748 = "Data.Nat.Properties._.cmp"
d748 v0 v1
  = let v2 = coe MAlonzo.Code.Data.Nat.Base.d300 v0 v1 in
      case coe v2 of
          MAlonzo.Code.Data.Nat.Base.C284 v3 v4 -> coe
                                                     MAlonzo.Code.Relation.Binary.Core.C400
                                                     (coe d494
                                                        (coe
                                                           ((Prelude.+) :: Integer -> Integer -> Integer)
                                                           (1 :: Integer)
                                                           v3)
                                                        v4)
                                                     erased
                                                     erased
          MAlonzo.Code.Data.Nat.Base.C288 v3 -> coe
                                                  MAlonzo.Code.Relation.Binary.Core.C408
                                                  erased
                                                  erased
                                                  erased
          MAlonzo.Code.Data.Nat.Base.C294 v3 v4 -> coe
                                                     MAlonzo.Code.Relation.Binary.Core.C416
                                                     erased
                                                     (coe MAlonzo.Code.Function.d38 erased erased
                                                        erased
                                                        erased
                                                        erased
                                                        erased
                                                        erased
                                                        erased)
                                                     (coe d494
                                                        (coe
                                                           ((Prelude.+) :: Integer -> Integer -> Integer)
                                                           (1 :: Integer)
                                                           v3)
                                                        v4)
          _ -> coe MAlonzo.RTE.mazUnreachableError
name768 = "Data.Nat.Properties.0\8760n\8801\&0"
d768 = erased
name772 = "Data.Nat.Properties.n\8760n\8801\&0"
d772 = erased
name782 = "Data.Nat.Properties.\8760-+-assoc"
d782 = erased
name810 = "Data.Nat.Properties.+-\8760-assoc"
d810 = erased
name830 = "Data.Nat.Properties.m+n\8760n\8801m"
d830 = erased
name840 = "Data.Nat.Properties.m+n\8760m\8801n"
d840 = erased
name854 = "Data.Nat.Properties.m\8851n+n\8760m\8801n"
d854 = erased
name868 = "Data.Nat.Properties.[m\8760n]\8851[n\8760m]\8801\&0"
d868 = erased
name884 = "Data.Nat.Properties.[i+j]\8760[i+k]\8801j\8760k"
d884 = erased
name902 = "Data.Nat.Properties.i\8760k\8760j+j\8760k\8801i+j\8760k"
d902 = erased
name934 = "Data.Nat.Properties.i+j\8801\&0\8658i\8801\&0"
d934 = erased
name944 = "Data.Nat.Properties.i+j\8801\&0\8658j\8801\&0"
d944 = erased
name956
  = "Data.Nat.Properties.i*j\8801\&0\8658i\8801\&0\8744j\8801\&0"
d956 v0 v1 v2 = du956 v0
du956 v0
  = case coe v0 of
        0 -> coe Left erased
        _ -> coe Right erased
name974 = "Data.Nat.Properties.i*j\8801\&1\8658i\8801\&1"
d974 = erased
name1002 = "Data.Nat.Properties.i*j\8801\&1\8658j\8801\&1"
d1002 = erased
name1016 = "Data.Nat.Properties.cancel-+-left"
d1016 = erased
name1030 = "Data.Nat.Properties.cancel-+-left-\8804"
d1030 v0 v1 v2 v3 = du1030 v0 v3
du1030 v0 v1
  = case coe v0 of
        0 -> coe v1
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               case coe v1 of
                   MAlonzo.Code.Data.Nat.Base.C18 v3 v4 v5 -> coe du1030 v2 v5
                   _ -> coe MAlonzo.RTE.mazUnreachableError
name1044 = "Data.Nat.Properties.cancel-*-right"
d1044 = erased
name1066 = "Data.Nat.Properties.cancel-*-right-\8804"
d1066 v0 v1 v2 v3 = du1066 v0 v1
du1066 v0 v1
  = case coe v0 of
        0 -> coe MAlonzo.Code.Data.Nat.Base.C10 v1
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v0
                       (1 :: Integer)
               in
               let v3
                     = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                         (1 :: Integer)
                 in coe MAlonzo.Code.Data.Nat.Base.C18 v2 v3 (coe du1066 v2 v3)
name1078 = "Data.Nat.Properties.*-distrib-\8760\691"
d1078 = erased
name1102 = "Data.Nat.Properties.im\8801jm+n\8658[i\8760j]m\8801n"
d1102 = erased
name1118 = "Data.Nat.Properties.i+1+j\8802i"
d1118 = erased
name1158 = "Data.Nat.Properties._._.reflexive"
d1158 v0 v1 v2 = du1158
du1158
  = coe MAlonzo.Code.Relation.Binary.d38
      (coe MAlonzo.Code.Relation.Binary.d268
         (coe MAlonzo.Code.Relation.Binary.d842
            (coe MAlonzo.Code.Relation.Binary.d970
               (coe MAlonzo.Code.Relation.Binary.d1052
                  MAlonzo.Code.Data.Nat.d12))))
name1194 = "Data.Nat.Properties.\8970n/2\8971-mono"
d1194 v0 v1 v2 = du1194 v1 v2
du1194 v0 v1
  = case coe v1 of
        MAlonzo.Code.Data.Nat.Base.C10 v2 -> coe
                                               MAlonzo.Code.Data.Nat.Base.C10
                                               (coe MAlonzo.Code.Data.Nat.Base.d212 v0)
        MAlonzo.Code.Data.Nat.Base.C18 v2 v3 v4 -> case coe v4 of
                                                       MAlonzo.Code.Data.Nat.Base.C10 v5 -> coe
                                                                                              MAlonzo.Code.Data.Nat.Base.C10
                                                                                              (coe
                                                                                                 MAlonzo.Code.Data.Nat.Base.d212
                                                                                                 (coe
                                                                                                    ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                                                    (1 ::
                                                                                                       Integer)
                                                                                                    v3))
                                                       MAlonzo.Code.Data.Nat.Base.C18 v5 v6
                                                         v7 -> coe MAlonzo.Code.Data.Nat.Base.C18
                                                                 (coe
                                                                    MAlonzo.Code.Data.Nat.Base.d212
                                                                    v5)
                                                                 (coe
                                                                    MAlonzo.Code.Data.Nat.Base.d212
                                                                    v6)
                                                                 (coe du1194 v6 v7)
                                                       _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1198 = "Data.Nat.Properties.\8968n/2\8969-mono"
d1198 v0 v1 v2
  = coe du1194
      (coe ((Prelude.+) :: Integer -> Integer -> Integer) (1 :: Integer)
         v1)
      (coe MAlonzo.Code.Data.Nat.Base.C18 v0 v1 v2)
name1202 = "Data.Nat.Properties.pred-mono"
d1202 v0 v1 v2 = du1202 v1 v2
du1202 v0 v1
  = case coe v1 of
        MAlonzo.Code.Data.Nat.Base.C10 v2 -> coe
                                               MAlonzo.Code.Data.Nat.Base.C10
                                               (coe MAlonzo.Code.Data.Nat.Base.d180 v0)
        MAlonzo.Code.Data.Nat.Base.C18 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1206 = "Data.Nat.Properties._+-mono_"
d1206 v0 v1 v2 v3 v4 v5
  = let v6
          = case coe v4 of
                MAlonzo.Code.Data.Nat.Base.C18 v6 v7 v8 -> coe
                                                             MAlonzo.Code.Data.Nat.Base.C18
                                                             (coe
                                                                ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                v2
                                                                v6)
                                                             (coe
                                                                ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                v3
                                                                v7)
                                                             (coe d1206 v6 v7 v2 v3 v8 v5)
                _ -> coe MAlonzo.RTE.mazUnreachableError
      in
      case coe v0 of
          0 -> case coe v4 of
                   MAlonzo.Code.Data.Nat.Base.C10 v7 -> coe
                                                          MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                          (coe MAlonzo.Code.Data.Nat.d76 v2 v3
                                                             (coe
                                                                ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                v1
                                                                v3)
                                                             v5
                                                             (coe MAlonzo.Code.Data.Nat.d76 v3
                                                                (coe
                                                                   ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                   v1
                                                                   v3)
                                                                (coe
                                                                   ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                   v1
                                                                   v3)
                                                                (coe d528 v1 v3)
                                                                (coe MAlonzo.Code.Data.Nat.d70
                                                                   (coe
                                                                      ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                      v1
                                                                      v3))))
                   _ -> coe v6
          _ -> coe v6
name1220 = "Data.Nat.Properties._*-mono_"
d1220 v0 v1 v2 v3 v4 v5 = du1220 v1 v2 v3 v4 v5
du1220 v0 v1 v2 v3 v4
  = case coe v3 of
        MAlonzo.Code.Data.Nat.Base.C10 v5 -> coe
                                               MAlonzo.Code.Data.Nat.Base.C10
                                               (coe ((Prelude.*) :: Integer -> Integer -> Integer)
                                                  v0
                                                  v2)
        MAlonzo.Code.Data.Nat.Base.C18 v5 v6 v7 -> coe d1206 v1 v2
                                                     (coe
                                                        ((Prelude.*) :: Integer -> Integer -> Integer)
                                                        v5
                                                        v1)
                                                     (coe
                                                        ((Prelude.*) :: Integer -> Integer -> Integer)
                                                        v6
                                                        v2)
                                                     v4
                                                     (coe du1220 v6 v1 v2 v7 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1228 = "Data.Nat.Properties.\8760-mono"
d1228 v0 v1 v2 v3 v4 v5 = du1228 v0 v1 v4 v5
du1228 v0 v1 v2 v3
  = let v4
          = case coe v3 of
                MAlonzo.Code.Data.Nat.Base.C10 v4 -> coe
                                                       MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                       (coe MAlonzo.Code.Data.Nat.d76
                                                          (coe MAlonzo.Code.Agda.Builtin.Nat.d22 v0
                                                             v4)
                                                          v0
                                                          v1
                                                          (coe d598 v4 v0)
                                                          (coe MAlonzo.Code.Data.Nat.d76 v0 v1 v1 v2
                                                             (coe MAlonzo.Code.Data.Nat.d70 v1)))
                _ -> coe MAlonzo.RTE.mazUnreachableError
      in
      case coe v2 of
          MAlonzo.Code.Data.Nat.Base.C10 v5 -> case coe v3 of
                                                   MAlonzo.Code.Data.Nat.Base.C18 v6 v7 v8 -> coe
                                                                                                MAlonzo.Code.Data.Nat.Base.C10
                                                                                                (coe
                                                                                                   MAlonzo.Code.Agda.Builtin.Nat.d22
                                                                                                   v1
                                                                                                   (coe
                                                                                                      ((Prelude.+) :: Integer -> Integer -> Integer)
                                                                                                      (1 ::
                                                                                                         Integer)
                                                                                                      v6))
                                                   _ -> coe v4
          MAlonzo.Code.Data.Nat.Base.C18 v5 v6 v7 -> case coe v3 of
                                                         MAlonzo.Code.Data.Nat.Base.C18 v8 v9
                                                           v10 -> coe du1228 v5 v6 v7 v10
                                                         _ -> coe v4
          _ -> coe v4