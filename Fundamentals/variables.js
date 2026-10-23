let age = 40;
let price = 3.99;
let gpa = 3.74
let firstName = "Mitchell";
let favoriteFood = "Lasagna";
let isGemini = true;

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);
console.log(`You name is ${firstName}`);
console.log(typeof name);
console.log(`My favorite food is ${favoriteFood}.`);
console.log(`${firstName} was born on June 7th, so he is a Gemini. ${isGemini}`);

document.getElementById("p1").textContent = `Your name is ${firstName}.`;
document.getElementById("p2").textContent = `${favoriteFood} is your favorite food.`;
document.getElementById("p3").textContent = `Your astrological sign is Gemini.${isGemini}`;

