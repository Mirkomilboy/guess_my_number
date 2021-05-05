'use strict';

// variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const number = document.querySelector('.number');
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

// functions
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number inserted');
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number');
        number.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        number.style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        score--;
        displayScore(score);
        } else {
            displayMessage('💥 You lost the game');
            displayScore(0);
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    // window.location.reload();
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    number.textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    number.style.width = '15rem';
});