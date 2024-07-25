package resistorcolorduo

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

/*
func Value(colors []string) int {
	sum := ""
	counter := 0
	for _, color := range colors {
		v := ColorCode(color)
		if v >= 0 && counter < 2 {
			sum += fmt.Sprint(v)
			counter += 1
		}
	}

	nsum, err := strconv.Atoi(sum)
	if err != nil {
		return -1
	}
	return nsum
}
*/

func Value(icolors []string) int {
	return colors[icolors[0]]*10 + colors[icolors[1]]
}
