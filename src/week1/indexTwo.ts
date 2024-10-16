
function proxytia(name: string, role: string): void {
  if(!name){
    console.log("nama wajib diisi!");
  }
  
  if (!role){
    console.log("Pilih Peranmu untuk memulai game");
    console.log("-----Ksatria-----");
    console.log("-----Tabib-----");
    console.log("-----Penyihir-----");
  } else if (role.toLowerCase() == 'ksatria'){
    console.log(`halo Ksatria ${name} , kamu dapat menyerang dengan senjatamu!`);
  } else if (role.toLowerCase() == 'tabib'){
    console.log(`halo Tabib ${name} , kamu akan membantu temanmu yang terluka`);
  } else if (role.toLowerCase() == 'penyihir'){
    console.log(`halo Penyihir ${name} , ciptakan keajaiban yang membantu kemenanganmu!`)
  } else {
    console.log(`${name} role tidak tersedia!`);
  }
}

proxytia("Dhormo", "Ksatria");






function cetakTanggal (taggal: number, bulan: number, tahun: number): void {
  let result: string | number;

  if(taggal >= 1 && taggal <= 31 && tahun >= 1900 && tahun <= 2024){
    switch(bulan){
      case bulan = 1:
        result =`${taggal}-Januari-${tahun}`; 
        break;
      case bulan = 2:
        result =`${taggal}-Februari-${tahun}`;
        break;
      case bulan = 2:
        result =`${taggal}-Maret-${tahun}`;
        break;
      case bulan = 3:
        result =`${taggal}-April-${tahun}`;
        break;
      case bulan = 4:
        result =`${taggal}-Mei-${tahun}`;
        break;
      case bulan = 5:
        result =`${taggal}-Juni-${tahun}`;
        break;
      case bulan = 6:
        result =`${taggal}-Juni-${tahun}`;
        break;
      case bulan = 7:
        result =`${taggal}-Juli-${tahun}`;
        break;
      case bulan = 8:
        result =`${taggal}-Agustus-${tahun}`;
        break;
      case bulan = 9:
        result =`${taggal}-September-${tahun}`;
        break;
      case bulan = 10:
        result =`${taggal}-Oktober-${tahun}`;
        break;
      case bulan = 11:
        result =`${taggal}-November-${tahun}`;
        break;
      case bulan = 12:
        result =`${taggal}-Desember-${tahun}`;
        break;
      default:
        result = 'Bulan tidak deketahui!';
        break;
    }
    console.log(result);
  } else {
    console.log('Tanggal atau Tahun tidak diketahui!')
  }
}

cetakTanggal(28, 9, 2004);