function Ball(){
	var canvasId;
	var color = "white";
	var color2  = "red"
	var X = 0;
	var Y = 0;
	var dimension = 10;
	var dimensionInPercentage = 3;
	var xPos = 0;//left sidei distane upto ball can move.........
	var yPos = 0;//Up side distance upto which ball can move............
	var left = true;
	var right = false;
	var up = true;
	var down = false;
	var canvas;
	var step = 1;
	var sSurface;
	this.connection = function(){
		
		alert("Ball is Connected");
	}
	
	this.setCanvas = function(canvasId){
		
		this.canvasId = canvasId;
		dimension = canvasId.width * dimensionInPercentage/100;
		
	}
	this.setPosition = function(x,y){
		X = x;
		Y = y;
	}
	this.draw = function(){
		var ctx = this.canvasId.getContext("2d");
		ctx.fillStyle = color;
		ctx.fillRect(X,Y,dimension,dimension);
		ctx.fillStyle = color2;
		ctx.fillRect(X+2,Y+2,dimension-4,dimension-4);
	}
	this.run = function(){

		setInterval(this.changePosition,0);
	}
	
	this.changePosition = function(){
			if(right && up ){
			X+=step;
			Y-=step;
			if(X+dimension>=this.canvasId.width){
				right = false;
				left = true;
			}
			if(Y<=yPos){
				up = false;
				down = true;
			}
		}else if(left && up){
			X-=step;
			Y-=step;
			if(X<=xPos){
				left = false;
				right = true;
			}
			if(Y<=yPos){
				up = false;
				down = true;
			}
		}else if(left && down){
			X-=step;
			Y+=step;
			
			if(X<=xPos){
				left = false;
				right = true;
			}
			if(Y+dimension==sSurface.y && X<=sSurface.x+sSurface.w && X+dimension>=sSurface.x){
				down = false;
				up = true;
			}
			if(X <= sSurface.x+sSurface.w && X+dimension>=sSurface.x+sSurface.w && Y+dimension>=sSurface.y && Y<=sSurface.y+sSurface.w){
				right = true;
				left = false;
				down = true;
				up = false;
			}
		}else if(right && down){
			X+=step;
			Y+=step
			if(X+dimension>=this.canvasId.width){
				right = false;
				left = true;
			}
			if(Y+dimension==sSurface.y && X<=(sSurface.x+sSurface.w) && X+dimension>=sSurface.x){
				down = false;
				up = true;
			}
			if(X <= sSurface.x && X+dimension>=sSurface.x && Y+dimension>=sSurface.y && Y<=sSurface.y+sSurface.w){
				right = false;
				left = true;
				down = true;
				up = false;
			}
		}
	}
	this.setSpring = function(sps){
		sSurface = sps;		
	}
	this.getDimension = function(){
		return dimension;
	}
}