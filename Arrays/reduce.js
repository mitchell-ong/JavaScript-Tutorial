// ************** Example One **************

const prices = [5, 9, 15, 25, 99, 1];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}

// ************** Example Two **************

const grades = [95, 60, 75, 85, 90, 80];

const maximum = grades.reduce(getMaximum);
const minimum = grades.reduce(getMinimum);

console.log(maximum);
console.log(minimum);

function getMaximum(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMinimum(accumulator, element) {
    return Math.min(accumulator, element);
}