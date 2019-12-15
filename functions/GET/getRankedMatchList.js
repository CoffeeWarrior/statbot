const fetch = require("node-fetch");


//this function will use the encrypted summoner id to return an array of last 5 (or fewer) matches of the user.
const getRankedMatchList = (encryptedAccountID) => {
    console.log(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${encryptedAccountID}?queue=420&api_key=${process.env.riotAPIkey}`)
    return fetch(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${encryptedAccountID}?queue=420&api_key=${process.env.riotAPIkey}`)
    .then((res) => {
        return res.text()
    })
    .then(body => JSON.parse(body))
    .then(body =>{
        let numberOfGamesToRetrieve = 5
        if(body.matches.length < 5){
            numberOfGamesToRetrieve = body.matches.length;
        }
        //retrieves last 5 games ids
        const gameIDList = body.matches.splice(0, numberOfGamesToRetrieve).map((match) => match.gameId);
        return gameIDList;
    })
    .catch(error => console.error(error))
}
exports.getRankedMatchList = getRankedMatchList;
