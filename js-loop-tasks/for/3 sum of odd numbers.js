

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sumOddNum = 0;

for(let n = 91; n <= 129; n++){
    
    if(n%2 !== 0){
        sumOddNum = (sumOddNum + n);
    }
}
console.log(sumOddNum);


let sumEvenNum = 0;

for( let i = 51; i <= 85; i++ ){
    if(i%2 == 0){
        sumEvenNum = sumEvenNum+i;
    }
}
console.log(sumEvenNum);