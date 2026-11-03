// (1) function

function add(a, b){
    return a + b;
}
let result = add(45, 23)
console.log(result)

// (2) Arrow Function

const add = (m, n) => {
    return a + b
}

// // For one line, you can remove {} and return
const mul = (m, n) => m * n;

// with one parameter only, () optional
const square = d => d * d;

console.log(mul(10, 34))
console.log(square(5))

// (3) Scope; a variable works inside the {} when it is made inside {}.

let x = "Senior"

function test () {
    let y = "Junior";
    console.log(x, y);
}

test();
console.log(x);
console.log(y);

// (4) Array(A list)

const fruits = ["Kiwi", "Banana", "Mango", "Apple", "Chiku"]

console.log(fruits[1])
console.log(fruits[4])
console.log(fruits.length)

// array methods
fruits.push("Pinapple");
fruits.pop();     //remove last element
fruits.unshift("Orange");   // add the element at start
fruits.splice(3, 0, "Strawberry", "Iceapple")
console.log(fruits);

// (5) Important array methods

// 1. forEach: do something for every item

const num = [23, 10, 19, 28, 25];
num.forEach(n => console.log(n * 2));

// 2. map: change every item and make a new array

const doubled = num.map(n => n * 2);
console.log(doubled)

// 3. filter: keep only the items that pass a test

// filters even from the array
const even = num.filter(n => n % 2 === 0);
console.log(even)

// filters odd from array
const odds = num.filter(n => n % 2 !== 0);
console.log(odds)

// 4. find: get the first item that matches
const max = num.find(n => n > 23)
console.log(max)

// 5. reduce: combine all items into one value (like a total)

const total = num.reduce((sum, n) => sum + n, 0);
console.log(total);

// Demo task(practice)

const values = [200, 180, 79, 56, 199]

const total = values.reduce((sum, n) => sum + n, 0);
console.log("your amount is:", total)
function applyDiscount(amount) {
    if(total > 500) {
        return amount - amount * 0.10
    }
    return amount;
}
console.log("Pay:", applyDiscount(total))

// <<<<<<----TASKS---->>>>>>
// Easy
// Task-1: Write greet(name) that returns Hello, Ravi!.

function greet(name) {
    return "Hello, " + name ;
}
console.log(greet("Ravi"))

// Task 2: In [4, 9, 2, 15, 7] , find the biggest and smallest number. (Hint: Math.max(...arr) or a loop)

let numbers = [4, 9, 2, 15, 7];
let largest = Math.max(...numbers)
console.log("Largest element is:",largest)
let smallest = Math.min(...numbers)
console.log("Smallest is:", smallest)

// Task-3: Use map to square every number in [1,2,3,4]

let elements = [1, 2, 3, 4];
const square = elements.map(n => n * n)
console.log(square)

// MEDIUM
// Task-4:From ages = [12, 25, 17, 30, 18] , use filter to keep only 18 or above .

const ages = [12, 25, 17, 30, 18];
const elder = ages.filter(n=> n >=18)
console.log(elder)

// Task-5: Reverse a string: "hello"

function isReversed(string) {
    return string.split("").reverse().join("");
}
console.log(isReversed("hello"))

// Task-6: Check for palindrome.

function isPalindrome(string) {
    return string === string.split("").reverse().join("");
}
console.log(isPalindrome("nayan"))

// Task-7: Remove duplicates from array

let values = [1, 2, 2, 3, 3, 3, 4]
let newarr = [...new Set(values)]
console.log(newarr)

// Task-8

let arrays = [5, 12, 8, 3, 20]

const evennum = arrays.filter(n => n % 2 === 0)
console.log("Even Numbers are:", evennum)

const sq = arrays.map(n => n * n)
console.log("Array with its Square:", sq)

const total = arrays.reduce((sum, n) => sum + n, 0)
console.log("sum of the elements in array:",total)

// all in one function
let result = arrays
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((sum, n) => sum + n, 0);

console.log(result)