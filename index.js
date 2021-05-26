//1. Save a random whole number between -10 and 10 to a variable.

const randomInteger = Math.round((Math.random() * 20) - 10);

console.log(randomInteger);

console.log(".--------------------------------------------------------------");


//2. If that variable is greater than 0, print "Ye" and otherwise print "No"


if (randomInteger > 0) {
    console.log("Ye");
} else {
    console.log("No");
}

console.log(".--------------------------------------------------------------");


//3. If that variable is greater than 5, print "Winner", otherwise if that variable is greather than 0, print "OK", otherwise print "Try again!"

if (randomInteger > 0 && randomInteger < 5) {
    console.log("OK");
} else if (randomInteger > 5) {
    console.log("Winner");
} else {
    console.log("Try again!");
}

console.log(".--------------------------------------------------------------");



//4. Save another random number between -10 and 10 to a variable.

console.log(".--------------------------------------------------------------");


const newRandomInteger = Math.round((Math.random() * 20) - 10);

console.log(newRandomInteger);

console.log(".--------------------------------------------------------------");


//5. If both variables are more than 5, print "Good scores!"

if (randomInteger > 5 && newRandomInteger > 5) {
    console.log("Good scores!");
}

console.log(".--------------------------------------------------------------");


//6. If either variable is below -9, print "Minus nine!"

if (randomInteger < -9 || newRandomInteger < -9) {
    console.log("Minus nine!");
}

console.log(".--------------------------------------------------------------");


//7. Create a variable to store a message. If your random numbers added together is smaller than zero, save the message "We have gone sub zero!". Otherwise, set the message to null.


let message = "";

if ((randomInteger + newRandomInteger) < 0) {
    message = "We have gone sub zero!";
    console.log(message);
} else {
    message = null;
    console.log(message);
}


console.log(".--------------------------------------------------------------");