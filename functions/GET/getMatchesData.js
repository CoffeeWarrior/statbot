//takes matchList and encrypted account id, returns match data for given user.
const fetch = require("node-fetch");

const getMatchesData = (matchList, encryptedAccountID) => {
    const baseURL = "https://na1.api.riotgames.com/lol/match/v4/matches/";
    
    const matchListURLS = matchList.map(matchID => {
        return `${baseURL}${matchID}?api_key=${process.env.riotAPIkey}`;
    })
    
    Promise.all(matchListURLS.map((matchListURL) => {
        return fetch(matchListURL)
        .then((res) => {
            return res.text()
        })
        .then(body => JSON.parse(body))
    }))
}

exports.getMatchesData = getMatchesData;