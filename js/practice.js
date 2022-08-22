// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// function checkNumber(value, ...numbers) {
//   console.log(value);
//   console.log(numbers);
//   return numbers.includes(value);
// }
// console.log(checkNumber(1, 2, 3, 4, 5, 1));

// const aBC = [
//   [0, 1],
//   [2, 3],
// ].reduce((acc, cur) => acc.concat(cur), [1, 2]);

// console.log(aBC);

function includes(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
);
