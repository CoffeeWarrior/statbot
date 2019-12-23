//takes matchList and encrypted account id, returns array of 5 (or less) containing objects of {teamData, participantData} for given user.
require("dotenv").config()
const { fetchResponseHandling } = require("../utility/fetchResponseHandling")

const getMatchesData = (matchList, encryptedAccountID) => {
    const baseURL = "https://na1.api.riotgames.com/lol/match/v4/matches/";
    
    const matchListURLS = matchList.map(matchID => {
        return `${baseURL}${matchID}?api_key=${process.env.riotAPIkey}`;
    })
    
    return Promise.all(matchListURLS.map((matchListURL) => {
        return fetchResponseHandling(matchListURL).then((matchData) => {
            //finds matching participantID for encryptedAccountID
            const {participantId:participantID} = matchData.participantIdentities
            .find(participantIdentity => participantIdentity.player.accountId === encryptedAccountID)  
            
            //finds match data on player based on participantID
            const participantData = matchData.participants
            .find(participant => participant.participantId === participantID);
            

            //finds team player was on
            const teamData = matchData.teams.find(team => team.teamId === participantData.teamId)
            return {teamData, participantData}
        })
    }))
    
}

exports.getMatchesData = getMatchesData;