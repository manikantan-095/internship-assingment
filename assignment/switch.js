let dayNum = 2;
switch (dayNum) {
  case 0: console.log("Sunday"); break;
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Another day");
}

let light = "green";
switch (light) {
  case "red": console.log("Stop"); break;
  case "yellow": console.log("Slow down"); break;
  case "green": console.log("Go"); break;
}

let fruit = "Apple";
switch (fruit) {
  case "Apple": console.log("$2 per kg"); break;
  case "Banana": console.log("$1 per kg"); break;
  default: console.log("Fruit not in stock");
}

let grade = "B";
switch (grade) {
  case "A": console.log("Excellent!"); break;
  case "B": console.log("Good job!"); break;
  case "C": console.log("Well done!"); break;
  default: console.log("Keep trying!");
}

let pet = "dog";
switch (pet) {
  case "dog":
  case "cat":
    console.log("This is a common house pet.");
    break;
  default:
    console.log("This is an exotic pet.");
}

let op = "+";
let a = 10, b = 5;
switch (op) {
  case "+": console.log(a + b); break;
  case "-": console.log(a - b); break;
  default: console.log("Unknown operator");
}

let role = "admin";
switch (role) {
  case "admin": console.log("Full access granted"); break;
  case "editor": console.log("Edit access granted"); break;
  default: console.log("View only access");
}
