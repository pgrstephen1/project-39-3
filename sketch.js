
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var player;
var ground;
var score = 0;
var coin;
var canvas;

var carImg, groundImg;

var gameState = 0;

function setup() {
	canvas = createCanvas(1500,1000);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,900,1500,10);
	player = new Player(450,800,200,300);

	camera.position.x = displayWidth/2;
	camera.position.y = displayHeight/2;

}

function draw(){
	background("white");
	

	textSize(15);
	text("Score: " + score, displayWidth-150, 50);

	if(gameState===0){

	if(keyIsDown(RIGHT_ARROW)){
		player.x = player.x+100;
	}

	if(frameCount%60 === 0){
		coin = new Coin(player.x+50,player.y,10,10);
	}

	console.log(player.x);
//	if(player.x = coin.x){
//	coin.delete();
//	score = score+1;
//	}
	
//	coin.display();
	ground.display();
	player.display();
}

if(score === 4){
	gameState = 1;
	textSize(20);
	text("Game Over", displayWidth/2, displayHeight/2);
}
}