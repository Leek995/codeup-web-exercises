(function (){
    "use strict"
    function countBs(string_binding){
        let i = 0
        let count = 0;
        if(typeof string_binding === "string"){
            for(i; i < string_binding.length; ++i){
                if(string_binding[i] === "B"){
                    count += 1;
                    console.log(`The count of ${string_binding[i]}'s is currently: ${count}!`)
                    if(i < string_binding.length){continue;}
                    else{break;}
                }
            }
        }else{console.log(`${string_binding} is not a string`)}
    }
    countBs("Chocolate Chip Cookies");
    countBs("Bhocolate Bhip Bookies");
    countBs("bhocolate Bhip bookies");
    countBs("Bhocolate Bhip Cookies");
    countBs("bhocolate bhip bookies");
})();