// Variables
const gameContainer = document.querySelector('.game-container')
const choices = ['Rock', 'Paper', 'Scissors'];
let wins = 0;
let loses = 0;
let round = 0;

// Scoreboard
const scoreTitle = document.querySelector('.score-title');
const scoreText = document.querySelector('.score-text');
const playerIcon = document.querySelector('.player-icon');
const playerScore = document.querySelector('.player-score');
const computerIcon = document.querySelector('.computer-icon');
const computerScore = document.querySelector('.computer-score');
const roundCounter = document.querySelector('.round-counter');

// End
const endContainer = document.querySelector('.end-container');
const endTitle = document.querySelector('.end-title');

// Buttons
const rockBtn = document.querySelector('.rockbtn');
const paperBtn = document.querySelector('.paperbtn');
const scissorsBtn = document.querySelector('.scissorsbtn');
const endBtn = document.querySelector('.endbtn');

rockBtn.addEventListener('click', () => playRound('Rock'));
paperBtn.addEventListener('click', () => playRound('Paper'));
scissorsBtn.addEventListener('click', () => playRound('Scissors'));
endBtn.addEventListener('click', gameInit);

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    const randomPick = choices[random];
    if (randomPick === 'Rock') {
        computerIcon.innerHTML = '👊🏽'
    }
    else if (randomPick === 'Paper') {
        computerIcon.innerHTML = '✋🏽'
    }
    else if (randomPick === 'Scissors') {
        computerIcon.innerHTML = '✌🏽'
    }
    return randomPick;
}

function playRound(playerSelection) {
    if (playerSelection === 'Rock') {
        playerIcon.innerHTML = '👊🏽'
    }
    else if (playerSelection === 'Paper') {
        playerIcon.innerHTML = '✋🏽'
    }
    else {
        playerIcon.innerHTML = '✌🏽'
    }
    computerSelection = getComputerChoice(); 
    if (playerSelection === computerSelection) {
        scoreTitle.textContent = `It's a tie!`;
        scoreText.textContent = `${computerSelection} ties with ${playerSelection}`;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
    playerSelection == 'Paper' && computerSelection == 'Rock' ||
    playerSelection == 'Scissors' && computerSelection == 'Paper') {
        scoreTitle.textContent = `You win this round!`;
        scoreText.textContent = `${playerSelection} beats ${computerSelection}`;
        wins++;
    }
    else {
        scoreTitle.textContent = `You lost this round`;
        scoreText.textContent = `${computerSelection} beats ${playerSelection}`;
        loses++;
    }
    checkStandings();
}

function checkStandings() {
    round++;
    roundCounter.innerHTML = 'Round: ' + round;
    playerScore.innerHTML = 'Player: ' + wins;
    computerScore.innerHTML = 'Computer: ' + loses;
    if (round === 5 && wins > loses) {
        gameEnd('win');
    }
    else if (round === 5 && wins < loses) {
        gameEnd();
    }
    else if (round === 5 && wins === loses) {
        gameEnd('draw');
    }
}

function gameEnd(standing) {
    gameContainer.setAttribute('style', 'display: none;');
    if (standing === 'win') {
        endTitle.innerHTML = 'YOU WON THE GAME!';
    }
    else if (standing === 'draw') {
        endTitle.innerHTML = 'THE GAME IS DRAW!';
    }
    else {
        endTitle.innerHTML = 'YOU LOST THE GAME!';
    }
    endContainer.setAttribute('style', 'display: flex; flex-direction: column;');
}

function gameInit() {
    wins = 0;
    loses = 0;
    round = 0;
    playerScore.innerHTML = 'Player: ' + wins;
    computerScore.innerHTML = 'Computer: ' + loses;
    roundCounter.innerHTML = 'Round: ' + round;
    scoreTitle.textContent = `Pick your fate`;
    scoreText.textContent = `Best of five rounds`;
    playerIcon.textContent = `❓`;
    computerIcon.textContent = `❓`;
    endContainer.setAttribute('style', 'display: none;');
    gameContainer.setAttribute('style', 'display: flex; flex-direction: column;');
}