// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var favouriteColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
for (var i = 0; i < favouriteColors.length; i++) {
  document.write("My #" + (i+1) + " choice is " + favouriteColors[i] + "<br />");
}

for (var i = 0; i < favouriteColors.length; i++) {
	if ((i+1)%100==11){
  		document.write("My " + (i+1) + "th choice is " + favouriteColors[i] + "<br />");
  	}else if ((i+1)%10==2){
  		document.write("My " + (i+1) + "nd choice is " + favouriteColors[i] + "<br />");
  	}else if ((i+1)%10==3){
  		document.write("My " + (i+1) + "rd choice is " + favouriteColors[i] + "<br />");
  	}else if ((i+1)%10 == 1){
  		document.write("My " + (i+1) + "st choice is " + favouriteColors[i] + "<br />");
  	}else{
  		document.write("My " + (i+1) + "th choice is " + favouriteColors[i] + "<br />");
  	}
}
