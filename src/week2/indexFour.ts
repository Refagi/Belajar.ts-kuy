// 1.)
function targetTerdekat(num: string[]): number {
  let indexO: number = -1;
  let distanceNear: number = Number.MAX_VALUE; //inialisasi jarak terdekat dengan max value di awal
  for(let i: number = 0; i < num.length - 1; i++){
    if(num[i].toLowerCase() === 'o'){
      indexO = i; //jika ketemu o maka isi index o
    } else if (num[i].toLowerCase() === 'x'){
      let indexX: number = Math.abs(i - indexO); //jika ketemu x maka isi kedalam variable index x nya dan hitung jaraknya
      distanceNear = indexX;
      break;
      // distanceNear = Math.min(distanceNear, indexX) begini juga bisa
    }
  }
  if(distanceNear == Number.MAX_VALUE){
    return 0;
  }
  return distanceNear;
}


console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2



// 2.)
const mengelompokkanAngka = (num: number[]): number[][] => {
  let patchOne: number[] = [];
  let patchTwo: number[] = [];
  let patchThree: number[] = []
  num.forEach((value) => {
    if(value % 3 === 0){
      patchThree.push(value);
    } else if (value % 2 === 0){
      patchOne.push(value)
    } else {
      patchTwo.push(value)
    }
  })
  return [patchOne, patchTwo, patchThree];
}
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]



// 3.)
function groupAnimals(str: string[]): string[][] {
  str.sort();
  let patch: string[] = [str[0]];
  let result: string[][] = [];
  for(let i: number = 1; i < str.length; i++){
    if(str[i][0] === patch[0][0]){
      patch.push(str[i])
    } else {
      result.push(patch)
      patch = [str[i]];
    }
  }
  result.push(patch);
  return result;
};

console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "angsa"])
);
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
/*
[
  [ 'anoa', 'ayam' ],
  [ 'cacing', 'cicak' ],
  [ 'kancil', 'kuda' ],
  [ 'unta' ]
]
*/