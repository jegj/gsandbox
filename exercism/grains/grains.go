package grains

import (
	"errors"
	"math"
)

func Square(number int) (uint64, error) {
	if number <= 0 || number > 64 {
		return 0, errors.New("invalid input")
	}
	return uint64(math.Pow(float64(2), float64(number-1))), nil
}

func Total() uint64 {
	var acum uint64 = 0
	for i := 1; i <= 64; i++ {
		val, err := Square(i)
		if err == nil {
			acum += val
		}
	}
	return acum
}

/*
* func Total() uint64 {
	return uint64(maxUint64)
}
func Square(n int) (uint64, error) {
	if 1 > n || n > 64 {
		return uint64(0), errors.New("Invalid")
	}
	return uint64(1 << uint(n-1)), nil
}

*/
