//finds a property within the matchDataList[n].participantData and its average
const findAverageParticipantData = (matchDataList, property, secondProperty) => {
    let numberOfProperty = 0;
    let propertyTotal = matchDataList.reduce((accumulator, currentObject) => {
        var propertyValue = currentObject.participantData.stats[property];
        if(propertyValue === undefined){
            propertyValue = currentObject.participantData.timeline[property]
            if(propertyValue === undefined){
                return accumulator;
            }
            propertyValue = propertyValue[secondProperty];
            if(propertyValue === undefined){
                return accumulator;
            }
        }
        numberOfProperty++;
        return accumulator + propertyValue
                 
    },0)
    return (propertyTotal/numberOfProperty);
}
//finds a property within matchDataList[n].teamData and its average
const findAverageTeamData = (matchDataList, property) => {
    return matchDataList.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.teamData[property]
    },0)/matchDataList.length
}

exports.findAverageTeamData = findAverageTeamData
exports.findAverageParticipantData = findAverageParticipantData;
