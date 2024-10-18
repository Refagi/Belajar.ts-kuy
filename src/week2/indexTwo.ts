// 1.)
function palindrome(str: string): boolean {
  let reverseStr: string[] = str.toLowerCase().split("");
  const joinStr: string = reverseStr.reverse().join("");
  return joinStr === str ? true : false;
}

// console.log(palindrome("katak")); // true
// console.log(palindrome("blanket")); // false
// console.log(palindrome("civic")); // true
// console.log(palindrome("kasur rusak")); // true
// console.log(palindrome("mister")); // false

//2.)
const angkaPalindrome = (num: number): number => {
  let increas: number = num + 1;
  while (true) {
    let changeNum: string = increas.toString().split("").reverse().join("");
    if (parseInt(changeNum) === increas) {
      return increas;
    } else {
      increas++;
    }
  }
  // return `${parseInt(changeNum)} == ${increas}`;
};

// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001

// 3.)
function hitungJumlahKata(str: string): number {
  let patch: string[] = str.split(" ");
  return patch.length;
}

// console.log(hitungJumlahKata('I have a dream knawbf')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5

//4.)
const pasanganTerbesar = (num: number): number => {
  let lengthNum: string[] = num.toString().split("");
  let count: number = 0;

  for (let i: number = 0; i < lengthNum.length - 1; i++) {
    let patch: string = lengthNum[i] + lengthNum[i + 1];
    if (parseInt(patch) > count) {
      count = parseInt(patch);
    }
  }
  return count;
};

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
