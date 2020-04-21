
//var position;
var playerCount;
var gameState=0;
var game1;
var form1;
var database;
function setup(){
  createCanvas(500,500);
  database = firebase.database();
  //console.log(database);
 
  game1= new game();
  game1.getState();
  game1.start();
}

function draw(){
}
