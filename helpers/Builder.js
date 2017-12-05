var Game = require('../bean/Game');
var Player = require('../bean/Player');
var GamePlay = require('../bean/GamePlay');
var Scoring = require('../bean/Scoring');

//const moment = require('moment');
class Builder{
    static build(item){
        var score = Builder.buildScore(item);
        var gamePlay = Builder.buildGamePlay(item['difficult level'], score);
        var player = Builder.buildPlayerInfo(item.id, item.userName, gamePlay);
        var game = Builder.buildGameDetails(item.game, player);
        return game;
    }

    static buildScore(item) {
        var score = new Scoring(item['score'], item['start time'], item['end time']);
        return score;
    }

    static buildGamePlay(difficulty, score) {
        var gamePlay = new GamePlay(difficulty);
        gamePlay.addScoring(score);
        return gamePlay;
    }

    static buildPlayerInfo(playerId, playerName, gamePlay) {
        var player = new Player(playerId, playerName);
        player.addGamePlay(gamePlay);
        return player;
    }

    static buildGameDetails(gameTitle, playerInfo) {
        var game = new Game(gameTitle);
        game.addPlayer(playerInfo);
    }
}

module.exports = Builder;
