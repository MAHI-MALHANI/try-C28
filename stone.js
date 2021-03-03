class stone{
    constructor(bodyA, pointB){
        var options ={
            isStatic:false,
            restitution:0, 
            friction:1,
            density:1.2
        }
        this.pointB=pointB;

        this.stone = Constraint.create(options);
        this.stone.body;
        World.add(world, this.stone);
    }
    display(){
        if(this.stone.bodyA){

            var pointA=this.stone.bodyA.position;
            var pointB=this.pointB;

            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }

       fly(){
        this.stone.bodyA=null;

    }
}