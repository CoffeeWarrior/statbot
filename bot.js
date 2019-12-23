require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();
const { getEncryptedAccountID } = require("./functions/GET/getEncryptedAccountID")
const { returnMatchData } = require("./functions/utility/returnMatchData");
const { accountNameFromMsg } = require("./functions/utility/accountNameFromMsg") 
const { returnAverages } = require("./functions/utility/averages/returnAverages")

const botChar = "!"

client.on('message', (msg) => {
    let {content} = msg;
    if(content.substr(0,1) == `${botChar}`){
        if(content.toLowerCase().includes("lookup")){
            const accountName = accountNameFromMsg(content);
            getEncryptedAccountID(accountName)
            .then((encryptedAccountID) => returnMatchData(encryptedAccountID))
            //.then(matchData => {console.log(matchData); return matchData})
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
            
            
        }
    }
});


client.login(process.env.discordAPIkey)