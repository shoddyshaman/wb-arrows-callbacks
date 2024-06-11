function alertTimeExpired() {
  console.log("Time's up!");
}

// This calls alertTimeExpired() after waiting 3 seconds.
setTimeout(alertTimeExpired, 3000);

// Example with an inline arrow function
setTimeout(() => console.log("Time's up!"), 3000);

const sayHello = (name) => `Hello, ${name}!`;

const irishGreeting = (name) => `Top of the morning to you, ${name}!`;

const greet = (name, greetingCallback) => {
  console.log(greetingCallback(name));
};

greet('Steve', sayHello); // Hello, Steve!
greet('Patrick', irishGreeting); // Top of the morning to you, Patrick!

greet('Lorena', (name) => `Buenos dias, ${name}!`);
// Buenos dias, Lorena!

greet('Pierre', (name) => `Bonjour, ${name}!`);
// Bonjour, Pierre!


//calculator

const add = (x,y) => x + y
const subtract = (x,y) => x - y
const multiply = (x,y) => x * y
const divide = (x,y) => x / y

const calculate = (cbFunction,x,y) => {
  return cbFunction(x,y)
}

// 867 + 1389
console.log(calculate(add,1389,867))

//1456 - 564
console.log(calculate(subtract,1456,564))

//254 * 78
console.log(calculate(multiply,254,78))

//3879 / 3
console.log(calculate(divide,3879,3))

// 4 ** 5 =  Multiple 4 by 4, 5 times
console.log(calculate((x,y) => x ** y , 4,5))

//find square root of 81
// console.log(calculate(function(x){
//   return Math.sqrt(x)
// },81,1))

console.log(calculate(x => Math.sqrt(x),81,1))