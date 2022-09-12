(function (){
    "use strict"
    // TODO
    // 1.) create a string that represents 8x8 grid using new character to separate lines
    // 2.) Each position on grid is either a space or a hash character
    // Should form a chess board
    for (let i = 0; i < 8; ++i){
        if(i % 2 === 0){
            console.log("# # # # ");
        }
        if(i % 2 !== 0){
            console.log(" # # # #")
        }
    }
})();