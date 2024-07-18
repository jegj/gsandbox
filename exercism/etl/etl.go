package etl

import "unicode"

func Transform(in map[int][]string) map[string]int {
	result := make(map[string]int)
	for value, letters := range in {
		for _, letter := range letters {
			result[string(unicode.ToLower(rune(letter[0])))] = value
		}
	}
	return result
}
