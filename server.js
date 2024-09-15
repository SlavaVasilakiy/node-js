// import { add, subtract } from './math.js';
const add = require('./math.js').add;
const subtract = require('./math.js').subtract;

console.log(add(8, 13));
console.log(subtract(5, 1));
