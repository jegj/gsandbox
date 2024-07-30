// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package proverb should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package proverb

import "fmt"

// Proverb should have a comment documenting it.
func Proverb(rhyme []string) []string {
	result := make([]string, 0)
	size := len(rhyme)

	if size <= 0 {
		return result
	}

	lastProverb := fmt.Sprintf("And all for the want of a %s.", rhyme[0])

	if size == 1 {
		result = append(result, lastProverb)
		return result
	}

	for i := 0; i < size; i++ {
		if i+1 < size {
			result = append(result, fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i], rhyme[i+1]))
		}
	}

	result = append(result, lastProverb)

	// lastProverb := fmt.Sprintf("And all for the want of a %s.", )
	// Write some code here to pass the test suite.
	// Then remove all the stock comments.
	// They're here to help you get started but they only clutter a finished solution.
	// If you leave them in, reviewers may protest!
	return result
}
