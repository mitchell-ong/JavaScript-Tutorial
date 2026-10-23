const person1 = {
    name: "Frylock",
    favFood: "lasagna",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function (){console.log(`${this.name} is eating ${this.favFood}.`)}
}

const person2 = {
    name: "Master Shake",
    favFood: "spaghetti",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function (){console.log(`${this.name} is eating ${this.favFood}.`)}
}

person2.eat();

