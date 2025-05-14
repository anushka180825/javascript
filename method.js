// method are the function inside object

    
    function person(){
        console.log(`my name is ${this.firstname} and age is ${this.age}`);
    }

const p1={
    firstname :"anushka",
    age:18,
    about:person
}
const p2={
    firstname :"aditi",
    age:18,
    about:person
}
p1.about();
p2.about();

