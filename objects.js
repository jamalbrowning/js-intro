// const str = 'Here is a string it is kinda long'
// console.log(str.length);

// const age = 23

// if (age >= 21) {
//   console.log('have a beer')
// } else {
//   console.log ('have a water')
// }

//objects

const expense = {
  id: 1,
  location: 'Chipotle',
  price: 1300 ,
  purpose: 'Lunch Break',
  code: '1000DA',
}
//challenge
// write a function that takes in an expense object
// if the price (in pennies) is greater that 1500
// add a key of approved with a value of false
// otherwise add a key of approved with a value of true
//return the expense object
// adn console log

const approval = (obj) => { 
  if (obj.price > 1500){
    obj.approved = false;
  } else {
    obj.approved = true;
  };
  return obj
}


console.log(approval(expense))
// console.log('expense object before', expense)

//adding 
// expense.employeeNumber = 1001
// console.log('expense object after', expense)

//extracting key
// console.log(expense.id) //dot notation
// const keyIwantToUse = 'id'
// console.log(expense[keyIwantToUse]); //bracket notation if you there is a variable and you want to use that value as your key

// const newObj = {
//   id: 1,
// };

// const newerObj = {
//   id: 1,
// };

// console.log(newObj === newerObj) //these are not the same objects, they are seperate.


// COMBOS

//array of objects

const tickets = [
  const expense = {
    id: 1,
    location: 'Chipotle',
    price: 1300 ,
    purpose: 'Lunch Break',
    code: '1000DA',
  },
  const expense = {
    id: 2,
    location: 'Chipotle',
    price: 1300 ,
    purpose: 'Lunch Break',
    code: '1000Db',
  }
]
