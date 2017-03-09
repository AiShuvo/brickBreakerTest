function SpringSurface(){
	var canvasId;
	var X = 0;
	var Y = 400;
	var posX = 0;
	var width = 150;
	var height = 10;
	var widthInPercentage = 40;
	var heighInPercentage = 3;
	var yInPercentage = 89;
	var step = 20;
	var color = "white";
	var color2 = "red";
	
	var color3 = "yellow";
	var color4 = "lime";
	
	var angle30deg = 0.1;
	var angle45deg = 0.15;
	
	var springObject = {
						x:X,
						y:Y,
						w:width,
						h:height
						};
	
	this.connection = function(){
		
		alert("SpringSurface is connected");
	}
	
	this.setCanvas = function(canvasId){
		
		this.canvasId = canvasId;
		width = canvasId.width * widthInPercentage/100;
		height = canvasId.height * heighInPercentage/100;
		Y = canvasId.height * yInPercentage/100;
		this.updateSpringObject();
	}
	
	this.draw = function(){		
		var ctx = this.canvasId.getContext("2d");
		ctx.fillStyle = color;
		ctx.fillRect (X,Y,width,height);
		
		ctx.fillStyle = color2;
		ctx.fillRect (X+2,Y+2,width-4,height-4);
		
		ctx.fillStyle = color3;
		ctx.fillRect (X+2,Y+2,width*0.1,height-4);
		ctx.fillRect (X+width-width*0.1-2,Y+2,width*0.1,height-4);
		
		ctx.fillStyle = color4;
		ctx.fillRect (X+2+width*0.1,Y+2,width*0.15,height-4);
		ctx.fillRect (X+width-width*0.1-2,Y+2,width*0.1,height-4);
		
		this.updateSpringObject();
	}
	
	this.changePosition = function(value){
		
		if(value == "right"){
			X+=step;
			if(X+width >this.canvasId.width)
				X-=step;
		}
		else if(value=="left"){
			X-=step;
			if(X<posX)
				X+=step;			
		}
	//	this.updateSpringObject();//update spring surface property every time when it move;
	}
	
	this.setX = function(value){
		X = value-width/2;
	}
	
	this.getX = function(){
		return X;
	}
	this.getY = function(){
		return Y;
	}
	this.getWidht = function(){
		return width;
	}
	this.getHeight = function(){
		return height;
	}
	this.updateSpringObject = function(){
		springObject.x = this.getX();
		springObject.y = this.getY();
		springObject.w = this.getWidht();
		springObject.h = this.getHeight();
	}
	this.springProperty = function(){
		return springObject;
	}
}