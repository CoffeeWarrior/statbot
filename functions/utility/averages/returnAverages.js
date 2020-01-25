//find averages from matchData, {teamData, participantData}
const { findAverageParticipantData, findAverageTeamData } = require("./findAverage");
const { findRolesMode } = require("./findRolesMode");

const returnAverages = (matchDataList) => {
    const rateAverages = {
        kda : ((findAverageParticipantData(matchDataList, "kills") + findAverageParticipantData(matchDataList, "assists"))/findAverageParticipantData(matchDataList, "deaths")).toFixed(2),
        csPerMin10 : findAverageParticipantData(matchDataList, "creepsPerMinDeltas", "0-10").toFixed(2),
        csPerMin20 : findAverageParticipantData(matchDataList, "creepsPerMinDeltas", "10-20").toFixed(2),
        csPerMin30 : findAverageParticipantData(matchDataList, "creepsPerMinDeltas", "20-30").toFixed(2),
        goldPerMin10 : findAverageParticipantData(matchDataList, "goldPerMinDeltas", "0-10").toFixed(2),
        goldPerMin20 : findAverageParticipantData(matchDataList, "goldPerMinDeltas", "10-20").toFixed(2),
        goldPerMin30 : findAverageParticipantData(matchDataList, "goldPerMinDeltas", "20-30").toFixed(2),
        visionScore : findAverageParticipantData(matchDataList, "visionScore").toFixed(2),
        winrate: findAverageParticipantData(matchDataList, "win").toFixed(2),
        turrets: findAverageParticipantData(matchDataList, "turretKills").toFixed(2),
        inhibs: findAverageParticipantData(matchDataList, "inhibitorKills").toFixed(2),
        firstDragon: findAverageTeamData(matchDataList, "firstDragon").toFixed(2),
        role: findRolesMode(matchDataList)
    }
    // console.log(rateAverages)
    return rateAverages
}

exports.returnAverages = returnAverages;