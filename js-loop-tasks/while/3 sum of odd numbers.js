

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/



// Sum of all the odd numbers

let oddNum = 81;
let oddNumSum = 0;


while(oddNum < 131){
    oddNum++;
    if(oddNum % 2 == 0){
    }else{
        oddNumSum = (oddNumSum + oddNum);
    }
}
console.log(oddNumSum);


// Sum of all the even numbers


let evenNum = 206;
let evenNumSum = 0;

while(evenNum < 311){
    evenNum++;
    if( evenNum %2 == 0){
        evenNumSum = (evenNumSum+evenNum);
    }else{
    }
}
console.log(evenNumSum);