const numbers = [5,10,15,20];

const output2 = [];
/*
 // old system function
function doubleIt(number){
    return number*2;
}
 */
// new system function
const doubleIt = number => number*2;

// for of loop
for(const number of numbers){
    const result = doubleIt(number);
    output2.push(result);
}
console.log('normal process',output2);
const output = numbers.map(doubleIt);
console.log('using array map',output);

// another system directly allign double it function work into array map 
const output3 = numbers.map(number => number*2);
console.log('using array map',output3);
console.log(output3.length);


