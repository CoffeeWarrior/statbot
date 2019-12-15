const fetch = require("node-fetch");

//this function will access riotAPI to get the encrypted Account id of a given user.
const getEncryptedAccountID = (content) => {
    content = content.replace("lookup", "");
    let AccountName = content.split(" ").reduce((name, currentVal) => {
        return name + currentVal + " ";
    });
    return fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(AccountName)}?api_key=${process.env.riotAPIkey}`)
    .then(res => res.text())
    .then(body => {
        body = JSON.parse(body)
        return body.accountId;
        
    })
    .catch(error => console.error(error))
}

exports.getEncryptedAccountID = getEncryptedAccountID;