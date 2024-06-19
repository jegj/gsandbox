package collatzconjecture

import "errors"

func CollatzConjecture(n int) (int, error) {
	steps := 0
	for {
		if n <= 0 {
			return 0, errors.New("positive number")
		} else if n == 1 {
			break
		} else if n%2 == 0 {
			n = n / 2
		} else {
			n = 3*n + 1
		}
		steps++
	}
	return steps, nil
}
