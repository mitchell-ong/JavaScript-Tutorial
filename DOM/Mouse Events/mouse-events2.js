
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// ------------------------ CLICK EXAMPLE ------------------------

function clickExample() {
    myBox.addEventListener("click", event => {
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = "Yay! 😸";
    });
}

// ---------------------- MOUSEOVER EXAMPLE ----------------------

function mouseoverExample() {
    myBox.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "Sad! 😿";
    });
}

// ----------------------- MOUSEOUT EXAMPLE -----------------------

function mouseoutExample() {
    myBox.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "teal";
        event.target.textContent = "Click Me 😺";
    });
}

// ---------------------- BUTTON CLICK EXAMPLE -------------------

function buttonClick() {
    myButton.addEventListener("click", () => {
        myBox.style.backgroundColor = "firebrick";
        myBox.textContent = "Ouch! 😾";
    });
}

// Register the event listeners
clickExample();
mouseoverExample();
mouseoutExample();
buttonClick();
