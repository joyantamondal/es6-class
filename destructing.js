// destructing 
const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '017149000400000000', address: 'Barisal', dress: 'golden'};
//old system object destructing and store value in variable
const phone = fish.phone;
const price = fish.price;
const dress = fish.dress;
console.log(phone,price,dress);

// new system object destructing and store value in variable in single line
const {id,name,price,phone} = fish;
console.log(id,name,price,phone);

// multi object destructing values into variable
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
const {employee,averageSalary,framework}= company.web;
const {name} = company.ceo;
const {first,third} = company.web.tech
console.log(name,employee,averageSalary,framework , first, third);

