hello(leave);


function hello(callback) {
    console.log("Hello!");
    callback();
}

function leave() {
    console.log("Go on! Leave!")
}
function goodbye() {
    console.log("Goodbye!");
}

