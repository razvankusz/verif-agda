{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.Properties.Group where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
name82 = "Algebra.Properties.Group._.Identity"
d82 = erased
name112 = "Algebra.Properties.Group._._\8718"
d112 v0 v1 v2 = du112 v2
du112 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.Structures.d604
                  (coe MAlonzo.Code.Algebra.d228 v0)))))
name114 = "Algebra.Properties.Group._._\8764\10216_\10217_"
d114 v0 v1 v2 = du114 v2
du114 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.Structures.d604
                  (coe MAlonzo.Code.Algebra.d228 v0)))))
name130 = "Algebra.Properties.Group.\8315\185-involutive"
d130 v0 v1 v2 v3 = du130 v2 v3
du130 v0 v1
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0
         (coe MAlonzo.Code.Algebra.d226 v0
            (coe MAlonzo.Code.Algebra.d226 v0 v1))
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d226 v0
               (coe MAlonzo.Code.Algebra.d226 v0 v1))
            (coe MAlonzo.Code.Algebra.d224 v0))
         v1
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe MAlonzo.Code.Algebra.Structures.d128
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0))))
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1))
                  (coe MAlonzo.Code.Algebra.d224 v0))
               (coe MAlonzo.Code.Algebra.d226 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)))
            (coe MAlonzo.Code.Data.Product.d28
               (coe MAlonzo.Code.Algebra.Structures.d272
                  (coe MAlonzo.Code.Algebra.Structures.d604
                     (coe MAlonzo.Code.Algebra.d228 v0)))
               (coe MAlonzo.Code.Algebra.d226 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1))))
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d226 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1))
               (coe MAlonzo.Code.Algebra.d224 v0))
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d226 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1))
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  v1))
            v1
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d226 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)))
               (coe MAlonzo.Code.Algebra.Structures.d132
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d226 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1))
                  (coe MAlonzo.Code.Algebra.d226 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1))
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1)
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Data.Product.d26
                     (coe MAlonzo.Code.Algebra.Structures.d606
                        (coe MAlonzo.Code.Algebra.d228 v0))
                     v1)))
            (coe du114 v0
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1))
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1))
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0
                        (coe MAlonzo.Code.Algebra.d226 v0 v1))
                     (coe MAlonzo.Code.Algebra.d226 v0 v1))
                  v1)
               v1
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe MAlonzo.Code.Algebra.Structures.d128
                        (coe MAlonzo.Code.Algebra.Structures.d270
                           (coe MAlonzo.Code.Algebra.Structures.d604
                              (coe MAlonzo.Code.Algebra.d228 v0))))
                     (coe MAlonzo.Code.Algebra.d222 v0
                        (coe MAlonzo.Code.Algebra.d222 v0
                           (coe MAlonzo.Code.Algebra.d226 v0
                              (coe MAlonzo.Code.Algebra.d226 v0 v1))
                           (coe MAlonzo.Code.Algebra.d226 v0 v1))
                        v1)
                     (coe MAlonzo.Code.Algebra.d222 v0
                        (coe MAlonzo.Code.Algebra.d226 v0
                           (coe MAlonzo.Code.Algebra.d226 v0 v1))
                        (coe MAlonzo.Code.Algebra.d222 v0
                           (coe MAlonzo.Code.Algebra.d226 v0 v1)
                           v1)))
                  (coe MAlonzo.Code.Algebra.Structures.d130
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0)))
                     (coe MAlonzo.Code.Algebra.d226 v0
                        (coe MAlonzo.Code.Algebra.d226 v0 v1))
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1))
               (coe du114 v0
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d222 v0
                        (coe MAlonzo.Code.Algebra.d226 v0
                           (coe MAlonzo.Code.Algebra.d226 v0 v1))
                        (coe MAlonzo.Code.Algebra.d226 v0 v1))
                     v1)
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d224 v0)
                     v1)
                  v1
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Data.Product.d26
                        (coe MAlonzo.Code.Algebra.Structures.d606
                           (coe MAlonzo.Code.Algebra.d228 v0))
                        (coe MAlonzo.Code.Algebra.d226 v0 v1))
                     (coe MAlonzo.Code.Algebra.Structures.d132
                        (coe MAlonzo.Code.Algebra.Structures.d270
                           (coe MAlonzo.Code.Algebra.Structures.d604
                              (coe MAlonzo.Code.Algebra.d228 v0)))
                        (coe MAlonzo.Code.Algebra.d222 v0
                           (coe MAlonzo.Code.Algebra.d226 v0
                              (coe MAlonzo.Code.Algebra.d226 v0 v1))
                           (coe MAlonzo.Code.Algebra.d226 v0 v1))
                        (coe MAlonzo.Code.Algebra.d224 v0)
                        v1
                        v1)
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Algebra.Structures.d128
                           (coe MAlonzo.Code.Algebra.Structures.d270
                              (coe MAlonzo.Code.Algebra.Structures.d604
                                 (coe MAlonzo.Code.Algebra.d228 v0))))
                        v1))
                  (coe du114 v0
                     (coe MAlonzo.Code.Algebra.d222 v0
                        (coe MAlonzo.Code.Algebra.d224 v0)
                        v1)
                     v1
                     v1
                     (coe MAlonzo.Code.Data.Product.d26
                        (coe MAlonzo.Code.Algebra.Structures.d272
                           (coe MAlonzo.Code.Algebra.Structures.d604
                              (coe MAlonzo.Code.Algebra.d228 v0)))
                        v1)
                     (coe du112 v0 v1))))))
name138 = "Algebra.Properties.Group.left-helper"
d138 v0 v1 v2 v3 v4 = du138 v2 v3 v4
du138 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0 v1
         (coe MAlonzo.Code.Algebra.d222 v0 v1
            (coe MAlonzo.Code.Algebra.d224 v0))
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d226 v0 v2))
         (coe MAlonzo.Code.Relation.Binary.Core.d518
            (coe MAlonzo.Code.Algebra.Structures.d128
               (coe MAlonzo.Code.Algebra.Structures.d270
                  (coe MAlonzo.Code.Algebra.Structures.d604
                     (coe MAlonzo.Code.Algebra.d228 v0))))
            (coe MAlonzo.Code.Algebra.d222 v0 v1
               (coe MAlonzo.Code.Algebra.d224 v0))
            v1
            (coe MAlonzo.Code.Data.Product.d28
               (coe MAlonzo.Code.Algebra.Structures.d272
                  (coe MAlonzo.Code.Algebra.Structures.d604
                     (coe MAlonzo.Code.Algebra.d228 v0)))
               v1))
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d222 v0 v1
               (coe MAlonzo.Code.Algebra.d224 v0))
            (coe MAlonzo.Code.Algebra.d222 v0 v1
               (coe MAlonzo.Code.Algebra.d222 v0 v2
                  (coe MAlonzo.Code.Algebra.d226 v0 v2)))
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  v1)
               (coe MAlonzo.Code.Algebra.Structures.d132
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  v1
                  v1
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Algebra.d222 v0 v2
                     (coe MAlonzo.Code.Algebra.d226 v0 v2)))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d222 v0 v2
                     (coe MAlonzo.Code.Algebra.d226 v0 v2))
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Data.Product.d28
                     (coe MAlonzo.Code.Algebra.Structures.d606
                        (coe MAlonzo.Code.Algebra.d228 v0))
                     v2)))
            (coe du114 v0
               (coe MAlonzo.Code.Algebra.d222 v0 v1
                  (coe MAlonzo.Code.Algebra.d222 v0 v2
                     (coe MAlonzo.Code.Algebra.d226 v0 v2)))
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d226 v0 v2))
                  (coe MAlonzo.Code.Algebra.d222 v0 v1
                     (coe MAlonzo.Code.Algebra.d222 v0 v2
                        (coe MAlonzo.Code.Algebra.d226 v0 v2)))
                  (coe MAlonzo.Code.Algebra.Structures.d130
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0)))
                     v1
                     v2
                     (coe MAlonzo.Code.Algebra.d226 v0 v2)))
               (coe du112 v0
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                     (coe MAlonzo.Code.Algebra.d226 v0 v2))))))
name148 = "Algebra.Properties.Group.right-helper"
d148 v0 v1 v2 v3 v4 = du148 v2 v3 v4
du148 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0 v2
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d224 v0)
            v2)
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d226 v0 v1)
            (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))
         (coe MAlonzo.Code.Relation.Binary.Core.d518
            (coe MAlonzo.Code.Algebra.Structures.d128
               (coe MAlonzo.Code.Algebra.Structures.d270
                  (coe MAlonzo.Code.Algebra.Structures.d604
                     (coe MAlonzo.Code.Algebra.d228 v0))))
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d224 v0)
               v2)
            v2
            (coe MAlonzo.Code.Data.Product.d26
               (coe MAlonzo.Code.Algebra.Structures.d272
                  (coe MAlonzo.Code.Algebra.Structures.d604
                     (coe MAlonzo.Code.Algebra.d228 v0)))
               v2))
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d224 v0)
               v2)
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  v1)
               v2)
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d226 v0 v1)
               (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1)
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Data.Product.d26
                     (coe MAlonzo.Code.Algebra.Structures.d606
                        (coe MAlonzo.Code.Algebra.d228 v0))
                     v1))
               (coe MAlonzo.Code.Algebra.Structures.d132
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1)
                  v2
                  v2)
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  v2))
            (coe du114 v0
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     v1)
                  v2)
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))
               (coe MAlonzo.Code.Algebra.Structures.d130
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  v1
                  v2)
               (coe du112 v0
                  (coe MAlonzo.Code.Algebra.d222 v0
                     (coe MAlonzo.Code.Algebra.d226 v0 v1)
                     (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))))))
name158 = "Algebra.Properties.Group.left-identity-unique"
d158 v0 v1 v2 v3 v4 v5 = du158 v2 v3 v4 v5
du158 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0 v1
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d226 v0 v2))
         (coe MAlonzo.Code.Algebra.d224 v0)
         (coe du138 v0 v1 v2)
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            (coe MAlonzo.Code.Algebra.d222 v0 v2
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            (coe MAlonzo.Code.Algebra.d224 v0)
            (coe MAlonzo.Code.Function.du176 v3
               (coe MAlonzo.Code.Algebra.Structures.d132
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                  v2
                  (coe MAlonzo.Code.Algebra.d226 v0 v2)
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d226 v0 v2)))
            (coe du114 v0
               (coe MAlonzo.Code.Algebra.d222 v0 v2
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe MAlonzo.Code.Algebra.d224 v0)
               (coe MAlonzo.Code.Algebra.d224 v0)
               (coe MAlonzo.Code.Data.Product.d28
                  (coe MAlonzo.Code.Algebra.Structures.d606
                     (coe MAlonzo.Code.Algebra.d228 v0))
                  v2)
               (coe du112 v0 (coe MAlonzo.Code.Algebra.d224 v0)))))
name170 = "Algebra.Properties.Group.right-identity-unique"
d170 v0 v1 v2 v3 v4 v5 = du170 v2 v3 v4 v5
du170 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0 v2
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d226 v0 v1)
            (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))
         (coe MAlonzo.Code.Algebra.d224 v0)
         (coe du148 v0 v1 v2)
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d226 v0 v1)
               (coe MAlonzo.Code.Algebra.d222 v0 v1 v2))
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d226 v0 v1)
               v1)
            (coe MAlonzo.Code.Algebra.d224 v0)
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d226 v0 v1))
               (coe MAlonzo.Code.Algebra.Structures.d132
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                  v1)
               v3)
            (coe du114 v0
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d226 v0 v1)
                  v1)
               (coe MAlonzo.Code.Algebra.d224 v0)
               (coe MAlonzo.Code.Algebra.d224 v0)
               (coe MAlonzo.Code.Data.Product.d26
                  (coe MAlonzo.Code.Algebra.Structures.d606
                     (coe MAlonzo.Code.Algebra.d228 v0))
                  v1)
               (coe du112 v0 (coe MAlonzo.Code.Algebra.d224 v0)))))
name180 = "Algebra.Properties.Group.identity-unique"
d180 v0 v1 v2 v3 v4 = du180 v2 v3 v4
du180 v0 v1 v2
  = coe du158 v0 v1 v1 (coe MAlonzo.Code.Data.Product.d28 v2 v1)
name190 = "Algebra.Properties.Group.left-inverse-unique"
d190 v0 v1 v2 v3 v4 v5 = du190 v2 v3 v4 v5
du190 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0 v1
         (coe MAlonzo.Code.Algebra.d222 v0
            (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
            (coe MAlonzo.Code.Algebra.d226 v0 v2))
         (coe MAlonzo.Code.Algebra.d226 v0 v2)
         (coe du138 v0 v1 v2)
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            (coe MAlonzo.Code.Algebra.d222 v0
               (coe MAlonzo.Code.Algebra.d224 v0)
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            (coe MAlonzo.Code.Algebra.d226 v0 v2)
            (coe MAlonzo.Code.Function.du176 v3
               (coe MAlonzo.Code.Algebra.Structures.d132
                  (coe MAlonzo.Code.Algebra.Structures.d270
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d222 v0 v1 v2)
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Algebra.d226 v0 v2)
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  (coe MAlonzo.Code.Algebra.d226 v0 v2)))
            (coe du114 v0
               (coe MAlonzo.Code.Algebra.d222 v0
                  (coe MAlonzo.Code.Algebra.d224 v0)
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe MAlonzo.Code.Algebra.d226 v0 v2)
               (coe MAlonzo.Code.Algebra.d226 v0 v2)
               (coe MAlonzo.Code.Data.Product.d26
                  (coe MAlonzo.Code.Algebra.Structures.d272
                     (coe MAlonzo.Code.Algebra.Structures.d604
                        (coe MAlonzo.Code.Algebra.d228 v0)))
                  (coe MAlonzo.Code.Algebra.d226 v0 v2))
               (coe du112 v0 (coe MAlonzo.Code.Algebra.d226 v0 v2)))))
name202 = "Algebra.Properties.Group.right-inverse-unique"
d202 v0 v1 v2 v3 v4 v5 = du202 v2 v3 v4 v5
du202 v0 v1 v2 v3
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du114 v0 v2
         (coe MAlonzo.Code.Algebra.d226 v0
            (coe MAlonzo.Code.Algebra.d226 v0 v2))
         (coe MAlonzo.Code.Algebra.d226 v0 v1)
         (coe MAlonzo.Code.Relation.Binary.Core.d518
            (coe MAlonzo.Code.Algebra.Structures.d128
               (coe MAlonzo.Code.Algebra.Structures.d270
                  (coe MAlonzo.Code.Algebra.Structures.d604
                     (coe MAlonzo.Code.Algebra.d228 v0))))
            (coe MAlonzo.Code.Algebra.d226 v0
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            v2
            (coe du130 v0 v2))
         (coe du114 v0
            (coe MAlonzo.Code.Algebra.d226 v0
               (coe MAlonzo.Code.Algebra.d226 v0 v2))
            (coe MAlonzo.Code.Algebra.d226 v0 v1)
            (coe MAlonzo.Code.Algebra.d226 v0 v1)
            (coe MAlonzo.Code.Algebra.Structures.d608
               (coe MAlonzo.Code.Algebra.d228 v0)
               (coe MAlonzo.Code.Algebra.d226 v0 v2)
               v1
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe MAlonzo.Code.Algebra.Structures.d128
                     (coe MAlonzo.Code.Algebra.Structures.d270
                        (coe MAlonzo.Code.Algebra.Structures.d604
                           (coe MAlonzo.Code.Algebra.d228 v0))))
                  v1
                  (coe MAlonzo.Code.Algebra.d226 v0 v2)
                  (coe du190 v0 v1 v2 v3)))
            (coe du112 v0 (coe MAlonzo.Code.Algebra.d226 v0 v1))))