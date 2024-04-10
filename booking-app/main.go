package main

import (
	"fmt"
	"strings"
)

func main() {
	conferenceName := "Go Conference"
	const conferenceTickets uint = 50
	var remainingTickets uint = 50

	greetUsers(conferenceName, conferenceTickets, remainingTickets)

	var bookings []string // slice
	//var bookings = []string{} // slice
	//bookings := []string{} // slice

	for {
		var userName string
		var lastName string
		var email string
		var userTickets uint
		firstNames := []string{}

		fmt.Println("Enter your first name:")
		fmt.Scan(&userName)

		fmt.Println("Enter your last name:")
		fmt.Scan(&lastName)

		fmt.Println("Enter your email:")
		fmt.Scan(&email)

		fmt.Println("Enter number of tickets:")
		fmt.Scan(&userTickets)

		isValidName := len(userName) >= 2 && len(lastName) >= 2
		isValidEmail := strings.Contains(email, "@")
		isValidTicketNumber := userTickets > 0 && userTickets <= remainingTickets

		if isValidName && isValidEmail && isValidTicketNumber {
			remainingTickets -= userTickets
			// bookings[0] = userName + " " + lastName
			bookings = append(bookings, userName+" "+lastName)

			/*
				fmt.Printf("Thw whole array %v\n", bookings)
				fmt.Printf("Array type %T\n", bookings)
				fmt.Printf("Array Length %v\n", len(bookings))
			*/

			for _, booking := range bookings {
				var names = strings.Fields(booking)
				firstNames = append(firstNames, names[0])
			}

			fmt.Printf("User %v %v for booking %v tickets.You will receive a confirmation email at %v \n", userName, lastName, userTickets, email)
			fmt.Printf("Remaining tickets %v for %v\n", remainingTickets, conferenceName)
			fmt.Printf("These are all the reservation %v\n", firstNames)

			var noTicketsRemaining bool = remainingTickets == 0

			if noTicketsRemaining {
				fmt.Println("Our conference is booked out")
				break
			}

		} else {
			fmt.Printf("Your input data is invalid. Try again")
			continue
		}
	}
}

func greetUsers(confName string, confTickets uint, remainingTickets uint) {
	fmt.Printf("conferenceTickets is %T, remainingTickets is %T and conferenceName is %T", confTickets, remainingTickets, confName)
	fmt.Printf("Welcome to %v booking application\n", confName)
	fmt.Printf("We have total of %v ticket and %v are still available\n", confTickets, remainingTickets)
	fmt.Println("Get your tickets here to attend")
}
