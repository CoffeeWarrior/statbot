const averagesString = (averages) => { //this function will take all the averages and output them to the user
    let response = ``;
    Object.keys(averages).forEach((key) => {
        response += `\n${key}: ${(averages[key])}`
    })
    return response;
}

exports.averagesString = averagesString;