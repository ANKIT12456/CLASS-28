class SLINGSHOT{

    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.1
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);

        
    }

    fly(){
      
        this.body.bodyA=null
    }

    display(){

        if(this.body.bodyA){
        var posa=this.body.bodyA.position;
        var posb=this.pointB;

        strokeWeight(2);
        line (posa.x,posa.y,posb.x,posb.y);
        }
    }
} 