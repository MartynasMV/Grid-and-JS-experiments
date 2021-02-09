/* alert("helo"); */
/* console.log("hello"); */
/* console.warn("this is a warning"); */

/* const age = 30;
console.log(age); */

/* const name = "Martynas";
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof y); */

/* const name = "Martynas";
const age = 100;

console.log("My name is " + name + "and I am " + age);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello); */

/* const s = "What a lovely day, what a lovely day";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(" ")); */

/* const x = "some random words, seperated by comas";
console.log(x.split(", ")); */

//[Arrays] - variables with multiple values

/* const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); */

/* const fruits = ["apples", "oranges", "bananas", 10, true];
console.log(fruits[0]);
fruits[5] = "pears";
console.log(fruits);
fruits.push("mangos");
console.log(fruits);
fruits.unshift("straberries");
fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf("apples")); */

//Object literas (aka key value pairs)

/* const person = {
  firstName: "John",
  lastName: "Hex",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "Ozo",
    city: "Vilnius",
    country: "Lithuania",
  },
};

console.log(person);
console.log(person.firstName, person.lastName);
const hobbyMovie = person.hobbies[1];
console.log(hobbyMovie);
const city = person.address.city;
console.log(city);

const { firstName, lastName } = person;
console.log(firstName);

person.email = "john@SpeechGrammarList.com";
console.log(person); */

const todoList = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "meeting at 2pm",
    isCompleted: false,
  },
  {
    id: 3,
    text: "go to shop",
    isCompleted: true,
  },
];
console.log(todoList);
meetingAt2PM = todoList[1].text;
console.log(meetingAt2PM);

const todoListJASONIFIED = JSON.stringify(todoList); //with JSON we send data to the server
console.log(todoListJASONIFIED);

/* 
//for loops
for (let i = 0; i <= 10; i++) {
  console.log(`for loop number: ${i}`);
}
 */
/* 
//while loops
let i = 0;
while (i <= 10) {
  console.log(`While loop number: ${i}`);
  i++;
} */

for (let i = 0; i <= todoList.length; i++) {
  console.log(todoList[i]);
}

//for loop

for (let todo of todoList) {
  console.log(todo);
}
