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

function game() {
    let pScore = 0;

    let plyrPick = null;

    let cScore = 0;

    let compPick = null;

    for (let i = 0; i < 5; i++) {
        plyrPick = prompt().toUpperCase();
        console.log(plyrPick);

        if (plyrPick !== 'ROCK' && plyrPick !== 'PAPER' && plyrPick != 'SCISSORS') {
            alert('You must enter rock, paper or scissors.');
            break;
        }

        compPick = computerPlay().toUpperCase();
        console.log(compPick);

        if (compPick !== 'ROCK' && compPick !== 'PAPER' && compPick !== 'SCISSORS') {
            alert('We\'re experiencing technical difficulties please try the game again.');
            break;
        }

        if (playRound(plyrPick, compPick) === 'W') {
            pScore = pScore + 1;
        } else if (playRound(plyrPick, compPick) === 'L') {
            cScore = cScore + 1;
        }

        alert(`Player picked\: ${plyrPick} and the computer picked\: ${compPick}.`);

        alert(`The score is, Player\: ${pScore} to Computer\: ${cScore}.`);
    }

    if (pScore > cScore) {
        return alert(`Congratulations! You win by a score of ${pScore} to ${cScore}.`);
    }

    if (cScore > pScore) {
        return alert(`Sorry, you lost to the computer by a score of ${cScore} to ${pScore}.`);
    }

    if (pScore == cScore) {
        return alert(`Gasp! It\'s a tie by a score of ${pScore} to ${cScore}.`);
    }
}

