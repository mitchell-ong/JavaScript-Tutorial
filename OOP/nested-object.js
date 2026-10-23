// ********************** EXAMPLE ONE **********************

const person = {
    fullName: "Brak Guerta",
    age: 16,
    isStudent: true,
    hobbies: ["singing", "song writing", "dancing"],
    address: {
        street: "1050 Techwood Drive",
        city: "Atlanta",
        country: "USA"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);

// ********************** EXAMPLE TWO **********************

class Person {

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {

    constructor(street, city, state, zipCode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    }
}

const person1 = new Person("Fry Lock", 30,"123 Williams St",
                                                            "Atlanta",
                                                            "Georgia", "11111");

const person2 = new Person("Master Shake", 23, "123 Williams St",
                                                                 "Atlanta",
                                                                 "Georgia", "11111");

const person3 = new Person("Meatwad", 16, "123 Williams St",
                                                            "Atlanta",
                                                            "Georgia", "11111");

console.log(person1);
console.log(person2);
console.log(person3);