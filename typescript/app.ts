let myRealAge: number;

// type sample
myRealAge = 34;
myRealAge = 27;

// array
let hobbies: any[] = ["cooking", "sports"];

hobbies.push(1);

console.log(hobbies)

//tuples
let address: [string, number] = ["superstreet", 99];

// enum
enum Color {
    Gray, //0
    Green = 100, //100
    Blue //2
}

let myColor: Color = Color.Green;
console.log(myColor)

//functions

const returnMyAge = (): number => {
    return myRealAge;
}
console.log("my real age is : ", returnMyAge())

// argument types

const multiply = (value1: number, value2: number): number => {
    return value1 * value2;
}

console.log(multiply(2, 2))

//function types
let myMultiply: (val1: number, val2: number) => number;

myMultiply = multiply;

console.log(myMultiply(2, 2))

//objects
let useData: { name: string, age: number } = {
    name: "Michael",
    age: 34
};

console.log(useData.name);

//complex objects
let complex: { data: number[], output: (all: boolean)=> number[]} = {
    data: [100,20,30],
    output: function (all:boolean): number[]{
        return this.data
    }
};

type Complex = { data: number[], output: (all: boolean)=> number[]}

// union types
let myRealAge2: number | string = "thirty four"
console.log(myRealAge2)

// check types
let finalValue = "A string"
if(typeof finalValue == "string"){
    console.log("final value is of type string")
}

//never - function never returns anything
let neverReturns = (): never => {
    throw new Error('an error!')
}