const Ball = function() {
	var ball;

	// Initalize Ball
	function init() {
		ball = {
			x: 180,
			y: 320,
			r: 10,
			vx: 3,
			vy: 3
		}
		draw();
	}

	// Draw Ball
	function draw() {
		ctx.save();
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);
		ctx.fill();
		ctx.restore();
	}

	// Update Ball
	function update() {
		ball.x += ball.vx;
		ball.y += ball.vy;

		if (ball.x + ball.r >= CANVAS_WIDTH || ball.x - ball.r <= 0) {
			ball.vx = -ball.vx;
		}

		if (ball.y + ball.r >= CANVAS_HEIGHT || ball.y - ball.r <= 0) {
			ball.vy = -ball.vy;
		}
	}

	function getBall() {
		 return ball;
	}

	function collided(collisionWith) {

		// Detect Collision with PADDLE
		if (collisionWith.TYPE === "PADDLE") {
			var paddle = collisionWith.getPaddle();
			var third_start = paddle.x + (paddle.w/3);
			var third_end = paddle.x + paddle.w - (paddle.w/3);

			ball.vy = -ball.vy;
		}

		if (collisionWith.TYPE === "BRICK") {
			collisionWith.hide();
			ball.vy = -ball.vy;
		}
	}

	return {
		init: init,
		draw: draw,
		update: update,
		getBall: getBall,
		collided: collided
	}
}