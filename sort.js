const Number = [5, 2, 8, 1, 9];
console.log(Number);
Number.sort();
console.log(Number);

const Names = ['Charlie', 'Alice', 'Bob', 'David'];
console.log(Names);
Names.sort();
console.log(Names);

const ages = [25, 10, 30, 5, 20,100];
console.log(ages);
ages.sort();
console.log(ages);
ages.sort(function(a, b) {return a - b;}); 
console.log(ages);