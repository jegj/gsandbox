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
	// var persons []person
	var persons []person = make([]person, 0, 10_000_000)
	for i := 0; i < 10_000_000; i++ {
		persons = append(persons, person{
			firstName: fmt.Sprintf("javier_%v", i),
			lastName:  fmt.Sprintf("galarza_%v", i),
			age:       i,
		})
	}
	fmt.Printf("===>%v", len(persons))
}
