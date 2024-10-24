const changeVocals = (str: string): string => {
  let vocal: {[key: string]: string} = {
    a:'b', i:'j', u:'v', e:'f', o:'p',
    A:'B', I:'J', U:'V', E:'F', O:'P'
  }
  return str.split('').map((value) => vocal[value] ? vocal[value] : value).join('');
}

const reverseWord = (str: string): string => {
  return Array.from(str).reverse().join('');
}

const setLowerUpperCase = (str: string): string => {
  return Array.from(str).map((value) => value == value.toLowerCase() ? value.toUpperCase() : value.toLowerCase()).join('');
}

const removeSpaces = (str: string): string => {
  return str.split(' ').join('');
}

const passwordGenerator = (str: string): string => {
  const firts: string = changeVocals(str);
  const second: string = reverseWord(firts);
  const third: string = setLowerUpperCase(second);
  const fourth: string = removeSpaces(third)
  return fourth.length <= 5 ? 'Minimal karakter yang diinputkan adalah 5 karakter' : fourth;
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'