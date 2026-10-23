const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// ------------------------ click example ------------------------
function clickExample1() {
    function changeColor(event) {
        event.target.style.backgroundColor = "firebrick";
        event.target.textContent = "Ouch! 😾"
    }
}

clickExample1();

function clickExample2() {
    myBox.addEventListener("click", event => {
        event.target.style.backgroundColor = "yellow";
        event.target.textContent = "Yay! 😸"
    });
}

//clickExample2();

// ---------------------- mouseover example ----------------------
function mouseoverExample() {
    myBox.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
        event.target.textContent = "Sad! 😿"
    });
}

mouseoverExample();

// ---------------------- mouseout example -----------------------
function mouseoutExample() {
    myBox.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "teal";
        event.target.textContent = "Click Me 😺";
    });
}

mouseoutExample();

// ----------------------- button click example ------------------------
function buttonClick() {
    myButton.addEventListener("click", () => {
        myBox.event.target.style.backgroundColor = "firebrick";
        myBox.event.target.textContent = "Ouch! 😾"
    });
}

function buttonClickExample2() {
    myButton.addEventListener("click", event => {
        myBox.event.target.style.backgroundColor = "yellow";
        myBox.event.target.textContent = "Yay! 😸"
    });
}
buttonClick();