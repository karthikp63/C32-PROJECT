class box{	
    constructor(x,y,width,height){
		var options={
			isStatic:false,
			restitution :0,
            friction :1,			
        }
		this.x=x;
		this.y=y;
		this.w=width
		this.h=height
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.Visibility = 255;
 		World.add(world, this.body);
	}

    display(){
        if(this.body.speed < 3){
            var pos=this.body.position;		
            push()
            translate(pos.x, pos.y);		
            rotate(this.body.angle)
            fill("blue")
            rectMode(CENTER)
            rect(0,0,this.width, this.height);
            pop()
    }	else{
            push()
            this.Visibility = this.Visibility-5;
            tint(255,this.Visibility);
            World.remove(world,this.body)
            pop()
        }
    }
    score(){
        if (this.Visibility < 0 && this.Visibility >-105){
          score++;
        }
    }
}