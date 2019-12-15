require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();
const { getEncryptedAccountID } = require("./functions/GET/getEncryptedAccountID")
const { returnMatchData } = require("./functions/returnMatchData");

const botChar = "!"

client.on('message', (msg) => {
    let {content} = msg;
    if(content.substr(0,1) == `${botChar}`){
        let content = msg.content.substr(1,msg.content.length);
        
        if(content.toLowerCase().includes("lookup")){
            getEncryptedAccountID(content)
            .then((encryptedAccountID) => returnMatchData(encryptedAccountID))
            
        }
    }
});


client.login(process.env.discordAPIkey)