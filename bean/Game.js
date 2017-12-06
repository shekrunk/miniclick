class Game{
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    getName() {
        return this.name;
    }

    addPlayer(player) {
       return this.players.push(player);
    }

    getAllPlayers() {
        return this.players;
    }

}

exports.Game = Game;