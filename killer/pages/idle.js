document.addEventListener('DOMContentLoaded', function () {
    let gameState = localStorage.getItem('gameState');
    let players = localStorage.getItem('players');

    if (!gameState || !players) {
        localStorage.clear();
        document.location.href = `${document.location.origin}/killer`
    }

    gameState = new Map(JSON.parse(gameState));
    players = JSON.parse(players);

    const playerList = document
        .getElementsByClassName('idle__players')[0];

    players.forEach(function(player) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.append(player)
        span.innerText = '🎯';
        span.addEventListener('click', function() {
            alert(gameState.get(player));
        });
        li.append(span);
        playerList.append(li);
    })

    document
        .getElementsByClassName('idle__reset')[0]
        .addEventListener('click', function() {
            localStorage.clear();
            document.location.href = `${document.location.origin}/killer`
        })
});
