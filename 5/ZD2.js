function sumInput() {
  let numbers = [];
  while (true) {
      let input = prompt("Введіть число", 0);

      if (input === null || input.trim() === '' || isNaN(input)) {
          break;
      }

      numbers.push(Number(input));
  }

  let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}

alert("Сума введених чисел: " + sumInput());