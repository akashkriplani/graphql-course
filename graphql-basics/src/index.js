import myCurrentLocation, { name, message, getGreeting } from './myModule';
import myAddFunction, { subtract } from './math';

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Sachin'));

console.log(myAddFunction(2, 1));
console.log(subtract(2, 1));
