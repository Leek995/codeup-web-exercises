 (function(){
     "use strict";
     var shapes = ['square', 'rectangles', 'cicrle', 'triangle'];

     console.log(shapes.length);
     console.log(shapes);
     console.log(shapes[1]);

     for(var i = 0; i < shapes.length; i++) {
         console.log("The shape at index " + i + shapes[i]);
     }

     shapes.forEach(function(shape) {
         console.log('Here is a lovely shape: ' + shape + '.');

     }
 })();

 (function(){
     "use strict";
     var states = ['Texas', 'Oklahoma', 'Denver', 'Florida'];
     console.log(states[0]);
     console.log(states[2]);

     for(var i = 0; i < states.length; i++){
         console.log("The state at index " + i + " is " + states[i] + ".");
     }

     states.forEach(function (state) {
         console.log(state)
     }
 })();



 (function() {
     "use strict"
     var computer_brands = ['dell', 'gateway', 'apple', 'hp', 'samsung'];

     console.log(computer_brands[0]);
     console.log(computer_brands[1]);
     console.log(computer_brands[2]);
     console.log(computer_brands[3]);
     console.log(computer_brands[4]);

     computer_brands.forEach(function (computer_brand){
         console.log(computer_brand);
     }

 })();

