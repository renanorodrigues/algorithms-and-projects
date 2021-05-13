function palindromo(s) {
  const char = [...s];
  const charLength = char.length;
  const isEqualLetter = (letterA, letterB) => letterA === letterB;
  let equalChar = true;
  let i = charLength - 1;

  for (let index = 0; index < Math.floor(charLength / 2); index++) {
    let pairLetter = char[i];
    if(!isEqualLetter(char[index], pairLetter)){
      equalChar = false;
    }
    if(!equalChar)break;
    i--;
  }

  if(equalChar){
    return "é palíndromo";
  }else{
    return "não é palíndromo";
  }
}

palindromo('radar');