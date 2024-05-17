package lasagna

import (
	"slices"
)

const (
	SAUCE_LABEL  = "sauce"
	NOODLE_LABEL = "noodles"
)

func PreparationTime(layers []string, averagePreparationTime int) int {
	if averagePreparationTime == 0 {
		averagePreparationTime = 2
	}
	return len(layers) * averagePreparationTime
}

func Quantities(layers []string) (int, float64) {
	var totalSauce float64 = 0.0
	var totalNoodles int = 0
	for _, v := range layers {
		if v == SAUCE_LABEL {
			totalSauce += 0.2
		}
		if v == NOODLE_LABEL {
			totalNoodles += 50
		}
	}
	return totalNoodles, totalSauce
}

func AddSecretIngredient(friendList, myList []string) []string {
	var secretIng string
	for _, secret := range friendList {
		idx := slices.IndexFunc(myList, func(ing string) bool { return ing == secret })
		if idx < 0 {
			secretIng = secret
		}
	}
	myList[len(myList)-1] = secretIng
	return myList
}

func ScaleRecipe(quantitiesForTwo []float64, numberPortions int) []float64 {
	neededQuantities := make([]float64, len(quantitiesForTwo))
	for i, v := range quantitiesForTwo {
		quantitiesForOne := v / 2
		neededQuantities[i] = quantitiesForOne * float64(numberPortions)
	}
	return neededQuantities
}

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
//
