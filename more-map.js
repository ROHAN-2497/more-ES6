const numbers = [12, 56, 87, 44].map( n => n/2);
const half = numbers.map(x => x/3);
const fiveth = numbers.map( y => y /5);
/* console.log(fiveth);

console.log(half);
console.log(numbers); */

const friends = ['Tom Hanks', 'Tom Curise', 'Tom Jhone', 'Tom solayman'];
const firstName = friends.map(friend  => friend[0]);
const nameLength = friends.map(friend => friend.length);
/* console.log(firstName);
console.log(nameLength); */

const products = [
    {id: 1, name: 'laptop', price: 45000,},
    {id: 2, name: 'mobile', price: 80000}, 
    {id: 3, name: 'tv' , price: 50000},
    {id: 4, name: 'watch', price: 35000}
]

/* const items = products.map(product =>console.log(product.name)); */
const prices = products.map(product => (product.price));
console.log(prices)
/* console.log(items); */
