const totalDigitRekursif = (num: number): number => {
  return num <= 10 ? num : (num % 10) + totalDigitRekursif(Math.floor(num / 10));
}

console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5