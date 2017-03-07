function SpringSurface(){
	var canvasId;
	var X = 0;
	var Y = 400;
	var posX = 0;
	var width = 150;
	var height = 10;
	var widthInPercentage = 40;
	var heighInPercentage = 3;
	var yInPercentage = 90;
	var step = 10;
	var color = "white";
	var color2 = "red";
	this.connection = function(){
		
		alert("SpringSurface is connected");
	}
	
	this.setCanvas = function(canvasId){
		
		this.canvasId = canvasId;
		width = canvasId.width * widthInPercentage/100;
		height = canvasId.height * heighInPercentage/100;
		Y = canvasId.height * yInPercentage/100;
	}
	
	this.draw = function(){		
		var ctx = this.canvasId.getContext("2d");
		ctx.fillStyle = color;
		ctx.fillRect (X,Y,width,height);
		
		ctx.fillStyle = color2;
		ctx.fillRect (X+2,Y+2,width-4,height-4);
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
	}
	this.setX = function(value){
		X = value-width/2;
	}
}