function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(`Iteration: ${i}`);
    }
}
repeat(5, console.log);

let labels = [];
repeat(5, i =>{
    labels.push(`Unit ${i + 1}`)
})