package strand

func ToRNA(dna string) string {
	rna := ""
	for _, v := range dna {
		if v != 'G' && v != 'C' && v != 'T' && v != 'A' {
			rna += string(v)
		} else {
			var nv rune
			switch v {
			case 'G':
				nv = 'C'
			case 'C':
				nv = 'G'
			case 'T':
				nv = 'A'
			case 'A':
				nv = 'U'
			}
			rna += string(nv)
		}
	}
	return rna
}
