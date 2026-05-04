function sum(num1 , num2=0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
}

sum(4 ,4 );

function multiply(num1 , num2=1) {
    const result = num1 * num2;
    console.log(num1, num2, result);
}
multiply(0, 4);

function fullName(firstName, lastName = ' ') {
    const name = firstName + ' ' + lastName;
    console.log(name);
}
fullName('John', 'Doe');