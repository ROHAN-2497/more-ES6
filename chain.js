const users  = [{name: 'abdullah', id:1, job:'doctor'}];

// console.log(users[0].job);

const data = {
count : 5000,
data : [
    {id:1, name:'babul', job: 'engineer'},
    {id:1, name:'dabul', job: 'leader'}
]
}
const firstJob = data.count;
const secondJob = data.data;
const thirdJob = data.data[0].name;

console.log(thirdJob);
// console.log(data.data[0].name);

const user = {
    id : 1213,
    name : 'abdur rahman',
    address : {
        street : {
            first : '35/A kachukata cantonment',
            second : 'third floor',
            third : 'right side'
        },
        postOfise : 'cantonment'
    }
}
const firstPlace = user.address.street.first
console.log(user.address.postOfise);