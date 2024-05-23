function areAllElementsUnique(arr) {
  let uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
}

console.log(areAllElementsUnique([1, 2, 3, 4, 5]));
console.log(areAllElementsUnique([1, 2, 3, 4, 5, 3]));
