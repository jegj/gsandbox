package romannumerals

import "errors"

func ToRomanNumeral(input int) (string, error) {
	roman := ""
	if input <= 0 {
		return roman, errors.New("only positive")
	}

	if input > 3999 {
		return roman, errors.New("max 3999")
	}

	val := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	sym := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	for i := 0; i < len(val); i++ {
		for input >= val[i] {
			input -= val[i]
			roman += sym[i]
		}
	}
	return roman, nil
}
