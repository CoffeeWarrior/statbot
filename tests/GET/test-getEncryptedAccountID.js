const { assert } = require('chai');
const { getEncryptedAccountID } = require("../../functions/GET/matches/getEncryptedAccountID")

describe('get encrypted account ID', function() {
    it("should return a matching encrypted summoner ID",function(){
        return getEncryptedAccountID("Cwancer smuwf").then(encryptedAccountID => {
            return assert.equal(encryptedAccountID, "j5DuYu1KCQXGFddgdE7nI7misCe8x0hto0NKzKhPzLdYzznlSUi1r_63")
        })
    })

    it("should throw an error on summoners that dont exist",function(){
        return getEncryptedAccountID("cwancer smwufsweafadfads").catch(err => {
            return assert.typeOf(err, "Error");
        })
    })

    it("should throw a 404 error on summoners that dont exist",function(){
        return getEncryptedAccountID("cwancer smwufsweafadfads").catch(err => {
            return assert.equal(err.status, 404);
        })
    })

    it("should describe the error when summoner doesnt exist",function(){
        return getEncryptedAccountID("cwancer smwufsweafadfads").catch(err => {
            return assert.isString(err.message)
        })
    })
})