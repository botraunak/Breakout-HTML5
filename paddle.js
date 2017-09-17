const Paddle = function(c, context) {
	var paddle;
	const canvas = c;
	const ctx = context;

	const PADDLE_WIDTH = 80;
	const PADDLE_HEIGHT = 20;

	const PADDLE_COLOR = 'red';

	const MOVE_LEFT_KEY = 37;
	const MOVE_RIGHT_KEY = 39;

	let keyPressListener = null;
	
	// Initalize Paddle
	function init() {
		paddle = {
			x: canvas.width / 2,
			y: canvas.height - PADDLE_HEIGHT,
			w: PADDLE_WIDTH,
			h: PADDLE_HEIGHT
		};

		keyPressListener = document.addEventListener("keydown", _handleKeyBoard);

		draw();
	}

	// Draw Paddle
	function draw() {
		ctx.save();
		ctx.fillStyle = PADDLE_COLOR;
		ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
		ctx.restore();
	}

	// Update Paddle
	function update() {
	}

	// Handle Keyboard Actions
	function _handleKeyBoard(e) {
		
		if(e.keyCode == MOVE_LEFT_KEY) {
			if(paddle.x >= 0) {
				paddle.x -= 5;
			}
		}
		
		if(e.keyCode == MOVE_RIGHT_KEY) {
			if(paddle.x + PADDLE_WIDTH <= canvas.width) {
				paddle.x += 5;
			}
		}
	}

	return {
		init: init,
		draw: draw,
		update: update
	}
}