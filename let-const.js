
// console.log(name);
console.log('Device:', device);
var device = 'laptop';
const name = 'Bangladesh';
// name = 'Bangladesh'; // This will cause an error because 'name' is declared as a constant
const countryName = 'BD' + name;
console.log('Country Name:', countryName);
let price = 120;
price = 150;
console.log('Price:', price);

const dress = ['shirt', 'pants', 'shoes'];
dress.push('hat'); // This will work because we can modify the contents of the array, but we cannot reassign the 'dress' variable itself
console.log('Dress:', dress);

const student = {name : 'John', marks: 20};
console.log('Student:', student);
student.marks = 25; // This will work because we can modify the properties of the object, but we cannot reassign the 'student' variable itself
console.log('Updated Student:', student);