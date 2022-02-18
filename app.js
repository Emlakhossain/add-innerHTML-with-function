// function all common style
function setPlayerStyle(player) {
    player.style.border = '1px solid';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';

}
const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);

}
// add innerHTML elements
function addfriend() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New-Player</h4>
    <p>Quam a est dolorem culpa dignissimos odit, molestias blanditiis. Possimus accusamus sapiente quis rerum
        aut
        doloremque, provident, animi eos tenetur vitae recusandae cupiditate aspernatur nam. Ad impedit beatae
        veritatis corrupti?</p>
    `;
    setPlayerStyle(player)
    playerContainer.appendChild(player);


}

// event Bubbal on function 
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})