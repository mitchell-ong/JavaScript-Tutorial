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

            const kitchenCleaned = false;

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

async function doChores(){

    try{
        const feedCatResult = await feedCat();
        console.log(feedCatResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    }
    catch(error) {
        console.error(error);
    }
}
doChores();