package main

import (
	"errors"
	"fmt"
	"os"
)

var (
	add = func(i, j int) (int, error) { return i + j, nil }
	sub = func(i, j int) (int, error) { return i - j, nil }
	mul = func(i, j int) (int, error) { return i * j, nil }
	div = func(i, j int) (int, error) {
		if j == 0 {
			return 0, errors.New("division by zero")
		}
		return i / j, nil
	}
)

var opMap = map[string]func(int, int) (int, error){
	"+": add,
	"-": sub,
	"*": mul,
	"/": div,
}

func main() {
	x := opMap["/"]
	result, error := x(100, 0)
	if error != nil {
		fmt.Println(error)
		os.Exit(1)
	} else {
		fmt.Printf("====>%v\n", result)
	}
}
