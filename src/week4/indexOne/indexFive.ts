function kaliTerusRekursif(num: number): number{
  if(num < 10){
    return num;
  } else {
    return kaliTerusRekursif(Array.from(String(num), Number).reduce((total, value) => total * value));
    //di dalam rekursif ubah number manjadi string lalu menjadi array number, lalu hitung jumlah perkalian setiap value
  }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6