// (function (){
//     "use strict"
//     function gitHubUsername (username){
//         fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 let last_push = data.filter(data => {
//                     if(data.type.toLowerCase() === 'pushevent' ){
//
//                     }
//                 })
//                 console.log(`${username} last commit was on ${data['created_at']} it went a little like this ${data[0]['payload']['commits'][0]['message']}`)
//             })
//     }

    // gitHubUsername("Leek995");
    function wait(number){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(number){
                    resolve("You'll see this after " + number + "second(s)")
                }else {
                    reject("Didn't not give a number ")
                }
            }, number)
        })
    }

    wait(2000).then(() => console.log('testing'));
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


