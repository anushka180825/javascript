// add all number
const number =[1,2,3,4,5];

const sum=number.reduce((accumulater,currentvalue)=>{
    return accumulater +currentvalue;
});
console.log(sum)