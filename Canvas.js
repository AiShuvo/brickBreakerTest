function Canvas(){
	//decleare all instance here...........
	
	var animation = new Animation();
	
	//decleare all variable bellow.............
	var loading = false;
	var width = 500;
	var height = window.innerHeight;
	var canvasId = null;
	var interval;
	this.setCanvas = function(canvasId){
		this.canvasId = canvasId;
		this.setupScreenSize();
		animation.setCanvasId(canvasId);
	}
	this.run = function(){
		animation.setAng();
		interval = setInterval(this.startAnimation,10);
	}
	
	this.startAnimation = function(){
		if(!loading)
			animation.anim();
		else if(loading)
			clearInterval(interval);
	}
	
	this.connection = function(){
		alert("canvas is connected!!");
	}
	
	this.setupScreenSize = function(){
		if(screen.width>=width){
			this.canvasId.width = width;
			this.canvasId.height = height;
		}else{
			this.canvasId.width = window.innerWidth;
			this.canvasId.height = window.innerHeight;
		}
	}
	
	this.draw = function(){ //this function will draw the canvas background..........
		
		var CanvasWidth = this.canvasId.width;
		var CanvasHeight = this.canvasId.height;
		var ctx = this.canvasId.getContext("2d");
			
		var img = new Image();
		img.src = "images/background3.jpg";
		
		img.onload = function(){
			ctx.drawImage(img,0,0,CanvasWidth,CanvasHeight);
			loading = true;
		}
	}
}