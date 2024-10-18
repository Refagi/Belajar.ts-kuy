
class IndexOne {
  inputOne: string[][]= [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
  ];

  inputTwo = [
    "0001",
    "Roman Alamsyah ",
    "Bandar Lampung",
    "21/05/1989",
    "Membaca",
  ];

  dataHandlingOne(): void {
    for(let i: number = 0; i < this.inputOne.length; i++){
      for(let j: number = 0; j < this.inputOne[i].length; j++){
        if(j == 0){
          console.log(`Nomor ID: ${this.inputOne[i][j]}`);
        } else if (j == 1){
          console.log(`Nama lengkap: ${this.inputOne[i][j]}`);
        } else if (j == 2){
          console.log(`TTL: ${this.inputOne[i][j] + this.inputOne[i][j+1]}`);
          continue;
        } else if(j == 4){
          console.log(`Hobi: ${this.inputOne[i][j]} \n`);
        } 
      }
    }
  }

  dataHandlingTwo(): void {
    this.inputTwo.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(this.inputTwo);

    let getMounth: string = this.inputTwo[3];
    let changeDate: string[] = getMounth.split("/");
    
    let mounth: string = changeDate[1] === "05" ? "Mei" : "Not Mei";
    console.log(mounth);

    let formatMounth: string[] = [changeDate[2], changeDate[0], changeDate[1]];
    console.log(formatMounth);

    let changeFormatMounth: string = changeDate.join('-');
    console.log(changeFormatMounth);

    console.log(this.inputTwo[1].slice(0, 15));
  }
}

const testCase = new IndexOne();
testCase.dataHandlingOne(); 
/*
  output yang diharapkan
  
  Nomor ID:  0001
  Nama Lengkap:  Roman Alamsyah
  TTL:  Bandar Lampung 21/05/1989
  Hobi:  Membaca
  
  Nomor ID:  0002
  Nama Lengkap:  Dika Sembiring
  TTL:  Medan 10/10/1992
  Hobi:  Bermain Gitar
  
  Nomor ID:  0003
  Nama Lengkap:  Winona
  TTL:  Ambon 25/12/1965
  Hobi:  Memasak
  
  Nomor ID:  0004
  Nama Lengkap:  Bintang Senjaya
  TTL:  Martapura 6/4/1970
  Hobi:  Berkebun
  */

testCase.dataHandlingTwo();
/**
   * keluaran yang diharapkan (pada console)
   *
   * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
   * Mei
   * ["1989", "21", "05"]
   * 21-05-1989
   * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
   */