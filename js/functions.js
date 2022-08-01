"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    console.log("Hello " + name);
    return alert("Hello " + name + " Welcome Back!");
}
 sayHello("Malik");
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
sayHello("Malik");
var helloMessage;
helloMessage = sayHello("Malik");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Malik";
sayHello(myName);
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    if (number === 2) {
        number;
        console.log("true");
    } else {
        !number;
        console.log("false");
    }
}
isTwo(2);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip (tip, price) {
    tip.toFixed(3);
    price.toFixed(3);

    var tip_percentage = ((tip * 0.01) * price);
    var bill_total = (price + tip_percentage);

    return alert("$" + bill_total);
}

calculateTip(60, 100);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var tp = prompt("What percentage of your bill are you giving to waiter?");
var p = prompt("How much is the bill?");

p = parseInt(p);
tp = parseInt(tp);

var calculating_tip = calculateTip(tp,p);
alert(calculating_tip);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscont(price, discount) {
    price.toFixed(3);
    discount.toFixed(3);
    var final_price = (price - (price * (discount * 0.01)));
    return alert("Discounted total is: $" + final_price);
}

var total = prompt("What is the price of item?");
total = parseInt(total);
var discount_percentage = prompt("How much is discounted?");
discount_percentage = parseInt(discount_percentage);

applyDiscont(total,discount_percentage);

