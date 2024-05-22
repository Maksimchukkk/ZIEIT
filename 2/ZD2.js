function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  let schedule = {};
  alert(isEmptu(schedule));
  schedule["8:30"] = "Вставай";
  alert(isEmpty(schedule));