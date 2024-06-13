package parsinglogfiles

import (
	"fmt"
	"regexp"
	"strings"
)

func IsValidLine(text string) bool {
	re := regexp.MustCompile(`^\[(TRC|DBG|INF|WRN|ERR|FTL)\].*$`)
	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re := regexp.MustCompile(`\<[\~\*\=\-]*\>`)
	return re.Split(text, -1)
}

func CountQuotedPasswords(lines []string) int {
	re := regexp.MustCompile(`\".*([Pp][Aa][Ss][Ss][Ww][Oo][Rr][Dd]).*\"`)
	count := 0
	for _, line := range lines {
		if re.MatchString(line) {
			count++
		}
	}
	return count
}

func RemoveEndOfLineText(text string) string {
	re := regexp.MustCompile(`end\-of\-line\d+`)
	return re.ReplaceAllString(text, "")
}

func TagWithUserName(lines []string) []string {
	result := make([]string, len(lines))
	re := regexp.MustCompile(`\s*User\s+\w+\s+`)
	for index, line := range lines {
		sl := re.FindStringSubmatch(line)
		if len(sl) > 0 {
			userChunk := sl[0]
			name := strings.Trim(strings.ReplaceAll(userChunk, "User", ""), " ")
			prefix := fmt.Sprintf("[USR] %s ", name)
			result[index] = prefix + line
		} else {
			result[index] = line
		}
	}
	return result
}
