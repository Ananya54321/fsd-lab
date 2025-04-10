// Write a JavaScript console program to find sum of digits of a given number using async/await.
function findSum(n) {
  return new Promise((resolve, reject) => {
    if (!isNaN(n)) {
      let sum = 0;
      while (n > 0) {
        rem = n % 10;
        sum += rem;
        n = Math.floor(n / 10);
      }
      resolve(sum);
    } else {
      reject("Invalid input");
    }
  });
}

async function findResult(n) {
  try {
    let result = await findSum(n);
    console.log(`Sum of digits of ${n} is ${result}`);
  } catch (err) {
    console.log(err);
  }
}
findResult(12345);
