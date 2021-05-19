const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,320,70,70);
    box2 = new Box(820,320,70,70);
    box3 = new Box(600,240,70,70);
    box4 = new Box(820,240,70,70);
    box5 = new Box(710,160,70,70)
    ground = new Ground(500,height,1000,20);

    pig = new Pig(710,350);
    pig2 = new Pig(710,220);

    log = new Log(710,260,300,PI/2);
    log2 = new Log(710,180,300,PI/2);
    log3 = new Log(660,120,175,PI/7);
    log4 = new Log(770,120,175,-PI/7);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    
}