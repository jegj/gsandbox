package clock

import "fmt"

// Define the Clock type here.

type Clock struct {
	hours   int
	minutes int
}

func New(h, m int) Clock {
	return Clock{
		hours:   h,
		minutes: m,
	}.Adjust()
}

func (c Clock) Add(m int) Clock {
	return Clock{hours: c.hours, minutes: c.minutes + m}.Adjust()
}

func (c Clock) Subtract(m int) Clock {
	return Clock{hours: c.hours, minutes: c.minutes - m}.Adjust()
}

func (c Clock) Adjust() Clock {
	remainingHours := 0
	additionalHours := 0
	remainingMInutes := 0

	if c.hours < 0 {
		remainingHours = c.hours%24 + 24
	} else {
		remainingHours = c.hours % 24
	}

	if c.minutes < 0 {
		additionalHours = c.minutes/60 + 24 - 1
		remainingMInutes = c.minutes%60 + 60
	} else {
		additionalHours = c.minutes / 60
		remainingMInutes = c.minutes % 60
	}

	hours := (remainingHours + additionalHours) % 24
	if hours >= 0 {
		if remainingMInutes == 60 {
			remainingMInutes = 0
			hours += 1
		}
	} else {
		hours += 24
	}

	return Clock{
		hours:   hours,
		minutes: remainingMInutes,
	}
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.hours, c.minutes)
}

// elegant solution: https://exercism.org/tracks/go/exercises/clock/solutions/alexshd
