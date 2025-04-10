// Write a JavaScript console program to find absolute value of a given number using async/await.

function findAbs(n) {
  return new Promise((resolve, reject) => {
    if (!isNaN(n)) {
      resolve(Math.abs(n));
    } else reject("Invalid input");
  });
}

async function findResult(n) {
  try {
    let result = await findAbs(n);
    console.log(`Absolute value of ${n} is ${result}`);
  } catch (err) {
    console.log(err);
  }
}
findResult(-12345);
