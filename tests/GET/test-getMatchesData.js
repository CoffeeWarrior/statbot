const { assert } = require("chai");
const { getMatchesData } = require("../../functions/GET/matches/getMatchesData")

const sampleMatchList = [ 3238298096, 3235873560, 3234879639, 3233664043, 3233649946 ]
const encryptedSummonerID = "j5DuYu1KCQXGFddgdE7nI7misCe8x0hto0NKzKhPzLdYzznlSUi1r_63";

describe("get match data from an array of match ID's", function(){

    it("should return an array", function(){
        return getMatchesData(sampleMatchList, encryptedSummonerID).then(matchData => {
            return assert.isArray(matchData)
        })
    })

    it("should contain objects with properties teamData and participantData", function(){
        return getMatchesData(sampleMatchList, encryptedSummonerID).then(matchData => {
            matchData.forEach(element => {
                assert.property(element, "teamData")
                assert.property(element, "participantData")
            })
        })
    })

    it("should contain a single participants data from the participants array", function(){
        return getMatchesData(sampleMatchList, encryptedSummonerID).then(matchData => {
            assert.isNumber(matchData[0].participantData.championId);
            assert.isString(matchData[0].teamData.win);
        })
    })

    it("should throw an error when passed a bad matchList", function(){
        getMatchesData([1,2,3,4,5]).catch(err => {
            assert.exists(err);
            assert.isString(err.message);
            assert.isNumber(err.status)
        })
    })
})