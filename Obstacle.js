function Obstacle(x,y, width, height) {

    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = "black";
    this.speedX = 1;
    this.drawObstacle = function (){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.autoRight = function (){
        if(this.x > canvas.width){
            this.x = (-this.width);
        }
    }
    // this.autoLeft = function () {
    //     if (this.x >= 0) {
    //         this.x = canvas.width;
    //     }
    // }
    // nâng cấp luồng chạy của vật cản
    this.crashWith = function(){
        let myleft = player.x;
        let myright = player.x + (player.width);
        let mytop = player.y;
        let mybottom = player.y + (player.height);
        let otherleft = this.x;
        let otherright = this.x + (this.width);
        let othertop = this.y;
        let otherbottom = this.y + (this.height);
        let crash = true;
        if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}