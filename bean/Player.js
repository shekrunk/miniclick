class Player {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.gamePlays = [];
    }
    get GamePlays(){
        return this.gamePlays;
    }
    set GamePlays(gamePlays) {
        this.gamePlays = gamePlays;
    }
    get id(){
       return this.id;
    }
    get name(){
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