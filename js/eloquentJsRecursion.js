(function (){
    "use strict"
    function isEven(number){
        if(number < 0){return console.log(false) ;}
        else if(number === 0){return console.log(true);}
        else if(number === 1){return console.log(false);}
        number -= 2;
        console.log(`At the current moment number is ${number}`);
        isEven(number);
    }
    isEven(5);
})();