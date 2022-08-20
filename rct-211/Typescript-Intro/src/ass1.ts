// create a type name with a string
let Name: string = "anu";
// create a type age with a number
let age: number = 23;
// create a type isFetching with boolean
let isFetching: boolean = true;
isFetching=false;
// create an array of numbers
let arr: number[] = [1, 2, 3, 4];
// create an array of strings (using array constructor generic type)

// create a tuple , which keeps a string as the first value, and boolean as the second
var tuples;
tuples = ["Masai", 3];
// create an enum
// it should have User, SuperUser, Admin, SuperAdmin
enum employe {
  User,
  SuperUser,
  Admin,
  SuperAdmin,
}
// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
 const sumA=(x:number,y:number):number=>{
  return x+y;
 }
// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
const sub=(x:number,y:number):number=>{
    return x/y;
   }
// create a function that takes a name and prints it without returning anything
const prinName = ({ first_name, last_name, age, isWorking }: person): void => {
    console.log(`${first_name}_${last_name}`);
  };
  let person3: person = {
    first_name: "Masai",
    last_name: "School",
    age: 3,
    isWorking: true,
  };
  
  printName(person3);