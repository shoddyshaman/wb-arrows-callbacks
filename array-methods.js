//Array iteration methods

///forEach
//use foreach to console.log() the length of each string
const fruits = ['apple','berry','cherry']
//with inline callback
fruits.forEach((fruit) => console.log(fruit.length))
//element and index - not inline
fruits.forEach((fruit,id) => {
  return console.log(fruit,id)
})


const phrase = 'Howdy fellas!'
const phraseArray = [...phrase]
console.log(phraseArray)

let replacedEveryOther = ''
phraseArray.forEach((letter,index) => {
  if (index % 2 === 0){
    replacedEveryOther += letter
  } else {
    replacedEveryOther += '$'
  }
})

console.log(replacedEveryOther)

//map

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1)
}

// const capitalizedFruit = fruits.map(fruit => capitalize(fruit))
const capitalizedFruit = fruits.map(capitalize)
// is the same as saying
const capitalizedFruit2 = fruits.map((word) => {
  return word[0].toUpperCase() + word.slice(1)
})
console.log(capitalizedFruit)
console.log(capitalizedFruit2)

//filter
const numbers = [1,2,3,4,5,6,7,8,9,10]
const isEven = (num) => num % 2 === 0
const isOdd = (num) => num % 2 === 1

const evens = numbers.filter(isEven)
const odds = numbers.filter(isOdd)
console.log(evens)
console.log(odds)

const pets = [
  { name: 'Fido', species: 'dog', hasPhd: true },
  { name: 'Socks', species: 'cat', hasPhd: false },
  { name: 'Kiko', species: 'cat', hasPhd: true },
  { name: 'Noodles', species: 'fish', hasPhd: false },
];

const fish = pets.filter(pet => pet.species === 'fish')
console.log(fish)

//reduce

const sumOfAllNums = numbers.reduce((total,currVal) => {
  console.log('total:',total,'current:',currVal)
  return total + currVal
})


const purchases = [
  { customer: 'Barry', price: 9 },
  { customer: 'Bob', price: 50 },
  { customer: 'Barry', price: 27 },
  { customer: 'Barry', price: 128 },
  { customer: 'Bob', price: 22 },
];

const bobsTotal = purchases.reduce((total,purchase) => {
  if(purchase.customer === 'Bob'){
    return total + purchase.price
  }
  return total
},0)
console.log(bobsTotal)