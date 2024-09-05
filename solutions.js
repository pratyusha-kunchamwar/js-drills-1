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

module.exports = { usersLovevideoGames};