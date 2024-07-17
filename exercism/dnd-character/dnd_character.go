package dndcharacter

import (
	"math"
	"math/rand"
)

type Character struct {
	Strength     int
	Dexterity    int
	Constitution int
	Intelligence int
	Wisdom       int
	Charisma     int
	Hitpoints    int
}

// Modifier calculates the ability modifier for a given ability score
func Modifier(score int) int {
	return int(math.Floor(float64(score-10) / 2.0))
}

// Ability uses randomness to generate the score for an ability
func Ability() int {
	smaller := -1
	sum := 0
	for i := 0; i < 4; i++ {
		randomNumber := rand.Intn(6) + 1
		if smaller < randomNumber {
			smaller = randomNumber
		}
		sum += randomNumber
	}
	return sum - smaller
}

// GenerateCharacter creates a new Character with random scores for abilities
func GenerateCharacter() Character {
	strength := Ability()
	dextery := Ability()
	constitution := Ability()
	intelligence := Ability()
	wisdom := Ability()
	charisma := Ability()
	hitpoints := 10 + Modifier(constitution)

	player := Character{
		Dexterity:    dextery,
		Strength:     strength,
		Constitution: constitution,
		Intelligence: intelligence,
		Wisdom:       wisdom,
		Charisma:     charisma,
		Hitpoints:    hitpoints,
	}

	return player
}
