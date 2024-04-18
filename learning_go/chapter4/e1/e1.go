package main

import (
	"fmt"
	"math/rand/v2"
)

func main() {

	var numbers = make([]int, 100)

	for i := 0; i < 100; i++ {
		numbers[i] = rand.IntN(100)
	}

	for _, v := range numbers {
		// empty switch
		switch {
		case v%2 == 0:
			fmt.Println("Two!")
		case v%3 == 0:
			fmt.Println("Three!")
		case v%2 == 0 && v%3 == 0:
		default:
			fmt.Println("Never mind")

		}

	}

	fmt.Printf("===>%v\n", numbers)

}
