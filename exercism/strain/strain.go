package strain

// Implement the "Keep" and "Discard" function in this file.

// You will need typed parameters (aka "Generics") to solve this exercise.
// They are not part of the Exercism syllabus yet but you can learn about
// them here: https://go.dev/tour/generics/1

type CompareFunc[T any] func(a T) bool

func Keep[T any](collection []T, compare CompareFunc[T]) []T {
	var result []T
	for _, member := range collection {
		if compare(member) {
			result = append(result, member)
		}
	}
	return result
}

func Discard[T any](collection []T, compare CompareFunc[T]) []T {
	var result []T
	for _, member := range collection {
		if !compare(member) {
			result = append(result, member)
		}
	}
	return result
}

/*
func Discard[T any](list []T, filter func(T) bool) []T {
	return Keep(list, func(value T) bool { return !filter(value) })
}
*/
