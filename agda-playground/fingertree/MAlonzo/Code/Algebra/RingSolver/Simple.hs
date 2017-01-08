{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.RingSolver.Simple where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.RingSolver
import qualified
       MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing
import qualified MAlonzo.Code.Relation.Binary
name98 = "Algebra.RingSolver.Simple._.rawRing"
d98 v0 v1 = du98 v0
du98 v0
  = coe MAlonzo.Code.Algebra.C259 erased
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v0)
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v0)
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v0)
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v0)
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172 v0)
name118 = "Algebra.RingSolver.Simple._._*H_"
d118 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d664 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name120 = "Algebra.RingSolver.Simple._._*HN_"
d120 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d660 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name122 = "Algebra.RingSolver.Simple._._*N_"
d122 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d668 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name124 = "Algebra.RingSolver.Simple._._*NH_"
d124 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d656 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name130 = "Algebra.RingSolver.Simple._._*x+H_"
d130 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d642 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name132 = "Algebra.RingSolver.Simple._._*x+HN_"
d132 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d590 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name134 = "Algebra.RingSolver.Simple._._+H_"
d134 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d614 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name136 = "Algebra.RingSolver.Simple._._+N_"
d136 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d618 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name138 = "Algebra.RingSolver.Simple._._:*_"
d138 v0 v1 v2 v3 v4 = du138
du138
  = coe MAlonzo.Code.Algebra.RingSolver.C278
      (coe MAlonzo.Code.Algebra.RingSolver.C264)
name140 = "Algebra.RingSolver.Simple._._:+_"
d140 v0 v1 v2 v3 v4 = du140
du140
  = coe MAlonzo.Code.Algebra.RingSolver.C278
      (coe MAlonzo.Code.Algebra.RingSolver.C262)
name142 = "Algebra.RingSolver.Simple._._:-_"
d142 v0 v1 v2 v3 v4 v5 v6 = du142 v5 v6
du142 v0 v1
  = coe MAlonzo.Code.Algebra.RingSolver.C278
      (coe MAlonzo.Code.Algebra.RingSolver.C262)
      v0
      (coe MAlonzo.Code.Algebra.RingSolver.C296 v1)
name144 = "Algebra.RingSolver.Simple._._\8860_"
d144 v0 v1 v2 v3 = du144
du144 = MAlonzo.Code.Algebra.RingSolver.du1294
name148 = "Algebra.RingSolver.Simple._._^N_"
d148 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d744 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name150 = "Algebra.RingSolver.Simple._._\8776H_"
d150 a0 a1 a2 a3 a4 a5 a6 = ()
name152 = "Algebra.RingSolver.Simple._._\8776N_"
d152 a0 a1 a2 a3 a4 a5 a6 = ()
name154 = "Algebra.RingSolver.Simple._._\8799H_"
d154 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d426 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name156 = "Algebra.RingSolver.Simple._._\8799N_"
d156 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d430 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name158 = "Algebra.RingSolver.Simple._.*H-homo"
d158 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1040 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name160 = "Algebra.RingSolver.Simple._.*HN-homo"
d160 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1030 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name162 = "Algebra.RingSolver.Simple._.*N-homo"
d162 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1050 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name164 = "Algebra.RingSolver.Simple._.*NH-homo"
d164 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1018 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name166 = "Algebra.RingSolver.Simple._.*x+H-homo"
d166 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d988 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name168 = "Algebra.RingSolver.Simple._.*x+HN\8776*x+"
d168 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d854 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name170 = "Algebra.RingSolver.Simple._.+H-homo"
d170 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d934 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name172 = "Algebra.RingSolver.Simple._.+N-homo"
d172 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d944 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name174 = "Algebra.RingSolver.Simple._.-H_"
d174 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d754 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name176 = "Algebra.RingSolver.Simple._.-H\8255-homo"
d176 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1198 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name178 = "Algebra.RingSolver.Simple._.-N_"
d178 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d758 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name180 = "Algebra.RingSolver.Simple._.-N\8255-homo"
d180 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1206 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name182 = "Algebra.RingSolver.Simple._.0H"
d182 v0 v1 v2 v3 = du182
du182 = MAlonzo.Code.Algebra.RingSolver.C352
name184 = "Algebra.RingSolver.Simple._.0N"
d184 v0 v1 v2 v3 = du184 v2
du184 v0
  = coe MAlonzo.Code.Algebra.RingSolver.d572 erased erased erased
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v0)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v0)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v0)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v0)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v0))
      erased
      erased
      erased
name186 = "Algebra.RingSolver.Simple._.0N-homo"
d186 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d816 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name188 = "Algebra.RingSolver.Simple._.0\8776\10214\&0\10215"
d188 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d828 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name190 = "Algebra.RingSolver.Simple._.1H"
d190 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d578 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name192 = "Algebra.RingSolver.Simple._.1N"
d192 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d582 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name194 = "Algebra.RingSolver.Simple._.1N-homo"
d194 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d840 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name198 = "Algebra.RingSolver.Simple._.HNF"
d198 a0 a1 a2 a3 a4 = ()
name200 = "Algebra.RingSolver.Simple._.Normal"
d200 a0 a1 a2 a3 a4 = ()
name202 = "Algebra.RingSolver.Simple._.Op"
d202 a0 a1 a2 a3 = ()
name204 = "Algebra.RingSolver.Simple._.Polynomial"
d204 a0 a1 a2 a3 a4 = ()
name210 = "Algebra.RingSolver.Simple._.^N-homo"
d210 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1180 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name218 = "Algebra.RingSolver.Simple._.correct"
d218 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1260 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name220 = "Algebra.RingSolver.Simple._.correct-con"
d220 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1226 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name222 = "Algebra.RingSolver.Simple._.correct-var"
d222 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1242 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name224 = "Algebra.RingSolver.Simple._.normalise"
d224 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d784 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name226 = "Algebra.RingSolver.Simple._.normalise-con"
d226 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d768 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name228 = "Algebra.RingSolver.Simple._.normalise-var"
d228 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d778 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name236 = "Algebra.RingSolver.Simple._.prove"
d236 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1296 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name238 = "Algebra.RingSolver.Simple._.sem"
d238 v0 v1 v2 v3 = du238 v2
du238 v0
  = coe MAlonzo.Code.Algebra.RingSolver.d314 erased erased erased
      erased
      v0
      erased
      erased
name240 = "Algebra.RingSolver.Simple._.solve"
d240 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d1298 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name248 = "Algebra.RingSolver.Simple._.\8709*x+HN-homo"
d248 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d898 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name250 = "Algebra.RingSolver.Simple._.\10214_\10215"
d250 v0 v1 v2 v3 = du250 v2
du250 v0
  = coe MAlonzo.Code.Algebra.RingSolver.d318 erased erased erased
      erased
      v0
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v0)
      erased
name252 = "Algebra.RingSolver.Simple._.\10214_\10215H"
d252 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d366 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name254 = "Algebra.RingSolver.Simple._.\10214_\10215H-cong"
d254 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d540 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name256 = "Algebra.RingSolver.Simple._.\10214_\10215N"
d256 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d370 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name258 = "Algebra.RingSolver.Simple._.\10214_\10215N-cong"
d258 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d550 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3
name260 = "Algebra.RingSolver.Simple._.\10214_\10215\8595"
d260 v0 v1 v2 v3
  = coe MAlonzo.Code.Algebra.RingSolver.d806 v0 v0 v1
      (coe MAlonzo.Code.Algebra.C259 erased
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v2)
         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172
            v2))
      v2
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du568
         v2)
      v3