package isogram

import (
	"unicode"
)

func IsIsogram(word string) bool {
	letters := make(map[rune]int)
	valid := true
	for _, letter := range word {
		if unicode.IsLetter(letter) {
			_, exists := letters[unicode.ToLower(letter)]
			if !exists {
				letters[unicode.ToLower(letter)] = 1
			} else {
				valid = false
			}
		}
	}
	return valid

	/*
		  * for i, c := range s {
				if unicode.IsLetter(c) && strings.ContainsRune(s[i+1:], c) {
					return false
				}
			}
			return true
	*/
}
