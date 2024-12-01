const products = [
    {id: 1, name: 'hp', price: 60000},
    {id: 2, name: 'lenevo', price: 50000},
    {id: 3, name: 'dell', price: 40000},
    {id: 4, name: 'mac', price: 160000},
]

const names = products.map(product => product.name);
// console.log(names);

const prices = products.map(product => product.price);
console.log(prices);