{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.Properties.BooleanAlgebra where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified
       MAlonzo.Code.Algebra.Properties.DistributiveLattice
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Function.Equality
import qualified MAlonzo.Code.Function.Equivalence
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
name74 = "Algebra.Properties.BooleanAlgebra.DL.poset"
d74 v0 v1 v2 = du74 v2
du74 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du58
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name76 = "Algebra.Properties.BooleanAlgebra.DL.replace-equality"
d76 v0 v1 v2 = du76 v2
du76 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.d184
      erased
      erased
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name78 = "Algebra.Properties.BooleanAlgebra.DL.\8743-idempotent"
d78 v0 v1 v2 = du78 v2
du78 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du62
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name80 = "Algebra.Properties.BooleanAlgebra.DL.\8743-\8744-distrib"
d80 v0 v1 v2 = du80 v2
du80 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du152
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name82
  = "Algebra.Properties.BooleanAlgebra.DL.\8743-\8744-distributiveLattice"
d82 v0 v1 v2 = du82 v2
du82 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du176
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name84
  = "Algebra.Properties.BooleanAlgebra.DL.\8743-\8744-isDistributiveLattice"
d84 v0 v1 v2 = du84 v2
du84 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du174
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name86
  = "Algebra.Properties.BooleanAlgebra.DL.\8743-\8744-isLattice"
d86 v0 v1 v2 = du86 v2
du86 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du64
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name88 = "Algebra.Properties.BooleanAlgebra.DL.\8743-\8744-lattice"
d88 v0 v1 v2 = du88 v2
du88 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du66
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name90 = "Algebra.Properties.BooleanAlgebra.DL.\8744-idempotent"
d90 v0 v1 v2 = du90 v2
du90 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du68
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name92 = "Algebra.Properties.BooleanAlgebra.DL.\8744-\8743-distrib"
d92 v0 v1 v2 = du92 v2
du92 v0
  = coe MAlonzo.Code.Algebra.Properties.DistributiveLattice.du138
      (coe MAlonzo.Code.Algebra.C355 erased erased
         (coe MAlonzo.Code.Algebra.d1412 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2862
            (coe MAlonzo.Code.Algebra.d1422 v0)))
name98 = "Algebra.Properties.BooleanAlgebra._._DistributesOver_"
d98 = erased
name116 = "Algebra.Properties.BooleanAlgebra._.Identity"
d116 = erased
name118 = "Algebra.Properties.BooleanAlgebra._.Inverse"
d118 = erased
name136 = "Algebra.Properties.BooleanAlgebra._.Zero"
d136 = erased
name140 = "Algebra.Properties.BooleanAlgebra._.Op\8322"
d140 = erased
name146 = "Algebra.Properties.BooleanAlgebra._._\8718"
d146 v0 v1 v2 = du146 v2
du146 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d2538
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))))
name148
  = "Algebra.Properties.BooleanAlgebra._._\8764\10216_\10217_"
d148 v0 v1 v2 = du148 v2
du148 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d2538
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))))
name162 = "Algebra.Properties.BooleanAlgebra.\8744-complement"
d162 v0 v1 v2 = du162 v2
du162 v0
  = coe MAlonzo.Code.Data.Product.C30 (coe d168 erased erased v0)
      (coe MAlonzo.Code.Algebra.Structures.d2864
         (coe MAlonzo.Code.Algebra.d1422 v0))
name168
  = "Algebra.Properties.BooleanAlgebra._.\8744-complement\737"
d168 v0 v1 v2 v3 = du168 v2 v3
du168 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            v1)
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1416 v0 v1))
         (coe MAlonzo.Code.Algebra.d1418 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2540
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            v1)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1418 v0)
            (coe MAlonzo.Code.Algebra.d1418 v0)
            (coe MAlonzo.Code.Algebra.Structures.d2864
               (coe MAlonzo.Code.Algebra.d1422 v0)
               v1)
            (coe du146 v0 (coe MAlonzo.Code.Algebra.d1418 v0))))
name172 = "Algebra.Properties.BooleanAlgebra.\8743-complement"
d172 v0 v1 v2 = du172 v2
du172 v0
  = coe MAlonzo.Code.Data.Product.C30 (coe d178 erased erased v0)
      (coe MAlonzo.Code.Algebra.Structures.d2866
         (coe MAlonzo.Code.Algebra.d1422 v0))
name178
  = "Algebra.Properties.BooleanAlgebra._.\8743-complement\737"
d178 v0 v1 v2 v3 = du178 v2 v3
du178 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            v1)
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1416 v0 v1))
         (coe MAlonzo.Code.Algebra.d1420 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2546
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            v1)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1420 v0)
            (coe MAlonzo.Code.Algebra.d1420 v0)
            (coe MAlonzo.Code.Algebra.Structures.d2866
               (coe MAlonzo.Code.Algebra.d1422 v0)
               v1)
            (coe du146 v0 (coe MAlonzo.Code.Algebra.d1420 v0))))
name182
  = "Algebra.Properties.BooleanAlgebra.\8743-\8744-isBooleanAlgebra"
d182 v0 v1 v2 = du182 v2
du182 v0
  = coe MAlonzo.Code.Algebra.Structures.C605 (coe du84 v0)
      (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0))
      (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0))
      (coe MAlonzo.Code.Algebra.Structures.d2868
         (coe MAlonzo.Code.Algebra.d1422 v0))
name184
  = "Algebra.Properties.BooleanAlgebra.\8743-\8744-booleanAlgebra"
d184 v0 v1 v2 = du184 v2
du184 v0
  = coe MAlonzo.Code.Algebra.C375 erased erased
      (coe MAlonzo.Code.Algebra.d1414 v0)
      (coe MAlonzo.Code.Algebra.d1412 v0)
      (coe MAlonzo.Code.Algebra.d1416 v0)
      (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe du182 v0)
name186 = "Algebra.Properties.BooleanAlgebra.\8743-identity"
d186 v0 v1 v2 = du186 v2
du186 v0
  = coe MAlonzo.Code.Data.Product.C30
      (\ v1 ->
         coe MAlonzo.Code.Function.du176
           (coe MAlonzo.Code.Algebra.Structures.d2546
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0)))
              (coe MAlonzo.Code.Algebra.d1418 v0)
              v1)
           (coe MAlonzo.Code.Relation.Binary.Core.d520
              (coe MAlonzo.Code.Algebra.Structures.d2538
                 (coe MAlonzo.Code.Algebra.Structures.d2690
                    (coe MAlonzo.Code.Algebra.Structures.d2862
                       (coe MAlonzo.Code.Algebra.d1422 v0))))
              (coe MAlonzo.Code.Algebra.d1414 v0
                 (coe MAlonzo.Code.Algebra.d1418 v0)
                 v1)
              (coe MAlonzo.Code.Algebra.d1414 v0 v1
                 (coe MAlonzo.Code.Algebra.d1418 v0))
              v1)
           (coe du194 v0 v1))
      (coe d194 erased erased v0)
name194 = "Algebra.Properties.BooleanAlgebra._.x\8743\8868=x"
d194 v0 v1 v2 v3 = du194 v2 v3
du194 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1418 v0))
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
         v1
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1)
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0) v1)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            v1
            v1
            (coe MAlonzo.Code.Data.Product.d28
               (coe MAlonzo.Code.Algebra.Structures.d2552
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe du146 v0 v1)))
name200 = "Algebra.Properties.BooleanAlgebra.\8744-identity"
d200 v0 v1 v2 = du200 v2
du200 v0
  = coe MAlonzo.Code.Data.Product.C30
      (\ v1 ->
         coe MAlonzo.Code.Function.du176
           (coe MAlonzo.Code.Algebra.Structures.d2540
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0)))
              (coe MAlonzo.Code.Algebra.d1420 v0)
              v1)
           (coe MAlonzo.Code.Relation.Binary.Core.d520
              (coe MAlonzo.Code.Algebra.Structures.d2538
                 (coe MAlonzo.Code.Algebra.Structures.d2690
                    (coe MAlonzo.Code.Algebra.Structures.d2862
                       (coe MAlonzo.Code.Algebra.d1422 v0))))
              (coe MAlonzo.Code.Algebra.d1412 v0
                 (coe MAlonzo.Code.Algebra.d1420 v0)
                 v1)
              (coe MAlonzo.Code.Algebra.d1412 v0 v1
                 (coe MAlonzo.Code.Algebra.d1420 v0))
              v1)
           (coe du208 v0 v1))
      (coe d208 erased erased v0)
name208 = "Algebra.Properties.BooleanAlgebra._.x\8744\8869=x"
d208 v0 v1 v2 v3 = du208 v2 v3
du208 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1420 v0))
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
         v1
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1)
            (coe MAlonzo.Code.Algebra.Structures.d2544
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v1)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            v1
            v1
            (coe MAlonzo.Code.Data.Product.d26
               (coe MAlonzo.Code.Algebra.Structures.d2552
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe du146 v0 v1)))
name214 = "Algebra.Properties.BooleanAlgebra.\8743-zero"
d214 v0 v1 v2 = du214 v2
du214 v0
  = coe MAlonzo.Code.Data.Product.C30
      (\ v1 ->
         coe MAlonzo.Code.Function.du176
           (coe MAlonzo.Code.Algebra.Structures.d2546
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0)))
              (coe MAlonzo.Code.Algebra.d1420 v0)
              v1)
           (coe MAlonzo.Code.Relation.Binary.Core.d520
              (coe MAlonzo.Code.Algebra.Structures.d2538
                 (coe MAlonzo.Code.Algebra.Structures.d2690
                    (coe MAlonzo.Code.Algebra.Structures.d2862
                       (coe MAlonzo.Code.Algebra.d1422 v0))))
              (coe MAlonzo.Code.Algebra.d1414 v0
                 (coe MAlonzo.Code.Algebra.d1420 v0)
                 v1)
              (coe MAlonzo.Code.Algebra.d1414 v0 v1
                 (coe MAlonzo.Code.Algebra.d1420 v0))
              (coe MAlonzo.Code.Algebra.d1420 v0))
           (coe du222 v0 v1))
      (coe d222 erased erased v0)
name222 = "Algebra.Properties.BooleanAlgebra._.x\8743\8869=\8869"
d222 v0 v1 v2 v3 = du222 v2 v3
du222 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1420 v0))
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
         (coe MAlonzo.Code.Algebra.d1420 v0)
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1)
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v1)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1420 v0)
            (coe MAlonzo.Code.Function.du158
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))))
               (coe MAlonzo.Code.Algebra.Structures.d2548
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v1
                  v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Function.du176 (coe du78 v0 v1)
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
                     v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v1)
                  (coe du146 v0 (coe MAlonzo.Code.Algebra.d1420 v0))))))
name228
  = "Algebra.Properties.BooleanAlgebra.\8744-\8743-isCommutativeSemiring"
d228 v0 v1 v2 = du228 v2
du228 v0
  = coe MAlonzo.Code.Algebra.Structures.C313
      (coe MAlonzo.Code.Algebra.Structures.C71
         (coe MAlonzo.Code.Algebra.Structures.C25
            (coe MAlonzo.Code.Algebra.Structures.d2538
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2542
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2544
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))))
         (coe MAlonzo.Code.Data.Product.d26 (coe du200 v0))
         (coe MAlonzo.Code.Algebra.Structures.d2540
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))))
      (coe MAlonzo.Code.Algebra.Structures.C71
         (coe MAlonzo.Code.Algebra.Structures.C25
            (coe MAlonzo.Code.Algebra.Structures.d2538
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2548
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))))
         (coe MAlonzo.Code.Data.Product.d26 (coe du186 v0))
         (coe MAlonzo.Code.Algebra.Structures.d2546
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))))
      (coe MAlonzo.Code.Data.Product.d28 (coe du80 v0))
      (coe MAlonzo.Code.Data.Product.d26 (coe du214 v0))
name230
  = "Algebra.Properties.BooleanAlgebra.\8744-\8743-commutativeSemiring"
d230 v0 v1 v2 = du230 v2
du230 v0
  = coe MAlonzo.Code.Algebra.C239 erased erased
      (coe MAlonzo.Code.Algebra.d1412 v0)
      (coe MAlonzo.Code.Algebra.d1414 v0)
      (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe du228 v0)
name232 = "Algebra.Properties.BooleanAlgebra.\8744-zero"
d232 v0 v1 v2 = du232 v2
du232 v0
  = coe MAlonzo.Code.Data.Product.C30
      (\ v1 ->
         coe MAlonzo.Code.Function.du176
           (coe MAlonzo.Code.Algebra.Structures.d2540
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0)))
              (coe MAlonzo.Code.Algebra.d1418 v0)
              v1)
           (coe MAlonzo.Code.Relation.Binary.Core.d520
              (coe MAlonzo.Code.Algebra.Structures.d2538
                 (coe MAlonzo.Code.Algebra.Structures.d2690
                    (coe MAlonzo.Code.Algebra.Structures.d2862
                       (coe MAlonzo.Code.Algebra.d1422 v0))))
              (coe MAlonzo.Code.Algebra.d1412 v0
                 (coe MAlonzo.Code.Algebra.d1418 v0)
                 v1)
              (coe MAlonzo.Code.Algebra.d1412 v0 v1
                 (coe MAlonzo.Code.Algebra.d1418 v0))
              (coe MAlonzo.Code.Algebra.d1418 v0))
           (coe du240 v0 v1))
      (coe d240 erased erased v0)
name240 = "Algebra.Properties.BooleanAlgebra._.x\8744\8868=\8868"
d240 v0 v1 v2 v3 = du240 v2 v3
du240 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1418 v0))
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
         (coe MAlonzo.Code.Algebra.d1418 v0)
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1)
            (coe MAlonzo.Code.Algebra.Structures.d2544
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0) v1)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1418 v0)
            (coe MAlonzo.Code.Function.du158
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))))
               (coe MAlonzo.Code.Algebra.Structures.d2542
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v1
                  v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Function.du176 (coe du90 v0 v1)
                  (coe MAlonzo.Code.Algebra.Structures.d2544
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v1)
                     v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0) v1)
                  (coe du146 v0 (coe MAlonzo.Code.Algebra.d1418 v0))))))
name246
  = "Algebra.Properties.BooleanAlgebra.\8743-\8744-isCommutativeSemiring"
d246 v0 v1 v2 = du246 v2
du246 v0
  = coe MAlonzo.Code.Algebra.Structures.C313
      (coe MAlonzo.Code.Algebra.Structures.C71
         (coe MAlonzo.Code.Algebra.Structures.C25
            (coe MAlonzo.Code.Algebra.Structures.d2538
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2548
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))))
         (coe MAlonzo.Code.Data.Product.d26 (coe du186 v0))
         (coe MAlonzo.Code.Algebra.Structures.d2546
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))))
      (coe MAlonzo.Code.Algebra.Structures.C71
         (coe MAlonzo.Code.Algebra.Structures.C25
            (coe MAlonzo.Code.Algebra.Structures.d2538
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2542
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0))))
            (coe MAlonzo.Code.Algebra.Structures.d2544
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))))
         (coe MAlonzo.Code.Data.Product.d26 (coe du200 v0))
         (coe MAlonzo.Code.Algebra.Structures.d2540
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))))
      (coe MAlonzo.Code.Data.Product.d28 (coe du92 v0))
      (coe MAlonzo.Code.Data.Product.d26 (coe du232 v0))
name248
  = "Algebra.Properties.BooleanAlgebra.\8743-\8744-commutativeSemiring"
d248 v0 v1 v2 = du248 v2
du248 v0
  = coe MAlonzo.Code.Algebra.C239 erased erased
      (coe MAlonzo.Code.Algebra.d1414 v0)
      (coe MAlonzo.Code.Algebra.d1412 v0)
      (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe du246 v0)
name254 = "Algebra.Properties.BooleanAlgebra.lemma"
d254 v0 v1 v2 v3 v4 v5 v6 = du254 v2 v3 v4 v5 v6
du254 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            (coe MAlonzo.Code.Algebra.d1418 v0))
         v2
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1418 v0))
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Data.Product.d28 (coe du186 v0)
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1418 v0))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
            v2
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  v4))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v1)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2))
               v2
               (coe MAlonzo.Code.Data.Product.d26 (coe du80 v0)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v1
                  v2)
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v1)
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1420 v0)
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2))
                  v2
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Data.Product.d26 (coe du172 v0) v1)
                     (coe MAlonzo.Code.Algebra.Structures.d2544
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1420 v0)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2))
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1420 v0)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2))
                     v2
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Relation.Binary.Core.d518
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1420 v0)
                           v3)
                        (coe MAlonzo.Code.Algebra.Structures.d2544
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1420 v0)
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2))
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)))
                     (coe du148 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                           v2)
                        v2
                        (coe MAlonzo.Code.Function.du158
                           (coe MAlonzo.Code.Relation.Binary.Core.d518
                              (coe MAlonzo.Code.Algebra.Structures.d2538
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0))))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v1
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                                 v2)
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                                    v2)))
                           (coe MAlonzo.Code.Data.Product.d28 (coe du80 v0) v2 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
                        (coe du148 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                              v2)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1418 v0)
                              v2)
                           v2
                           (coe MAlonzo.Code.Function.du176
                              (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0) v1)
                              (coe MAlonzo.Code.Algebra.Structures.d2550
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0)))
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v1
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                                 (coe MAlonzo.Code.Algebra.d1418 v0)
                                 v2
                                 v2)
                              (coe MAlonzo.Code.Relation.Binary.Core.d516
                                 (coe MAlonzo.Code.Algebra.Structures.d2538
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0))))
                                 v2))
                           (coe du148 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1418 v0)
                                 v2)
                              v2
                              v2
                              (coe MAlonzo.Code.Data.Product.d26 (coe du186 v0) v2)
                              (coe du146 v0 v2)))))))))
name264 = "Algebra.Properties.BooleanAlgebra.\172\8869=\8868"
d264 v0 v1 v2 = du264 v2
du264 v0
  = coe du254 v0 (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe MAlonzo.Code.Data.Product.d28 (coe du186 v0)
         (coe MAlonzo.Code.Algebra.d1420 v0))
      (coe MAlonzo.Code.Data.Product.d28 (coe du232 v0)
         (coe MAlonzo.Code.Algebra.d1420 v0))
name266 = "Algebra.Properties.BooleanAlgebra.\172\8868=\8869"
d266 v0 v1 v2 = du266 v2
du266 v0
  = coe du254 v0 (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe MAlonzo.Code.Data.Product.d28 (coe du214 v0)
         (coe MAlonzo.Code.Algebra.d1418 v0))
      (coe MAlonzo.Code.Data.Product.d28 (coe du200 v0)
         (coe MAlonzo.Code.Algebra.d1418 v0))
name268 = "Algebra.Properties.BooleanAlgebra.\172-involutive"
d268 v0 v1 v2 v3 = du268 v2 v3
du268 v0 v1
  = coe du254 v0 (coe MAlonzo.Code.Algebra.d1416 v0 v1) v1
      (coe MAlonzo.Code.Data.Product.d26 (coe du172 v0) v1)
      (coe MAlonzo.Code.Data.Product.d26 (coe du162 v0) v1)
name276 = "Algebra.Properties.BooleanAlgebra.deMorgan\8321"
d276 v0 v1 v2 v3 v4 = du276 v2 v3 v4
du276 v0 v1 v2
  = coe du254 v0 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
      (coe MAlonzo.Code.Algebra.d1412 v0
         (coe MAlonzo.Code.Algebra.d1416 v0 v1)
         (coe MAlonzo.Code.Algebra.d1416 v0 v2))
      (coe du286 v0 v1 v2)
      (coe du290 v0 v1 v2)
name286 = "Algebra.Properties.BooleanAlgebra._.lem\8321"
d286 v0 v1 v2 v3 v4 = du286 v2 v3 v4
du286 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
         (coe MAlonzo.Code.Algebra.d1420 v0)
         (coe MAlonzo.Code.Data.Product.d26 (coe du80 v0)
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            (coe MAlonzo.Code.Algebra.d1416 v0 v2))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe MAlonzo.Code.Algebra.d1420 v0)
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Algebra.Structures.d2546
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v1
                     v2)
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Algebra.Structures.d2548
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v2
                     v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.Structures.d2544
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
                  (coe MAlonzo.Code.Algebra.Structures.d2548
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v1
                     v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2
                        (coe MAlonzo.Code.Algebra.d1420 v0))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1420 v0)))
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           v2)
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           v2
                           v2
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v1))
                     (coe MAlonzo.Code.Algebra.Structures.d2544
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1414 v0 v2
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1420 v0)))
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           v1)
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           v1
                           v1
                           (coe MAlonzo.Code.Algebra.d1414 v0 v2
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v2)))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1420 v0)))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1420 v0)
                        (coe MAlonzo.Code.Algebra.d1420 v0))
                     (coe MAlonzo.Code.Algebra.d1420 v0)
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Data.Product.d28 (coe du214 v0) v2)
                        (coe MAlonzo.Code.Algebra.Structures.d2544
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v2
                              (coe MAlonzo.Code.Algebra.d1420 v0))
                           (coe MAlonzo.Code.Algebra.d1420 v0)
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1
                              (coe MAlonzo.Code.Algebra.d1420 v0))
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe MAlonzo.Code.Data.Product.d28 (coe du214 v0) v1))
                     (coe du148 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1420 v0)
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe MAlonzo.Code.Algebra.d1420 v0)
                        (coe MAlonzo.Code.Algebra.d1420 v0)
                        (coe MAlonzo.Code.Data.Product.d28 (coe du200 v0)
                           (coe MAlonzo.Code.Algebra.d1420 v0))
                        (coe du146 v0 (coe MAlonzo.Code.Algebra.d1420 v0))))))))
name288 = "Algebra.Properties.BooleanAlgebra._.lem\8323"
d288 v0 v1 v2 v3 v4 = du288 v2 v3 v4
du288 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1416 v0 v1))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1412 v0 v2
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            v2)
         (coe MAlonzo.Code.Data.Product.d28 (coe du92 v0)
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            v1
            v2)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1412 v0 v2
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Algebra.d1412 v0 v2
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               v2)
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0) v1)
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe MAlonzo.Code.Algebra.d1412 v0 v2
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)
               (coe MAlonzo.Code.Data.Product.d26 (coe du186 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.Structures.d2540
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe du146 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2))))))
name290 = "Algebra.Properties.BooleanAlgebra._.lem\8322"
d290 v0 v1 v2 v3 v4 = du290 v2 v3 v4
du290 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Algebra.d1416 v0 v2))
         (coe MAlonzo.Code.Algebra.d1418 v0)
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
            (coe MAlonzo.Code.Algebra.Structures.d2542
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe MAlonzo.Code.Algebra.d1418 v0)
            (coe MAlonzo.Code.Function.du176 (coe du288 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Algebra.Structures.d2542
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1418 v0))
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe MAlonzo.Code.Algebra.Structures.d2544
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1418 v0))
                     (coe MAlonzo.Code.Data.Product.d28 (coe du162 v0) v2))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1418 v0))
                     (coe MAlonzo.Code.Algebra.d1418 v0)
                     (coe MAlonzo.Code.Algebra.d1418 v0)
                     (coe MAlonzo.Code.Data.Product.d28 (coe du232 v0)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe du146 v0 (coe MAlonzo.Code.Algebra.d1418 v0)))))))
name296 = "Algebra.Properties.BooleanAlgebra.deMorgan\8322"
d296 v0 v1 v2 v3 v4 = du296 v2 v3 v4
du296 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            (coe MAlonzo.Code.Algebra.d1416 v0 v2))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Algebra.Structures.d2868
               (coe MAlonzo.Code.Algebra.d1422 v0)
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  v1
                  (coe du268 v0 v1))
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v1
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  v2
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  v2
                  (coe du268 v0 v2))))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe MAlonzo.Code.Function.du158
               (coe MAlonzo.Code.Algebra.Structures.d2868
                  (coe MAlonzo.Code.Algebra.d1422 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
                  (coe du276 v0 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe du268 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe du146 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))))))
name308 = "Algebra.Properties.BooleanAlgebra.replace-equality"
d308 v0 v1 v2 v3 v4 = du308 v2 v3 v4
du308 v0 v1 v2
  = coe MAlonzo.Code.Algebra.C375 erased v1
      (coe MAlonzo.Code.Algebra.d1412 v0)
      (coe MAlonzo.Code.Algebra.d1414 v0)
      (coe MAlonzo.Code.Algebra.d1416 v0)
      (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe MAlonzo.Code.Algebra.Structures.C605
         (coe MAlonzo.Code.Algebra.d1344 (coe du76 v0 v1 v2))
         (\ v3 ->
            coe MAlonzo.Code.Function.Equality.d38
              (coe MAlonzo.Code.Function.Equivalence.d34
                 (coe v2
                    (coe MAlonzo.Code.Algebra.d1412 v0 v3
                       (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                    (coe MAlonzo.Code.Algebra.d1418 v0)))
              (coe MAlonzo.Code.Algebra.Structures.d2864
                 (coe MAlonzo.Code.Algebra.d1422 v0)
                 v3))
         (\ v3 ->
            coe MAlonzo.Code.Function.Equality.d38
              (coe MAlonzo.Code.Function.Equivalence.d34
                 (coe v2
                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                       (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                    (coe MAlonzo.Code.Algebra.d1420 v0)))
              (coe MAlonzo.Code.Algebra.Structures.d2866
                 (coe MAlonzo.Code.Algebra.d1422 v0)
                 v3))
         (\ v3 v4 v5 ->
            coe MAlonzo.Code.Function.Equality.d38
              (coe MAlonzo.Code.Function.Equivalence.d34
                 (coe v2 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                    (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
              (coe MAlonzo.Code.Algebra.Structures.d2868
                 (coe MAlonzo.Code.Algebra.d1422 v0)
                 v3
                 v4
                 (coe MAlonzo.Code.Function.Equality.d38
                    (coe MAlonzo.Code.Function.Equivalence.d36 (coe v2 v3 v4))
                    v5))))
name324 = "Algebra.Properties.BooleanAlgebra._.E.from"
d324 v0 v1 v2 v3 v4 = du324 v2 v3 v4
du324 v0 v1 v2
  = coe MAlonzo.Code.Function.Equivalence.d36 (coe v0 v1 v2)
name326 = "Algebra.Properties.BooleanAlgebra._.E.to"
d326 v0 v1 v2 v3 v4 = du326 v2 v3 v4
du326 v0 v1 v2
  = coe MAlonzo.Code.Function.Equivalence.d34 (coe v0 v1 v2)
name344 = "Algebra.Properties.BooleanAlgebra.XorRing._\8853_"
d344 v0 v1 v2 = du344 v1
du344 v0 = coe v0
name354 = "Algebra.Properties.BooleanAlgebra.XorRing.helper"
d354 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du354 v2 v5 v6 v7 v8 v9 v10
du354 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Function.du176 v5
      (coe MAlonzo.Code.Algebra.Structures.d2550
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.Structures.d2862
               (coe MAlonzo.Code.Algebra.d1422 v0)))
         v1
         v2
         (coe MAlonzo.Code.Algebra.d1416 v0 v3)
         (coe MAlonzo.Code.Algebra.d1416 v0 v4))
      (coe MAlonzo.Code.Algebra.Structures.d2868
         (coe MAlonzo.Code.Algebra.d1422 v0)
         v3
         v4
         v6)
name364
  = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-\172-distrib\737"
d364 v0 v1 v2 v3 v4 v5 v6 = du364 v2 v3 v4 v5 v6
du364 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v3 v4))
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))))
         (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Algebra.Structures.d2868
               (coe MAlonzo.Code.Algebra.d1422 v0)
               (coe v1 v3 v4)
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))))
            (coe v2 v3 v4))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))))
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v4
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))))
            (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
            (coe MAlonzo.Code.Algebra.Structures.d2868
               (coe MAlonzo.Code.Algebra.d1422 v0)
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v4
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))))
               (coe MAlonzo.Code.Data.Product.d28 (coe du80 v0)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))
                  v3
                  v4))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))))
               (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Algebra.Structures.d2868
                     (coe MAlonzo.Code.Algebra.d1422 v0)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))))
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))))
                     (coe MAlonzo.Code.Algebra.Structures.d2544
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3))))
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           v4)
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           v4
                           v4
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))
                        (coe MAlonzo.Code.Algebra.Structures.d2868
                           (coe MAlonzo.Code.Algebra.d1422 v0)
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
                           (coe MAlonzo.Code.Algebra.Structures.d2546
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0)))
                              v3
                              v4)))))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                  (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                  (coe MAlonzo.Code.Function.du158
                     (coe MAlonzo.Code.Algebra.Structures.d2868
                        (coe MAlonzo.Code.Algebra.d1422 v0)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                     (coe MAlonzo.Code.Function.du176 (coe du378 v0 v3 v4)
                        (coe MAlonzo.Code.Algebra.Structures.d2544
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                        (coe du378 v0 v4 v3)))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                     (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                     (coe du296 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe du148 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                        (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                        (coe MAlonzo.Code.Function.du176
                           (coe du276 v0 v3 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           (coe MAlonzo.Code.Algebra.Structures.d2550
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0)))
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                           (coe MAlonzo.Code.Relation.Binary.Core.d516
                              (coe MAlonzo.Code.Algebra.Structures.d2538
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0))))
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)))))
                        (coe du148 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    v4)))
                           (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                           (coe du354 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4)))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 v4)
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 v4)
                              (coe MAlonzo.Code.Function.du176
                                 (coe MAlonzo.Code.Relation.Binary.Core.d516
                                    (coe MAlonzo.Code.Algebra.Structures.d2538
                                       (coe MAlonzo.Code.Algebra.Structures.d2690
                                          (coe MAlonzo.Code.Algebra.Structures.d2862
                                             (coe MAlonzo.Code.Algebra.d1422 v0))))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                                 (coe MAlonzo.Code.Algebra.Structures.d2544
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0)))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    v4)
                                 (coe du268 v0 v4))
                              (coe MAlonzo.Code.Algebra.Structures.d2546
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0)))
                                 v4
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                           (coe du148 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       v4)))
                              (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                              (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                              (coe MAlonzo.Code.Function.du158
                                 (coe MAlonzo.Code.Relation.Binary.Core.d518
                                    (coe MAlonzo.Code.Algebra.Structures.d2538
                                       (coe MAlonzo.Code.Algebra.Structures.d2690
                                          (coe MAlonzo.Code.Algebra.Structures.d2862
                                             (coe MAlonzo.Code.Algebra.d1422 v0))))
                                    (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                             v4))))
                                 (coe v2 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4))
                              (coe du146 v0
                                 (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4))))))))))
name378 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem"
d378 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du378 v2 v7 v8
du378 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1416 v0 v2))
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1)
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe du276 v0 v1 v2))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe MAlonzo.Code.Data.Product.d26 (coe du80 v0) v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v1)
                  (coe MAlonzo.Code.Algebra.Structures.d2544
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe MAlonzo.Code.Algebra.d1420 v0)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1420 v0)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Data.Product.d26 (coe du200 v0)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe du146 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))))))
name384 = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-comm"
d384 v0 v1 v2 v3 v4 v5 v6 = du384 v2 v3 v4 v5 v6
du384 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe v1 v3 v4)
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
         (coe v1 v4 v3)
         (coe v2 v3 v4)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v4 v3)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))
            (coe v1 v4 v3)
            (coe du354 v0 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
               (coe MAlonzo.Code.Algebra.d1412 v0 v4 v3)
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
               (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
               (coe MAlonzo.Code.Algebra.Structures.d2540
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v3
                  v4)
               (coe MAlonzo.Code.Algebra.Structures.d2546
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v3
                  v4))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)))
               (coe v1 v4 v3)
               (coe v1 v4 v3)
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe v1 v4 v3)
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v3)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3))))
                  (coe v2 v4 v3))
               (coe du146 v0 (coe v1 v4 v3)))))
name394
  = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-\172-distrib\691"
d394 v0 v1 v2 v3 v4 v5 v6 = du394 v2 v3 v4 v5 v6
du394 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v3 v4))
         (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v4 v3))
         (coe v1 v3 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Algebra.Structures.d2868
               (coe MAlonzo.Code.Algebra.d1422 v0)
               (coe v1 v3 v4)
               (coe v1 v4 v3))
            (coe du384 v0 v1 v2 v3 v4))
         (coe du148 v0 (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v4 v3))
            (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v4) v3)
            (coe v1 v3 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
            (coe du364 v0 v1 v2 v4 v3)
            (coe du148 v0 (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v4) v3)
               (coe v1 v3 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
               (coe v1 v3 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
               (coe du384 v0 v1 v2 (coe MAlonzo.Code.Algebra.d1416 v0 v4) v3)
               (coe du146 v0
                  (coe v1 v3 (coe MAlonzo.Code.Algebra.d1416 v0 v4))))))
name404
  = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-annihilates-\172"
d404 v0 v1 v2 v3 v4 v5 v6 = du404 v2 v3 v4 v5 v6
du404 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe v1 v3 v4)
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v3 v4)))
         (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
            (coe MAlonzo.Code.Algebra.d1416 v0 v4))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v3 v4)))
               (coe v1 v3 v4))
            (coe du268 v0 (coe v1 v3 v4)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v3 v4)))
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4))
            (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
               (coe MAlonzo.Code.Algebra.d1416 v0 v4))
            (coe MAlonzo.Code.Function.du158
               (coe MAlonzo.Code.Algebra.Structures.d2868
                  (coe MAlonzo.Code.Algebra.d1422 v0)
                  (coe MAlonzo.Code.Algebra.d1416 v0 (coe v1 v3 v4))
                  (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4))
               (coe du364 v0 v1 v2 v3 v4))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4))
               (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v4))
               (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v4))
               (coe du394 v0 v1 v2 (coe MAlonzo.Code.Algebra.d1416 v0 v3) v4)
               (coe du146 v0
                  (coe v1 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v4))))))
name410 = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-cong"
d410 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du410 v2 v3 v4 v5 v6 v7 v8 v9 v10
du410 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe v1 v3 v5)
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v3 v5)
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)))
         (coe v1 v4 v6)
         (coe v2 v3 v5)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v3 v5)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v4 v6)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v4 v6)))
            (coe v1 v4 v6)
            (coe du354 v0 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v5)
               (coe MAlonzo.Code.Algebra.d1412 v0 v4 v6)
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)
               (coe MAlonzo.Code.Algebra.d1414 v0 v4 v6)
               (coe MAlonzo.Code.Function.du176 v7
                  (coe MAlonzo.Code.Algebra.Structures.d2544
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v3
                     v4
                     v5
                     v6)
                  v8)
               (coe MAlonzo.Code.Function.du176 v7
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v3
                     v4
                     v5
                     v6)
                  v8))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v6)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v6)))
               (coe v1 v4 v6)
               (coe v1 v4 v6)
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe v1 v4 v6)
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v6)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4 v6))))
                  (coe v2 v4 v6))
               (coe du146 v0 (coe v1 v4 v6)))))
name424
  = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-identity"
d424 v0 v1 v2 v3 v4 = du424 v2 v3 v4
du424 v0 v1 v2
  = coe MAlonzo.Code.Data.Product.C30
      (coe d432 erased erased v0 v1 v2)
      (\ v3 ->
         coe MAlonzo.Code.Function.du176
           (coe du384 v0 v1 v2 v3 (coe MAlonzo.Code.Algebra.d1420 v0))
           (coe MAlonzo.Code.Relation.Binary.Core.d520
              (coe MAlonzo.Code.Algebra.Structures.d2538
                 (coe MAlonzo.Code.Algebra.Structures.d2690
                    (coe MAlonzo.Code.Algebra.Structures.d2862
                       (coe MAlonzo.Code.Algebra.d1422 v0))))
              (coe v1 v3 (coe MAlonzo.Code.Algebra.d1420 v0))
              (coe v1 (coe MAlonzo.Code.Algebra.d1420 v0) v3)
              v3)
           (coe du432 v0 v1 v2 v3))
name432
  = "Algebra.Properties.BooleanAlgebra.XorRing._.\8869\8853x=x"
d432 v0 v1 v2 v3 v4 v5 = du432 v2 v3 v4 v5
du432 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe v1 (coe MAlonzo.Code.Algebra.d1420 v0) v3)
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1420 v0)
               v3)
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  v3)))
         v3
         (coe v2 (coe MAlonzo.Code.Algebra.d1420 v0) v3)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  v3)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1420 v0)
                     v3)))
            (coe MAlonzo.Code.Algebra.d1414 v0 v3
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1420 v0)))
            v3
            (coe du354 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  v3)
               v3
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  v3)
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Data.Product.d26 (coe du200 v0) v3)
               (coe MAlonzo.Code.Data.Product.d26 (coe du214 v0) v3))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v3
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1420 v0)))
               (coe MAlonzo.Code.Algebra.d1414 v0 v3
                  (coe MAlonzo.Code.Algebra.d1418 v0))
               v3
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     v3)
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v3
                     v3
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1420 v0))
                     (coe MAlonzo.Code.Algebra.d1418 v0))
                  (coe du264 v0))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3
                     (coe MAlonzo.Code.Algebra.d1418 v0))
                  v3
                  v3
                  (coe MAlonzo.Code.Data.Product.d28 (coe du186 v0) v3)
                  (coe du146 v0 v3)))))
name438 = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-inverse"
d438 v0 v1 v2 v3 v4 = du438 v2 v3 v4
du438 v0 v1 v2
  = coe MAlonzo.Code.Data.Product.C30
      (coe d446 erased erased v0 v1 v2)
      (\ v3 ->
         coe MAlonzo.Code.Function.du176 (coe du384 v0 v1 v2 v3 v3)
           (coe MAlonzo.Code.Relation.Binary.Core.d520
              (coe MAlonzo.Code.Algebra.Structures.d2538
                 (coe MAlonzo.Code.Algebra.Structures.d2690
                    (coe MAlonzo.Code.Algebra.Structures.d2862
                       (coe MAlonzo.Code.Algebra.d1422 v0))))
              (coe v1 v3 v3)
              (coe v1 v3 v3)
              (coe MAlonzo.Code.Algebra.d1420 v0))
           (coe du446 v0 v1 v2 v3))
name446
  = "Algebra.Properties.BooleanAlgebra.XorRing._.x\8853x=\8869"
d446 v0 v1 v2 v3 v4 v5 = du446 v2 v3 v4 v5
du446 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe v1 v3 v3)
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v3 v3)
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v3)))
         (coe MAlonzo.Code.Algebra.d1420 v0)
         (coe v2 v3 v3)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v3 v3)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3 v3)))
            (coe MAlonzo.Code.Algebra.d1414 v0 v3
               (coe MAlonzo.Code.Algebra.d1416 v0 v3))
            (coe MAlonzo.Code.Algebra.d1420 v0)
            (coe du354 v0 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v3) v3
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v3)
               v3
               (coe du90 v0 v3)
               (coe du78 v0 v3))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v3
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Algebra.d1420 v0)
               (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v3)
               (coe du146 v0 (coe MAlonzo.Code.Algebra.d1420 v0)))))
name452
  = "Algebra.Properties.BooleanAlgebra.XorRing.distrib-\8743-\8853"
d452 v0 v1 v2 v3 v4 = du452 v2 v3 v4
du452 v0 v1 v2
  = coe MAlonzo.Code.Data.Product.C30
      (coe d458 erased erased v0 v1 v2)
      (coe d476 erased erased v0 v1 v2)
name458 = "Algebra.Properties.BooleanAlgebra.XorRing._.dist\737"
d458 v0 v1 v2 v3 v4 v5 v6 v7 = du458 v2 v3 v4 v5 v6 v7
du458 v0 v1 v2 v3 v4 v5
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe MAlonzo.Code.Algebra.d1414 v0 v3 (coe v1 v4 v5))
         (coe MAlonzo.Code.Algebra.d1414 v0 v3
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
         (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
            (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v3)
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v3
               v3
               (coe v1 v4 v5)
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
            (coe v2 v4 v5))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v3
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v3
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
            (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
            (coe MAlonzo.Code.Function.du158
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))))
               (coe MAlonzo.Code.Algebra.Structures.d2548
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v3
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3
                     (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3
                     (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
               (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)))
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                  (coe du276 v0 v4 v5))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1420 v0)
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                  (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                  (coe MAlonzo.Code.Function.du158
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1420 v0)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                     (coe MAlonzo.Code.Data.Product.d26 (coe du200 v0)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1420 v0)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                     (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                     (coe MAlonzo.Code.Function.du176 (coe du474 v0 v3 v4 v5)
                        (coe MAlonzo.Code.Algebra.Structures.d2544
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1420 v0)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                     (coe du148 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                        (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                        (coe MAlonzo.Code.Function.du158
                           (coe MAlonzo.Code.Relation.Binary.Core.d518
                              (coe MAlonzo.Code.Algebra.Structures.d2538
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0))))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                           (coe MAlonzo.Code.Data.Product.d26 (coe du80 v0)
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                        (coe du148 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                           (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                              (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                           (coe MAlonzo.Code.Function.du176
                              (coe MAlonzo.Code.Relation.Binary.Core.d516
                                 (coe MAlonzo.Code.Algebra.Structures.d2538
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0))))
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)))
                              (coe MAlonzo.Code.Algebra.Structures.d2550
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0)))
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                              (coe MAlonzo.Code.Function.du176
                                 (coe MAlonzo.Code.Relation.Binary.Core.d516
                                    (coe MAlonzo.Code.Algebra.Structures.d2538
                                       (coe MAlonzo.Code.Algebra.Structures.d2690
                                          (coe MAlonzo.Code.Algebra.Structures.d2862
                                             (coe MAlonzo.Code.Algebra.d1422 v0))))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                                 (coe MAlonzo.Code.Algebra.Structures.d2544
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0)))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
                                 (coe MAlonzo.Code.Relation.Binary.Core.d518
                                    (coe MAlonzo.Code.Algebra.Structures.d2538
                                       (coe MAlonzo.Code.Algebra.Structures.d2690
                                          (coe MAlonzo.Code.Algebra.Structures.d2862
                                             (coe MAlonzo.Code.Algebra.d1422 v0))))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                    (coe du276 v0 v4 v5))))
                           (coe du148 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                              (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                              (coe MAlonzo.Code.Function.du176
                                 (coe MAlonzo.Code.Relation.Binary.Core.d516
                                    (coe MAlonzo.Code.Algebra.Structures.d2538
                                       (coe MAlonzo.Code.Algebra.Structures.d2690
                                          (coe MAlonzo.Code.Algebra.Structures.d2862
                                             (coe MAlonzo.Code.Algebra.d1422 v0))))
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)))
                                 (coe MAlonzo.Code.Algebra.Structures.d2550
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0)))
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                                 (coe MAlonzo.Code.Relation.Binary.Core.d518
                                    (coe MAlonzo.Code.Algebra.Structures.d2538
                                       (coe MAlonzo.Code.Algebra.Structures.d2690
                                          (coe MAlonzo.Code.Algebra.Structures.d2862
                                             (coe MAlonzo.Code.Algebra.d1422 v0))))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))
                                    (coe du276 v0 v3 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                              (coe du148 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))))
                                 (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                 (coe du354 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                    (coe MAlonzo.Code.Relation.Binary.Core.d516
                                       (coe MAlonzo.Code.Algebra.Structures.d2538
                                          (coe MAlonzo.Code.Algebra.Structures.d2690
                                             (coe MAlonzo.Code.Algebra.Structures.d2862
                                                (coe MAlonzo.Code.Algebra.d1422 v0))))
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)))
                                    (coe du472 v0 v3 v4 v5))
                                 (coe du148 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))))
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))))
                                    (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                       (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                    (coe MAlonzo.Code.Function.du176
                                       (coe MAlonzo.Code.Data.Product.d26 (coe du80 v0) v3 v4 v5)
                                       (coe MAlonzo.Code.Algebra.Structures.d2550
                                          (coe MAlonzo.Code.Algebra.Structures.d2690
                                             (coe MAlonzo.Code.Algebra.Structures.d2862
                                                (coe MAlonzo.Code.Algebra.d1422 v0)))
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3
                                             (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5))
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)))
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))))
                                       (coe MAlonzo.Code.Relation.Binary.Core.d516
                                          (coe MAlonzo.Code.Algebra.Structures.d2538
                                             (coe MAlonzo.Code.Algebra.Structures.d2690
                                                (coe MAlonzo.Code.Algebra.Structures.d2862
                                                   (coe MAlonzo.Code.Algebra.d1422 v0))))
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)))))
                                    (coe du148 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))))
                                       (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                       (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                       (coe MAlonzo.Code.Function.du158
                                          (coe MAlonzo.Code.Relation.Binary.Core.d518
                                             (coe MAlonzo.Code.Algebra.Structures.d2538
                                                (coe MAlonzo.Code.Algebra.Structures.d2690
                                                   (coe MAlonzo.Code.Algebra.Structures.d2862
                                                      (coe MAlonzo.Code.Algebra.d1422 v0))))
                                             (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1412 v0
                                                   (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                   (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
                                                (coe MAlonzo.Code.Algebra.d1416 v0
                                                   (coe MAlonzo.Code.Algebra.d1414 v0
                                                      (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                                      (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)))))
                                          (coe v2 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)))
                                       (coe du146 v0
                                          (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))))))))))))))
name470 = "Algebra.Properties.BooleanAlgebra.XorRing._._.lem\8322"
d470 v0 v1 v2 v3 v4 v5 v6 v7 = du470 v2 v5 v6 v7
du470 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            v3)
         (coe MAlonzo.Code.Algebra.d1414 v0 v2
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  v3)
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))
            (coe MAlonzo.Code.Algebra.Structures.d2548
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v2
               v3))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               v3)
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
               v3)
            (coe MAlonzo.Code.Algebra.d1414 v0 v2
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Algebra.Structures.d2546
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v1
                  v2)
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                  v3
                  v3)
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  v3))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v1)
                  v3)
               (coe MAlonzo.Code.Algebra.d1414 v0 v2
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
               (coe MAlonzo.Code.Algebra.d1414 v0 v2
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
               (coe MAlonzo.Code.Algebra.Structures.d2548
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  v2
                  v1
                  v3)
               (coe du146 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))))))
name472 = "Algebra.Properties.BooleanAlgebra.XorRing._._.lem\8321"
d472 v0 v1 v2 v3 v4 v5 v6 v7 = du472 v2 v5 v6 v7
du472 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
            (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
               v1
               (coe du78 v0 v1))
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
               (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v1)
               (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
            (coe MAlonzo.Code.Algebra.Structures.d2548
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     v1)
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v1
                     v1
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3)))
                  (coe du470 v0 v1 v2 v3))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
                  (coe MAlonzo.Code.Function.du158
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1414 v0 v2
                              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3))))
                     (coe MAlonzo.Code.Algebra.Structures.d2548
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        v1
                        v2
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3)))
                  (coe du146 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v3)))))))
name474 = "Algebra.Properties.BooleanAlgebra.XorRing._._.lem\8323"
d474 v0 v1 v2 v3 v4 v5 v6 v7 = du474 v2 v5 v6 v7
du474 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe MAlonzo.Code.Algebra.d1420 v0)
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
            (coe MAlonzo.Code.Algebra.d1420 v0))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
            (coe MAlonzo.Code.Algebra.d1416 v0 v1))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1420 v0))
               (coe MAlonzo.Code.Algebra.d1420 v0))
            (coe MAlonzo.Code.Data.Product.d28 (coe du214 v0)
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1420 v0))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.d1416 v0 v1))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1420 v0)
                  (coe MAlonzo.Code.Data.Product.d28 (coe du172 v0) v1)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                     v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1))))
                  (coe MAlonzo.Code.Algebra.Structures.d2548
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                     v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                        v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Algebra.Structures.d2546
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                        v1)
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1))
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)))
                  (coe du146 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1
                           (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)))))))
name476 = "Algebra.Properties.BooleanAlgebra.XorRing._.dist\691"
d476 v0 v1 v2 v3 v4 v5 v6 v7 = du476 v2 v3 v4 v5 v6 v7
du476 v0 v1 v2 v3 v4 v5
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0 (coe MAlonzo.Code.Algebra.d1414 v0 (coe v1 v4 v5) v3)
         (coe MAlonzo.Code.Algebra.d1414 v0 v3 (coe v1 v4 v5))
         (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
            (coe MAlonzo.Code.Algebra.d1414 v0 v5 v3))
         (coe MAlonzo.Code.Algebra.Structures.d2546
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0)))
            (coe v1 v4 v5)
            v3)
         (coe du148 v0 (coe MAlonzo.Code.Algebra.d1414 v0 v3 (coe v1 v4 v5))
            (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
               (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
            (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
               (coe MAlonzo.Code.Algebra.d1414 v0 v5 v3))
            (coe du458 v0 v1 v2 v3 v4 v5)
            (coe du148 v0
               (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5))
               (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v5 v3))
               (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
                  (coe MAlonzo.Code.Algebra.d1414 v0 v5 v3))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Algebra.Structures.d2546
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v3
                     v4)
                  (coe d410 erased erased v0 v1 v2
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3 v5)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v5 v3))
                  (coe MAlonzo.Code.Algebra.Structures.d2546
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     v3
                     v5))
               (coe du146 v0
                  (coe v1 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v3)
                     (coe MAlonzo.Code.Algebra.d1414 v0 v5 v3))))))
name492 = "Algebra.Properties.BooleanAlgebra.XorRing.lemma\8322"
d492 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du492 v2 v5 v6 v7 v8
du492 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               v3)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
               v4))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v3)
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v4)
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v4)))
         (coe MAlonzo.Code.Data.Product.d26 (coe du92 v0)
            (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
            v3
            v4)
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                  v4))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v4)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v4)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v4)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v4)))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Data.Product.d28 (coe du92 v0) v3 v1 v2)
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     v3)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)
                     v4)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v4)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v4)))
               (coe MAlonzo.Code.Data.Product.d28 (coe du92 v0) v4 v1 v2))
            (coe du146 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v4)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v4))))))
name502 = "Algebra.Properties.BooleanAlgebra.XorRing.\8853-assoc"
d502 v0 v1 v2 v3 v4 v5 v6 v7 = du502 v2 v3 v4 v5 v6 v7
du502 v0 v1 v2 v3 v4 v5
  = coe MAlonzo.Code.Function.du158
      (coe MAlonzo.Code.Relation.Binary.Core.d518
         (coe MAlonzo.Code.Algebra.Structures.d2538
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.Structures.d2862
                  (coe MAlonzo.Code.Algebra.d1422 v0))))
         (coe v1 v3 (coe v1 v4 v5))
         (coe v1 (coe v1 v3 v4) v5))
      (coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
         (coe du148 v0 (coe v1 v3 (coe v1 v4 v5))
            (coe v1 v3
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
            (coe v1 (coe v1 v3 v4) v5)
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  v3)
               (coe d410 erased erased v0 v1 v2 v3 v3 (coe v1 v4 v5)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
               (coe v2 v4 v5))
            (coe du148 v0
               (coe v1 v3
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v3
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v3
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))))
               (coe v1 (coe v1 v3 v4) v5)
               (coe v2 v3
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v3
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v3
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                           v5)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           v5)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                              v4)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                  (coe v1 (coe v1 v3 v4) v5)
                  (coe MAlonzo.Code.Function.du176 (coe du520 v0 v3 v4 v5)
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0 v3
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                              v5)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v3
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v4 v5)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0 v4 v5)))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                              v5)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                     (coe du524 v0 v3 v4 v5))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                              v5)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                              v5)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                           v5)
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                 v5)
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    v4)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                     (coe v1 (coe v1 v3 v4) v5)
                     (coe MAlonzo.Code.Algebra.Structures.d2548
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                           v5)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v3
                              (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                              v5)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                 v4)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                     (coe du148 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                              v5)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       v4)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                              v5)
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                 v5)
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       v4)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                        (coe v1 (coe v1 v3 v4) v5)
                        (coe MAlonzo.Code.Function.du176
                           (coe MAlonzo.Code.Relation.Binary.Core.d516
                              (coe MAlonzo.Code.Algebra.Structures.d2538
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0))))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                 v5))
                           (coe MAlonzo.Code.Algebra.Structures.d2550
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0)))
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                 v5)
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                 v5)
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                       v5)
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                           (coe du526 v0 v3 v4 v5))
                        (coe du148 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                 v5)
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    v5))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       v4)
                                    (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                           (coe v1 (coe v1 v3 v4) v5)
                           (coe MAlonzo.Code.Function.du158
                              (coe MAlonzo.Code.Relation.Binary.Core.d518
                                 (coe MAlonzo.Code.Algebra.Structures.d2538
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0))))
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          v5)
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                          v5))
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                             v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                       v5)
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                          v5)
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                                (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1412 v0
                                                (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                                v4)
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v5))))))
                              (coe MAlonzo.Code.Algebra.Structures.d2548
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.Structures.d2862
                                       (coe MAlonzo.Code.Algebra.d1422 v0)))
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5)))))
                           (coe du148 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                       v5)
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                       v5))
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                          v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0 v5))))
                              (coe MAlonzo.Code.Algebra.d1414 v0
                                 (coe MAlonzo.Code.Algebra.d1412 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                    v5)
                                 (coe MAlonzo.Code.Algebra.d1416 v0
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                       v5)))
                              (coe v1 (coe v1 v3 v4) v5)
                              (coe MAlonzo.Code.Function.du176 (coe du514 v0 v3 v4 v5)
                                 (coe MAlonzo.Code.Algebra.Structures.d2550
                                    (coe MAlonzo.Code.Algebra.Structures.d2690
                                       (coe MAlonzo.Code.Algebra.Structures.d2862
                                          (coe MAlonzo.Code.Algebra.d1422 v0)))
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          v5)
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                          v5))
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                       v5)
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v4))
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v5))
                                       (coe MAlonzo.Code.Algebra.d1412 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                                             v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0 v5)))
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0
                                             (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1416 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                          v5)))
                                 (coe du518 v0 v3 v4 v5))
                              (coe du148 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0
                                    (coe MAlonzo.Code.Algebra.d1412 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                       v5)
                                    (coe MAlonzo.Code.Algebra.d1416 v0
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0
                                             (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1416 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                          v5)))
                                 (coe v1
                                    (coe MAlonzo.Code.Algebra.d1414 v0
                                       (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                       (coe MAlonzo.Code.Algebra.d1416 v0
                                          (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                    v5)
                                 (coe v1 (coe v1 v3 v4) v5)
                                 (coe MAlonzo.Code.Function.du158
                                    (coe MAlonzo.Code.Relation.Binary.Core.d518
                                       (coe MAlonzo.Code.Algebra.Structures.d2538
                                          (coe MAlonzo.Code.Algebra.Structures.d2690
                                             (coe MAlonzo.Code.Algebra.Structures.d2862
                                                (coe MAlonzo.Code.Algebra.d1422 v0))))
                                       (coe v1
                                          (coe MAlonzo.Code.Algebra.d1414 v0
                                             (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1416 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                          v5)
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1416 v0
                                                   (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                             v5)
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1414 v0
                                                   (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                                   (coe MAlonzo.Code.Algebra.d1416 v0
                                                      (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                                v5))))
                                    (coe v2
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                       v5))
                                 (coe du148 v0
                                    (coe v1
                                       (coe MAlonzo.Code.Algebra.d1414 v0
                                          (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                          (coe MAlonzo.Code.Algebra.d1416 v0
                                             (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                       v5)
                                    (coe v1 (coe v1 v3 v4) v5)
                                    (coe v1 (coe v1 v3 v4) v5)
                                    (coe MAlonzo.Code.Function.du158
                                       (coe MAlonzo.Code.Relation.Binary.Core.d518
                                          (coe MAlonzo.Code.Algebra.Structures.d2538
                                             (coe MAlonzo.Code.Algebra.Structures.d2690
                                                (coe MAlonzo.Code.Algebra.Structures.d2862
                                                   (coe MAlonzo.Code.Algebra.d1422 v0))))
                                          (coe v1 (coe v1 v3 v4) v5)
                                          (coe v1
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1416 v0
                                                   (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                             v5))
                                       (coe MAlonzo.Code.Function.du176 (coe v2 v3 v4)
                                          (coe d410 erased erased v0 v1 v2 (coe v1 v3 v4)
                                             (coe MAlonzo.Code.Algebra.d1414 v0
                                                (coe MAlonzo.Code.Algebra.d1412 v0 v3 v4)
                                                (coe MAlonzo.Code.Algebra.d1416 v0
                                                   (coe MAlonzo.Code.Algebra.d1414 v0 v3 v4)))
                                             v5
                                             v5)
                                          (coe MAlonzo.Code.Relation.Binary.Core.d516
                                             (coe MAlonzo.Code.Algebra.Structures.d2538
                                                (coe MAlonzo.Code.Algebra.Structures.d2690
                                                   (coe MAlonzo.Code.Algebra.Structures.d2862
                                                      (coe MAlonzo.Code.Algebra.d1422 v0))))
                                             v5)))
                                    (coe du146 v0 (coe v1 (coe v1 v3 v4) v5))))))))))))
name514 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8321"
d514 v0 v1 v2 v3 v4 v5 v6 v7 = du514 v2 v5 v6 v7
du514 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               v3)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               v3))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            v3)
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
            v3)
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  v3)
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3)))
            (coe MAlonzo.Code.Data.Product.d28 (coe du92 v0) v3
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               v3)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
               v3)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
               v3)
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe du276 v0 v1 v2)))
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                  v3
                  v3)
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  v3))
            (coe du146 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                  v3))))
name516 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8322'"
d516 v0 v1 v2 v3 v4 v5 v6 v7 = du516 v2 v5 v6
du516 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               v2))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1418 v0)
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)
               (coe MAlonzo.Code.Algebra.d1418 v0)))
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1418 v0)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1418 v0)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Data.Product.d26 (coe du186 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1418 v0)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1418 v0))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2))
               (coe MAlonzo.Code.Data.Product.d28 (coe du186 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2))))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1418 v0)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1418 v0)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v1)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     v1))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     v2)))
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
            (coe MAlonzo.Code.Function.du158
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v1))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v2)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1418 v0)
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1418 v0))))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Data.Product.d26 (coe du162 v0) v1)
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1418 v0)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                     (coe MAlonzo.Code.Algebra.Structures.d2540
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v1))
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v1))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1418 v0)
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v2))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1418 v0)))
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2))
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1418 v0))
                     (coe MAlonzo.Code.Data.Product.d26 (coe du162 v0) v2))))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v1)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v2)))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v1))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v2))))
                  (coe du492 v0 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     v1
                     v2))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                  (coe MAlonzo.Code.Function.du158
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                     (coe MAlonzo.Code.Function.du176 (coe du296 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.Structures.d2544
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
                        (coe du268 v0 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                        (coe du276 v0 (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                     (coe du146 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))))))))
name518 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8322"
d518 v0 v1 v2 v3 v4 v5 v6 v7 = du518 v2 v5 v6 v7
du518 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1416 v0 v3))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2))
            (coe MAlonzo.Code.Algebra.d1416 v0 v3))
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
               v3))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
            (coe MAlonzo.Code.Data.Product.d28 (coe du92 v0)
               (coe MAlonzo.Code.Algebra.d1416 v0 v3)
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2))
               (coe MAlonzo.Code.Algebra.d1416 v0 v3))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
               (coe MAlonzo.Code.Algebra.d1416 v0 v3))
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                  v3))
            (coe MAlonzo.Code.Function.du176 (coe du516 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                     v3))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                     v3))
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                           v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                              (coe MAlonzo.Code.Algebra.d1416 v0
                                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                  (coe du276 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                     v3))
               (coe du146 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0
                              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                        v3))))))
name520 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8323"
d520 v0 v1 v2 v3 v4 v5 v6 v7 = du520 v2 v5 v6 v7
du520 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))))
         (coe MAlonzo.Code.Algebra.d1412 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               v3)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               v1)
            (coe MAlonzo.Code.Algebra.Structures.d2544
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               v1
               v1
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe du276 v0 v2 v3)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                  v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
            (coe MAlonzo.Code.Data.Product.d26 (coe du92 v0) v1
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                     v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                     (coe MAlonzo.Code.Algebra.Structures.d2542
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        v1
                        v2
                        v3))
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0)))
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe MAlonzo.Code.Algebra.Structures.d2542
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
               (coe du146 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))))))
name522 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8324'"
d522 v0 v1 v2 v3 v4 v5 v6 v7 = du522 v2 v6 v7
du522 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0 v1
               (coe MAlonzo.Code.Algebra.d1416 v0 v2))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               v2))
         (coe du276 v0 (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2))
            (coe MAlonzo.Code.Function.du176 (coe du296 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
               (coe du268 v0 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v1)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v1))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v2)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2))
               (coe du492 v0 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                  v1
                  v2)
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v1))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v2)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1418 v0)
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1418 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2))
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Data.Product.d26 (coe du162 v0) v1)
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v1)
                           (coe MAlonzo.Code.Algebra.d1418 v0)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                        (coe MAlonzo.Code.Algebra.Structures.d2540
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v1))
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v1))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1418 v0)
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v2))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1418 v0)))
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.Structures.d2862
                                    (coe MAlonzo.Code.Algebra.d1422 v0))))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2))
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1418 v0))
                        (coe MAlonzo.Code.Data.Product.d26 (coe du162 v0) v2)))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1418 v0)
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1418 v0)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2))
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Data.Product.d26 (coe du186 v0)
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1418 v0)
                              (coe MAlonzo.Code.Algebra.d1412 v0 v1
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v2)))
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           (coe MAlonzo.Code.Algebra.d1414 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                                 v2)
                              (coe MAlonzo.Code.Algebra.d1418 v0))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2))
                        (coe MAlonzo.Code.Data.Product.d28 (coe du186 v0)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)))
                     (coe du146 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2))))))))
name524 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8324"
d524 v0 v1 v2 v3 v4 v5 v6 v7 = du524 v2 v5 v6 v7
du524 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1416 v0
            (coe MAlonzo.Code.Algebra.d1414 v0 v1
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))))
         (coe MAlonzo.Code.Algebra.d1412 v0
            (coe MAlonzo.Code.Algebra.d1416 v0 v1)
            (coe MAlonzo.Code.Algebra.d1416 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               v3)
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
         (coe du276 v0 v1
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1416 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                     (coe MAlonzo.Code.Algebra.d1416 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3)))))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1416 v0 v1)
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     v3)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1))
               (coe MAlonzo.Code.Algebra.Structures.d2544
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2 v3)
                        (coe MAlonzo.Code.Algebra.d1416 v0
                           (coe MAlonzo.Code.Algebra.d1414 v0 v2 v3))))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v3)))
               (coe du522 v0 v2 v3))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1412 v0 v2
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                        v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Data.Product.d26 (coe du92 v0)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1412 v0 v2
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                     v3))
               (coe du148 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0 v2
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v3)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0 v2
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                        (coe MAlonzo.Code.Algebra.Structures.d2542
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0 v2
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v3))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           v3))
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0))))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           v3)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                              v3))
                        (coe MAlonzo.Code.Algebra.Structures.d2542
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.Structures.d2862
                                 (coe MAlonzo.Code.Algebra.d1422 v0)))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2)
                           v3)))
                  (coe du148 v0
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           v3))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           v3)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           v3)
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                     (coe MAlonzo.Code.Algebra.Structures.d2546
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0)))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           v3))
                     (coe du146 v0
                        (coe MAlonzo.Code.Algebra.d1414 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                              v3)
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1412 v0
                                 (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                                 v2)
                              (coe MAlonzo.Code.Algebra.d1416 v0 v3)))))))))
name526 = "Algebra.Properties.BooleanAlgebra.XorRing._.lem\8325"
d526 v0 v1 v2 v3 v4 v5 v6 v7 = du526 v2 v5 v6 v7
du526 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du148 v0
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0 v1
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               (coe MAlonzo.Code.Algebra.d1416 v0 v3))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  v3))
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  v2)
               (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
         (coe MAlonzo.Code.Algebra.d1414 v0
            (coe MAlonzo.Code.Algebra.d1412 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v2))
               v3)
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))))
            (coe MAlonzo.Code.Algebra.Structures.d2548
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.Structures.d2862
                     (coe MAlonzo.Code.Algebra.d1422 v0)))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0 v1
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  v3)
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
         (coe du148 v0
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     v2)
                  (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
            (coe MAlonzo.Code.Algebra.d1414 v0
               (coe MAlonzo.Code.Algebra.d1412 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                  v3)
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Algebra.Structures.d2546
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3))
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.Structures.d2862
                           (coe MAlonzo.Code.Algebra.d1422 v0))))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
            (coe du148 v0
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3)
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
               (coe MAlonzo.Code.Algebra.d1414 v0
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3)
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0 v1
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           v2)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v3))))
               (coe MAlonzo.Code.Algebra.Structures.d2548
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     v3)
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0 v1
                        (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                  (coe MAlonzo.Code.Algebra.d1412 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                        v2)
                     (coe MAlonzo.Code.Algebra.d1416 v0 v3)))
               (coe du146 v0
                  (coe MAlonzo.Code.Algebra.d1414 v0
                     (coe MAlonzo.Code.Algebra.d1412 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                        v3)
                     (coe MAlonzo.Code.Algebra.d1414 v0
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0 v1
                              (coe MAlonzo.Code.Algebra.d1416 v0 v2))
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))
                        (coe MAlonzo.Code.Algebra.d1412 v0
                           (coe MAlonzo.Code.Algebra.d1412 v0
                              (coe MAlonzo.Code.Algebra.d1416 v0 v1)
                              v2)
                           (coe MAlonzo.Code.Algebra.d1416 v0 v3))))))))
name528
  = "Algebra.Properties.BooleanAlgebra.XorRing.isCommutativeRing"
d528 v0 v1 v2 v3 v4 = du528 v2 v3 v4
du528 v0 v1 v2
  = coe MAlonzo.Code.Algebra.Structures.C475
      (coe MAlonzo.Code.Algebra.Structures.C363
         (coe MAlonzo.Code.Algebra.Structures.C137
            (coe MAlonzo.Code.Algebra.Structures.C109
               (coe MAlonzo.Code.Algebra.Structures.C49
                  (coe MAlonzo.Code.Algebra.Structures.C25
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.Structures.d2862
                              (coe MAlonzo.Code.Algebra.d1422 v0))))
                     (coe d502 erased erased v0 v1 v2)
                     (coe d410 erased erased v0 v1 v2))
                  (coe du424 v0 v1 v2))
               (coe du438 v0 v1 v2)
               (\ v3 v4 -> coe MAlonzo.Code.Function.d68 erased erased))
            (coe d384 erased erased v0 v1 v2))
         (coe MAlonzo.Code.Algebra.Structures.C49
            (coe MAlonzo.Code.Algebra.Structures.C25
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.Structures.d2548
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0))))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.Structures.d2862
                        (coe MAlonzo.Code.Algebra.d1422 v0)))))
            (coe du186 v0))
         (coe du452 v0 v1 v2))
      (coe MAlonzo.Code.Algebra.Structures.d2546
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.Structures.d2862
               (coe MAlonzo.Code.Algebra.d1422 v0))))
name530
  = "Algebra.Properties.BooleanAlgebra.XorRing.commutativeRing"
d530 v0 v1 v2 v3 v4 = du530 v2 v3 v4
du530 v0 v1 v2
  = coe MAlonzo.Code.Algebra.C309 erased erased v1
      (coe MAlonzo.Code.Algebra.d1414 v0)
      (coe MAlonzo.Code.Function.d68 erased erased)
      (coe MAlonzo.Code.Algebra.d1420 v0)
      (coe MAlonzo.Code.Algebra.d1418 v0)
      (coe du528 v0 v1 v2)
name532 = "Algebra.Properties.BooleanAlgebra._\8853_"
d532 v0 v1 v2
  = coe MAlonzo.Code.Algebra.d1414 v0
      (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
      (coe MAlonzo.Code.Algebra.d1416 v0
         (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))
name544
  = "Algebra.Properties.BooleanAlgebra.DefaultXorRing.commutativeRing"
d544 v0 v1 v2 = du544 v2
du544 v0
  = coe du530 v0
      (\ v1 v2 ->
         coe MAlonzo.Code.Algebra.d1414 v0
           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
           (coe MAlonzo.Code.Algebra.d1416 v0
              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
      (\ v1 v2 ->
         coe MAlonzo.Code.Relation.Binary.Core.d516
           (coe MAlonzo.Code.Algebra.Structures.d2538
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0))))
           (coe MAlonzo.Code.Algebra.d1414 v0
              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
              (coe MAlonzo.Code.Algebra.d1416 v0
                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
name546
  = "Algebra.Properties.BooleanAlgebra.DefaultXorRing.isCommutativeRing"
d546 v0 v1 v2 = du546 v2
du546 v0
  = coe du528 v0
      (\ v1 v2 ->
         coe MAlonzo.Code.Algebra.d1414 v0
           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
           (coe MAlonzo.Code.Algebra.d1416 v0
              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
      (\ v1 v2 ->
         coe MAlonzo.Code.Relation.Binary.Core.d516
           (coe MAlonzo.Code.Algebra.Structures.d2538
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0))))
           (coe MAlonzo.Code.Algebra.d1414 v0
              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
              (coe MAlonzo.Code.Algebra.d1416 v0
                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
name548
  = "Algebra.Properties.BooleanAlgebra.DefaultXorRing.\8853-annihilates-\172"
d548 v0 v1 v2 = du548 v2
du548 v0
  = coe d404 erased erased v0
      (\ v1 v2 ->
         coe MAlonzo.Code.Algebra.d1414 v0
           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
           (coe MAlonzo.Code.Algebra.d1416 v0
              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
      (\ v1 v2 ->
         coe MAlonzo.Code.Relation.Binary.Core.d516
           (coe MAlonzo.Code.Algebra.Structures.d2538
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0))))
           (coe MAlonzo.Code.Algebra.d1414 v0
              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
              (coe MAlonzo.Code.Algebra.d1416 v0
                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
name550
  = "Algebra.Properties.BooleanAlgebra.DefaultXorRing.\8853-\172-distrib\691"
d550 v0 v1 v2 = du550 v2
du550 v0
  = coe d394 erased erased v0
      (\ v1 v2 ->
         coe MAlonzo.Code.Algebra.d1414 v0
           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
           (coe MAlonzo.Code.Algebra.d1416 v0
              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
      (\ v1 v2 ->
         coe MAlonzo.Code.Relation.Binary.Core.d516
           (coe MAlonzo.Code.Algebra.Structures.d2538
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0))))
           (coe MAlonzo.Code.Algebra.d1414 v0
              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
              (coe MAlonzo.Code.Algebra.d1416 v0
                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))
name552
  = "Algebra.Properties.BooleanAlgebra.DefaultXorRing.\8853-\172-distrib\737"
d552 v0 v1 v2 = du552 v2
du552 v0
  = coe d364 erased erased v0
      (\ v1 v2 ->
         coe MAlonzo.Code.Algebra.d1414 v0
           (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
           (coe MAlonzo.Code.Algebra.d1416 v0
              (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2)))
      (\ v1 v2 ->
         coe MAlonzo.Code.Relation.Binary.Core.d516
           (coe MAlonzo.Code.Algebra.Structures.d2538
              (coe MAlonzo.Code.Algebra.Structures.d2690
                 (coe MAlonzo.Code.Algebra.Structures.d2862
                    (coe MAlonzo.Code.Algebra.d1422 v0))))
           (coe MAlonzo.Code.Algebra.d1414 v0
              (coe MAlonzo.Code.Algebra.d1412 v0 v1 v2)
              (coe MAlonzo.Code.Algebra.d1416 v0
                 (coe MAlonzo.Code.Algebra.d1414 v0 v1 v2))))