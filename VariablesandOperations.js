//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 5;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 255.75;

//create a variable to hold a person's middle initial
var middleInitial = "J";

//create a variable to hold true if it's hot outside and false if it's cold outside
var hotOutside = false;

//create a variable to hold a customer's first name
var customersFirstName = "Sarah";

//create a variable to hold a street address
var streetAddress = "2019 Elmwood Ln";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(hotOutside);
console.log(customersFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries +  2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "P";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
hotOutside = !hotOutside;
console.log(hotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customersFirstName +" "+ middleInitial + " Gallagher";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hello, my name is" + " " + fullName + " and I live at "+ streetAddress +".");