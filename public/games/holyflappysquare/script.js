const SQUARES = {
    cyan: {
        normal: new Image(),
        flap:   new Image()
    },
    purple: {
        normal: new Image(),
        flap:   new Image()
    },
    red: {
        normal: new Image(),
        flap:   new Image()
    },
    orange: {
        normal: new Image(),
        flap:   new Image()
    },
    yellow: {
        normal: new Image(),
        flap:   new Image()
    },
    green: {
        normal: new Image(),
        flap:   new Image()
    }
};

SQUARES.cyan.normal.src   = "img/cyan.png";
SQUARES.cyan.flap.src     = "img/cyanFlap.png";
SQUARES.purple.normal.src = "img/purple.png";
SQUARES.purple.flap.src   = "img/purpleFlap.png";
SQUARES.red.normal.src    = "img/red.png";
SQUARES.red.flap.src      = "img/redFlap.png";
SQUARES.orange.normal.src = "img/orange.png";
SQUARES.orange.flap.src   = "img/orangeFlap.png";
SQUARES.yellow.normal.src = "img/yellow.png";
SQUARES.yellow.flap.src   = "img/yellowFlap.png";
SQUARES.green.normal.src  = "img/green.png";
SQUARES.green.flap.src    = "img/greenFlap.png";

let selectedColor = "red";
let pressedKeys = new Set();
let flap = false;

document.addEventListener("keydown", e => {
  	pressedKeys.add(e.key);
});
document.addEventListener("keyup", e => {
  	pressedKeys.delete(e.key);
});

function changeColor(color) {
    selectedColor = color;
    switch(color) {
        case "cyan":
			document.getElementById("selectedColor").textContent = "Cyan";
            break;
        case "purple":
            document.getElementById("selectedColor").textContent = "Purple";
            break;
        case "red":
            document.getElementById("selectedColor").textContent = "Red";
            break;
        case "orange":
            document.getElementById("selectedColor").textContent = "Orange";
            break;
        case "yellow":
            document.getElementById("selectedColor").textContent = "Yellow";
            break;
        case "green":
            document.getElementById("selectedColor").textContent = "Green";
            break;
    }
}

function loadGame() {
	document.getElementById("restartButton").disabled = true;
	document.getElementById("jumpButton").disabled = false;
	document.getElementById("startButton").disabled = true;
	document.getElementById("gameArea").style.border = "3px solid green;";
	//game load
	gameArea.load(); 
	//dark background
	let ctx = gameArea.ctx;
	ctx.fillStyle = "black";
    ctx.globalAlpha = 0.3;
	ctx.fillRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);
	ctx.globalAlpha = 1.0;
	//start text
	ctx.textBaseline = "middle"; 
	ctx.textAlign = "center"; 
	ctx.font = "35px monospace";
	ctx.fillText('To start press Space or "Up" button', gameArea.canvas.width / 2, gameArea.canvas.height / 2)
	ctx.textBaseline = "alphabetic"; 
	ctx.textAlign = "left"; 
	
}

function restartGame() {
	clearInterval(gameArea.interval);
	gameArea.clear();
	loadGame();
}
			
let gameArea = {
    canvas : document.getElementById("gameArea"),
    load : function() {
		this.square = new Component(400, 400, 60, 60, SQUARES[selectedColor].normal, "image");
		this.score = new Component(10, 50, "50px", "monospace", "lightgray", "text");
		this.scoreBg = new Component(0, 0, this.canvas.width, 60, "black", "rect");
		this.ctx = this.canvas.getContext("2d"),
		this.obstacles = [],
		this.frame = 0,
		this.started = false,
		this.scoreNumber = 0,
		this.interval = setInterval(updateGame, 10);
		},
	stop : function() {
		clearInterval(this.interval);
		this.started = false;
		let ctx = this.ctx;
		ctx.fillStyle = "black";
        ctx.globalAlpha = 0.3;
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		ctx.globalAlpha = 1.0;
		document.getElementById("jumpButton").disabled = true;
		document.getElementById("restartButton").disabled = false;
		},
	clear : function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
			
//TEXT(x, y, fontSize, fontType, color, type) 
//IMAGE(x, y, width, height, image, type)
//RECT(x, y, width, height, color) 
class Component {
	constructor(x, y, width, height, color, type) {
		this.type = type;
		if (type == "image") {
    		this.image = color;
		}
		this.x = x;
		this.y = y; 
		this.width = width;
		this.height = height;
		this.color = color;
	}
	speedX = 0;
	speedY = 0;
	gravity = 0.2;
  	gravitySpeed = 3;
	update() {
    	let ctx = gameArea.ctx;
    	if (this.type === "text") {
        	ctx.font = this.width + " " + this.height;
        	ctx.fillStyle = this.color;
        	ctx.fillText(this.text, this.x, this.y);
    	} else if (this.type === "image") {
        	ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    	} else {
        	ctx.fillStyle = this.color;
        	ctx.fillRect(this.x, this.y, this.width, this.height);
    	}
	}
	newPos() {
    	this.gravitySpeed += this.gravity;
    	this.x += this.speedX;
    	this.y += this.speedY + this.gravitySpeed;
    	this.hitSide();
	}
	hitSide() {
    	let bottom = gameArea.canvas.height - this.height;
    	if (this.y > bottom || this.y < 0) {
        	gameArea.stop();
    	}
	}
	crashWith = function(otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright))  {
            crash = false;
		}
        	return crash;
		}
}

function obstacleSpawn() {
	let x, height, gap, minHeight, maxHeight, minGap, maxGap;
	if (gameArea.frame == 0 || everyinterval(75)) {
		if (gameArea.frame >= 225) gameArea.scoreNumber++;
        x = gameArea.canvas.width;
        minHeight = 300;
        maxHeight = 500;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 150;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        gameArea.obstacles.push(new Component(x, 0, 50, height, "green"));
		gameArea.obstacles.push(new Component(x, height + gap, 50, x - height - gap, "green"));
	}
	for (i = 0; i < gameArea.obstacles.length; i += 1) {
        gameArea.obstacles[i].x += -2;
        gameArea.obstacles[i].update();
	}
}
			
function jump(n) {
	if (gameArea.started == false) gameArea.started = true;
	gameArea.square.gravitySpeed = -n;
}
			
function updateGame() {
	if (gameArea.started) {
    	for (i = 0; i < gameArea.obstacles.length; i += 1) {
        	if (gameArea.square.crashWith(gameArea.obstacles[i])) {
            	gameArea.stop();
            	return;
			}
		}
   		gameArea.clear();
		gameArea.square.speedX = 0;
		gameArea.square.speedY = 0;

		obstacleSpawn();

		if (pressedKeys.has(" ")) {
			jump(3);
		}
		if (gameArea.square.gravitySpeed <= 0 && !flap) {
			flap = true;
			gameArea.square.image = SQUARES[selectedColor].flap;
		}
		if (gameArea.square.gravitySpeed > 0 && flap) {
			flap = false;
			gameArea.square.image = SQUARES[selectedColor].normal;
		}
		gameArea.square.newPos();    	
		gameArea.square.update();

		gameArea.ctx.globalAlpha = 0.5;
		gameArea.scoreBg.update();
		gameArea.ctx.globalAlpha = 1;
		gameArea.score.text = "Score: " + gameArea.scoreNumber;
		gameArea.score.update();

		gameArea.frame += 1;
	} else if (pressedKeys.has(" ")) gameArea.started = true;
}
			
function everyinterval(n) { 
	if ((gameArea.frame / n) % 2 == 0) return true; 
	return false; 
}

function handler(e) {
    if (e.key === "Enter") {
      	document.getElementById("startButton").click();
    }
	if (e.key === "R" || e.key === "r") {
      	document.getElementById("restartButton").click();
    }
}
document.addEventListener("keydown", handler);