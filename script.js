const choices = ['Rock', 'Paper', 'Scissors'];
let wins = 0;
let loses = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    console.log('Player picks:', playerSelection);
    console.log('Computer picks:', computerSelection);

    if (playerSelection === computerSelection) {
        console.log(`It's a tie round!`);
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' ||
    playerSelection == 'PAPER' && computerSelection == 'ROCK' ||
    playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        console.log(`You win this round, ${playerSelection} beats ${computerSelection}!`);
        wins++;
    }
    else {
        console.log(`You lost this round, ${computerSelection} beats ${playerSelection}!`);
        loses++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log('Round:', i + 1)
        playerSelection = prompt("What's your next move? Rock, Paper, Scissors?", 'rock')
        playRound(playerSelection, getComputerChoice());
        console.log(`You won ${wins} rounds and lost ${loses} rounds`)
        
        if (i === 4 && wins > loses) {
            console.log('YOU WON THE GAME!');
        }
        else if (i === 4 && wins < loses) {
            console.log('YOU LOST THE GAME!');
        }
    }
}
game();