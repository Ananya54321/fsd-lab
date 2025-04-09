// Write a JavaScript program that takes an array of integers as input. Use arrow functions to perform the following tasks:
// Double the values of each element in the array.
// Filter the doubled values to include only the numbers greater than 20.
// Return the resulting filtered array as output.

const arr = [1, 2, 3, 4, 5, 6, 12, 13, 14, 15];
const double = (num) => {
  return num * 2;
};
const res = arr.map(double);
console.log(res);

console.log(res.filter((num) => num > 20));
