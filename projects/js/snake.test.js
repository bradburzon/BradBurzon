
const {setup,getXandY,randomXandY} = require('./snake');

test('setup creates a new canvas', () => {
  document.body.innerHTML = `
  <div class="col" style="padding:0px;">
  <div  id="game">
  </div>
  </div>`;
  var game = document.getElementById("game");
  expect(game).toBeDefined();
  game.width = 400;
  game.height = 400;
  setup(game.width, game.height);
  var canvas = document.querySelector('.myCanvas');
  //test if canvas exists
  expect(canvas).toBeDefined();
});

test('setup sets up right dimension', () => {
  document.body.innerHTML = `
  <div class="col" style="padding:0px;">
  <div  id="game">
  <canvas class="myCanvas" width="400" height="400"></canvas></div>
  </div>
  </div>`;
  var game = document.getElementById("game");
  expect(game).toBeDefined();
  game.width = 400;
  game.height = 400;
  setup(game.width, game.height);
  var canvas = document.querySelector('.myCanvas');
  //test if canvas has right width and height
  expect(canvas.width).toBe(400);
  expect(canvas.height).toBe(400);
});

test('setup doesnt create new canvas if theres existing', () => {
  document.body.innerHTML = `<div class="col" style="padding:0px;"><div id="game"></div></div>`;
  var game = document.getElementById("game");
  expect(game).toBeDefined();
  game.width = 400;
  game.height = 400;
  setup(game.width, game.height);
  var canvas = document.querySelector('.myCanvas');
  //test if canvas exists
  expect(canvas).toBeDefined();
  expect(document.body.innerHTML).toBe(`<div class="col" style="padding:0px;"><div id="game"><canvas class="myCanvas" width="400" height="400"></canvas></div></div>`);
  setup(300, 600);
  expect(document.body.innerHTML).toBe(`<div class="col" style="padding:0px;"><div id="game"><canvas class="myCanvas" width="300" height="600"></canvas></div></div>`);
  expect(canvas.width).toBe(300);
  expect(canvas.height).toBe(600);
});

//TESTING | UNCOMMENT to test
// module.exports = {setup, getXandY, randomXandY};
// var $ = require('jquery');

// test('resizeCanvas changes size', () => {
//   document.body.innerHTML = `
//   <div class="col" style="padding:0px;">
//   <div  id="game">
//   </div>
//   </div>`;
//   var game = document.getElementById("game");
//   expect(game).toBeDefined();
//   game.width = 400;
//   game.height = 400;
//   setup(game.width, game.height);
//   var canvas = document.querySelector('.myCanvas');
//   expect(canvas.width).toBe(400);
//   expect(canvas.height).toBe(400);
//   console.log(document.body.innerHTML);
//
//   global.dispatchEvent(new Event('resize'));
//
//   expect(canvas.width == 400).toBeFalsy();
//   expect(canvas.height == 400).toBeFalsy();
//   //use toHaveBeenCalled(1);
// });
//
// // test('resizeCanvas change size correctly', () => {
// //   document.body.innerHTML = `
// //   <div class="col" style="padding:0px;">
// //   <div  id="game">
// //   </div>
// //   </div>`;
// //   var game = document.getElementById("game");
// //   game.width = 400;
// //   game.height = 400;
// //   setup(game.width, game.height);
// //   var canvas = document.querySelector('.myCanvas');
// //   var column = document.querySelector('.col');
// //   column.width = 600;
// //   column.height = 600;
// //   global.dispatchEvent(new Event('resize'));
// //   expect(canvas.width).toBe(600);
// //   expect(canvas.height).toBe(600);
// // });

test('getXandY returns coord', () => {
  document.body.innerHTML = `
  <div class="col" style="padding:0px;">
  <div  id="game">
  <canvas class="myCanvas" width="400" height="400"></canvas>
  </div>
  </div>`;

  var click = new Event('click');
  click.clientX = 100;
  click.clientY = 200;
  expect(getXandY(click)).toStrictEqual({x:100,y:200});
});

test('randomXandY gives coord', () => {
  document.body.innerHTML = `
  <div class="col" style="padding:0px;">
  <div  id="game">
  <canvas class="myCanvas" width="400" height="400"></canvas>
  </div>
  </div>`;

  var ran = randomXandY();
  expect(ran).toBeDefined();
  expect(ran.x).toBeDefined();
  expect(ran.y).toBeDefined();
  // expect(ran).toContain('x');
});

// test('call resizeCanvas on resize', () => {
//   document.body.innerHTML = `
//   <div class="col" style="padding:0px;">
//   <div  id="game">
//   </div>
//   </div>`;
//   const somethingSpy = jest.spyOn(Snake, 'resizeCanvas');
//   var game = document.getElementById("game");
//   expect(game).toBeDefined();
//   game.width = 400;
//   game.height = 400;
//   setup(game.width, game.height);
//   var canvas = document.querySelector('.myCanvas');
//   expect(canvas.width).toBe(400);
//   expect(canvas.height).toBe(400);
//   global.innerWidth = 600;
//   global.dispatchEvent(new Event('resize'));
//
// });
