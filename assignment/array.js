let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);

let numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let colors = ["red", "blue"];
colors.push("green");
console.log(colors);

let animals = ["dog", "cat", "cow"];
animals.pop();
console.log(animals);

let nums = [2, 4, 6];
let doubled = nums.map(function(n) {
  return n * 2;
});
console.log(doubled);