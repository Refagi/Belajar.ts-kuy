class Loop {

  first: number = 0
  last: number = 5;
  index: number = 10;
  names: string[] = ["budi", "udin", "asep"];
  nums: number[] = [1, 2, 3, 4, 5];
  result: string = "";
  name: string = "bagong";

  whileLoop(): void{
    let i: number = this.first;
    while(i <= this.last){
      console.log(`loop while ${i}`);
      i++;
    }
  }

  forLoop(): void{
    for(let i: number = this.first; i <= this.last; i++){
      console.log(`loop for ${i}`);
    }
  }


  doWhileLoop(): void{
    let i: number = this.first;
    do{
      console.log(`loop do while ${i}`);
      i++;
    }
    while(i <= this.last)
  }

  loopArrays(): void {
    for(let i: number = this.first; i < this.names.length; i++){
      this.result += this.names[i] + " ";
    }
    console.log(this.result);
  }

  loopArrayName(): void {
    for(let i: number = this.first; i < this.name.length; i++){
      console.log(this.name[i])
    }
    console.log('-------------------------')
    for(let i: number = this.name.length - 1; i >= 0; i--){
      console.log(this.name[i])
    }
  }

  segitigaOne(): void{
    let count: number = 1;
    for(let i: number = 0; i < this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j <= i; j++){
        tampung += count++ + " ";
      }
      console.log(tampung);
    }
  }


  segitigaTwo(): void{
    for(let i: number = 0; i < this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j < this.last - i; j++){
        tampung += j + i + 1 + " ";
      }
      console.log(tampung);
    }
  }

  segitigaThree(): void{
    for(let i: number = 0; i < this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j <= i; j++){
        tampung += j + i + 1 + " ";
      }
      console.log(tampung);
    }
  }


  segitigaFour(): void{
    this.nums.forEach((index, element, arr) => {
      console.log(index, element, arr);
    })
  }

  segitigaFive(): void{
    let result: string = "";
    for(let i: number = 0; i < this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j < this.last; j++){
        if(j >= i){
          tampung += "*";
        } else {
          tampung += " ";
        }
      }
      result += tampung + "\n";
    }

    console.log(result);
  }


  segitigaSix(): void{
    let result: string = "";
    for(let i: number = 0; i < this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j < this.last; j++){
        if(j >= i){
          tampung += "*";
        } else {
          tampung += "";
        }
      }
      result += tampung + "\n";
    }

    console.log(result);
  }


  segitigaSeven(): void{
    let result: string = "";
    for(let i: number = this.last; i >= 0; i--){
      let tampung: string = "";
      for(let j: number = 0; j < this.last; j++){
        if(j >= i){
          tampung += "*";
        } else {
          tampung += " ";
        }
      }
      result += tampung + "\n";
    }

    console.log(result);
  }


  segitigaEight(): void{
    let result: string = "";
    for(let i: number = 0; i <= this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j < i; j++){
        if(j <= i){
          tampung += "*";
        } else {
          tampung += " ";
        }
      }
      result += tampung + "\n";
    }

    console.log(result);
  }

  segitigaNine(): void{
    let result: string = "";
    for(let i: number = this.last; i >= 1; i--){
      let tampung: string = "";
      for(let j: number = 1; j <= this.last; j++){
        if(j >= i){
          tampung += "* ";
        } else {
          tampung += " ";
        }
      }
      result += tampung + "\n";
    }

    console.log(result);
  }



  segitigaTen(): void{
    let result: string = "";
    for(let i: number = 1; i <= this.last; i++){
      let tampung: string = "";
      for(let j: number = 1; j <= this.last; j++){
        if(j >= i){
          tampung += "* ";
        } else {
          tampung += " ";
        }
      }
      result += tampung + "\n";
    }
    console.log(result);
  }


  segitigaEleven(): void{
    let result: string = "";
    for(let i: number = 1; i <= this.last; i++){
      let tampung: string = "";
      for(let j: number = 0; j <= i; j++){
        if(i % 2 === 0){
          tampung += "X" + " ";
        } else {
          tampung += j + i + " ";
        }
      }
      result += tampung + "\n";
    }

    console.log(result);
  }

}

let testLoop = new Loop();
// testLoop.whileLoop();
// testLoop.forLoop();
// testLoop.doWhileLoop();
// testLoop.loopArrays();
// testLoop.loopArrayName();
testLoop.segitigaOne();
/**
1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15
 */

testLoop.segitigaTwo();
/*
1 2 3 4 5
2 3 4 5
3 4 5
4 5
5
 */

testLoop.segitigaThree();
/*
1
2 3
3 4 5
4 5 6 7
5 6 7 8 9 */

testLoop.segitigaFour();
/*
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ] */

testLoop.segitigaFive();
/*
*****
 ****
  ***
   **
    *
 */

testLoop.segitigaSix();
/*
*****
****
***
**
*
*/

testLoop.segitigaSeven();
/*
    *
   **
  ***
 ****
*****
*/

testLoop.segitigaEight();
/*
*
**
***
****
*****
*/

testLoop.segitigaNine();
/*
    *
   * *
  * * *
 * * * *
* * * * *
*/

testLoop.segitigaTen();
/*
* * * * *
 * * * *
  * * *
   * *
    *
*/

testLoop.segitigaEleven();
/*
1 2 
X X X
3 4 5 6
X X X X X
5 6 7 8 9 10
*/


