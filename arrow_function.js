const multiply = (a,b) => a* b;

const result = multiply(5, 10);
console.log(result);

// multi line arrow function
const doMath = (x, y) => {
const makeDouble = x*2;
const againDouble = y*2;
const result2 = makeDouble + againDouble;
return result2;
}
const res = doMath(5, 10);
console.log(res);