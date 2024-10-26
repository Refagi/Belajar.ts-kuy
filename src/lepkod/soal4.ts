type ParamsSoal1 = {
  [key: string]: number
}
function duplicateCount(str: string): number {
  let equal: ParamsSoal1 = {}
  let result: number = 0;
  for(let key of str.toLowerCase()){
    !equal[key] ? equal[key] = 1 : equal[key]++
  }
  for(let key in equal){
    if(equal[key] > 1) result++; 
  }
  return result
}

console.log(duplicateCount("")) //0
console.log(duplicateCount("abcde")) //0
console.log(duplicateCount("aabbcde")) //2
console.log(duplicateCount("aabBcde")) //2
console.log(duplicateCount("Indivisibility")) //1
console.log(duplicateCount("Indivisibilities")) //2
console.log(duplicateCount("abcabcdABcefGhg")) //4