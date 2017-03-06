class Canvas{
	
	constructor(canvasId){
		this.canvasId = canvasId;
		this.draw();
		this.setupScreenSize();
	}
	
	connection(){
		alert("canvas is connected!!");
	}
	
	width(){		//it will setup the size of the canvas.............
		return 500;
	}
	
	height(){		//it will setup the width of the canvas..........
		return window.innerHeight;
	}
	
	setupScreenSize(){
		if(screen.width>=this.width()){
			this.canvasId.width = this.width();
			this.canvasId.height = this.height();
		}else{
			this.canvasId.width = window.innerWidth;
			this.canvasId.height = window.innerHeight;
		}
	}
	
	draw(value){
		var ctx = this.canvasId.getContext("2d");
		
		ctx.font = "30px Arial";
		ctx.fillText("Hello World",10,50);
		
		var img = new Image();
		img.src = "images/background.jpg";
		
		img.onload = function(){
			ctx.drawImage(img,0,0);
		}
	}
};