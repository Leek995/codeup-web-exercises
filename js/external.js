"use strict";
/*
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

var google_pay = 0;
var amazon_pay = 0;
var facebook_pay = 0;
var hours_worked =0;
var total = 0;
var google_total;
var amazon_total;
var facebook_total;

google_pay = prompt("How much did google pay you per hour?");
hours_worked = prompt( "How much hours did you work?");
google_total = hours_worked * google_pay;

amazon_pay = prompt("How much did Amazon pay you per hour?");
hours_worked = prompt( "How much hours did you work?");
amazon_total = hours_worked * google_pay;


facebook_pay = prompt("How much did Facebook pay you per hour?");
hours_worked = prompt( "How much hours did you work?");
facebook_total = hours_worked * google_pay;

total = google_total + amazon_total + facebook_total;
confirm("All together you've made $" + total + " so far.");

var full_class = false;
var schedule_open = true;
var enroll;

alert("This class might be full");
schedule_open = prompt("Is your schedule open?")
console.log("Full class:" + full_class);
console.log("Open Schedule:" + schedule_open);
schedule_open.toLowerCase();
schedule_open == "yes";

if(full_class && schedule_open) {
    confirm("You are enrolling into class");
    enroll = true;
    } else {
        alert("Speak to Dean.");
}
*/
var product = 0;
var offer = true;
product = prompt("How many products do you have in your cart?");
if (product > 2 & offer){
    console.log(product);
    console.log(offer);
    alert("Offer is valid!");
    confirm("Are you sure you want to continue?");
} else {
    alert("Offer is not valid");
}