class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
     
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('images.jpg');
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,displayWidth*4,displayHeight,displayWidth*5, displayHeight);
        pop();
    }
}