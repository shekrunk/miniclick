class Game{
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    get name() {
        return this.name;
    }

    addPlayer(player) {
       return this.players.push(player);
    }

}

exports.Game = Game;