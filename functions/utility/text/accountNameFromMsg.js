const accountNamesFromMsg = (msg) => {
    var message = msg.replace("!lookup", "");
    message = message.replace(/\s/g,'')
    console.log(message)
    let accountNames = message.replace(/joinedthelobby/gi, " ");
    accountNames = accountNames.trim();
    accountNames = accountNames.split(" ")
    return accountNames;
}

exports.accountNamesFromMsg = accountNamesFromMsg;