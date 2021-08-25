const friends = ['Tom Jack', 'Pori Moni', 'SP Harun BCS', 'John Doe'];
const fLength = friends.map(friend => friend.length);
console.log(fLength);

const products = [
    {name: 'water bottle', price: 50, color: 'noobie blue'},
    {name: 'mobile phone', price: 48000, color: 'black'},
    {name: 'smart watch', price: 16000, color: 'dark black'},
    {name: 'sun glass', price: 1200, color: 'night black'},
    {name: 'canon 70D DSLR', price: 78000, color: 'light black'}

];

const productNames = products.map(product => product.name) ;
console.log('product names: ',productNames);
const productPrice = products.map(product => product.price) ;
console.log('product price: ',productPrice);
products.map(product =>console.log('show array using map: ',product));

// if we dont need return then we can use foreach loop if need return then need map
// map diye kaj kora hole seta puro akta array return korbe but forEach seta korbe na forEach sudhu kaj ta korbe bt kono return korbe na
products.forEach(product =>console.log('show array using foreach: ',product));