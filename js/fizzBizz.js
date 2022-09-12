(function (){
    "use strict"
    // TODO
    // Console log all the numbers from 1 to 100
    // For numbers divisible by 3 console log fizz
    // For numbers divisble by 5 and not 3 console log Buzz
    // Console log FizzBuzz for numbers divisible by 3 and 5

    // declare and define binding i to a value of 1 to act as counter
    let i = 1;
    // create while loop with condition of true
    while(i < 100){
        // increment counter by 1 each iteration
        ++i;
        // first conditional: check to see if first iteration is divisible by 3
        if(i % 3 === 0) {
            // second conditional(nested): if divisible by 3 check to see if also divisible by 5
            if(i % 5 === 0){
                // if first and second conditional is true console log FizzBuzz
                console.log(`FizzBuzz`);
                // continue to top of loop to skip console log of number
                continue;
            }
            // if first conditional is true console log Fizz
            console.log(`Fizz`);
            // continue to top of loop to skip console log of number
            continue
            // third conditional: if divisible by 5 only console log Buzz
        }else if(i % 5 === 0){
            console.log(`Buzz`);
            // continue to top of loop to skip console log of number
            continue;
        }
        // Console log remaining numbers that are not divisible by 3 or 5
        console.log(i);
    }
})();