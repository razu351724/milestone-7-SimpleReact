// object destructuring

const {name, age} = {name: 'alu', age: 14};
const {name1, age1} = {id: 12, name: 'alu', age: 14};
// এরেতে ইংডেক্স মেন্টেন করবে. ওবজেটে কোনো সিরিয়াল লাগে না

const employe = {
    ide: 'VS Code',
    designation: 'developer',
    machinc: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'wather',
        watch:{
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machinc, ide} = employe;
const {weight, address} = employe.specification;
const {brand} = employe?.specification?.watch;
console.log(machinc, ide)
console.log(weight, address)
console.log(brand)
