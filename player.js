class Player{
    constructor(x,y,width,height){
       var options ={
            density:1,
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage('red_car_image.png');
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       // imageMode(CENTER);
       rectMode(CENTER);
        //image(this.image,0,0,this.width,this.height);
        rect(0,0,this.width,this.height);
        pop();
    }
}