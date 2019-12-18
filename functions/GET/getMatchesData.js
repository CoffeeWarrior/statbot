//takes matchList and encrypted account id, returns match data for given user.
require("dotenv").config()
const { fetchResponseHandling } = require("../utility/fetchResponseHandling")

const getMatchesData = (matchList, encryptedAccountID) => {
    const baseURL = "https://na1.api.riotgames.com/lol/match/v4/matches/";
    
    const matchListURLS = matchList.map(matchID => {
        return `${baseURL}${matchID}?api_key=${process.env.riotAPIkey}`;
    })
    
    return Promise.all(matchListURLS.map((matchListURL) => {
        return fetchResponseHandling(matchListURL)
    }))
    
}

exports.getMatchesData = getMatchesData;