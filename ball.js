const Ball = function() {
	var ball;

	// Initalize Ball
	function init() {
		ball = {
			x: 100,
			y: 100,
			r: 10,
			vx: 3,
			vy: 3
		}
		draw();
	}

	// Draw Ball
	function draw() {
		ctx.save();
		ctx.fillStyle = 'green';
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

	return {
		init: init,
		draw: draw,
		update: update
	}
}