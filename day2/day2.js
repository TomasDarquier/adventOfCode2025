const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.trim().split("\n");

const unsafeReports = lines.filter(line => !isValidSequence(parseNumbers(line))).length;

const answer = lines.length - unsafeReports;
console.log(answer);

function parseNumbers(line) {
  return line.split(" ").map(Number);
}

function isValidSequence(numbers) {
  const isAscending = numbers[0] < numbers[1];
  let toleration = true;

  return numbers.every((currentNumber, i) => {
    if (i === 0) return true; // Saltar el primer número

    const prevNumber = numbers[i - 1];
    const difference = Math.abs(prevNumber - currentNumber);

    // Verificar las reglas
    if (difference > 3 || difference === 0 || (prevNumber < currentNumber) !== isAscending) {
      if (toleration) {
        toleration = false; 
        return true;
      }
      return false; 
    }

    return true; 
  });
}

