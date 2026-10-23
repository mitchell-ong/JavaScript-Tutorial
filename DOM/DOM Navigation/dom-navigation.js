// ------------------- .firstElementChild -----------------------
function firstElementChildExample() {
    const element = document.getElementById("cars");
    const firstChild = element.firstElementChild;
    firstChild.style.backgroundColor = "lightgreen";
}
// -------- .firstElementChild with querySelectAll() ------------
function firstElementChildAllExample() {
    const ulElements = document.querySelectorAll("ul");

    ulElements.forEach(ulElement => {
        const firstChild = ulElement.firstElementChild;
        firstChild.style.backgroundColor = "lightgreen";
    });
}

// ------------------- .lastElementChild -----------------------
function lastElementChildExample() {
    const element = document.getElementById("cars");
    const lastChild = element.lastElementChild;
    lastChild.style.backgroundColor = "lightgreen";
}
// -------- .lastElementChild with querySelectAll() ------------
function lastElementChildAllExample() {
    const ulElements = document.querySelectorAll("ul");

    ulElements.forEach(ulElement => {
        const lastChild = ulElement.lastElementChild;
        lastChild.style.backgroundColor = "lightgreen";
    });
}
// ------------------- .nextElementSibling -----------------------
function nextElementSiblingExample() {
    const element = document.getElementById("SUVs");
    const nextSibling = element.nextElementSibling;
    nextSibling.style.backgroundColor = "lightgreen";
}
// -------------- .previousElementSibling ------------------------
function previousElementSiblingExample() {
    const element = document.getElementById("SUVs");
    const previousSibling = element.previousElementSibling;
    previousSibling.style.backgroundColor = "lightgreen";
}
// ---------------------- .parentElement -------------------------
function parentElementExample() {
    const element = document.getElementById("Ram");
    const parent = element.parentElement;
    parent.style.backgroundColor = "lightgreen";
}
// ------------------------ .children ----------------------------
function childrenElementExample() {
    const element = document.getElementById("cars");
    const children = element.children;

    Array.from(children).forEach(child => {
        child.style.backgroundColor = "lightgreen";
    });
}
// ---------------------- function calls ------------------------
//firstElementChildExample();
//firstElementChildAllExample();
//lastElementChildExample();
//lastElementChildAllExample();
//nextElementSiblingExample();
//previousElementSiblingExample();
//parentElementExample();
childrenElementExample();