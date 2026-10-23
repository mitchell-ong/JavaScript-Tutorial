// *************************** EXAMPLE ONE ***************************
try {
    console.log("Hello");
}
catch (error) {
    console.error(error);
}
finally {
    console.log("This always executes")
}
console.log("You have reached the end!");

// *************************** EXAMPLE TWO ****************************
try {
    const dividend = Number(window.prompt("Enter a Dividend: "));
    const divisor= Number(window.prompt("Enter a Divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number!");
    }
    const result = dividend / divisor;

    console.log(result);
}
catch(error) {
    console.error(error);
}

console.log("Yay! You have reached the end!")
