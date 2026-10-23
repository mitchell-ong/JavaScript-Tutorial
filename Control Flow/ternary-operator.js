let purchase = 110;

let discount = purchase >= 100 ? 10 : 0;
console.log(`Your total is $${purchase - purchase * (discount / 100)}`);

