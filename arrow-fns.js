// Arrow function AKA function expression

// const addTwo = (x) => {
//   return x + 2;
// };

//inline-arrow
const addTwo = x => x + 2;

console.log(addTwo(5));
// const addTwo = function(x){
//   return x + 2
// }

//hoisting - function declaration will get moved to the top and can be called from anywhere in the code
// function addTwo(x){
//   return x + 2
// }

//an arrow function called sayHello logs the string 'Hello'
const sayHello = () => {
  return "Hello";
};
console.log(sayHello());

//arrow function with multiple parameters
const getFullName = (first, last) => {
  return `${first} ${last}`;
};

// function getFullName(first, last) {
//   return `${first} ${last}`;
// }

console.log(getFullName("Michael", "Jordan"));
