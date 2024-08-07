package lsproduct

import (
	"errors"
	"unicode"
)

func LargestSeriesProduct(digits string, span int) (int64, error) {
	if span < 0 {
		return 0, errors.New("span must not be negative")
	}

	if span > len(digits) {
		return 0, errors.New("span must be smaller than string length")
	}

	iterations := len(digits) - span + 1

	var counter int64 = -1
	for i := 0; i < iterations; i++ {
		substr := digits[i : i+span]
		var total int64 = 1
		for _, v := range substr {
			if !unicode.IsNumber(v) {
				return 0, errors.New("digits input must only contain digits")
			}
			total *= int64(v - '0')
		}
		if total > counter {
			counter = total
		}
	}
	return counter, nil
}
