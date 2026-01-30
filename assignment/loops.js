let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let sum = 0;
let j = 1;
while (j <= 10) {
  sum = sum + j;
  j++;
}
console.log(sum);

let k = 2;
while (k <= 10) {
  console.log(k);
  k += 2;
}

let n = 5;
while (n > 0) {
  console.log(n);
  n--;
}

let word = "cat";
let rev = "";
let idx = word.length - 1;
while (idx >= 0) {
  rev = rev + word[idx];
  idx--;
}
console.log(rev);

let num = 4;
let fact = 1;
while (num > 0) {
  fact = fact * num;
  num--;
}
console.log(fact);

let arr = ["a", "b", "c"];
let pos = 0;
while (pos < arr.length) {
  console.log(arr[pos]);
  pos++;
}

let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

let total = 0;
let b = 1;
do {
  total = total + b;
  b++;
} while (b <= 5);
console.log(total);

let c = 1;
do {
  console.log(c);
  c += 2;
} while (c <= 9);

let d = 3;
do {
  console.log(d);
  d--;
} while (d > 0);

let x = 10;
do {
  console.log("runs once");
  x++;
} while (x < 5);

let i1 = 1;
do {
  console.log("hello");
  i1++;
} while (i1 <= 3);

let fruits = ["apple", "mango", "pear"];
let f = 0;
do {
  console.log(fruits[f]);
  f++;
} while (f < fruits.length);