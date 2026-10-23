// --------------------- EXAMPLE 1 <h1> ---------------------

function createH1() {
    // STEP 1 CREATE THE ELEMENT
    const newH1 = document.createElement("h1");

    // STEP 2 ADD ATTRIBUTES/PROPERTIES
    newH1.textContent = "I like lasagna!";
    newH1.id = "myH1";
    newH1.style.color = "firebrick";
    newH1.style.textAlign = "center"

    // STEP 3 APPEND ELEMENT TO DOM
    document.getElementById("box1").append(newH1);
}

// --------------------- INSERT BEFORE ---------------------
function insertH1Before() {
    const newH1 = document.createElement("h1");
    newH1.textContent = "I like lasagna!";
    newH1.id = "myH1";
    newH1.style.color = "firebrick";
    newH1.style.textAlign = "center"

    const box2 = document.getElementById("box2");
    document.body.insertBefore(newH1, box2);
}

// --------------- INSERT BEFORE USING querySelectorAll ---------------
function insertH1BeforeBox() {
    const newH1 = document.createElement("h1");
    newH1.textContent = "I like lasagna!";
    newH1.id = "myH1";
    newH1.style.color = "firebrick";
    newH1.style.textAlign = "center"

    const boxes = document.querySelectorAll(".box");
    document.body.insertBefore(newH1, boxes[1]);
}

// --------------------- REMOVE ELEMENT ---------------------
function removeH1() {
    const newH1 = document.createElement("h1");
    document.body.removeChild(newH1);
}

// --------------------- RUN AN EXAMPLE ---------------------
createH1();
insertH1Before();
insertH1BeforeBox();
removeH1();