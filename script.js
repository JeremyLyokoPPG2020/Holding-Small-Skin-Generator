let imgskin1 = new Image();
imgskin1.src = '';
imgskin1.onload = function() {
  //init();
};

//Create IMG
let imgskin2 = new Image();
imgskin2.src = 'img/steve.png';
imgskin2.onload = function() {
  //init();
};


let canvas = document.getElementById("canvas_output");
let ctx = canvas.getContext('2d');

//var bodyslider = document.getElementById('body_size');


imgskin1.onload = function() {
//function init() {}
  ctx.drawImage(imgskin1, 0, 0, 64, 64, 0, 0, 64, 64);
}

imgskin2.onload = function(){
	//head
	var headSize = 8;
	
	//body
    var bodyHeight = 12;
	//var bodyHeig1 = 5;
	//var bodyHeig2 = 7;
	
	var bodyHeight1 = bodyHeight - 7; //5px
	var bodyHeight2 = bodyHeight - 5; //7px
	
	//limb
    var defaultLimbWidth = 4;
    var defaultLimbHeight = 12;
	
	//resize body
	var bodyResiz1 = 4; //+4
	var bodyResiz2 = 5; //-8
	
	//resize leg
	var legResiz = 12;
	var legHeigh = 7;
	
	//con.drawImage(img, sx, sy, sw, sh, x, y, w, h)
  //head
  ctx.drawImage(imgskin2, 8, 8, headSize, headSize, 20, 20, 8, 8);//front
  ctx.drawImage(imgskin2, 16, 8, headSize, headSize, 28, 20, 4, 8);//left
  ctx.drawImage(imgskin2, 0, 8, headSize, headSize, 16, 20, 4, 8);//right
  ctx.drawImage(imgskin2, 8, 0, headSize, headSize, 20, 16, 8, 4);//top
  ctx.drawImage(imgskin2, 24, 8, headSize, headSize, 32, 20, 8, 8);//back
  
  //head2
  ctx.drawImage(imgskin2, 40, 8, headSize, headSize, 20, 36, 8, 8);//front
  ctx.drawImage(imgskin2, 48, 8, headSize, headSize, 28, 36, 4, 8);//left
  ctx.drawImage(imgskin2, 32, 8, headSize, headSize, 16, 36, 4, 8);//right
  ctx.drawImage(imgskin2, 40, 0, headSize, headSize, 20, 32, 8, 4);//top
  ctx.drawImage(imgskin2, 56, 8, headSize, headSize, 32, 36, 8, 8);//back
  
  //body
  
  //canvas.height = img.height;
  
  //ctx.drawImage(imgskin2, 16, 20, 24, 4, 16, 28, 24, bodyHeig1);
  ctx.drawImage(imgskin2, 16, 20, 24, bodyHeight1, 16, 28, 24, bodyResiz1);//front
  //ctx.drawImage(imgskin2, 16, 24, 12, bodyHeig2, 0, 20, 12, 8);//resize
  ctx.drawImage(imgskin2, 16, 25, 12, bodyHeight2, 0, 20, 12, bodyResiz2);//resize
  ctx.drawImage(imgskin2, 20, 25, 16, bodyHeight2, 16, 52, 16, bodyResiz2);//resize
  ctx.drawImage(imgskin2, 36, 25, 4, bodyHeight2, 12, 20, 4, bodyResiz2);//resize
  
  
  //leg
  ctx.drawImage(imgskin2, 0, 20, 16, defaultLimbHeight, 0, 25, 16, legHeigh);
  ctx.drawImage(imgskin2, 16, 52, 16, defaultLimbHeight, 16, 57, 16, legHeigh);
  
  //arm
  // Translate the canvas to the image's center.
	// Rotate the canvas by 180 degrees clockwise.
	ctx.rotate(Math.PI);
  //ctx.drawImage(imgskin2, 0, 0, 64, 64, 0, 0, 64, 64);
  ctx.drawImage(imgskin2, 44, 20, defaultLimbWidth, defaultLimbHeight, -48, -32, defaultLimbWidth, defaultLimbHeight);
  ctx.drawImage(imgskin2, 48, 20, defaultLimbWidth, defaultLimbHeight, -44, -32, defaultLimbWidth, defaultLimbHeight);
  ctx.drawImage(imgskin2, 40, 20, defaultLimbWidth, defaultLimbHeight, -52, -32, defaultLimbWidth, defaultLimbHeight);
  ctx.drawImage(imgskin2, 52, 20, defaultLimbWidth, defaultLimbHeight, -56, -32, defaultLimbWidth, defaultLimbHeight);
  
  ctx.drawImage(imgskin2, 48, 16, defaultLimbWidth, defaultLimbWidth, -48, -20, defaultLimbWidth, defaultLimbWidth);
  ctx.drawImage(imgskin2, 44, 16, defaultLimbWidth, defaultLimbWidth, -52, -20, defaultLimbWidth, defaultLimbWidth);
  
  ctx.translate(0, 11);
  ctx.drawImage(imgskin2, 36, 52, defaultLimbWidth, defaultLimbHeight, -40, -75, defaultLimbWidth, defaultLimbHeight);
  ctx.drawImage(imgskin2, 40, 52, defaultLimbWidth, defaultLimbHeight, -36, -75, defaultLimbWidth, defaultLimbHeight);
  ctx.drawImage(imgskin2, 32, 52, defaultLimbWidth, defaultLimbHeight, -44, -75, defaultLimbWidth, defaultLimbHeight);
  ctx.drawImage(imgskin2, 44, 52, defaultLimbWidth, defaultLimbHeight, -48, -75, defaultLimbWidth, defaultLimbHeight);
  
  ctx.drawImage(imgskin2, 40, 48, defaultLimbWidth, defaultLimbWidth, -40, -63, defaultLimbWidth, defaultLimbWidth);
  ctx.drawImage(imgskin2, 36, 48, defaultLimbWidth, defaultLimbWidth, -44, -63, defaultLimbWidth, defaultLimbWidth);
  
  
  //ctx.msImageSmoothingEnabled = false;
  //ctx.mozImageSmoothingEnabled = false;
  //ctx.webkitImageSmoothingEnabled = false;
  //ctx.imageSmoothingEnabled = false;
  
  //ctx.drawImage(img, 15, 15, 16, 18, 0, 0, 16, 18);
}
  // turn off image aliasing
  ctx.msImageSmoothingEnabled = false;
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;



