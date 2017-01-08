{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Data.Bool.Properties where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified MAlonzo.Code.Algebra.Properties.BooleanAlgebra
import qualified
       MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing
import qualified MAlonzo.Code.Algebra.RingSolver.Simple
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Data.Bool
import qualified MAlonzo.Code.Data.Bool.Base
import qualified MAlonzo.Code.Data.Empty
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Data.Sum
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Function.Equality
import qualified MAlonzo.Code.Function.Equivalence
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified
       MAlonzo.Code.Relation.Binary.PropositionalEquality.Core
name10 = "Data.Bool.Properties._._DistributesOver_"
d10 = erased
name18 = "Data.Bool.Properties._.Absorptive"
d18 = erased
name30 = "Data.Bool.Properties._.Inverse"
d30 = erased
name54 = "Data.Bool.Properties.\8744-assoc"
d54 = erased
name64 = "Data.Bool.Properties.\8743-assoc"
d64 = erased
name74 = "Data.Bool.Properties.\8744-comm"
d74 = erased
name76 = "Data.Bool.Properties.\8743-comm"
d76 = erased
name78 = "Data.Bool.Properties.distrib-\8743-\8744"
d78 = coe MAlonzo.Code.Data.Product.C30 erased erased
name84 = "Data.Bool.Properties._.dist\737"
d84 = erased
name94 = "Data.Bool.Properties._.dist\691"
d94 = erased
name102 = "Data.Bool.Properties.isCommutativeSemiring-\8744-\8743"
d102
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
      (coe MAlonzo.Code.Data.Product.d28 d78)
      erased
name110 = "Data.Bool.Properties.commutativeSemiring-\8744-\8743"
d110
  = coe MAlonzo.Code.Algebra.C239 erased erased
      MAlonzo.Code.Data.Bool.Base.d30
      MAlonzo.Code.Data.Bool.Base.d24
      (coe False)
      (coe True)
      d102
name114 = "Data.Bool.Properties.RingSolver._*H_"
d114
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d118 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name116 = "Data.Bool.Properties.RingSolver._*HN_"
d116
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d120 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name118 = "Data.Bool.Properties.RingSolver._*N_"
d118
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d122 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name120 = "Data.Bool.Properties.RingSolver._*NH_"
d120
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d124 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name126 = "Data.Bool.Properties.RingSolver._*x+H_"
d126
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d130 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name128 = "Data.Bool.Properties.RingSolver._*x+HN_"
d128
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d132 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name130 = "Data.Bool.Properties.RingSolver._+H_"
d130
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d134 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name132 = "Data.Bool.Properties.RingSolver._+N_"
d132
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d136 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name134 = "Data.Bool.Properties.RingSolver._:*_"
d134
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d138 erased erased
      erased
      erased
name136 = "Data.Bool.Properties.RingSolver._:+_"
d136
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d140 erased erased
      erased
      erased
name138 = "Data.Bool.Properties.RingSolver._:-_"
d138
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d142 erased erased
      erased
      erased
name140 = "Data.Bool.Properties.RingSolver._\8860_"
d140 = MAlonzo.Code.Algebra.RingSolver.Simple.du144
name144 = "Data.Bool.Properties.RingSolver._^N_"
d144
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d148 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name146 = "Data.Bool.Properties.RingSolver._\8776H_"
d146 a0 a1 a2 = ()
name148 = "Data.Bool.Properties.RingSolver._\8776N_"
d148 a0 a1 a2 = ()
name150 = "Data.Bool.Properties.RingSolver._\8799H_"
d150
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d154 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name152 = "Data.Bool.Properties.RingSolver._\8799N_"
d152
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d156 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name154 = "Data.Bool.Properties.RingSolver.*H-homo"
d154 = erased
name156 = "Data.Bool.Properties.RingSolver.*HN-homo"
d156 = erased
name158 = "Data.Bool.Properties.RingSolver.*N-homo"
d158 = erased
name160 = "Data.Bool.Properties.RingSolver.*NH-homo"
d160 = erased
name162 = "Data.Bool.Properties.RingSolver.*x+H-homo"
d162 = erased
name164 = "Data.Bool.Properties.RingSolver.*x+HN\8776*x+"
d164 = erased
name166 = "Data.Bool.Properties.RingSolver.+H-homo"
d166 = erased
name168 = "Data.Bool.Properties.RingSolver.+N-homo"
d168 = erased
name170 = "Data.Bool.Properties.RingSolver.-H_"
d170
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d174 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name172 = "Data.Bool.Properties.RingSolver.-H\8255-homo"
d172 = erased
name174 = "Data.Bool.Properties.RingSolver.-N_"
d174
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d178 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name176 = "Data.Bool.Properties.RingSolver.-N\8255-homo"
d176 = erased
name178 = "Data.Bool.Properties.RingSolver.0H"
d178 = MAlonzo.Code.Algebra.RingSolver.Simple.du182
name180 = "Data.Bool.Properties.RingSolver.0N"
d180
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du184
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
name182 = "Data.Bool.Properties.RingSolver.0N-homo"
d182 = erased
name184 = "Data.Bool.Properties.RingSolver.0\8776\10214\&0\10215"
d184 = erased
name186 = "Data.Bool.Properties.RingSolver.1H"
d186
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d190 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name188 = "Data.Bool.Properties.RingSolver.1N"
d188
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d192 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name190 = "Data.Bool.Properties.RingSolver.1N-homo"
d190 = erased
name194 = "Data.Bool.Properties.RingSolver.HNF"
d194 a0 = ()
name196 = "Data.Bool.Properties.RingSolver.Normal"
d196 a0 = ()
name198 = "Data.Bool.Properties.RingSolver.Op"
d198 = ()
name200 = "Data.Bool.Properties.RingSolver.Polynomial"
d200 a0 = ()
name206 = "Data.Bool.Properties.RingSolver.^N-homo"
d206 = erased
name214 = "Data.Bool.Properties.RingSolver.correct"
d214 = erased
name216 = "Data.Bool.Properties.RingSolver.correct-con"
d216 = erased
name218 = "Data.Bool.Properties.RingSolver.correct-var"
d218 = erased
name220 = "Data.Bool.Properties.RingSolver.normalise"
d220
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d224 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name222 = "Data.Bool.Properties.RingSolver.normalise-con"
d222
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d226 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name224 = "Data.Bool.Properties.RingSolver.normalise-var"
d224
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d228 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name232 = "Data.Bool.Properties.RingSolver.prove"
d232 = erased
name234 = "Data.Bool.Properties.RingSolver.sem"
d234
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du238
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
name236 = "Data.Bool.Properties.RingSolver.solve"
d236
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d240 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name244 = "Data.Bool.Properties.RingSolver.\8709*x+HN-homo"
d244 = erased
name246 = "Data.Bool.Properties.RingSolver.\10214_\10215"
d246
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du250
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
name248 = "Data.Bool.Properties.RingSolver.\10214_\10215H"
d248
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d252 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name250 = "Data.Bool.Properties.RingSolver.\10214_\10215H-cong"
d250 = erased
name252 = "Data.Bool.Properties.RingSolver.\10214_\10215N"
d252
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d256 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name254 = "Data.Bool.Properties.RingSolver.\10214_\10215N-cong"
d254 = erased
name256 = "Data.Bool.Properties.RingSolver.\10214_\10215\8595"
d256
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d260 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du1002
         d110)
      MAlonzo.Code.Data.Bool.Base.d42
name300 = "Data.Bool.Properties.distrib-\8744-\8743"
d300 = coe MAlonzo.Code.Data.Product.C30 erased erased
name306 = "Data.Bool.Properties._.dist\737"
d306 = erased
name316 = "Data.Bool.Properties._.dist\691"
d316 = erased
name324 = "Data.Bool.Properties.isCommutativeSemiring-\8743-\8744"
d324
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
      (coe MAlonzo.Code.Data.Product.d28 d300)
      erased
name332 = "Data.Bool.Properties.commutativeSemiring-\8743-\8744"
d332
  = coe MAlonzo.Code.Algebra.C239 erased erased
      MAlonzo.Code.Data.Bool.Base.d24
      MAlonzo.Code.Data.Bool.Base.d30
      (coe True)
      (coe False)
      d324
name334 = "Data.Bool.Properties.absorptive"
d334 = coe MAlonzo.Code.Data.Product.C30 erased erased
name340 = "Data.Bool.Properties._.abs-\8744-\8743"
d340 = erased
name346 = "Data.Bool.Properties._.abs-\8743-\8744"
d346 = erased
name352 = "Data.Bool.Properties.not-\8743-inverse"
d352
  = coe MAlonzo.Code.Data.Product.C30 erased
      (\ v0 -> coe MAlonzo.Code.Function.du176 erased erased erased)
name358 = "Data.Bool.Properties._.\172x\8743x\8801\8869"
d358 = erased
name362 = "Data.Bool.Properties.not-\8744-inverse"
d362
  = coe MAlonzo.Code.Data.Product.C30 erased
      (\ v0 -> coe MAlonzo.Code.Function.du176 erased erased erased)
name368 = "Data.Bool.Properties._.\172x\8744x\8801\8868"
d368 = erased
name372 = "Data.Bool.Properties.isBooleanAlgebra"
d372
  = coe MAlonzo.Code.Algebra.Structures.C605
      (coe MAlonzo.Code.Algebra.Structures.C573
         (coe MAlonzo.Code.Algebra.Structures.C539
            MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
            erased
            erased
            erased
            erased
            erased
            erased
            d334)
         (coe MAlonzo.Code.Data.Product.d28 d300))
      (coe MAlonzo.Code.Data.Product.d28 d362)
      (coe MAlonzo.Code.Data.Product.d28 d352)
      erased
name374 = "Data.Bool.Properties.booleanAlgebra"
d374
  = coe MAlonzo.Code.Algebra.C375 erased erased
      MAlonzo.Code.Data.Bool.Base.d30
      MAlonzo.Code.Data.Bool.Base.d24
      MAlonzo.Code.Data.Bool.Base.d6
      (coe True)
      (coe False)
      d372
name380 = "Data.Bool.Properties.xor-is-ok"
d380 = erased
name406 = "Data.Bool.Properties._.CS.identity"
d406 v0 = du406
du406 = coe MAlonzo.Code.Algebra.du862 d110
name425 = "Data.Bool.Properties..absurdlambda"
d425 = erased
name429 = "Data.Bool.Properties..absurdlambda"
d429 = erased
name443 = "Data.Bool.Properties..absurdlambda"
d443 = erased
name447 = "Data.Bool.Properties..absurdlambda"
d447 = erased
name490 = "Data.Bool.Properties.commutativeRing-xor-\8743"
d490 = d572
name515 = "Data.Bool.Properties..absurdlambda"
d515 = erased
name549 = "Data.Bool.Properties..absurdlambda"
d549 = erased
name560 = "Data.Bool.Properties._._.XorRing.commutativeRing"
d560
  = coe MAlonzo.Code.Algebra.Properties.BooleanAlgebra.d530 erased
      erased
      d374
name572 = "Data.Bool.Properties._._.commutativeRing"
d572 = coe d560 MAlonzo.Code.Data.Bool.Base.d36 erased
name584 = "Data.Bool.Properties.XorRingSolver._*H_"
d584
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d118 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name586 = "Data.Bool.Properties.XorRingSolver._*HN_"
d586
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d120 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name588 = "Data.Bool.Properties.XorRingSolver._*N_"
d588
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d122 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name590 = "Data.Bool.Properties.XorRingSolver._*NH_"
d590
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d124 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name596 = "Data.Bool.Properties.XorRingSolver._*x+H_"
d596
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d130 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name598 = "Data.Bool.Properties.XorRingSolver._*x+HN_"
d598
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d132 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name600 = "Data.Bool.Properties.XorRingSolver._+H_"
d600
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d134 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name602 = "Data.Bool.Properties.XorRingSolver._+N_"
d602
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d136 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name604 = "Data.Bool.Properties.XorRingSolver._:*_"
d604
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d138 erased erased
      erased
      erased
name606 = "Data.Bool.Properties.XorRingSolver._:+_"
d606
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d140 erased erased
      erased
      erased
name608 = "Data.Bool.Properties.XorRingSolver._:-_"
d608
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d142 erased erased
      erased
      erased
name610 = "Data.Bool.Properties.XorRingSolver._\8860_"
d610 = MAlonzo.Code.Algebra.RingSolver.Simple.du144
name614 = "Data.Bool.Properties.XorRingSolver._^N_"
d614
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d148 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name616 = "Data.Bool.Properties.XorRingSolver._\8776H_"
d616 a0 a1 a2 = ()
name618 = "Data.Bool.Properties.XorRingSolver._\8776N_"
d618 a0 a1 a2 = ()
name620 = "Data.Bool.Properties.XorRingSolver._\8799H_"
d620
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d154 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name622 = "Data.Bool.Properties.XorRingSolver._\8799N_"
d622
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d156 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name624 = "Data.Bool.Properties.XorRingSolver.*H-homo"
d624 = erased
name626 = "Data.Bool.Properties.XorRingSolver.*HN-homo"
d626 = erased
name628 = "Data.Bool.Properties.XorRingSolver.*N-homo"
d628 = erased
name630 = "Data.Bool.Properties.XorRingSolver.*NH-homo"
d630 = erased
name632 = "Data.Bool.Properties.XorRingSolver.*x+H-homo"
d632 = erased
name634 = "Data.Bool.Properties.XorRingSolver.*x+HN\8776*x+"
d634 = erased
name636 = "Data.Bool.Properties.XorRingSolver.+H-homo"
d636 = erased
name638 = "Data.Bool.Properties.XorRingSolver.+N-homo"
d638 = erased
name640 = "Data.Bool.Properties.XorRingSolver.-H_"
d640
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d174 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name642 = "Data.Bool.Properties.XorRingSolver.-H\8255-homo"
d642 = erased
name644 = "Data.Bool.Properties.XorRingSolver.-N_"
d644
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d178 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name646 = "Data.Bool.Properties.XorRingSolver.-N\8255-homo"
d646 = erased
name648 = "Data.Bool.Properties.XorRingSolver.0H"
d648 = MAlonzo.Code.Algebra.RingSolver.Simple.du182
name650 = "Data.Bool.Properties.XorRingSolver.0N"
d650
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du184
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
name652 = "Data.Bool.Properties.XorRingSolver.0N-homo"
d652 = erased
name654
  = "Data.Bool.Properties.XorRingSolver.0\8776\10214\&0\10215"
d654 = erased
name656 = "Data.Bool.Properties.XorRingSolver.1H"
d656
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d190 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name658 = "Data.Bool.Properties.XorRingSolver.1N"
d658
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d192 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name660 = "Data.Bool.Properties.XorRingSolver.1N-homo"
d660 = erased
name664 = "Data.Bool.Properties.XorRingSolver.HNF"
d664 a0 = ()
name666 = "Data.Bool.Properties.XorRingSolver.Normal"
d666 a0 = ()
name668 = "Data.Bool.Properties.XorRingSolver.Op"
d668 = ()
name670 = "Data.Bool.Properties.XorRingSolver.Polynomial"
d670 a0 = ()
name676 = "Data.Bool.Properties.XorRingSolver.^N-homo"
d676 = erased
name684 = "Data.Bool.Properties.XorRingSolver.correct"
d684 = erased
name686 = "Data.Bool.Properties.XorRingSolver.correct-con"
d686 = erased
name688 = "Data.Bool.Properties.XorRingSolver.correct-var"
d688 = erased
name690 = "Data.Bool.Properties.XorRingSolver.normalise"
d690
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d224 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name692 = "Data.Bool.Properties.XorRingSolver.normalise-con"
d692
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d226 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name694 = "Data.Bool.Properties.XorRingSolver.normalise-var"
d694
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d228 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name702 = "Data.Bool.Properties.XorRingSolver.prove"
d702 = erased
name704 = "Data.Bool.Properties.XorRingSolver.sem"
d704
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du238
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
name706 = "Data.Bool.Properties.XorRingSolver.solve"
d706
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d240 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name714 = "Data.Bool.Properties.XorRingSolver.\8709*x+HN-homo"
d714 = erased
name716 = "Data.Bool.Properties.XorRingSolver.\10214_\10215"
d716
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.du250
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
name718 = "Data.Bool.Properties.XorRingSolver.\10214_\10215H"
d718
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d252 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name720 = "Data.Bool.Properties.XorRingSolver.\10214_\10215H-cong"
d720 = erased
name722 = "Data.Bool.Properties.XorRingSolver.\10214_\10215N"
d722
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d256 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name724 = "Data.Bool.Properties.XorRingSolver.\10214_\10215N-cong"
d724 = erased
name726 = "Data.Bool.Properties.XorRingSolver.\10214_\10215\8595"
d726
  = coe MAlonzo.Code.Algebra.RingSolver.Simple.d260 () ()
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du832
         d490)
      MAlonzo.Code.Data.Bool.Base.d42
name770 = "Data.Bool.Properties.not-involutive"
d770 = erased
name776 = "Data.Bool.Properties.not-\172"
d776 = erased
name782 = "Data.Bool.Properties.\172-not"
d782 = erased
name794 = "Data.Bool.Properties.\8660\8594\8801"
d794 = erased
name810 = "Data.Bool.Properties.T-\8801"
d810 v0
  = case coe v0 of
        False -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                   erased
                   erased
        True -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                  (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
                  (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name814 = "Data.Bool.Properties.T-not-\8801"
d814 v0
  = case coe v0 of
        False -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                   (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
                   (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
        True -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                  erased
                  erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name820 = "Data.Bool.Properties.T-\8743"
d820 v0 v1
  = case coe v0 of
        False -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                   erased
                   MAlonzo.Code.Data.Product.d26
        True -> case coe v1 of
                    False -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                               erased
                               MAlonzo.Code.Data.Product.d28
                    True -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                              (coe MAlonzo.Code.Function.d80 erased erased erased erased
                                 (coe MAlonzo.Code.Data.Product.C30 erased erased))
                              (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
                    _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name826 = "Data.Bool.Properties.T-\8744"
d826 v0 v1
  = case coe v0 of
        False -> case coe v1 of
                     False -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                                (coe Left)
                                (coe MAlonzo.Code.Data.Sum.d48 erased erased erased erased erased
                                   erased
                                   (coe MAlonzo.Code.Function.d68 erased erased)
                                   (coe MAlonzo.Code.Function.d68 erased erased))
                     True -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                               (coe Right)
                               (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
                     _ -> coe MAlonzo.RTE.mazUnreachableError
        True -> coe MAlonzo.Code.Function.Equivalence.du56 erased erased
                  (coe Left)
                  (coe MAlonzo.Code.Function.d80 erased erased erased erased erased)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name836 = "Data.Bool.Properties.proof-irrelevance"
d836 = erased
name854 = "Data.Bool.Properties.push-function-into-if"
d854 = erased