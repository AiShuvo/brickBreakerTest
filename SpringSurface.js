function SpringSurface(){
	var canvasId;
	var X = 0;
	var Y = 400;
	var posX = 0;
	var width = 150;
	var height = 10;
	var step = 10;
	this.connection = function(){
		
		alert("SpringSurface is connected");
	}
	
	this.setCanvas = function(canvasId){
		
		this.canvasId = canvasId;
	}
	
	this.draw = function(){		
		var ctx = this.canvasId.getContext("2d");
		ctx.fillStyle = "black";
		ctx.fillRect (X,Y,width,height);
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
}