const accountNameFromMsg = (msg) => {
    name = msg.replace("!lookup", "");
    let accountName = name.split(" ").reduce((name, currentVal) => {
        return name + currentVal + " ";
    });
    return accountName;
}

exports.accountNameFromMsg = accountNameFromMsg;