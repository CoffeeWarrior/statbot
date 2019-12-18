require("dotenv").config()
const { fetchResponseHandling } = require("../utility/fetchResponseHandling")

//this function will access riotAPI to get the encrypted Account id of a given user.
//returns null on failure
const getEncryptedAccountID = (accountName) => {
    return fetchResponseHandling(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(accountName)}?api_key=${process.env.riotAPIkey}`) 
    .then(body => body.accountId)
}

exports.getEncryptedAccountID = getEncryptedAccountID;