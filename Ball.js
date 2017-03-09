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
	var step = {
		x:0,
		y:3
	}
	var sSurface;
	
	var angle = new Angle(step);
	var audio = new Audio();
	
	var ballObject = {
					  x:X,
					  y:Y,
					  d:dimension
					 };
	
	this.connection = function(){
		
		alert("Ball is Connected");
	}
	
	this.setCanvas = function(canvasId){
		this.canvasId = canvasId;
		dimension = canvasId.width * dimensionInPercentage/100;
		
	}
	this.setAudioId = function(audioId){
		
		audio.setAudioId(audioId);
		
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
		this.updateBallObject();
	}
	this.run = function(){

		setInterval(this.changePosition,0);
	}
	
	this.changePosition = function(){
		
			if(right && up ){
			X+=step.x;
			Y-=step.y;
			if(X+dimension>=this.canvasId.width){
				right = false;
				left = true;
			}
			if(Y<=yPos){
				up = false;
				down = true;
			}
		}else if(left && up){
			X-=step.x;
			Y-=step.y;
			if(X<=xPos){
				left = false;
				right = true;
			}
			if(Y<=yPos){
				up = false;
				down = true;
			}
		}else if(left && down){
			X-=step.x;
			Y+=step.y;
			
			if(X<=xPos){
				left = false;
				right = true;
			}
			if(Y+dimension==sSurface.y && X<=sSurface.x+sSurface.w && X+dimension>=sSurface.x){
				step = angle.getXY(sSurface,ballObject);
				audio.startPlay(1);
				
				
				
				down = false;
				up = true;
			}
			if(X <= sSurface.x+sSurface.w && X+dimension>=sSurface.x+sSurface.w && Y+dimension>=sSurface.y && Y<=sSurface.y+sSurface.h){
				right = true;
				left = false;
				down = true;
				up = false;
			}
		}else if(right && down){
			X+=step.x;
			Y+=step.y;
			if(X+dimension>=this.canvasId.width){
				right = false;
				left = true;
			}
			if(Y+dimension==sSurface.y && X<=(sSurface.x+sSurface.w) && X+dimension>=sSurface.x){
				step = angle.getXY(sSurface,ballObject);
				audio.startPlay(1);
				
				
				
				down = false;
				up = true;
			}
			if(X <= sSurface.x && X+dimension>=sSurface.x && Y+dimension>=sSurface.y && Y<=sSurface.y+sSurface.h){
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
	this.getX = function(){
		return X;
	}
	this.getY = function(){
		return Y;
	}
	this.updateBallObject = function(){
		ballObject.x = this.getX();
		ballObject.y = this.getY();
		ballObject.d = this.getDimension();
	}
}

function Angle(s){
	var ang = [30,40,50,60,70,80,90,80,70,60,50,40,30];
	var div = (1/ang.length);
	var r = Math.sqrt(s.x*s.x+s.y*s.y);//this will be the speed of ball..........
	var step = {
		x:r * Math.cos(45 * Math.PI/180),
		y:r * Math.sin(45 * Math.PI/180)
	}
	this.connection = function(){
		
		alert("Angle is connected");
	}
	this.getXY = function(sSurface,ball){
	var i =0;
		for(i=0;i<ang.length;i++)
		{
			if((sSurface.x+div*i*sSurface.w) <=ball.x && (sSurface.x + sSurface.w*div * (i+1))>=ball.x)
			{
				step.x = r * Math.cos(ang[i] * Math.PI/180);
				step.y = r * Math.sin(ang[i] * Math.PI/180);
				return step;
			}
		}return step;
	}
}
function Audio(){
	var audioId;
	this.connection = function(){
		
		alert("Audio is connected");
	}
	this.setAudioId = function(id){
		audioId = id;
	}
	this.startPlay = function(no){
			if(no == 1){
			//	audioId.src = "sounds/metal.mp3";
				audioId.volume = 1;
				audioId.currentTime = 0;
				audioId.play();
			}else if(no == 2){
			//	audioId.src = "sounds/smashing.mp3";
				audioId.volume = 1;
				audioId.currentTime = 0;
				audioId.play();	
			}
	}
}