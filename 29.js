// Use fetch function to access remote data using the given API
// jsonplaceholder.typicode/users
// Jsonplaceholder.typicode/todos
// Restcountries.com

const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);

const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
const todojson = await todos.json();
console.log(todojson);

const countries = await fetch("https://restcountries.com/v3.1/all");
// instead of getting all countries, you can get info of a single country through https://restcountries.com/v3.1/name/{name}

const countriesjson = await countries.json();
console.log(countriesjson);
