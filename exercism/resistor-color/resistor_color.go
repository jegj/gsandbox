package resistorcolor

var colors = map[string]int{
	"black":  0,
	"brown":  1,
	"red":    2,
	"orange": 3,
	"yellow": 4,
	"green":  5,
	"blue":   6,
	"violet": 7,
	"grey":   8,
	"white":  9,
}

// Colors returns the list of all colors.
func Colors() []string {
	result := make([]string, 0, len(colors))
	for colorKey := range colors {
		result = append(result, colorKey)
	}
	return result
}

// ColorCode returns the resistance value of the given color.
func ColorCode(color string) int {
	code, exists := colors[color]
	if exists {
		return code
	} else {
		return -1
	}
}
