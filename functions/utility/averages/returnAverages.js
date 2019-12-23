//find averages from matchData, {teamData, participantData}
const { findAverageParticipantData, findAverageTeamData } = require("./findAverage");
const { findRolesMode } = require("./findRolesMode");

const returnAverages = (matchDataList) => {
    const rateAverages = {
        kda : ((findAverageParticipantData(matchDataList, "kills") + findAverageParticipantData(matchDataList, "assists"))/findAverageParticipantData(matchDataList, "deaths")),
        goldPerMin10 : findAverageParticipantData(matchDataList, "creepsPerMinDeltas", "0-10"),
        goldPerMin20 : findAverageParticipantData(matchDataList, "creepsPerMinDeltas", "10-20"),
        goldPerMin30 : findAverageParticipantData(matchDataList, "creepsPerMinDeltas", "20-30"),
        visionScore : findAverageParticipantData(matchDataList, "visionScore"),
        winrate: findAverageParticipantData(matchDataList, "win"),
        turrets: findAverageParticipantData(matchDataList, "turretKills"),
        inhibs: findAverageParticipantData(matchDataList, "inhibitorKills"),
        firstDragon: findAverageTeamData(matchDataList, "firstDragon"),
        role: findRolesMode(matchDataList)
    }
    console.log(rateAverages)
    return rateAverages
}

exports.returnAverages = returnAverages;