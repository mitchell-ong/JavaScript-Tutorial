//  ************ Example One ************

function openFridge(...foods){
    console.log(foods);
}

function getFood(...foods) {
    return foods;
}

const food1 = "lasagna";
const food2 = "pizza";
const food3 = "tacos"
const food4 = "cheeseburger";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4)

console.log(foods);

//  ************ Example Two ************

function sum(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3);
console.log(`Your total is ${total}`);

function getAverage(...numbers) {

    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const totals = getAverage(75, 100, 56, 78, 86, 92, 61);
console.log(totals);

//  ************ Example Three ************

function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Mitchell", "Nathan", "Thomas", "Ong");

console.log(fullName);

