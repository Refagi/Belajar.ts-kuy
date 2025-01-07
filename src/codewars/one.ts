const paperwork = (numOne: number, numTwo: number): number => {
  return numOne >= 0 && numTwo >= 0 ? numOne * numTwo : 0;
}

console.log(paperwork(5, 5))//25
console.log(paperwork(-5, 5))//0