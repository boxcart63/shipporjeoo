
class BALL{

    constructor(){
        this.x=120
        this.y=163
        this.image=loadImage("assets/cannonball.png")
        var prop={
            isStatic:true,
            "densitty":200
        }
        
        this.body=Bodies.circle(this.x,this.y,10,prop)
        World.add(world,this.body)

    }
    show(){
        image(this.image,this.body.position.x,this.body.position.y,10,10)
        var arrayxy=[this.body.position.x,this.body.position.y]
         array1.push(arrayxy)
        for(var i=0;i<array1.length;i+=1){
             image(this.image,array1[i][0],array1[i][1],3,3)
            
        }   
    }
    shoot(){
        //for(var i=){
      
        //}
       
     
        var newAngle = canon.rotation - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.25);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
      }
    }
