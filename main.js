// get program arguments
const args = process.argv.slice(2)

var numerical_string = args.map(function(currentValue) {
	var acc = ""

	for(var i = 0; i<currentValue.length; i++) {
		var digit = currentValue.charAt(i);
		var numerical = ""
		if(digit=="1")
			numerical = "One"
		else if(digit=="2")
			numerical = "Two"
		else if(digit=="3")
			numerical = "Three"
		else if(digit == "4")
			numerical = "Four"
		else if(digit == "5")
			numerical = "Five"
		else if(digit == "6")
			numerical = "Six"
		else if(digit == "7")
			numerical = "Seven"
		else if(digit == "8")
			numerical = "Eight"
		else if(digit == "9")
			numerical = "Nine"
		else if(digit == "0")
			numerical = "Zero"
		acc = acc + numerical
	}

	return acc
})

console.log(numerical_string)