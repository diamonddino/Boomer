var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    var surfaceOrange=createSprite(100,200,100,10);
    surfaceOrange.shapeColor="orange"
    var surfaceGreen=createSprite();
    var surfaceBlue=createSprite();
    var surfaceWhite=createSprite();

    //create box sprite and give velocity
    var blackBox=createSprite();
    blackBox.velocityX=-2
    blackBox.velocityY=-1
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgesprites()

    
    //add condition to check if box touching surface and make it box
}
