const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.trim().split("\n");

var firstColumn = [];
var secondColumn = [];
var firstAnswer = 0;
var secondAnswer = 0;

lines.forEach(element => {
  var numbers = element.split("   ").map(Number);
  
  firstColumn.push(numbers[0]);
  secondColumn.push(numbers[1]);
});

firstColumn.sort(function(a,b){return a - b});
secondColumn.sort(function(a,b){return a - b});


for (let index = 0; index < firstColumn.length; index++) {
  // calcular diferencias
  firstAnswer += Math.abs(firstColumn[index] - secondColumn[index]);

  // calcular frecuencias
  counter = 0;
  secondColumn.forEach(element => {
    if(element == firstColumn[index])
      counter++;
  });
  secondAnswer += firstColumn[index] * counter;
}

console.log(firstAnswer);
console.log(secondAnswer);
