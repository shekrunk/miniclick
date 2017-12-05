class Scoring{
    constructor(score, startTime, endTime){
        this.score = score;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    get score() {
        return this.score;
    }
    get startTime() {
        return this.startTime;
    }
    get endTime() {
        return this.endTime;
    }

    get scores() {
        return {
            score: this.score,
            startTime: this.startTime,
            endTime: this.endTime
        }
    }
}

exports.Scoring = Scoring;