var num = 1;
while(num < 65536){
    num *= 2;
    console.log(num);
}
//Do while loop problem
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
do {
    sold_cones = Math.floor(Math.random() * 5) + 1;
    if(sold_cones <= allCones) {
        console.log(`${sold_cones} cones sold...` );
        allCones -= sold_cones;
    }else if(sold_cones > allCones){
        console.log(`Cannot sell you ${sold_cones} cones I only have ${allCones}...`)
    }else{
        console.log("Yay! I sold them all")
    }
} while(allCones !== 0);
// This expression will generate a random number between 1 and 5


