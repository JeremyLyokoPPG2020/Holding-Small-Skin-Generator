//Create IMG
let img = new Image();
img.src = 'img/steve.png';
img.onload = function() {
  init();
};
//Create IMG
let img2 = new Image();
img2.src = 'img/skin-template.png';
img2.onload = function() {
  init();
};

let canvas = document.getElementById("canvas_output");
let ctx = canvas.getContext('2d');



function init() {
//con.drawImage(img, sx, sy, sw, sh, x, y, w, h)
  ctx.drawImage(img2, 0, 0, 64, 64, 0, 0, 64, 64);
  //head
  ctx.drawImage(img, 8, 8, 8, 8, 20, 20, 8, 8);//front
  ctx.drawImage(img, 16, 8, 8, 8, 28, 20, 4, 8);//left
  ctx.drawImage(img, 0, 8, 8, 8, 16, 20, 4, 8);//right
  ctx.drawImage(img, 8, 0, 8, 8, 20, 16, 8, 4);//top
  ctx.drawImage(img, 24, 8, 8, 8, 32, 20, 8, 8);//back
  
  //body
  ctx.drawImage(img, 16, 20, 24, 4, 16, 28, 24, 4);//front
  ctx.drawImage(img, 16, 24, 12, 8, 0, 20, 12, 5);//resize
  ctx.drawImage(img, 20, 24, 16, 8, 16, 52, 16, 5);//resize
  ctx.drawImage(img, 36, 24, 4, 8, 12, 20, 4, 5);//resize

  // turn off image aliasing
ctx.msImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
  
  ctx.drawImage(img, 15, 15, 16, 18, 0, 0, 16, 18);
}