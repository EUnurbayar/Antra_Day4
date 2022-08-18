console.log("hello assignment");
//1.
// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223


let num= 0;
let lastDig;
let rev = 0;
function revNum(num){
    while(num != 0){
        lastDig = num % 10;
        rev = rev *10 + lastDig; 
    }

    return rev;
}


console.log(revNum(123));
