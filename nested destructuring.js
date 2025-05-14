const users = [
    {    userId : 1,firstName :'anushka' ,gender:'female'
    },
    {    userId : 2,firstName :'ani' ,gender:'female'
    },
    {
   userId : 3,firstName :'anushkaaaa' ,gender:'female'
    },
]
const [user1,user2,user3]=users;

const[{firstName},{gender}] =users;

console.log(firstName)