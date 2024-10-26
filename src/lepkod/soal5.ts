function piramid2(num: number): void {
  for(let i: number = num; i >= 1; i--){
    let patchOne: string = '';
    for(let j: number = 1; j <= i; j++){
      patchOne += i;
    }
    console.log(patchOne)
  }
  for(let k: number = 2; k <= num; k++){
    let patchTwo: string = '';
    for(let h: number = 1; h <= k; h++){
      patchTwo += k;
    }
    console.log(patchTwo)
  }
}
piramid2(5)
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */