function countOccurrences(arr) {
  let map = new Map();

  for (let num of arr) {
      if (map.has(num)) {
          map.set(num, map.get(num) + 1);
      } else {
          map.set(num, 1);
      }
  }

  return map;
}

let numbers = [1, 2, 3, 4, 3, 2, 1, 1, 5, 6, 6, 6];
console.log(countOccurrences(numbers)); 
