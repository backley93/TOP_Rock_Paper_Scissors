function random() {
    let num = Math.round(Math.random()*10);

    if (num === 0) {
        num = num + 1;
    } else if (num === 10) {
        num = num - 1;
    }

    return num;
}

function computerPlay() {
    let num = random();

    let result = null;

    if (num >= 1 && num <= 3) {
        result = 'rock';
        return result;
    } else if (num >= 4 && num <= 6) {
        result = 'paper';
        return result;
    } else if (num >= 7 && num <= 9) {
        result = 'scissors';
        return result;
    }
}

function playRound(playerSelection, computerSelection) {
    let plyr = playerSelection;

    let comp = computerSelection;

    let result = null;

    if ((plyr === 'ROCK' && comp === 'SCISSORS') || (plyr === 'PAPER' && comp === 'ROCK') || (plyr === 'SCISSORS' && comp === 'PAPER')) {
        result = 'W';
        return result;
    } else if ((plyr === 'ROCK' && comp === 'PAPER') || (plyr === 'PAPER' && comp === 'SCISSORS') || (plyr === 'SCISSORS' && comp === 'ROCK')) {
        result = 'L';
        return result;
    } else if (plyr === comp) {
        result = 'T';
        return result;
    } else {
        alert('Please enter rock, paper or scissors *case insensitive*');
    }
} 

