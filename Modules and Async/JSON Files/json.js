const names = `["Brak", "Zorak", "Thundercleese", "Dad"]`;

const person = `{"name": "Brak", "age": 16, "isEmployed": true, "hobbies": ["Dancing", "Singing", "Cooking"]}`;

const people = `[{"name": "Brak", "age": 16, "isEmployed": true},
                {"name": "Zorak", "age": 27, "isEmployed": false},
                {"name": "Thundercleese", "age": 41, "isEmployed": true}]`;

const jsonString = JSON.stringify(people);

const parsedData =JSON.parse(people);
console.log(parsedData);

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))