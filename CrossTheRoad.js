let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let obstacles = [];
let player = new Player(285,570,30,30);
player.drawPlayer();

// obstacle.drawObstacle();

window.addEventListener("keydown", onKeyDown)
window.addEventListener("keyup", onKeyUp)



function multyObstacle(number){
    for (let i = 0; i < number; i++) {
        let obstacle = new Obstacle( Math.random()*500,Math.random()*400+50,80,30);
        obstacles.push(obstacle);
    }
}
multyObstacle(10);

function checkLose(crash){
    if(crash) {
        setTimeout(() => {clearInterval(timeId); alert("lose")},1)
        }
}

function checkWin(){
    if(player.y === 0) {
        alert("Win")
    }
}
// function levelUp(){
//     let up
// }

let timeId = setInterval( function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.drawPlayer();
        player.movePlayer();
        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].x += obstacles[i].speedX;
            obstacles[i].drawObstacle(canvas);
            obstacles[i].autoRight();
            checkLose(obstacles[i].crashWith());
            checkWin();
        }
    }, 2);
