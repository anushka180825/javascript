

// start ,delete number of item , insert 
const myarray =['a1','a2','a3'];
myarray.splice(1,1);
console.log(myarray);
//deleted item
myarray.splice(1,0,2);
console.log(myarray);
//inserted
myarray.splice(1,1,2);
console.log(myarray);