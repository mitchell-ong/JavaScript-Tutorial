// *************** Example One ***************
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);

let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}

// *************** Example Two ***************

const ages = [16, 17, 18, 18, 19, 41];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(children);

function isAdult(element) {
    return element >= 18;
}

function isChild(element) {
    return element < 18;
}

// *************** Example Three **************

const words = ["orange", "apple", "banana", "pear",
               "watermelon", "grapes"];

const smallWords = words.filter(getSmallWords);
const longWords = words.filter(getLongWords);

console.log(smallWords);
console.log(longWords)

function getSmallWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}