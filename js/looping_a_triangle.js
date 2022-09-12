(function(){
    "use strict"
    // TODO
    // instructions: write a loop that makes seven calls to console.log to output the following triangle:
    // Chapter 2 (program structure) pg 37 Eloquent JavaScript
    // console.log("#")
    // console.log("##")
    // console.log("###")
    // console.log("####")
    // console.log("######")
    // console.log("#######")
    // console.log("########")

    // declare a binding called hash
    let hash;
    // define hash as a string variable with hashtag character
    hash = "#";
    // console.log() hash before entering loop to get top of the triangle
    // CANNOT do inside of loop; iteration will happen twice
    console.log(hash);
    // create while loop with conditional that continues the loop until false
    // in this case while the length of the hashtag string is less than 7
    while(hash.length < 7){
        // increment operation used to add/concat hash string
        hash += "#";
        // print each iteration
        console.log(hash);
        // while loop continues until conditional is false
    }
})();