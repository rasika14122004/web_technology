// ================= Activity 1 =================
// Arrow function examples

// Example 1: Calculate total
const totalCalculate = (s1, s2, s3) => {
    return s1 + s2 + s3;
}
console.log("Total:", totalCalculate(78, 89, 86));

// Example 2: Check voting eligibility
const isVote = (age) => {
    if (age >= 18) {
        console.log("Can vote");
    } else {
        console.log("Cannot vote");
    }
}
isVote(21);

// ================= Switch Case Example =================
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

let choice = 1; // You can change this for testing

switch (choice) {
    case 1:
        console.log("3 + 2 =", 3 + 2);
        break;
    case 2:
        console.log("5 - 3 =", 5 - 3);
        break;
    case 3:
        console.log("4 * 2 =", 4 * 2);
        break;
    case 4:
        console.log("8 / 2 =", 8 / 2);
        break;
    default:
        console.log("Invalid choice");
}

// ================= Activity 2 =================
// Truthy / Falsy

let username = "alex";
if (username) {
    console.log("User exists");
}

let username1 = "";
if (!username1) {
    console.log("No username provided");
}

// ================= Activity 3 =================
// Ternary operator

function showHome() {
    return "Home Page";
}

function showLogin() {
    return "Login Page";
}

let isAuth = false;
let result = isAuth ? showHome() : showLogin();
console.log("Result:", result);

// ================= Activity 4 =================
// Loops with an array
let numbers = [10, 20, 30, 40, 50];

// Classic for loop
console.log("---- For loop ----");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of loop
console.log("---- For of loop ----");
for (const num of numbers) {
    console.log(num);
}

// forEach loop
console.log("---- forEach loop ----");
numbers.forEach((num, index) => {
    console.log(index, num);
});

// map()
console.log("---- map() ----");
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// while loop
console.log("---- while loop ----");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// ================= Activity 5 =================
// All loops simple example
let numbersSimple = [1, 2, 3];

// for loop
console.log("---- For loop ----");
for (let j = 0; j < numbersSimple.length; j++) {
    console.log("for:", numbersSimple[j]);
}

// for...of loop
console.log("---- For of loop ----");
for (let num of numbersSimple) {
    console.log("for of:", num);
}

// for...in loop
console.log("---- For in loop ----");
for (let index in numbersSimple) {
    console.log("for in:", numbersSimple[index]);
}

// forEach loop
console.log("---- forEach ----");
numbersSimple.forEach(num => console.log("forEach:", num));

// while loop
console.log("---- while loop ----");
let k = 0;
while (k < numbersSimple.length) {
    console.log("while:", numbersSimple[k]);
    k++;
}

// do...while loop
console.log("---- do while loop ----");
let m = 0;
do {
    console.log("do while:", numbersSimple[m]);
    m++;
} while (m < numbersSimple.length);

// ================= Activity 6 =================
// map() and filter() example
let numbers1 = [1, 2, 3, 4, 5];

// map() → multiply each by 2
let doubled1 = numbers1.map(num => num * 2);
console.log("Doubled1:", doubled1);

// filter() → select even numbers
let evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
