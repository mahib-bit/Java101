const getTax = (amount, taxRate) => (amount * taxRate) / 100
console.log(getTax(100, 5))

// single parameter
const getSquare = (x) => x * x;
const getHalf = num => num / 2;
const firstArray = Arr => Arr[0];

console.log(getSquare(8))
console.log(getHalf(18))
console.log(firstArray([1, 2, 3, 4, 5]))