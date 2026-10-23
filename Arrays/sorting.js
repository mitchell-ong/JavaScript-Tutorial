// ********************************* EXAMPLE ONE *********************************
let fruits = ["orange", "red grapes", "apple", "watermelon", "strawberry"]

fruits.sort();

console.log(fruits)

// ********************************* EXAMPLE TWO *********************************
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b);

// Reverse Order
numbers.sort((a, b) => b - a);

console.log(numbers);

// ********************************* EXAMPLE THREE ********************************
const people = [{name: "Frylock", age: 4040, gpa: 4.0},
                {name: "Master Shake", age: 40, gpa: 2.3},
                {name: "Meatwad", age: 9, gpa: 1.3},
                {name: "Carl", age: 65, gpa: 3.3}];

//people.sort((a, b) => a.age - b.age);

//people.sort((a, b) => a.gpa - b.gpa);

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

