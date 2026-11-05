// DO THESE TASKS IN ORDER
// 1. FEED THE CAT
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT GARBAGE

 function feedCat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const catFed = true;

            if(catFed) {
                resolve("You fed the cat 😺.")
            }
            else {
                reject("You DIDN'T feed the cat")
            }
        }, 1500);
    });
 }

 function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned) {
                resolve("You cleaned the kitchen 🧹.");
            }
            else {
                reject("You DIDN'T clean the kitchen")
            }
        }, 3500);
    });
 }

 function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if(trashTakenOut) {
                resolve("You took out the trash 🗑.");
            }
            else {
                reject("You DIDN'T take out the trash")
            }
        }, 1000);
    });
 }

feedCat().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => console.log(value))
    .catch(error => console.error(error));

