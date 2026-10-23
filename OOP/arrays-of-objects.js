const fruits = [{name: "apple",color: "green" , calories: 65},
                {name: "watermelon", color: "green and red", calories: 46},
                {name: "grapes", color: "red", calories: 65},
                {name: "mandarin orange", color: "orange", calories: 70},
                {name: "Banana", color: "yellow", calories: 110}];


fruits.push({name: "kiwi", color: "brown and green",calories: 83});

//fruits.pop();
//fruits.splice(1, 2);

fruits.forEach(fruit => console.log(fruit));