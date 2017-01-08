{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Data.List where
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
import qualified MAlonzo.Code.Category.Monad
import qualified MAlonzo.Code.Category.Monad.Indexed
import qualified MAlonzo.Code.Data.Bool.Base
import qualified MAlonzo.Code.Data.List.Base
import qualified MAlonzo.Code.Data.Maybe.Base
import qualified MAlonzo.Code.Data.Nat
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Data.Sum
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified
       MAlonzo.Code.Relation.Binary.PropositionalEquality.Core
name6 = "Data.List.monoid"
d6 v0 v1 = du6
du6
  = coe MAlonzo.Code.Algebra.C37 erased erased
      (coe MAlonzo.Code.Data.List.Base.d18 erased erased)
      (coe [])
      (coe MAlonzo.Code.Algebra.Structures.C49
         (coe MAlonzo.Code.Algebra.Structures.C25
            MAlonzo.Code.Relation.Binary.PropositionalEquality.Core.du50
            erased
            erased)
         (coe MAlonzo.Code.Data.Product.C30 erased erased))
name62 = "Data.List._.identity"
d62 = erased
name68 = "Data.List._.assoc"
d68 = erased
name86 = "Data.List.monad"
d86 v0 = du86
du86
  = coe MAlonzo.Code.Category.Monad.Indexed.C1
      (\ v0 v1 v2 -> coe (:) v2 (coe []))
      (\ v0 v1 v2 v3 v4 v5 v6 ->
         coe MAlonzo.Code.Data.List.Base.du184
           (coe MAlonzo.Code.Data.List.Base.du56 v6 v5))
name96 = "Data.List.monadZero"
d96 v0 = du96
du96
  = coe MAlonzo.Code.Category.Monad.Indexed.C183 du86
      (\ v0 v1 v2 -> coe [])
name100 = "Data.List.monadPlus"
d100 v0 = du100
du100
  = coe MAlonzo.Code.Category.Monad.Indexed.C197 du96
      (\ v0 v1 -> coe MAlonzo.Code.Data.List.Base.d18 erased)
name114 = "Data.List.Monadic._._<$>_"
d114 v0 v1 v2 = du114 v2
du114 v0 = coe MAlonzo.Code.Category.Monad.du46 v0
name130 = "Data.List.Monadic._._\8859_"
d130 v0 v1 v2 = du130 v2
du130 v0 = coe MAlonzo.Code.Category.Monad.du62 v0
name148 = "Data.List.Monadic.sequence"
d148 v0 v1 v2 v3 v4 = du148 v2 v3 v4
du148 v0 v1 v2
  = case coe v2 of
        [] -> coe MAlonzo.Code.Category.Monad.Indexed.d46 v0 erased erased
                (coe [])
        (:) v3 v4 -> coe du130 v0 erased erased erased erased erased
                       (coe du114 v0 erased erased v1 () (coe (:)) v3)
                       (coe du148 v0 v1 v4)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name160 = "Data.List.Monadic.mapM"
d160 v0 v1 v2 v3 v4 v5 v6 = du160 v2 v5 v6
du160 v0 v1 v2
  = coe MAlonzo.Code.Function.d38 erased erased erased erased erased
      erased
      (\ v3 -> coe d148 erased erased v0 v1)
      (coe MAlonzo.Code.Data.List.Base.d56 erased erased erased erased
         v2)