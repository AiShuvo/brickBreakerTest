function Ball(){
	var canvasId;
	var color = "red";
	var X = 0;
	var Y = 0;
	var width = 10;
	var height = 10;
	
	this.connection = function(){
		
		alert("Ball is Connected");
	}
	
	this.setCanvas = function(canvasId){
		
		this.canvasId = canvasId;
	}
	
	this.draw = function(){
		
		var ctx = this.canvasId.getContext("2d");
		
		ctx.fillStyle = color;
		ctx.fillRect(X,Y,width,height);
	}
	this.changePosition = function(){
		
	}
}