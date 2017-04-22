{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.MonoidZ45Zsolver where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Data.Fin
import qualified MAlonzo.Code.Data.Fin.Properties
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Maybe
import qualified MAlonzo.Code.Data.Maybe.Base
import qualified MAlonzo.Code.Data.Nat.Base
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Data.Vec
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.List.Pointwise
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Relation.Binary.Reflection
import qualified MAlonzo.Code.Relation.Nullary
import qualified MAlonzo.Code.Relation.Nullary.Decidable
name50 = "Algebra.Monoid-solver._._\8718"
d50 v0 v1 v2 = du50 v2
du50 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.d100 v0))))
name52 = "Algebra.Monoid-solver._._\8764\10216_\10217_"
d52 v0 v1 v2 = du52 v2
du52 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.d100 v0))))
name54 = "Algebra.Monoid-solver._._\8776\10216_\10217_"
d54 v0 v1 v2 = du54 v2
du54 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du42
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.d100 v0))))
name68 = "Algebra.Monoid-solver.Expr"
d68 a0 a1 a2 a3 = ()

data T68 a0 a1 = C72 a0
               | C74
               | C76 a0 a1
name78 = "Algebra.Monoid-solver.Env"
d78 = erased
name84 = "Algebra.Monoid-solver.\10214_\10215"
d84 v0 v1 v2 v3 v4 v5 = du84 v2 v4 v5
du84 v0 v1 v2
  = case coe v1 of
        C72 v3 -> coe MAlonzo.Code.Data.Vec.du696 v3 v2
        C74 -> coe MAlonzo.Code.Algebra.d98 v0
        C76 v3 v4 -> coe MAlonzo.Code.Algebra.d96 v0 (coe du84 v0 v3 v2)
                       (coe du84 v0 v4 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name98 = "Algebra.Monoid-solver.Normal"
d98 = erased
name104 = "Algebra.Monoid-solver.\10214_\10215\8659"
d104 v0 v1 v2 v3 v4 v5 = du104 v2 v4 v5
du104 v0 v1 v2
  = case coe v1 of
        [] -> coe MAlonzo.Code.Algebra.d98 v0
        (:) v3 v4 -> coe MAlonzo.Code.Algebra.d96 v0
                       (coe MAlonzo.Code.Data.Vec.du696 v3 v2)
                       (coe du104 v0 v4 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name116 = "Algebra.Monoid-solver.normalise"
d116 v0 v1 v2 v3 v4 = du116 v4
du116 v0
  = case coe v0 of
        C72 v1 -> coe (:) v1 (coe [])
        C74 -> coe []
        C76 v1 v2 -> coe MAlonzo.Code.Data.List.Base.du18 (coe du116 v1)
                       (coe du116 v2)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name132 = "Algebra.Monoid-solver.homomorphic"
d132 v0 v1 v2 v3 v4 v5 v6 = du132 v2 v4 v5 v6
du132 v0 v1 v2 v3
  = case coe v1 of
        [] -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                (coe du52 v0 (coe du104 v0 v2 v3)
                   (coe MAlonzo.Code.Algebra.d96 v0 (coe MAlonzo.Code.Algebra.d98 v0)
                      (coe du104 v0 v2 v3))
                   (coe MAlonzo.Code.Algebra.d96 v0 (coe MAlonzo.Code.Algebra.d98 v0)
                      (coe du104 v0 v2 v3))
                   (coe MAlonzo.Code.Function.du158
                      (coe MAlonzo.Code.Relation.Binary.Core.d518
                         (coe MAlonzo.Code.Algebra.Structures.d128
                            (coe MAlonzo.Code.Algebra.Structures.d270
                               (coe MAlonzo.Code.Algebra.d100 v0)))
                         (coe MAlonzo.Code.Algebra.d96 v0 (coe MAlonzo.Code.Algebra.d98 v0)
                            (coe du104 v0 v2 v3))
                         (coe du104 v0 v2 v3))
                      (coe MAlonzo.Code.Data.Product.d26
                         (coe MAlonzo.Code.Algebra.Structures.d272
                            (coe MAlonzo.Code.Algebra.d100 v0))
                         (coe du104 v0 v2 v3)))
                   (coe du50 v0
                      (coe MAlonzo.Code.Algebra.d96 v0 (coe MAlonzo.Code.Algebra.d98 v0)
                         (coe du104 v0 v2 v3))))
        (:) v4 v5 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                       (coe du52 v0
                          (coe MAlonzo.Code.Algebra.d96 v0
                             (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                             (coe du104 v0 (coe MAlonzo.Code.Data.List.Base.du18 v5 v2) v3))
                          (coe MAlonzo.Code.Algebra.d96 v0
                             (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                             (coe MAlonzo.Code.Algebra.d96 v0 (coe du104 v0 v5 v3)
                                (coe du104 v0 v2 v3)))
                          (coe MAlonzo.Code.Algebra.d96 v0
                             (coe MAlonzo.Code.Algebra.d96 v0
                                (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                (coe du104 v0 v5 v3))
                             (coe du104 v0 v2 v3))
                          (coe MAlonzo.Code.Algebra.Structures.d132
                             (coe MAlonzo.Code.Algebra.Structures.d270
                                (coe MAlonzo.Code.Algebra.d100 v0))
                             (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                             (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                             (coe du104 v0 (coe MAlonzo.Code.Data.List.Base.du18 v5 v2) v3)
                             (coe MAlonzo.Code.Algebra.d96 v0 (coe du104 v0 v5 v3)
                                (coe du104 v0 v2 v3))
                             (coe MAlonzo.Code.Relation.Binary.Core.d516
                                (coe MAlonzo.Code.Algebra.Structures.d128
                                   (coe MAlonzo.Code.Algebra.Structures.d270
                                      (coe MAlonzo.Code.Algebra.d100 v0)))
                                (coe MAlonzo.Code.Data.Vec.du696 v4 v3))
                             (coe du132 v0 v5 v2 v3))
                          (coe du52 v0
                             (coe MAlonzo.Code.Algebra.d96 v0
                                (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                (coe MAlonzo.Code.Algebra.d96 v0 (coe du104 v0 v5 v3)
                                   (coe du104 v0 v2 v3)))
                             (coe MAlonzo.Code.Algebra.d96 v0
                                (coe MAlonzo.Code.Algebra.d96 v0
                                   (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                   (coe du104 v0 v5 v3))
                                (coe du104 v0 v2 v3))
                             (coe MAlonzo.Code.Algebra.d96 v0
                                (coe MAlonzo.Code.Algebra.d96 v0
                                   (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                   (coe du104 v0 v5 v3))
                                (coe du104 v0 v2 v3))
                             (coe MAlonzo.Code.Function.du158
                                (coe MAlonzo.Code.Relation.Binary.Core.d518
                                   (coe MAlonzo.Code.Algebra.Structures.d128
                                      (coe MAlonzo.Code.Algebra.Structures.d270
                                         (coe MAlonzo.Code.Algebra.d100 v0)))
                                   (coe MAlonzo.Code.Algebra.d96 v0
                                      (coe MAlonzo.Code.Algebra.d96 v0
                                         (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                         (coe du104 v0 v5 v3))
                                      (coe du104 v0 v2 v3))
                                   (coe MAlonzo.Code.Algebra.d96 v0
                                      (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                      (coe MAlonzo.Code.Algebra.d96 v0 (coe du104 v0 v5 v3)
                                         (coe du104 v0 v2 v3))))
                                (coe MAlonzo.Code.Algebra.Structures.d130
                                   (coe MAlonzo.Code.Algebra.Structures.d270
                                      (coe MAlonzo.Code.Algebra.d100 v0))
                                   (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                   (coe du104 v0 v5 v3)
                                   (coe du104 v0 v2 v3)))
                             (coe du50 v0
                                (coe MAlonzo.Code.Algebra.d96 v0
                                   (coe MAlonzo.Code.Algebra.d96 v0
                                      (coe MAlonzo.Code.Data.Vec.du696 v4 v3)
                                      (coe du104 v0 v5 v3))
                                   (coe du104 v0 v2 v3)))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name152 = "Algebra.Monoid-solver.normalise-correct"
d152 v0 v1 v2 v3 v4 v5 = du152 v2 v4 v5
du152 v0 v1 v2
  = case coe v1 of
        C72 v3 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                    (coe du52 v0
                       (coe MAlonzo.Code.Algebra.d96 v0
                          (coe MAlonzo.Code.Data.Vec.du696 v3 v2)
                          (coe MAlonzo.Code.Algebra.d98 v0))
                       (coe MAlonzo.Code.Data.Vec.du696 v3 v2)
                       (coe MAlonzo.Code.Data.Vec.du696 v3 v2)
                       (coe MAlonzo.Code.Data.Product.d28
                          (coe MAlonzo.Code.Algebra.Structures.d272
                             (coe MAlonzo.Code.Algebra.d100 v0))
                          (coe MAlonzo.Code.Data.Vec.du696 v3 v2))
                       (coe du50 v0 (coe MAlonzo.Code.Data.Vec.du696 v3 v2)))
        C74 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                 (coe du50 v0 (coe MAlonzo.Code.Algebra.d98 v0))
        C76 v3 v4 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                       (coe du52 v0
                          (coe du104 v0
                             (coe MAlonzo.Code.Data.List.Base.du18 (coe du116 v3)
                                (coe du116 v4))
                             v2)
                          (coe MAlonzo.Code.Algebra.d96 v0 (coe du104 v0 (coe du116 v3) v2)
                             (coe du104 v0 (coe du116 v4) v2))
                          (coe MAlonzo.Code.Algebra.d96 v0 (coe du84 v0 v3 v2)
                             (coe du84 v0 v4 v2))
                          (coe du132 v0 (coe du116 v3) (coe du116 v4) v2)
                          (coe du52 v0
                             (coe MAlonzo.Code.Algebra.d96 v0 (coe du104 v0 (coe du116 v3) v2)
                                (coe du104 v0 (coe du116 v4) v2))
                             (coe MAlonzo.Code.Algebra.d96 v0 (coe du84 v0 v3 v2)
                                (coe du84 v0 v4 v2))
                             (coe MAlonzo.Code.Algebra.d96 v0 (coe du84 v0 v3 v2)
                                (coe du84 v0 v4 v2))
                             (coe MAlonzo.Code.Algebra.Structures.d132
                                (coe MAlonzo.Code.Algebra.Structures.d270
                                   (coe MAlonzo.Code.Algebra.d100 v0))
                                (coe du104 v0 (coe du116 v3) v2)
                                (coe du84 v0 v3 v2)
                                (coe du104 v0 (coe du116 v4) v2)
                                (coe du84 v0 v4 v2)
                                (coe du152 v0 v3 v2)
                                (coe du152 v0 v4 v2))
                             (coe du50 v0
                                (coe MAlonzo.Code.Algebra.d96 v0 (coe du84 v0 v3 v2)
                                   (coe du84 v0 v4 v2)))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name168 = "Algebra.Monoid-solver.R._\8860_"
d168 v0 v1 v2 = du168
du168
  = coe MAlonzo.Code.Relation.Binary.Reflection.d138 erased erased
      erased
      erased
      erased
      erased
      erased
      erased
      erased
      erased
name170 = "Algebra.Monoid-solver.R.close"
d170 v0 v1 v2 = du170
du170
  = coe MAlonzo.Code.Relation.Binary.Reflection.d100 erased erased
      erased
      erased
      erased
      erased
      (\ v0 -> coe C72)
      erased
      erased
      erased
name172 = "Algebra.Monoid-solver.R.prove"
d172 v0 v1 v2 = du172 v2
du172 v0
  = coe MAlonzo.Code.Relation.Binary.Reflection.d86 erased erased
      erased
      erased
      erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.d100 v0))))
      erased
      (coe d84 erased erased v0)
      (\ v1 ->
         coe MAlonzo.Code.Function.d38 erased erased erased erased erased
           erased
           (\ v2 -> coe d104 erased erased v0 erased)
           (coe d116 erased erased erased erased))
      (coe d152 erased erased v0)
name174 = "Algebra.Monoid-solver.R.solve"
d174 v0 v1 v2 = du174 v2
du174 v0
  = coe MAlonzo.Code.Relation.Binary.Reflection.d110 erased erased
      erased
      erased
      erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.d100 v0))))
      (\ v1 -> coe C72)
      (coe d84 erased erased v0)
      (\ v1 ->
         coe MAlonzo.Code.Function.d38 erased erased erased erased erased
           erased
           (\ v2 -> coe d104 erased erased v0 erased)
           (coe d116 erased erased erased erased))
      (coe d152 erased erased v0)
name176 = "Algebra.Monoid-solver.R.solve\8321"
d176 v0 v1 v2 = du176 v2
du176 v0
  = coe MAlonzo.Code.Relation.Binary.Reflection.d126 erased erased
      erased
      erased
      erased
      (coe MAlonzo.Code.Relation.Binary.C85 erased erased
         (coe MAlonzo.Code.Algebra.Structures.d128
            (coe MAlonzo.Code.Algebra.Structures.d270
               (coe MAlonzo.Code.Algebra.d100 v0))))
      (\ v1 -> coe C72)
      (coe d84 erased erased v0)
      (\ v1 ->
         coe MAlonzo.Code.Function.d38 erased erased erased erased erased
           erased
           (\ v2 -> coe d104 erased erased v0 erased)
           (coe d116 erased erased erased erased))
      (coe d152 erased erased v0)
name184 = "Algebra.Monoid-solver._\8799_"
d184 v0 v1 v2 v3 = du184 v2 v3
du184 v0 v1
  = coe MAlonzo.Code.Relation.Nullary.Decidable.du98 erased erased
      erased
      (coe MAlonzo.Code.Relation.Binary.List.Pointwise.d674 erased erased
         v0
         erased)
      (coe MAlonzo.Code.Relation.Binary.List.Pointwise.du390
         MAlonzo.Code.Data.Fin.Properties.du86
         v0
         v1)
name202 = "Algebra.Monoid-solver.prove\8242"
d202 v0 v1 v2 v3 v4 v5 = du202 v2 v3 v4 v5
du202 v0 v1 v2 v3
  = coe MAlonzo.Code.Function.du158
      (coe MAlonzo.Code.Data.Maybe.Base.du106
         (coe d214 erased erased v0 v1 v2 v3))
      (coe MAlonzo.Code.Data.Maybe.Base.du40
         (coe MAlonzo.Code.Relation.Nullary.Decidable.du98 erased erased
            erased
            (coe MAlonzo.Code.Relation.Binary.List.Pointwise.d674 erased erased
               (coe du116 v2)
               erased)
            (coe MAlonzo.Code.Relation.Binary.List.Pointwise.du390
               MAlonzo.Code.Data.Fin.Properties.du86
               (coe du116 v2)
               (coe du116 v3))))
name214 = "Algebra.Monoid-solver._.lemma"
d214 v0 v1 v2 v3 v4 v5 v6 v7 = du214 v2 v3 v4 v5 v7
du214 v0 v1 v2 v3 v4
  = coe du172 v0 v1 v4 v2 v3
      (coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
         (coe du54 v0 (coe du104 v0 (coe du116 v2) v4)
            (coe du104 v0 (coe du116 v3) v4)
            (coe du104 v0 (coe du116 v3) v4)
            erased
            (coe du50 v0 (coe du104 v0 (coe du116 v3) v4))))
name228 = "Algebra.Monoid-solver.prove"
d228 v0 v1 v2 v3 = du228 v2 v3
du228 v0 v1
  = coe MAlonzo.Code.Function.d38 erased erased erased erased erased
      erased
      (\ v2 -> MAlonzo.Code.Data.Maybe.Base.d94)
      (coe MAlonzo.Code.Data.Product.d340 erased erased erased erased
         erased
         erased
         (coe d202 erased erased v0 v1))