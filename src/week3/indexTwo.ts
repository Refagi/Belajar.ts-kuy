// 1.)
function digitPerkalianMinimum(num: number): number {
  let minDigits: number = Number.MAX_VALUE;
  //loop memakai batas dari akar num misal num = 24 akarnya = 4 (untuk mempercepat)
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // Cari pasangan faktornya
      let j = num / i;
      
      // Hitung jumlah digit dari i dan j
      let digitCount = `${i}${j}`.length;
      
      // Update nilai minimum
      minDigits = Math.min(minDigits, digitCount);
    }
  }
  return minDigits;
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


// 2.)
const urutkanAbjad = (str: string): string => {
  let change: string[] = str.split('');
  for(let i: number = 0; i < change.length; i++){
    for(let j: number = 0; j < change.length; j++){
      if(change[j] > change[j + 1]){
        let patch: string = change[j + 1];
        change[j + 1] = change[j];
        change[j] = patch;
      }
    }
  }
  return change.join('');
}

console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'



// 3.)
function tukarBesarKecil(str: string): string {
  let change: string[] = str.split('');
  let result: string = '';
  for(let key of change){
    if(key === key.toLowerCase()){
      result += key.toUpperCase();
    } else {
      result += key.toLowerCase();
    }
  }
  return result;
}

console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


//4.)
  /*
  Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
  function tersebut mengembalikan nilai true jika di dalam string tersebut 
  terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
  Jika tidak ditemukan sama sekali, kembalikan nilai false.
  Jarak bisa dari a ke b, atau b ke a.
  
  contoh:
  barbarian kenapa bisa true?
  karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a
  
  Spasi juga dianggap sebagai karakter
  */
const checkAB = (str: string): boolean => {
  let change: string = str.toLowerCase();
  let isResult: boolean = false;
  for(let i: number = 0; i < change.length; i++){
    if(change[i] === 'a' && change[i + 4] === 'b'){
      isResult = true;
    } else if (change[i] === 'b' && change[i + 4] === 'a'){
      isResult = true;
    }
  }
  return isResult;
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false