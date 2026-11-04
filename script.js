// 1. Object
// simple object, key-value pair.
const student = {
    name: "Nij",
    age: 21,
    city: "Navsari",
    isPassed: true
}
console.log(student.city)
console.log(student.name)
console.log(student["isPassed"])

// change or add key or value
student.age = 22;
student.course = "CSE";
console.log(student.course)

// to remove key
delete student.isPassed;
console.log(student)

// object with function

const person = {
    name:"Nij",
    sayHello() {
        console.log("Hello, I am " + this.name);  // this = 
    }
};
person.sayHello();

// 2. Nested Object and array of objects

const user = {
    name: "Nij",
    address: { city: "Navsari", pin: 396580, }
}
console.log(user.address.pin)

// simple array of objects (list of students)
const students = [
    { name: "Nij", marks: 99},
    { name: "Jil", marks: 78},
    { name: "Krunal", marks: 49}
];
// print using indexing
console.log(students[0])
console.log(students[1].marks)

// filter the marks using filter method
const passed = students.filter(s => s.marks >= 50)
const names = students.map(s => s.name);

console.log(passed);
console.log(names);

// 3. looping over object and arrays

const cars = {brand: "Hyundai", color: "white"}

for (const key in cars) {
    console.log(key, cars[key]);
}

console.log(Object.keys(cars))
console.log(Object.values(cars))

// loop over an array
for (const s of students) {
    console.log(s.name)
}

// 4. Destucturing (shorter way of writing code)

// for object
const student = { name1: "Nij", age: 21, city: "Surat"}

const { name1, city } = student;
console.log(name1, city)

// for arrays
const clrs = ["Blue", "Yellow", "Orange", "White"]
// using numbers of their index
const [first, second] = clrs;
console.log(first, second)

//  5. Spread (...) >>>> used for copy and combine
// for arrays
const m = [10, 23]
const n = [2004, 2005]
const combine = [...m, ...n]
console.log(combine)

// for objects
const basic = { name: "Nij", age: "21"};
const advance = { name: "Jil", age: "25"};

const merged = {...basic, ...advance}
// whose age is more he wins later and it will be shown
console.log(merged)

// 6. JSON 

const product = { name: "Notebook", price: 45 }

// object -> JSON text 
const text = JSON.stringify(product)
console.log(text);
console.log(typeof text)

// JSON text -> Object
const obj = JSON.parse(text)
console.log(obj.name);

// demo task
// find topper from the student object
const student = [
    {name:"Nij", mark: 99},
    {name:"Krunal", mark: 87},
    {name:"Jil", mark: 77},
]

const topper = student.reduce((best, s) => s.mark > best.mark ? s :best );
console.log("Topper is", topper.name, "and his marks are", topper.mark)

const avg = student.reduce((sum, s) => sum + s.mark, 0)
console.log("Average is:", avg / student.length)

// <<<---TASKS--->>>
// Easy
// Task 1: Make a product object (name, price, stock). Then change price and add a newkey brand .

const product = {
    name: "Powerbank",
    price: 1999,
    stock: 23 
}

product.price = 2100
product.brand = "Boat"
console.log(product)

// Task-2 : Make an object about yourself (name, age, hobbies array, address object). Usedestructuring to get name and city.

const myself = {
    name1: "Nij Bhavsar",
    age: 21,
    hobbies: ["Cricket" , "Website Development"],
    address:{
        village: "Pratapnagar",
        pin: 396580,
        city: "Vansda",
        di: "Navsari"
    }
}
const name1 = myself.name1
const city = myself.address.city
console.log("name is:", name1, ", city is:", city)

// Task 3: Merge {a:1, b:2} and {c:3, d:4} using spread.

const a1 = {a:1, b:2}
const a2 = {c:3, d:4}

const mgd = {...a1, ...a2}
console.log(mgd)

// MEDIUM
// Task-4: From the users array below, make a list of all names (map) and get users who live in Surat (filter).

const users = [
    { name1: "Ravi", age: 22, city: "Surat" }, 
    { name1: "Meera", age: 25, city: "Mumbai" }, 
    { name1: "Amit", age: 19, city: "Surat" }, 
    { name1: "Neha", age: 28, city: "Pune" }
]

const lists = users.map(u => u.name1)
console.log(lists)
const result = users
    .filter(u => u.city === "Surat")
    .map(u => u.name1)
console.log(result)

// Task-5 : Use JSON.stringify on an object, then JSON.parse it, and check the data is the same.

const user = {name:"Nij", age:21}
const text = JSON.stringify(user)
console.log(text)

const obj = JSON.parse(text)
console.log(obj)

// Task-6: Find the youngest user in users.

const youngest = users.reduce((young, u) => u.age < young.age ? u:young )
console.log(youngest)

// Task-7: Sort employees by salary (high to low) and find the total salary . (Hint: [...employees].sort((a, b) => b.salary - a.salary) )

const employees = [
    {name: "A", salary: 30000},
    {name: "B", salary: 40000},
    {name: "C", salary: 50000}
]
// sorted using spread(...) and .sort method
const salary = [...employees].sort((m, n) => n.salary - m.salary)
console.log(salary)

// Task-8:Group users by city: { Surat: [...], Mumbai: [...], Pune: [...] } .(Hint: reduce and {} )

const city = users.reduce((group, emp) => {
        if(!group[emp.city]) {
            group[emp.city] = [];
        }  // condition for rather a city exist or not for grouping
        group[emp.city].push(emp);
        return group;
},{} // {} used to save values 
)
console.log(city)