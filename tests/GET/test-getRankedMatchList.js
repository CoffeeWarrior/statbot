const {assert} = require('chai');
const { getRankedMatchList } = require("../../functions/GET/matches/getRankedMatchList")

const encryptedSummonerID = "j5DuYu1KCQXGFddgdE7nI7misCe8x0hto0NKzKhPzLdYzznlSUi1r_63";

describe("get ID's of past 5 matches", function(){
    it("should return match data when passed an encrypted summoner ID",function(){
        return getRankedMatchList(encryptedSummonerID).then(matchIDs => {
            return assert.isArray(matchIDs)
        })
    })

    it("should return at most 5 matches",function(){
        return getRankedMatchList(encryptedSummonerID).then(matchIDs => {
            return assert.isAtMost(matchIDs.length, 5);
        })
    })

    it("should throw an error when passed anything besides an encrypted summonerID",function(){
        return getRankedMatchList("abcde").catch(err => {
            return assert.typeOf(err, "Error")
        })
    })
})