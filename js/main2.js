var canvas_wrap = document.getElementById("wrapper");
var c_canvas = document.getElementById("setka");
var ctx = c_canvas.getContext("2d");

var viewportOffset = canvas_wrap.getBoundingClientRect();
var left = viewportOffset.left;
var top = viewportOffset.top;
var right = viewportOffset.right;
var bottom = viewportOffset.bottom;
// console.log(top, right, bottom, left);

var width = canvas_wrap.offsetWidth;
var height = canvas_wrap.offsetHeight;
var step = 16;
var hDot = width/step;
var hDot2 = 2;
var vDot = height/step;
var vDot2 = 2;
var pointSize = 2;
var lW = 2;
var color = "#d4dcdf";
var actColor = "#78b0d0";
var dotArr = [];

c_canvas.width = canvas_wrap.offsetWidth;
c_canvas.height = canvas_wrap.offsetHeight;

for (var i = 1; i < hDot; i++) {
  for (var j = 1; j < vDot; j++) {
    if(i==15 && j==5){
      color = actColor;
      lW = 3;
      pointSize = 3;
    } else{
      color = "#d4dcdf";
      lW = 2;
      pointSize = 2;
    }
    pointWrite(pointSize, color, lW, i , j);
    // console.log(hDot, vDot);
    dotArr.push({
      x: step*i,
      y: step*j,
      color: "#d4dcdf"
    });
  }
}

function pointWrite(pointSize, color, lW, i, j){
  ctx.beginPath();
  ctx.lineWidth = lW;
  ctx.arc(step*i, step*j, pointSize, 0, Math.PI * 2, !1);
  ctx.fillStyle = color;
  ctx.fill();
}

// c_canvas.onmouseover(function () {
// })

c_canvas.addEventListener('mousemove', dotHove, false);
c_canvas.addEventListener('mouseenter', dotHove, false);


// console.log(left, top);
function dotHove(){
  var _x = event.clientX - left;
  var _y = event.clientY - viewportOffset.top;
  // console.log(x, y);
  // console.log(dotArr.length);
  if(_x%step <= 1 && _y%step <= 1){
    // console.log(_x%step, _y%step);
    dotArr.forEach(function(item, i){
      // console.log(_x);
      if(item.x == _x && item.y == _y){
        console.log(item.color);
      }
    })
  }
}

// dotHove();

for (var i = 1; i < 100; i++) {
  for (var j = 1; j < 100; j++) {
    pointWrite(color, lW, i , j);
    // console.log(dotArr);
  }
}
