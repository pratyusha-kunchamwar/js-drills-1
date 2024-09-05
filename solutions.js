var users = require('./usersdata.js');

function usersLovevideoGames() {
    let regex = /\bvideo\s*games?\b/i;
    let names = [];

    for (let user in users) {
        let game = users[user].interests;
        for (let i=0; i<game.length;i++){
            if (regex.test(game[i])) {
                        names.push(user);
                        break;
                    }

        }

}
    return names;

}
function usersWithCountry(targetcountry) {
    if(targetcountry==null||targetcountry==undefined) //when the country is not found
        return "Enter Valid country";
    let persons = [];
    for (let user in users) {

        let Object = users[user];

        if (Object.nationality === targetcountry) {
            persons.push(user)
        }

    }
    return persons;

}

module.exports = { usersLovevideoGames,usersWithCountry};