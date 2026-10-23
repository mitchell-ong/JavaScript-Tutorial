import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(13);
const area = getArea(10);
const volume = getVolume(7);

console.log(`${circumference.toFixed(2)}in`);
console.log(`${area.toFixed(2)}in`);
console.log(`${volume.toFixed(2)}in`);