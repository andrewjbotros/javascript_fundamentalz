// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
  document.write("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids <br />");
}

tellFortune(2, "Sarah", "Ottawa", "Dancer");
tellFortune(2, "Doug", "Calgary", "Plumber");
tellFortune(2, "Tony", "Montreal", "Politician");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear) {
  	var age1 = year - birthYear;
	var age2 = year - birthYear - 1;
	document.write("You are either " + age2 + " or age " + age1);
}

var currentTime = new Date();
var year = currentTime.getFullYear();
var birthYear = window.prompt("Enter your birth year","eg 1990");
calculateAge(birthYear, year);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
	var maxAge = 85;
  	var requiredSupply = (maxAge - age)*(365)*amountPerDay;
	document.write("You will need " + Math.round(requiredSupply) + " to last you until the ripe old age of " + maxAge + ".<br />");
}

calculateSupply(28, 4);
calculateSupply(50, 4.2341);
calculateSupply(50, 9.134);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(radius) {
	var circumference = 2*radius*Math.PI;
	document.write("The circumference is " + Math.round(circumference*100)/100 +"<br />");
}

function calcArea(radius) {
	var area = Math.PI*(radius*radius);
	document.write("The area is " + Math.round(area*100)/100 + "<br />");
}

var radius = window.prompt("Enter the radius of a circle:", "eg 5");
calcCircumfrence(radius);
calcArea(radius);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

