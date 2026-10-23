const button = document.getElementById("button");

button.classList.add("enabled");
button.classList.remove("enabled");

function mouseOver() {
    button.addEventListener("mouseover", event=> {
        event.target.classList.add("hover");
    });
}

function mouseOut() {
    button.addEventListener("mouseout", event => {
        event.target.classList.remove("hover");
    });
}

function toggleOn() {
    button.addEventListener("mouseover", event=> {
        event.target.classList.toggle("hover");
    });
}

function toggleOff() {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
}

function replace() {
    button.classList.add("enabled");
    button.addEventListener("click", event => {
        event.target.classList.replace("enabled", "disabled");
    })
}

function contains() {
    button.classList.add("enabled");
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")) {
            event.target.textContent += "😾";

        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }

    });
}
//mouseOver();
//mouseOut();
//toggleOn();
//toggleOff();
//replace();
contains();