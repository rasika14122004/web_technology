//Activity 1:
//simple array, function, object declaration with example.
console.log(`Activity 1`);
let arr1 = new Array(1,2,3)
console.log(`My Array is : ${arr1}`);

function myFunction(){
    console.log(`Function is called here!`);
}
myFunction();

let myObject = {
    name : "Sanjana",
    age : 21
}
console.log(`My Object is : ${myObject}`);

//Activity 2:
//find largest no in string.

//Activity 3:
//find reverse no in string.
console.log(`Activity 3`);

let mystr = "sanjana";
console.log(`Reversed String is : `);
for(let i = 6; i >= 0; i--){
    console.log(mystr[i]);
}

//Activity 4 :
//find vowels in string.
console.log(`Activity 4`);

console.log(`Vowels in ${mystr}:`);

const vowels = "aeiou";
let uniqueVowels = new Set();   // to store unique vowels

for (let j = 0; j < mystr.length; j++) {
    if (vowels.includes(mystr[j].toLowerCase())) {
        console.log(mystr[j]);
        uniqueVowels.add(mystr[j].toLowerCase());
    }
}

console.log(`Unique vowel count: ${uniqueVowels.size}`);


//Activity 5 :
//find palindrome no.
console.log(`Activity 5`);

let num = 121;
let temp = num;
let reverse = 0;

while(temp > 0){
    let result = temp % 10;
    reverse = reverse * 10 + result;
    temp = Math.floor(temp / 10);
}
if(num == reverse){
    console.log(`The ${num} is Palindrome Number!`);
}
else{
    console.log(`The ${num} is Not-Palindrome Number!`);

}

//Actiity 6 :
//fibonacii series.
console.log(`Activity 6`);

let a = 0, b = 1;
let res = 0;
console.log(`Fibonacii series : `);
for(let i = 0; i <= 10; i++){
    res =  a + b;
    console.log(res);
    a = b;
    b = res;
}

//Activity 7 :
//find largest element in array.
console.log(`Activity 7`);

let arr2 = [1,5,7,8,3,5,2,3,1];
let max = Math.max(...arr2);//...spread operator => It spreads array elements into individual values.
console.log(`Largest Number is : ${max}`);

//Activity 8 :
//remove duplicate element in array.
console.log(`Activity 8`);

let unniqueArray = [];
for (i = 1; i < arr2.length; i++){
    if(!unniqueArray.includes(arr2[i])){
        unniqueArray.push(arr2[i]);
    }
}
console.log(unniqueArray);

//Activity 9 :
//find missing no in array.
console.log(`Activity 9`);

function findMissingNumber(arr) {
    let n = arr.length + 1; // because one number is missing
    let expectedSum = 0;
    let actualSum = 0;

    for (let i = 1; i <= n; i++) {
        expectedSum += i;
    }

    for (let j = 0; j < arr.length; j++) {
        actualSum += arr[j];
    }

    let missingNumber = expectedSum - actualSum;
    console.log("Missing number is:", missingNumber);
}

let arr = [1, 2, 3, 5];
findMissingNumber(arr);


//Activity 10 :
//function to find even or odd.
console.log(`Activity 10`);

function evenOdd(value){
    if(value % 2 ==0){
        console.log(`${value} is Even`);
    }
    else{
        console.log(`${value} is Odd`);

    }
}
let value = 6;
evenOdd(value);

//Actiity 11 : 
//function to find sum of array.
console.log(`Activity 11`);

function sum(arr3){
    let sum = 0;
    for(let j = 0; j < arr3.length; j++){
        sum = sum + arr3[j];
    }
    console.log(`Sum of Array is : ${sum}`);
}
let arr3 = [1,2,3,4,5];
sum(arr3);


