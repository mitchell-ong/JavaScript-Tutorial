let buttons = document.querySelectorAll(".buttons");
//-------------------------- EXAMPLE ONE --------------------------
function changeColor() {
    buttons.forEach(button => {
        button.style.backgroundColor = "green";
        button.textContent += "😺";
    });
}
//-------------------------- EXAMPLE TWO --------------------------
function click() {
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.target.style.backgroundColor = "tomato";
        });
    })
}
//-------------------------- EXAMPLE THREE --------------------------
function mouseOver() {
    buttons.forEach(button => {
        button.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "hsl(180, 65%, 17%)";
        });
    })
}
//-------------------------- EXAMPLE FOUR --------------------------
function mouseOut() {
    buttons.forEach(button => {
        button.addEventListener("mouseout", event => {
            event.target.style.backgroundColor = "hsl(180, 65%, 27%)";
        });
    })
}
//-------------------------- EXAMPLE FIVE --------------------------
function newButton() {
    const newButton = document.createElement("button");
    newButton.textContent = "Button 5";
    newButton.classList = "buttons";
    document.body.appendChild(newButton);

    buttons = document.querySelectorAll(".buttons");
    console.log(buttons);
}
//-------------------------- EXAMPLE SIX --------------------------
function removeButton() {
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.target.remove();
        });
    });
}

//changeColor();
//click();
//mouseOver();
//mouseOut();
//newButton();
removeButton();