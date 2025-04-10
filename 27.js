// write a program to demonstrate closures

function outerFunc() {
  let count = 0;
  return function innerFunc() {
    count++;
    console.log(count);
  };
}

const inner = outerFunc();
inner();
inner();

// here, outerFunc's local variable is being used by innerFunc despite outerFunc not being active
// local variables persist as long as inner functions exist
