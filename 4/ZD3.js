function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}

console.log(truncate("Ось, що мені хотілося б сказати на цю тему:", 20));
console.log(truncate("Всього хорошого!", 20)); 
console.log(truncate("Привіт, світ!", 10)); 
console.log(truncate("Привіт!", 10)); 
