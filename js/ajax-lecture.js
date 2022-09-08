$(document).ready(function() {

    "use strict";
    // $.get('https://pokeapi.co/api/v2/pokemon/charmander').done(function(data) {
    //     console.log(data);
    // })
    //
    // let luke;
    // $.get('https://swapi.dev/api/people/1/').done(function(data){
    //     luke = data
    //     console.log(luke)
    // })

    // ====================== MAKING AJAX REQUESTS

    // Creating a jQuery request object

    // $.ajax('./data/orders.json'); // jQuery request object
    // console.log($.ajax('./data/orders.json'));

    // The `done` method is used to wait until the data is asynchronously received, then it will call the function passed to it

    // $.ajax("./data/orders.json").done(function(data){ // the done method
    //     console.log(data);
    // });

    // The request object can be stored in a variable

    // var jqXhr = $.ajax('./data/orders.json');
    //
    // jqXhr.done(function(data) {
    //     console.log(data);
    // });

    // What will happen???

    // var responseData;
    // $.ajax('./data/orders.json').done(function(data) {
    //     responseData = data;
    // });
    // console.log(responseData);

    // Making requests to the Star Wars API: https://swapi.dev/

    // $.ajax('https://swapi.dev/api/planets/1').done(function(data) {
    //     console.log(data);
    // });

    // Using the `get` shorthand method to make requests

    // $.get('./data/orders.json').done(function(data) {
    //     console.log(data);
    // });
    //
    // $.get('https://swapi.dev/api/planets/1').done(function(data) {
    //     console.log(data);
    // });

    // Sending requests with parameters (various APIs allow configuration via params)

    // Get responses back in Shyriiwook! https://swapi.dev/documentation#wookiee

    // passing params as key value pairs in a query string...

    // $.get('https://swapi.dev/api/planets/1/?format=wookiee').done(function(data) {
    //     console.log(data);
    // });

    // passing params as key value pairs in a second object argument...

    // $.get('https://swapi.dev/api/planets/1', {
    //     format: 'wookiee'
    // }).done(function(data) {
    //     console.log(data);
    // });

    // Query params can set all kinds of things, depending on the API, like results per page, sorting order, units of measurement, timezone, etc.

    // Most web APIs only allow you to read data with GET requests. Sometimes you need to send an AJAX POST request

    // $.post('https://hookb.in/qBOXE7xVlPCEqJGEyo0e', {
    //     username: 'jreich',
    //     password: 'letmein'
    // }).done(function(response) {
    //     console.log(response);
    // });


    // The `fail` method should always be included in case a request fails.

    // $.get('https://swapi.dev/api/planets/1').done(function(data) {
    //     console.log(data);
    // }).fail(function(jqXhr, status, error) {
    //     console.log(jqXhr);
    //     console.log(status);
    //     console.log(error);
    // });

    // A `always` method can be added when we want some code to always run regardless of a successful or failed request

    // $.get('https://swapi.dev/api/planets/1').done(function(data) {
    //     console.log(data);
    // }).fail(function(jqXhr, status, error) {
    //     console.log(jqXhr);
    //     console.log(status);
    //     console.log(error);
    // }).always(function() {
    //     console.log('This always runs');
    // });


    // !! MINI-EXERCISE 1 !!

    /*
        1. Make a GET request using jQuery AJAX to the Pokemon API (https://pokeapi.co/api/v2/pokemon/pikachu) and print out the response
        2. Make a POST request to an endpoint created with https://hookbin.com/ and see if you can pass key-value pairs in the body
        3. Try making some requests to the Star Wars API. Can you find the director of `A New Hope`?
     */

    // ====================== EXPLORING JSON DATA

    $.get('https://pokeapi.co/api/v2/pokemon/pikachu').done(function (data){
        console.log(data['moves'][0]['move']);
    })
    $.post('https://hookb.in/qBOmX31oW3hEqJGEyR1D', {
        name : 'unknown',
        last: 'top-secret',
        profession: 'Frogman'
    }).done(function (response){
        console.log(response)
    });
    $.get('https://swapi.dev/api/people/').done(function(data){
        console.log(data);
    })
    // print out various values from the orders.json file
    // print various values from the starwars api





    // ====================== CREATING HTML WITH JS

    // create a series of divs for the orders.json file and make sure the data is refreshed with a button click and every 30 seconds



});
