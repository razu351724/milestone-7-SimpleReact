// 1. JSON => stringify, parse
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
// console.log(studentJSON)
// console.log(student)

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)

// 2.fetch
// fetch('url')
//     .then(response => response.json())
//     .then(data => console.log(data))

// keys, values
const keys = Object.keys(student)  
const values = Object.values(student)  
console.log(keys)  
console.log(values)  

// এরের ভিতর কোনো কিছু রিটান না পেতে চাইলে আমরা forEach loop ব্যাবহার করতে পারি
// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);