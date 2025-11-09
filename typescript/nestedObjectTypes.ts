type Address = {
  street: string;
  city: string;
  country: string;
};

// Only ONE Person type!
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address; // This is the crucial link
};

let person1: Person = {
  name: "Joe", // string
  age: 42, // number
  isStudent: true, // boolean
  address: { // Address type
    street: "122 Main", // string
    city: "Mumbai", // string
    country: "India" // string
  }
};
// No error here.

let person2: Person = {
  name: "Jill", // string
  age: 66, // number
  isStudent: false, // boolean
  address: { // Address type
    street: "122 Main", // string
    city: "Mumbai", // string
    country: "India" // string
  }
};
// No error here either.