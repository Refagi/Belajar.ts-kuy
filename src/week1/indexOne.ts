let biner: number = 0b1010; 
console.log(biner); //10

let hexadecimal: number = 0xFA;
console.log(hexadecimal); //250

let oktal: number = 0o574;
console.log(oktal); //380


let tab: string = "reno\tfaza\tgivaro";
console.log(tab); //reno    faza    givaro

let petikSatu: string = "reno\'faza\'givaro";
console.log(petikSatu); //reno'faza'givaro

let petikDua: string = "reno\"faza\"givarao";
console.log(petikDua); //reno"faza"givarao

let garisMiring: string = "reno\\faza\\givaro";
console.log(garisMiring); //reno\faza\givaro 


let num: number = 10;
let count: string = num % 2 === 0 ? "genap" : "ganjil";
console.log(count);

//mengambil variable yang null atau undefined
let str;
let test: any = str ?? "waduh";
console.log(test) //waduh


let cek: [string, number] = ['', 5];
let test2: any = cek[0] || cek[1];
console.log(test2);
/*ini mencari nilai yang true karena '' adalah false maka yg diambil adalah 5*/


let obj: {name1: string, name2: string} = {
  name1: "dadang",
  name2: `''`,
};
let test3: any = obj.name1 && obj.name2;
console.log(test3); //''
//ini mencari nilai yang false


//custom type
type Person = {
  name: string;
  age: number;
  isHuman: boolean;
}
type Random = number | string; 

const detailPerson: Person = {
  name: "Budi subudi",
  age: 50,
  isHuman: true
}
const strResult: Random = "Nilai MTK saya " + 95; 

console.log(detailPerson);
console.log(strResult);


interface PersegiPanjnag {
  p: number;
  l: number;
};

interface Persegi extends PersegiPanjnag {
  s: number;
}

function kelilingPersegi(sisi: Persegi): number {
  return 4 * sisi.s;
}

function kelilingPersegipanjang(num: PersegiPanjnag): number{
  return 2 * (num.p + num.l);
}

const numItem : Persegi = {
  p: 10,
  l: 5,
  s: 6,
}

console.log("Keliling Persegi adalah: " + kelilingPersegi(numItem));
console.log(`Keliling Persegi adalah: ${kelilingPersegi(numItem)}`);

console.log("Keliling Persegi Panjang adalah: " + kelilingPersegipanjang(numItem));
console.log(`Keliling Persegi Panjang adalah: ${kelilingPersegipanjang(numItem)}`);


interface User {
  readonly id: number; // tidak bisa diubah
  name: string;
}

type UserType = {
  readonly id: number; // juga tidak bisa diubah
  name: string;
};