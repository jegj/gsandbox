package anagram

import (
	"sort"
	"strings"
)

type sortRunes []rune

func (s sortRunes) Less(i, j int) bool {
	return s[i] < s[j]
}

func (s sortRunes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func (s sortRunes) Len() int {
	return len(s)
}

func SortString(s string) string {
	r := []rune(s)
	sort.Sort(sortRunes(r))
	return string(r)
}

func Detect(subject string, candidates []string) []string {
	var result []string
	nsubject := SortString(strings.ToLower(subject))
	for _, word := range candidates {
		nword := SortString(strings.ToLower(word))
		if nword == nsubject && strings.ToLower(subject) != strings.ToLower(word) {
			result = append(result, word)
		}
	}
	return result
}
