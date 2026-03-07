const numbers = [1, 2, 3, 4, 5];
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const passed = [true, false, true, true, false];
const mixed = [1, 'Alice', true, null, undefined];
console.log(numbers);
console.log(names);
console.log(passed);
console.log(mixed);
names.push('Frank');
console.log(names);
mixed.pop();
console.log(mixed);
// shift removes the first element of the array
names.shift();
console.log(names);
// unshift adds an element to the beginning of the array
names.unshift('Grace');
console.log(names);