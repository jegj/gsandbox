package rotationalcipher

func RotationalCipher(plain string, shiftKey int) string {
	rotation := ""
	if shiftKey == 0 || shiftKey == 26 {
		return plain
	}

	for _, v := range plain {
		if v >= 'a' && v <= 'z' {
			rotation += string('a' + (v-'a'+rune(shiftKey))%26)
		} else if v >= 'A' && v <= 'Z' {
			rotation += string('A' + (v-'A'+rune(shiftKey))%26)
		} else {
			rotation += string(v)
		}
	}
	return rotation
}
