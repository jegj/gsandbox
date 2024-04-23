package main

import "fmt"

func UpdateSlice(in []string, t string) {
	in[len(in)-1] = t
	fmt.Printf("UpdatedSlice=>%v\n", in)
}

func GrowSlice(in []string, t string) {
	in = append(in, t)
	fmt.Printf("GrowSlice=>%v\n", in)
}

func main() {
	s := []string{"a", "b", "c"}
	UpdateSlice(s, "d")
	fmt.Println("in main after UpdateSlice:", s)
	GrowSlice(s, "e")
	fmt.Println("in main, after GrowSlice:", s)
}
