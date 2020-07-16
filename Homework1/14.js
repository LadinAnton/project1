function inArray(line, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == line) return true;
    }
    return false;
  }
   
  console.log(inArray('Аа', ['Ая', 'ЗЗ', 'Гл', 'хЧ']));