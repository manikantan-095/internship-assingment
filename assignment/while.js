let i = 1;
while (i <= 5) {
  console.log(i);
  i++; 
}

let count = 10;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}
console.log("Blast off!");

let sum = 0;
let n = 1;
while (n <= 10) {
  sum += n;
  n++;
}
console.log("Total Sum:", sum);

const colors = ["Red", "Green", "Blue"];
let index = 0;
while (index < colors.length) {
  console.log("Color:", colors[index]);
  index++;
}

let age = 23;
while (!age || age < 18) {
  age = prompt("Please enter your age (must be 18+):");
}
console.log("Access granted.");

let value = 1;
while (value < 100) {
  console.log(value);
  value *= 2;
}
 