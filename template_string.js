const poem = `quick brown fox 
jumps over the lazy dog
and runs away`;

console.log(poem);

function sum(num1, num2) {
    const result = num1 + num2;
    const output = 'The sum of' + num1 + ' and' + num2 + ' is' + result;
    const output2 = `The sum of ${num1} and ${num2} is ${result}`;
    console.log(output);
    console.log(output2);
}

sum(5, 10);