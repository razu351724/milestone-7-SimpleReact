const products = [
    {name: 'laptop', price: 3200, brand: 'lenove', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iPhone', color: 'golden'},
    {name: 'watch', price: 300, brand: 'casio', color: 'yellow'},
    {name: 'sungalss', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
]

const brands = products.map(product => product.brand);
console.log(brands) // output: [ 'lenove', 'iPhone', 'casio', 'ribon', 'canon' ]

const price = products.map(product => product.price)
console.log(price) // output: [ 3200, 7000, 300, 300, 9000 ]

// products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap)

const specifiName = products.filter(p => p.name.includes('n'));
console.log(specifiName)

// 4. find
const special = products.find(p => p.name.includes('n'));
console.log(special)