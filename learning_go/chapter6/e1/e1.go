package main

import "fmt"

type person struct {
	firstName string
	lastName  string
	age       int
}

func MakesPerson(firstName string, lastName string, age int) person {
	return person{
		firstName: firstName,
		lastName:  lastName,
		age:       age,
	}
}

func MakePersonPointer(firstName string, lastName string, age int) *person {
	p := person{
		firstName: firstName,
		lastName:  lastName,
		age:       age,
	}
	return &p
}

func main() {
	p1 := MakesPerson("javier", "galarza", 33)
	p2 := MakesPerson("javierp", "galarzap", 33)

	fmt.Printf("===>%v %v", p1, p2)
}
