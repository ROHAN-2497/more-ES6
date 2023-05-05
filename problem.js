const numbers = [1, 3, 5, 7, 9]
const even = numbers.map(number => number + 1);
console.log(even);

const array = [33, 50, 79, 78, 90, 101, 30];
const divisible = array.filter(x => x%10  === 0 );
console.log(divisible);
const divisibles = array.find(y => y % 10 === 0);
console.log(divisibles);

const student = {
    name : 'fredie',
    roll : 32
}
const studentProfile = student.roll;
console.log(studentProfile)

let data  = {
    location: [
        {
            latitude : '34.5, 53.5',
            longitude : '98.77 ,58.7',
            city : 'hydrabad',
            country : 'india'
        }
    ]
}

const locations = data.location[0].city;
console.log(locations);
