(function() {
    'use strict'
    // Function Drills
    // Functions using conditionals but not loops or arrays:

    // Make a function named isOdd(number)
    function isOdd(number) {
        if (number % 2 !== 0) return number;
    }

    // Make a function named isEven(number)
    function isEven(number) {
        if (number % 2 === 0) return console.log(number);
    }

    // Make a function named identity(input) that returns the input exactly as provided.
    function identity(input) {
        return console.log(`Input: ${input}`)
    }

    // Make a function named isFive(input)
    function isFive(input) {
        if (input === 5) return console.log(`Yup that's ${5}!`);
        else return console.log(`Not quite 5`);
    }

    // Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        if (isNaN(input)) return console.log("Not going to be able to add 5.");
        console.log(input + 5);
    }

    // Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(input) {
        if (input % 5 === 0) {
            return console.log(`${input} is a multiple of 5`);
        } else {
            return console.log(`${input} is NOT a multiple of 5`);
        }
    }

    // Make a function named isThree(input)
    function isTree(input) {
        if (input === 3) return console.log(`Yup that is 3!`);
    }

    // Make a function named isMultipleOfThree(input)
    function isMultipleOfThree(input) {
        if (input % 3 === 0) {
            console.log(`${input}, is a multiple of 3!`);
        } else {
            console.log(`Try again.`);
        }
    }

    // Make a function named isMultipleOfThreeAndFive(input)
    function isMultipleOfThreeAndFive(input) {
        if (input % 3 === 0 && input % 5 === 0) {
            return console.log(`${input} is a multiple of both 3 & 5.`);
        } else {
            return console.log("Try again");
        }
    }

    // Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

    function isMultipleOf(target, n) {
        if (target % n === 0) {
            return console.log(`${n} is a multiple of ${target}!`);
        } else if (target % n !== 0) {
            return console.log(`Try again. ${n} is NOT a multiple of ${target}`)
        } else{
            return false;
        }
    }



    // Make a function named isTrue(boolean)
    function isTrue(boolean){
        if(boolean === 'true'){
            return console.log('true');
        }else if(boolean === 'false'){
            return console.log('false');
        }
    }
    isTrue('true');

    // Make a function named isFalse(boolean)
    function isFalse(boolean){
        if(boolean === true ){
            return console.log(false);
        }else if(boolean !==  false){
            return console.log(true);
        }
    }
    // Make a function named isTruthy(input), remember that values other than true will behave like true
    function isTruthy(input){
        if(input === input){
            return console.log(true);
        }else if(typeof input === null){
            return console.log(true)
        }
    }


    // Make a function named isFalsy(input), remember that values other than false behave like false
    // Make a function named isVowel(letter)
    // Make a function named isConsonant(letter)
    // Make a function named isCapital(letter)
    // Make a function named isLowerCase(letter)
    // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter


    // Write a loop that outputs the first 50 fibonacci numbers. // https://en.wikipedia.org/wiki/Fibonacci_number
    // Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.

    // Fibonacci sequence, in which each number is the sum of the two preceding ones.
    // The sequence commonly starts from 0 and 1, although some authors omit the
    // initial terms and start the sequence from 1 and 1 or from 1 and 2. Starting
    // from 0 and 1, the next few values in the sequence are
//     function fibonacciFifty(){
//         var i = 1
//         console.log(i);
//         for(var i; i <= 50; ++i){
//            var prev_1 = i;
//            var prev_2 = i;
//            var numb = prev_1 + prev_2;
//            console.log(numb);
//         }
//     }
//     fibonacciFifty();
// })();

// !true
// !!true
// !false
// !!false
// !5.32
// !-12
// !5
// !!5
// !0
// !!0
// !"banana"
// !!"banana"
// !undefined
// !!undefined
// null
// !null
// !!null
// !""
// !!""
// !(true || false)
// !(false && true)

})();