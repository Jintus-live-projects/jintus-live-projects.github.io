document.addEventListener('DOMContentLoaded', function () {
    let gameState = localStorage.getItem('gameState');
    let players = localStorage.getItem('players');

    if (gameState && players) {
        document.location.href = `${document.location.origin}/killer/pages/idle.html`
    }

    let playerList = document
        .getElementsByClassName('registration__players')[0];

    let playerInput = document
        .getElementById('new-player');

    document
        .getElementsByClassName('registration__add-button')[0]
        .addEventListener('click', function (event) {
            event.preventDefault();
            let newPlayer = document.createElement('li')
            let deleteCross = document.createElement('span');
            deleteCross.addEventListener('click', function () {
                playerList.removeChild(newPlayer);
            })
            deleteCross.append('❌');
            newPlayer.append(playerInput.value);
            playerInput.value = '';
            playerInput.focus();
            newPlayer.append(deleteCross);
            playerList.append(newPlayer);
        });

    document
        .getElementsByClassName('registration__start-button')[0]
        .addEventListener('click', function () {
            let players = Array.from(playerList.children).map(function (li) {
                return li.innerText.replace('❌', '');
            });

            players = players.sort(() => 0.5 - Math.random());

            playerTarget = new Map();

            players.forEach(function (player, index) {
                playerTarget.set(player, players[(index + 1) % players.length])
            })

            players = players.sort(() => 0.5 - Math.random());

            localStorage.setItem('gameState', JSON.stringify(Array.from(playerTarget.entries())))
            localStorage.setItem('players', JSON.stringify(players))

            document.location.href = `${document.location.origin}/killer/pages/display.html`
        })
})
