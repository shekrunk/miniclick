var Game = require('../bean/Game').Game;
var Player = require('../bean/Player').Player;
var GamePlay = require('../bean/GamePlay').GamePlay;
var Scoring = require('../bean/Scoring').Scoring;

var _ = require('lodash');

const moment = require('moment');
const dataDateFormat = "DD/MM/YYYY hh::mm::ss A";
const customDateFormat = "DD/MM/YYYY hh:mm:ss A";
class Builder{
    static build(item, collection){
        var gameName = item.game;
        var existingGame = collection[gameName];
        if(!existingGame) {
            collection[gameName] = Builder.buildNewGame(item);
        } else {
            Builder.updateExistingGame(item, existingGame, collection);            
        }
        return collection;
    }

    static updateExistingGame(item, existingGame, collection) {
        var score = Builder.buildScore(item);
        var allPlayersInGame = existingGame.getAllPlayers();
        
        var existingPlayerIndex = _.findIndex(allPlayersInGame, function(o) {
            return o.id === item.id; 
        });

        if(existingPlayerIndex != -1) {
            var allGamePlayOfPlayer = existingPlayerIndex.getGamePlays();
            var difficultLevel = item['difficult level'];

            var existingDifficultyIndex = _.findIndex(allGamePlayOfPlayer, function(o) { 
                return o.difficulty === difficultLevel; 
            });

            if(existingDifficultyIndex != -1) {                    
                allGamePlayOfPlayer[existingDifficultyIndex].addScoring(score);
            } else{                    
                var gamePlay = Builder.buildGamePlay(item['difficult level'], score);
                allPlayersInGame[existingPlayerIndex].addGamePlay(gamePlay);
            }
        } else {
            var gamePlay = Builder.buildGamePlay(item['difficult level'], score);
            var player = Builder.buildPlayerInfo(item.id, item.username, gamePlay);
            collection[item.game].addPlayer(player);
        }
    }

    static buildNewGame(item) {
        var score = Builder.buildScore(item);
        var gamePlay = Builder.buildGamePlay(item['difficult level'], score);
        var player = Builder.buildPlayerInfo(item.id, item.username, gamePlay);
        var game = Builder.buildGameDetails(item.game, player);
        return game;
    }

    static buildScore(item) {
        var score = new Scoring(item['score'], Builder.parseDate(item['start time']), Builder.parseDate(item['end time']));
        return score;
    }

    static parseDate(string){
        var parsedDate = moment(string, dataDateFormat);
        return moment(parsedDate).format(customDateFormat);
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
        return game;
    }
}

module.exports = Builder;
