// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favouriteRecipe = {
	title: "Alfredo",
	servings: 6,
	ingredients: ['garlic', 'olive oil', 'cream', 'butter', 'cheese', 'pepper', 'wine']
}

function printIngredients (recipe) {
	for (i=0; i < recipe['ingredients'].length; i++){
		document.write(recipe['ingredients'][i] + "<br />");
	}
}

function printRecipe (recipe) {
	document.write(recipe['title'] + "<br />Serves: " + recipe['servings'] + "<br />Ingredients: <br />");
	printIngredients(recipe);
}

printRecipe(favouriteRecipe);

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var book1 = {
	title: "Born to Run",
	author: "Eric Deville",
	alreadyRead: false

}

var book2 = {
	title: "Free Spirit",
	author: "Naomi Boom",
	alreadyRead: true
}

books = [book1, book2]

function list(books){
	for (i=0; i < books.length; i++){
		document.write(books[i]['title'] + " by " + books[i]['author'] + "<br />");
	}
}

list(books)

function listRefined(books){
	for (i=0; i < books.length; i++){
		if (books[i]['alreadyRead'] == true){
			document.write("You already read " + books[i]['title'] + " by " + books[i]['author'] + "<br />");
		}else{
			document.write("You still need to read " + books[i]['title'] + " by " + books[i]['author'] + "<br />");
		}
	}
}

listRefined(books)

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movie = {
	title: "A Living Hell",
	duration: "1 hour 20 minutes",
	stars: ["Guy 1", "Guy 2", "Girl 1", "Girl 2"]
}

function listStars(stars){
	for (i=0; i < stars.length - 1; i++){
		document.write(stars[i] + ", ");
	}
	document.write(stars[stars.length-1] + ".")
}


function movieDetails(movie){
	document.write(movie['title'] + " lasts for " + movie['duration'] + ". Stars: ");
	listStars(movie['stars']);
}

movieDetails(movie);

