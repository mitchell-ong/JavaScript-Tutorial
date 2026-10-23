// ****************** EXAMPLE ONE ******************
function outer() {

    let message = "Here Comes the Sun!";
    function inner() {

        console.log(message);
    }
    inner();
}
outer();

// ****************** EXAMPLE TWO ******************
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    return {increment};
}

const counter = createCounter();

counter.increment();
counter.increment();

// ****************** EXAMPLE THREE ******************
function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points} pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(5);
game.decreaseScore(2);

console.log(`The final score is${game.getScore()} points`);

