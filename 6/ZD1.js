function unique(arr) {
  return Array.from(new Set(arr));
}

let arr = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];
console.log(unique(arr)); 
