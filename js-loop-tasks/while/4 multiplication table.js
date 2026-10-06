/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */


/*programming hero*/

let num = 5;
let time = 0;

console.log("Multiplication table for number 5.")

while( num< 500 ){
    num = 5*time;
    console.log(`5 x ${time} = ${num}`);
    time++;
}