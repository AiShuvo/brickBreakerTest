class Canvas{
	
	constructor(canvasId){
		this.canvasId = canvasId;
		this.setupScreenSize();
		alert(this.isLoadComplete());
		this.draw();
		alert(this.isLoadComplete());
	}
	
	connection(){
		alert("canvas is connected!!");
	}
	
	setWidth(){		//it will setup the size of the canvas.............
		return 500;
	}
	
	setHeight(){		//it will setup the width of the canvas..........
		return window.innerHeight;
	}
	
	setupScreenSize(){
		if(screen.width>=this.setWidth()){
			this.canvasId.width = this.setWidth();
			this.canvasId.height = this.setHeight();
		}else{
			this.canvasId.width = window.innerWidth;
			this.canvasId.height = window.innerHeight;
		}
	}
	
	setLoadStatus(loadStatus){
		this.loadCompleted = loadStatus;
	}
	
	isLoadComplete(){ //this function will help to find out is image loaded or not
		return this.loadCompleted;
	}
	
	draw(){
		
		var CanvasWidth = this.canvasId.width;
		var CanvasHeight = this.canvasId.height;
		var ctx = this.canvasId.getContext("2d");
		
		var img = new Image();
		img.src = "images/background3.jpg";
		
		img.onload = function(){
			ctx.drawImage(img,0,0,CanvasWidth,CanvasHeight);
		}
		alert("hello helllo hello");
	}
};