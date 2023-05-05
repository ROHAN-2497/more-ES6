// syntactic sugar
class Instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location){
      this.name = name;
      this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session ${time}`)
    }
    createQuize(module){
        console.log(`please create a quize for module ${module}`)
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuize(60);

const solaiman = new Instructor('solaiman khan', 'dhaka');
console.log(solaiman)
