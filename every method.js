const number =[2,4,6,8,10];
function isEven(number){
    return number%2===0;
}
const ans =number.every(isEven);
// every method true is all number is even
console.log(ans)