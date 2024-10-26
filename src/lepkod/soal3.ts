interface Paramsk {
  nama: string;
  gerbong: string;
  seat: string;
};

interface dataOutput {
  nama: string;
  seat: string;
}[];

type Output = {
  [key: string]: dataOutput[]
}

function trainSeating(str: Paramsk[]): Output{
  let patch: Output = {};
  for(let key of str){
    if(!patch[key.gerbong]){
      patch[key.gerbong] = [{
        nama: key.nama,
        seat: key.seat
      }]
    } else {
      patch[key.gerbong].push({
        nama: key.nama,
        seat: key.seat
      })
    }
  }
  return patch;
}


console.log(trainSeating([{
  nama: "Awtian",
  gerbong: "VVIP",
  seat: 'A1'
},
{
  nama: "Klonoa",
  gerbong: "VIP",
  seat: 'V1'
},
{
  nama: "Azizy",
  gerbong: "VVIP",
  seat: 'A2'
},
{
  nama: "Crash",
  gerbong: "Regular",
  seat: 'R1'
},
{
  nama: "Sena",
  gerbong: "Regular",
  seat: 'R3'
},
{
  nama: "Heri",
  gerbong: "Regular",
  seat: 'R10'
},
{
  nama: "Retsu",
  gerbong: "VIP",
  seat: 'V2'
},
{
  nama: "Hiruma",
  gerbong: "VVIP",
  seat: 'A666'
},
{
  nama: "Tsubasa",
  gerbong: "VIP",
  seat: 'V6'
}
]));
/*
Output :
{
VVIP:
 [ { nama: 'Awtian', seat: 'A1' },
   { nama: 'Azizy', seat: 'A2' },
   { nama: 'Hiruma', seat: 'A666' } ],
VIP:
 [ { nama: 'Klonoa', seat: 'V1' },
   { nama: 'Retsu', seat: 'V2' },
   { nama: 'Tsubasa', seat: 'V6' } ],
Regular:
  [ { nama: 'Crash', seat: 'R1' },
    { nama: 'Sena', seat: 'R3' },
    { nama: 'Heri', seat: 'R10'} ]
}
*/