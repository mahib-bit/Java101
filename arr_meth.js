const products = [
    { name: 'Laptop', color: 'Silver', price: 999 },
    { name: 'Phone', color: 'Black', price: 499 },
    { name: 'Tablet', color: 'White', price: 299 },
    { name: 'Headphones', color: 'Red', price: 199 },
];
// making a new array of just the product colors without for loop
const colors = products.map(product => product.color);
console.log(colors); // Output: ['Silver', 'Black', 'White', 'Red']

products.forEach(product => console.log(product.name)); // Output: Laptop, Phone, Tablet, Headphones

const expensiveProducts = products.filter(product => product.price > 300);
console.log(expensiveProducts); // Output: [{ name: 'Laptop', color: 'Silver', price: 999 }, { name: 'Phone', color: 'Black', price: 499 }]

//Returns the first product that matches the condition
const findProduct = products.find(product => product.name === 'Tablet' || product.color === 'Red');
console.log(findProduct); // Output: { name: 'Tablet', color: 'White', price: 299 }