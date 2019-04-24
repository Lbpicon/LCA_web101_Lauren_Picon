
const $pong = $('#pong');
const $playerPadel = $('#player-padel');
const $aiPadel = $('#ai-padel');
const $ball = $('#ball');


const aiPadel = {
    direction: 1,
    SPEED: 5,
    top: 0
}

const ball = {
    top: 200,
    left: 200,
    angle:
}

$pong.mousemove(function (evt) { /* createse mouse function*/
    const top = Math.min(
    $pong.height() - $playerPadel.height(),
    evt.pageY - $pong.offset().top
    )
    $playerPadel.css({
    top: `${top}px`
    });
});

function update() { 
updateBall();
updateAIPadel(); }

function updateBall() {

}

function updateAIPadel(){
/* jq code supposed to make AI padel move on own but its not responding*/
if (aiPadel.top > $pong.height() - $aiPadel.height()) {
    aiPadel.direction = -1;

if (aiPadel.top < 0) {
    aiPadel.direction = 1; 
}

aiPadel.top += aiPadel.direction * aiPadel.SPEED;


$aiPadel.css({
    top: `${aiPadel.top}px`
    });

}


setInterval(update, 100)}