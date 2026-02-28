// console.log(5 > 3); // true
// console.log(5 < 3); // false
// console.log(5 == 15); // false
console.log(5 != 15); // true

// multi level conditionals

const price = 5000;
if (price>=5000) {
    const discount = price * 0.1;
    const payAmount = price - discount;
    console.log(discount);
    console.log(payAmount);
}
else {
    console.log('No discount');
}