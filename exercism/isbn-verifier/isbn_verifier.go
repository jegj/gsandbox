package isbn

import (
	"strings"
	"unicode"
)

func IsValidISBN(isbn string) bool {
	result := 0
	counter := 10
	carry := true

	if !strings.Contains(isbn, "-") && len(isbn) != 10 {
		return false
	}

	if strings.Contains(isbn, "-") && len(isbn) != 13 {
		return false
	}

	for index, v := range isbn {
		if unicode.IsNumber(v) {
			result += (int(v-'0') * counter)
			counter = counter - 1
		} else {
			if v == 'X' && index == len(isbn)-1 {
				result += (10 * counter)
				counter = counter - 1
			} else if v != '-' {
				carry = false
			}
		}
	}
	return result%11 == 0 && carry
}
