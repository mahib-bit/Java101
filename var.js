var weight = 150; 
var height = 1.75;
var name = 'Wayne Gretzky';
var isCrazy = true;
var bmi = weight / (height * height);
console.log(weight);
console.log(height);
console.log('Your BMI is ' + bmi);
console.log('Name: ' + name);
console.log('Is crazy: ' + isCrazy);
console.log('Type of weight: ' + typeof weight);
console.log('Type of height: ' + typeof height);
console.log('Type of name: ' + typeof name);
console.log('Type of isCrazy: ' + typeof isCrazy);

var x = parseInt('10');
console.log('Value of x: ' + x);
console.log('Type of x: ' + typeof x);

var y = parseFloat('3.14');
console.log('Value of y: ' + y.toFixed(5));