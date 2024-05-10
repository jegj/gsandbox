package blackjack

var m map[string]int

var cards = map[string]int{
	"ace":   11,
	"two":   2,
	"three": 3,
	"four":  4,
	"five":  5,
	"six":   6,
	"seven": 7,
	"eight": 8,
	"nine":  9,
	"ten":   10,
	"jack":  10,
	"queen": 10,
	"king":  10,
}

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	return cards[card]
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	switch {
	case card1 == "ace" && card2 == "ace":
		return "P"
	case (cards[card1]+cards[card2]) == 21 && (dealerCard != "ace" && dealerCard != "jack" && dealerCard != "queen" && dealerCard != "king" && dealerCard != "ten"):
		return "W"
	case (cards[card1]+cards[card2]) == 21 && (dealerCard == "ace" || dealerCard == "jack" || dealerCard == "queen" || dealerCard == "king" || dealerCard == "ten"):
		return "S"
	case (cards[card1]+cards[card2] >= 17 && cards[card1]+cards[card2] <= 20):
		return "S"
	case (cards[card1]+cards[card2] >= 12 && cards[card1]+cards[card2] <= 16) && cards[dealerCard] < 7:
		return "S"
	case (cards[card1]+cards[card2] >= 12 && cards[card1]+cards[card2] <= 16) && cards[dealerCard] >= 7:
		return "H"
	case (cards[card1]+cards[card2] <= 11):
		return "H"
	default:
		return ""
	}
}
