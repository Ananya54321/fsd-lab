//write a js program to implement prototypal inheritance
const Person = {
  name: "Luke",
  age: 25,
  greet: function () {
    console.log("Hello, I'm ", this.name);
  },
};

const student = Object.create(Person);
student.name = "Sabrina";
student.age = 28;

student.greet();

const teacher = Object.create(Person);
teacher.name = "Taylor";
teacher.subject = "English";
teacher.greet();

// here student and teacher inherit the prototype of Person
