// ************************ EXAMPLE ONE ************************
const date = new Date();




const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();

// ************************ EXAMPLE TWO ************************
const date1 = new Date();

date1.setFullYear(2027);
date1.setMonth(5);
date1.setDate(7);
date1.setHours(14);
date1.setMinutes(30);

console.log(date1);
