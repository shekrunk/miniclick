class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.gamePlays = [];
    }
    getGamePlays(){
        return this.gamePlays;
    }
    setGamePlays(gamePlays) {
        this.gamePlays = gamePlays;
    }
    getId(){
       return this.id;
    }
    getPlayerName(){
        return this.name;
    }

    addGamePlay(gamePlay) {
        if(!this.gamePlays) {
            this.gamePlays = [];
        }
        return this.gamePlays.push(gamePlay);
    }
}

exports.Player = Player;