// write a program to demonstrate symbols in java script

const sym1 = Symbol("color");
const sym2 = Symbol("color");
const obj = {
  [sym1]: "blue",
  [sym2]: "pink",
};

console.log(obj[sym2]);
