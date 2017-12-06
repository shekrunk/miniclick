class Scoring{
    constructor(score, startTime, endTime){
        this.score = score;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    getScore() {
        return this.score;
    }
    getStartTime() {
        return this.startTime;
    }
    getEndTime() {
        return this.endTime;
    }

    getScores() {
        return {
            score: this.score,
            startTime: this.startTime,
            endTime: this.endTime
        }
    }
}

exports.Scoring = Scoring;