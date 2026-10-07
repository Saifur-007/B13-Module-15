/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/


let num = 1;

while(num <= 40){

    if(num % 2 !== 0){
        num++;
        continue;
    }else{
        console.log(num);
        num++
    }
}
