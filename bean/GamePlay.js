class GamePlay{
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.scorings=[];
    }

    get difficulty() {
        return this.difficulty;
    }
    get scorings() {
        return this.scorings;
    }

    addScoring(scoring) {
        return this.scorings.push(scoring);
    }
}

exports.GamePlay = GamePlay;