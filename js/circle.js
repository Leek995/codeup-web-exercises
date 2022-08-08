(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var areaOfCircle = Math.pow(circle.radius, 2) * Math.PI;
            return areaOfCircle; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding){
                return Math.floor(doRounding);

            }else {

                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                return console.log("Area of a circle with radius: " + this.radius + ", is: ");
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    console.log(`The area of the circle is ${circle.getArea()}`);
    console.log(`This is the area rounded ${circle.logInfo(circle.getArea())}`);
})();