// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var children = 2;
var partnerName = "Sarah";
var geoLocation = "Ottawa";
var jobTitle = "Dentist";

document.write("You will be a " + jobTitle + "in " + geoLocation + ", and married to " + partnerName "with " + children + " kids");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentTime = new Date();
var birthYear = window.prompt("Enter your birth year","eg 1990");
var year = currentTime.getFullYear();
var age1 = year - birthYear;
var age2 = year - birthYear - 1;
document.write("You are either " + age2 + " or age " + age1);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = window.prompt("Enter your age:","eg 25");
var maxAge = window.prompt("Enter the age at which you need to be supplied:","eg 90");
var perDay = window.prompt("Enter how many you need a day:","eg 2");
var requiredSupply = (maxAge - age)*(365)*perDay;
document.write("You will need " + requiredSupply + " units to have enough to age " + maxAge);
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = window.prompt("Enter the radius of a circle:", "eg 5");
var circumference = 2*radius*Math.PI;
var area = Math.PI*(radius^2);
document.write("The circumference is " + Math.round(circumference*100)/100 +"<br />");
document.write("The area is " + Math.round(area*100)/100);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


