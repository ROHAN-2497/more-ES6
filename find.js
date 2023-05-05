const numbers = [1, 3, 15, 34, 23, 12, 32,343, 56, 66, 76, 7, 9, 8, 50];

const fives = numbers.find(number => number % 5 === 0);
const fivesAll = numbers.filter(number => number % 5 === 0);
console.log(fivesAll);
console.log(fives);


const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000}
]
const cheap = products.find(product => product.price < 40000);
const cheapAll = products.filter(product => product.price < 40000);
console.log(cheapAll)
console.log(cheap);