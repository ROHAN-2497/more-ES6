// var let const 
// we are break-up var

const numbers = [12, 32, 35, 56, 87]
console.log(numbers);

let number  =   450;
number = 455;
console.log(number)

// default parameter
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus
    return total;
}
const total = calculateSalary(20000);
console.log(total)

// template string

const getElementHTML = `
<div>
<h1> Name: ${calculateSalary(20000, 0, 0)}</h1>
<P>salary:</P>
<p> address: ${numbers}</p>
</div>
`
console.log(getElementHTML)
 
// arrow function 
const duble = x => (x*2);

// spread 
const age = [12, 11, 14, 15, 16];
const newAges = [...age, 19, 20,23];
console.log(age);

// destructuring

const boys = {
    name : 'rohan islam',
    roll : 32,
    address : 'vata-para',
    phone : '01629124072'
};
const {name, roll} = boys;
console.log(name)

const {names} = {names: 'korimulla', phone:'01629124072', address: 'akborer mor'}
console.log(names);

const [a] = [12, 32, 434, 5, 45, 55 ];
console.log(a)