require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();
const { getEncryptedAccountID } = require("./functions/GET/matches/getEncryptedAccountID")
const { returnMatchData } = require("./functions/utility/returnMatchData");
const { accountNameFromMsg } = require("./functions/utility/accountNameFromMsg") 
const { returnAverages } = require("./functions/utility/averages/returnAverages")
const { getEncryptedSummonerID } = require("./functions/GET/league/getEncryptedSummonerID")
const { getLeagueOfSummoner } = require("./functions/GET/league/getLeagueOfSummoner")
const { getLeagueData } = require("./functions/GET/league/getLeagueData")

const botChar = "!"

client.on('message', (msg) => {
    let {content} = msg;
    if(content.substr(0,1) == `${botChar}`){
        if(content.toLowerCase().includes("lookup")){
            const accountName = accountNameFromMsg(content);
            getEncryptedAccountID(accountName)
            .then((encryptedAccountID) => returnMatchData(encryptedAccountID))
            .then((matchData) => returnAverages(matchData))
            .catch(e => {
                if(e.status){
                    console.log(e)
                    msg.reply(`there was an error, \nmessage: ${e.message} \nstatus: ${e.status}`)
                } else {
                    console.log(e)
                    msg.reply(`there was an error, \nmessage: ${e.message}`)
                }  
            })
            getEncryptedSummonerID(accountName)
            .then((encryptedAccountID) => getLeagueOfSummoner(encryptedAccountID))
            .then((rank) => getLeagueData(rank))
            .then((a) => console.log(a))
            .catch(e => console.log(e))
        }
    }
});


client.login(process.env.discordAPIkey)