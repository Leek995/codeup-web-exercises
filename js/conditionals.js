"use strict"
/* Class example
// Conditional practice
var username = prompt("Enter your username").toLowerCase();
var password = prompt("Enter your password").toLowerCase();

var curr_username = "username";
var curr_password = "password";

if(username === curr_username && password === curr_password) {
    alert("You have successfully logged in :)");
}else if(username !== curr_username) {
    alert("invalid credentials :(");
}else if(username !== curr_username && password !== curr_password){
    alert("invaild credentials");
}else if(password !== curr_password) {
    alert("invalid credentials :(");
}else{
    alert("invalid username & password");
}
*/
/*
//butched Trenary
//finish at home
var isRaining;
isRaining = confirm("is it raining?");
*/

/*
// Class Example
var favorite_movie = prompt("What is your favorite movie").toLowerCase();
switch(favorite_movie) {
    case "toy story":
        // try alert
        console.log("That is a classic movie!")
        break;
    case "loin king":
        console.log("mid");
        break;
    case "back to the future":
        console.log("It's a 10/10");
        break;
    default:
        alert("invalid entry");
}
*/
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

 function analyzeColor(color) {
     isNaN(color);
     if(color === 'red') {
         console.log("I'll paint the sky red for you.");
    }else if(color === 'purple') {
         console.log("Barnie is purple.");

     } else if(color === 'green') {
         console.log("Money is green & my favorite color.");

     }else if(color === 'orange') {
         console.log("My Dad's favorite color is orange.");

     }else if(color === 'blue') {
         console.log("I bleed blue for awhile. Go Westside High School!");

     }else if(color === 'black') {
         console.log("My wardrobe is full of black clothings.");

     }else if(color === 'white') {
         console.log("I wear white on special occasions.");

     }else{
         console.log("Wow! Never knew that was a color. I need to expand my color pallet.");
     }
 }
 analyzeColor(prompt("What colors do you know?"));
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
//
// analyzeColor(randomColor);
//
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
 var analyze_color = prompt("What colors do you know?");

switch(analyze_color) {
   case 'red':
       console.log("I'll paint the sky red for you.");
        break;
   case 'purple':
       console.log("Barnie is purple.");
        break;
   case 'green':
        console.log("Money is green & my favorite color.");
        break;
    case 'orange':
        console.log("My Dad's favorite color is orange.");
        break;
     case 'blue':
        console.log("I bleed blue for awhile. Go Westside High School!")
        break;
     case 'black':
         console.log("I wear white on special occasions.");
         break;
     case 'white':
         console.log("My wardrobe is full of black clothings.");
         break;
     default:
         console.log("Wow! Never knew that was a color. I need to expand my color pallet.");
         break;
 }
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
// var user_color = prompt("Pass me a color");
// alert("Your color was " + user_color);
// analyzeColor(user_color);
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

function calculatedTotal(lucky_number, total_amount) {
    var discount_applied;
    if(lucky_number === 0) {
        alert("There is no discount.");
        alert("Your total amount is $" + total_amount );
    }else if(lucky_number === 1) {
        alert("10% off");
        total_amount.toFixed(3);
        total_amount = total_amount - (total_amount * 0.10);
        alert("Your total amount is $" + total_amount);
    }else if(lucky_number === 2) {
        alert("25% off");
        total_amount.toFixed(3);
        total_amount = total_amount - (total_amount * 0.25);
        alert("Your total amount is $" + total_amount);
    }else if(lucky_number === 3) {
        alert("35% off");
        total_amount.toFixed(3);
        total_amount = total_amount - (total_amount * 0.35);
        alert("Your total amount is $" + total_amount);
    }else if(lucky_number === 4) {
        alert("50% off");
        total_amount.toFixed(3);
        total_amount = total_amount - (total_amount * 0.50);
        alert("Your total amount is $" + total_amount);
    }else if(lucky_number === 5) {
        alert("FREE");
        total_amount = 0;
        alert("Your total amount is $" + total_amount);
    }else if(lucky_number > 5) {
        alert("Hey! That's not a number!");
        lucky_number = false;
    }
}
calculatedTotal(0, 179);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// function calcs(input_lucky_number) {
//     input_lucky_number = confirm("What was your lucky number?");
//     input_lucky_number = prompt("Enter number here:");
//     if (input_lucky_number) {
//         if (input_lucky_number > 0) {
//             alert("Your number is positive.");
//
//             var plus_one_hundred = 100 + parseInt(input_lucky_number);
//             alert("Your number plus 100 is, " + plus_one_hundred);
//             calculatedTotal(input_lucky_number, 300);
//         }else {
//             alert("Your number is odd.");
//         }
//     }else {
//         alert("Have a good day");
//     }
//
// }

var isTrue = confirm("Would you like to raffle?");
if(isTrue){
    var raffle_number = prompt("What was the number: ");
    if(isNaN(raffle_number)){
        alert("this is not a number!")
    }else{
        if(raffle_number % 2 === 0){
        alert("Your number is even!");
    }else if(raffle_number % 2 !== 0){
        alert("Your number is odd!");
    }
    var plus_some = (raffle_number) + 100;
    alert(`${raffle_number} + 100 = ${plus_some}`);
    if(plus_some < 0){
        alert(`That's a negative number ${plus_some}`);
    }
    if(plus_some > 0){
        alert(`That's a positive number ${plus_some}`);
    }
};


