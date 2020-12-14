
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
//var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    
    block1 = new Block(810, 350);
    

   
    block2 = new Block(810, 220);

    

    hexagon = new Hex(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
    
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
  
    block1.display();
    block1.score();
    

  
    block2.display();
    block2.score();
    

   

    hexagon.display();
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(hexagon.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && hexagon.body.speed < 1){
       Matter.Body.setPosition(hexagon.body,{x:200, y:50});
       slingshot.attach(hexagon.body);
    }
}

