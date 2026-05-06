const person = {
    name: "Ananta Jalil",
    age: 40,
    friends: ["bd", "CN", "Hero Alom"],
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

const jsonData = JSON.stringify(person);
// console.log(jsonData)

const revJsonData = JSON.parse(jsonData);
console.log(revJsonData)

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

//just fetching key and values
const keys = Object.keys(person);
const values = Object.values(person);
console.log(values)

const products = [
    {
        name: "redmi", brand: "xiaomi", price: 3000,
        color: "black"
    },
    {
        name: "sam", brand: "samsung", price: 5000,
        color: "white"
    },
    {
        name: "apple1", brand: "apple", price: 0,
        color: "gold"
    },
    {
        name: "apple1", brand: "apple", price: 5000,
        color: "gold"
    },
    {
        name: "apple2", brand: "apple", price: 5000,
        color: "gold"
    },
    {
        name: "apple2", brand: "apple", price: 5000,
        color: "gold"
    },
    {
        name: "redmi2", brand: "xiaomi", price: 2000,
        color: "black"
    }
];
const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "gray"
}

const newArray = [...products, newData]

const newArray = [...products, newData];
const remainingProducts = products.filter(p => p.brand !== "xiaomi");
console.log(remainingProducts);