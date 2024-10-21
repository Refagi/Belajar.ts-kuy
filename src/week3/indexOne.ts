// 1.)
function angkaPrima(num: number): boolean {
  if(num <= 1) return false;
  for(let i: number = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); // false



// 2.)
const fpb = (numOne: number, numTwo: number): number => {
  let patch: number[] = [];
  for(let i: number = 0; i < numOne; i++){
    if(numOne % i === 0 && numTwo % i === 0){
      patch.push(i);
    }
  }
  return Math.max(...patch);
}

console.log(fpb(6, 4)); // 2
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1



// 3.)
function cariMedian(num: number[]): number{
  num.sort((a, b) => a - b);
  let result: number = 0;
  let count: number = Math.floor(num.length / 2);
  if(num.length % 2 !== 0){
    result = num[count];
  } else {
    result = (num[count] + num[count - 1]) / 2;
  }
  return result;
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
console.log(cariMedian([5, 4, 6, 4])); // 4.5



// 4.)
const cariModus = (num: number[]): number => {
  num.sort((a, b) => a - b);
  let patch: {[key: number]: number} = {}
  let result: number = -1;
  let max: number = 0;
  let check: number = 0;
  for(let i: number = 0; i < num.length; i++){
    if(patch[num[i]]){
      patch[num[i]]++;
    }else {
      patch[num[i]] = 1;
    }
  }

  for(let key in patch){
    if(patch[key] > max){
      check += patch[key];
      max = patch[key];
      result = parseInt(key);
    }
  }
  if(result <= 1 || check == num.length) return -1;

  return result;
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1



// 5.)
function ubahHuruf(str: string): string {
  let pacth: number[] = [];
  for(let i: number = 0; i < str.length; i++){
    let changeAscii: number = str.charCodeAt(i) + 1;  //ubah kata kedalam angka ASCII perhuruf (+ 1) agar menuju ke urutan huruf selanjutmya
    pacth.push(changeAscii);
  }
  return String.fromCharCode(...pacth); //ubah kembali angka ASCII ke dalam huruf
}


console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu