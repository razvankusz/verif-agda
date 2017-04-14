{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.MonoidSolver where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.AlgebraStructures
import qualified MAlonzo.Code.Data.Fin
import qualified MAlonzo.Code.Data.List
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Vec
import qualified MAlonzo.Code.Data.Vec.NZ45Zary
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Relation.Binary.Reflection
name10 = "MonoidSolver.Expr"
d10 a0 a1 a2 a3 = ()

data T10 a0 a1 = C14 a0 a1
               | C16 a0
               | C18
name22 = "MonoidSolver.\10214_\10215"
d22 v0 v1 v2 v3 v4 v5 = du22 v2 v4 v5
du22 v0 v1 v2
  = case coe v1 of
        C14 v3 v4 -> coe du34 v0 (coe du22 v0 v3 v2) (coe du22 v0 v4 v2)
        C16 v3 -> coe MAlonzo.Code.Data.Vec.du696 v3 v2
        C18 -> coe du44 v0
        _ -> coe MAlonzo.RTE.mazUnreachableError
name34 = "MonoidSolver._._\8729_"
d34 v0 v1 v2 v3 v4 v5 v6 = du34 v2
du34 v0 = coe MAlonzo.Code.AlgebraStructures.d36 v0
name44 = "MonoidSolver._.\949"
d44 v0 v1 v2 v3 v4 = du44 v2
du44 v0 = coe MAlonzo.Code.AlgebraStructures.d34 v0
name48 = "MonoidSolver.flatten"
d48 v0 v1 v2 v3 v4 v5 = du48 v4 v5
du48 v0 v1
  = case coe v0 of
        C14 v2 v3 -> coe MAlonzo.Code.Data.List.Base.du18 (coe du48 v2 v1)
                       (coe du48 v3 v1)
        C16 v2 -> coe (:) (coe MAlonzo.Code.Data.Vec.du696 v2 v1) (coe [])
        C18 -> coe []
        _ -> coe MAlonzo.RTE.mazUnreachableError
name62 = "MonoidSolver.sum"
d62 v0 v1 v2 = du62 v2
du62 v0
  = coe MAlonzo.Code.Data.List.Base.d144 erased erased erased erased
      (coe MAlonzo.Code.AlgebraStructures.d36 v0)
      (coe MAlonzo.Code.AlgebraStructures.d34 v0)
name66 = "MonoidSolver.\10214_\8659\10215"
d66 v0 v1 v2 v3 v4 v5 = du66 v2 v4 v5
du66 v0 v1 v2 = coe du62 v0 (coe du48 v1 v2)
name76 = "MonoidSolver.sum-lemma"
d76 = erased
name90 = "MonoidSolver._._\8729_"
d90 v0 v1 v2 v3 v4 v5 = du90 v2
du90 v0 = coe MAlonzo.Code.AlgebraStructures.d36 v0
name92 = "MonoidSolver._.\8729-assoc"
d92 = erased
name102 = "MonoidSolver.correct"
d102 = erased
name114 = "MonoidSolver._._\8729_"
d114 v0 v1 v2 v3 v4 v5 v6 = du114 v2
du114 v0 = coe MAlonzo.Code.AlgebraStructures.d36 v0
name128 = "MonoidSolver._._\8860_"
d128 v0 v1 v2 = du128
du128
  = coe MAlonzo.Code.Relation.Binary.Reflection.d138 erased erased
      erased
      erased
      erased
      erased
      erased
      erased
      erased
      erased
name134 = "MonoidSolver._.solve"
d134 v0 v1 v2 = du134 v1 v2
du134 v0 v1
  = coe MAlonzo.Code.Relation.Binary.Reflection.d110 erased erased
      erased
      erased
      erased
      (coe MAlonzo.Code.Relation.Binary.PropositionalEquality.du112 v0)
      (\ v2 -> coe C16)
      (coe d22 erased erased v1)
      (coe d66 erased erased v1)
      erased
name138 = "MonoidSolver.assoc-lemma0"
d138 = erased
name148 = "MonoidSolver.assoc-lemma-5v"
d148 = erased
name160 = "MonoidSolver.assoc-lemma-7"
d160 = erased