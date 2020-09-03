let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let obstaclesRight = [];
let obstaclesLeft = [];
let number = 3;
let player = new Player(285,570,30,30);
player.drawPlayer();
let levelup = 1;

function drawWin(){
    let a= new Obstacle( Math.random()*600,Math.random()*450+50,80,30);
    obstaclesLeft.push(a);
    let level = levelup+=1;
    document.getElementById('level').innerHTML = "LEVEL " + (level);
}

function drawLose(){
    ctx.beginPath();
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER",300,300);
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

function checkWin(){
    if(player.y == 0) {
        // setTimeout(() => {clearInterval(timeId); drawWin()},1)
        setTimeout(drawWin(),3000);

    }

}

multyObstacleRight(number);
multyObstacleLeft(number);

function checkLose(crash){
    if(crash) {
        setTimeout(() => {clearInterval(timeId); drawLose()},1)
        }
}

let timeId = setInterval( function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.drawPlayer();
        player.movePlayer();
        player.autoUp();
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
    }, 5);
