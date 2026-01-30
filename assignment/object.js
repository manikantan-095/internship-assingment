let person = {
  name: "Ali",
  age: 22
};
console.log(person.name);

let car = {
  brand: "Toyota",
  start: function() {
    console.log("Car started!");
  }
};
car.start();

let student = {
  name: "Sara",
  marks: {
    math: 90,
    english: 85
  }
};
console.log(student.marks.math);

let book = {
  title: "JS Basics",
  pages: 200
};
book.pages = 250;
console.log(book.pages);

let shop = {
  items: ["pen", "pencil", "eraser"]
};
console.log(shop.items[1]);