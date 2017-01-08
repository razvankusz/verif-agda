{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.Properties.DistributiveLattice where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified MAlonzo.Code.Algebra.Properties.Lattice
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Function.Equality
import qualified MAlonzo.Code.Function.Equivalence
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
name58 = "Algebra.Properties.DistributiveLattice.L.poset"
d58 v0 v1 v2 = du58 v2
du58 v0
  = coe MAlonzo.Code.Algebra.Properties.Lattice.du130
      (coe MAlonzo.Code.Algebra.C335 erased erased
         (coe MAlonzo.Code.Algebra.d1340 v0)
         (coe MAlonzo.Code.Algebra.d1342 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.d1344 v0)))
name60
  = "Algebra.Properties.DistributiveLattice.L.replace-equality"
d60 v0 v1 v2 = du60 v2
du60 v0
  = coe MAlonzo.Code.Algebra.Properties.Lattice.d166 erased erased
      (coe MAlonzo.Code.Algebra.C335 erased erased
         (coe MAlonzo.Code.Algebra.d1340 v0)
         (coe MAlonzo.Code.Algebra.d1342 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.d1344 v0)))
name62
  = "Algebra.Properties.DistributiveLattice.L.\8743-idempotent"
d62 v0 v1 v2 = du62 v2
du62 v0
  = coe MAlonzo.Code.Algebra.Properties.Lattice.d118 erased erased
      (coe MAlonzo.Code.Algebra.C335 erased erased
         (coe MAlonzo.Code.Algebra.d1340 v0)
         (coe MAlonzo.Code.Algebra.d1342 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.d1344 v0)))
name64
  = "Algebra.Properties.DistributiveLattice.L.\8743-\8744-isLattice"
d64 v0 v1 v2 = du64 v2
du64 v0
  = coe MAlonzo.Code.Algebra.Properties.Lattice.du126
      (coe MAlonzo.Code.Algebra.C335 erased erased
         (coe MAlonzo.Code.Algebra.d1340 v0)
         (coe MAlonzo.Code.Algebra.d1342 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.d1344 v0)))
name66
  = "Algebra.Properties.DistributiveLattice.L.\8743-\8744-lattice"
d66 v0 v1 v2 = du66 v2
du66 v0
  = coe MAlonzo.Code.Algebra.Properties.Lattice.du128
      (coe MAlonzo.Code.Algebra.C335 erased erased
         (coe MAlonzo.Code.Algebra.d1340 v0)
         (coe MAlonzo.Code.Algebra.d1342 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.d1344 v0)))
name68
  = "Algebra.Properties.DistributiveLattice.L.\8744-idempotent"
d68 v0 v1 v2 = du68 v2
du68 v0
  = coe MAlonzo.Code.Algebra.Properties.Lattice.d122 erased erased
      (coe MAlonzo.Code.Algebra.C335 erased erased
         (coe MAlonzo.Code.Algebra.d1340 v0)
         (coe MAlonzo.Code.Algebra.d1342 v0)
         (coe MAlonzo.Code.Algebra.Structures.d2690
            (coe MAlonzo.Code.Algebra.d1344 v0)))
name74
  = "Algebra.Properties.DistributiveLattice._._DistributesOver_"
d74 = erased
name122 = "Algebra.Properties.DistributiveLattice._._\8718"
d122 v0 v1 v2 = du122 v2
du122 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d2538
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.d1344 v0))))
name124
  = "Algebra.Properties.DistributiveLattice._._\8764\10216_\10217_"
d124 v0 v1 v2 = du124 v2
du124 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d2538
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.d1344 v0))))
name138
  = "Algebra.Properties.DistributiveLattice.\8744-\8743-distrib"
d138 v0 v1 v2 = du138 v2
du138 v0
  = coe MAlonzo.Code.Data.Product.C30 (coe d144 erased erased v0)
      (coe MAlonzo.Code.Algebra.Structures.d2692
         (coe MAlonzo.Code.Algebra.d1344 v0))
name144
  = "Algebra.Properties.DistributiveLattice._.\8744-\8743-distrib\737"
d144 v0 v1 v2 v3 v4 v5 = du144 v2 v3 v4 v5
du144 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du124 v0
         (coe MAlonzo.Code.Algebra.d1340 v0 v1
            (coe MAlonzo.Code.Algebra.d1342 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1340 v0
            (coe MAlonzo.Code.Algebra.d1342 v0 v2 v3)
            v1)
         (coe MAlonzo.Code.Algebra.d1342 v0
            (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1340 v0 v1 v3))
         (coe MAlonzo.Code.Algebra.Structures.d2540
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.d1344 v0))
            v1
            (coe MAlonzo.Code.Algebra.d1342 v0 v2 v3))
         (coe du124 v0
            (coe MAlonzo.Code.Algebra.d1340 v0
               (coe MAlonzo.Code.Algebra.d1342 v0 v2 v3)
               v1)
            (coe MAlonzo.Code.Algebra.d1342 v0
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
               (coe MAlonzo.Code.Algebra.d1340 v0 v3 v1))
            (coe MAlonzo.Code.Algebra.d1342 v0
               (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1340 v0 v1 v3))
            (coe MAlonzo.Code.Algebra.Structures.d2692
               (coe MAlonzo.Code.Algebra.d1344 v0)
               v1
               v2
               v3)
            (coe du124 v0
               (coe MAlonzo.Code.Algebra.d1342 v0
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                  (coe MAlonzo.Code.Algebra.d1340 v0 v3 v1))
               (coe MAlonzo.Code.Algebra.d1342 v0
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v3))
               (coe MAlonzo.Code.Algebra.d1342 v0
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v3))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Algebra.Structures.d2540
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     v2
                     v1)
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1340 v0 v3 v1)
                     (coe MAlonzo.Code.Algebra.d1340 v0 v1 v3))
                  (coe MAlonzo.Code.Algebra.Structures.d2540
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     v3
                     v1))
               (coe du122 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0
                     (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1340 v0 v1 v3))))))
name152
  = "Algebra.Properties.DistributiveLattice.\8743-\8744-distrib"
d152 v0 v1 v2 = du152 v2
du152 v0
  = coe MAlonzo.Code.Data.Product.C30 (coe d158 erased erased v0)
      (coe d166 erased erased v0)
name158
  = "Algebra.Properties.DistributiveLattice._.\8743-\8744-distrib\737"
d158 v0 v1 v2 v3 v4 v5 = du158 v2 v3 v4 v5
du158 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du124 v0
         (coe MAlonzo.Code.Algebra.d1342 v0 v1
            (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1342 v0
            (coe MAlonzo.Code.Algebra.d1342 v0 v1
               (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2))
            (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1340 v0
            (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
         (coe MAlonzo.Code.Function.du176
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.d1344 v0)))
               (coe MAlonzo.Code.Algebra.d1342 v0 v1
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2))
               v1
               (coe MAlonzo.Code.Data.Product.d28
                  (coe MAlonzo.Code.Algebra.Structures.d2552
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0)))
                  v1
                  v2))
            (coe MAlonzo.Code.Algebra.Structures.d2550
               (coe MAlonzo.Code.Algebra.Structures.d2690
                  (coe MAlonzo.Code.Algebra.d1344 v0))
               v1
               (coe MAlonzo.Code.Algebra.d1342 v0 v1
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
            (coe MAlonzo.Code.Relation.Binary.Core.d516
               (coe MAlonzo.Code.Algebra.Structures.d2538
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.d1344 v0)))
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)))
         (coe du124 v0
            (coe MAlonzo.Code.Algebra.d1342 v0
               (coe MAlonzo.Code.Algebra.d1342 v0 v1
                  (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
            (coe MAlonzo.Code.Algebra.d1342 v0
               (coe MAlonzo.Code.Algebra.d1342 v0 v1
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1))
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
            (coe MAlonzo.Code.Algebra.d1340 v0
               (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Relation.Binary.Core.d516
                     (coe MAlonzo.Code.Algebra.Structures.d2538
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.d1344 v0)))
                     v1)
                  (coe MAlonzo.Code.Algebra.Structures.d2550
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     v1
                     v1
                     (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1))
                  (coe MAlonzo.Code.Algebra.Structures.d2540
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     v1
                     v2))
               (coe MAlonzo.Code.Algebra.Structures.d2550
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.d1344 v0))
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1
                     (coe MAlonzo.Code.Algebra.d1340 v0 v1 v2))
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1))
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d2538
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0)))
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)))
            (coe du124 v0
               (coe MAlonzo.Code.Algebra.d1342 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1))
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
               (coe MAlonzo.Code.Algebra.d1342 v0 v1
                  (coe MAlonzo.Code.Algebra.d1342 v0
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)))
               (coe MAlonzo.Code.Algebra.d1340 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
               (coe MAlonzo.Code.Algebra.Structures.d2548
                  (coe MAlonzo.Code.Algebra.Structures.d2690
                     (coe MAlonzo.Code.Algebra.d1344 v0))
                  v1
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                  (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
               (coe du124 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1
                     (coe MAlonzo.Code.Algebra.d1342 v0
                        (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                        (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)))
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1
                     (coe MAlonzo.Code.Algebra.d1340 v0 v2
                        (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))
                  (coe MAlonzo.Code.Algebra.d1340 v0
                     (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.d1344 v0)))
                        v1)
                     (coe MAlonzo.Code.Algebra.Structures.d2550
                        (coe MAlonzo.Code.Algebra.Structures.d2690
                           (coe MAlonzo.Code.Algebra.d1344 v0))
                        v1
                        v1
                        (coe MAlonzo.Code.Algebra.d1342 v0
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
                        (coe MAlonzo.Code.Algebra.d1340 v0 v2
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe MAlonzo.Code.Algebra.Structures.d2538
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.d1344 v0)))
                        (coe MAlonzo.Code.Algebra.d1340 v0 v2
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                        (coe MAlonzo.Code.Algebra.d1342 v0
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2 v1)
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
                        (coe MAlonzo.Code.Data.Product.d26 (coe du138 v0) v2 v1 v3)))
                  (coe du124 v0
                     (coe MAlonzo.Code.Algebra.d1342 v0 v1
                        (coe MAlonzo.Code.Algebra.d1340 v0 v2
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))
                     (coe MAlonzo.Code.Algebra.d1342 v0
                        (coe MAlonzo.Code.Algebra.d1340 v0 v1
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                        (coe MAlonzo.Code.Algebra.d1340 v0 v2
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))
                     (coe MAlonzo.Code.Algebra.d1340 v0
                        (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                        (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Relation.Binary.Core.d518
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.d1344 v0)))
                           (coe MAlonzo.Code.Algebra.d1340 v0 v1
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                           v1
                           (coe MAlonzo.Code.Data.Product.d26
                              (coe MAlonzo.Code.Algebra.Structures.d2552
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.d1344 v0)))
                              v1
                              v3))
                        (coe MAlonzo.Code.Algebra.Structures.d2550
                           (coe MAlonzo.Code.Algebra.Structures.d2690
                              (coe MAlonzo.Code.Algebra.d1344 v0))
                           v1
                           (coe MAlonzo.Code.Algebra.d1340 v0 v1
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe MAlonzo.Code.Algebra.Structures.d2538
                              (coe MAlonzo.Code.Algebra.Structures.d2690
                                 (coe MAlonzo.Code.Algebra.d1344 v0)))
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))))
                     (coe du124 v0
                        (coe MAlonzo.Code.Algebra.d1342 v0
                           (coe MAlonzo.Code.Algebra.d1340 v0 v1
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                           (coe MAlonzo.Code.Algebra.d1340 v0 v2
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))
                        (coe MAlonzo.Code.Algebra.d1340 v0
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                        (coe MAlonzo.Code.Algebra.d1340 v0
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                           (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                        (coe MAlonzo.Code.Function.du158
                           (coe MAlonzo.Code.Relation.Binary.Core.d518
                              (coe MAlonzo.Code.Algebra.Structures.d2538
                                 (coe MAlonzo.Code.Algebra.Structures.d2690
                                    (coe MAlonzo.Code.Algebra.d1344 v0)))
                              (coe MAlonzo.Code.Algebra.d1340 v0
                                 (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                                 (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                              (coe MAlonzo.Code.Algebra.d1342 v0
                                 (coe MAlonzo.Code.Algebra.d1340 v0 v1
                                    (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
                                 (coe MAlonzo.Code.Algebra.d1340 v0 v2
                                    (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))))
                           (coe MAlonzo.Code.Data.Product.d28 (coe du138 v0)
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)
                              v1
                              v2))
                        (coe du122 v0
                           (coe MAlonzo.Code.Algebra.d1340 v0
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                              (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)))))))))
name166
  = "Algebra.Properties.DistributiveLattice._.\8743-\8744-distrib\691"
d166 v0 v1 v2 v3 v4 v5 = du166 v2 v3 v4 v5
du166 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du124 v0
         (coe MAlonzo.Code.Algebra.d1342 v0
            (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)
            v1)
         (coe MAlonzo.Code.Algebra.d1342 v0 v1
            (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
         (coe MAlonzo.Code.Algebra.d1340 v0
            (coe MAlonzo.Code.Algebra.d1342 v0 v2 v1)
            (coe MAlonzo.Code.Algebra.d1342 v0 v3 v1))
         (coe MAlonzo.Code.Algebra.Structures.d2546
            (coe MAlonzo.Code.Algebra.Structures.d2690
               (coe MAlonzo.Code.Algebra.d1344 v0))
            (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3)
            v1)
         (coe du124 v0
            (coe MAlonzo.Code.Algebra.d1342 v0 v1
               (coe MAlonzo.Code.Algebra.d1340 v0 v2 v3))
            (coe MAlonzo.Code.Algebra.d1340 v0
               (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
            (coe MAlonzo.Code.Algebra.d1340 v0
               (coe MAlonzo.Code.Algebra.d1342 v0 v2 v1)
               (coe MAlonzo.Code.Algebra.d1342 v0 v3 v1))
            (coe du158 v0 v1 v2 v3)
            (coe du124 v0
               (coe MAlonzo.Code.Algebra.d1340 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3))
               (coe MAlonzo.Code.Algebra.d1340 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0 v2 v1)
                  (coe MAlonzo.Code.Algebra.d1342 v0 v3 v1))
               (coe MAlonzo.Code.Algebra.d1340 v0
                  (coe MAlonzo.Code.Algebra.d1342 v0 v2 v1)
                  (coe MAlonzo.Code.Algebra.d1342 v0 v3 v1))
               (coe MAlonzo.Code.Function.du176
                  (coe MAlonzo.Code.Algebra.Structures.d2546
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     v1
                     v2)
                  (coe MAlonzo.Code.Algebra.Structures.d2544
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     (coe MAlonzo.Code.Algebra.d1342 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d1342 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1342 v0 v1 v3)
                     (coe MAlonzo.Code.Algebra.d1342 v0 v3 v1))
                  (coe MAlonzo.Code.Algebra.Structures.d2546
                     (coe MAlonzo.Code.Algebra.Structures.d2690
                        (coe MAlonzo.Code.Algebra.d1344 v0))
                     v1
                     v3))
               (coe du122 v0
                  (coe MAlonzo.Code.Algebra.d1340 v0
                     (coe MAlonzo.Code.Algebra.d1342 v0 v2 v1)
                     (coe MAlonzo.Code.Algebra.d1342 v0 v3 v1))))))
name174
  = "Algebra.Properties.DistributiveLattice.\8743-\8744-isDistributiveLattice"
d174 v0 v1 v2 = du174 v2
du174 v0
  = coe MAlonzo.Code.Algebra.Structures.C573 (coe du64 v0)
      (coe MAlonzo.Code.Data.Product.d28 (coe du152 v0))
name176
  = "Algebra.Properties.DistributiveLattice.\8743-\8744-distributiveLattice"
d176 v0 v1 v2 = du176 v2
du176 v0
  = coe MAlonzo.Code.Algebra.C355 erased erased
      (coe MAlonzo.Code.Algebra.d1342 v0)
      (coe MAlonzo.Code.Algebra.d1340 v0)
      (coe du174 v0)
name184 = "Algebra.Properties.DistributiveLattice.replace-equality"
d184 v0 v1 v2 v3 v4 = du184 v2 v3 v4
du184 v0 v1 v2
  = coe MAlonzo.Code.Algebra.C355 erased v1
      (coe MAlonzo.Code.Algebra.d1340 v0)
      (coe MAlonzo.Code.Algebra.d1342 v0)
      (coe MAlonzo.Code.Algebra.Structures.C573
         (coe MAlonzo.Code.Algebra.d1286 (coe du60 v0 v1 v2))
         (\ v3 v4 v5 ->
            coe MAlonzo.Code.Function.Equality.d38
              (coe MAlonzo.Code.Function.Equivalence.d34
                 (coe v2
                    (coe MAlonzo.Code.Algebra.d1340 v0
                       (coe MAlonzo.Code.Algebra.d1342 v0 v4 v5)
                       v3)
                    (coe MAlonzo.Code.Algebra.d1342 v0
                       (coe MAlonzo.Code.Algebra.d1340 v0 v4 v3)
                       (coe MAlonzo.Code.Algebra.d1340 v0 v5 v3))))
              (coe MAlonzo.Code.Algebra.Structures.d2692
                 (coe MAlonzo.Code.Algebra.d1344 v0)
                 v3
                 v4
                 v5)))
name202 = "Algebra.Properties.DistributiveLattice._.E.to"
d202 v0 v1 v2 v3 v4 = du202 v2 v3 v4
du202 v0 v1 v2
  = coe MAlonzo.Code.Function.Equivalence.d34 (coe v0 v1 v2)