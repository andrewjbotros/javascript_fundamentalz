// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2){
	if (num1 > num2){
		return num1;
	} else if (num2 > num1){
		return num2;
	} else{
		return "neither. They're the same!";
	}
}

num1 = 5;
num2 = 10;
document.write("The greater number of " + num1 + " and " + num2 + " is " + greaterNum(num1, num2) + "<br />");

num3 = 20;
num4 = 40;
document.write("The greater number of " + num3 + " and " + num4 + " is " + greaterNum(num3, num4));

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(languageCode){
	if (languageCode == "es"){
		return "Seniorita, ci";
	}else if (languageCode == "de"){
		return "Das good, verld";
	}else if (languageCode == "en"){
		return "Hello, world";
	}else{
		return "Language code not supported";
	}
}

document.write(helloWorld("en") + "<br />");
document.write(helloWorld("es") + "<br />");
document.write(helloWorld("de") + "<br />");
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".




