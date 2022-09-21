(function (){
    "use strict"
    function gitHubUsername (username){
        const fetch_git = fetch(`https://api.github.com/users/${username}/event`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        return fetch_git;
    }
    gitHubUsername(Leek995);
})();