// ********************** EXAMPLE ONE **********************
const myHeading = document.getElementById("myHeading");

myHeading.style.color = "MediumSeaGreen";
myHeading.style.textAlign = "center";

// ********************** EXAMPLE TWO **********************
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.color = "Green";
fruits[1].style.color = "Orange";
fruits[2].style.color = "Yellow";

for(let fruit of fruits) {
    fruit.style.color = "grey";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.color = "darkgreen";
    }
);
// ********************** EXAMPLE THREE **********************
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.color = "brown";

for(let h4Element of h4Elements) {
    h4Element.style.color = "brown";
}

for(let liElement of liElements) {
    liElement.style.color = "green";
}
// ********************** EXAMPLE FOUR **********************
const element = document.querySelector("li");
element.style.backgroundColor = "yellow";

// ********************** EXAMPLE FIVE **********************
const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "lightgreen";
})