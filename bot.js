require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();
const { getEncryptedAccountID } = require("./functions/GET/getEncryptedAccountID")
const { returnMatchData } = require("./functions/returnMatchData");
const { accountNameFromMsg } = require("./functions/utility/accountNameFromMsg") 

const botChar = "!"

client.on('message', (msg) => {
    let {content} = msg;
    if(content.substr(0,1) == `${botChar}`){
        if(content.toLowerCase().includes("lookup")){
            const accountName = accountNameFromMsg(content);
            getEncryptedAccountID(accountName)
            .then((encryptedAccountID) =>returnMatchData(encryptedAccountID))
            .then(matchData => msg.reply(matchData))
            .catch(e => {
                msg.reply(`there was an error, \nmessage: ${e.message} \nstatus: ${e.status}`)
            })
            
            
        }
    }
});


client.login(process.env.discordAPIkey)