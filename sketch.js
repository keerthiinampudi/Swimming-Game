var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var playeranimation;
var form, player, game;
var s1,s2,s3,s4;
var swimmers = [];
var track;
function preload(){
  track = loadImage("track.png")
playeranimation = loadAnimation("s1.png","s2.png","s3.png","s4.png","s5.png","s6.png","s7.png","s8.png","s9.png","s10.png")
playeranimation2 = loadAnimation("s1ply2.png","s2ply2.png","s3ply2.png","s4ply2.png","s5ply2.png","s6ply2.png","s7ply2.png","s8ply2.png","s9ply2.png","s10ply2.png")
playeranimation3 = loadAnimation("s1ply3.png","s2ply3.png","s3ply3.png","s4ply3.png","s5ply3.png","s6ply3.png","s7ply3.png","s8ply3.png","s9ply3.png","s10ply3.png")
playeranimation4 = loadAnimation("s1ply4.png","s2ply4.png","s3ply4.png","s4ply4.png","s5ply4.png","s6ply4.png","s7ply4.png","s8ply4.png","s9ply4.png","s10ply4.png")


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

