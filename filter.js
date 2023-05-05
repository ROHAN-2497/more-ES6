const numbers = [1, 3, 34, 23, 12, 32,343, 56, 66, 76, 7, 9, 8, 50];
const bigNumber = numbers.filter(num => num > 20);
const tiny = numbers.filter(num => num < 10);
const even = numbers.filter(n => n%2 == 0);
const odd = numbers.filter(nu => nu%2 == 1);
/* console.log(odd)
console.log(even)
console.log(tiny);
console.log(bigNumber); */

const products = [
    {id: 1, name: 'laptop', price: 40000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000}
]
const expensive = products.filter(product => product.price > 100000);
const middle = products.filter(produc => produc.price >= 10000);
console.log(middle);
console.log(expensive);

