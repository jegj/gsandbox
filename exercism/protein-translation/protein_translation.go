package protein

import "errors"

var (
	ErrStop        = errors.New("stop")
	ErrInvalidBase = errors.New("invalid base")
)

var codonsToProtein = map[string]string{
	"AUG": "Methionine",
	"UUU": "Phenylalanine",
	"UUC": "Phenylalanine",
	"UUA": "Leucine",
	"UUG": "Leucine",
	"UCU": "Serine",
	"UCC": "Serine",
	"UCA": "Serine",
	"UCG": "Serine",
	"UAU": "Tyrosine",
	"UAC": "Tyrosine",
	"UGU": "Cysteine",
	"UGC": "Cysteine",
	"UGG": "Tryptophan",
	"UAA": "STOP",
	"UAG": "STOP",
	"UGA": "STOP",
}

func FromRNA(rna string) ([]string, error) {
	proteins := make([]string, 0, len(rna)/3)
	for i := 0; i < len(rna); i += 3 {
		protein, err := FromCodon(rna[i : i+3])
		if err == ErrStop {
			break
		}
		if err != nil {
			return proteins, err
		}
		proteins = append(proteins, protein)
	}
	return proteins, nil
}

/*
func FromRNA(rna string) ([]string, error) {
	counter := 0
	codon := ""
	var proteins []string
	for _, v := range rna {
		if counter < 3 {
			codon += string(v)
			counter += 1
		} else {
			protein, error := FromCodon(codon)
			if error != nil {
				if error == ErrStop {
					return proteins, nil
				} else {
					return nil, error
				}
			} else {
				proteins = append(proteins, protein)
			}
			codon = ""
			codon += string(v)
			counter = 1
		}
	}

	if len(codon) == 3 {
		protein, error := FromCodon(codon)
		if error != nil {
			if error == ErrStop {
				return proteins, nil
			} else {
				return nil, error
			}
		} else {
			proteins = append(proteins, protein)
		}
	}
	return proteins, nil
}
*/

func FromCodon(codon string) (string, error) {
	protein, exists := codonsToProtein[codon]
	if exists {
		if protein == "STOP" {
			return "", ErrStop
		} else {
			return protein, nil
		}
	} else {
		return "", ErrInvalidBase
	}
}
