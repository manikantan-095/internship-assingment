let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

let hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

let temp = 105;
if (temp <= 0) {
  console.log("Solid (Ice)");
} else if (temp < 100) {
  console.log("Liquid (Water)");
} else {
  console.log("Gas (Steam)");
}

let weight = 22; // Example BMI value
if (weight < 18.5) {
  console.log("Underweight");
} else if (weight < 25) {
  console.log("Normal weight");
} else {
  console.log("Overweight");
}

let age = 15;
if (age < 12) {
  console.log("Ticket Price: $5");
} else if (age < 60) {
  console.log("Ticket Price: $10");
} else {
  console.log("Ticket Price: $7");
}

let dayNumber = 6;
if (dayNumber < 6) {
  console.log("It is a weekday.");
} else if (dayNumber == 6) {
  console.log("It is Saturday!");
} else {
  console.log("It is Sunday!");
}

let battery = 50;
if (battery == 100) {
  console.log("Battery is full.");
} else if (battery == 0) {
  console.log("Battery is dead.");
} else {
  console.log("Battery is in use.");
}
