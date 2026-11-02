// variables
console.log("Hello Js!")
let name1 = "Nij Bhavsar"
const birthyear = 2005
let age = 22
console.log(name1, age, birthyear)

// datatypes
console.log(typeof name1)
console.log(typeof 2005)
console.log(typeof true)

// operators
let n = 23;
let m = 10;

console.log("addition is:", (n + m))
console.log("subtraction is:", (n - m))
console.log("multiplication is:", (n * m))
console.log("divison is:", (n / m))
console.log("remainder is:", (n % m))

// comparison
console.log(m >= n)
console.log(m === n)
console.log(m !== n)

// if/else statement
// practice Task-1(To find largest)
let y = 63
let z = 45
if(z > y){
    console.log("Z is largest")
}
else{
    console.log("Y is largest")
}

// practice Task-2(Simple grad system)
let mark1 = 98
let mark2 = 95
let mark3 = 99
let avg = (mark1 + mark2 + mark3)/3
if(avg > 90){
    console.log("Your grade is A")
}
else{
    console.log("Your grade is B")
}

// switch statement
// simple calculator using switch statement
let n1 = 10;
let n2 = 20
switch (operator) {
    case '+':
        console.log("the sum is:", n1 + n2);
        break;
    case '-':
        console.log("The subtraction is:", n1 - n2);
        break;
    case '*':
        console.log("The multiplication is:", n1 * n2);
        break;
    case '/':
        console.log("The divison is:", n1 / n2);
        break; 
}

// loops
//(1) for loop

for(let i = 1;i <= 6; i++) {
    console.log("The Numbers are:", i)
}

// (2) while loop
let i = 1;
while(i <= 6){
    console.log(i)
    i++;
}

// demo Task(Check odd/even numbers)
let num = 2
if(num % 2 === 0) {
    console.log(num + " is even!")
}
else{
    console.log(num + " is odd!!")
}


// Today's task 
// Easy
// Task 1: Store your name, age and city in variables. Print I am Ravi, 24 years old,from Surat.

let name1 = "Nij Bhavsar";
let age = 22;
let city = "Pratapnagar";
console.log("I am " + name1 + ", " + age + " years old, from " + city)

//Task 2: Take two numbers. Print their sum, difference, product and division.

let v1 = 77;
let v2 = 21;
console.log("The inputs are: " + v1, v2)
console.log ("The sum is: " + (v1 + v2))
console.log ("The difference is: " + (v1 - v2))
console.log ("The product is: " + (v1 * v2))
console.log ("The division is: " + (v1 / v2))

// Task 3: Given marks, print the grade: 90+ A, 75-89 B, 50-74 C, below 50 Fail.

let maths1 = 55
let wp = 64
let oops = 47
let avg = (maths1 + wp + oops)/3
if(avg >= 90) {
    console.log("Congratulations!, You got Grade-A")
}
else if(avg >= 75 && avg < 90) {
    console.log("Oops!, You got Grade-B")
}
else if(avg >= 50 && avg < 75) {
    console.log("Oops, You got Grade-C")
}
else {
    console.log("Oh no!!, You are fail!")
}

// Medium
// Task 4: Print the multiplication table of 5 (5 x 1 = 5 ... 5 x 10 = 50). Hint: for loop +template literal.

for(let i = 1; i <= 10; i++) {
    console.log(5, "*" , i , "=", (5 * i))
}

// Task 5: Print all numbers from 1 to 100 that are divisible by 5.

for(let i = 1; i<= 100; i++) {
    if(i % 5 === 0) {
        console.log(i)
    }
}

// Task 6: FizzBuzz: for 1 to 30, print "Fizz" if divisible by 3, "Buzz" if divisible by 5,"FizzBuzz" if both, otherwise the number.

for (let n = 1; n <= 30; n++) {
    
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if(n % 3 === 0){
        console.log("Fizz")
    }
    else if (n % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(n)
    }
}

// Task 7: Print all prime numbers from 1 to 50 (a prime is divisible only by 1 and itself).

// let n = 50
for(let i = 2; i <= 50; i++) {
    let isPrime = true;
    
    for(let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i)
    }
}

// Task 8: Print this pyramid (Hint: one loop inside another loop):

let rows = 5
for(let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
}