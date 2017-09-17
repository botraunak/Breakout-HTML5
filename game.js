	// Fetch Canvas and initialize Context
	const canvas = document.getElementById('game-container');
	const ctx = canvas.getContext('2d');

	// Adding Canvas Width and Height
	const CANVAS_WIDTH = '360';
	const CANVAS_HEIGHT = '640';

	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	// Breakout Game
	const Breakout = function() {
		
		// Game State Variables
		var pos = {};
		var stopped = false;
		var ball = new Ball();
		var paddle = new Paddle(canvas, ctx);

		// Initialize the Game State
		function init() {
			pos = {
				x: 10,
				y: 20
			}
			stopped = false;
			ball.init();
			paddle.init();
		}

		// Draw The Game Scene
		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ball.draw();
			paddle.draw();
		}

		// Game Logic Updates
		function update() {
			ball.update();
		}

		// Game Run Function
		function run() {
			
			update();
			draw();

			if(!stopped) {
				requestAnimationFrame(run);
			}
		}

		function stop() {
			stopped = true;
		}

		return {
			init: init,
			draw: draw,
			update: update,
			run: run,
			stop: stop
		};
	};

	// Creating the Game
	let Game = new Breakout();
	Game.init();
	Game.run();