// Package weather provides a function
// to show the conditions on target city.
package weather

// CurrentCondition specifies the condition.
var CurrentCondition string

// CurrentLocation specifies the location.
var CurrentLocation string

// Forecast return the actual condition on the target city.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
