// Write a program to count the number of vowels in a string using an arrow function
const vowels = new Set(["a", "e", "i", "o", "u"]);
const countVowels = (str) => {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) count++;
  }
  return count;
};

console.log(countVowels("HelloO"));
