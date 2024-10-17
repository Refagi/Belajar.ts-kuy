//1.)
function shoutOut(): string {
  return "Hello Fuanction!";
}
console.log(shoutOut());


//2.)
function calculateMultiply(num1: number,num2: number): number{
  return num1 * num2
}
let hasilPerkalian = calculateMultiply(8,5);
console.log(hasilPerkalian);


// 3.)
let names: string = "Agus";
let age: number = 30;
let address: string = "Jln. Malioboro, Yogjakarta";
let hobby: string = "gaming!";
let fullSentence1 = processSentence(names,age,address,hobby);
function processSentence(name: string, age: number, address: string, hobby: string){
    return `Nama saya ${name}, Umur saya ${age} tahun, Alamat saya di ${address}, dan Saya punya hobby yaitu ${hobby}`
}
console.log(fullSentence1); 