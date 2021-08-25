// class name always start with capitale letter
//class er vitore function lekha lage na direct function name diye kaj korlei hoy
class Support{
    name;
    address = 'bd';
    designation = 'Support Web Dev';
    constructor(name,address){
        this.name =name;
        if(address== undefined){
            address= this.address
        }
        else{
            this.address = address;
        }
    }
    startSession(){
        console.log(this.name,'start a support session');
    }

}
const amir = new Support('Amir Khan');
console.log(amir);
const zamir = new Support('Zamir Khan','Dubai');
console.log(zamir);
zamir.startSession();