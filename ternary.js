const num = 10;
const result = (num >= 10 && num < 20) ? "true" : "false";
console.log(result)

const isActive = true;
const showUser = () => console.log("show user green");
const hideUser = () => console.log("Hide user ");
// isActive ? showUser(): hideUser();
isActive && showUser(); 

let number = 10;
const result2 = 10+"" 
console.log(typeof result2);

const res = number -3 ;
console.log(typeof res);