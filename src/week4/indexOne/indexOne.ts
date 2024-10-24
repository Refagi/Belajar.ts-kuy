// 1.)
// menggunakan quick sort algorithm
function sorting(num: number[]): number[]{
  if (num.length <= 1) {
    return num;
}

const pivot: number = num[0];
const left: number[] = [];
const right: number[] = [];
for (let i = 1; i < num.length; i++) {
    if (num[i] < pivot) {
        left.push(num[i]);
    } else {
        right.push(num[i]);
    }
}

return [...sorting(left), pivot, ...sorting(right)];
}

function getTotal(num: number[]): string | number{
  let isBigest: number = Math.max(...num);
  let count: number = 0;
  num.forEach((value) => {
    if(value === isBigest){
      count++
    }
  })
  return num.length === 0 ? `''` : `angka paling besar adalah ${isBigest} dan jumlah kemunculan sebanyak ${count} kali`
}

function mostFrequentLargestNumbers(arrNumber: number[]): string | number {//hasil dari dua fungsi diatas, dimasukan kedalam variable didalam
  let listSort: number[] = sorting(arrNumber);//fungsi yg berbeda 
  let countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''