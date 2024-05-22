function isEmpty(obj) {
    for (let key in obj) {
      // Якщо об'єкт має хоча б одну властивість, повертаємо false
      return false;
    }
    // Якщо жодної властивості немає, повертаємо true
    return true;
  }

  let schedule = {};
  alert(isEmptu(schedule));
  schedule["8:30"] = "Вставай";
  alert(isEmpty(schedule));