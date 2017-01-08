{-# LANGUAGE EmptyDataDecls, ExistentialQuantification,
  ScopedTypeVariables, NoMonomorphismRestriction, Rank2Types #-}
module MAlonzo.Code.Agda.Builtin.Char where
import MAlonzo.RTE (coe, erased)
import qualified Control.Exception
import qualified Data.Text
import qualified Data.Text.IO
import qualified MAlonzo.RTE
import qualified System.IO
import qualified Data.Char
import qualified Data.Text
import qualified MAlonzo.Code.Agda.Builtin.Bool
import qualified MAlonzo.Code.Agda.Builtin.Nat
name6 = "Agda.Builtin.Char.Char"
d6
  = error
      "MAlonzo Runtime Error: postulate evaluated: Agda.Builtin.Char.Char"
name8 = "Agda.Builtin.Char.primIsLower"
d8 = Data.Char.isLower
name10 = "Agda.Builtin.Char.primIsDigit"
d10 = Data.Char.isDigit
name12 = "Agda.Builtin.Char.primIsAlpha"
d12 = Data.Char.isAlpha
name14 = "Agda.Builtin.Char.primIsSpace"
d14 = Data.Char.isSpace
name16 = "Agda.Builtin.Char.primIsAscii"
d16 = Data.Char.isAscii
name18 = "Agda.Builtin.Char.primIsLatin1"
d18 = Data.Char.isLatin1
name20 = "Agda.Builtin.Char.primIsPrint"
d20 = Data.Char.isPrint
name22 = "Agda.Builtin.Char.primIsHexDigit"
d22 = Data.Char.isHexDigit
name24 = "Agda.Builtin.Char.primToUpper"
d24 = Data.Char.toUpper
name26 = "Agda.Builtin.Char.primToLower"
d26 = Data.Char.toLower
name28 = "Agda.Builtin.Char.primCharToNat"
d28 = (fromIntegral . fromEnum :: Char -> Integer)
name30 = "Agda.Builtin.Char.primNatToChar"
d30 = (toEnum . fromIntegral :: Integer -> Char)
name32 = "Agda.Builtin.Char.primCharEquality"
d32 = (\ x y -> ((==) :: Char -> Char -> Bool) ( x) ( y))