// 1.)
function deepSum(num: number[][][]): number | string {
  if (num.length < 1) return "No number";
  let count: number = num.reduce((totalOne, valueOne) => {
    return (
      totalOne +
      valueOne.reduce((totalTwo, valueTwo) => {
        return (
          totalTwo +
          valueTwo.reduce((totalThree, valueThree) => {
            return totalThree + valueThree;
          }, 0)
        );
      }, 0)
    );
  }, 0);
  return count;
}

console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(deepSum([])); // No number

// 2.)
type OutputAngkot = {
  penumpang: string;
  naikDari: string;
  tujuan: string;
  bayar: number;
};

const naikAngkot = (params: string[][]): OutputAngkot[] => {
  let result: OutputAngkot[] = [];
  let place: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let awal: number = -1;
  let akhir: number = -1;

  for (let i: number = 0; i < params.length; i++) {
      let penumpang: string = params[i][0]
      let naikDari: string = params[i][1]
      let tujuan: string = params[i][2]

    awal = place.indexOf(naikDari);
    akhir = place.indexOf(tujuan);
    let bayar: number = awal !== -1 && akhir !== -1 ? Math.abs((akhir - awal) * 2000) : 0;
    result.push({
      penumpang: penumpang,
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar
    });
  }
  return result;
};

console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]



// 4.)
type Paramss = {
  name: string;
  score: number;
  class: string;
}

interface HighScore {
  name: string;
  score: number;
}

interface OutputHighscore {
  [key: string]: HighScore
}
function highestScore(students: Paramss[]): OutputHighscore {
  let obj: OutputHighscore = {};

  for(let i: number = 0; i < students.length; i++){
    let isDataClass = students[i].class; 
    if(!obj[isDataClass] || students[i].score > obj[isDataClass].score){
      obj[isDataClass] = {
        name: students[i].name,
        score: students[i].score
      }
    }
  }
  return obj
} 

console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}



// 4.)
type Paramsss = {
  name: string;
  score: number;
  class: string;
}

interface TypeData {
  name: string;
  score: number;
}

interface OutputGraduets {
  [key: string]: TypeData[]
}

const graduates = (studets: Paramsss[]): OutputGraduets => {
  let obj: OutputGraduets = {}
  for(let i: number = 0; i < studets.length; i++){
    let isDataClass: string = studets[i].class;

    if(studets[i].score >= 75){
      if(!obj[isDataClass]){
        obj[isDataClass] = [{
          name: studets[i].name,
          score: studets[i].score,
        }]
      } else {
        obj[isDataClass].push({
          name: studets[i].name,
          score: studets[i].score
        })
      }
    }
  }
  return obj;
}



console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}


