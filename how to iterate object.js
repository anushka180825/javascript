const person ={
    name :"anushka",
    age :22,
    "person hobbies":["guitar","sleeping","listner"]

}
// for in loop
// object .key
for(let key in person){
    console.log(person[key]);
}


for(let key in person){
    console.log(`${key}:${person[key]}`);
}