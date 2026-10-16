function rInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Golyo {
        constructor(main) {
            this.main = main;
            this.width = 20;
            this.height = 20;
            this.x = (canvas.width / 2) - (this.width / 2);
            this.y = (canvas.height / 2) - (this.height / 2);
            this.image = document.getElementById('circle');
            this.dir = this.dir;
        }
        direction() {
            let rdir;
            rdir = rInt(1,4);
            switch (rdir) {
                case 1:
                    if (this.dir != "RIGHT") {
                        this.dir = "LEFT"
                        break;
                    } 
                case 2:
                    if (this.dir != "LEFT") {
                        this.dir = "RIGHT";
                        break;
                    }
                case 3:
                    if (this.dir != "DOWN") {
                        this.dir = "UP"
                        break;
                    }
                case 4:
                    if (this.dir != "UP") {
                        this.dir = "DOWN";
                        break;
                    }
            }
            switch (this.dir) {
                case "LEFT":
                    this.x -= 20;
                    break;
                case "RIGHT":
                    this.x += 20;
                    break;
                case "UP":
                    this.y += 20;
                    break;
                case "DOWN":
                    this.y -= 20;
                    break;
            }
            if (this.x < 0) {
                this.x += 20;
            }
            if (this.x > this.main.width - this.width) {
                this.x -= 20;
            }
            if (this.y < 0) {
                this.y += 20;
            }
            if (this.y > this.main.height - this.height) {
                this.y -= 20;
            }
        }
        update() {
            this.direction();
            
        }
        draw(context) {
            context.drawImage(this.image, this.x, this.y)
        }

    };

    class Main {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.golyo = new Golyo(this);
        }
        update() {
            this.golyo.update();
        }
        draw(context) {
            this.golyo.draw(context);
        }
    };

    const main = new Main(canvas.width, canvas.height);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        main.draw(ctx);
        main.update();
    }

    setInterval(animate, 100);
});