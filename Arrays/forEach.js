let numbers = [1, 2, 3, 4, 5];

numbers.forEach(tripleElement);

numbers.forEach(displayElement);

function doubleElement(element, index, array) {
    array[index] = element * 2;
}

function tripleElement(element, index, array) {
    array[index] = element * 3;
}

function displayElement(element) {
    console.log(element)
}




