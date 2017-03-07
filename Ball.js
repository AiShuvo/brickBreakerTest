function Ball(){
	var canvasId;
	var color = "red";
	var X = 0;
	var Y = 0;
	var width = 10;
	var height = 10;
	var xPos = 0;//left sidei distane upto ball can move.........
	var yPos = 0;//Up side distance upto which ball can move............
	var left = false;
	var right = true;
	var up = true;
	var down = false;
	var canvas;
	this.connection = function(){
		
		alert("Ball is Connected");
	}
	
	this.setCanvas = function(canvasId){
		
		this.canvasId = canvasId;
	}
	this.setPosition = function(x,y){
		X = x;
		Y = y;
	}
	this.draw = function(){
		var ctx = this.canvasId.getContext("2d");
		ctx.fillStyle = color;
		ctx.fillRect(X,Y,width,height);
	}
	this.run = function(canv){
		this.canvas = canv;
		setInterval(this.changePosition,10);
	}
	
	this.changePosition = function(){
			this.canvas.draw();
			if(right && up ){
			X++;
			Y--;
			if(X>=this.canvasId.width){
				right = false;
				left = true;
			}
			if(Y<=yPos){
				up = false;
				down = true;
			}
		}else if(left && up){
			X--;
			Y--;
			if(X<=xPos){
				left = false;
				right = true;
			}
			if(Y<=yPos){
				up = false;
				down = true;
			}
		//		this.setDirection(true,false,false,true);
		}else if(left && down){
			X--;
			Y++;
			
			if(X<=xPos){
				left = false;
				right = true;
			}
			if(Y>=this.canvasId.height){
				down = false;
				up = true;
			}
			//	this.setDirection(false,true,false,true)
		}else if(right && down){
			X++;
			Y++
			if(X>=this.canvasId.width){
				right = false;
				left = true;
			}
			if(Y>=this.canvasId.height){
				down = false;
				up = true;
			}
//				this.setDirection(false,true,true,false);
		}
	}
	this.setMovingSide = function(){
		alert("hello");
	}
}