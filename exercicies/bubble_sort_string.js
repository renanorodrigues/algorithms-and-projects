const bubble_sort = (arr) => {
  let chars = [...arr];
  const length = chars.length;

  for (let index = 0; index < length - 1; index++) {
    for (let i = 0; i < length - 1; i++) {
      if(chars[i].charCodeAt() > chars[i + 1].charCodeAt()){
        let aux = chars[i + 1];
        chars[i + 1] = chars[i];
        chars[i] = aux;
      }     
    }
  }

  return chars.join('');
}

bubble_sort("Bolsobosta");