/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, sixRoll, goalScore = 25;

init();

// document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice +'</em>';
// var x = document.querySelector('#score-0').textContent;
// document.querySelector('.dice').style.display = 'none';



document.querySelector('.btn-roll').addEventListener('click',function (){

        // 1. Random number
        if (gamePlaying) {
                var dice = Math.floor(Math.random()*6)+1;
                var dice2 = Math.floor(Math.random()*6)+1;


                // 2. Display the result
                var diceDOM = document.querySelector('.dice');
                diceDOM.style.display = 'block';
                diceDOM.src = 'dice-' + dice + '.png';
        
                var diceDOM2 = document.querySelector('.dice2');
                diceDOM2.style.display = 'block';
                diceDOM2.src = 'dice-' + dice2 + '.png';

                // 3. Update the round score IF the rolled number was NOT a 1
                if ((dice !== 1) && (dice2 !== 1)) {
                        // Add score
                        if (sixRoll !== 1) {
                        console.log(sixRoll);
                        roundScore += dice + dice2;
                        document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }
                        if (sixRoll !== 1) {
                                dice === 6 ? sixRoll += 1 : sixRoll = 0; 
                        } else {
                                sixRoll = 0;
                                roundScore = 0;                               
                                document.querySelector('#current-' + activePlayer).textContent = 0; 
                                document.getElementById('score-' + activePlayer).textContent = 0;
                                nextPlayer();
                                 
                        }
                        
                } else {
        
                        nextPlayer();
        
                }
        } 

});

document.querySelector('.btn-hold').addEventListener('click', function(){
        if (gamePlaying) {
        //Add current score to global score.
        scores[activePlayer] += roundScore;
        
        // scores[activePlayer] += scores[activePlayer] + roundScore;

        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won game
        if(scores[activePlayer] >= goalScore) {
                gamePlaying = false;
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.dice2').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        } else {
                       // Next player
        nextPlayer(); 
        }
}

});

document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        sixRoll = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.goalScore').addEventListener('change', function() {
 goalScore = this.value;
});



function init() {
console.log(goalScore); 
gamePlaying = true;        
scores = [0,0];
roundScore = 0;
activePlayer = 0;
sixRoll = 0;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

}