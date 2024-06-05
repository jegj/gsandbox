package thefarm

import (
	"errors"
	"fmt"
)

type InvalidCowsError struct {
	message string
	cows    int
}

func (e *InvalidCowsError) Error() string {
	return fmt.Sprintf("%v cows are invalid: %s", e.cows, e.message)
}

func DivideFood(fodder FodderCalculator, cows int) (float64, error) {
	var divide float64
	amount, err := fodder.FodderAmount(cows)
	if err != nil {
		return divide, err
	}
	factor, err := fodder.FatteningFactor()
	if err != nil {
		return divide, err
	}
	divide = (amount / float64(cows)) * factor
	return divide, nil
}

func ValidateInputAndDivideFood(fodder FodderCalculator, cows int) (float64, error) {
	var divide float64
	if cows <= 0 {
		return divide, errors.New("invalid number of cows")
	}
	return DivideFood(fodder, cows)
}

func ValidateNumberOfCows(cows int) error {
	if cows < 0 {
		return &InvalidCowsError{
			message: "there are no negative cows",
			cows:    cows,
		}
	}

	if cows == 0 {
		return &InvalidCowsError{
			message: "no cows don't need food",
			cows:    cows,
		}
	}
	return nil
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
