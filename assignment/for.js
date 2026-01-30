for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Blast off!");

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("The total sum is:", sum);

let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("I want to eat a " + fruits[i]);
}

let n = 5;
let result = 1;
for (let i = 1; i <= n; i++) {
  result *= i;
}
console.log(`Factorial of ${n} is: ${result}`);
