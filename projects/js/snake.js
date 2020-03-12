
var game = document.getElementById("game");
var canvas;
var width;
var height;

const setup = (w, h) => {
  canvas = document.querySelector('.myCanvas')
  if(canvas == null){
    var can = document.createElement("CANVAS");
    can.setAttribute("class", "myCanvas");
    can.setAttribute("width", w);
    can.setAttribute("height", h);
    document.getElementById("game").appendChild(can);
  } else {
    canvas.width = w;
    canvas.height = h;
  }
  width = w;
  height = h;
}
setup(game.clientWidth, game.clientHeight);

window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas(e) {
  var column = document.querySelector('.col');
  width = document.getElementById('game').clientWidth;
  height = document.getElementById('game').clientHeight;
  setup(width, height);
  console.log(width + ", "+ height);
}
// function printer(msg, x, y){
//   let newY = height - y;
//   ctx.fillText(msg, x, newY);
// }
//
// // function getWidth(elem){
// //   let temp = document.getElementById(elem);
// //   return temp.clientWidth;
// // }
//
// function getHeight(elem){
//   return getComputedStyle(elem).height;
// }
//
// //print to the console
// function print(str){
//   console.log(str);
//   return str;
// }
//
// return x and y mouse coord
window.addEventListener("click", getXandY, false);
function getXandY(eve){
  if(eve != null){
    var xCoord = eve.clientX;
    var yCoord = eve.clientY;
    // console.log(xCoord + "," + yCoord);
    return {x: xCoord, y: yCoord};
  }
}

function randomXandY(){
  var can = document.querySelector('.myCanvas');
  let newX = Math.ceil(can.width * Math.random());
  let newY = Math.ceil(can.height * Math.random());
  return({x: newX , y: newY});
}

//TESTING | UNCOMMENT to test
// module.exports = {setup, resizeCanvas, getXandY, randomXandY};
