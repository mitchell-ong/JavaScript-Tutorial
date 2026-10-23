// ********************** Example One **********************
class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(5,4);

rectangle.width = 7;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ********************** Example Two **********************
class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newfirstName) {
        if(typeof newfirstName === "string" && newfirstName.length > 0) {
            this._firstName = newfirstName;
        }
        else {
            console.error("First name must be non-empty string");
        }
    }

    set lastName(newlastName) {
        if(typeof newlastName === "string" && newlastName.length > 0) {
            this._lastName = newlastName;
        }
        else {
            console.error("Last name must be non-empty string");
        }
    }

    set age(newAge) {
        if(typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Brak", "Guerta", 16);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);