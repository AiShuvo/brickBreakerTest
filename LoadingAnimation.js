function Animation(){
	var velocity;
	var accelaration;
	var decelaration;
	var sVelocity;		//starting velocity;
	var canvasId;
	var interval;
	//decleare object here......
	var animObject = new AnimObject();
	var animObject1 = new AnimObject();
	var animObject2 = new AnimObject();
	
	this.connection = function(){
		alert("Animation is connected!!");
	}
	
	this.setCanvasId = function(canvasId){
		this.canvasId = canvasId;
	}
	this.setAng = function(){
		animObject.setAng(20);
		animObject1.setAng(10);
		animObject2.setAng(0)
	//	interval = setInterval(this.allElement,10);
	}
	this.anim = function(){
		
		var ctx = this.canvasId.getContext("2d");
		ctx.fillStyle = "black";
		ctx.fillRect(0,this.canvasId.height/2-50,this.canvasId.width,100);
		
		animObject.draw(this.canvasId);
		animObject1.draw(this.canvasId);
		animObject2.draw(this.canvasId);
	}
	this.endInterval = function(){
		clearInterval(interval);
	}
}

function AnimObject(){
	var X = 0;
	var ang = 0;	
	var canvasId = null;
	this.connection = function(){
		alert("animObject is connected");
	}	
	
	this.draw = function(canvasId){
		this.canvasId = canvasId;
		var ctx = canvasId.getContext("2d");
		this.changePosition();
		
		ctx.fillStyle = "red";
		ctx.fillRect(X,canvasId.height/2,10,10);
	}
	
	this.changePosition = function(){
		var r = this.canvasId.width;
			ang++;
			
			if(ang>90){
				ang = 0;
				X = 0;
			}
			
		X = r * Math.sin(ang * Math.PI/180);			
	}
	
	this.setAng = function(value){
		ang = value;
	}
}