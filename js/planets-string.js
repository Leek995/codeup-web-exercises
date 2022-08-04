(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsWithBreaks = planetsArray.join('<br>');

    // Create copy of original array
    var CopyPlanetsArray = planetsArray;

    //console.log(CopyPlanetsArray);
    // Created an empty array as a global variable to access outside of the forEach loop

    var newA = [];
    // Used for each to manipulate the string in array by adding <li>
    CopyPlanetsArray.forEach(function (planet){
        //Set conditional statement to true by using planet to see if variable has a value
        if(planet) {
            // Concat <li> at beginning and end of string
            planet = '  <li>' + planet + '</li>';
            //console.log(planet);
            // Add manipulated version of planet to newA; declared in global scope
            newA.push(planet);
        }

    })
    // Add new index of <ul> at beginning and end
    newA.unshift('<ul>');
    newA.push('</ul>');
    console.log(newA);
})();
