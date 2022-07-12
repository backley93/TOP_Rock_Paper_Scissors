// This function generates a random number between 1 and 9 inclusive.

function random() {
    let num = Math.round(Math.random()*10);

    if (num === 0) {
        num = num + 1;
    } else if (num === 10) {
        num = num - 1;
    }

    return num;
}

/*Function that returns the computer selection using the helper function
random()*/

function computerPlay() {
    let num = random();

    let result = null;

    if (num >= 1 && num <= 3) {
        result = 'ROCK';
        return result;
    } else if (num >= 4 && num <= 6) {
        result = 'PAPER';
        return result;
    } else if (num >= 7 && num <= 9) {
        result = 'SCISSORS';
        return result;
    }
}

//Function to manipulate the dom and take player input from button elements

const inputs = document.querySelectorAll('button');

let playerInput = null;

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        playerInput = input.className;
        return playerInput;
    })
});

/*DOM Manipulation that keeps score, displays who won the round,
and resets the page after a game winner is determined and
displayed on screen
*/
let outcome = null;

let playerScore = 0;
const playerBoard = document.querySelector('.pScore');

let computerScore = 0;
const computerBoard = document.querySelector('.cScore');

const info = document.querySelector('.choose');

const pInput = document.querySelector('.pChoice');
const cInput = document.querySelector('.cChoice');

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        outcome = playRound();
        if (outcome === 'W' && playerScore < 5) {
            playerScore = playerScore + 1;
            playerBoard.textContent = `PLAYER SCORE: ${playerScore}`;
            info.textContent = 'YOU WON THE ROUND!'
        } else if (outcome === 'L' && computerScore < 5) {
            computerScore = computerScore + 1;
            computerBoard.textContent = `COMPUTER SCORE: ${computerScore}`;
            info.textContent = 'SORRY THE COMPUTER WON ;(';
        } else if (outcome === 'T') {
            info.textContent = 'GASP! IT\'S A TIE!';
        } 

        if (playerScore == 5) {
            info.textContent = 'YOU WON THE GAME!'
        } else if (computerScore == 5) {
            info.textContent = 'YOU LOST THE GAME.'
        }

        pInput.textContent = `PLAYER CHOSE: ${playerInput}`;
        cInput.textContent = `COMPUTER CHOSE: ${computerInput}`;
    })
});

//Function for pop-up option to play again

const popUp = document.querySelector('.playAgain');

const fade = document.querySelector('.fade');

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        if (playerScore === 5 || computerScore === 5) {
            popUp.setAttribute('style', 'visibility: visible;');
            fade.setAttribute('style', 'visibility: visible;');
        }
        if (input.className === 'playAgain') {
            window.location.reload();
        }
    })
});

/* This function takes two agruments, player selection which is driven by a 
    prompt in the game() function and computer selection which is returned in the 
    computerPlay() function. Based off the parameters it determines a winner and returns
    a value tied to the result. */

let computerInput = null;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerInput;

    computerSelection = computerPlay();

    computerInput = computerSelection;
    
    let result = null;

    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        result = 'W';
        return result;
    } else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') || 
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || 
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
        result = 'L';
        return result;
    } else if (playerSelection === computerSelection) {
        result = 'T';
        return result;
    }
}

