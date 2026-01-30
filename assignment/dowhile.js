let p = 1;
do {
  console.log(p);
  p++;
} while (p <= 5);

let i = 3;
do {
  console.log(i);
  i--;
} while (i > 0);

let count = 10;
do {
  console.log(count);
  count += 10;
} while (count <= 50);

let x = 10;
do {
  console.log("This will print exactly once, even though 10 is not less than 5.");
} while (x < 5);

let count1 = 1;

do {
  console.log("Hello");
  count++;
} while (count1 <= 3);

let g = 1, sum = 0;

do {
  sum += g;
  g++;
} while (g <= 3);

console.log(sum);

let str = "Hi";
let d = 0;

do {
  console.log(str[d]);
  d++;
} while (d < str.length);

