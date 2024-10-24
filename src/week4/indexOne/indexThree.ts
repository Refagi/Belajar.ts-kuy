function makanTerusRekursif(waktu: number): number {
  return waktu <= 5 ? 0 : makanTerusRekursif(waktu - 15) + 1
}

console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0