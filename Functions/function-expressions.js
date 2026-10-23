// **************** Example One ****************

setTimeout(function(){
    console.log("hello")
}, 3000);

// **************** Example Two ****************

const numbers = [1, 2, 3, 4 , 5, 6];

const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});

console.log(squares);

const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
})

console.log(cubes);

const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
})

console.log(evenNums);

const oddNums = numbers.filter(function( element) {
    return element % 2 !== 0;
})

console.log(oddNums);

const sum = numbers.reduce(function(accumulator,element) {
    return accumulator + element;
})

console.log(sum);

