var el = document.getElementById('c');
var ctx = el.getContext('2d');

ctx.fillStyle = "rgb(195,195,195)";
ctx.fillRect (0, 0, 500, 300);

ctx.lineWidth = 3;
ctx.lineJoin = ctx.lineCap = 'round';
ctx.lineWidth = 'purple';
ctx.globalCompositeOperation = "copy";
ctx.strokeStyle = "rgba(0,0,0,0)";

var isDrawing, lastPoint;

el.onmousedown = function(e) {
  isDrawing = true;
  lastPoint = { x: e.clientX, y: e.clientY };
};

el.onmousemove = function(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  
  //ctx.globalAlpha = 1;
  ctx.moveTo(lastPoint.x, lastPoint.y);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  
  ctx.moveTo(lastPoint.x - 4, lastPoint.y - 4);
  ctx.lineTo(e.clientX - 4, e.clientY - 4);
  ctx.stroke();
  
  ctx.moveTo(lastPoint.x - 2, lastPoint.y - 2);
  ctx.lineTo(e.clientX - 2, e.clientY - 2);
  ctx.stroke();
  
  ctx.moveTo(lastPoint.x + 2, lastPoint.y + 2);
  ctx.lineTo(e.clientX + 2, e.clientY + 2);
  ctx.stroke();
  
  ctx.moveTo(lastPoint.x + 4, lastPoint.y + 4);
  ctx.lineTo(e.clientX + 4, e.clientY + 4);
  ctx.stroke();
    
  lastPoint = { x: e.clientX, y: e.clientY };
};

el.onmouseup = function() {
  isDrawing = false;
};