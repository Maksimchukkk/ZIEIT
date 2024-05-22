function ucFirst(str) {
    if (!str) return str; 
    
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  console.log(ucFirst("hello")); 
  console.log(ucFirst("world")); 
  console.log(ucFirst(""));      