// declare variable based on the name of an object property
const myObject = {x:2, y:55, z:80, a:25, b:68};
const {a,x}= myObject;
console.log(a,x);

//Destructuring array

const [p,q] =[60,69];
console.log(p,q);

const {sky, sun, money} = {sky: 'blue', sun: 'red', money: 20000};
console.log(sky,sun,money);

// chaining optional chaining sign ? if found then check , if not find then not check next step
const company= {
    name: 'gp',
    ceo: {id: 1, name:'jack ma', salary: 2000},
    web :{
        id: 2,
         employee: 22, 
         averageSalary: 30000, 
        framework:'react',
        tech:{
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
    location: 'bd'
};
console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);