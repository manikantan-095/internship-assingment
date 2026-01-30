let num1 = 10;
if (num1 > 0) {
  console.log("The number is positive");
}


let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back");
}

let age = 17;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are too young to vote");
}

let number = 7;
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}


let day = "Monday";
switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day");
}

let grade = "B";
switch(grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good job");
    break;
  case "C":
    console.log("Needs improvement");
    break;
  default:
    console.log("Invalid grade");
}

let light = "Green";

switch(light) {
  case "Red":
    console.log("Stop!");
    break;
  case "Yellow":
    console.log("Get ready to stop");
    break;
  case "Green":
    console.log("Go");
    break;
  default:
    console.log("Invalid light color");
}

let fruit = "Apple";

switch(fruit) {
  case "Apple":
    console.log("Apples are sweet ");
    break;
  case "Banana":
    console.log("Bananas are full of energy");
    break;
  case "Mango":
    console.log("Mangoes are juicy and tropical");
    break;
  default:
    console.log("Unknown fruit");
}