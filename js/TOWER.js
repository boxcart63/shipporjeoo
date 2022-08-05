class TOWER{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var prop={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,prop)
        World.add(world,this.body)
        this.image=loadImage("assets/tower.png")
    }
    show(){
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }

}