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

//Function to call playRound() each time a button is clicked

let result = null;

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        result = playRound();
        return result;
    })
});

/* This function takes two agruments, player selection which is driven by a 
    prompt in the game() function and computer selection which is returned in the 
    computerPlay() function. Based off the parameters it determines a winner and returns
    a value tied to the result. */


function playRound(playerSelection, computerSelection) {
    playerSelection = playerInput.toUpperCase();

    computerSelection = computerPlay();

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

