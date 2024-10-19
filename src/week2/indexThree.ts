//1.)
function cariMean(num: number[]): number | string{
  let count: number = num.reduce((sum, value) => sum + value, 0);
  return Math.round(count / num.length);
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7



//2.)
const perkalianUnik = (num: number[]): number[] => {
  let count: number = num.reduce((sum, value) => sum * value, 1);
  let result: number[] = num.map((value) => count / value);
  return result;
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]



// 3.)
function tentukanDeretAritmatika(num: number[]): boolean {
  let checkFirst: number = num[1] - num[0];
  for(let i: number = 0; i < num.length - 1; i++){
    let checkSecond: number = num[i + 1] - num[i];
    if(checkSecond !== checkFirst){
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 4, 7, 10, 13])); // false



// 4.)
const tentukanDeretGeometri = (num: number[]): boolean => {
  let checkFirst: number = num[1] / num[0];
  for(let i: number = 0; i < num.length - 1; i++){
    let checkSecond: number = num[i + 1] / num[i];
    if(checkSecond !== checkFirst){
      return false;
    }
  }
  return true;
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false