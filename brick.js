const Brick = function(c, context, row, col) {
	var brick;
	const canvas = c;
	const ctx = context;

	const BRICK_WIDTH = 40;
	const BRICK_HEIGHT = 20;

	const BRICK_MARGIN = 5;
	const BRICKS_START_X = 0;
	const BRICKS_START_Y = 10;

	const BRICK_COLOR = 'red';

	// Initalize Brick
	function init() {
		brick = {
			x: (col)*BRICK_WIDTH + col*BRICK_MARGIN,
			y: (row)*BRICK_HEIGHT + row*BRICK_MARGIN + 10,
			w: BRICK_WIDTH,
			h: BRICK_HEIGHT,
			show: true
		};
		// console.log(brick);
		draw();
	}

	// Draw Brick
	function draw() {
		if (brick.show) {
			ctx.save();
			ctx.fillStyle = BRICK_COLOR;
			ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
			ctx.restore();	
		}
	}

	// Update Brick
	function update() {
	}

	function hide() {
		brick.show = false;
	}

	
	function getBrick() {
		return brick;
	}

	return {
		TYPE: 'BRICK',
		init: init,
		draw: draw,
		update: update,
		getBrick: getBrick,
		hide: hide
	}
}