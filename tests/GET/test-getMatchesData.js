const { assert } = require("chai");
const { getMatchesData } = require("../../functions/GET/getMatchesData")

const sampleMatchList = [ 3238298096, 3235873560, 3234879639, 3233664043, 3233649946 ]


describe("get match data from an array of match ID's", function(){
    it("should return array of matches", function(){
        return getMatchesData(sampleMatchList).then(matchDataArray => {
            assert.isArray(matchDataArray)
        })
    })

    it("should all be ranked matches (queue 420)", function(){
        return getMatchesData(sampleMatchList).then(matchDataArray => {
            matchDataArray.forEach(match => {
                assert.equal(match.queueId, 420)
            })
        })
    })

})