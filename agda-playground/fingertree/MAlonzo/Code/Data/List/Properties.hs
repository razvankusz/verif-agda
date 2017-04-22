{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Data.List.Properties where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified MAlonzo.Code.Algebra.MonoidZ45Zsolver
import qualified MAlonzo.Code.Algebra.Structures
import qualified MAlonzo.Code.Category.Monad
import qualified MAlonzo.Code.Category.Monad.Indexed
import qualified MAlonzo.Code.Data.Bool.Base
import qualified MAlonzo.Code.Data.Fin.Properties
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.List.All
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Maybe.Base
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Nat.Base
import qualified MAlonzo.Code.Data.Nat.Properties
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.List.Pointwise
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Relation.Nullary
import qualified MAlonzo.Code.Relation.Nullary.Decidable
import qualified MAlonzo.Code.Relation.Unary
name76 = "Data.List.Properties.LMP._>>=_"
d76 v0 = du76
du76
  = coe MAlonzo.Code.Category.Monad.Indexed.d58
      (coe MAlonzo.Code.Category.Monad.Indexed.d204
         (coe MAlonzo.Code.Category.Monad.Indexed.d278
            MAlonzo.Code.Data.List.du100))
name78 = "Data.List.Properties.LMP._\8739_"
d78 v0 = du78
du78
  = coe MAlonzo.Code.Category.Monad.Indexed.d286
      MAlonzo.Code.Data.List.du100
name82 = "Data.List.Properties.LMP._\8859_"
d82 v0 = du82
du82
  = coe MAlonzo.Code.Category.Monad.du156
      MAlonzo.Code.Data.List.du100
name98 = "Data.List.Properties.LMP.return"
d98 v0 = du98
du98
  = coe MAlonzo.Code.Category.Monad.Indexed.d46
      (coe MAlonzo.Code.Category.Monad.Indexed.d204
         (coe MAlonzo.Code.Category.Monad.Indexed.d278
            MAlonzo.Code.Data.List.du100))
name102 = "Data.List.Properties.LMP.\8709"
d102 v0 = du102
du102
  = coe MAlonzo.Code.Category.Monad.Indexed.d212
      (coe MAlonzo.Code.Category.Monad.Indexed.d278
         MAlonzo.Code.Data.List.du100)
name116 = "Data.List.Properties.LM.assoc"
d116 = erased
name118 = "Data.List.Properties.LM.identity"
d118 v0 v1 = du118
du118
  = coe MAlonzo.Code.Algebra.Structures.d272
      (coe MAlonzo.Code.Algebra.d100 MAlonzo.Code.Data.List.du6)
name150 = "Data.List.Properties.List-solver._\8799_"
d150 v0 v1 v2 v3 v4 = du150 v3 v4
du150 v0 v1
  = coe MAlonzo.Code.Relation.Nullary.Decidable.du98 erased erased
      erased
      (coe MAlonzo.Code.Relation.Binary.List.Pointwise.d674 erased erased
         v0
         erased)
      (coe MAlonzo.Code.Relation.Binary.List.Pointwise.du390
         MAlonzo.Code.Data.Fin.Properties.du86
         v0
         v1)
name154 = "Data.List.Properties.List-solver._\8860_"
d154 v0 v1 = du154
du154 = MAlonzo.Code.Algebra.MonoidZ45Zsolver.du168
name156 = "Data.List.Properties.List-solver.Env"
d156 = erased
name158 = "Data.List.Properties.List-solver.Expr"
d158 a0 a1 a2 = ()
name160 = "Data.List.Properties.List-solver.Normal"
d160 = erased
name162 = "Data.List.Properties.List-solver.homomorphic"
d162 = erased
name166 = "Data.List.Properties.List-solver.normalise"
d166 v0 v1 = du166
du166
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.d116 erased erased
      erased
name168 = "Data.List.Properties.List-solver.normalise-correct"
d168 = erased
name170 = "Data.List.Properties.List-solver.prove"
d170 v0 v1 = du170
du170
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.d228 erased erased
      MAlonzo.Code.Data.List.du6
name172 = "Data.List.Properties.List-solver.prove\8242"
d172 v0 v1 = du172
du172
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.d202 erased erased
      MAlonzo.Code.Data.List.du6
name174 = "Data.List.Properties.List-solver.solve"
d174 v0 v1 = du174
du174
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.du174
      MAlonzo.Code.Data.List.du6
name178 = "Data.List.Properties.List-solver.\10214_\10215"
d178 v0 v1 = du178
du178
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.d84 erased erased
      MAlonzo.Code.Data.List.du6
name180 = "Data.List.Properties.List-solver.\10214_\10215\8659"
d180 v0 v1 = du180
du180
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.d104 erased erased
      MAlonzo.Code.Data.List.du6
name192 = "Data.List.Properties.List-solver.R._\8860_"
d192 v0 v1 = du192
du192 = MAlonzo.Code.Algebra.MonoidZ45Zsolver.du168
name194 = "Data.List.Properties.List-solver.R.close"
d194 v0 v1 = du194
du194 = MAlonzo.Code.Algebra.MonoidZ45Zsolver.du170
name196 = "Data.List.Properties.List-solver.R.prove"
d196 = erased
name198 = "Data.List.Properties.List-solver.R.solve"
d198 v0 v1 = du198
du198
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.du174
      MAlonzo.Code.Data.List.du6
name200 = "Data.List.Properties.List-solver.R.solve\8321"
d200 v0 v1 = du200
du200
  = coe MAlonzo.Code.Algebra.MonoidZ45Zsolver.du176
      MAlonzo.Code.Data.List.du6
name214 = "Data.List.Properties.\8759-injective"
d214 v0 v1 v2 v3 v4 v5 v6 = du214
du214 = coe MAlonzo.Code.Data.Product.C30 erased erased
name228 = "Data.List.Properties.\8759\691-injective"
d228 v0 v1 v2 v3 v4 v5 v6 = du228 v4 v5
du228 v0 v1
  = case coe v0 of
        [] -> coe seq v1 (coe MAlonzo.Code.Data.Product.C30 erased erased)
        (:) v2 v3 -> case coe v1 of
                         (:) v4 v5 -> let v6 = coe du214 in
                                        case coe v6 of
                                            MAlonzo.Code.Data.Product.C30 v7 v8 -> coe
                                                                                     MAlonzo.Code.Function.du158
                                                                                     (coe
                                                                                        MAlonzo.Code.Data.Product.d188
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        (\ v9 ->
                                                                                           coe
                                                                                             MAlonzo.Code.Function.d68
                                                                                             erased
                                                                                             erased))
                                                                                     (coe du228 v3
                                                                                        v5)
                                            _ -> coe MAlonzo.RTE.mazUnreachableError
                         _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name262 = "Data.List.Properties.right-identity-unique"
d262 = erased
name278 = "Data.List.Properties.left-identity-unique"
d278 = erased
name332 = "Data.List.Properties.map-++-commute"
d332 = erased
name350 = "Data.List.Properties.sum-++-commute"
d350 = erased
name392 = "Data.List.Properties._._.assoc"
d392 = erased
name480 = "Data.List.Properties.foldr-universal"
d480 = erased
name534 = "Data.List.Properties.foldr-fusion"
d534 = erased
name554 = "Data.List.Properties.idIsFold"
d554 = erased
name568 = "Data.List.Properties.++IsFold"
d568 = erased
name600 = "Data.List.Properties.mapIsFold"
d600 = erased
name612 = "Data.List.Properties._._._\8718"
d612 v0 v1 v2 v3 v4 = du612
du612
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name614 = "Data.List.Properties._._._\8764\10216_\10217_"
d614 v0 v1 v2 v3 v4 = du614
du614
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name646 = "Data.List.Properties.concat-map"
d646 = erased
name660 = "Data.List.Properties._._._\8718"
d660 v0 v1 v2 v3 v4 = du660
du660
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name662 = "Data.List.Properties._._._\8764\10216_\10217_"
d662 v0 v1 v2 v3 v4 = du662
du662
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name696 = "Data.List.Properties.map-id"
d696 = erased
name708 = "Data.List.Properties._._._\8718"
d708 v0 v1 = du708
du708
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name710 = "Data.List.Properties._._._\8764\10216_\10217_"
d710 v0 v1 = du710
du710
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name740 = "Data.List.Properties.map-compose"
d740 = erased
name758 = "Data.List.Properties._._._\8718"
d758 v0 v1 v2 v3 v4 v5 v6 v7 = du758
du758
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name760 = "Data.List.Properties._._._\8764\10216_\10217_"
d760 v0 v1 v2 v3 v4 v5 v6 v7 = du760
du760
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name810 = "Data.List.Properties.foldr-cong"
d810 = erased
name828 = "Data.List.Properties._._._\8718"
d828 v0 v1 v2 v3 v4 v5 v6 v7 = du828 v1
du828 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144 v0)
name830 = "Data.List.Properties._._._\8764\10216_\10217_"
d830 v0 v1 v2 v3 v4 v5 v6 v7 = du830 v1
du830 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144 v0)
name860 = "Data.List.Properties.map-cong"
d860 = erased
name880 = "Data.List.Properties._._._\8718"
d880 v0 v1 v2 v3 v4 v5 v6 = du880
du880
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name882 = "Data.List.Properties._._._\8764\10216_\10217_"
d882 v0 v1 v2 v3 v4 v5 v6 = du882
du882
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du144
         erased)
name916 = "Data.List.Properties.take++drop"
d916 = erased
name936 = "Data.List.Properties.splitAt-defn"
d936 = erased
name972 = "Data.List.Properties.takeWhile++dropWhile"
d972 = erased
name1004 = "Data.List.Properties.span-defn"
d1004 = erased
name1036 = "Data.List.Properties.partition-defn"
d1036 = erased
name1086 = "Data.List.Properties.filter-filters"
d1086 v0 v1 v2 v3 v4 v5 = du1086 v4 v5
du1086 v0 v1
  = case coe v1 of
        [] -> coe MAlonzo.Code.Data.List.All.C24
        (:) v2 v3 -> let v4 = coe v0 v2 in
                       case coe v4 of
                           MAlonzo.Code.Relation.Nullary.C22 v5 -> coe
                                                                     MAlonzo.Code.Data.List.All.C34
                                                                     v2
                                                                     (coe
                                                                        MAlonzo.Code.Data.List.Base.du652
                                                                        (coe
                                                                           MAlonzo.Code.Function.d38
                                                                           erased
                                                                           erased
                                                                           erased
                                                                           erased
                                                                           erased
                                                                           erased
                                                                           (\ v6 ->
                                                                              coe
                                                                                MAlonzo.Code.Relation.Nullary.Decidable.d10
                                                                                erased
                                                                                erased)
                                                                           v0)
                                                                        v3)
                                                                     v5
                                                                     (coe du1086 v0 v3)
                           MAlonzo.Code.Relation.Nullary.C26 v5 -> coe du1086 v0 v3
                           _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1130 = "Data.List.Properties.gfilter-just"
d1130 = erased
name1144 = "Data.List.Properties.gfilter-nothing"
d1144 = erased
name1160 = "Data.List.Properties.gfilter-concatMap"
d1160 = erased
name1200 = "Data.List.Properties.scanr-defn"
d1200 = erased
name1290 = "Data.List.Properties.scanl-defn"
d1290 = erased
name1320 = "Data.List.Properties.length-map"
d1320 = erased
name1338 = "Data.List.Properties.length-++"
d1338 = erased
name1352 = "Data.List.Properties.length-replicate"
d1352 = erased
name1368 = "Data.List.Properties.length-gfilter"
d1368 v0 v1 v2 v3 v4 v5 = du1368 v4 v5
du1368 v0 v1
  = case coe v1 of
        [] -> coe MAlonzo.Code.Data.Nat.Base.C10
                (coe MAlonzo.Code.Data.List.Base.du226 (coe []))
        (:) v2 v3 -> let v4 = coe v0 v2 in
                       case coe v4 of
                           Just v5 -> coe MAlonzo.Code.Data.Nat.Base.C18
                                        (coe MAlonzo.Code.Data.List.Base.du226
                                           (coe MAlonzo.Code.Data.List.Base.du620 v0 v3))
                                        (coe MAlonzo.Code.Data.List.Base.du226 v3)
                                        (coe du1368 v0 v3)
                           Nothing -> coe MAlonzo.Code.Data.Nat.Properties.du450
                                        (coe MAlonzo.Code.Data.List.Base.du226 v3)
                                        (coe du1368 v0 v3)
                           _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1404 = "Data.List.Properties.length-filter"
d1404 v0 v1 v2 v3 = du1404 v2 v3
du1404 v0 v1
  = coe du1368
      (\ v2 ->
         coe MAlonzo.Code.Data.Bool.Base.du14 (coe v0 v2) (coe Just v2)
           (coe Nothing))
      v1
name1420 = "Data.List.Properties.unfold-reverse"
d1420 = erased
name1438 = "Data.List.Properties._.helper"
d1438 = erased
name1458 = "Data.List.Properties.reverse-++-commute"
d1458 = erased
name1494 = "Data.List.Properties.reverse-map-commute"
d1494 = erased
name1514 = "Data.List.Properties.reverse-involutive"
d1514 = erased
name1536 = "Data.List.Properties.Monad.left-zero"
d1536 = erased
name1548 = "Data.List.Properties.Monad.right-zero"
d1548 = erased
name1576 = "Data.List.Properties.Monad.right-distributive"
d1576 = erased
name1604 = "Data.List.Properties.Monad.left-identity"
d1604 = erased
name1618 = "Data.List.Properties.Monad.right-identity"
d1618 = erased
name1640 = "Data.List.Properties.Monad.associative"
d1640 = erased
name1674 = "Data.List.Properties.Monad.cong"
d1674 = erased
name1688 = "Data.List.Properties.Applicative.pam"
d1688 v0 v1 v2 v3 v4 = du1688 v1 v2 v3 v4
du1688 v0 v1 v2 v3
  = coe du76 erased erased erased v0 v1 v2
      (coe MAlonzo.Code.Function.d38 erased erased erased erased erased
         erased
         (\ v4 -> coe du98 erased v1)
         v3)
name1702 = "Data.List.Properties.Applicative.left-zero"
d1702 = erased
name1714 = "Data.List.Properties.Applicative.right-zero"
d1714 = erased
name1736 = "Data.List.Properties.Applicative.right-distributive"
d1736 = erased
name1758 = "Data.List.Properties.Applicative.identity"
d1758 = erased
name1778 = "Data.List.Properties.Applicative.pam-lemma"
d1778 = erased
name1806 = "Data.List.Properties.Applicative.composition"
d1806 = erased
name1854 = "Data.List.Properties.Applicative.homomorphism"
d1854 = erased
name1872 = "Data.List.Properties.Applicative.interchange"
d1872 = erased