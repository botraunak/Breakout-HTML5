	// Fetch Canvas and initialize Context
	const canvas = document.getElementById('game-container');
	const ctx = canvas.getContext('2d');

	// Adding Canvas Width and Height
	const CANVAS_WIDTH = '360';
	const CANVAS_HEIGHT = '640';

	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;

	const GAME_LIVES = 3;

	// Initliaze Background
	
	var bg = new Image();

	bg.onload = function() {
		drawBg();
	}

	function drawBg() {
		ctx.drawImage(bg,0,0);
	}

	bg.src = "./assets/bg.jpg";

	// Breakout Game
	const Breakout = function() {
		
		// Game State Variables
		var pos = {};
		var stopped = false;
		var ball = new Ball();
		var paddle = new Paddle(canvas, ctx);
		var lives = GAME_LIVES;

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
			drawBg();
			ball.draw();
			paddle.draw();
		}

		// Game Logic Updates
		function update() {
			ball.update();

			var ballPos = ball.getBall();
			var paddlePos = paddle.getPaddle();

			// Detect Ball And Paddle Collision
			if (ballPos.y + ballPos.r >= paddlePos.y && ballPos.x >= paddlePos.x && ballPos.x <= paddlePos.x + paddlePos.w) {
				ball.collided(paddle);
			}
			if (ballPos.y >= paddlePos.y && (ballPos.x <= paddlePos.x || ballPos.x >= paddlePos.x + paddlePos.w)) {
				lives--;
				if(lives <= 0) {
					alert("GAME OVER");
					stop();
				} else {
					init();
				}
			}
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