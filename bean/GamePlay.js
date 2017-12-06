class GamePlay{
    constructor(difficulty) {
        this.difficulty = difficulty;
        this.scorings=[];
    }

    getDifficulty() {
        return this.difficulty;
    }
    getScorings() {
        return this.scorings;
    }

    addScoring(scoring) {
        return this.scorings.push(scoring);
    }
}

exports.GamePlay = GamePlay;