let timeoutID

function startTimer() {
    timeoutID = setTimeout(() => window.alert("Hello!"), 3000);
    console.log("Started");
}

function clearTimer() {
    clearTimeout(timeoutID);
    console.log("Cleared");
}

