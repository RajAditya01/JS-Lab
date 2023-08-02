//array create

// let a=new Array();
// let b=Array(1,2,3);
// const arr = ["Aditya","Snehit", "Raj"]
// console.log(arr);

//array method

// let size = arr.length;
// console.log(size);
// arr.pop("Aditya");
// console.log(arr);
// arr.push("darshan");
// console.log(arr);
// arr.shift("Punit");
// console.log(arr);
// arr.unshift("gautam");
// console.log(arr);


//array destructring
// const section = ['A11', 'B12', 'C13']
// const [a, b, c] = section;
// console.log(a, b, c);

// //rest parameter

// function getArr(a, b, ...args) {
//     console.log("a", a);
//     console.log(`b ${b}`);
//     console.log("args", args);
// }

// getArr("Aditya", "Raj", "Snehit", "Vishal", "gautam", "sourav");

// // var laptop = (name, color, model);
// const ans = bp(name, color, model);
// console.log(`${ans}`);


// //template string literal
// let firstName = "Aditya";
// let lastName = "Raj";

// let text = `Hlo there, I am ${firstName}, ${lastName}`;
// console.log(text);//array create

//spread operator
// const odd = [1, 3, 5];
// const combined = [2, 4, 6, 8, ...odd];
// console.log(combined);


//Enhanced Object literals
//1-Shorthand:
const name = 'Aditya';
const age = 20;

// Without enhanced object literals
// const person = {
//     name: name,
//     age: age,
// };

// With enhanced object literals
const person = {
    name,
    age,
};

console.log(person); // Output: { name: 'John', age: 30 }


//2-Shorthand for writing Method
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2


//3-compute property
const dynamicKey = 'favoriteColor';

const Men = {
    name: 'Aditya',
    age: 20,
    [dynamicKey]: 'blue',
};

console.log(Men.favoriteColor); // Output: 'blue'

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1: "valueUnique",
    //jo value key1 ki bad me likhi hogi wohi print hogi.
    key3: "value3",
    key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject);