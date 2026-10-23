class Animal {

    alive = true;

    eat() {
        console.log(`This ${this.name} is eating. Nom Nom`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping. ZZ ZZ.`);
    }
}

class Cat extends Animal {
    name = "cat";
    meow() {
        console.log(`This ${this.name} is meowing!`);
    }
}

class Raccoon extends Animal {
    name = "raccoon";
    dig() {
        console.log(`This ${this.name} is digging in the trash!`);
    }
}

class Eagle extends Animal {
    name = "eagle";
    fly() {
        console.log(`This ${this.name} is soaring in the sky!`);
    }
}

const cat = new Cat();
const raccoon = new Raccoon();
const eagle = new Eagle();

raccoon.sleep();
raccoon.eat();

cat.sleep();
cat.eat();

eagle.sleep();
eagle.eat();

raccoon.dig();
cat.meow();
eagle.fly();


