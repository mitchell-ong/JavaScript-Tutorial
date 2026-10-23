class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Chinchilla extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Catfish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const chinchilla = new Chinchilla("Chalupa", 1, 15);
const catfish = new Catfish("Charlie", 5, 8);
const hawk = new Hawk("Henry", 4, 50);

console.log(chinchilla.name);
console.log(chinchilla.age);
console.log(chinchilla.runSpeed);

console.log(catfish.name);
console.log(catfish.age);
console.log(catfish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);