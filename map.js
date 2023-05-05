const numbers = [2, 4, 8, 6, 3];
const outPut = [];

for (const number of numbers){
    const doubled = number * 2;
    outPut.push(doubled);
}
/* console.log(outPut) */

function getDoubled(numbers){
    const outPut = [];
    for(const number of numbers){
        const doubled = doubleIt(number);
       outPut.push(doubled);
    }
    return outPut;
}

function doubleItOld(num){
    return num *2
}
const doubleIt= num => num * 2 ;
const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map( num => num*2);
const makeDouble3 = numbers.map(y => y* 2);
/* console.log(makeDouble3);
console.log(makeDouble2) */

const result = getDoubled(numbers);
/* console.log(result) */

const fivetimes = [1,2,3,4,5].map(x => x * 5);
console.log(fivetimes);
