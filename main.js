///////** CREATING CLASSES **//////

class Books {
    // PROPERTIES
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // METHODS
    // not necessary to put parameters - this already references them
    displayInfo() {
        console.log(`The book is ${this.title} by ${this.author}, published in ${this.year}.`)
    }
}

// Creating an object using books class as template
let myFirstBook = new Books("JavaScript Random Book", "Some Guy", "2021");

console.log(myFirstBook);

myFirstBook.displayInfo();


////** EXTENDING CLASSES **///////

class Fiction extends Books {

    constructor(title, author, year, genre) {
        // You need to import parent properites using the super keywords
        // If you have multiple parameters, separate them with commas! Don't import individually
        super(title, author, year);
        // super(author);
        // super(year);
        this.genre = genre;
    }

    displayGenre() {
        console.log(`This is a ${this.genre} book.`);
    }
}

let myFictionBook = new Fiction("some title", "some writer", "1980", "thriller");

// log the object created through the extended class
console.log(myFictionBook);

// This will log the declaration of the extended class
console.log(Fiction);


class NonFiction extends Books {

    constructor(title, author, year, field) {
        // You need to import parent properites using the super keywords
        // If you have multiple parameters, separate them with commas! Don't import individually
        super(title, author, year);
        // super(author);
        // super(year);
        this.field = field;
    }

    // A new method for the extended class
    displayField() {
        console.log(`This book is in the ${this.field} field.`)
    }

    // Updated method from the parent class
    displayInfo() {
        // also use super keyword to import methods from parent class
        super.displayInfo();
        // adding something new - this method will be updated when called from an object created through the extended class 
        console.log("BTW, this is a nonfiction book.")
    }
}

let myFirstNonFictionBook = new NonFiction("Another JavaScript Book", "Some other guy", "1990", "science");

console.log(myFirstNonFictionBook);

// The updated method from the extended class will log the info AND do the added console.log part on line 74
myFirstNonFictionBook.displayInfo();

// This doesn't work because an object created through the parent books class cannot reach method in extended nonfiction class >>>>>
// myFirstBook.displayField("science");

let mySecondNonFictionBook = new NonFiction("HTML Book", "HTML guy", "2000", "programming");

console.log(mySecondNonFictionBook);
mySecondNonFictionBook.displayInfo();

// Looping through an object generated through class works normally
for (const key in myFirstBook) {
    console.log(key);
    console.log(myFirstBook[key]);
}

// Note: looping through keys of a class will only return properties, but not methods
for (const key in Books) {
    // this just gives us author, title, year, but not displayInfo method
    console.log(key);
}