const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundimg, towerimg, cannonbaseimg
var tower, canon
var world,engine
var barray
var array1
var ships
var ground
function preload() {
backgroundimg=loadImage("assets/background.gif")

}

function setup() {
  barray=[]
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  tower= new TOWER(120,340,150,345)
  canon=new CANNON(120,163.75,20)
  ground= new GRO()
array1=[]
  ships=[]
  ellipseMode(RADIUS)
  rectMode(CENTER)
  imageMode(CENTER)
  angleMode(DEGREES)
}

function draw() {
image(backgroundimg,600,300,1200,600)
  Engine.update(engine);
  
  tower.show()
  canon.show()
  
  for(var i=0;i<barray.length;i+=1){
    if(barray[i]){
    barray[i].show()
    }
  }
 
    ships1()
  
  

  boom()
}
function keyReleased(){
  if(keyCode==32){
    barray[barray.length-1].shoot()
  }
}
function keyPressed(){
  if(keyCode==32){
  var ball= new BALL()
  barray.push(ball)
  }
}

function ships1(){
  if(ships.length<=4){
    if(ships.length==0){
      var ship= new SHIP(Math.round(random(495,525)))
     
        
      ships.push(ship)
    }else if(ships[ships.length-1].body.position.x<800||ships[ships.length-1]==undefined){
      var ship= new SHIP(Math.round(random(495,525)))
    
        
      ships.push(ship)
  }
   
}
  
  for(var i=0;i<=3;i+=1){
  if(ships[i]){
  ships[i].show()
 
    Matter.Body.setVelocity(ships[i].body,{
     x:-4,
     y:0
    })
  }
}

}
function boom(){

    for (var i=0;i<ships.length;i+=1){
      for(var i2=0;i2<barray.length;i2+=1){
        if(ships[i]&&barray[i2]) 
          var collision=Matter.SAT.collides(ships[i].body,barray[i2].body)
          if(collision.collided){
            if(ships[i]&&barray[i2]){
              Matter.World.remove(world,ships[i].body)
             Matter.World.remove(world,barray[i2].body)
              delete ships[i]
             delete barray[i2]
            }
          }
      }
    }
}