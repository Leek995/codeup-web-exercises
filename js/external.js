"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

var favorite_color;
favorite_color = prompt("What is your favorite color?");
alert("No way that is my favorite color too! " + "I wear " + favorite_color + " a lot!");

alert("You've order 3 movies. Little Mermaid, Brother Bear, Herculus.");

var days_rented = 0;
var movie_1;
var movie_2;
var movie_3;

days_rented = prompt("How many days do you want to rent Little Mermaid?");
movie_1 = days_rented * 3;

days_rented = prompt("How many days do you want to rent Brother Bear?");
movie_2 = days_rented * 3;

days_rented = prompt("How many days do you want to rent Herculus?");
movie_3 = days_rented * 3;

var movie_amount = 0;
movie_amount = movie_1 + movie_2 + movie_3;

confirm("Your purchase amount is $" + movie_amount + ".");


