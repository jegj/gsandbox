// Package census simulates a system used to collect census data.
package census

// Resident represents a resident in this city.
type Resident struct {
	Address map[string]string
	Name    string
	Age     int
}

// NewResident registers a new resident in this city.
func NewResident(name string, age int, address map[string]string) *Resident {
	return &Resident{
		Name:    name,
		Age:     age,
		Address: address,
	}
}

// HasRequiredInfo determines if a given resident has all of the required information.
func (r *Resident) HasRequiredInfo() bool {
	var hasValidAdress bool
	for k := range r.Address {
		if k == "street" && r.Address[k] != "" {
			hasValidAdress = true
		}
	}
	return r.Name != "" && r.Address != nil && hasValidAdress
}

// Delete deletes a resident's information.
func (r *Resident) Delete() {
	r.Name = ""
	r.Age = 0
	r.Address = nil
}

// Count counts all residents that have provided the required information.
func Count(residents []*Resident) int {
	var counter int
	for _, res := range residents {
		if res.HasRequiredInfo() {
			counter++
		}
	}
	return counter
}
