interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function getUserType(obj:User | Admin):string{
  return obj.type;
}

const person4:User={
   type:"user",
   name:'masai',
   age:34,
   occupation:"skills"
}
const person5:Admin={
    type:'admin',
    name:"masai",
    age:34,
    role:"skill"
 }
