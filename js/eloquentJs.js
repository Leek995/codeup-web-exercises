"use strict"
                                    // Optional Arguments//
// function square(x){return x * x; }
// console.log(square(4, true, "hedgehog"));

// function minus(a,b){
//     if(b === undefined) return -a;
//     else return a - b;
// }
// console.log(minus(10));
// console.log(minus(10, 5));
//
// function power(base, exponent = 2){
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result;
// }
//
// console.log(power(4));
// console.log(power(2, 6));

// console.log("C", "0", 2);
// function wrapValue(n){
//     let local = n;
//     return () => n;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//     // number is created as a function which is why it is not declared as var or let
//     return number => number * factor;
// }
//
// let twice = multiplier(2);
// //before function returned undefined it waited on the next binding to complete in console.log
// console.log(twice(5));

// function power(base, exponent){
//     if(exponent == 0){
//         return 1;
//     }else{
//         return base * power(base, exponent - 1);
//     }
// }
// console.log(power(2,3));

function findSolution(target){
    function find(current, history){
        if(current == target){
            return history;
        }else if(current > target){
            return null;
        }else{
            return find(current + 5, `(${history} + 5)`) ||
            find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));

function printFarmInventory(cows, chicken){
    let cowString = String(cows);
    while()
}