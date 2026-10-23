// ********************* Example One ********************
class MathUtils {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius ** 2;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.getDiameter(6));
console.log(MathUtils.getCircumference(6))
console.log(MathUtils.getArea(5));

// ********************* Example Two ********************

class User {

    static userCount = 0;

    constructor(userName) {
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.userName}`);
    }
}

const user1 = new User("Frylock");
const user2 = new User("Master Shake");
const user3 = new User("Meatwad");

user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log(User.userCount);
User.getUserCount();
