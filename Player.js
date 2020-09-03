function Player(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "red";
    this.speedX = 1;
    this.speedY = 1;
    this.isRight = false;
    this.isLeft = false;
    this.isUp = false;
    this.isDown = false;

    this.drawPlayer = function(){
        ctx.beginPath();
        ctx.rect(this.x, this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.moveRight = function (){
        if (this.isRight){
            this.x = this.x + this.speedX
        }
    }
    this.moveLeft = function (){
        if (this.isLeft){
            this.x = this.x - this.speedX
        }
    }
    this.moveUp = function (){
        if (this.isUp){
            this.y = this.y - this.speedY
        }
    }
    this.moveDown = function (){
        if (this.isDown){
            this.y = this.y + this.speedY
        }
    }

    this.movePlayer = function (){
        this.moveLeft();
        this.moveRight();
        this.moveUp();
        this.moveDown();
        if (this.x < 0){
            this.x = 0;
        } else if (this.x > canvas.width -  this.width){
            this.x = canvas.width - this.width;
        }
        if (this.y > canvas.height -  this.height){
            this.y = canvas.height - this.height;
        }
    }
    this.autoUp = function () {
        if (this.y < 0) {
            this.y = canvas.height - 30;
        }
    }

}
