package elon

import "fmt"

func (car *Car) Drive() {
	if car.battery-car.batteryDrain >= 0 {
		car.battery -= car.batteryDrain
		car.distance += car.speed
	}
}

func (car Car) DisplayDistance() string {
	return fmt.Sprintf("Driven %v meters", car.distance)
}

func (car Car) DisplayBattery() string {
	return fmt.Sprintf("Battery at %v%%", car.battery)
}

func (car Car) CanFinish(trackDistance int) bool {
	consumeCycles := trackDistance / car.speed
	remaining := trackDistance%car.speed > 0
	if remaining {
		consumeCycles += 1
	}
	return car.battery-(consumeCycles*car.batteryDrain) >= 0
}

/*
* Another approach:
func (c *Car) CanFinish(trackDistance int) bool {
    return c.battery / c.batteryDrain * c.speed >= trackDistance
}
*/

// Your first steps could be to read through the tasks, and create
// these functions with their correct parameter lists and return types.
// The function body only needs to contain `panic("")`.
//
// This will make the tests compile, but they will fail.
// You can then implement the function logic one by one and see
// an increasing number of tests passing as you implement more
// functionality.
