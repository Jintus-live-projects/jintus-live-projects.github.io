document.addEventListener('DOMContentLoaded', function () {
    let gameState = localStorage.getItem('gameState');
    let players = localStorage.getItem('players');

    if (!gameState || !players) {
        localStorage.clear();
        document.location.href = `${document.location.origin}/killer`
    }

    gameState = new Map(JSON.parse(gameState));
    players = JSON.parse(players);

    let isDisplayingTarget = false;

    const playerType = document
        .getElementsByClassName('display__type')[0];

    const targetTxt = '🎯'
    const playerTxt = '🔪'

    playerType.innerText = playerTxt;

    const playerOnScreen = document
        .getElementsByClassName('display__player')[0];

    const display = document
        .getElementsByClassName('display')[0];

    let currentPlayer = 0;
    playerOnScreen.innerText = players[currentPlayer];

    display.addEventListener('click', function () {

        isDisplayingTarget = !isDisplayingTarget;

        if (!isDisplayingTarget && (currentPlayer + 1) >= players.length) {
            document.location.href = `${document.location.origin}/killer/pages/idle.html`
        }
        playerType.innerText = isDisplayingTarget ? targetTxt : playerTxt;

        if (isDisplayingTarget) {
            playerOnScreen.innerText = gameState.get(players[currentPlayer]);
        } else {
            playerOnScreen.innerText = players[++currentPlayer];
        }
    })
});
