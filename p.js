const middleEast = [
    {id: 1, name: 'uae', currency: 'dirham', president: 'mohamed'},
    {id: 1, name: 'qatar', currency: 'riyal', president: 'tamim'},
    {id: 1, name: 'saudi arabia', currency: 'ksa riyal', president: 'zayed'},
]
const currency = middleEast.map(east => east.currency);
console.log(currency);

const names = middleEast.map(middle => middle.name);
// console.log(names);