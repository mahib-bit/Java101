const numbers = [1, 2, 3, 4, 5];
const emp = [
    {name: 'John', age: 30 ,salary: 50000},
    {name: 'Jane', age: 25 ,salary: 60000},
    {name: 'Doe', age: 35 ,salary: 70000}
];

console.log(emp);
console.log(emp[0]);
for(const e of emp){
    console.log(e.name);
    console.log(e.age);
    console.log(e.salary);
}