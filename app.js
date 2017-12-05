const XLSX = require('xlsx');
const fs = require('fs');
var _ = require('lodash');

const GameBuilder = require('./helpers/Builder');

const testDataFile = process.argv[2];

var workbook = XLSX.readFile('./'+testDataFile);


var sheet1 = workbook.SheetNames[0];
var workSheet = workbook.Sheets[sheet1];
var testData = XLSX.utils.sheet_to_json(workSheet);
console.log(testData.length);
var gameData = [];

_.forEach(testData, function(value, key){
    console.log(value);
    gameData.push(GameBuilder.build(value));
});
console.log(gameData.length);