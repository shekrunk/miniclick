const XLSX = require('xlsx');
const fs = require('fs');
var _ = require('lodash');

const GameBuilder = require('./helpers/Builder');

const testDataFile = process.argv[2];
if(!testDataFile) {
    console.log("Invalid Params.Usage:: node app.js {fileName} \n e.g. node app.js SampleData.xlsx")
    return;
}

var workbook = XLSX.readFile('./'+testDataFile);

if(!workbook) {
    console.log("Unparseable data file!!!");
    return;
}

var sheet1 = workbook.SheetNames[0];
var workSheet = workbook.Sheets[sheet1];
var testData = XLSX.utils.sheet_to_json(workSheet);

var gameData = {};

_.forEach(testData, function(value, key){
    gameData =  GameBuilder.build(value, gameData);
});

fs.writeFile("./output/sampleData.json", JSON.stringify(gameData, null, 4), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!Goto '"+__dirname+"/output/' to view the output");
}); 

//TODO connect to MongoDB && load data;
//Express API for fetching from MongoDB - different project