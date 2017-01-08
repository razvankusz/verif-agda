{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.Structures where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
name14 = "Algebra.Structures.IsSemigroup"
d14 a0 a1 a2 a3 a4 = ()

data T14 a0 a1 a2 = C25 a0 a1 a2
name40 = "Algebra.Structures._.Associative"
d40 = erased
name128 = "Algebra.Structures.IsSemigroup.isEquivalence"
d128 v0
  = case coe v0 of
        C25 v1 v2 v3 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name130 = "Algebra.Structures.IsSemigroup.assoc"
d130 v0
  = case coe v0 of
        C25 v1 v2 v3 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name132 = "Algebra.Structures.IsSemigroup.\8729-cong"
d132 v0
  = case coe v0 of
        C25 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name136 = "Algebra.Structures.IsSemigroup._.refl"
d136 v0 = coe MAlonzo.Code.Relation.Binary.Core.d516 (coe d128 v0)
name138 = "Algebra.Structures.IsSemigroup._.reflexive"
d138 v0 v1 v2 v3 v4 v5 = du138 v5
du138 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d522 erased erased erased
      erased
      (coe d128 v0)
name140 = "Algebra.Structures.IsSemigroup._.sym"
d140 v0 = coe MAlonzo.Code.Relation.Binary.Core.d518 (coe d128 v0)
name142 = "Algebra.Structures.IsSemigroup._.trans"
d142 v0 = coe MAlonzo.Code.Relation.Binary.Core.d520 (coe d128 v0)
name156 = "Algebra.Structures.IsMonoid"
d156 a0 a1 a2 a3 a4 a5 = ()

data T156 a0 a1 = C49 a0 a1
name192 = "Algebra.Structures._.Identity"
d192 = erased
name270 = "Algebra.Structures.IsMonoid.isSemigroup"
d270 v0
  = case coe v0 of
        C49 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name272 = "Algebra.Structures.IsMonoid.identity"
d272 v0
  = case coe v0 of
        C49 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name276 = "Algebra.Structures.IsMonoid._.assoc"
d276 v0 = coe d130 (coe d270 v0)
name278 = "Algebra.Structures.IsMonoid._.isEquivalence"
d278 v0 = coe d128 (coe d270 v0)
name280 = "Algebra.Structures.IsMonoid._.refl"
d280 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d270 v0))
name282 = "Algebra.Structures.IsMonoid._.reflexive"
d282 v0 v1 v2 v3 v4 v5 v6 = du282 v6
du282 v0 = coe du138 (coe d270 v0)
name284 = "Algebra.Structures.IsMonoid._.sym"
d284 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d270 v0))
name286 = "Algebra.Structures.IsMonoid._.trans"
d286 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d270 v0))
name288 = "Algebra.Structures.IsMonoid._.\8729-cong"
d288 v0 = coe d132 (coe d270 v0)
name302 = "Algebra.Structures.IsCommutativeMonoid"
d302 a0 a1 a2 a3 a4 a5 = ()

data T302 a0 a1 a2 = C71 a0 a1 a2
name332 = "Algebra.Structures._.Commutative"
d332 = erased
name344 = "Algebra.Structures._.LeftIdentity"
d344 = erased
name392 = "Algebra.Structures.IsCommutativeMonoid._.Identity"
d392 = erased
name404 = "Algebra.Structures.IsCommutativeMonoid._.RightIdentity"
d404 = erased
name418 = "Algebra.Structures.IsCommutativeMonoid.isSemigroup"
d418 v0
  = case coe v0 of
        C71 v1 v2 v3 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name420 = "Algebra.Structures.IsCommutativeMonoid.identity\737"
d420 v0
  = case coe v0 of
        C71 v1 v2 v3 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name422 = "Algebra.Structures.IsCommutativeMonoid.comm"
d422 v0
  = case coe v0 of
        C71 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name426 = "Algebra.Structures.IsCommutativeMonoid._.assoc"
d426 v0 = coe d130 (coe d418 v0)
name428 = "Algebra.Structures.IsCommutativeMonoid._.isEquivalence"
d428 v0 = coe d128 (coe d418 v0)
name430 = "Algebra.Structures.IsCommutativeMonoid._.refl"
d430 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d418 v0))
name432 = "Algebra.Structures.IsCommutativeMonoid._.reflexive"
d432 v0 v1 v2 v3 v4 v5 v6 = du432 v6
du432 v0 = coe du138 (coe d418 v0)
name434 = "Algebra.Structures.IsCommutativeMonoid._.sym"
d434 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d418 v0))
name436 = "Algebra.Structures.IsCommutativeMonoid._.trans"
d436 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d418 v0))
name438 = "Algebra.Structures.IsCommutativeMonoid._.\8729-cong"
d438 v0 = coe d132 (coe d418 v0)
name440 = "Algebra.Structures.IsCommutativeMonoid.identity"
d440 v0 v1 v2 v3 v4 v5 v6 = du440 v2 v3 v4 v5 v6
du440 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Data.Product.C30 (coe d420 v4)
      (coe d466 erased erased v0 v1 v2 v3 v4)
name450 = "Algebra.Structures.IsCommutativeMonoid._._._\8718"
d450 v0 v1 v2 v3 v4 v5 v6 = du450 v2 v3 v6
du450 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 v0 v1
         (coe d128 (coe d418 v2)))
name452
  = "Algebra.Structures.IsCommutativeMonoid._._._\8764\10216_\10217_"
d452 v0 v1 v2 v3 v4 v5 v6 = du452 v2 v3 v6
du452 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 v0 v1
         (coe d128 (coe d418 v2)))
name466 = "Algebra.Structures.IsCommutativeMonoid._.identity\691"
d466 v0 v1 v2 v3 v4 v5 v6 v7 = du466 v2 v3 v4 v5 v6 v7
du466 v0 v1 v2 v3 v4 v5
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du452 v0 v1 v4 (coe v2 v5 v3) (coe v2 v3 v5) v5
         (coe d422 v4 v5 v3)
         (coe du452 v0 v1 v4 (coe v2 v3 v5) v5 v5 (coe d420 v4 v5)
            (coe du450 v0 v1 v4 v5)))
name470 = "Algebra.Structures.IsCommutativeMonoid.isMonoid"
d470 v0 v1 v2 v3 v4 v5 v6 = du470 v2 v3 v4 v5 v6
du470 v0 v1 v2 v3 v4
  = coe C49 (coe d418 v4) (coe du440 v0 v1 v2 v3 v4)
name486 = "Algebra.Structures.IsGroup"
d486 a0 a1 a2 a3 a4 a5 a6 = ()

data T486 a0 a1 a2 = C109 a0 a1 a2
name526 = "Algebra.Structures._.Inverse"
d526 = erased
name604 = "Algebra.Structures.IsGroup.isMonoid"
d604 v0
  = case coe v0 of
        C109 v1 v2 v3 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name606 = "Algebra.Structures.IsGroup.inverse"
d606 v0
  = case coe v0 of
        C109 v1 v2 v3 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name608 = "Algebra.Structures.IsGroup.\8315\185-cong"
d608 v0
  = case coe v0 of
        C109 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name612 = "Algebra.Structures.IsGroup._.assoc"
d612 v0 = coe d130 (coe d270 (coe d604 v0))
name614 = "Algebra.Structures.IsGroup._.identity"
d614 v0 = coe d272 (coe d604 v0)
name616 = "Algebra.Structures.IsGroup._.isEquivalence"
d616 v0 = coe d128 (coe d270 (coe d604 v0))
name618 = "Algebra.Structures.IsGroup._.isSemigroup"
d618 v0 = coe d270 (coe d604 v0)
name620 = "Algebra.Structures.IsGroup._.refl"
d620 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d270 (coe d604 v0)))
name622 = "Algebra.Structures.IsGroup._.reflexive"
d622 v0 v1 v2 v3 v4 v5 v6 v7 = du622 v7
du622 v0 = coe du282 (coe d604 v0)
name624 = "Algebra.Structures.IsGroup._.sym"
d624 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d270 (coe d604 v0)))
name626 = "Algebra.Structures.IsGroup._.trans"
d626 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d270 (coe d604 v0)))
name628 = "Algebra.Structures.IsGroup._.\8729-cong"
d628 v0 = coe d132 (coe d270 (coe d604 v0))
name630 = "Algebra.Structures.IsGroup._-_"
d630 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du630 v4 v6 v8 v9
du630 v0 v1 v2 v3 = coe v0 v2 (coe v1 v3)
name650 = "Algebra.Structures.IsAbelianGroup"
d650 a0 a1 a2 a3 a4 a5 a6 = ()

data T650 a0 a1 = C137 a0 a1
name682 = "Algebra.Structures._.Commutative"
d682 = erased
name766 = "Algebra.Structures.IsAbelianGroup.isGroup"
d766 v0
  = case coe v0 of
        C137 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name768 = "Algebra.Structures.IsAbelianGroup.comm"
d768 v0
  = case coe v0 of
        C137 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name772 = "Algebra.Structures.IsAbelianGroup._._-_"
d772 v0 v1 v2 v3 v4 v5 v6 v7 = du772 v4 v6
du772 v0 v1
  = coe d630 erased erased erased erased v0 erased v1 erased
name774 = "Algebra.Structures.IsAbelianGroup._.assoc"
d774 v0 = coe d130 (coe d270 (coe d604 (coe d766 v0)))
name776 = "Algebra.Structures.IsAbelianGroup._.identity"
d776 v0 = coe d272 (coe d604 (coe d766 v0))
name778 = "Algebra.Structures.IsAbelianGroup._.inverse"
d778 v0 = coe d606 (coe d766 v0)
name780 = "Algebra.Structures.IsAbelianGroup._.isEquivalence"
d780 v0 = coe d128 (coe d270 (coe d604 (coe d766 v0)))
name782 = "Algebra.Structures.IsAbelianGroup._.isMonoid"
d782 v0 = coe d604 (coe d766 v0)
name784 = "Algebra.Structures.IsAbelianGroup._.isSemigroup"
d784 v0 = coe d270 (coe d604 (coe d766 v0))
name786 = "Algebra.Structures.IsAbelianGroup._.refl"
d786 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d270 (coe d604 (coe d766 v0))))
name788 = "Algebra.Structures.IsAbelianGroup._.reflexive"
d788 v0 v1 v2 v3 v4 v5 v6 v7 = du788 v7
du788 v0 = coe du622 (coe d766 v0)
name790 = "Algebra.Structures.IsAbelianGroup._.sym"
d790 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d270 (coe d604 (coe d766 v0))))
name792 = "Algebra.Structures.IsAbelianGroup._.trans"
d792 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d270 (coe d604 (coe d766 v0))))
name794 = "Algebra.Structures.IsAbelianGroup._.\8315\185-cong"
d794 v0 = coe d608 (coe d766 v0)
name796 = "Algebra.Structures.IsAbelianGroup._.\8729-cong"
d796 v0 = coe d132 (coe d270 (coe d604 (coe d766 v0)))
name798 = "Algebra.Structures.IsAbelianGroup.isCommutativeMonoid"
d798 v0
  = coe C71 (coe d270 (coe d604 (coe d766 v0)))
      (coe MAlonzo.Code.Data.Product.d26
         (coe d272 (coe d604 (coe d766 v0))))
      (coe d768 v0)
name814 = "Algebra.Structures.IsNearSemiring"
d814 a0 a1 a2 a3 a4 a5 a6 = ()

data T814 a0 a1 a2 a3 = C169 a0 a1 a2 a3
name836 = "Algebra.Structures._._DistributesOver\691_"
d836 = erased
name862 = "Algebra.Structures._.LeftZero"
d862 = erased
name934 = "Algebra.Structures.IsNearSemiring.+-isMonoid"
d934 v0
  = case coe v0 of
        C169 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name936 = "Algebra.Structures.IsNearSemiring.*-isSemigroup"
d936 v0
  = case coe v0 of
        C169 v1 v2 v3 v4 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name938 = "Algebra.Structures.IsNearSemiring.distrib\691"
d938 v0
  = case coe v0 of
        C169 v1 v2 v3 v4 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name940 = "Algebra.Structures.IsNearSemiring.zero\737"
d940 v0
  = case coe v0 of
        C169 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name944 = "Algebra.Structures.IsNearSemiring._.assoc"
d944 v0 = coe d130 (coe d270 (coe d934 v0))
name946 = "Algebra.Structures.IsNearSemiring._.\8729-cong"
d946 v0 = coe d132 (coe d270 (coe d934 v0))
name948 = "Algebra.Structures.IsNearSemiring._.identity"
d948 v0 = coe d272 (coe d934 v0)
name950 = "Algebra.Structures.IsNearSemiring._.isSemigroup"
d950 v0 = coe d270 (coe d934 v0)
name952 = "Algebra.Structures.IsNearSemiring._.isEquivalence"
d952 v0 = coe d128 (coe d270 (coe d934 v0))
name954 = "Algebra.Structures.IsNearSemiring._.refl"
d954 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d270 (coe d934 v0)))
name956 = "Algebra.Structures.IsNearSemiring._.reflexive"
d956 v0 v1 v2 v3 v4 v5 v6 v7 = du956 v7
du956 v0 = coe du282 (coe d934 v0)
name958 = "Algebra.Structures.IsNearSemiring._.sym"
d958 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d270 (coe d934 v0)))
name960 = "Algebra.Structures.IsNearSemiring._.trans"
d960 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d270 (coe d934 v0)))
name964 = "Algebra.Structures.IsNearSemiring._.assoc"
d964 v0 = coe d130 (coe d936 v0)
name966 = "Algebra.Structures.IsNearSemiring._.\8729-cong"
d966 v0 = coe d132 (coe d936 v0)
name982 = "Algebra.Structures.IsSemiringWithoutOne"
d982 a0 a1 a2 a3 a4 a5 a6 = ()

data T982 a0 a1 a2 a3 = C199 a0 a1 a2 a3
name1002 = "Algebra.Structures._._DistributesOver_"
d1002 = erased
name1040 = "Algebra.Structures._.Zero"
d1040 = erased
name1102
  = "Algebra.Structures.IsSemiringWithoutOne.+-isCommutativeMonoid"
d1102 v0
  = case coe v0 of
        C199 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1104 = "Algebra.Structures.IsSemiringWithoutOne.*-isSemigroup"
d1104 v0
  = case coe v0 of
        C199 v1 v2 v3 v4 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1106 = "Algebra.Structures.IsSemiringWithoutOne.distrib"
d1106 v0
  = case coe v0 of
        C199 v1 v2 v3 v4 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1108 = "Algebra.Structures.IsSemiringWithoutOne.zero"
d1108 v0
  = case coe v0 of
        C199 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1112 = "Algebra.Structures.IsSemiringWithoutOne._.assoc"
d1112 v0 = coe d130 (coe d418 (coe d1102 v0))
name1114 = "Algebra.Structures.IsSemiringWithoutOne._.comm"
d1114 v0 = coe d422 (coe d1102 v0)
name1116 = "Algebra.Structures.IsSemiringWithoutOne._.\8729-cong"
d1116 v0 = coe d132 (coe d418 (coe d1102 v0))
name1118 = "Algebra.Structures.IsSemiringWithoutOne._.identity"
d1118 v0 v1 v2 v3 v4 v5 v6 v7 = du1118 v2 v3 v4 v6 v7
du1118 v0 v1 v2 v3 v4 = coe du440 v0 v1 v2 v3 (coe d1102 v4)
name1120 = "Algebra.Structures.IsSemiringWithoutOne._.isMonoid"
d1120 v0 v1 v2 v3 v4 v5 v6 v7 = du1120 v2 v3 v4 v6 v7
du1120 v0 v1 v2 v3 v4 = coe du470 v0 v1 v2 v3 (coe d1102 v4)
name1122 = "Algebra.Structures.IsSemiringWithoutOne._.isSemigroup"
d1122 v0 = coe d418 (coe d1102 v0)
name1124
  = "Algebra.Structures.IsSemiringWithoutOne._.isEquivalence"
d1124 v0 = coe d128 (coe d418 (coe d1102 v0))
name1126 = "Algebra.Structures.IsSemiringWithoutOne._.refl"
d1126 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d418 (coe d1102 v0)))
name1128 = "Algebra.Structures.IsSemiringWithoutOne._.reflexive"
d1128 v0 v1 v2 v3 v4 v5 v6 v7 = du1128 v7
du1128 v0 = coe du432 (coe d1102 v0)
name1130 = "Algebra.Structures.IsSemiringWithoutOne._.sym"
d1130 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d418 (coe d1102 v0)))
name1132 = "Algebra.Structures.IsSemiringWithoutOne._.trans"
d1132 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d418 (coe d1102 v0)))
name1136 = "Algebra.Structures.IsSemiringWithoutOne._.assoc"
d1136 v0 = coe d130 (coe d1104 v0)
name1138 = "Algebra.Structures.IsSemiringWithoutOne._.\8729-cong"
d1138 v0 = coe d132 (coe d1104 v0)
name1140 = "Algebra.Structures.IsSemiringWithoutOne.isNearSemiring"
d1140 v0 v1 v2 v3 v4 v5 v6 v7 = du1140 v2 v3 v4 v6 v7
du1140 v0 v1 v2 v3 v4
  = coe C169 (coe du1120 v0 v1 v2 v3 v4) (coe d1104 v4)
      (coe MAlonzo.Code.Data.Product.d28 (coe d1106 v4))
      (coe MAlonzo.Code.Data.Product.d26 (coe d1108 v4))
name1158 = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero"
d1158 a0 a1 a2 a3 a4 a5 a6 a7 = ()

data T1158 a0 a1 a2 = C237 a0 a1 a2
name1180 = "Algebra.Structures._._DistributesOver_"
d1180 = erased
name1278
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero.+-isCommutativeMonoid"
d1278 v0
  = case coe v0 of
        C237 v1 v2 v3 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1280
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero.*-isMonoid"
d1280 v0
  = case coe v0 of
        C237 v1 v2 v3 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1282
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero.distrib"
d1282 v0
  = case coe v0 of
        C237 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1286
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.assoc"
d1286 v0 = coe d130 (coe d418 (coe d1278 v0))
name1288
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.comm"
d1288 v0 = coe d422 (coe d1278 v0)
name1290
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.\8729-cong"
d1290 v0 = coe d132 (coe d418 (coe d1278 v0))
name1292
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.identity"
d1292 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1292 v2 v3 v4 v6 v8
du1292 v0 v1 v2 v3 v4 = coe du440 v0 v1 v2 v3 (coe d1278 v4)
name1294
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.isMonoid"
d1294 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1294 v2 v3 v4 v6 v8
du1294 v0 v1 v2 v3 v4 = coe du470 v0 v1 v2 v3 (coe d1278 v4)
name1296
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.isSemigroup"
d1296 v0 = coe d418 (coe d1278 v0)
name1298
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.isEquivalence"
d1298 v0 = coe d128 (coe d418 (coe d1278 v0))
name1300
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.refl"
d1300 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d418 (coe d1278 v0)))
name1302
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.reflexive"
d1302 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1302 v8
du1302 v0 = coe du432 (coe d1278 v0)
name1304
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.sym"
d1304 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d418 (coe d1278 v0)))
name1306
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.trans"
d1306 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d418 (coe d1278 v0)))
name1310
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.assoc"
d1310 v0 = coe d130 (coe d270 (coe d1280 v0))
name1312
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.\8729-cong"
d1312 v0 = coe d132 (coe d270 (coe d1280 v0))
name1314
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.identity"
d1314 v0 = coe d272 (coe d1280 v0)
name1316
  = "Algebra.Structures.IsSemiringWithoutAnnihilatingZero._.isSemigroup"
d1316 v0 = coe d270 (coe d1280 v0)
name1334 = "Algebra.Structures.IsSemiring"
d1334 a0 a1 a2 a3 a4 a5 a6 a7 = ()

data T1334 a0 a1 = C261 a0 a1
name1394 = "Algebra.Structures._.Zero"
d1394 = erased
name1452
  = "Algebra.Structures.IsSemiring.isSemiringWithoutAnnihilatingZero"
d1452 v0
  = case coe v0 of
        C261 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1454 = "Algebra.Structures.IsSemiring.zero"
d1454 v0
  = case coe v0 of
        C261 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1458 = "Algebra.Structures.IsSemiring._.assoc"
d1458 v0 = coe d130 (coe d270 (coe d1280 (coe d1452 v0)))
name1460 = "Algebra.Structures.IsSemiring._.\8729-cong"
d1460 v0 = coe d132 (coe d270 (coe d1280 (coe d1452 v0)))
name1462 = "Algebra.Structures.IsSemiring._.identity"
d1462 v0 = coe d272 (coe d1280 (coe d1452 v0))
name1464 = "Algebra.Structures.IsSemiring._.*-isMonoid"
d1464 v0 = coe d1280 (coe d1452 v0)
name1466 = "Algebra.Structures.IsSemiring._.isSemigroup"
d1466 v0 = coe d270 (coe d1280 (coe d1452 v0))
name1468 = "Algebra.Structures.IsSemiring._.assoc"
d1468 v0 = coe d130 (coe d418 (coe d1278 (coe d1452 v0)))
name1470 = "Algebra.Structures.IsSemiring._.comm"
d1470 v0 = coe d422 (coe d1278 (coe d1452 v0))
name1472 = "Algebra.Structures.IsSemiring._.\8729-cong"
d1472 v0 = coe d132 (coe d418 (coe d1278 (coe d1452 v0)))
name1474 = "Algebra.Structures.IsSemiring._.identity"
d1474 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1474 v2 v3 v4 v6 v8
du1474 v0 v1 v2 v3 v4 = coe du1292 v0 v1 v2 v3 (coe d1452 v4)
name1476 = "Algebra.Structures.IsSemiring._.+-isCommutativeMonoid"
d1476 v0 = coe d1278 (coe d1452 v0)
name1478 = "Algebra.Structures.IsSemiring._.isMonoid"
d1478 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1478 v2 v3 v4 v6 v8
du1478 v0 v1 v2 v3 v4 = coe du1294 v0 v1 v2 v3 (coe d1452 v4)
name1480 = "Algebra.Structures.IsSemiring._.isSemigroup"
d1480 v0 = coe d418 (coe d1278 (coe d1452 v0))
name1482 = "Algebra.Structures.IsSemiring._.distrib"
d1482 v0 = coe d1282 (coe d1452 v0)
name1484 = "Algebra.Structures.IsSemiring._.isEquivalence"
d1484 v0 = coe d128 (coe d418 (coe d1278 (coe d1452 v0)))
name1486 = "Algebra.Structures.IsSemiring._.refl"
d1486 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d418 (coe d1278 (coe d1452 v0))))
name1488 = "Algebra.Structures.IsSemiring._.reflexive"
d1488 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1488 v8
du1488 v0 = coe du1302 (coe d1452 v0)
name1490 = "Algebra.Structures.IsSemiring._.sym"
d1490 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d418 (coe d1278 (coe d1452 v0))))
name1492 = "Algebra.Structures.IsSemiring._.trans"
d1492 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d418 (coe d1278 (coe d1452 v0))))
name1494 = "Algebra.Structures.IsSemiring.isSemiringWithoutOne"
d1494 v0
  = coe C199 (coe d1278 (coe d1452 v0))
      (coe d270 (coe d1280 (coe d1452 v0)))
      (coe d1282 (coe d1452 v0))
      (coe d1454 v0)
name1498 = "Algebra.Structures.IsSemiring._.isNearSemiring"
d1498 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1498 v2 v3 v4 v6 v8
du1498 v0 v1 v2 v3 v4
  = coe du1140 v0 v1 v2 v3
      (coe C199 (coe d1278 (coe d1452 v4))
         (coe d270 (coe d1280 (coe d1452 v4)))
         (coe d1282 (coe d1452 v4))
         (coe d1454 v4))
name1514 = "Algebra.Structures.IsCommutativeSemiringWithoutOne"
d1514 a0 a1 a2 a3 a4 a5 a6 = ()

data T1514 a0 a1 = C287 a0 a1
name1546 = "Algebra.Structures._.Commutative"
d1546 = erased
name1630
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne.isSemiringWithoutOne"
d1630 v0
  = case coe v0 of
        C287 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1632
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne.*-comm"
d1632 v0
  = case coe v0 of
        C287 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1636
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.assoc"
d1636 v0 = coe d130 (coe d1104 (coe d1630 v0))
name1638
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.\8729-cong"
d1638 v0 = coe d132 (coe d1104 (coe d1630 v0))
name1640
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.*-isSemigroup"
d1640 v0 = coe d1104 (coe d1630 v0)
name1642
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.assoc"
d1642 v0 = coe d130 (coe d418 (coe d1102 (coe d1630 v0)))
name1644
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.comm"
d1644 v0 = coe d422 (coe d1102 (coe d1630 v0))
name1646
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.\8729-cong"
d1646 v0 = coe d132 (coe d418 (coe d1102 (coe d1630 v0)))
name1648
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.identity"
d1648 v0 v1 v2 v3 v4 v5 v6 v7 = du1648 v2 v3 v4 v6 v7
du1648 v0 v1 v2 v3 v4 = coe du1118 v0 v1 v2 v3 (coe d1630 v4)
name1650
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.+-isCommutativeMonoid"
d1650 v0 = coe d1102 (coe d1630 v0)
name1652
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.isMonoid"
d1652 v0 v1 v2 v3 v4 v5 v6 v7 = du1652 v2 v3 v4 v6 v7
du1652 v0 v1 v2 v3 v4 = coe du1120 v0 v1 v2 v3 (coe d1630 v4)
name1654
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.isSemigroup"
d1654 v0 = coe d418 (coe d1102 (coe d1630 v0))
name1656
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.distrib"
d1656 v0 = coe d1106 (coe d1630 v0)
name1658
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.isEquivalence"
d1658 v0 = coe d128 (coe d418 (coe d1102 (coe d1630 v0)))
name1660
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.isNearSemiring"
d1660 v0 v1 v2 v3 v4 v5 v6 v7 = du1660 v2 v3 v4 v6 v7
du1660 v0 v1 v2 v3 v4 = coe du1140 v0 v1 v2 v3 (coe d1630 v4)
name1662
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.refl"
d1662 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d418 (coe d1102 (coe d1630 v0))))
name1664
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.reflexive"
d1664 v0 v1 v2 v3 v4 v5 v6 v7 = du1664 v7
du1664 v0 = coe du1128 (coe d1630 v0)
name1666
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.sym"
d1666 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d418 (coe d1102 (coe d1630 v0))))
name1668
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.trans"
d1668 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d418 (coe d1102 (coe d1630 v0))))
name1670
  = "Algebra.Structures.IsCommutativeSemiringWithoutOne._.zero"
d1670 v0 = coe d1108 (coe d1630 v0)
name1688 = "Algebra.Structures.IsCommutativeSemiring"
d1688 a0 a1 a2 a3 a4 a5 a6 a7 = ()

data T1688 a0 a1 a2 a3 = C313 a0 a1 a2 a3
name1712 = "Algebra.Structures._._DistributesOver\691_"
d1712 = erased
name1738 = "Algebra.Structures._.LeftZero"
d1738 = erased
name1766
  = "Algebra.Structures.IsCommutativeSemiring._._DistributesOver_"
d1766 = erased
name1804 = "Algebra.Structures.IsCommutativeSemiring._.Zero"
d1804 = erased
name1810
  = "Algebra.Structures.IsCommutativeSemiring.+-isCommutativeMonoid"
d1810 v0
  = case coe v0 of
        C313 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1812
  = "Algebra.Structures.IsCommutativeSemiring.*-isCommutativeMonoid"
d1812 v0
  = case coe v0 of
        C313 v1 v2 v3 v4 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1814 = "Algebra.Structures.IsCommutativeSemiring.distrib\691"
d1814 v0
  = case coe v0 of
        C313 v1 v2 v3 v4 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1816 = "Algebra.Structures.IsCommutativeSemiring.zero\737"
d1816 v0
  = case coe v0 of
        C313 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1828
  = "Algebra.Structures.IsCommutativeSemiring.+-CM.isEquivalence"
d1828 v0 = coe d128 (coe d418 (coe d1810 v0))
name1842
  = "Algebra.Structures.IsCommutativeSemiring.+-CM.\8729-cong"
d1842 v0 = coe d132 (coe d418 (coe d1810 v0))
name1848 = "Algebra.Structures.IsCommutativeSemiring.*-CM.comm"
d1848 v0 = coe d422 (coe d1812 v0)
name1856 = "Algebra.Structures.IsCommutativeSemiring.*-CM.isMonoid"
d1856 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1856 v2 v3 v5 v7 v8
du1856 v0 v1 v2 v3 v4 = coe du470 v0 v1 v2 v3 (coe d1812 v4)
name1874 = "Algebra.Structures.IsCommutativeSemiring._._\8718"
d1874 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1874 v2 v3 v8
du1874 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 v0 v1
         (coe d128 (coe d418 (coe d1810 v2))))
name1876
  = "Algebra.Structures.IsCommutativeSemiring._._\8764\10216_\10217_"
d1876 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1876 v2 v3 v8
du1876 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 v0 v1
         (coe d128 (coe d418 (coe d1810 v2))))
name1890 = "Algebra.Structures.IsCommutativeSemiring.distrib"
d1890 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1890 v2 v3 v4 v5 v8
du1890 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Data.Product.C30
      (coe d1896 erased erased v0 v1 v2 v3 erased erased v4)
      (coe d1814 v4)
name1896 = "Algebra.Structures.IsCommutativeSemiring._.distrib\737"
d1896 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = du1896 v2 v3 v4 v5 v8 v9 v10 v11
du1896 v0 v1 v2 v3 v4 v5 v6 v7
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du1876 v0 v1 v4 (coe v3 v5 (coe v2 v6 v7))
         (coe v3 (coe v2 v6 v7) v5)
         (coe v2 (coe v3 v5 v6) (coe v3 v5 v7))
         (coe d422 (coe d1812 v4) v5 (coe v2 v6 v7))
         (coe du1876 v0 v1 v4 (coe v3 (coe v2 v6 v7) v5)
            (coe v2 (coe v3 v6 v5) (coe v3 v7 v5))
            (coe v2 (coe v3 v5 v6) (coe v3 v5 v7))
            (coe d1814 v4 v5 v6 v7)
            (coe du1876 v0 v1 v4 (coe v2 (coe v3 v6 v5) (coe v3 v7 v5))
               (coe v2 (coe v3 v5 v6) (coe v3 v5 v7))
               (coe v2 (coe v3 v5 v6) (coe v3 v5 v7))
               (coe MAlonzo.Code.Function.du176 (coe d422 (coe d1812 v4) v6 v5)
                  (coe d132 (coe d418 (coe d1810 v4)) (coe v3 v6 v5) (coe v3 v5 v6)
                     (coe v3 v7 v5)
                     (coe v3 v5 v7))
                  (coe d422 (coe d1812 v4) v7 v5))
               (coe du1874 v0 v1 v4 (coe v2 (coe v3 v5 v6) (coe v3 v5 v7))))))
name1904 = "Algebra.Structures.IsCommutativeSemiring.zero"
d1904 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1904 v2 v3 v5 v6 v8
du1904 v0 v1 v2 v3 v4
  = coe MAlonzo.Code.Data.Product.C30 (coe d1816 v4)
      (coe d1910 erased erased v0 v1 erased v2 v3 erased v4)
name1910 = "Algebra.Structures.IsCommutativeSemiring._.zero\691"
d1910 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du1910 v2 v3 v5 v6 v8 v9
du1910 v0 v1 v2 v3 v4 v5
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du1876 v0 v1 v4 (coe v2 v5 v3) (coe v2 v3 v5) v3
         (coe d422 (coe d1812 v4) v5 v3)
         (coe du1876 v0 v1 v4 (coe v2 v3 v5) v3 v3 (coe d1816 v4 v5)
            (coe du1874 v0 v1 v4 v3)))
name1914 = "Algebra.Structures.IsCommutativeSemiring.isSemiring"
d1914 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1914 v2 v3 v4 v5 v6 v7 v8
du1914 v0 v1 v2 v3 v4 v5 v6
  = coe C261
      (coe C237 (coe d1810 v6) (coe du1856 v0 v1 v3 v5 v6)
         (coe du1890 v0 v1 v2 v3 v6))
      (coe du1904 v0 v1 v3 v4 v6)
name1918 = "Algebra.Structures.IsCommutativeSemiring._.assoc"
d1918 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1918 v2 v3 v4 v5 v6 v7 v8
du1918 v0 v1 v2 v3 v4 v5 v6
  = coe d130
      (coe d270
         (coe d1280 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))))
name1920 = "Algebra.Structures.IsCommutativeSemiring._.\8729-cong"
d1920 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1920 v2 v3 v4 v5 v6 v7 v8
du1920 v0 v1 v2 v3 v4 v5 v6
  = coe d132
      (coe d270
         (coe d1280 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))))
name1922 = "Algebra.Structures.IsCommutativeSemiring._.identity"
d1922 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1922 v2 v3 v4 v5 v6 v7 v8
du1922 v0 v1 v2 v3 v4 v5 v6
  = coe d272
      (coe d1280 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))
name1924 = "Algebra.Structures.IsCommutativeSemiring._.*-isMonoid"
d1924 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1924 v2 v3 v4 v5 v6 v7 v8
du1924 v0 v1 v2 v3 v4 v5 v6
  = coe d1280 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))
name1926 = "Algebra.Structures.IsCommutativeSemiring._.isSemigroup"
d1926 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1926 v2 v3 v4 v5 v6 v7 v8
du1926 v0 v1 v2 v3 v4 v5 v6
  = coe d270
      (coe d1280 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))
name1928 = "Algebra.Structures.IsCommutativeSemiring._.assoc"
d1928 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1928 v2 v3 v4 v5 v6 v7 v8
du1928 v0 v1 v2 v3 v4 v5 v6
  = coe d130
      (coe d418
         (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))))
name1930 = "Algebra.Structures.IsCommutativeSemiring._.comm"
d1930 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1930 v2 v3 v4 v5 v6 v7 v8
du1930 v0 v1 v2 v3 v4 v5 v6
  = coe d422
      (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))
name1932 = "Algebra.Structures.IsCommutativeSemiring._.\8729-cong"
d1932 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1932 v2 v3 v4 v5 v6 v7 v8
du1932 v0 v1 v2 v3 v4 v5 v6
  = coe d132
      (coe d418
         (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))))
name1934 = "Algebra.Structures.IsCommutativeSemiring._.identity"
d1934 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1934 v2 v3 v4 v5 v6 v7 v8
du1934 v0 v1 v2 v3 v4 v5 v6
  = coe du1474 v0 v1 v2 v4 (coe du1914 v0 v1 v2 v3 v4 v5 v6)
name1936 = "Algebra.Structures.IsCommutativeSemiring._.isMonoid"
d1936 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1936 v2 v3 v4 v5 v6 v7 v8
du1936 v0 v1 v2 v3 v4 v5 v6
  = coe du1478 v0 v1 v2 v4 (coe du1914 v0 v1 v2 v3 v4 v5 v6)
name1938 = "Algebra.Structures.IsCommutativeSemiring._.isSemigroup"
d1938 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1938 v2 v3 v4 v5 v6 v7 v8
du1938 v0 v1 v2 v3 v4 v5 v6
  = coe d418
      (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))
name1940
  = "Algebra.Structures.IsCommutativeSemiring._.isEquivalence"
d1940 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1940 v2 v3 v4 v5 v6 v7 v8
du1940 v0 v1 v2 v3 v4 v5 v6
  = coe d128
      (coe d418
         (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))))
name1942
  = "Algebra.Structures.IsCommutativeSemiring._.isNearSemiring"
d1942 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1942 v2 v3 v4 v5 v6 v7 v8
du1942 v0 v1 v2 v3 v4 v5 v6
  = coe du1498 v0 v1 v2 v4 (coe du1914 v0 v1 v2 v3 v4 v5 v6)
name1944
  = "Algebra.Structures.IsCommutativeSemiring._.isSemiringWithoutAnnihilatingZero"
d1944 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1944 v2 v3 v4 v5 v6 v7 v8
du1944 v0 v1 v2 v3 v4 v5 v6
  = coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)
name1946
  = "Algebra.Structures.IsCommutativeSemiring._.isSemiringWithoutOne"
d1946 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1946 v2 v3 v4 v5 v6 v7 v8
du1946 v0 v1 v2 v3 v4 v5 v6
  = coe C199
      (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))
      (coe d270
         (coe d1280 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6))))
      (coe d1282 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))
      (coe d1454 (coe du1914 v0 v1 v2 v3 v4 v5 v6))
name1948 = "Algebra.Structures.IsCommutativeSemiring._.refl"
d1948 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1948 v2 v3 v4 v5 v6 v7 v8
du1948 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128
         (coe d418
            (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))))
name1950 = "Algebra.Structures.IsCommutativeSemiring._.reflexive"
d1950 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1950 v2 v3 v4 v5 v6 v7 v8
du1950 v0 v1 v2 v3 v4 v5 v6
  = coe du1488 (coe du1914 v0 v1 v2 v3 v4 v5 v6)
name1952 = "Algebra.Structures.IsCommutativeSemiring._.sym"
d1952 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1952 v2 v3 v4 v5 v6 v7 v8
du1952 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128
         (coe d418
            (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))))
name1954 = "Algebra.Structures.IsCommutativeSemiring._.trans"
d1954 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1954 v2 v3 v4 v5 v6 v7 v8
du1954 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128
         (coe d418
            (coe d1278 (coe d1452 (coe du1914 v0 v1 v2 v3 v4 v5 v6)))))
name1956
  = "Algebra.Structures.IsCommutativeSemiring.isCommutativeSemiringWithoutOne"
d1956 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du1956 v2 v3 v4 v5 v6 v7 v8
du1956 v0 v1 v2 v3 v4 v5 v6
  = coe C287 (coe du1946 v0 v1 v2 v3 v4 v5 v6)
      (coe d422 (coe d1812 v6))
name1976 = "Algebra.Structures.IsRing"
d1976 a0 a1 a2 a3 a4 a5 a6 a7 a8 = ()

data T1976 a0 a1 a2 = C363 a0 a1 a2
name2000 = "Algebra.Structures._._DistributesOver_"
d2000 = erased
name2092 = "Algebra.Structures.IsRing._.Zero"
d2092 = erased
name2098 = "Algebra.Structures.IsRing.+-isAbelianGroup"
d2098 v0
  = case coe v0 of
        C363 v1 v2 v3 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2100 = "Algebra.Structures.IsRing.*-isMonoid"
d2100 v0
  = case coe v0 of
        C363 v1 v2 v3 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2102 = "Algebra.Structures.IsRing.distrib"
d2102 v0
  = case coe v0 of
        C363 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2106 = "Algebra.Structures.IsRing._._-_"
d2106 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2106 v4 v6
du2106 v0 v1 = coe du772 v0 v1
name2108 = "Algebra.Structures.IsRing._.assoc"
d2108 v0 = coe d130 (coe d270 (coe d604 (coe d766 (coe d2098 v0))))
name2110 = "Algebra.Structures.IsRing._.comm"
d2110 v0 = coe d768 (coe d2098 v0)
name2112 = "Algebra.Structures.IsRing._.\8729-cong"
d2112 v0 = coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v0))))
name2114 = "Algebra.Structures.IsRing._.identity"
d2114 v0 = coe d272 (coe d604 (coe d766 (coe d2098 v0)))
name2116 = "Algebra.Structures.IsRing._.isCommutativeMonoid"
d2116 v0
  = coe C71 (coe d270 (coe d604 (coe d766 (coe d2098 v0))))
      (coe MAlonzo.Code.Data.Product.d26
         (coe d272 (coe d604 (coe d766 (coe d2098 v0)))))
      (coe d768 (coe d2098 v0))
name2118 = "Algebra.Structures.IsRing._.isGroup"
d2118 v0 = coe d766 (coe d2098 v0)
name2120 = "Algebra.Structures.IsRing._.isMonoid"
d2120 v0 = coe d604 (coe d766 (coe d2098 v0))
name2122 = "Algebra.Structures.IsRing._.isSemigroup"
d2122 v0 = coe d270 (coe d604 (coe d766 (coe d2098 v0)))
name2124 = "Algebra.Structures.IsRing._.\8315\185-cong"
d2124 v0 = coe d608 (coe d766 (coe d2098 v0))
name2126 = "Algebra.Structures.IsRing._.inverse"
d2126 v0 = coe d606 (coe d766 (coe d2098 v0))
name2128 = "Algebra.Structures.IsRing._.isEquivalence"
d2128 v0 = coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v0))))
name2130 = "Algebra.Structures.IsRing._.refl"
d2130 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v0)))))
name2132 = "Algebra.Structures.IsRing._.reflexive"
d2132 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2132 v9
du2132 v0 = coe du788 (coe d2098 v0)
name2134 = "Algebra.Structures.IsRing._.sym"
d2134 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v0)))))
name2136 = "Algebra.Structures.IsRing._.trans"
d2136 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v0)))))
name2140 = "Algebra.Structures.IsRing._.assoc"
d2140 v0 = coe d130 (coe d270 (coe d2100 v0))
name2142 = "Algebra.Structures.IsRing._.\8729-cong"
d2142 v0 = coe d132 (coe d270 (coe d2100 v0))
name2144 = "Algebra.Structures.IsRing._.identity"
d2144 v0 = coe d272 (coe d2100 v0)
name2146 = "Algebra.Structures.IsRing._.isSemigroup"
d2146 v0 = coe d270 (coe d2100 v0)
name2148 = "Algebra.Structures.IsRing.zero"
d2148 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2148 v2 v3 v4 v5 v6 v7 v9
du2148 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Data.Product.C30
      (coe d2174 erased erased v0 v1 v2 v3 v4 v5 erased v6)
      (coe d2178 erased erased v0 v1 v2 v3 v4 v5 erased v6)
name2158 = "Algebra.Structures.IsRing._._._\8718"
d2158 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2158 v2 v3 v9
du2158 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe MAlonzo.Code.Relation.Binary.C85 v0 v1
         (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v2))))))
name2160 = "Algebra.Structures.IsRing._._._\8764\10216_\10217_"
d2160 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2160 v2 v3 v9
du2160 v0 v1 v2
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40
      (coe MAlonzo.Code.Relation.Binary.C85 v0 v1
         (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v2))))))
name2174 = "Algebra.Structures.IsRing._.zero\737"
d2174 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du2174 v2 v3 v4 v5 v6 v7 v9 v10
du2174 v0 v1 v2 v3 v4 v5 v6 v7
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du2160 v0 v1 v6 (coe v3 v5 v7) (coe v2 (coe v3 v5 v7) v5) v5
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
               (coe v2 (coe v3 v5 v7) v5)
               (coe v3 v5 v7))
            (coe MAlonzo.Code.Data.Product.d28
               (coe d272 (coe d604 (coe d766 (coe d2098 v6))))
               (coe v3 v5 v7)))
         (coe du2160 v0 v1 v6 (coe v2 (coe v3 v5 v7) v5)
            (coe v2 (coe v3 v5 v7)
               (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7))))
            v5
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                  (coe v3 v5 v7))
               (coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                  (coe v3 v5 v7)
                  (coe v3 v5 v7)
                  v5
                  (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7))))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                  (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7)))
                  v5
                  (coe MAlonzo.Code.Data.Product.d28
                     (coe d606 (coe d766 (coe d2098 v6)))
                     (coe v3 v5 v7))))
            (coe du2160 v0 v1 v6
               (coe v2 (coe v3 v5 v7)
                  (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7))))
               (coe v2 (coe v2 (coe v3 v5 v7) (coe v3 v5 v7))
                  (coe v4 (coe v3 v5 v7)))
               v5
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                     (coe v2 (coe v2 (coe v3 v5 v7) (coe v3 v5 v7))
                        (coe v4 (coe v3 v5 v7)))
                     (coe v2 (coe v3 v5 v7)
                        (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7)))))
                  (coe d130 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                     (coe v3 v5 v7)
                     (coe v3 v5 v7)
                     (coe v4 (coe v3 v5 v7))))
               (coe du2160 v0 v1 v6
                  (coe v2 (coe v2 (coe v3 v5 v7) (coe v3 v5 v7))
                     (coe v4 (coe v3 v5 v7)))
                  (coe v2 (coe v3 (coe v2 v5 v5) v7) (coe v4 (coe v3 v5 v7)))
                  v5
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                        (coe v3 (coe v2 v5 v5) v7)
                        (coe v2 (coe v3 v5 v7) (coe v3 v5 v7))
                        (coe MAlonzo.Code.Data.Product.d28 (coe d2102 v6) v7 v5 v5))
                     (coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                        (coe v2 (coe v3 v5 v7) (coe v3 v5 v7))
                        (coe v3 (coe v2 v5 v5) v7)
                        (coe v4 (coe v3 v5 v7))
                        (coe v4 (coe v3 v5 v7)))
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                        (coe v4 (coe v3 v5 v7))))
                  (coe du2160 v0 v1 v6
                     (coe v2 (coe v3 (coe v2 v5 v5) v7) (coe v4 (coe v3 v5 v7)))
                     (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7)))
                     v5
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Function.du176
                           (coe MAlonzo.Code.Data.Product.d28
                              (coe d272 (coe d604 (coe d766 (coe d2098 v6))))
                              v5)
                           (coe d132 (coe d270 (coe d2100 v6)) (coe v2 v5 v5) v5 v7 v7)
                           (coe MAlonzo.Code.Relation.Binary.Core.d516
                              (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                              v7))
                        (coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                           (coe v3 (coe v2 v5 v5) v7)
                           (coe v3 v5 v7)
                           (coe v4 (coe v3 v5 v7))
                           (coe v4 (coe v3 v5 v7)))
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                           (coe v4 (coe v3 v5 v7))))
                     (coe du2160 v0 v1 v6
                        (coe v2 (coe v3 v5 v7) (coe v4 (coe v3 v5 v7)))
                        v5
                        v5
                        (coe MAlonzo.Code.Data.Product.d28
                           (coe d606 (coe d766 (coe d2098 v6)))
                           (coe v3 v5 v7))
                        (coe du2158 v0 v1 v6 v5)))))))
name2178 = "Algebra.Structures.IsRing._.zero\691"
d2178 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du2178 v2 v3 v4 v5 v6 v7 v9 v10
du2178 v0 v1 v2 v3 v4 v5 v6 v7
  = coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
      (coe du2160 v0 v1 v6 (coe v3 v7 v5) (coe v2 (coe v3 v7 v5) v5) v5
         (coe MAlonzo.Code.Function.du158
            (coe MAlonzo.Code.Relation.Binary.Core.d518
               (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
               (coe v2 (coe v3 v7 v5) v5)
               (coe v3 v7 v5))
            (coe MAlonzo.Code.Data.Product.d28
               (coe d272 (coe d604 (coe d766 (coe d2098 v6))))
               (coe v3 v7 v5)))
         (coe du2160 v0 v1 v6 (coe v2 (coe v3 v7 v5) v5)
            (coe v2 (coe v3 v7 v5)
               (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5))))
            v5
            (coe MAlonzo.Code.Function.du176
               (coe MAlonzo.Code.Relation.Binary.Core.d516
                  (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                  (coe v3 v7 v5))
               (coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                  (coe v3 v7 v5)
                  (coe v3 v7 v5)
                  v5
                  (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5))))
               (coe MAlonzo.Code.Relation.Binary.Core.d518
                  (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                  (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5)))
                  v5
                  (coe MAlonzo.Code.Data.Product.d28
                     (coe d606 (coe d766 (coe d2098 v6)))
                     (coe v3 v7 v5))))
            (coe du2160 v0 v1 v6
               (coe v2 (coe v3 v7 v5)
                  (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5))))
               (coe v2 (coe v2 (coe v3 v7 v5) (coe v3 v7 v5))
                  (coe v4 (coe v3 v7 v5)))
               v5
               (coe MAlonzo.Code.Function.du158
                  (coe MAlonzo.Code.Relation.Binary.Core.d518
                     (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                     (coe v2 (coe v2 (coe v3 v7 v5) (coe v3 v7 v5))
                        (coe v4 (coe v3 v7 v5)))
                     (coe v2 (coe v3 v7 v5)
                        (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5)))))
                  (coe d130 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                     (coe v3 v7 v5)
                     (coe v3 v7 v5)
                     (coe v4 (coe v3 v7 v5))))
               (coe du2160 v0 v1 v6
                  (coe v2 (coe v2 (coe v3 v7 v5) (coe v3 v7 v5))
                     (coe v4 (coe v3 v7 v5)))
                  (coe v2 (coe v3 v7 (coe v2 v5 v5)) (coe v4 (coe v3 v7 v5)))
                  v5
                  (coe MAlonzo.Code.Function.du176
                     (coe MAlonzo.Code.Relation.Binary.Core.d518
                        (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                        (coe v3 v7 (coe v2 v5 v5))
                        (coe v2 (coe v3 v7 v5) (coe v3 v7 v5))
                        (coe MAlonzo.Code.Data.Product.d26 (coe d2102 v6) v7 v5 v5))
                     (coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                        (coe v2 (coe v3 v7 v5) (coe v3 v7 v5))
                        (coe v3 v7 (coe v2 v5 v5))
                        (coe v4 (coe v3 v7 v5))
                        (coe v4 (coe v3 v7 v5)))
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                        (coe v4 (coe v3 v7 v5))))
                  (coe du2160 v0 v1 v6
                     (coe v2 (coe v3 v7 (coe v2 v5 v5)) (coe v4 (coe v3 v7 v5)))
                     (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5)))
                     v5
                     (coe MAlonzo.Code.Function.du176
                        (coe MAlonzo.Code.Function.du176
                           (coe MAlonzo.Code.Relation.Binary.Core.d516
                              (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                              v7)
                           (coe d132 (coe d270 (coe d2100 v6)) v7 v7 (coe v2 v5 v5) v5)
                           (coe MAlonzo.Code.Data.Product.d28
                              (coe d272 (coe d604 (coe d766 (coe d2098 v6))))
                              v5))
                        (coe d132 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
                           (coe v3 v7 (coe v2 v5 v5))
                           (coe v3 v7 v5)
                           (coe v4 (coe v3 v7 v5))
                           (coe v4 (coe v3 v7 v5)))
                        (coe MAlonzo.Code.Relation.Binary.Core.d516
                           (coe d128 (coe d270 (coe d604 (coe d766 (coe d2098 v6)))))
                           (coe v4 (coe v3 v7 v5))))
                     (coe du2160 v0 v1 v6
                        (coe v2 (coe v3 v7 v5) (coe v4 (coe v3 v7 v5)))
                        v5
                        v5
                        (coe MAlonzo.Code.Data.Product.d28
                           (coe d606 (coe d766 (coe d2098 v6)))
                           (coe v3 v7 v5))
                        (coe du2158 v0 v1 v6 v5)))))))
name2182
  = "Algebra.Structures.IsRing.isSemiringWithoutAnnihilatingZero"
d2182 v0
  = coe C237
      (coe C71 (coe d270 (coe d604 (coe d766 (coe d2098 v0))))
         (coe MAlonzo.Code.Data.Product.d26
            (coe d272 (coe d604 (coe d766 (coe d2098 v0)))))
         (coe d768 (coe d2098 v0)))
      (coe d2100 v0)
      (coe d2102 v0)
name2184 = "Algebra.Structures.IsRing.isSemiring"
d2184 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2184 v2 v3 v4 v5 v6 v7 v9
du2184 v0 v1 v2 v3 v4 v5 v6
  = coe C261
      (coe C237
         (coe C71 (coe d270 (coe d604 (coe d766 (coe d2098 v6))))
            (coe MAlonzo.Code.Data.Product.d26
               (coe d272 (coe d604 (coe d766 (coe d2098 v6)))))
            (coe d768 (coe d2098 v6)))
         (coe d2100 v6)
         (coe d2102 v6))
      (coe du2148 v0 v1 v2 v3 v4 v5 v6)
name2188 = "Algebra.Structures.IsRing._.isNearSemiring"
d2188 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2188 v2 v3 v4 v5 v6 v7 v9
du2188 v0 v1 v2 v3 v4 v5 v6
  = coe du1498 v0 v1 v2 v5 (coe du2184 v0 v1 v2 v3 v4 v5 v6)
name2190 = "Algebra.Structures.IsRing._.isSemiringWithoutOne"
d2190 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2190 v2 v3 v4 v5 v6 v7 v9
du2190 v0 v1 v2 v3 v4 v5 v6
  = coe C199
      (coe d1278 (coe d1452 (coe du2184 v0 v1 v2 v3 v4 v5 v6)))
      (coe d270
         (coe d1280 (coe d1452 (coe du2184 v0 v1 v2 v3 v4 v5 v6))))
      (coe d1282 (coe d1452 (coe du2184 v0 v1 v2 v3 v4 v5 v6)))
      (coe d1454 (coe du2184 v0 v1 v2 v3 v4 v5 v6))
name2210 = "Algebra.Structures.IsCommutativeRing"
d2210 a0 a1 a2 a3 a4 a5 a6 a7 a8 = ()

data T2210 a0 a1 = C475 a0 a1
name2246 = "Algebra.Structures._.Commutative"
d2246 = erased
name2330 = "Algebra.Structures.IsCommutativeRing.isRing"
d2330 v0
  = case coe v0 of
        C475 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2332 = "Algebra.Structures.IsCommutativeRing.*-comm"
d2332 v0
  = case coe v0 of
        C475 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2336 = "Algebra.Structures.IsCommutativeRing._._-_"
d2336 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2336 v4 v6
du2336 v0 v1 = coe du2106 v0 v1
name2338 = "Algebra.Structures.IsCommutativeRing._.assoc"
d2338 v0 = coe d130 (coe d270 (coe d2100 (coe d2330 v0)))
name2340 = "Algebra.Structures.IsCommutativeRing._.\8729-cong"
d2340 v0 = coe d132 (coe d270 (coe d2100 (coe d2330 v0)))
name2342 = "Algebra.Structures.IsCommutativeRing._.identity"
d2342 v0 = coe d272 (coe d2100 (coe d2330 v0))
name2344 = "Algebra.Structures.IsCommutativeRing._.*-isMonoid"
d2344 v0 = coe d2100 (coe d2330 v0)
name2346 = "Algebra.Structures.IsCommutativeRing._.isSemigroup"
d2346 v0 = coe d270 (coe d2100 (coe d2330 v0))
name2348 = "Algebra.Structures.IsCommutativeRing._.assoc"
d2348 v0
  = coe d130
      (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0)))))
name2350 = "Algebra.Structures.IsCommutativeRing._.comm"
d2350 v0 = coe d768 (coe d2098 (coe d2330 v0))
name2352 = "Algebra.Structures.IsCommutativeRing._.\8729-cong"
d2352 v0
  = coe d132
      (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0)))))
name2354 = "Algebra.Structures.IsCommutativeRing._.identity"
d2354 v0
  = coe d272 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))
name2356
  = "Algebra.Structures.IsCommutativeRing._.+-isAbelianGroup"
d2356 v0 = coe d2098 (coe d2330 v0)
name2358
  = "Algebra.Structures.IsCommutativeRing._.isCommutativeMonoid"
d2358 v0
  = coe C71
      (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0)))))
      (coe MAlonzo.Code.Data.Product.d26
         (coe d272 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))))
      (coe d768 (coe d2098 (coe d2330 v0)))
name2360 = "Algebra.Structures.IsCommutativeRing._.isGroup"
d2360 v0 = coe d766 (coe d2098 (coe d2330 v0))
name2362 = "Algebra.Structures.IsCommutativeRing._.isMonoid"
d2362 v0 = coe d604 (coe d766 (coe d2098 (coe d2330 v0)))
name2364 = "Algebra.Structures.IsCommutativeRing._.isSemigroup"
d2364 v0
  = coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))
name2366 = "Algebra.Structures.IsCommutativeRing._.\8315\185-cong"
d2366 v0 = coe d608 (coe d766 (coe d2098 (coe d2330 v0)))
name2368 = "Algebra.Structures.IsCommutativeRing._.inverse"
d2368 v0 = coe d606 (coe d766 (coe d2098 (coe d2330 v0)))
name2370 = "Algebra.Structures.IsCommutativeRing._.distrib"
d2370 v0 = coe d2102 (coe d2330 v0)
name2372 = "Algebra.Structures.IsCommutativeRing._.isEquivalence"
d2372 v0
  = coe d128
      (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0)))))
name2374 = "Algebra.Structures.IsCommutativeRing._.isNearSemiring"
d2374 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2374 v2 v3 v4 v5 v6 v7 v9
du2374 v0 v1 v2 v3 v4 v5 v6
  = coe du2188 v0 v1 v2 v3 v4 v5 (coe d2330 v6)
name2376 = "Algebra.Structures.IsCommutativeRing._.isSemiring"
d2376 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2376 v2 v3 v4 v5 v6 v7 v9
du2376 v0 v1 v2 v3 v4 v5 v6
  = coe du2184 v0 v1 v2 v3 v4 v5 (coe d2330 v6)
name2378
  = "Algebra.Structures.IsCommutativeRing._.isSemiringWithoutAnnihilatingZero"
d2378 v0
  = coe C237
      (coe C71
         (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0)))))
         (coe MAlonzo.Code.Data.Product.d26
            (coe d272 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))))
         (coe d768 (coe d2098 (coe d2330 v0))))
      (coe d2100 (coe d2330 v0))
      (coe d2102 (coe d2330 v0))
name2380
  = "Algebra.Structures.IsCommutativeRing._.isSemiringWithoutOne"
d2380 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2380 v2 v3 v4 v5 v6 v7 v9
du2380 v0 v1 v2 v3 v4 v5 v6
  = coe du2190 v0 v1 v2 v3 v4 v5 (coe d2330 v6)
name2382 = "Algebra.Structures.IsCommutativeRing._.refl"
d2382 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d128
         (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))))
name2384 = "Algebra.Structures.IsCommutativeRing._.reflexive"
d2384 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2384 v9
du2384 v0 = coe du2132 (coe d2330 v0)
name2386 = "Algebra.Structures.IsCommutativeRing._.sym"
d2386 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d128
         (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))))
name2388 = "Algebra.Structures.IsCommutativeRing._.trans"
d2388 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d128
         (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v0))))))
name2390 = "Algebra.Structures.IsCommutativeRing._.zero"
d2390 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2390 v2 v3 v4 v5 v6 v7 v9
du2390 v0 v1 v2 v3 v4 v5 v6
  = coe du2148 v0 v1 v2 v3 v4 v5 (coe d2330 v6)
name2392
  = "Algebra.Structures.IsCommutativeRing.isCommutativeSemiring"
d2392 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2392 v2 v3 v4 v5 v6 v7 v9
du2392 v0 v1 v2 v3 v4 v5 v6
  = coe C313
      (coe C71
         (coe d270 (coe d604 (coe d766 (coe d2098 (coe d2330 v6)))))
         (coe MAlonzo.Code.Data.Product.d26
            (coe d272 (coe d604 (coe d766 (coe d2098 (coe d2330 v6))))))
         (coe d768 (coe d2098 (coe d2330 v6))))
      (coe C71 (coe d270 (coe d2100 (coe d2330 v6)))
         (coe MAlonzo.Code.Data.Product.d26
            (coe d272 (coe d2100 (coe d2330 v6))))
         (coe d2332 v6))
      (coe MAlonzo.Code.Data.Product.d28 (coe d2102 (coe d2330 v6)))
      (coe MAlonzo.Code.Data.Product.d26
         (coe du2390 v0 v1 v2 v3 v4 v5 v6))
name2396
  = "Algebra.Structures.IsCommutativeRing._.*-isCommutativeMonoid"
d2396 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2396 v2 v3 v4 v5 v6 v7 v9
du2396 v0 v1 v2 v3 v4 v5 v6
  = coe d1812 (coe du2392 v0 v1 v2 v3 v4 v5 v6)
name2398
  = "Algebra.Structures.IsCommutativeRing._.isCommutativeSemiringWithoutOne"
d2398 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du2398 v2 v3 v4 v5 v6 v7 v8 v9
du2398 v0 v1 v2 v3 v4 v5 v6 v7
  = coe du1956 v0 v1 v2 v3 v5 v6 (coe du2392 v0 v1 v2 v3 v4 v5 v7)
name2412 = "Algebra.Structures.IsLattice"
d2412 a0 a1 a2 a3 a4 a5 = ()

data T2412 a0 a1 a2 a3 a4 a5 a6 a7 = C539 a0 a1 a2 a3 a4 a5 a6 a7
name2438 = "Algebra.Structures._.Absorptive"
d2438 = erased
name2440 = "Algebra.Structures._.Associative"
d2440 = erased
name2442 = "Algebra.Structures._.Commutative"
d2442 = erased
name2538 = "Algebra.Structures.IsLattice.isEquivalence"
d2538 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2540 = "Algebra.Structures.IsLattice.\8744-comm"
d2540 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2542 = "Algebra.Structures.IsLattice.\8744-assoc"
d2542 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2544 = "Algebra.Structures.IsLattice.\8744-cong"
d2544 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2546 = "Algebra.Structures.IsLattice.\8743-comm"
d2546 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v5
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2548 = "Algebra.Structures.IsLattice.\8743-assoc"
d2548 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v6
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2550 = "Algebra.Structures.IsLattice.\8743-cong"
d2550 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v7
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2552 = "Algebra.Structures.IsLattice.absorptive"
d2552 v0
  = case coe v0 of
        C539 v1 v2 v3 v4 v5 v6 v7 v8 -> coe v8
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2556 = "Algebra.Structures.IsLattice._.refl"
d2556 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516 (coe d2538 v0)
name2558 = "Algebra.Structures.IsLattice._.reflexive"
d2558 v0 v1 v2 v3 v4 v5 v6 = du2558 v6
du2558 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d522 erased erased erased
      erased
      (coe d2538 v0)
name2560 = "Algebra.Structures.IsLattice._.sym"
d2560 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518 (coe d2538 v0)
name2562 = "Algebra.Structures.IsLattice._.trans"
d2562 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520 (coe d2538 v0)
name2576 = "Algebra.Structures.IsDistributiveLattice"
d2576 a0 a1 a2 a3 a4 a5 = ()

data T2576 a0 a1 = C573 a0 a1
name2596 = "Algebra.Structures._._DistributesOver\691_"
d2596 = erased
name2690 = "Algebra.Structures.IsDistributiveLattice.isLattice"
d2690 v0
  = case coe v0 of
        C573 v1 v2 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2692
  = "Algebra.Structures.IsDistributiveLattice.\8744-\8743-distrib\691"
d2692 v0
  = case coe v0 of
        C573 v1 v2 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2696 = "Algebra.Structures.IsDistributiveLattice._.absorptive"
d2696 v0 = coe d2552 (coe d2690 v0)
name2698
  = "Algebra.Structures.IsDistributiveLattice._.isEquivalence"
d2698 v0 = coe d2538 (coe d2690 v0)
name2700 = "Algebra.Structures.IsDistributiveLattice._.refl"
d2700 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d2538 (coe d2690 v0))
name2702 = "Algebra.Structures.IsDistributiveLattice._.reflexive"
d2702 v0 v1 v2 v3 v4 v5 v6 = du2702 v6
du2702 v0 = coe du2558 (coe d2690 v0)
name2704 = "Algebra.Structures.IsDistributiveLattice._.sym"
d2704 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d2538 (coe d2690 v0))
name2706 = "Algebra.Structures.IsDistributiveLattice._.trans"
d2706 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d2538 (coe d2690 v0))
name2708 = "Algebra.Structures.IsDistributiveLattice._.\8743-assoc"
d2708 v0 = coe d2548 (coe d2690 v0)
name2710 = "Algebra.Structures.IsDistributiveLattice._.\8743-comm"
d2710 v0 = coe d2546 (coe d2690 v0)
name2712 = "Algebra.Structures.IsDistributiveLattice._.\8743-cong"
d2712 v0 = coe d2550 (coe d2690 v0)
name2714 = "Algebra.Structures.IsDistributiveLattice._.\8744-assoc"
d2714 v0 = coe d2542 (coe d2690 v0)
name2716 = "Algebra.Structures.IsDistributiveLattice._.\8744-comm"
d2716 v0 = coe d2540 (coe d2690 v0)
name2718 = "Algebra.Structures.IsDistributiveLattice._.\8744-cong"
d2718 v0 = coe d2544 (coe d2690 v0)
name2738 = "Algebra.Structures.IsBooleanAlgebra"
d2738 a0 a1 a2 a3 a4 a5 a6 a7 a8 = ()

data T2738 a0 a1 a2 a3 = C605 a0 a1 a2 a3
name2794 = "Algebra.Structures._.RightInverse"
d2794 = erased
name2862
  = "Algebra.Structures.IsBooleanAlgebra.isDistributiveLattice"
d2862 v0
  = case coe v0 of
        C605 v1 v2 v3 v4 -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2864
  = "Algebra.Structures.IsBooleanAlgebra.\8744-complement\691"
d2864 v0
  = case coe v0 of
        C605 v1 v2 v3 v4 -> coe v2
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2866
  = "Algebra.Structures.IsBooleanAlgebra.\8743-complement\691"
d2866 v0
  = case coe v0 of
        C605 v1 v2 v3 v4 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2868 = "Algebra.Structures.IsBooleanAlgebra.\172-cong"
d2868 v0
  = case coe v0 of
        C605 v1 v2 v3 v4 -> coe v4
        _ -> coe MAlonzo.RTE.mazUnreachableError
name2872 = "Algebra.Structures.IsBooleanAlgebra._.absorptive"
d2872 v0 = coe d2552 (coe d2690 (coe d2862 v0))
name2874 = "Algebra.Structures.IsBooleanAlgebra._.isEquivalence"
d2874 v0 = coe d2538 (coe d2690 (coe d2862 v0))
name2876 = "Algebra.Structures.IsBooleanAlgebra._.isLattice"
d2876 v0 = coe d2690 (coe d2862 v0)
name2878 = "Algebra.Structures.IsBooleanAlgebra._.refl"
d2878 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d516
      (coe d2538 (coe d2690 (coe d2862 v0)))
name2880 = "Algebra.Structures.IsBooleanAlgebra._.reflexive"
d2880 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du2880 v9
du2880 v0 = coe du2702 (coe d2862 v0)
name2882 = "Algebra.Structures.IsBooleanAlgebra._.sym"
d2882 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d518
      (coe d2538 (coe d2690 (coe d2862 v0)))
name2884 = "Algebra.Structures.IsBooleanAlgebra._.trans"
d2884 v0
  = coe MAlonzo.Code.Relation.Binary.Core.d520
      (coe d2538 (coe d2690 (coe d2862 v0)))
name2886 = "Algebra.Structures.IsBooleanAlgebra._.\8743-assoc"
d2886 v0 = coe d2548 (coe d2690 (coe d2862 v0))
name2888 = "Algebra.Structures.IsBooleanAlgebra._.\8743-comm"
d2888 v0 = coe d2546 (coe d2690 (coe d2862 v0))
name2890 = "Algebra.Structures.IsBooleanAlgebra._.\8743-cong"
d2890 v0 = coe d2550 (coe d2690 (coe d2862 v0))
name2892 = "Algebra.Structures.IsBooleanAlgebra._.\8744-assoc"
d2892 v0 = coe d2542 (coe d2690 (coe d2862 v0))
name2894 = "Algebra.Structures.IsBooleanAlgebra._.\8744-comm"
d2894 v0 = coe d2540 (coe d2690 (coe d2862 v0))
name2896 = "Algebra.Structures.IsBooleanAlgebra._.\8744-cong"
d2896 v0 = coe d2544 (coe d2690 (coe d2862 v0))
name2898
  = "Algebra.Structures.IsBooleanAlgebra._.\8744-\8743-distrib\691"
d2898 v0 = coe d2692 (coe d2862 v0)