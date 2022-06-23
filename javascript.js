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
    console.log(num);

    let result = null;
    console.log(result);

    if (num >= 1 && num <= 3) {
        result = 'rock';
        console.log(result);
        return result;
    } else if (num >= 4 && num <= 6) {
        result = 'paper';
        console.log(result);
        return result;
    } else if (num >= 7 && num <= 9) {
        result = 'scissors';
        console.log(result);
        return result;
    }
}