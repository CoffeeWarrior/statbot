const { fetchResponseHandling } = require("../../utility/fetchResponseHandling")
require("dotenv").config()

//takes rank object {division, leagueID} and returns league with summoners in the same division
const getLeagueData = (rank) => {
    return fetchResponseHandling(`https://na1.api.riotgames.com/lol/league/v4/leagues/${rank.leagueID}?api_key=${process.env.riotAPIkey}`)
    .then(res => {
        return res.entries.filter(summoner => summoner.rank == rank.division)
        .map(summoner => summoner.summonerName) 
    })
}

exports.getLeagueData = getLeagueData;