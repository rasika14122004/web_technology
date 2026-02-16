
//Activity=1
//write code for arrow function with 2 examples;
const totalCalculate = (s1, s2, s3) => {
    let total = s1 + s2 + s3;
    return total;
}
console.log(totalCalculate(78,89,86));

const isVote = (age) => {
    if(age >= 18){
        console.log(`can Vote`);
    }
    else{
        console.log(`cannot Vote`);
    }
}
isVote(21);

//switch case code
console.log(`1.Addition`);
console.log(`2.Subtraction`);
console.log(`3.Multiplication`);
console.log(`4.Division`);

//let choice = prompt("Enter Your Choice :")
switch(1){
    case 1 :
        console.log(`3 + 2 =` + (3 + 2));
        break;
    case 2 :
        console.log(`5 - 3 = ` + 5 - 3);
}

//Activity2

let username = "alex";

if (username) {
  console.log("User exists");
}


let username1 = "";

if (!username) {
  console.log("No username provided");
}

//Activity3
function showHome() {
  return "Home Page";
}

function showLogin() {
  return "Login Page";
}

let isAuth = false;

let result = isAuth ? showHome() : showLogin();

console.log(result);

//Activity4
//for loop (classic, most control)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//for...of loop
for (const num of numbers) {
  console.log(num);
}
//forEach() (array method)
numbers.forEach(function (num, index) {
  console.log(index, num);
});
numbers.forEach((num, index) => {
  console.log(index, num);
});

//map()

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [20, 40, 60, 80, 100]

//while loop
let i = 0;

while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

//Activity5
// Simple array
let numbers = [1, 2, 3];

// for loop
for (let j = 0; j < numbers.length; i++) {
  console.log("for:", numbers[i]);
}

// for...of loop
for (let num of numbers) {
  console.log("for of:", num);
}

// for...in loop
for (let index in numbers) {
  console.log("for in:", numbers[index]);
}

// forEach loop
numbers.forEach(function (num) {
  console.log("forEach:", num);
});

// while loop
let j = 0;
while (j < numbers.length) {
  console.log("while:", numbers[i]);
  i++;
}

// do...while loop
let k = 0;
do {
  console.log("do while:", numbers[j]);
  j++;
} while (k < numbers.length);

//Activity6
// Array
let numbers1 = [1, 2, 3, 4, 5];

// map() → change each value
let doubled1 = numbers.map(num => num * 2);
console.log("Doubled1:", doubled1);

// filter() → select values based on condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
