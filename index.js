const array = [
  { name: 'Andrii', age: 35 },
  { name: 'Tom', age: 32 },
  { name: 'Rita', age: 27 },
  { name: 'Dima', age: 26 },
  { name: 'Elena', age: 24 }
];

console.log(JSON.stringify(array, ['name'])); // => [{"name":"Andrii"},{"name":"Tom"},{"name":"Rita"},{"name":"Dima"},{"name":"Elena"}]

console.log(JSON.stringify(array, ["age"])); // => [{"age":35},{"age":32},{"age":27},{"age":26},{"age":24}]

const user = {
  name: "andrii",
  age: 32
}

console.log(JSON.stringify(user, (key, value) => {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
})); // => {"age":32}

const country = {
  name: 'Ukraine',
  population: 35000000000
}

console.log(JSON.stringify(country, null, 2)); /**
 {
  "name": "Ukraine",
  "population": 35000000000
}
 */

console.log(JSON.stringify(user, null, '****')); /**
 {
 ****"name": "andrii",
 ****"age": 32
} */

const member = {
  name: 'Tom',
  age: 42,
  country: 'USA',
  toJSON() {
    return {
      info: `${this.name} ${this.country}`
    }
  }
}

console.log(JSON.stringify(member)); // => {"info":"Tom USA"}