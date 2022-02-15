Homeworks.aufgabe = 1;

console.log("BEGIN");
let greeting = "Hallo Benno";
const greet = "Hallo";
let check;
toDo();
let lampe;

function init() {
  console.log(greet);
  greeting = 17;
  // greet = 17;
  check = "Benno";
  console.log(check);
  toDo();
  lampe = document.getElementById("lightbulb");
  console.log(lampe);
}

function toDo() {
  console.log(greeting);
  console.log(check);
}

console.log("END");
