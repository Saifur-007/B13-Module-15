/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


let num = 1;
let sumNum = 0;

while(num <= 100){
    sumNum = sumNum+num;
    console.log(sumNum);
    if(sumNum >= 100){
        console.log(sumNum);
        break;
    }
    num++;
}