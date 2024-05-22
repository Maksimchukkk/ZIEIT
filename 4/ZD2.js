function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('росі') || lowerStr.includes('xxx');
}

console.log(checkSpam("Привіт, як справи?")); // false
console.log(checkSpam("Це важлива інформація для росії")); // true
console.log(checkSpam("Це XXX-відео")); // true