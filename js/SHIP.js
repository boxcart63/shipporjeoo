class SHIP{
    constructor(y){
        this.y=y
        this.x=1200
        this.image=loadImage("assets/boat.png")
        
        this.body=Bodies.rectangle(this.x,this.y,100,100)
        World.add(world,this.body)
    }

    show(){
       
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,0,100,100)
        pop()   
    }
}