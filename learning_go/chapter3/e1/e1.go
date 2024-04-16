package main

import (
	"fmt"
)

func main() {

	var greetings []string = []string{"Hello", "Hola", "नमस्का", "こんにちは", "Прив"}
	var s1 []string = greetings[:2]
	var s2 []string = greetings[2:4]
	var s3 []string = greetings[3:]

	fmt.Printf("===>%v\n", s1)
	fmt.Printf("===>%v\n", s2)
	fmt.Printf("===>%v\n", s3)

}
