function findtarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1
}
const myarray =[1,2,3,4,5]
console.log(findtarget(myarray,5))