package pangram

import (
	"unicode"
)

func IsPangram(input string) bool {
	valid := true
	alphabetMap := make(map[rune]bool)

	for char := 'a'; char <= 'z'; char++ {
		alphabetMap[char] = false
	}

	for _, letter := range input {
		if unicode.IsLetter(letter) {
			lowerLetter := unicode.ToLower(letter)
			alphabetMap[lowerLetter] = true
		}
	}

	for _, useLetter := range alphabetMap {
		valid = valid && useLetter
	}

	return valid
}

/*
// IsPangram checks if a phrase is a pangram
func IsPangram(s string) bool {
	lookup := strings.ToLower(s)
	for chr := 'a'; chr <= 'z'; chr++ {
		if !strings.ContainsRune(lookup, chr) {
			return false
		}
	}
	return true
}
*/
