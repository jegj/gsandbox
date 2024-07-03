package luhn

import (
	"fmt"
	"unicode"
)

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func removeWhitespaces(s string) string {
	var result []rune
	for _, r := range s {
		if !unicode.IsSpace(r) {
			result = append(result, r)
		}
	}
	return string(result)
}

func runeToNumber(r rune) (int, bool) {
	if unicode.IsDigit(r) {
		return int(r - '0'), true
	}
	return 0, false
}

func Valid(id string) bool {
	reverseId := reverseString(id)
	reserverNumberId := removeWhitespaces(reverseId)
	valid := true
	acum := 0

	if len(reserverNumberId) < 2 {
		return false
	} else {
		fmt.Printf("===>%s", reserverNumberId)
		for index, idDigit := range reserverNumberId {
			digit, ok := runeToNumber(idDigit)
			if ok {
				if index%2 != 0 {
					doubleDigit := digit * 2
					if doubleDigit >= 10 {
						acum += doubleDigit - 9
					} else {
						acum += doubleDigit
					}
				} else {
					acum += digit
				}
			} else {
				valid = false
				break
			}
		}
	}

	if valid {
		return acum%10 == 0
	} else {
		return valid
	}
}
