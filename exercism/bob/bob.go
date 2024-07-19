// This is a "stub" file.  It's a little start on your solution.
// It's not a complete solution though; you have to write some code.

// Package bob should have a package comment that summarizes what it's about.
// https://golang.org/doc/effective_go.html#commentary
package bob

import (
	"strings"
	"unicode"
)

// Hey should have a comment documenting it.
func Hey(remark string) string {
	nremark := strings.TrimSpace(remark)
	silence := len(nremark) <= 0
	question := strings.HasSuffix(nremark, "?")
	yelling := strings.IndexFunc(nremark, unicode.IsLetter) >= 0 && strings.ToUpper(nremark) == nremark

	if question && !yelling {
		return "Sure."
	} else if yelling && !question {
		return "Whoa, chill out!"
	} else if question && yelling {
		return "Calm down, I know what I'm doing!"
	} else if silence {
		return "Fine. Be that way!"
	} else {
		return "Whatever."
	}
}
