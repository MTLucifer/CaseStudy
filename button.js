window.addEventListener("keydown", onKeyDown)
window.addEventListener("keyup", onKeyUp)

function onKeyDown(evt){
    switch (evt.which){
        case 39:
            player.isRight= true;
            break;
        case 37:
            player.isLeft= true;
            break;
        case 38:
            player.isUp= true;
            break;
        case 40:
            player.isDown= true;
            break;
    }
}
function onKeyUp(evt) {
    switch (evt.which) {
        case 39:
            player.isRight = false;
            break;
        case 37:
            player.isLeft= false;
            break;
        case 38:
            player.isUp= false;
            break;
        case 40:
            player.isDown= false;
            break;
    }
}