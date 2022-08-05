class GRO{
    constructor(){
        this.x=600
        this.y=550
       
        var props={
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,1200,20,props)
        World.add(world,this.body)
    }
   
}