const fruits = ['apple', 'banana', 'orange', 'grape'];
if (fruits.includes('banana')) {
  console.log('Banana is in the list of fruits.');
}
else {
  console.log('Banana is not in the list of fruits.');
}

console.log(fruits.indexOf('orange')); // Output: 2
console.log(fruits.indexOf('pear')); // Output: -1