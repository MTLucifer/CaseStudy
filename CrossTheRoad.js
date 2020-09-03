let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let obstaclesRight = [];
let obstaclesLeft = [];
let player = new Player(285,570,30,30);
player.drawPlayer();

function drawWin(){
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.fillText("YOU WIN",300,300);
    ctx.fillStyle = "red";
    ctx.closePath();
}
function drawLose(){
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.fillText("YOU LOSE",300,300);
    ctx.fillStyle = "red";
    ctx.closePath();
}

function multyObstacleRight(number){
    for (let i = 0; i < number; i++) {
        let obstacle = new Obstacle( Math.random()*600,Math.random()*450+50,80,30);
        obstaclesRight.push(obstacle);
    }
}
function multyObstacleLeft(number){
    for (let i = 0; i < number; i++) {
        let obstacle = new Obstacle( Math.random()*600,Math.random()*450+50,80,30);
        obstaclesLeft.push(obstacle);
    }
}
multyObstacleRight(5);
multyObstacleLeft(5);

function checkLose(crash){
    if(crash) {
        setTimeout(() => {clearInterval(timeId); drawLose()},1)
        }
}

function checkWin(){
    if(player.y === 0) {
        setTimeout(() => {clearInterval(timeId); drawWin()},1)
    }
}

let timeId = setInterval( function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.drawPlayer();
        player.movePlayer();
        for (let i = 0; i < obstaclesRight.length; i++) {
            obstaclesRight[i].x += obstaclesRight[i].speedX;
            obstaclesRight[i].drawObstacle(canvas);
            obstaclesRight[i].autoRight();
            checkLose(obstaclesRight[i].crashWith());
        }
        for (let i = 0; i < obstaclesLeft.length; i++) {
            obstaclesLeft[i].x -= obstaclesLeft[i].speedX;
            obstaclesLeft[i].drawObstacle(canvas);
            obstaclesLeft[i].autoLeft();
            checkLose(obstaclesLeft[i].crashWith());
    }
    checkWin();
    }, 2);
