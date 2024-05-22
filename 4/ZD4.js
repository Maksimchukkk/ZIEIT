function strikeStr(str) {
  const words = str.split(' '); 
  const maxWordsPerLine = 3; 
  let result = '';
  
  for (let i = 0; i < words.length; i += maxWordsPerLine) {
    const line = words.slice(i, i + maxWordsPerLine).join(' ');
    result += line + '\n';
  }

  return result.trim();
}


console.log(strikeStr("Ось приклад рядка який містить більше ніж три слова"));
console.log(strikeStr("Це короткий рядок"));
console.log(strikeStr("Ще один приклад з великою кількістю слів для перевірки"));
