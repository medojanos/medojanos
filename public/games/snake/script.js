const foodImg = new Image();
foodImg.src = "img/food.png";
let box = 75;
let canvasSize = 15;

document.addEventListener("keydown", handler);
function handler(e) {
	if (e.key == "Enter") document.getElementById("startButton").click(); 
	if (e.key == "r" || e.key == "R") document.getElementById("restartButton").click(); 
}

let started = false;
let snake = [];
let food = {};
let dir = "";
let score = 0;

function gridSelect() {
	let id = document.getElementById("gridSelect").selectedIndex;
	switch (id) {
		case 0:
			box = 100;
			canvasSize = 10;
			break;
		case 1:
			box = 75;
			canvasSize = 15;
			break;
		case 2:
			box = 50;
			canvasSize = 20;
			break;
	}
	restartGame();
}

function loadGame() {
	document.getElementById("startButton").disabled = true;
	document.getElementById("restartButton").disabled = true;
	document.getElementById("gridSelect").disabled = false;
	document.addEventListener("keydown", direction);
	snake[0] = {
		x: Math.floor((canvasSize/2)) * box,
		y: Math.floor((canvasSize/2)) * box
	};
	food = {
		x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
		y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
	};
	gameArea.load();
	draw();
	darken();
	text("To start move in any direction!");
}

function gameStart() {
	started = true;
	document.getElementById("gridSelect").disabled = true;
}

function restartGame() {
	clearInterval(gameArea.interval);
	gameArea.clear();
	started = false;
	snake = [];
	dir = "";
	score = 0;
	loadGame();
}

let gameArea = {
	canvas : document.getElementById("gameArea"),
	inputLocked : true,
	load : function() {
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = canvasSize * box;
		this.canvas.height = canvasSize * box;
		this.interval = setInterval(updateGame, 150);
		this.inputLocked = false;
	},
	stop : function() {
		clearInterval(this.interval);
		document.removeEventListener("keydown", direction);
		document.getElementById("restartButton").disabled = false;
		document.getElementById("gridSelect").disabled = false;
		darken();
		text("Game over! " + score + " POINTS");
	},
	clear : function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function direction(e){
	if (gameArea.inputLocked) return;
	let dirKey = "";
	if (typeof e === "string") {
		dirKey = e
	} else {
		dirKey = e.key
	}
	switch(dirKey) {
    	case "a":
    	case "A":
    	case "ArrowLeft":
        	if (dir != "RIGHT") dir = "LEFT";
			if (!started) gameStart();
        	break;
    	case "ArrowUp":
    	case "w":
    	case "W":
        	if (dir != "DOWN") dir = "UP";
			if (!started) gameStart();
        	break;
    	case "ArrowRight":
    	case "d":
    	case "D":
        	if (dir != "LEFT") dir = "RIGHT";
			if (!started) gameStart();
        	break;
    	case "ArrowDown":
    	case "s":
    	case "S":
        	if (dir != "UP") dir = "DOWN";
			if (!started) gameStart();
        	break;
	}
	gameArea.inputLocked = true;
}

function placeFood() {
	food = {
		x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
		y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
	}
	for (let i = 0; i < snake.length; i++) {
		if (snake[i].x == food.x && snake[i].y == food.y) {
			placeFood();
		}
	}
}

function updateObjects() {
	let newHead = {x : snake[0].x, y : snake[0].y};

	if(dir == "LEFT") newHead.x -= box;
	if(dir == "RIGHT") newHead.x += box;
	if(dir == "UP") newHead.y -= box;
	if(dir == "DOWN") newHead.y += box;

	snake.unshift(newHead);

	if (newHead.x == food.x && newHead.y == food.y) {
		score++;
		placeFood();
	} else {
		snake.pop();
	}
}

function checkCollisions() {
	let snakeHead = snake[0];
	for (let i = 1; i < snake.length; i++) {
		if (snakeHead.x == snake[i].x && snakeHead.y == snake[i].y) gameArea.stop();
	}
	if (snakeHead.x < 0 || snakeHead.y < 0 || snakeHead.x >= canvasSize * box || snakeHead.y >= canvasSize * box) {
		gameArea.stop();
	}
}

function draw() {
	gameArea.clear();

	let ctx = gameArea.ctx;

	for (let row = 0; row < canvasSize; row++) {
		for (let col = 0; col < canvasSize; col++) {
			if (row % 2 == 0) {
				if (col % 2 == 0) {
					ctx.fillStyle = "gray";
				} else  {
					ctx.fillStyle = "darkgray";
				}
			} else {
				if (col % 2 == 0) {
					ctx.fillStyle = "darkgray";
				} else  {
					ctx.fillStyle = "gray";
				}
			}
			ctx.fillRect(col * box, row * box, box, box)
		}
	}

	for (let i = 0; i < snake.length; i++)
	{
		ctx.fillStyle = "green";
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
		ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
	}

	ctx.drawImage(foodImg, food.x, food.y, box, box);
}

function updateGame(){
	if (started) {
		draw();

		updateObjects();

		checkCollisions();

		gameArea.inputLocked = false;
	}
}

function darken() {
	let ctx = gameArea.ctx;
	ctx.fillStyle = "black";
	ctx.globalAlpha = 0.5;
	ctx.fillRect(0, 0, canvasSize * box, canvasSize * box);
	ctx.globalAlpha = 1;
}

function text(text) {
	let ctx = gameArea.ctx;
	ctx.font = "50px monospace";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText(text, gameArea.canvas.width / 2, gameArea.canvas.height / 2);
	ctx.textAlign = "start";
}