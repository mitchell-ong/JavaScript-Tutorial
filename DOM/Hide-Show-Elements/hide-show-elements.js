const button = document.getElementById("button");
const image = document.getElementById("image");

button.addEventListener("click", event=> {
    if(image.style.visibility === "hidden") {
        image.style.visibility = "visible";
        button.textContent = "Hide"
    }
    else {
        image.style.visibility = "hidden";
        button.textContent = "Show";
    }

});
