package gross

var PredefinedUnits = map[string]int{
	"quarter_of_a_dozen": 3,
	"half_of_a_dozen":    6,
	"dozen":              12,
	"small_gross":        120,
	"gross":              144,
	"great_gross":        1728,
}

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
	return PredefinedUnits
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	bill := make(map[string]int)
	return bill
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	quantity, exists := units[unit]
	if !exists {
		return false
	} else {
		bill[item] += quantity
		return true
	}
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	unitBillQty, itemInBillExists := bill[item]
	unitQuantity, unitExists := units[unit]
	if !itemInBillExists {
		return false
	}

	if !unitExists {
		return false
	}

	if unitBillQty-unitQuantity < 0 {
		return false
	}

	if unitBillQty-unitQuantity == 0 {
		delete(bill, item)
		return true
	}

	bill[item] -= unitQuantity
	return true
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	qty, exists := bill[item]
	if !exists {
		return 0, false
	} else {
		return qty, true
	}
}
