function myfunc2(name){
    console.log("inside my fun")
    console.log(`your name is ${name}`);
}
function myfun(callback){
    console.log("hello")
    callback("anushka");
}
myfun(myfunc2);