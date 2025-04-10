// write a program to demonstrate function generators with multiple generators

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

function* generator2() {
  yield* generator();
  yield "a";
  yield "b";
  yield "c";
}

const gen = generator2();
for (let i = 0; i < 6; i++) {
  console.log(gen.next().value);
}
