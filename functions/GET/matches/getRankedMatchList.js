require("dotenv").config()
const { fetchResponseHandling } = require("../../utility/fetchResponseHandling");


//this function will use the encrypted summoner id to return an array of last 5 (or fewer) ranked matches of the user.
const getRankedMatchList = (encryptedAccountID, numberOfGamesToRetrieve = 5) => {
    return fetchResponseHandling(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${encryptedAccountID}?queue=420&api_key=${process.env.riotAPIkey}`)
    .then(body => {
        if(body.matches.length < numberOfGamesToRetrieve){
            numberOfGamesToRetrieve = body.matches.length;
        }
        //retrieves last 5 games ids
        const gameIDList = body.matches.splice(0, numberOfGamesToRetrieve).map((match) => match.gameId);
        return gameIDList;
    })
}
exports.getRankedMatchList = getRankedMatchList;
