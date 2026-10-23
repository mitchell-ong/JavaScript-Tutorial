function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`)
}

happyBirthday("Murdock", 41);

function add(x, y) {
    return x + y;
}

let answer = add(2, 3);

function isEven(number) {

    if(number %2 === 0) {
        return true;
    }
    else {
        return false;
    }
                 }
console.log(isEven(37));