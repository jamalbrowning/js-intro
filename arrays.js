const array = (arr, index) => {
  return arr[index];
}
console.log (array([4,2,5,6,3], 0))

const something = (arr) => {
 return arr.includes('luna');
}
console.log(something(['oops', 4 , "luna"]))
console.log(something(['oops', 4 , "john"]))
