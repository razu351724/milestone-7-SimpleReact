const person = {
    name: 'Lal Nil Holud mai', 
    profession: 'Traffic surgeon', 
    25: 'sumade', 
    'razu': 'vi',
    addess: 'Shahabag'
}

// dot notation
const prof1 = person.profession;

// bracket notation
// const prof2 =  person[profession] // output: ReferenceError: profession is not defined
const prof2 = person['profession']
const pName = 'profession'
const prof3 = person[pName]
// console.log(prof2, prof3)

const season = person[25];
// console.log(season)

const gandua = person['razu']
console.log(gandua)