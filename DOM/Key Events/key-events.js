const box = document.getElementById("box");
// ------------------------ keydown ------------------------------
function keydownExample() {
    document.addEventListener("keydown", event => {
        console.log(`Key down = ${event.key}`);
    })
}

function keydownExample2() {
    document.addEventListener("keydown", event => {
        box.textContent = "😼";
        box.style.backgroundColor = "tomato";
    })
}
// ------------------------- keyup ------------------------------
function keyupExample() {
    document.addEventListener("keyup", event => {
        console.log(`Key up = ${event.key}`);
    })
}

function keyupExample2() {
    document.addEventListener("keyup", event => {
        box.textContent = "🙀"
        box.style.backgroundColor = "brown";
    })
}
// ------------------------- move ------------------------------
const moveAmount = 20;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    box.textContent = "😾"
    box.style.backgroundColor = "tomato";
});

document.addEventListener("keyup",event => {
    box.textContent = "😺";
    box.style.backgroundColor = "teal";
})
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {

        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;

    }
});

