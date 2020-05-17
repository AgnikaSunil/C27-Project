const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof,rope;
var backgroundImg;
var bobDiameter;
var bobSound;

function preload(){
    backgroundImg = loadImage("Images/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;

    roof = new Roof();

    bobObject1 = new Bob(432,390);
    bobObject2 = new Bob(466,390);
    bobObject3 = new Bob(500,390);
    bobObject4 = new Bob(534,390);
    bobObject5 = new Bob(568,390);
    bobDiameter = 34;

    rope1 = new Rope(roof.body,bobObject1.body,-bobDiameter*2,0);
    rope2 = new Rope(roof.body,bobObject2.body,-bobDiameter,0);
    rope3 = new Rope(roof.body,bobObject3.body,0,0);
    rope4 = new Rope(roof.body,bobObject4.body,bobDiameter,0);
    rope5 = new Rope(roof.body,bobObject5.body,bobDiameter*2,0);

    bobSound = loadSound("bobSound1.mp3");
}

function draw(){
    background(backgroundImg);

    Engine.update(engine);

    //console.log(bobObject1);

    roof.display();

    bobObject1.display(35);
    bobObject2.display(35);
    bobObject3.display(35);
    bobObject4.display(35);
    bobObject5.display(35);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:70,y:-70});
    }
}