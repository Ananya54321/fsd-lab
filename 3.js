// Write a JavaScript program to calculate the sum of all elements in an array using an arrow function.

const sumOfNums = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};

const arr = [1, 2, 4, 5, 56, 8, 95, 3];
console.log(sumOfNums(arr));
