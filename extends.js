class TeamMember{
  name;
  location;
  constructor(name,location){
this.name = name;
this.location = location;  
  }
  proviodeFeedback(){
    console.log(`${this.name} thank you for your feedback`) 
  }
}


class Instructor extends TeamMember{

    designation = 'web course instructor';
    team = 'web team';
    
    constructor(name, location){
      super(name, location);                                                            

    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
        createQuize(module){
            console.log(`please create a quize for module${module}`);
        }
       
}
class developer extends TeamMember{
    
    designation = 'web course instructor';
    team = 'web team';
   
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
     

    }
    developerFeature(feature){
        console.log(`please develop the ${feature}`);
    }
        realease(version){
            console.log(`please realease the version${version}`);
        }
      

}

const alia  = new developer('alia bhatt', 'india', 'React');
console.log(alia)
alia.proviodeFeedback()

const rohan  = new Instructor('rohan islam', 'ishurdi');
console.log(rohan);
rohan.proviodeFeedback()