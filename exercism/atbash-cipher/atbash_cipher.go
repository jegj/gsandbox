package atbash

import (
	"strings"
	"unicode"
)

var ChiperMap = map[rune]rune{
	'a': 'z',
	'b': 'y',
	'c': 'x',
	'd': 'w',
	'e': 'v',
	'f': 'u',
	'g': 't',
	'h': 's',
	'i': 'r',
	'j': 'q',
	'k': 'p',
	'l': 'o',
	'm': 'n',
	'n': 'm',
	'o': 'l',
	'p': 'k',
	'q': 'j',
	'r': 'i',
	's': 'h',
	't': 'g',
	'u': 'f',
	'v': 'e',
	'w': 'd',
	'x': 'c',
	'y': 'b',
	'z': 'a',
}

func Atbash(s string) string {
	var result []string
	tmpResult := ""
	for _, letter := range s {
		if len(tmpResult) == 5 {
			result = append(result, tmpResult)
			tmpResult = ""
		}

		if unicode.IsLetter(letter) {
			nletter := ChiperMap[unicode.ToLower(letter)]
			tmpResult += string(nletter)
		} else if unicode.IsDigit(letter) {
			tmpResult += string(letter)
		}
	}
	if len(tmpResult) > 0 {
		result = append(result, tmpResult)
	}
	return strings.Join(result[:], " ")
}
