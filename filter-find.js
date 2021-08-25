const numbers = [20,50,5,1,30,100,200,500,600];
// filter here (filter array hisebe dibe output)
const numberFilter = numbers.filter(x => x%2==1);
console.log(numberFilter);

const products = [
    {name: 'water bottle', price: 50, color: 'noobie blue'},
    {name: 'mobile phone', price: 48000, color: 'black'},
    {name: 'smart watch', price: 16000, color: 'dark black'},
    {name: 'sun glass', price: 1200, color: 'night black'},
    {name: 'canon 70D DSLR', price: 78000, color: 'light black'}

];
const priceCondition = products.filter(product => product.price>20000);
console.log('filter',priceCondition);

const productColor = products.filter(product => product.color =='black');
console.log('filter',productColor);

//find here  (find array dibe na array er element dibe output)
const blackFind = products.find(product => product.color =='dark black');
console.log('find',blackFind);