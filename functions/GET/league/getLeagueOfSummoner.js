const {fetchResponseHandling} = require("../../utility/fetchResponseHandling")
require("dotenv").config()

//given an encrypted summoner id returns a rank object {division, leagueID} 
const getLeagueOfSummoner = (encryptedSummonerID) => {
    return fetchResponseHandling(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerID}?api_key=${process.env.riotAPIkey}`)
    .then((res) => {
        const rankSoloDuo = res.find(rank => rank.queueType === "RANKED_SOLO_5x5")
        if(rankSoloDuo){
            return {
                division: rankSoloDuo.rank,
                leagueID: rankSoloDuo.leagueId
            }
        } else {
            throw new Error("Summoner is unranked")
        }
        
    })
}

exports.getLeagueOfSummoner = getLeagueOfSummoner;