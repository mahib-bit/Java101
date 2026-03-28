/* JavaScript Variables
1. const --> values wont change
2. let --> values can change
3. var --> should not use (unless exceptional cases)
*/

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

const prices = [10, 20, 30, 40, 50];

// let k=0;
// while(k <prices.length) {
//     console.log(prices[k]);
//     k++;
// }

for(let i= prices.length-1;i>=0;i--) {
    console.log(prices[i]);
}