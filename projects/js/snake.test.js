const {setup,resizeCanvas} = require('./snake');

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

  //new setup
  setup(300, 400);
  expect(document.body.innerHTML).toBe(`<div class="col" style="padding:0px;"><div id="game"><canvas class="myCanvas" width="300" height="400"></canvas></div></div>`);
  expect(canvas.width).toBe(300);
  expect(canvas.height).toBe(400);
});


test('resizeCanvas change canvas size on resize', () => {
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
  expect(canvas.width).toBe(400);
  expect(canvas.height).toBe(400);
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
  expect(canvas.width == 400).toBeFalsy();
  expect(canvas.height == 400).toBeFalsy();
});

test('resizeCanvas change size responsively', () => {
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
  expect(canvas.width).toBe(400);
  expect(canvas.height).toBe(400);
  global.innerWidth = 600;
  global.dispatchEvent(new Event('resize'));
  expect(canvas.width == 400).toBeFalsy();
  expect(canvas.height == 400).toBeFalsy();
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
