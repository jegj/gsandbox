package techpalace

import (
	"fmt"
	"strings"
)

// WelcomeMessage returns a welcome message for the customer.
func WelcomeMessage(customer string) string {
	return fmt.Sprintf("Welcome to the Tech Palace, %v", strings.ToUpper(customer))
}

// AddBorder adds a border to a welcome message.
func AddBorder(welcomeMsg string, numStarsPerLine int) string {
	result := ""
	result += strings.Repeat("*", numStarsPerLine)
	result += "\n"
	result += welcomeMsg
	result += "\n"
	result += strings.Repeat("*", numStarsPerLine)
	return result
}

// CleanupMessage cleans up an old marketing message.
func CleanupMessage(oldMsg string) string {
	result := ""
	result = strings.ReplaceAll(oldMsg, "*", "")
	result = strings.ReplaceAll(result, "\t", "")
	result = strings.ReplaceAll(result, "\n", "")
	result = strings.Trim(result, " ")
	return result
}
