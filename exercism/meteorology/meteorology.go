package meteorology

import "fmt"

type TemperatureUnit int

const (
	Celsius    TemperatureUnit = 0
	Fahrenheit TemperatureUnit = 1
)

func (sc TemperatureUnit) String() string {
	units := []string{"°C", "°F"}
	return units[sc]
}

// Add a String method to the TemperatureUnit type

type Temperature struct {
	degree int
	unit   TemperatureUnit
}

func (sc Temperature) String() string {
	return fmt.Sprintf("%v %s", sc.degree, sc.unit)
}

// Add a String method to the Temperature type

type SpeedUnit int

const (
	KmPerHour    SpeedUnit = 0
	MilesPerHour SpeedUnit = 1
)

func (sc SpeedUnit) String() string {
	units := []string{"km/h", "mph"}
	return units[sc]
}

// Add a String method to SpeedUnit

type Speed struct {
	magnitude int
	unit      SpeedUnit
}

func (sc Speed) String() string {
	return fmt.Sprintf("%v %s", sc.magnitude, sc.unit)
}

// Add a String method to Speed

type MeteorologyData struct {
	location      string
	temperature   Temperature
	windDirection string
	windSpeed     Speed
	humidity      int
}

func (sc MeteorologyData) String() string {
	return fmt.Sprintf("%s: %s, Wind %s at %s, %v%% Humidity", sc.location, sc.temperature, sc.windDirection, sc.windSpeed, sc.humidity)
}

// Add a String method to MeteorologyData
