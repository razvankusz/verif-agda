{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Algebra.RingSolver where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Text
import qualified MAlonzo.Code.Algebra
import qualified MAlonzo.Code.Algebra.FunctionProperties
import qualified MAlonzo.Code.Algebra.Morphism
import qualified MAlonzo.Code.Algebra.Operations
import qualified
       MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing
import qualified MAlonzo.Code.Algebra.RingSolver.Lemmas
import qualified MAlonzo.Code.Data.Empty
import qualified MAlonzo.Code.Data.Fin
import qualified MAlonzo.Code.Data.Nat.Base
import qualified MAlonzo.Code.Data.Product
import qualified MAlonzo.Code.Data.Vec
import qualified MAlonzo.Code.Function
import qualified MAlonzo.Code.Level
import qualified MAlonzo.Code.Relation.Binary
import qualified MAlonzo.Code.Relation.Binary.EqReasoning
import qualified MAlonzo.Code.Relation.Binary.PreorderReasoning
import qualified MAlonzo.Code.Relation.Binary.PropositionalEquality
import qualified MAlonzo.Code.Relation.Binary.Reflection
import qualified MAlonzo.Code.Relation.Nullary
name20 = "Algebra.RingSolver._.lemma\8320"
d20 v0 v1 v2 v3 v4 v5 v6 = du20 v4
du20 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d176 erased erased
      erased
      erased
      v0
      erased
name22 = "Algebra.RingSolver._.lemma\8321"
d22 v0 v1 v2 v3 v4 v5 v6 = du22 v4
du22 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d196 erased erased
      erased
      erased
      v0
      erased
name24 = "Algebra.RingSolver._.lemma\8322"
d24 v0 v1 v2 v3 v4 v5 v6 = du24 v4
du24 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d216 erased erased
      erased
      erased
      v0
      erased
name26 = "Algebra.RingSolver._.lemma\8323"
d26 v0 v1 v2 v3 v4 v5 v6 = du26 v4
du26 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d240 erased erased
      erased
      erased
      v0
      erased
name28 = "Algebra.RingSolver._.lemma\8324"
d28 v0 v1 v2 v3 v4 v5 v6 = du28 v4
du28 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d260 erased erased
      erased
      erased
      v0
      erased
name30 = "Algebra.RingSolver._.lemma\8325"
d30 v0 v1 v2 v3 v4 v5 v6 = du30 v4
du30 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d284 erased erased
      erased
      erased
      v0
      erased
name32 = "Algebra.RingSolver._.lemma\8326"
d32 v0 v1 v2 v3 v4 v5 v6 = du32 v4
du32 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d292 erased erased
      erased
      erased
      v0
      erased
name34 = "Algebra.RingSolver._.lemma\8327"
d34 v0 v1 v2 v3 v4 v5 v6 = du34 v4
du34 v0
  = coe MAlonzo.Code.Algebra.RingSolver.Lemmas.d300 erased erased
      erased
      erased
      v0
      erased
name38 = "Algebra.RingSolver.C._*_"
d38 v0 v1 v2 v3 v4 v5 v6 = du38 v3
du38 v0 = coe MAlonzo.Code.Algebra.d964 v0
name40 = "Algebra.RingSolver.C._+_"
d40 v0 v1 v2 v3 v4 v5 v6 = du40 v3
du40 v0 = coe MAlonzo.Code.Algebra.d962 v0
name42 = "Algebra.RingSolver.C.-_"
d42 v0 v1 v2 v3 v4 v5 v6 = du42 v3
du42 v0 = coe MAlonzo.Code.Algebra.d966 v0
name44 = "Algebra.RingSolver.C.0#"
d44 v0 v1 v2 v3 v4 v5 v6 = du44 v3
du44 v0 = coe MAlonzo.Code.Algebra.d968 v0
name46 = "Algebra.RingSolver.C.1#"
d46 v0 v1 v2 v3 v4 v5 v6 = du46 v3
du46 v0 = coe MAlonzo.Code.Algebra.d970 v0
name48 = "Algebra.RingSolver.C.Carrier"
d48 = erased
name52 = "Algebra.RingSolver._._*_"
d52 v0 v1 v2 v3 v4 v5 v6 = du52 v4
du52 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v0
name54 = "Algebra.RingSolver._._+_"
d54 v0 v1 v2 v3 v4 v5 v6 = du54 v4
du54 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v0
name56 = "Algebra.RingSolver._._\8776_"
d56 = erased
name64 = "Algebra.RingSolver._.\8729-cong"
d64 v0 v1 v2 v3 v4 v5 v6 = du64 v4
du64 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du182
      v0
name84 = "Algebra.RingSolver._.\8729-cong"
d84 v0 v1 v2 v3 v4 v5 v6 = du84 v4
du84 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du196
      v0
name86 = "Algebra.RingSolver._.identity"
d86 v0 v1 v2 v3 v4 v5 v6 = du86 v4
du86 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du198
      v0
name98 = "Algebra.RingSolver._.-_"
d98 v0 v1 v2 v3 v4 v5 v6 = du98 v4
du98 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v0
name104 = "Algebra.RingSolver._.-\8255cong"
d104 v0 v1 v2 v3 v4 v5 v6 = du104 v4
du104 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d62
      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d174 v0)
name106 = "Algebra.RingSolver._.0#"
d106 v0 v1 v2 v3 v4 v5 v6 = du106 v4
du106 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v0
name108 = "Algebra.RingSolver._.1#"
d108 v0 v1 v2 v3 v4 v5 v6 = du108 v4
du108 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d172 v0
name110 = "Algebra.RingSolver._.Carrier"
d110 = erased
name136 = "Algebra.RingSolver._.refl"
d136 v0 v1 v2 v3 v4 v5 v6 = du136 v4
du136 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du230
      v0
name140 = "Algebra.RingSolver._.semiring"
d140 v0 v1 v2 v3 v4 v5 v6 = du140 v4
du140 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du258
      v0
name142 = "Algebra.RingSolver._.setoid"
d142 v0 v1 v2 v3 v4 v5 v6 = du142 v4
du142 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du260
      v0
name144 = "Algebra.RingSolver._.sym"
d144 v0 v1 v2 v3 v4 v5 v6 = du144 v4
du144 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du234
      v0
name146 = "Algebra.RingSolver._.trans"
d146 v0 v1 v2 v3 v4 v5 v6 = du146 v4
du146 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du236
      v0
name148 = "Algebra.RingSolver._.zero"
d148 v0 v1 v2 v3 v4 v5 v6 = du148 v4
du148 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.du238
      v0
name198 = "Algebra.RingSolver._.Op\8322"
d198 = erased
name202 = "Algebra.RingSolver._.*-homo"
d202 v0 v1 v2 v3 v4 v5 v6 = du202 v5
du202 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d554 v0
name204 = "Algebra.RingSolver._.+-homo"
d204 v0 v1 v2 v3 v4 v5 v6 = du204 v5
du204 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d552 v0
name206 = "Algebra.RingSolver._.-\8255homo"
d206 v0 v1 v2 v3 v4 v5 v6 = du206 v5
du206 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d556 v0
name208 = "Algebra.RingSolver._.0-homo"
d208 v0 v1 v2 v3 v4 v5 v6 = du208 v5
du208 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d558 v0
name210 = "Algebra.RingSolver._.1-homo"
d210 v0 v1 v2 v3 v4 v5 v6 = du210 v5
du210 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d560 v0
name212 = "Algebra.RingSolver._.\10214_\10215"
d212 v0 v1 v2 v3 v4 v5 v6 = du212 v5
du212 v0
  = coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d550 v0
name216 = "Algebra.RingSolver._._^_"
d216 v0 v1 v2 v3 v4 v5 v6 = du216 v4
du216 v0
  = coe MAlonzo.Code.Algebra.Operations.d130 erased erased
      (coe du140 v0)
name224 = "Algebra.RingSolver._.^-cong"
d224 v0 v1 v2 v3 v4 v5 v6 = du224 v4
du224 v0
  = coe MAlonzo.Code.Algebra.Operations.d260 erased erased
      (coe du140 v0)
name244 = "Algebra.RingSolver._._\8718"
d244 v0 v1 v2 v3 v4 v5 v6 = du244 v4
du244 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.d38 erased erased
      (coe du142 v0)
name246 = "Algebra.RingSolver._._\8764\10216_\10217_"
d246 v0 v1 v2 v3 v4 v5 v6 = du246 v4
du246 v0
  = coe MAlonzo.Code.Relation.Binary.EqReasoning.du40 (coe du142 v0)
name260 = "Algebra.RingSolver.Op"
d260 a0 a1 a2 a3 a4 a5 a6 = ()

data T260 = C262
          | C264
name268 = "Algebra.RingSolver.Polynomial"
d268 a0 a1 a2 a3 a4 a5 a6 a7 = ()

data T268 a0 a1 a2 = C278 a0 a1 a2
                   | C282 a0
                   | C286 a0
                   | C292 a0 a1
                   | C296 a0
name300 = "Algebra.RingSolver._:+_"
d300 v0 v1 v2 = du300
du300 = coe C278 (coe C262)
name304 = "Algebra.RingSolver._:*_"
d304 v0 v1 v2 = du304
du304 = coe C278 (coe C264)
name308 = "Algebra.RingSolver._:-_"
d308 v0 v1 v2 v3 v4 = du308 v3 v4
du308 v0 v1 = coe C278 (coe C262) v0 (coe C296 v1)
name314 = "Algebra.RingSolver.sem"
d314 v0 v1 v2 v3 v4 v5 v6 v7 = du314 v4 v7
du314 v0 v1
  = case coe v1 of
        C262 -> coe du54 v0
        C264 -> coe du52 v0
        _ -> coe MAlonzo.RTE.mazUnreachableError
name318 = "Algebra.RingSolver.\10214_\10215"
d318 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 = du318 v4 v5 v8 v9
du318 v0 v1 v2 v3
  = case coe v2 of
        C278 v4 v5 v6 -> coe MAlonzo.Code.Function.du176
                           (coe du318 v0 v1 v5 v3)
                           (coe du314 v0 v4)
                           (coe du318 v0 v1 v6 v3)
        C282 v4 -> coe du212 v1 v4
        C286 v4 -> coe MAlonzo.Code.Data.Vec.du696 v4 v3
        C292 v4 v5 -> coe du216 v0 (coe du318 v0 v1 v4 v3) v5
        C296 v4 -> coe du98 v0 (coe du318 v0 v1 v4 v3)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name346 = "Algebra.RingSolver.HNF"
d346 a0 a1 a2 a3 a4 a5 a6 a7 = ()

data T346 a0 a1 a2 = C352 a0
                   | C356 a0 a1 a2
name348 = "Algebra.RingSolver.Normal"
d348 a0 a1 a2 a3 a4 a5 a6 a7 = ()

data T348 a0 a1 = C358 a0
                | C362 a0 a1
name366 = "Algebra.RingSolver.\10214_\10215H"
d366 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v8 of
        C352 v10 -> coe du106 v4
        C356 v10 v11 v12 -> case coe v9 of
                                MAlonzo.Code.Data.Vec.C22 v13 v14 v15 -> coe du54 v4
                                                                           (coe du52 v4
                                                                              (coe d366 v0 v1 v2 v3
                                                                                 v4
                                                                                 v5
                                                                                 v6
                                                                                 v7
                                                                                 v11
                                                                                 (coe
                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                    v7
                                                                                    v14
                                                                                    v15))
                                                                              v14)
                                                                           (coe du370 v0 v1 v2 v3 v4
                                                                              v5
                                                                              v6
                                                                              v12
                                                                              v15)
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name370 = "Algebra.RingSolver.\10214_\10215N"
d370 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du370 v0 v1 v2 v3 v4 v5 v6 v8 v9
du370 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C358 v9 -> coe du212 v5 v9
        C362 v9 v10 -> coe d366 v0 v1 v2 v3 v4 v5 v6 v9 v10 v8
        _ -> coe MAlonzo.RTE.mazUnreachableError
name386 = "Algebra.RingSolver._\8776H_"
d386 a0 a1 a2 a3 a4 a5 a6 a7 a8 a9 = ()

data T386 a0 a1 a2 a3 a4 a5 a6 = C396 a0
                               | C408 a0 a1 a2 a3 a4 a5 a6
name390 = "Algebra.RingSolver._\8776N_"
d390 a0 a1 a2 a3 a4 a5 a6 a7 a8 a9 = ()

data T390 a0 a1 a2 a3 = C414 a0 a1 a2
                      | C422 a0 a1 a2 a3
name426 = "Algebra.RingSolver._\8799H_"
d426 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du426 v0 v1 v2 v3 v4 v5 v6 v8 v9
du426 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C352 v9 -> case coe v8 of
                       C352 v10 -> coe MAlonzo.Code.Relation.Nullary.C22 (coe C396 v9)
                       C356 v10 v11 v12 -> coe MAlonzo.Code.Relation.Nullary.C26 erased
                       _ -> coe MAlonzo.RTE.mazUnreachableError
        C356 v9 v10 v11 -> case coe v8 of
                               C352 v12 -> coe MAlonzo.Code.Relation.Nullary.C26 erased
                               C356 v12 v13 v14 -> let v15
                                                         = coe du426 v0 v1 v2 v3 v4 v5 v6 v10 v13
                                                     in
                                                     let v16
                                                           = coe du430 v0 v1 v2 v3 v4 v5 v6 v11 v14
                                                       in
                                                       let v17
                                                             = case coe v16 of
                                                                   MAlonzo.Code.Relation.Nullary.C26
                                                                     v17 -> coe
                                                                              MAlonzo.Code.Relation.Nullary.C26
                                                                              erased
                                                                   _ -> coe
                                                                          MAlonzo.RTE.mazUnreachableError
                                                         in
                                                         case coe v15 of
                                                             MAlonzo.Code.Relation.Nullary.C22
                                                               v18 -> case coe v16 of
                                                                          MAlonzo.Code.Relation.Nullary.C22
                                                                            v19 -> coe
                                                                                     MAlonzo.Code.Relation.Nullary.C22
                                                                                     (coe C408 v9
                                                                                        v10
                                                                                        v13
                                                                                        v11
                                                                                        v14
                                                                                        v18
                                                                                        v19)
                                                                          _ -> coe v17
                                                             MAlonzo.Code.Relation.Nullary.C26
                                                               v18 -> let v19
                                                                            = coe
                                                                                MAlonzo.Code.Relation.Nullary.C26
                                                                                erased
                                                                        in
                                                                        case coe v16 of
                                                                            MAlonzo.Code.Relation.Nullary.C26
                                                                              v20 -> coe
                                                                                       MAlonzo.Code.Relation.Nullary.C26
                                                                                       erased
                                                                            _ -> coe v19
                                                             _ -> coe v17
                               _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name430 = "Algebra.RingSolver._\8799N_"
d430 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du430 v0 v1 v2 v3 v4 v5 v6 v8 v9
du430 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C358 v9 -> case coe v8 of
                       C358 v10 -> let v11 = coe v6 v9 v10 in
                                     case coe v11 of
                                         MAlonzo.Code.Relation.Nullary.C22 v12 -> coe
                                                                                    MAlonzo.Code.Relation.Nullary.C22
                                                                                    (coe C414 v9 v10
                                                                                       v12)
                                         MAlonzo.Code.Relation.Nullary.C26 v12 -> coe
                                                                                    MAlonzo.Code.Relation.Nullary.C26
                                                                                    erased
                                         _ -> coe MAlonzo.RTE.mazUnreachableError
                       _ -> coe MAlonzo.RTE.mazUnreachableError
        C362 v9 v10 -> case coe v8 of
                           C362 v11 v12 -> let v13 = coe du426 v0 v1 v2 v3 v4 v5 v6 v10 v12 in
                                             case coe v13 of
                                                 MAlonzo.Code.Relation.Nullary.C22 v14 -> coe
                                                                                            MAlonzo.Code.Relation.Nullary.C22
                                                                                            (coe
                                                                                               C422
                                                                                               v9
                                                                                               v10
                                                                                               v12
                                                                                               v14)
                                                 MAlonzo.Code.Relation.Nullary.C26 v14 -> coe
                                                                                            MAlonzo.Code.Relation.Nullary.C26
                                                                                            erased
                                                 _ -> coe MAlonzo.RTE.mazUnreachableError
                           _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name540 = "Algebra.RingSolver.\10214_\10215H-cong"
d540 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = du540 v0 v1 v2 v3 v4 v5 v6 v7 v10 v11
du540 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v8 of
        C396 v10 -> coe du136 v4
                      (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7) v9)
        C408 v10 v11 v12 v13 v14 v15 v16 -> case coe v9 of
                                                MAlonzo.Code.Data.Vec.C22 v17 v18 v19 -> coe
                                                                                           MAlonzo.Code.Function.du176
                                                                                           (coe
                                                                                              MAlonzo.Code.Function.du176
                                                                                              (coe
                                                                                                 du540
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v7
                                                                                                 v15
                                                                                                 (coe
                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                    v7
                                                                                                    v18
                                                                                                    v19))
                                                                                              (coe
                                                                                                 du64
                                                                                                 v4
                                                                                                 (coe
                                                                                                    d366
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v7
                                                                                                    v11
                                                                                                    (coe
                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                       v7
                                                                                                       v18
                                                                                                       v19))
                                                                                                 (coe
                                                                                                    d366
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v7
                                                                                                    v12
                                                                                                    (coe
                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                       v7
                                                                                                       v18
                                                                                                       v19))
                                                                                                 v18
                                                                                                 v18)
                                                                                              (coe
                                                                                                 du136
                                                                                                 v4
                                                                                                 v18))
                                                                                           (coe du84
                                                                                              v4
                                                                                              (coe
                                                                                                 MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                 v4
                                                                                                 (coe
                                                                                                    d366
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v7
                                                                                                    v11
                                                                                                    (coe
                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                       v7
                                                                                                       v18
                                                                                                       v19))
                                                                                                 v18)
                                                                                              (coe
                                                                                                 MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                 v4
                                                                                                 (coe
                                                                                                    d366
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v7
                                                                                                    v12
                                                                                                    (coe
                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                       v7
                                                                                                       v18
                                                                                                       v19))
                                                                                                 v18)
                                                                                              (coe
                                                                                                 du370
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v13
                                                                                                 v19)
                                                                                              (coe
                                                                                                 du370
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v14
                                                                                                 v19))
                                                                                           (coe
                                                                                              du550
                                                                                              v0
                                                                                              v1
                                                                                              v2
                                                                                              v3
                                                                                              v4
                                                                                              v5
                                                                                              v6
                                                                                              v16
                                                                                              v19)
                                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name550 = "Algebra.RingSolver.\10214_\10215N-cong"
d550 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = du550 v0 v1 v2 v3 v4 v5 v6 v10 v11
du550 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C414 v9 v10 v11 -> coe v11
        C422 v9 v10 v11 v12 -> coe du540 v0 v1 v2 v3 v4 v5 v6 v9 v12 v8
        _ -> coe MAlonzo.RTE.mazUnreachableError
name568 = "Algebra.RingSolver.0H"
d568 v0 v1 = du568
du568 = C352
name572 = "Algebra.RingSolver.0N"
d572 v0 v1 v2 v3 v4 v5 v6 v7 = du572 v3 v7
du572 v0 v1
  = case coe v1 of
        0 -> coe C358 (coe du44 v0)
        _ -> let v2
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v1
                       (1 :: Integer)
               in coe C362 v2 (coe C352 v2)
name578 = "Algebra.RingSolver.1H"
d578 v0 v1 v2 v3 v4 v5 v6 v7
  = coe C356 v7 (coe C352 v7) (coe d582 v0 v1 v2 v3 v4 v5 v6 v7)
name582 = "Algebra.RingSolver.1N"
d582 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        0 -> coe C358 (coe du46 v3)
        _ -> let v8
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v7
                       (1 :: Integer)
               in coe C362 v8 (coe d578 v0 v1 v2 v3 v4 v5 v6 v8)
name590 = "Algebra.RingSolver._*x+HN_"
d590 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v8 of
        C352 v10 -> let v11
                          = coe du430 v0 v1 v2 v3 v4 v5 v6 v9 (coe du572 v3 v7)
                      in
                      case coe v11 of
                          MAlonzo.Code.Relation.Nullary.C22 v12 -> coe C352 v7
                          MAlonzo.Code.Relation.Nullary.C26 v12 -> coe C356 v7 (coe C352 v7)
                                                                     v9
                          _ -> coe MAlonzo.RTE.mazUnreachableError
        C356 v10 v11 v12 -> coe C356 v7 (coe C356 v7 v11 v12) v9
        _ -> coe MAlonzo.RTE.mazUnreachableError
name614 = "Algebra.RingSolver._+H_"
d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = let v10
          = case coe v9 of
                C352 v10 -> coe v8
                _ -> coe MAlonzo.RTE.mazUnreachableError
      in
      case coe v8 of
          C352 v11 -> coe v9
          C356 v11 v12 v13 -> case coe v9 of
                                  C352 v14 -> coe C356 v11 v12 v13
                                  C356 v14 v15 v16 -> coe d590 v0 v1 v2 v3 v4 v5 v6 v7
                                                        (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v12 v15)
                                                        (coe du618 v0 v1 v2 v3 v4 v5 v6 v13 v16)
                                  _ -> coe v10
          _ -> coe v10
name618 = "Algebra.RingSolver._+N_"
d618 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du618 v0 v1 v2 v3 v4 v5 v6 v8 v9
du618 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C358 v9 -> case coe v8 of
                       C358 v10 -> coe C358 (coe du40 v3 v9 v10)
                       _ -> coe MAlonzo.RTE.mazUnreachableError
        C362 v9 v10 -> case coe v8 of
                           C362 v11 v12 -> coe C362 v9
                                             (coe d614 v0 v1 v2 v3 v4 v5 v6 v9 v10 v12)
                           _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name642 = "Algebra.RingSolver._*x+H_"
d642 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v9 of
        C352 v10 -> case coe v8 of
                        C352 v11 -> coe C352 v7
                        C356 v11 v12 v13 -> coe C356 v7 (coe C356 v7 v12 v13)
                                              (coe du572 v3 v7)
                        _ -> coe MAlonzo.RTE.mazUnreachableError
        C356 v10 v11 v12 -> coe d590 v0 v1 v2 v3 v4 v5 v6 v7
                              (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11)
                              v12
        _ -> coe MAlonzo.RTE.mazUnreachableError
name656 = "Algebra.RingSolver._*NH_"
d656 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v9 of
        C352 v10 -> coe C352 v7
        C356 v10 v11 v12 -> let v13
                                  = coe du430 v0 v1 v2 v3 v4 v5 v6 v8 (coe du572 v3 v7)
                              in
                              case coe v13 of
                                  MAlonzo.Code.Relation.Nullary.C22 v14 -> coe C352 v7
                                  MAlonzo.Code.Relation.Nullary.C26 v14 -> coe C356 v7
                                                                             (coe d656 v0 v1 v2 v3
                                                                                v4
                                                                                v5
                                                                                v6
                                                                                v7
                                                                                v8
                                                                                v11)
                                                                             (coe du668 v0 v1 v2 v3
                                                                                v4
                                                                                v5
                                                                                v6
                                                                                v8
                                                                                v12)
                                  _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name660 = "Algebra.RingSolver._*HN_"
d660 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v8 of
        C352 v10 -> coe C352 v7
        C356 v10 v11 v12 -> let v13
                                  = coe du430 v0 v1 v2 v3 v4 v5 v6 v9 (coe du572 v3 v7)
                              in
                              case coe v13 of
                                  MAlonzo.Code.Relation.Nullary.C22 v14 -> coe C352 v7
                                  MAlonzo.Code.Relation.Nullary.C26 v14 -> coe C356 v7
                                                                             (coe d660 v0 v1 v2 v3
                                                                                v4
                                                                                v5
                                                                                v6
                                                                                v7
                                                                                v11
                                                                                v9)
                                                                             (coe du668 v0 v1 v2 v3
                                                                                v4
                                                                                v5
                                                                                v6
                                                                                v12
                                                                                v9)
                                  _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name664 = "Algebra.RingSolver._*H_"
d664 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v8 of
        C352 v10 -> coe C352 v7
        C356 v10 v11 v12 -> case coe v9 of
                                C352 v13 -> coe C352 v7
                                C356 v13 v14 v15 -> coe d590 v0 v1 v2 v3 v4 v5 v6 v7
                                                      (coe d642 v0 v1 v2 v3 v4 v5 v6 v7
                                                         (coe d664 v0 v1 v2 v3 v4 v5 v6 v7 v11 v14)
                                                         (coe d614 v0 v1 v2 v3 v4 v5 v6 v7
                                                            (coe d660 v0 v1 v2 v3 v4 v5 v6 v7 v11
                                                               v15)
                                                            (coe d656 v0 v1 v2 v3 v4 v5 v6 v7 v12
                                                               v14)))
                                                      (coe du668 v0 v1 v2 v3 v4 v5 v6 v12 v15)
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name668 = "Algebra.RingSolver._*N_"
d668 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du668 v0 v1 v2 v3 v4 v5 v6 v8 v9
du668 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C358 v9 -> case coe v8 of
                       C358 v10 -> coe C358 (coe du38 v3 v9 v10)
                       _ -> coe MAlonzo.RTE.mazUnreachableError
        C362 v9 v10 -> case coe v8 of
                           C362 v11 v12 -> coe C362 v9
                                             (coe d664 v0 v1 v2 v3 v4 v5 v6 v9 v10 v12)
                           _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name744 = "Algebra.RingSolver._^N_"
d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v9 of
        0 -> coe d582 v0 v1 v2 v3 v4 v5 v6 v7
        _ -> let v10
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v9
                       (1 :: Integer)
               in
               coe du668 v0 v1 v2 v3 v4 v5 v6 v8
                 (coe d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v10)
name754 = "Algebra.RingSolver.-H_"
d754 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = coe d656 v0 v1 v2 v3 v4 v5 v6 v7
      (coe du758 v0 v1 v2 v3 v4 v5 v6 (coe d582 v0 v1 v2 v3 v4 v5 v6 v7))
      v8
name758 = "Algebra.RingSolver.-N_"
d758 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du758 v0 v1 v2 v3 v4 v5 v6 v8
du758 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        C358 v8 -> coe C358 (coe du42 v3 v8)
        C362 v8 v9 -> coe C362 v8 (coe d754 v0 v1 v2 v3 v4 v5 v6 v8 v9)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name768 = "Algebra.RingSolver.normalise-con"
d768 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        0 -> coe C358 v8
        _ -> let v9
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v7
                       (1 :: Integer)
               in
               coe C362 v9
                 (coe d590 v0 v1 v2 v3 v4 v5 v6 v9 (coe C352 v9)
                    (coe d768 v0 v1 v2 v3 v4 v5 v6 v9 v8))
name778 = "Algebra.RingSolver.normalise-var"
d778 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du778 v0 v1 v2 v3 v4 v5 v6 v8
du778 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        MAlonzo.Code.Data.Fin.C8 v8 -> coe C362 v8
                                         (coe C356 v8
                                            (coe C356 v8 (coe C352 v8)
                                               (coe d582 v0 v1 v2 v3 v4 v5 v6 v8))
                                            (coe du572 v3 v8))
        MAlonzo.Code.Data.Fin.C14 v8 v9 -> coe C362 v8
                                             (coe d590 v0 v1 v2 v3 v4 v5 v6 v8 (coe C352 v8)
                                                (coe du778 v0 v1 v2 v3 v4 v5 v6 v9))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name784 = "Algebra.RingSolver.normalise"
d784 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v8 of
        C278 v9 v10 v11 -> case coe v9 of
                               C262 -> coe du618 v0 v1 v2 v3 v4 v5 v6
                                         (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                                         (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                               C264 -> coe du668 v0 v1 v2 v3 v4 v5 v6
                                         (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                                         (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                               _ -> coe MAlonzo.RTE.mazUnreachableError
        C282 v9 -> coe d768 v0 v1 v2 v3 v4 v5 v6 v7 v9
        C286 v9 -> coe du778 v0 v1 v2 v3 v4 v5 v6 v9
        C292 v9 v10 -> coe d744 v0 v1 v2 v3 v4 v5 v6 v7
                         (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v9)
                         v10
        C296 v9 -> coe du758 v0 v1 v2 v3 v4 v5 v6
                     (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v9)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name806 = "Algebra.RingSolver.\10214_\10215\8595"
d806 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = coe du370 v0 v1 v2 v3 v4 v5 v6
      (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v8)
      v9
name811 = "Algebra.RingSolver..absurdlambda"
d811 = erased
name816 = "Algebra.RingSolver.0N-homo"
d816 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du816 v0 v1 v2 v3 v4 v5 v6 v8
du816 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        MAlonzo.Code.Data.Vec.C14 -> coe du208 v5
        MAlonzo.Code.Data.Vec.C22 v8 v9 v10 -> coe du136 v4
                                                 (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                    (coe du572 v3
                                                       (coe
                                                          ((Prelude.+) :: Integer -> Integer -> Integer)
                                                          (1 :: Integer)
                                                          v8))
                                                    (coe MAlonzo.Code.Data.Vec.C22 v8 v9 v10))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name828 = "Algebra.RingSolver.0\8776\10214\&0\10215"
d828 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = coe du144 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
      (coe du106 v4)
      (coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
         (coe du246 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
            (coe du370 v0 v1 v2 v3 v4 v5 v6 (coe du572 v3 v7) v10)
            (coe du106 v4)
            (coe du550 v0 v1 v2 v3 v4 v5 v6 v9 v10)
            (coe du246 v4
               (coe du370 v0 v1 v2 v3 v4 v5 v6 (coe du572 v3 v7) v10)
               (coe du106 v4)
               (coe du106 v4)
               (coe du816 v0 v1 v2 v3 v4 v5 v6 v10)
               (coe du244 v4 (coe du106 v4)))))
name840 = "Algebra.RingSolver.1N-homo"
d840 v0 v1 v2 v3 v4 v5 v6 v7 v8 = du840 v0 v1 v2 v3 v4 v5 v6 v8
du840 v0 v1 v2 v3 v4 v5 v6 v7
  = case coe v7 of
        MAlonzo.Code.Data.Vec.C14 -> coe du210 v5
        MAlonzo.Code.Data.Vec.C22 v8 v9 v10 -> coe
                                                 MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                 (coe du246 v4
                                                    (coe du54 v4 (coe du52 v4 (coe du106 v4) v9)
                                                       (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                          (coe d582 v0 v1 v2 v3 v4 v5 v6 v8)
                                                          v10))
                                                    (coe
                                                       MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                       v4
                                                       (coe du52 v4 (coe du106 v4) v9)
                                                       (coe du108 v4))
                                                    (coe du108 v4)
                                                    (coe MAlonzo.Code.Function.du176
                                                       (coe du136 v4
                                                          (coe du52 v4 (coe du106 v4) v9))
                                                       (coe du84 v4 (coe du52 v4 (coe du106 v4) v9)
                                                          (coe du52 v4 (coe du106 v4) v9)
                                                          (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                             (coe d582 v0 v1 v2 v3 v4 v5 v6 v8)
                                                             v10)
                                                          (coe du108 v4))
                                                       (coe du840 v0 v1 v2 v3 v4 v5 v6 v10))
                                                    (coe du246 v4
                                                       (coe du54 v4 (coe du52 v4 (coe du106 v4) v9)
                                                          (coe du108 v4))
                                                       (coe du108 v4)
                                                       (coe du108 v4)
                                                       (coe du32 v4 (coe du108 v4) v9)
                                                       (coe du244 v4 (coe du108 v4))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name854 = "Algebra.RingSolver.*x+HN\8776*x+"
d854 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = case coe v8 of
        C352 v11 -> case coe v10 of
                        MAlonzo.Code.Data.Vec.C22 v12 v13 v14 -> let v15
                                                                       = coe du430 v0 v1 v2 v3 v4 v5
                                                                           v6
                                                                           v9
                                                                           (coe du572 v3 v7)
                                                                   in
                                                                   case coe v15 of
                                                                       MAlonzo.Code.Relation.Nullary.C22
                                                                         v16 -> coe
                                                                                  MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                                  (coe du246 v4
                                                                                     (coe du106 v4)
                                                                                     (coe du370 v0
                                                                                        v1
                                                                                        v2
                                                                                        v3
                                                                                        v4
                                                                                        v5
                                                                                        v6
                                                                                        v9
                                                                                        v14)
                                                                                     (coe du54 v4
                                                                                        (coe du52 v4
                                                                                           (coe
                                                                                              du106
                                                                                              v4)
                                                                                           v13)
                                                                                        (coe du370
                                                                                           v0
                                                                                           v1
                                                                                           v2
                                                                                           v3
                                                                                           v4
                                                                                           v5
                                                                                           v6
                                                                                           v9
                                                                                           v14))
                                                                                     (coe d828 v0 v1
                                                                                        v2
                                                                                        v3
                                                                                        v4
                                                                                        v5
                                                                                        v6
                                                                                        v7
                                                                                        v9
                                                                                        v16
                                                                                        v14)
                                                                                     (coe du246 v4
                                                                                        (coe du370
                                                                                           v0
                                                                                           v1
                                                                                           v2
                                                                                           v3
                                                                                           v4
                                                                                           v5
                                                                                           v6
                                                                                           v9
                                                                                           v14)
                                                                                        (coe
                                                                                           MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                           v4
                                                                                           (coe
                                                                                              MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                              v4
                                                                                              (coe
                                                                                                 MAlonzo.Code.Algebra.RingSolver.Lemmas.du88
                                                                                                 v4)
                                                                                              v13)
                                                                                           (coe
                                                                                              du370
                                                                                              v0
                                                                                              v1
                                                                                              v2
                                                                                              v3
                                                                                              v4
                                                                                              v5
                                                                                              v6
                                                                                              v9
                                                                                              v14))
                                                                                        (coe du54 v4
                                                                                           (coe du52
                                                                                              v4
                                                                                              (coe
                                                                                                 du106
                                                                                                 v4)
                                                                                              v13)
                                                                                           (coe
                                                                                              du370
                                                                                              v0
                                                                                              v1
                                                                                              v2
                                                                                              v3
                                                                                              v4
                                                                                              v5
                                                                                              v6
                                                                                              v9
                                                                                              v14))
                                                                                        (coe
                                                                                           MAlonzo.Code.Function.du158
                                                                                           (coe
                                                                                              du144
                                                                                              v4
                                                                                              (coe
                                                                                                 MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                                 v4
                                                                                                 (coe
                                                                                                    MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                                    v4
                                                                                                    (coe
                                                                                                       MAlonzo.Code.Algebra.RingSolver.Lemmas.du88
                                                                                                       v4)
                                                                                                    v13)
                                                                                                 (coe
                                                                                                    du370
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v9
                                                                                                    v14))
                                                                                              (coe
                                                                                                 du370
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v9
                                                                                                 v14))
                                                                                           (coe du32
                                                                                              v4
                                                                                              (coe
                                                                                                 du370
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v9
                                                                                                 v14)
                                                                                              v13))
                                                                                        (coe du244
                                                                                           v4
                                                                                           (coe du54
                                                                                              v4
                                                                                              (coe
                                                                                                 du52
                                                                                                 v4
                                                                                                 (coe
                                                                                                    du106
                                                                                                    v4)
                                                                                                 v13)
                                                                                              (coe
                                                                                                 du370
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v9
                                                                                                 v14)))))
                                                                       MAlonzo.Code.Relation.Nullary.C26
                                                                         v16 -> coe du136 v4
                                                                                  (coe d366 v0 v1 v2
                                                                                     v3
                                                                                     v4
                                                                                     v5
                                                                                     v6
                                                                                     v7
                                                                                     (coe C356 v7
                                                                                        (coe C352
                                                                                           v7)
                                                                                        v9)
                                                                                     (coe
                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                        v7
                                                                                        v13
                                                                                        v14))
                                                                       _ -> coe
                                                                              MAlonzo.RTE.mazUnreachableError
                        _ -> coe MAlonzo.RTE.mazUnreachableError
        C356 v11 v12 v13 -> coe du136 v4
                              (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                 (coe d590 v0 v1 v2 v3 v4 v5 v6 v7 (coe C356 v7 v12 v13) v9)
                                 v10)
        _ -> coe MAlonzo.RTE.mazUnreachableError
name898 = "Algebra.RingSolver.\8709*x+HN-homo"
d898 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = let v11 = coe du430 v0 v1 v2 v3 v4 v5 v6 v8 (coe du572 v3 v7) in
      case coe v11 of
          MAlonzo.Code.Relation.Nullary.C22 v12 -> coe d828 v0 v1 v2 v3 v4 v5
                                                     v6
                                                     v7
                                                     v8
                                                     v12
                                                     v10
          MAlonzo.Code.Relation.Nullary.C26 v12 -> coe du32 v4
                                                     (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                                                     v9
          _ -> coe MAlonzo.RTE.mazUnreachableError
name934 = "Algebra.RingSolver.+H-homo"
d934 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = case coe v8 of
        C352 v11 -> coe du144 v4
                      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164 v4
                         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v4)
                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                            (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7) v9)
                            v10))
                      (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                         (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7) v9)
                         v10)
                      (coe MAlonzo.Code.Data.Product.d26 (coe du86 v4)
                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                            (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7) v9)
                            v10))
        C356 v11 v12 v13 -> case coe v9 of
                                C352 v14 -> coe du144 v4
                                              (coe
                                                 MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                 v4
                                                 (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                    (coe d614 v0 v1 v2 v3 v4 v5 v6 v7
                                                       (coe C356 v7 v12 v13)
                                                       (coe C352 v7))
                                                    v10)
                                                 (coe
                                                    MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                    v4))
                                              (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                 (coe d614 v0 v1 v2 v3 v4 v5 v6 v7
                                                    (coe C356 v7 v12 v13)
                                                    (coe C352 v7))
                                                 v10)
                                              (coe MAlonzo.Code.Data.Product.d28 (coe du86 v4)
                                                 (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                    (coe d614 v0 v1 v2 v3 v4 v5 v6 v7
                                                       (coe C356 v7 v12 v13)
                                                       (coe C352 v7))
                                                    v10))
                                C356 v14 v15 v16 -> case coe v10 of
                                                        MAlonzo.Code.Data.Vec.C22 v17 v18 v19 -> coe
                                                                                                   MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                                                   (coe
                                                                                                      du246
                                                                                                      v4
                                                                                                      (coe
                                                                                                         d366
                                                                                                         v0
                                                                                                         v1
                                                                                                         v2
                                                                                                         v3
                                                                                                         v4
                                                                                                         v5
                                                                                                         v6
                                                                                                         v7
                                                                                                         (coe
                                                                                                            d590
                                                                                                            v0
                                                                                                            v1
                                                                                                            v2
                                                                                                            v3
                                                                                                            v4
                                                                                                            v5
                                                                                                            v6
                                                                                                            v7
                                                                                                            (coe
                                                                                                               d614
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v7
                                                                                                               v12
                                                                                                               v15)
                                                                                                            (coe
                                                                                                               du618
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v16))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                                            v7
                                                                                                            v18
                                                                                                            v19))
                                                                                                      (coe
                                                                                                         d366
                                                                                                         v0
                                                                                                         v1
                                                                                                         v2
                                                                                                         v3
                                                                                                         v4
                                                                                                         v5
                                                                                                         v6
                                                                                                         v7
                                                                                                         (coe
                                                                                                            C356
                                                                                                            v7
                                                                                                            (coe
                                                                                                               d614
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v7
                                                                                                               v12
                                                                                                               v15)
                                                                                                            (coe
                                                                                                               du618
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v16))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                                            v7
                                                                                                            v18
                                                                                                            v19))
                                                                                                      (coe
                                                                                                         du54
                                                                                                         v4
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du370
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v19))
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v15
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du370
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v16
                                                                                                               v19)))
                                                                                                      (coe
                                                                                                         d854
                                                                                                         v0
                                                                                                         v1
                                                                                                         v2
                                                                                                         v3
                                                                                                         v4
                                                                                                         v5
                                                                                                         v6
                                                                                                         v7
                                                                                                         (coe
                                                                                                            d614
                                                                                                            v0
                                                                                                            v1
                                                                                                            v2
                                                                                                            v3
                                                                                                            v4
                                                                                                            v5
                                                                                                            v6
                                                                                                            v7
                                                                                                            v12
                                                                                                            v15)
                                                                                                         (coe
                                                                                                            du618
                                                                                                            v0
                                                                                                            v1
                                                                                                            v2
                                                                                                            v3
                                                                                                            v4
                                                                                                            v5
                                                                                                            v6
                                                                                                            v13
                                                                                                            v16)
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                                            v7
                                                                                                            v18
                                                                                                            v19))
                                                                                                      (coe
                                                                                                         du246
                                                                                                         v4
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  (coe
                                                                                                                     d614
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     v15)
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du370
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               (coe
                                                                                                                  du618
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v16)
                                                                                                               v19))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                            v4
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v15
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19)))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v19)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v16
                                                                                                                  v19)))
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v19))
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v15
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v16
                                                                                                                  v19)))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Function.du176
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Function.du176
                                                                                                               (coe
                                                                                                                  d934
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  v15
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               (coe
                                                                                                                  du64
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d614
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        v15)
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  v18
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du136
                                                                                                                  v4
                                                                                                                  v18))
                                                                                                            (coe
                                                                                                               du84
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d614
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        v15)
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  (coe
                                                                                                                     du618
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v16)
                                                                                                                  v19)
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               du944
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v16
                                                                                                               v19))
                                                                                                         (coe
                                                                                                            du246
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19))
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19))
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               du22
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v15
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v19)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v16
                                                                                                                  v19)
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du244
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19))
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v15
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19)))))))
                                                        _ -> coe MAlonzo.RTE.mazUnreachableError
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name944 = "Algebra.RingSolver.+N-homo"
d944 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du944 v0 v1 v2 v3 v4 v5 v6 v8 v9 v10
du944 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v7 of
        C358 v10 -> case coe v8 of
                        C358 v11 -> coe du204 v5 v10 v11
                        _ -> coe MAlonzo.RTE.mazUnreachableError
        C362 v10 v11 -> case coe v8 of
                            C362 v12 v13 -> coe d934 v0 v1 v2 v3 v4 v5 v6 v10 v11 v13 v9
                            _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name947 = "Algebra.RingSolver..absurdlambda"
d947 = erased
name988 = "Algebra.RingSolver.*x+H-homo"
d988 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = let v12
          = case coe v9 of
                C356 v12 v13 v14 -> coe
                                      MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                      (coe du246 v4
                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                            (coe d590 v0 v1 v2 v3 v4 v5 v6 v7
                                               (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13)
                                               v14)
                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                            (coe C356 v7 (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13)
                                               v14)
                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                         (coe du54 v4
                                            (coe du52 v4
                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                  (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                               v10)
                                            (coe du54 v4
                                               (coe du52 v4
                                                  (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                     (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                  v10)
                                               (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)))
                                         (coe d854 v0 v1 v2 v3 v4 v5 v6 v7
                                            (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13)
                                            v14
                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                         (coe du246 v4
                                            (coe du54 v4
                                               (coe du52 v4
                                                  (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                     (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13)
                                                     (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                  v10)
                                               (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11))
                                            (coe
                                               MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                               v4
                                               (coe
                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                  v4
                                                  (coe du54 v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11)))
                                                  v10)
                                               (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11))
                                            (coe du54 v4
                                               (coe du52 v4
                                                  (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                     (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                  v10)
                                               (coe du54 v4
                                                  (coe du52 v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                     v10)
                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)))
                                            (coe MAlonzo.Code.Function.du176
                                               (coe MAlonzo.Code.Function.du176
                                                  (coe d934 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13
                                                     (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                  (coe du64 v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                        (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13)
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                     (coe du54 v4
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11))
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11)))
                                                     v10
                                                     v10)
                                                  (coe du136 v4 v10))
                                               (coe du84 v4
                                                  (coe
                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                     v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                        (coe d614 v0 v1 v2 v3 v4 v5 v6 v7 v8 v13)
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                     v10)
                                                  (coe
                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                     v4
                                                     (coe du54 v4
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11))
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11)))
                                                     v10)
                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)
                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11))
                                               (coe du136 v4
                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)))
                                            (coe du246 v4
                                               (coe du54 v4
                                                  (coe du52 v4
                                                     (coe du54 v4
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11))
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11)))
                                                     v10)
                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11))
                                               (coe MAlonzo.Code.Algebra.RingSolver.Lemmas.du36 v4
                                                  (coe MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                     v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                     v10)
                                                  (coe MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                     v4
                                                     (coe
                                                        MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                        v4
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11))
                                                        v10)
                                                     (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)))
                                               (coe du54 v4
                                                  (coe du52 v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                        (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                     v10)
                                                  (coe du54 v4
                                                     (coe du52 v4
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11))
                                                        v10)
                                                     (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)))
                                               (coe du20 v4
                                                  (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                     (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                  (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                     (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6 v14 v11)
                                                  v10)
                                               (coe du244 v4
                                                  (coe du54 v4
                                                     (coe du52 v4
                                                        (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                           (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                              v11))
                                                        v10)
                                                     (coe du54 v4
                                                        (coe du52 v4
                                                           (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v13
                                                              (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                                 v11))
                                                           v10)
                                                        (coe du370 v0 v1 v2 v3 v4 v5 v6 v14
                                                           v11)))))))
                _ -> coe MAlonzo.RTE.mazUnreachableError
      in
      case coe v8 of
          C352 v13 -> case coe v9 of
                          C352 v14 -> coe MAlonzo.Code.Function.du158
                                        (coe du144 v4
                                           (coe MAlonzo.Code.Algebra.RingSolver.Lemmas.du36 v4
                                              (coe MAlonzo.Code.Algebra.RingSolver.Lemmas.du34 v4
                                                 (coe MAlonzo.Code.Algebra.RingSolver.Lemmas.du88
                                                    v4)
                                                 v10)
                                              (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                 (coe d642 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7)
                                                    (coe C352 v7))
                                                 (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11)))
                                           (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                              (coe d642 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7)
                                                 (coe C352 v7))
                                              (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11)))
                                        (coe du32 v4
                                           (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                              (coe d642 v0 v1 v2 v3 v4 v5 v6 v7 (coe C352 v7)
                                                 (coe C352 v7))
                                              (coe MAlonzo.Code.Data.Vec.C22 v7 v10 v11))
                                           v10)
                          _ -> coe v12
          C356 v13 v14 v15 -> case coe v9 of
                                  C352 v16 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                (coe du246 v4
                                                   (coe du54 v4
                                                      (coe du52 v4
                                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                            (coe C356 v7 v14 v15)
                                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                               v11))
                                                         v10)
                                                      (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                         (coe du572 v3 v7)
                                                         v11))
                                                   (coe
                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                      v4
                                                      (coe du52 v4
                                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                            (coe C356 v7 v14 v15)
                                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                               v11))
                                                         v10)
                                                      (coe du106 v4))
                                                   (coe du54 v4
                                                      (coe du52 v4
                                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                            (coe C356 v7 v14 v15)
                                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                               v11))
                                                         v10)
                                                      (coe du106 v4))
                                                   (coe MAlonzo.Code.Function.du176
                                                      (coe du136 v4
                                                         (coe du52 v4
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                               (coe C356 v7 v14 v15)
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                                  v11))
                                                            v10))
                                                      (coe du84 v4
                                                         (coe du52 v4
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                               (coe C356 v7 v14 v15)
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                                  v11))
                                                            v10)
                                                         (coe du52 v4
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                               (coe C356 v7 v14 v15)
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                                  v11))
                                                            v10)
                                                         (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                            (coe du572 v3 v7)
                                                            v11)
                                                         (coe du106 v4))
                                                      (coe du816 v0 v1 v2 v3 v4 v5 v6 v11))
                                                   (coe du244 v4
                                                      (coe du54 v4
                                                         (coe du52 v4
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                               (coe C356 v7 v14 v15)
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v10
                                                                  v11))
                                                            v10)
                                                         (coe du106 v4))))
                                  _ -> coe v12
          _ -> coe v12
name1018 = "Algebra.RingSolver.*NH-homo"
d1018 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = case coe v9 of
        C352 v12 -> coe du144 v4
                      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v4
                         (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v11)
                         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                            v4))
                      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v4)
                      (coe MAlonzo.Code.Data.Product.d28 (coe du148 v4)
                         (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v11))
        C356 v12 v13 v14 -> let v15
                                  = coe du430 v0 v1 v2 v3 v4 v5 v6 v8 (coe du572 v3 v7)
                              in
                              case coe v15 of
                                  MAlonzo.Code.Relation.Nullary.C22 v16 -> coe
                                                                             MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                             (coe du246 v4
                                                                                (coe du106 v4)
                                                                                (coe
                                                                                   MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                   v4
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                                                      v4)
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)))
                                                                                (coe du52 v4
                                                                                   (coe du370 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      v8
                                                                                      v11)
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)))
                                                                                (coe du144 v4
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                      v4
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                                                         v4)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                                                      v4)
                                                                                   (coe
                                                                                      MAlonzo.Code.Data.Product.d26
                                                                                      (coe du148 v4)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))))
                                                                                (coe du246 v4
                                                                                   (coe du52 v4
                                                                                      (coe du106 v4)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                      v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v11)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe du52 v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v11)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe
                                                                                      MAlonzo.Code.Function.du176
                                                                                      (coe d828 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         v8
                                                                                         v16
                                                                                         v11)
                                                                                      (coe du64 v4
                                                                                         (coe du106
                                                                                            v4)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v11)
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11)))
                                                                                      (coe du136 v4
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))))
                                                                                   (coe du244 v4
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v11)
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))))))
                                  MAlonzo.Code.Relation.Nullary.C26 v16 -> coe
                                                                             MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                             (coe du246 v4
                                                                                (coe du54 v4
                                                                                   (coe du52 v4
                                                                                      (coe d366 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         (coe d656
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v8
                                                                                            v13)
                                                                                         (coe
                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                            v7
                                                                                            v10
                                                                                            v11))
                                                                                      v10)
                                                                                   (coe du370 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      (coe du668 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v14)
                                                                                      v11))
                                                                                (coe
                                                                                   MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                   v4
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                      v4
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v11)
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11)))
                                                                                      v10)
                                                                                   (coe du52 v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v11)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)))
                                                                                (coe du52 v4
                                                                                   (coe du370 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      v8
                                                                                      v11)
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)))
                                                                                (coe
                                                                                   MAlonzo.Code.Function.du176
                                                                                   (coe
                                                                                      MAlonzo.Code.Function.du176
                                                                                      (coe d1018 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         v8
                                                                                         v13
                                                                                         v10
                                                                                         v11)
                                                                                      (coe du64 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            (coe
                                                                                               d656
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v8
                                                                                               v13)
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v8
                                                                                               v11)
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11)))
                                                                                         v10
                                                                                         v10)
                                                                                      (coe du136 v4
                                                                                         v10))
                                                                                   (coe du84 v4
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                         v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            (coe
                                                                                               d656
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v8
                                                                                               v13)
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                         v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v8
                                                                                               v11)
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11)))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         (coe du668
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v14)
                                                                                         v11)
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v11)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe du1050 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      v8
                                                                                      v14
                                                                                      v11))
                                                                                (coe du246 v4
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v8
                                                                                               v11)
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11)))
                                                                                         v10)
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v11)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                      v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v11)
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                         v4
                                                                                         (coe
                                                                                            MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe du52 v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v11)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)))
                                                                                   (coe du26 v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v8
                                                                                         v11)
                                                                                      (coe d366 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         v13
                                                                                         (coe
                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                            v7
                                                                                            v10
                                                                                            v11))
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)
                                                                                      v10)
                                                                                   (coe du244 v4
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v8
                                                                                            v11)
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))))))
                                  _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1030 = "Algebra.RingSolver.*HN-homo"
d1030 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10 v11
  = case coe v8 of
        C352 v12 -> coe du144 v4
                      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v4
                         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v4)
                         (coe du370 v0 v1 v2 v3 v4 v5 v6 v9 v11))
                      (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v4)
                      (coe MAlonzo.Code.Data.Product.d26 (coe du148 v4)
                         (coe du370 v0 v1 v2 v3 v4 v5 v6 v9 v11))
        C356 v12 v13 v14 -> let v15
                                  = coe du430 v0 v1 v2 v3 v4 v5 v6 v9 (coe du572 v3 v7)
                              in
                              case coe v15 of
                                  MAlonzo.Code.Relation.Nullary.C22 v16 -> coe
                                                                             MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                             (coe du246 v4
                                                                                (coe du106 v4)
                                                                                (coe
                                                                                   MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                   v4
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                                                      v4))
                                                                                (coe du52 v4
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11))
                                                                                   (coe du370 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      v9
                                                                                      v11))
                                                                                (coe du144 v4
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                      v4
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                                                         v4))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                                                      v4)
                                                                                   (coe
                                                                                      MAlonzo.Code.Data.Product.d28
                                                                                      (coe du148 v4)
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))))
                                                                                (coe du246 v4
                                                                                   (coe du52 v4
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))
                                                                                      (coe du106
                                                                                         v4))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                      v4
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v9
                                                                                         v11))
                                                                                   (coe du52 v4
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v9
                                                                                         v11))
                                                                                   (coe
                                                                                      MAlonzo.Code.Function.du176
                                                                                      (coe du136 v4
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11)))
                                                                                      (coe du64 v4
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))
                                                                                         (coe du106
                                                                                            v4)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v9
                                                                                            v11))
                                                                                      (coe d828 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         v9
                                                                                         v16
                                                                                         v11))
                                                                                   (coe du244 v4
                                                                                      (coe du52 v4
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v9
                                                                                            v11)))))
                                  MAlonzo.Code.Relation.Nullary.C26 v16 -> coe
                                                                             MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                             (coe du246 v4
                                                                                (coe du54 v4
                                                                                   (coe du52 v4
                                                                                      (coe d366 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         (coe d660
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            v9)
                                                                                         (coe
                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                            v7
                                                                                            v10
                                                                                            v11))
                                                                                      v10)
                                                                                   (coe du370 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      (coe du668 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v9)
                                                                                      v11))
                                                                                (coe
                                                                                   MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                   v4
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                      v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v9
                                                                                            v11))
                                                                                      v10)
                                                                                   (coe du52 v4
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v9
                                                                                         v11)))
                                                                                (coe du52 v4
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            v13
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11))
                                                                                   (coe du370 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      v9
                                                                                      v11))
                                                                                (coe
                                                                                   MAlonzo.Code.Function.du176
                                                                                   (coe
                                                                                      MAlonzo.Code.Function.du176
                                                                                      (coe d1030 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         v13
                                                                                         v9
                                                                                         v10
                                                                                         v11)
                                                                                      (coe du64 v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            (coe
                                                                                               d660
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               v9)
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v9
                                                                                               v11))
                                                                                         v10
                                                                                         v10)
                                                                                      (coe du136 v4
                                                                                         v10))
                                                                                   (coe du84 v4
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                         v4
                                                                                         (coe d366
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v7
                                                                                            (coe
                                                                                               d660
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               v9)
                                                                                            (coe
                                                                                               MAlonzo.Code.Data.Vec.C22
                                                                                               v7
                                                                                               v10
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                         v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v9
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         (coe du668
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v9)
                                                                                         v11)
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v9
                                                                                            v11)))
                                                                                   (coe du1050 v0 v1
                                                                                      v2
                                                                                      v3
                                                                                      v4
                                                                                      v5
                                                                                      v6
                                                                                      v14
                                                                                      v9
                                                                                      v11))
                                                                                (coe du246 v4
                                                                                   (coe du54 v4
                                                                                      (coe du52 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v9
                                                                                               v11))
                                                                                         v10)
                                                                                      (coe du52 v4
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v9
                                                                                            v11)))
                                                                                   (coe
                                                                                      MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                      v4
                                                                                      (coe
                                                                                         MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                         v4
                                                                                         (coe
                                                                                            MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v9
                                                                                         v11))
                                                                                   (coe du52 v4
                                                                                      (coe du54 v4
                                                                                         (coe du52
                                                                                            v4
                                                                                            (coe
                                                                                               d366
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v7
                                                                                               v13
                                                                                               (coe
                                                                                                  MAlonzo.Code.Data.Vec.C22
                                                                                                  v7
                                                                                                  v10
                                                                                                  v11))
                                                                                            v10)
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v14
                                                                                            v11))
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v9
                                                                                         v11))
                                                                                   (coe du24 v4
                                                                                      (coe d366 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v7
                                                                                         v13
                                                                                         (coe
                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                            v7
                                                                                            v10
                                                                                            v11))
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v14
                                                                                         v11)
                                                                                      (coe du370 v0
                                                                                         v1
                                                                                         v2
                                                                                         v3
                                                                                         v4
                                                                                         v5
                                                                                         v6
                                                                                         v9
                                                                                         v11)
                                                                                      v10)
                                                                                   (coe du244 v4
                                                                                      (coe du52 v4
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  d366
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  v7
                                                                                                  v13
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                     v7
                                                                                                     v10
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v14
                                                                                               v11))
                                                                                         (coe du370
                                                                                            v0
                                                                                            v1
                                                                                            v2
                                                                                            v3
                                                                                            v4
                                                                                            v5
                                                                                            v6
                                                                                            v9
                                                                                            v11)))))
                                  _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1040 = "Algebra.RingSolver.*H-homo"
d1040 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = case coe v8 of
        C352 v11 -> coe MAlonzo.Code.Function.du158
                      (coe du144 v4
                         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v4
                            (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170 v4)
                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v9 v10))
                         (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                            v4))
                      (coe MAlonzo.Code.Data.Product.d26 (coe du148 v4)
                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v9 v10))
        C356 v11 v12 v13 -> case coe v9 of
                                C352 v14 -> coe MAlonzo.Code.Function.du158
                                              (coe du144 v4
                                                 (coe
                                                    MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                    v4
                                                    (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                       (coe C356 v7 v12 v13)
                                                       v10)
                                                    (coe
                                                       MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                       v4))
                                                 (coe
                                                    MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d170
                                                    v4))
                                              (coe MAlonzo.Code.Data.Product.d28 (coe du148 v4)
                                                 (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                    (coe C356 v7 v12 v13)
                                                    v10))
                                C356 v14 v15 v16 -> case coe v10 of
                                                        MAlonzo.Code.Data.Vec.C22 v17 v18 v19 -> coe
                                                                                                   MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                                                   (coe
                                                                                                      du246
                                                                                                      v4
                                                                                                      (coe
                                                                                                         d366
                                                                                                         v0
                                                                                                         v1
                                                                                                         v2
                                                                                                         v3
                                                                                                         v4
                                                                                                         v5
                                                                                                         v6
                                                                                                         v7
                                                                                                         (coe
                                                                                                            d590
                                                                                                            v0
                                                                                                            v1
                                                                                                            v2
                                                                                                            v3
                                                                                                            v4
                                                                                                            v5
                                                                                                            v6
                                                                                                            v7
                                                                                                            (coe
                                                                                                               d642
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v7
                                                                                                               (coe
                                                                                                                  d664
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  v15)
                                                                                                               (coe
                                                                                                                  d614
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  (coe
                                                                                                                     d660
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     v16)
                                                                                                                  (coe
                                                                                                                     d656
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v13
                                                                                                                     v15)))
                                                                                                            (coe
                                                                                                               du668
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v16))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                                            v7
                                                                                                            v18
                                                                                                            v19))
                                                                                                      (coe
                                                                                                         d366
                                                                                                         v0
                                                                                                         v1
                                                                                                         v2
                                                                                                         v3
                                                                                                         v4
                                                                                                         v5
                                                                                                         v6
                                                                                                         v7
                                                                                                         (coe
                                                                                                            C356
                                                                                                            v7
                                                                                                            (coe
                                                                                                               d642
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v7
                                                                                                               (coe
                                                                                                                  d664
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  v15)
                                                                                                               (coe
                                                                                                                  d614
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  (coe
                                                                                                                     d660
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     v16)
                                                                                                                  (coe
                                                                                                                     d656
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v13
                                                                                                                     v15)))
                                                                                                            (coe
                                                                                                               du668
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v16))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                                            v7
                                                                                                            v18
                                                                                                            v19))
                                                                                                      (coe
                                                                                                         du52
                                                                                                         v4
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du370
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v19))
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v15
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du370
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v16
                                                                                                               v19)))
                                                                                                      (coe
                                                                                                         d854
                                                                                                         v0
                                                                                                         v1
                                                                                                         v2
                                                                                                         v3
                                                                                                         v4
                                                                                                         v5
                                                                                                         v6
                                                                                                         v7
                                                                                                         (coe
                                                                                                            d642
                                                                                                            v0
                                                                                                            v1
                                                                                                            v2
                                                                                                            v3
                                                                                                            v4
                                                                                                            v5
                                                                                                            v6
                                                                                                            v7
                                                                                                            (coe
                                                                                                               d664
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v7
                                                                                                               v12
                                                                                                               v15)
                                                                                                            (coe
                                                                                                               d614
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v7
                                                                                                               (coe
                                                                                                                  d660
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v12
                                                                                                                  v16)
                                                                                                               (coe
                                                                                                                  d656
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  v13
                                                                                                                  v15)))
                                                                                                         (coe
                                                                                                            du668
                                                                                                            v0
                                                                                                            v1
                                                                                                            v2
                                                                                                            v3
                                                                                                            v4
                                                                                                            v5
                                                                                                            v6
                                                                                                            v13
                                                                                                            v16)
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Data.Vec.C22
                                                                                                            v7
                                                                                                            v18
                                                                                                            v19))
                                                                                                      (coe
                                                                                                         du246
                                                                                                         v4
                                                                                                         (coe
                                                                                                            du54
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  d366
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  (coe
                                                                                                                     d642
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d664
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        v15)
                                                                                                                     (coe
                                                                                                                        d614
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d660
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v16)
                                                                                                                        (coe
                                                                                                                           d656
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v13
                                                                                                                           v15)))
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Data.Vec.C22
                                                                                                                     v7
                                                                                                                     v18
                                                                                                                     v19))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du370
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               (coe
                                                                                                                  du668
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v16)
                                                                                                               v19))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                            v4
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d664
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v15)
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d614
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d660
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v16)
                                                                                                                        (coe
                                                                                                                           d656
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v13
                                                                                                                           v15))
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19)))
                                                                                                               v18)
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v19)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v16
                                                                                                                  v19)))
                                                                                                         (coe
                                                                                                            du52
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v13
                                                                                                                  v19))
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v15
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v16
                                                                                                                  v19)))
                                                                                                         (coe
                                                                                                            MAlonzo.Code.Function.du176
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Function.du176
                                                                                                               (coe
                                                                                                                  d988
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  v7
                                                                                                                  (coe
                                                                                                                     d664
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     v12
                                                                                                                     v15)
                                                                                                                  (coe
                                                                                                                     d614
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d660
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        v16)
                                                                                                                     (coe
                                                                                                                        d656
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v13
                                                                                                                        v15))
                                                                                                                  v18
                                                                                                                  v19)
                                                                                                               (coe
                                                                                                                  du64
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d642
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d664
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v15)
                                                                                                                        (coe
                                                                                                                           d614
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d660
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16)
                                                                                                                           (coe
                                                                                                                              d656
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15)))
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d664
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v15)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d614
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d660
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16)
                                                                                                                           (coe
                                                                                                                              d656
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15))
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  v18
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du136
                                                                                                                  v4
                                                                                                                  v18))
                                                                                                            (coe
                                                                                                               du84
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     d366
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v7
                                                                                                                     (coe
                                                                                                                        d642
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d664
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v15)
                                                                                                                        (coe
                                                                                                                           d614
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d660
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16)
                                                                                                                           (coe
                                                                                                                              d656
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15)))
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Data.Vec.C22
                                                                                                                        v7
                                                                                                                        v18
                                                                                                                        v19))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d664
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v15)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d614
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d660
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16)
                                                                                                                           (coe
                                                                                                                              d656
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15))
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du370
                                                                                                                  v0
                                                                                                                  v1
                                                                                                                  v2
                                                                                                                  v3
                                                                                                                  v4
                                                                                                                  v5
                                                                                                                  v6
                                                                                                                  (coe
                                                                                                                     du668
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v16)
                                                                                                                  v19)
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               du1050
                                                                                                               v0
                                                                                                               v1
                                                                                                               v2
                                                                                                               v3
                                                                                                               v4
                                                                                                               v5
                                                                                                               v6
                                                                                                               v13
                                                                                                               v16
                                                                                                               v19))
                                                                                                         (coe
                                                                                                            du246
                                                                                                            v4
                                                                                                            (coe
                                                                                                               du54
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d664
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v15)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d614
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d660
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16)
                                                                                                                           (coe
                                                                                                                              d656
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15))
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du52
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v15
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19)))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du54
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d660
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d656
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))))
                                                                                                                  v18)
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               du52
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v13
                                                                                                                     v19))
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du370
                                                                                                                     v0
                                                                                                                     v1
                                                                                                                     v2
                                                                                                                     v3
                                                                                                                     v4
                                                                                                                     v5
                                                                                                                     v6
                                                                                                                     v16
                                                                                                                     v19)))
                                                                                                            (coe
                                                                                                               MAlonzo.Code.Function.du176
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Function.du176
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Function.du176
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Function.du176
                                                                                                                        (coe
                                                                                                                           d1040
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v15
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        (coe
                                                                                                                           du64
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d664
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           v18
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du136
                                                                                                                           v4
                                                                                                                           v18))
                                                                                                                     (coe
                                                                                                                        du84
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d664
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d614
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15))
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))))
                                                                                                                     (coe
                                                                                                                        d934
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        (coe
                                                                                                                           d660
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           v16)
                                                                                                                        (coe
                                                                                                                           d656
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v13
                                                                                                                           v15)
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19)))
                                                                                                                  (coe
                                                                                                                     du64
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d664
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d614
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15))
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19)))
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))))
                                                                                                                     v18
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du136
                                                                                                                     v4
                                                                                                                     v18))
                                                                                                               (coe
                                                                                                                  du84
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d664
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           (coe
                                                                                                                              d614
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15))
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19)))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19))
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19)))
                                                                                                               (coe
                                                                                                                  du136
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19))))
                                                                                                            (coe
                                                                                                               du246
                                                                                                               v4
                                                                                                               (coe
                                                                                                                  du54
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du54
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du52
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d660
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 v16)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              (coe
                                                                                                                                 d656
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v13
                                                                                                                                 v15)
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19)))
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du52
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du370
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v16
                                                                                                                                 v19))
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du370
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v13
                                                                                                                                 v19)
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))))
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19)))
                                                                                                               (coe
                                                                                                                  du52
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v12
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19))
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           d366
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v7
                                                                                                                           v15
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Data.Vec.C22
                                                                                                                              v7
                                                                                                                              v18
                                                                                                                              v19))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19)))
                                                                                                               (coe
                                                                                                                  MAlonzo.Code.Function.du176
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Function.du176
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Function.du176
                                                                                                                        (coe
                                                                                                                           du136
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18))
                                                                                                                        (coe
                                                                                                                           du84
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d660
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    v16)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d656
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v13
                                                                                                                                    v15)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19)))
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v16
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v13
                                                                                                                                    v19)
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))))
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Function.du176
                                                                                                                           (coe
                                                                                                                              d1030
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              v16
                                                                                                                              v18
                                                                                                                              v19)
                                                                                                                           (coe
                                                                                                                              du84
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d660
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    v16)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v16
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d656
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v13
                                                                                                                                    v15)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v13
                                                                                                                                    v19)
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))))
                                                                                                                           (coe
                                                                                                                              d1018
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v13
                                                                                                                              v15
                                                                                                                              v18
                                                                                                                              v19)))
                                                                                                                     (coe
                                                                                                                        du64
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d660
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    v16)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d656
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v13
                                                                                                                                    v15)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))))
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v16
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v13
                                                                                                                                    v19)
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))))
                                                                                                                        v18
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du136
                                                                                                                        v4
                                                                                                                        v18))
                                                                                                                  (coe
                                                                                                                     du84
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d660
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    v16)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 (coe
                                                                                                                                    d656
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v13
                                                                                                                                    v15)
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v16
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v13
                                                                                                                                    v19)
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v13
                                                                                                                           v19)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v16
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v13
                                                                                                                           v19)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v16
                                                                                                                           v19)))
                                                                                                                  (coe
                                                                                                                     du136
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v13
                                                                                                                           v19)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v16
                                                                                                                           v19))))
                                                                                                               (coe
                                                                                                                  du246
                                                                                                                  v4
                                                                                                                  (coe
                                                                                                                     du54
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              du54
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v12
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19))
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v16
                                                                                                                                    v19))
                                                                                                                              (coe
                                                                                                                                 du52
                                                                                                                                 v4
                                                                                                                                 (coe
                                                                                                                                    du370
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v13
                                                                                                                                    v19)
                                                                                                                                 (coe
                                                                                                                                    d366
                                                                                                                                    v0
                                                                                                                                    v1
                                                                                                                                    v2
                                                                                                                                    v3
                                                                                                                                    v4
                                                                                                                                    v5
                                                                                                                                    v6
                                                                                                                                    v7
                                                                                                                                    v15
                                                                                                                                    (coe
                                                                                                                                       MAlonzo.Code.Data.Vec.C22
                                                                                                                                       v7
                                                                                                                                       v18
                                                                                                                                       v19)))))
                                                                                                                        v18)
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v13
                                                                                                                           v19)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v16
                                                                                                                           v19)))
                                                                                                                  (coe
                                                                                                                     MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v13
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        MAlonzo.Code.Algebra.RingSolver.Lemmas.du36
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Algebra.RingSolver.Lemmas.du34
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v15
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v16
                                                                                                                           v19)))
                                                                                                                  (coe
                                                                                                                     du52
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du54
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du52
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v12
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v13
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        du54
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du52
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              d366
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v7
                                                                                                                              v15
                                                                                                                              (coe
                                                                                                                                 MAlonzo.Code.Data.Vec.C22
                                                                                                                                 v7
                                                                                                                                 v18
                                                                                                                                 v19))
                                                                                                                           v18)
                                                                                                                        (coe
                                                                                                                           du370
                                                                                                                           v0
                                                                                                                           v1
                                                                                                                           v2
                                                                                                                           v3
                                                                                                                           v4
                                                                                                                           v5
                                                                                                                           v6
                                                                                                                           v16
                                                                                                                           v19)))
                                                                                                                  (coe
                                                                                                                     du28
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v12
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v13
                                                                                                                        v19)
                                                                                                                     (coe
                                                                                                                        d366
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v7
                                                                                                                        v15
                                                                                                                        (coe
                                                                                                                           MAlonzo.Code.Data.Vec.C22
                                                                                                                           v7
                                                                                                                           v18
                                                                                                                           v19))
                                                                                                                     (coe
                                                                                                                        du370
                                                                                                                        v0
                                                                                                                        v1
                                                                                                                        v2
                                                                                                                        v3
                                                                                                                        v4
                                                                                                                        v5
                                                                                                                        v6
                                                                                                                        v16
                                                                                                                        v19)
                                                                                                                     v18)
                                                                                                                  (coe
                                                                                                                     du244
                                                                                                                     v4
                                                                                                                     (coe
                                                                                                                        du52
                                                                                                                        v4
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v12
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              du370
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v13
                                                                                                                              v19))
                                                                                                                        (coe
                                                                                                                           du54
                                                                                                                           v4
                                                                                                                           (coe
                                                                                                                              du52
                                                                                                                              v4
                                                                                                                              (coe
                                                                                                                                 d366
                                                                                                                                 v0
                                                                                                                                 v1
                                                                                                                                 v2
                                                                                                                                 v3
                                                                                                                                 v4
                                                                                                                                 v5
                                                                                                                                 v6
                                                                                                                                 v7
                                                                                                                                 v15
                                                                                                                                 (coe
                                                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                                                    v7
                                                                                                                                    v18
                                                                                                                                    v19))
                                                                                                                              v18)
                                                                                                                           (coe
                                                                                                                              du370
                                                                                                                              v0
                                                                                                                              v1
                                                                                                                              v2
                                                                                                                              v3
                                                                                                                              v4
                                                                                                                              v5
                                                                                                                              v6
                                                                                                                              v16
                                                                                                                              v19)))))))))
                                                        _ -> coe MAlonzo.RTE.mazUnreachableError
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1050 = "Algebra.RingSolver.*N-homo"
d1050 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = du1050 v0 v1 v2 v3 v4 v5 v6 v8 v9 v10
du1050 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v7 of
        C358 v10 -> case coe v8 of
                        C358 v11 -> coe du202 v5 v10 v11
                        _ -> coe MAlonzo.RTE.mazUnreachableError
        C362 v10 v11 -> case coe v8 of
                            C362 v12 v13 -> coe d1040 v0 v1 v2 v3 v4 v5 v6 v10 v11 v13 v9
                            _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1180 = "Algebra.RingSolver.^N-homo"
d1180 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9 v10
  = case coe v9 of
        0 -> coe du840 v0 v1 v2 v3 v4 v5 v6 v10
        _ -> let v11
                   = coe ((Prelude.-) :: Integer -> Integer -> Integer) v9
                       (1 :: Integer)
               in
               coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                 (coe du246 v4
                    (coe du370 v0 v1 v2 v3 v4 v5 v6
                       (coe du668 v0 v1 v2 v3 v4 v5 v6 v8
                          (coe d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11))
                       v10)
                    (coe du52 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                       (coe du370 v0 v1 v2 v3 v4 v5 v6
                          (coe d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11)
                          v10))
                    (coe du52 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                       (coe du216 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10) v11))
                    (coe du1050 v0 v1 v2 v3 v4 v5 v6 v8
                       (coe d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11)
                       v10)
                    (coe du246 v4
                       (coe du52 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                          (coe du370 v0 v1 v2 v3 v4 v5 v6
                             (coe d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11)
                             v10))
                       (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166 v4
                          (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                          (coe du216 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10) v11))
                       (coe du52 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                          (coe du216 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10) v11))
                       (coe MAlonzo.Code.Function.du176
                          (coe du136 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10))
                          (coe du64 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                             (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                             (coe du370 v0 v1 v2 v3 v4 v5 v6
                                (coe d744 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11)
                                v10)
                             (coe du216 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10) v11))
                          (coe d1180 v0 v1 v2 v3 v4 v5 v6 v7 v8 v11 v10))
                       (coe du244 v4
                          (coe du52 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10)
                             (coe du216 v4 (coe du370 v0 v1 v2 v3 v4 v5 v6 v8 v10) v11)))))
name1198 = "Algebra.RingSolver.-H\8255-homo"
d1198 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v9 of
        MAlonzo.Code.Data.Vec.C22 v10 v11 v12 -> coe
                                                   MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                   (coe du246 v4
                                                      (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                         (coe d656 v0 v1 v2 v3 v4 v5 v6 v7
                                                            (coe du758 v0 v1 v2 v3 v4 v5 v6
                                                               (coe d582 v0 v1 v2 v3 v4 v5 v6 v7))
                                                            v8)
                                                         (coe MAlonzo.Code.Data.Vec.C22 v7 v11 v12))
                                                      (coe du52 v4
                                                         (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                            (coe du758 v0 v1 v2 v3 v4 v5 v6
                                                               (coe d582 v0 v1 v2 v3 v4 v5 v6 v7))
                                                            v12)
                                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v11
                                                               v12)))
                                                      (coe du98 v4
                                                         (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                            (coe MAlonzo.Code.Data.Vec.C22 v7 v11
                                                               v12)))
                                                      (coe d1018 v0 v1 v2 v3 v4 v5 v6 v7
                                                         (coe du758 v0 v1 v2 v3 v4 v5 v6
                                                            (coe d582 v0 v1 v2 v3 v4 v5 v6 v7))
                                                         v8
                                                         v11
                                                         v12)
                                                      (coe du246 v4
                                                         (coe du52 v4
                                                            (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                               (coe du758 v0 v1 v2 v3 v4 v5 v6
                                                                  (coe d582 v0 v1 v2 v3 v4 v5 v6
                                                                     v7))
                                                               v12)
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v11
                                                                  v12)))
                                                         (coe
                                                            MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                            v4
                                                            (coe
                                                               MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168
                                                               v4
                                                               (coe du108 v4))
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v11
                                                                  v12)))
                                                         (coe du98 v4
                                                            (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                               (coe MAlonzo.Code.Data.Vec.C22 v7 v11
                                                                  v12)))
                                                         (coe MAlonzo.Code.Function.du176
                                                            (coe du146 v4
                                                               (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                                  (coe du758 v0 v1 v2 v3 v4 v5 v6
                                                                     (coe d582 v0 v1 v2 v3 v4 v5 v6
                                                                        v7))
                                                                  v12)
                                                               (coe du98 v4
                                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                                     (coe d582 v0 v1 v2 v3 v4 v5 v6
                                                                        v7)
                                                                     v12))
                                                               (coe
                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168
                                                                  v4
                                                                  (coe du108 v4))
                                                               (coe du1206 v0 v1 v2 v3 v4 v5 v6
                                                                  (coe d582 v0 v1 v2 v3 v4 v5 v6 v7)
                                                                  v12)
                                                               (coe du104 v4
                                                                  (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                                     (coe d582 v0 v1 v2 v3 v4 v5 v6
                                                                        v7)
                                                                     v12)
                                                                  (coe du108 v4)
                                                                  (coe du840 v0 v1 v2 v3 v4 v5 v6
                                                                     v12)))
                                                            (coe du64 v4
                                                               (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                                  (coe du758 v0 v1 v2 v3 v4 v5 v6
                                                                     (coe d582 v0 v1 v2 v3 v4 v5 v6
                                                                        v7))
                                                                  v12)
                                                               (coe
                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168
                                                                  v4
                                                                  (coe du108 v4))
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12))
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12)))
                                                            (coe du136 v4
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12))))
                                                         (coe du246 v4
                                                            (coe du52 v4
                                                               (coe du98 v4 (coe du108 v4))
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12)))
                                                            (coe
                                                               MAlonzo.Code.Algebra.RingSolver.Lemmas.du80
                                                               v4
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12)))
                                                            (coe du98 v4
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12)))
                                                            (coe du34 v4
                                                               (coe d366 v0 v1 v2 v3 v4 v5 v6 v7 v8
                                                                  (coe MAlonzo.Code.Data.Vec.C22 v7
                                                                     v11
                                                                     v12)))
                                                            (coe du244 v4
                                                               (coe du98 v4
                                                                  (coe d366 v0 v1 v2 v3 v4 v5 v6 v7
                                                                     v8
                                                                     (coe MAlonzo.Code.Data.Vec.C22
                                                                        v7
                                                                        v11
                                                                        v12)))))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1206 = "Algebra.RingSolver.-N\8255-homo"
d1206 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du1206 v0 v1 v2 v3 v4 v5 v6 v8 v9
du1206 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v7 of
        C358 v9 -> coe du206 v5 v9
        C362 v9 v10 -> coe d1198 v0 v1 v2 v3 v4 v5 v6 v9 v10 v8
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1226 = "Algebra.RingSolver.correct-con"
d1226 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du1226 v0 v1 v2 v3 v4 v5 v6 v8 v9
du1226 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v8 of
        MAlonzo.Code.Data.Vec.C14 -> coe du136 v4
                                       (coe du370 v0 v1 v2 v3 v4 v5 v6
                                          (coe d768 v0 v1 v2 v3 v4 v5 v6 (0 :: Integer) v7)
                                          (coe MAlonzo.Code.Data.Vec.C14))
        MAlonzo.Code.Data.Vec.C22 v9 v10 v11 -> coe
                                                  MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                  (coe du246 v4
                                                     (coe d366 v0 v1 v2 v3 v4 v5 v6 v9
                                                        (coe d590 v0 v1 v2 v3 v4 v5 v6 v9
                                                           (coe C352 v9)
                                                           (coe d768 v0 v1 v2 v3 v4 v5 v6 v9 v7))
                                                        (coe MAlonzo.Code.Data.Vec.C22 v9 v10 v11))
                                                     (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                        (coe d768 v0 v1 v2 v3 v4 v5 v6 v9 v7)
                                                        v11)
                                                     (coe du212 v5 v7)
                                                     (coe d898 v0 v1 v2 v3 v4 v5 v6 v9
                                                        (coe d768 v0 v1 v2 v3 v4 v5 v6 v9 v7)
                                                        v10
                                                        v11)
                                                     (coe du246 v4
                                                        (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                           (coe d768 v0 v1 v2 v3 v4 v5 v6 v9 v7)
                                                           v11)
                                                        (coe du212 v5 v7)
                                                        (coe du212 v5 v7)
                                                        (coe du1226 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                        (coe du244 v4 (coe du212 v5 v7))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1242 = "Algebra.RingSolver.correct-var"
d1242 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = du1242 v0 v1 v2 v3 v4 v5 v6 v8 v9
du1242 v0 v1 v2 v3 v4 v5 v6 v7 v8
  = case coe v8 of
        MAlonzo.Code.Data.Vec.C22 v9 v10 v11 -> case coe v7 of
                                                    MAlonzo.Code.Data.Fin.C8 v12 -> coe
                                                                                      MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                                      (coe du246 v4
                                                                                         (coe du54
                                                                                            v4
                                                                                            (coe
                                                                                               du52
                                                                                               v4
                                                                                               (coe
                                                                                                  du54
                                                                                                  v4
                                                                                                  (coe
                                                                                                     du52
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du106
                                                                                                        v4)
                                                                                                     v10)
                                                                                                  (coe
                                                                                                     du370
                                                                                                     v0
                                                                                                     v1
                                                                                                     v2
                                                                                                     v3
                                                                                                     v4
                                                                                                     v5
                                                                                                     v6
                                                                                                     (coe
                                                                                                        d582
                                                                                                        v0
                                                                                                        v1
                                                                                                        v2
                                                                                                        v3
                                                                                                        v4
                                                                                                        v5
                                                                                                        v6
                                                                                                        v12)
                                                                                                     v11))
                                                                                               v10)
                                                                                            (coe
                                                                                               du370
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               (coe
                                                                                                  du572
                                                                                                  v3
                                                                                                  v12)
                                                                                               v11))
                                                                                         (coe
                                                                                            MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                            v4
                                                                                            (coe
                                                                                               MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                               v4
                                                                                               (coe
                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                  v4
                                                                                                  (coe
                                                                                                     du52
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du106
                                                                                                        v4)
                                                                                                     v10)
                                                                                                  (coe
                                                                                                     du108
                                                                                                     v4))
                                                                                               v10)
                                                                                            (coe
                                                                                               du106
                                                                                               v4))
                                                                                         v10
                                                                                         (coe
                                                                                            MAlonzo.Code.Function.du176
                                                                                            (coe
                                                                                               MAlonzo.Code.Function.du176
                                                                                               (coe
                                                                                                  MAlonzo.Code.Function.du176
                                                                                                  (coe
                                                                                                     du136
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10))
                                                                                                  (coe
                                                                                                     du84
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du370
                                                                                                        v0
                                                                                                        v1
                                                                                                        v2
                                                                                                        v3
                                                                                                        v4
                                                                                                        v5
                                                                                                        v6
                                                                                                        (coe
                                                                                                           d582
                                                                                                           v0
                                                                                                           v1
                                                                                                           v2
                                                                                                           v3
                                                                                                           v4
                                                                                                           v5
                                                                                                           v6
                                                                                                           v12)
                                                                                                        v11)
                                                                                                     (coe
                                                                                                        du108
                                                                                                        v4))
                                                                                                  (coe
                                                                                                     du840
                                                                                                     v0
                                                                                                     v1
                                                                                                     v2
                                                                                                     v3
                                                                                                     v4
                                                                                                     v5
                                                                                                     v6
                                                                                                     v11))
                                                                                               (coe
                                                                                                  du64
                                                                                                  v4
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du370
                                                                                                        v0
                                                                                                        v1
                                                                                                        v2
                                                                                                        v3
                                                                                                        v4
                                                                                                        v5
                                                                                                        v6
                                                                                                        (coe
                                                                                                           d582
                                                                                                           v0
                                                                                                           v1
                                                                                                           v2
                                                                                                           v3
                                                                                                           v4
                                                                                                           v5
                                                                                                           v6
                                                                                                           v12)
                                                                                                        v11))
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du108
                                                                                                        v4))
                                                                                                  v10
                                                                                                  v10)
                                                                                               (coe
                                                                                                  du136
                                                                                                  v4
                                                                                                  v10))
                                                                                            (coe
                                                                                               du84
                                                                                               v4
                                                                                               (coe
                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                  v4
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du370
                                                                                                        v0
                                                                                                        v1
                                                                                                        v2
                                                                                                        v3
                                                                                                        v4
                                                                                                        v5
                                                                                                        v6
                                                                                                        (coe
                                                                                                           d582
                                                                                                           v0
                                                                                                           v1
                                                                                                           v2
                                                                                                           v3
                                                                                                           v4
                                                                                                           v5
                                                                                                           v6
                                                                                                           v12)
                                                                                                        v11))
                                                                                                  v10)
                                                                                               (coe
                                                                                                  MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                                                                  v4
                                                                                                  (coe
                                                                                                     MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du108
                                                                                                        v4))
                                                                                                  v10)
                                                                                               (coe
                                                                                                  du370
                                                                                                  v0
                                                                                                  v1
                                                                                                  v2
                                                                                                  v3
                                                                                                  v4
                                                                                                  v5
                                                                                                  v6
                                                                                                  (coe
                                                                                                     du572
                                                                                                     v3
                                                                                                     v12)
                                                                                                  v11)
                                                                                               (coe
                                                                                                  du106
                                                                                                  v4))
                                                                                            (coe
                                                                                               du816
                                                                                               v0
                                                                                               v1
                                                                                               v2
                                                                                               v3
                                                                                               v4
                                                                                               v5
                                                                                               v6
                                                                                               v11))
                                                                                         (coe du246
                                                                                            v4
                                                                                            (coe
                                                                                               du54
                                                                                               v4
                                                                                               (coe
                                                                                                  du52
                                                                                                  v4
                                                                                                  (coe
                                                                                                     du54
                                                                                                     v4
                                                                                                     (coe
                                                                                                        du52
                                                                                                        v4
                                                                                                        (coe
                                                                                                           du106
                                                                                                           v4)
                                                                                                        v10)
                                                                                                     (coe
                                                                                                        du108
                                                                                                        v4))
                                                                                                  v10)
                                                                                               (coe
                                                                                                  du106
                                                                                                  v4))
                                                                                            v10
                                                                                            v10
                                                                                            (coe
                                                                                               du30
                                                                                               v4
                                                                                               v10)
                                                                                            (coe
                                                                                               du244
                                                                                               v4
                                                                                               v10)))
                                                    MAlonzo.Code.Data.Fin.C14 v12 v13 -> coe
                                                                                           MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                                                                           (coe
                                                                                              du246
                                                                                              v4
                                                                                              (coe
                                                                                                 d366
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v12
                                                                                                 (coe
                                                                                                    d590
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v12
                                                                                                    (coe
                                                                                                       C352
                                                                                                       v12)
                                                                                                    (coe
                                                                                                       du778
                                                                                                       v0
                                                                                                       v1
                                                                                                       v2
                                                                                                       v3
                                                                                                       v4
                                                                                                       v5
                                                                                                       v6
                                                                                                       v13))
                                                                                                 (coe
                                                                                                    MAlonzo.Code.Data.Vec.C22
                                                                                                    v12
                                                                                                    v10
                                                                                                    v11))
                                                                                              (coe
                                                                                                 du370
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 (coe
                                                                                                    du778
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v13)
                                                                                                 v11)
                                                                                              (coe
                                                                                                 MAlonzo.Code.Data.Vec.du696
                                                                                                 v13
                                                                                                 v11)
                                                                                              (coe
                                                                                                 d898
                                                                                                 v0
                                                                                                 v1
                                                                                                 v2
                                                                                                 v3
                                                                                                 v4
                                                                                                 v5
                                                                                                 v6
                                                                                                 v12
                                                                                                 (coe
                                                                                                    du778
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v13)
                                                                                                 v10
                                                                                                 v11)
                                                                                              (coe
                                                                                                 du246
                                                                                                 v4
                                                                                                 (coe
                                                                                                    du370
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    (coe
                                                                                                       du778
                                                                                                       v0
                                                                                                       v1
                                                                                                       v2
                                                                                                       v3
                                                                                                       v4
                                                                                                       v5
                                                                                                       v6
                                                                                                       v13)
                                                                                                    v11)
                                                                                                 (coe
                                                                                                    MAlonzo.Code.Data.Vec.du696
                                                                                                    v13
                                                                                                    v11)
                                                                                                 (coe
                                                                                                    MAlonzo.Code.Data.Vec.du696
                                                                                                    v13
                                                                                                    v11)
                                                                                                 (coe
                                                                                                    du1242
                                                                                                    v0
                                                                                                    v1
                                                                                                    v2
                                                                                                    v3
                                                                                                    v4
                                                                                                    v5
                                                                                                    v6
                                                                                                    v13
                                                                                                    v11)
                                                                                                 (coe
                                                                                                    du244
                                                                                                    v4
                                                                                                    (coe
                                                                                                       MAlonzo.Code.Data.Vec.du696
                                                                                                       v13
                                                                                                       v11))))
                                                    _ -> coe MAlonzo.RTE.mazUnreachableError
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1260 = "Algebra.RingSolver.correct"
d1260 v0 v1 v2 v3 v4 v5 v6 v7 v8 v9
  = case coe v8 of
        C278 v10 v11 v12 -> case coe v10 of
                                C262 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                          (coe du246 v4
                                             (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                (coe du618 v0 v1 v2 v3 v4 v5 v6
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v12))
                                                v9)
                                             (coe du54 v4
                                                (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                   v9)
                                                (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v12)
                                                   v9))
                                             (coe du54 v4 (coe du318 v4 v5 v11 v9)
                                                (coe du318 v4 v5 v12 v9))
                                             (coe du944 v0 v1 v2 v3 v4 v5 v6
                                                (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v12)
                                                v9)
                                             (coe du246 v4
                                                (coe du54 v4
                                                   (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v11 v9)
                                                   (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v12 v9))
                                                (coe
                                                   MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d164
                                                   v4
                                                   (coe du318 v4 v5 v11 v9)
                                                   (coe du318 v4 v5 v12 v9))
                                                (coe du54 v4 (coe du318 v4 v5 v11 v9)
                                                   (coe du318 v4 v5 v12 v9))
                                                (coe MAlonzo.Code.Function.du176
                                                   (coe d1260 v0 v1 v2 v3 v4 v5 v6 v7 v11 v9)
                                                   (coe du84 v4
                                                      (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v11 v9)
                                                      (coe du318 v4 v5 v11 v9)
                                                      (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v12 v9)
                                                      (coe du318 v4 v5 v12 v9))
                                                   (coe d1260 v0 v1 v2 v3 v4 v5 v6 v7 v12 v9))
                                                (coe du244 v4
                                                   (coe du54 v4 (coe du318 v4 v5 v11 v9)
                                                      (coe du318 v4 v5 v12 v9)))))
                                C264 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                                          (coe du246 v4
                                             (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                (coe du668 v0 v1 v2 v3 v4 v5 v6
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v12))
                                                v9)
                                             (coe du52 v4
                                                (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                   v9)
                                                (coe du370 v0 v1 v2 v3 v4 v5 v6
                                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v12)
                                                   v9))
                                             (coe du52 v4 (coe du318 v4 v5 v11 v9)
                                                (coe du318 v4 v5 v12 v9))
                                             (coe du1050 v0 v1 v2 v3 v4 v5 v6
                                                (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v11)
                                                (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v12)
                                                v9)
                                             (coe du246 v4
                                                (coe du52 v4
                                                   (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v11 v9)
                                                   (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v12 v9))
                                                (coe
                                                   MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d166
                                                   v4
                                                   (coe du318 v4 v5 v11 v9)
                                                   (coe du318 v4 v5 v12 v9))
                                                (coe du52 v4 (coe du318 v4 v5 v11 v9)
                                                   (coe du318 v4 v5 v12 v9))
                                                (coe MAlonzo.Code.Function.du176
                                                   (coe d1260 v0 v1 v2 v3 v4 v5 v6 v7 v11 v9)
                                                   (coe du64 v4
                                                      (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v11 v9)
                                                      (coe du318 v4 v5 v11 v9)
                                                      (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v12 v9)
                                                      (coe du318 v4 v5 v12 v9))
                                                   (coe d1260 v0 v1 v2 v3 v4 v5 v6 v7 v12 v9))
                                                (coe du244 v4
                                                   (coe du52 v4 (coe du318 v4 v5 v11 v9)
                                                      (coe du318 v4 v5 v12 v9)))))
                                _ -> coe MAlonzo.RTE.mazUnreachableError
        C282 v10 -> coe du1226 v0 v1 v2 v3 v4 v5 v6 v10 v9
        C286 v10 -> coe du1242 v0 v1 v2 v3 v4 v5 v6 v10 v9
        C292 v10 v11 -> coe
                          MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                          (coe du246 v4
                             (coe du370 v0 v1 v2 v3 v4 v5 v6
                                (coe d744 v0 v1 v2 v3 v4 v5 v6 v7
                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                                   v11)
                                v9)
                             (coe du216 v4
                                (coe du370 v0 v1 v2 v3 v4 v5 v6
                                   (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                                   v9)
                                v11)
                             (coe du216 v4 (coe du318 v4 v5 v10 v9) v11)
                             (coe d1180 v0 v1 v2 v3 v4 v5 v6 v7
                                (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                                v11
                                v9)
                             (coe du246 v4
                                (coe du216 v4 (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v10 v9) v11)
                                (coe MAlonzo.Code.Algebra.Operations.du130 (coe du140 v4)
                                   (coe du318 v4 v5 v10 v9)
                                   v11)
                                (coe du216 v4 (coe du318 v4 v5 v10 v9) v11)
                                (coe MAlonzo.Code.Function.du176
                                   (coe d1260 v0 v1 v2 v3 v4 v5 v6 v7 v10 v9)
                                   (coe du224 v4 (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v10 v9)
                                      (coe du318 v4 v5 v10 v9)
                                      v11
                                      v11)
                                   erased)
                                (coe du244 v4 (coe du216 v4 (coe du318 v4 v5 v10 v9) v11))))
        C296 v10 -> coe MAlonzo.Code.Relation.Binary.PreorderReasoning.d62
                      (coe du246 v4
                         (coe du370 v0 v1 v2 v3 v4 v5 v6
                            (coe du758 v0 v1 v2 v3 v4 v5 v6
                               (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10))
                            v9)
                         (coe du98 v4
                            (coe du370 v0 v1 v2 v3 v4 v5 v6
                               (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                               v9))
                         (coe du98 v4 (coe du318 v4 v5 v10 v9))
                         (coe du1206 v0 v1 v2 v3 v4 v5 v6
                            (coe d784 v0 v1 v2 v3 v4 v5 v6 v7 v10)
                            v9)
                         (coe du246 v4
                            (coe du98 v4 (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v10 v9))
                            (coe MAlonzo.Code.Algebra.RingSolver.AlmostCommutativeRing.d168 v4
                               (coe du318 v4 v5 v10 v9))
                            (coe du98 v4 (coe du318 v4 v5 v10 v9))
                            (coe du104 v4 (coe d806 v0 v1 v2 v3 v4 v5 v6 v7 v10 v9)
                               (coe du318 v4 v5 v10 v9)
                               (coe d1260 v0 v1 v2 v3 v4 v5 v6 v7 v10 v9))
                            (coe du244 v4 (coe du98 v4 (coe du318 v4 v5 v10 v9)))))
        _ -> coe MAlonzo.RTE.mazUnreachableError
name1294 = "Algebra.RingSolver._._\8860_"
d1294 v0 v1 v2 v3 v4 v5 v6 = du1294
du1294
  = coe MAlonzo.Code.Relation.Binary.Reflection.d138 erased erased
      erased
      erased
      erased
      erased
      erased
      erased
      erased
      erased
name1296 = "Algebra.RingSolver._.prove"
d1296 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Relation.Binary.Reflection.d86 erased erased
      erased
      erased
      erased
      (coe du142 v4)
      erased
      (coe d318 erased erased erased erased v4 v5 erased)
      (coe d806 v0 v1 v2 v3 v4 v5 v6)
      (coe d1260 v0 v1 v2 v3 v4 v5 v6)
name1298 = "Algebra.RingSolver._.solve"
d1298 v0 v1 v2 v3 v4 v5 v6
  = coe MAlonzo.Code.Relation.Binary.Reflection.d110 erased erased
      erased
      erased
      erased
      (coe du142 v4)
      (\ v7 -> coe C286)
      (coe d318 erased erased erased erased v4 v5 erased)
      (coe d806 v0 v1 v2 v3 v4 v5 v6)
      (coe d1260 v0 v1 v2 v3 v4 v5 v6)