(function (){
    "use strict"
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    // Use .filter to create an array of user objects where each user
    // object has at least 3 languages in the languages array.
    let arr = [];
    let langArr = users.filter(function (n) {
        if(n.languages.length > 2) console.log(n.languages);
    })

    let emailArray = [];
    let stringArray2 = users.filter(function (email){
        emailArray.push(email.email);

    })
    console.log(emailArray);

    let totalYears = users.reduce((total,person) => {
        return total + person.yearsOfExperience
    }, 0);
    console.log(totalYears);



})();