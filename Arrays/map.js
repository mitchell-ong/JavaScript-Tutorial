// **************** Example One ********************
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
function square(element) {
    return Math.pow(element, 2);
}

const cubes = numbers.map(cube);

function cube(element) {
    return Math.pow(element, 3);
}
// **************** Example Two ********************
const names = ["Astro", "Bam Bam", "George", "Fred", "Rosie"];
const namesUpper = names.map(upperCase);

function upperCase(element) {
     return element.toUpperCase();
}

const namesLower = names.map(lowerCase);
console.log(namesLower);

function lowerCase(element) {
    return element.toLowerCase();
}

// **************** Example Three ******************
const dates = ["2026-6-28", "2026-6-07", "2026-12-06"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


