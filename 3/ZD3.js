function recursiveSum(n) {
  if (n >= 1) {
    return n * (n + 1) / 2;
  }
  else {
    return n * (n - 1) / 2 + 1;
  }
}

console.log(recursiveSum(5));  
console.log(recursiveSum(-3));  
console.log(recursiveSum(-5)); 
