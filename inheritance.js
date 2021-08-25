// class name always start with capitale letter
//class er vitore function lekha lage na direct function name diye kaj korlei hoy
class TeamMember{
    name;
    address = 'BD';
    constructor(name, address){
        this.name =name;
        if(address== undefined){
            address= this.address
        }
        else{
            this.address = address;
        } 
    }
}

class Support extends TeamMember{
  designation= 'support web dev';
  groupSupportTime;
  constructor(name,address,time){
      super(name,address);
      this.groupSupportTime = time;
  }
    startSession(){
        console.log(this.name,'start a support session');
    }

}
class StudentCare extends TeamMember{
    designation= 'Student Care Web Dev';
    releaseApp(student){
        console.log(this.name,'Routine Processing PLease Wait',student);
    }
}
class NeptuneDev extends TeamMember{  
    designation= 'android dev support';
    codeEsitor;
    constructor(name,designation,editor){
        super(name,designation);
        this.codeEsitor = editor;

    }
    buildARoutine(version){
        console.log(this.name,'release app version ',version);
    }
}
const amir = new Support('Amir Khan','kkk',11);
console.log(amir);
const zamir = new Support('Zamir Khan','Dubai',4);
console.log(zamir);
zamir.startSession();
const alia = new StudentCare('Alia Kat', 'Mumbai');
console.log(alia);

const joy = new NeptuneDev('Joyanta','Dhaka', "Android Studio");
console.log(joy);
joy.buildARoutine('2.0.3');
function min(nums) {  return Math.min(nums) }
console.log(min( [1,3,2 ]))  