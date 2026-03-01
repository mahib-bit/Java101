for (let i = 0; i < 10; i++) {
  console.log(i);
  if(i>5) {
    break;
  }
}
let n = 54;
while(n>25) {
console.log(n);
    if(n<50) {
    break;
}
n--;
}

for (let i = 0; i < 10; i++) {
  if(i%2===0) {
    continue;
  }
  console.log(i);
}