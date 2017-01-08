{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Data.Maybe where
import MAlonzo.RTE (coe, erased)
import qualified MAlonzo.RTE
import qualified Data.Text
import qualified MAlonzo.Code.Category.Functor
import qualified MAlonzo.Code.Category.Monad
import qualified MAlonzo.Code.Category.Monad.Identity
import qualified MAlonzo.Code.Category.Monad.Indexed
import qualified MAlonzo.Code.Data.Maybe.Base
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.Core
import qualified MAlonzo.Code.Relation.Nullary
import qualified MAlonzo.Code.Relation.Nullary.Decidable
import qualified MAlonzo.Code.Relation.Unary
name6 = "Data.Maybe.functor"
d6 v0 = du6
du6
  = coe MAlonzo.Code.Category.Functor.C1
      (coe MAlonzo.Code.Data.Maybe.Base.d106 erased erased)
name14 = "Data.Maybe.monadT"
d14 v0 v1 v2 = du14 v2
du14 v0
  = coe MAlonzo.Code.Category.Monad.Indexed.C1
      (\ v1 v2 ->
         coe MAlonzo.Code.Function.d38 erased erased erased erased erased
           erased
           (\ v3 ->
              coe MAlonzo.Code.Category.Monad.Indexed.d46 v0 erased erased)
           (coe Just))
      (\ v1 v2 v3 v4 v5 v6 v7 ->
         coe MAlonzo.Code.Category.Monad.Indexed.d58 v0 erased erased erased
           erased
           erased
           v6
           (coe MAlonzo.Code.Data.Maybe.Base.d56 erased erased erased erased
              v7
              (coe MAlonzo.Code.Category.Monad.Indexed.d46 v0 erased erased
                 (coe Nothing))))
name64 = "Data.Maybe.monad"
d64 v0 = du64
du64 = coe du14 MAlonzo.Code.Category.Monad.Identity.du14
name68 = "Data.Maybe.monadZero"
d68 v0 = du68
du68
  = coe MAlonzo.Code.Category.Monad.Indexed.C183 du64
      (\ v0 v1 v2 -> coe Nothing)
name72 = "Data.Maybe.monadPlus"
d72 v0 = du72
du72
  = coe MAlonzo.Code.Category.Monad.Indexed.C197 du68
      (\ v0 v1 -> coe d82 erased)
name82 = "Data.Maybe._._\8739_"
d82 v0 v1 v2 v3 = du82 v2 v3
du82 v0 v1
  = case coe v0 of
        Just v2 -> coe Just v2
        Nothing -> coe v1
        _ -> coe MAlonzo.RTE.mazUnreachableError
name98 = "Data.Maybe.Eq"
d98 a0 a1 a2 a3 a4 a5 = ()

data T98 a0 a1 a2 = C114 a0 a1 a2
                  | C116
name130 = "Data.Maybe.drop-just"
d130 v0 v1 v2 v3 v4 v5 v6 = du130 v6
du130 v0
  = case coe v0 of
        C114 v1 v2 v3 -> coe v3
        _ -> coe MAlonzo.RTE.mazUnreachableError
name138 = "Data.Maybe.setoid"
d138 v0 v1 v2 = du138 v2
du138 v0
  = coe MAlonzo.Code.Relation.Binary.C85 erased erased
      (coe MAlonzo.Code.Relation.Binary.Core.C605
         (coe d172 erased erased v0)
         (coe d180 erased erased v0)
         (coe d190 erased erased v0))
name168 = "Data.Maybe._._\8776_"
d168 = erased
name172 = "Data.Maybe._.refl"
d172 v0 v1 v2 v3 = du172 v2 v3
du172 v0 v1
  = case coe v1 of
        Just v2 -> coe C114 v2 v2
                     (coe MAlonzo.Code.Relation.Binary.Core.d516
                        (coe MAlonzo.Code.Relation.Binary.d136 v0)
                        v2)
        Nothing -> coe C116
        _ -> coe MAlonzo.RTE.mazUnreachableError
name180 = "Data.Maybe._.sym"
d180 v0 v1 v2 v3 v4 v5 = du180 v2 v5
du180 v0 v1
  = case coe v1 of
        C114 v2 v3 v4 -> coe C114 v3 v2
                           (coe MAlonzo.Code.Relation.Binary.Core.d518
                              (coe MAlonzo.Code.Relation.Binary.d136 v0)
                              v2
                              v3
                              v4)
        C116 -> coe C116
        _ -> coe MAlonzo.RTE.mazUnreachableError
name190 = "Data.Maybe._.trans"
d190 v0 v1 v2 v3 v4 v5 v6 v7 = du190 v2 v6 v7
du190 v0 v1 v2
  = case coe v1 of
        C114 v3 v4 v5 -> case coe v2 of
                             C114 v6 v7 v8 -> coe C114 v3 v7
                                                (coe MAlonzo.Code.Relation.Binary.Core.d520
                                                   (coe MAlonzo.Code.Relation.Binary.d136 v0)
                                                   v3
                                                   v4
                                                   v7
                                                   v5
                                                   v8)
                             _ -> coe MAlonzo.RTE.mazUnreachableError
        C116 -> coe seq v2 (coe C116)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name200 = "Data.Maybe.decSetoid"
d200 v0 v1 v2 = du200 v2
du200 v0
  = coe MAlonzo.Code.Relation.Binary.C189 erased erased
      (coe MAlonzo.Code.Relation.Binary.C175
         (coe MAlonzo.Code.Relation.Binary.d136
            (coe du138
               (coe MAlonzo.Code.Relation.Binary.C85 erased erased
                  (coe MAlonzo.Code.Relation.Binary.d182
                     (coe MAlonzo.Code.Relation.Binary.d216 v0)))))
         (coe d208 erased erased v0))
name208 = "Data.Maybe._._\8799_"
d208 v0 v1 v2 v3 v4 = du208 v2 v3 v4
du208 v0 v1 v2
  = case coe v1 of
        Just v3 -> case coe v2 of
                       Just v4 -> let v5
                                        = coe MAlonzo.Code.Relation.Binary.d184
                                            (coe MAlonzo.Code.Relation.Binary.d216 v0)
                                            v3
                                            v4
                                    in
                                    case coe v5 of
                                        MAlonzo.Code.Relation.Nullary.C22 v6 -> coe
                                                                                  MAlonzo.Code.Relation.Nullary.C22
                                                                                  (coe C114 v3 v4
                                                                                     v6)
                                        MAlonzo.Code.Relation.Nullary.C26 v6 -> coe
                                                                                  MAlonzo.Code.Relation.Nullary.C26
                                                                                  (coe
                                                                                     MAlonzo.Code.Function.d38
                                                                                     erased
                                                                                     erased
                                                                                     erased
                                                                                     erased
                                                                                     erased
                                                                                     erased
                                                                                     (\ v7 -> v6)
                                                                                     (coe d130
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased
                                                                                        erased))
                                        _ -> coe MAlonzo.RTE.mazUnreachableError
                       Nothing -> coe MAlonzo.Code.Relation.Nullary.C26 erased
                       _ -> coe MAlonzo.RTE.mazUnreachableError
        Nothing -> case coe v2 of
                       Just v3 -> coe MAlonzo.Code.Relation.Nullary.C26 erased
                       Nothing -> coe MAlonzo.Code.Relation.Nullary.C22 (coe C116)
                       _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name242 = "Data.Maybe.anyDec"
d242 v0 v1 v2 v3 v4 v5 = du242 v3 v4 v5
du242 v0 v1 v2
  = case coe v2 of
        Just v3 -> coe MAlonzo.Code.Relation.Nullary.Decidable.du98
                     (coe v0 v3)
                     erased
                     (coe MAlonzo.Code.Data.Maybe.Base.C132 v3)
                     (\ v4 ->
                        case coe v4 of
                            MAlonzo.Code.Data.Maybe.Base.C132 v5 v6 -> coe v6
                            _ -> MAlonzo.RTE.mazUnreachableError)
                     (coe v1 v3)
        Nothing -> coe MAlonzo.Code.Relation.Nullary.C26 erased
        _ -> coe MAlonzo.RTE.mazUnreachableError
name262 = "Data.Maybe.allDec"
d262 v0 v1 v2 v3 v4 v5 = du262 v3 v4 v5
du262 v0 v1 v2
  = case coe v2 of
        Just v3 -> coe MAlonzo.Code.Relation.Nullary.Decidable.du98
                     (coe v0 v3)
                     erased
                     (coe MAlonzo.Code.Data.Maybe.Base.C156 v3)
                     (\ v4 ->
                        case coe v4 of
                            MAlonzo.Code.Data.Maybe.Base.C156 v5 v6 -> coe v6
                            _ -> MAlonzo.RTE.mazUnreachableError)
                     (coe v1 v3)
        Nothing -> coe MAlonzo.Code.Relation.Nullary.C22
                     (coe MAlonzo.Code.Data.Maybe.Base.C158)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name933 = "Data.Maybe._..absurdlambda"
d933 = erased
name1007 = "Data.Maybe._..absurdlambda"
d1007 = erased
name1111 = "Data.Maybe..absurdlambda"
d1111 = erased