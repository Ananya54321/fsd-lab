// Write an arrow function to check if a given string is a palindrome.

const isPalindrome = (str) => {
  let st = "";

  for (let i = str.length - 1; i >= 0; i--) {
    st += str[i];
  }
  return st === str;
};
console.log(isPalindrome("madame"));
