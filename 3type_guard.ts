//* type guard
//typeof

type AlphaNumeric = string | number;
const add1 = (a: AlphaNumeric, b: AlphaNumeric) => {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();         //? suggest string method
    }
    else {
        return a + b;       //? suggest number method
    }
}
let result = add1('10', 20);
let result2 = add1(10, 20);
console.log(result, result2);


// type guard in
type User = {name:string};
type Admin = {name:string, role:'admin'};

const getUser =(user: User | Admin) => {
    if('role' in user) {
        console.log(`I am admin and my role is ${user.role}`);   //? suggest role
    }
    else {
        console.log(`I am ${user.name}`);          //? only suggest name
    }
}

getUser({name: 'John', role: 'admin'});
getUser({name: 'John'});