class CANNON{
    constructor(x,y,rotation){
        this.x=x
        this.y=y
        this.rotation=rotation
        this.canonimage=loadImage("assets/canon.png")
        this.canonbaseimage=loadImage("assets/cannonBase.png")
        var props={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,60,60,props)
        World.add(world,this.body)
        
    }
    show(){   
        image(this.canonbaseimage,this.x,this.y,60,60)
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.rotation)
        image(this.canonimage,0,0,60,60)
        pop()
        //right
        if(keyIsDown(39)&&this.rotation<=30){
            this.rotation+=1
        }
        //left
        if(keyIsDown(37)&&this.rotation>=-21){
            this.rotation+=-1
        }
        
    }
    
}