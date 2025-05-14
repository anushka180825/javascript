const number=[1,3,2,5,7,9,6];
const isEven=function(number){
    return number%2==0;
}
const en =number.filter(isEven)
console.log(en);