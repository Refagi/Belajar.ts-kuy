//1.)
type Banding = boolean | number;
function bandingkanAngka(num1: number, num2: number): Banding {
  if(num1 < num2){
    return true;
  } else if (num1 === num2){
    return -1;
  } else {
    return false;
  }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false


//2.)
function balikKata(kata: string): string {
  let result: string = "";
  for(let i: number = kata.length - 1; i >= 0; i--){
    result += kata[i];
  }
  return result;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS



//3.)
function konversiMenit(num: number): string {
  let jam: number = Math.floor(num / 60);
  let menit: number = num % 60;
  if(menit < 10){
    return `${jam}:0${menit}`;
  } else {
    return `${jam}:${menit}`;
  }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00




//4.)
type XOX = boolean | null;
function xo(str: string): XOX{
  let O = 0;
  let X = 0;
  for(let i: number = 0; i < str.length; i++){
    if(str[i].toLowerCase() === 'o'){
      O++;
    } else if (str[i].toLowerCase() === 'x'){
      X++;
    } else {
      return null;
    }
  }
  return O === X
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('awokwokwok')); // contoh jika ada selain x dan o maka hasilnya null