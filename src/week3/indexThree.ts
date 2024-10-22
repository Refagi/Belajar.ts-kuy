// 1.)
type OutputChangeMe = {[key: string]: string | number} | string;
type ParamsChangeMe = (string | number)[][];

function changeMe(arr: ParamsChangeMe): void{
  if(arr.length < 1) console.log(`""`);

  for(let i: number = 0; i < arr.length; i++){
    let count: number | string = arr[i][3];
    let fullname: string = `${arr[i][0]} ${arr[i][0]}`
    let age: number | string = typeof count === 'number' ? 2023 - count : 'Invalid Birth Year';
    let result: OutputChangeMe = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: age,
    }

    console.log(`${fullname}: `);
    console.log(result);
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""



// 2.)
type OutputShooping = {[key: string]: string | number | string[] };
type DataItem = {[key: string]: number};
const shoppingTime = (memberId: string, money: number): string | OutputShooping => {
  let item: DataItem = {
    "Sepatu Stacattu": 1_500_000,
    "Baju Zoro": 500_000,
    "Baju H&N": 250_000,
    "Sweater Uniklooh": 175_000,
    "Casing Handphone": 50_000,
  };
  let isMoney: number = money;
  let isItemBuy: string[] = [];
  if(!memberId) return "Mohon maaf, toko X hanya berlaku untuk member saja!";
  if(isMoney < 50_000) return "Mohon maaf, uang tidak cukup!";

  for(let key in item){
    if(isMoney >= item[key]){
      isItemBuy.push(key);
      isMoney -= item[key];
    }
  }
  
  return {
    memberId,
    money,
    listPurchased: isItemBuy,
    changeMoney: isMoney
  }
}

console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime("", 0)); ////Mohon maaf, toko X hanya berlaku untuk member saja



// 3.)
// type TypeData = number | string | string[] | number[];
// type OutputCountProfit = {[key: string]: TypeData }[];
// interface Params {
//   name?: string;
//   product?: string;
//   amount?: number;
// }
// type TypeItems = [string, number, number][]
// function countProfit(shopper: Params[]): OutputCountProfit {
//   let listBarang: TypeItems= [ 
//   ['Sepatu Stacattu', 1_500_000, 10],
//   ['Baju Zoro', 500_000, 2],
//   ['Sweater Uniklooh', 175_000, 1]
// ];

// interface Person {
//   product: string;
//   shoppers: string[];
//   leftOver: number;
//   totalProfit: number; 
// };

// let result: Person[] = [];

// for(let i: number = 0; i < listBarang.length; i++){
//   let patchItems: Person = {
//     product: listBarang[i][0],
//     shoppers: [],
//     leftOver: listBarang[i][2],
//     totalProfit: 0,
//   }

//   for(let key of shopper){
//     if(key.product === patchItems.product && key.amount && key.amount <= patchItems.leftOver){
//       patchItems.shoppers.push(key.name);
//       patchItems.leftOver -= key.amount;
//       patchItems.totalProfit += key.amount * listBarang[i][1];
//     }
//   }

//   result.push(patchItems);
// }

// return result
// }

// interface Person {
//   product: string;
//   shoppers: string[];
//   leftOver: number;
//   totalProfit: number;
//   [key: string]: TypeData; // tambahkan type data dari type OutputCountProfit
// }
// type TypeData = number | string | string[] | number[];
type OutputCountProfit = {
  product: string;
  shoppers: string[];
  leftOver: number;
  totalProfit: number;
};

interface Params {
  name?: string;
  product?: string;
  amount?: number;
}
type TypeItems = [string, number, number][];

function countProfit(shopper: Params[]): OutputCountProfit[] {
  if(shopper.length < 1) return []

  let listBarang: TypeItems = [
    ['Sepatu Stacattu', 1_500_000, 10],
    ['Baju Zoro', 500_000, 2],
    ['Sweater Uniklooh', 175_000, 1],
  ];

  let result: OutputCountProfit[] = [];

  // Loop setiap barang
  for (let i: number = 0; i < listBarang.length; i++) {
    let patchItems: OutputCountProfit = {
      product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0,
    };

    // Loop setiap shopper
    for (let key of shopper) {
      // Pastikan product dan amount tidak undefined sebelum digunakan
      if (key.product === patchItems.product && key.amount && key.amount <= patchItems.leftOver) {
        patchItems.shoppers.push(key.name || ''); // Pastikan nama tidak undefined
        patchItems.leftOver -= key.amount;
        patchItems.totalProfit += key.amount * listBarang[i][1];
      }
    }

    result.push(patchItems);
  }

  return result;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [ 'Windi' ],
  // //     leftOver: 2,
  // //     totalProfit: 1200000 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [ 'Devi', 'Lisa' ],
  // //     leftOver: 0,
  // //     totalProfit: 1000000 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [ 'Rani' ],
  // //     leftOver: 0,
  // //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [],
  // //     leftOver: 10,
  // //     totalProfit: 0 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [],
  // //     leftOver: 2,
  // //     totalProfit: 0 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [],
  // //     leftOver: 1,
  // //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]