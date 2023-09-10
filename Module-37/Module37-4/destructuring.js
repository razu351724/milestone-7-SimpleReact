// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers
console.log(x,y)

function boxify(num1, num2){
    const nums = [num1, num2];
    console.log(nums);
}

// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);
// console.log(boxify( 22, 23))

const student = {
    name: 'Salib Khan',
    age: 32, 
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;