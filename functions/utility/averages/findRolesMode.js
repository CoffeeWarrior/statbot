const findRolesMode = (matchList) => {
    let roles = []
    matchList.forEach((matchObj) => {
        const {lane, role} = matchObj.participantData.timeline
        if(lane == "BOTTOM"){
            return role == "DUO_SUPPORT"?roles.push("DUO_SUPPORT"):roles.push("BOTTOM")
        }
        if(lane == "NONE"){
            if(role == "DUO_SUPPORT"){
                return roles.push("DUO_SUPPORT")
            }
        }
        return roles.push(lane)
    })
    var roleMap = {}
    roles.forEach((role) => {
        if(role in roleMap){
            return ++roleMap[role]
        }
        return roleMap[role] = 1;
    })
    var modeRole = "";

    Object.keys(roleMap).forEach((role, i) => {
        if(i == 0){
            modeRole = role;
            return; 
        }
        if(roleMap[role] > roleMap[modeRole]){
            modeRole = role
        }; 
    })
    return modeRole;
}

exports.findRolesMode = findRolesMode;