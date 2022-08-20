// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface admin {
  title: string;
  status: boolean;
  id: number;
}

// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname

const getName = (first_name: string, last_name?: string) => {
  return `${first_name}_${last_name}`;
};

// make a interface for it
// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface Address {
  houseNumber: number;
  street: number;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}

// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface personDetails {
  prefix?:boolean,
  phones: number[],
  addresses:string[],
  email?:string,
  firstname:string,
  lastname:string,
  middlename?:string,
}

// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
const PhoneBook:personDetails={
  phones:[1,2,3,4,5],
  addresses:["kanpur"],
  firstname:"sheelu",
  lastname:"verma",
}