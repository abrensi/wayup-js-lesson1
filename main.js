// Задание 1

let town = 'Алматы';
let country = 'Казахстан';
let population = 18_000_000;
let footballField = true;

// Задание 2 

let a = 40;
let b = 70;
let result = a * b;

// Задание 3 

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let sum = speedOfFirst + speedOfSecond;

let distance = sum * time;

// Задание 4 

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
  console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
  console.log('randomNumber больше 50');
} else {
  console.log('randomNumber меньше 20, и больше 50');
}

// Задание 5 

switch (true) {
  case (randomNumber < 20):
    console.log('randomNumber меньше 20');
    break;
  case (randomNumber > 50):
    console.log('randomNumber больше 50');
    break;
  default:
    console.log('randomNumber меньше 20, и больше 50');
    break;
}