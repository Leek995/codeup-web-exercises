(function (){
    "use strict"
    // TODO
    // 1.) write a function call min that takes in two argument
    // 2.) return the min of two arguments
    //

    function min (input_one, input_two){
        if(typeof (input_one, input_two) === "number"){
            console.log(Math.min(input_one, input_two));
        }else if(typeof (input_one || input_two) == "number") {
            console.log(Math.min(input_one, input_two));
        }
    }

    min(352, "/");
})();