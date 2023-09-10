// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
    {name: 'laptop', price: 3200, brand: 'lenove', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iPhone', color: 'golden'},
    {name: 'watch', price: 300, brand: 'casio', color: 'yellow'},
    {name: 'sungalss', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
]

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'}

// copy products array and then add newProduct
const newProducts =  [...products, newProduct];
console.log(newProduct)

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone')
console.log(remaining)