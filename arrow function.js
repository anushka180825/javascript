const user1={
    firstName :"anushka",
    age:8,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}
user1.about(user1);