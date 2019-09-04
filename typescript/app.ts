// let myRealAge: number;

// // type sample
// myRealAge = 34;
// myRealAge = 27;

// // array
// let hobbies: any[] = ["cooking", "sports"];

// hobbies.push(1);

// console.log(hobbies)

// //tuples
// let address: [string, number] = ["superstreet", 99];

// // enum
// enum Color {
//     Gray, //0
//     Green = 100, //100
//     Blue //2
// }

// let myColor: Color = Color.Green;
// console.log(myColor)

// //functions

// const returnMyAge = (): number => {
//     return myRealAge;
// }
// console.log("my real age is : ", returnMyAge())

// // argument types

// const multiply = (value1: number, value2: number): number => {
//     return value1 * value2;
// }

// console.log(multiply(2, 2))

// //function types
// let myMultiply: (val1: number, val2: number) => number;

// myMultiply = multiply;

// console.log(myMultiply(2, 2))

// //objects
// let useData: { name: string, age: number } = {
//     name: "Michael",
//     age: 34
// };

// console.log(useData.name);

// //complex objects
// let complex: { data: number[], output: (all: boolean)=> number[]} = {
//     data: [100,20,30],
//     output: function (all:boolean): number[]{
//         return this.data
//     }
// };

// type Complex = { data: number[], output: (all: boolean)=> number[]}

// // union types
// let myRealAge2: number | string = "thirty four"
// console.log(myRealAge2)

// // check types
// let finalValue = "A string"
// if(typeof finalValue == "string"){
//     console.log("final value is of type string")
// }

// //never - function never returns anything
// let neverReturns = (): never => {
//     throw new Error('an error!')
// }

// const echo = (data: any) => data;

// console.log(echo("Michael"));
// console.log(echo(34));

// const genericEcho = <T>(data: any) => data;

// console.log(genericEcho("Michael").length);
// console.log(genericEcho<number>(34))

// // built-in generics

// const testResults: Array<number> = [1.94, 2, 5.33]

// testResults.push(20);

// console.log(testResults)

// // arrays
// const printAll = <T>(args: T[]) => {
//     args.forEach((element) => console.log(element));
// }

// printAll<string>(["Apple", "Banana"])

// // generic types
// const echo2: <T>(data: T) => T = genericEcho;

// console.log(echo2<string>("Something"));

// // generic classes

// class SimpleMath<T extends number | string> {
//     baseValue: T;
//     multiplyValue: T;
//     calculate(): number {
//         return +this.baseValue * +this.multiplyValue;
//     }
// }

// const simpleMath = new SimpleMath<number | string>();
// simpleMath.baseValue = 10;
// simpleMath.multiplyValue = "20";
// console.log(simpleMath.calculate());

// const simpleMath2 = new SimpleMath<string>();

// console.log(simpleMath2.baseValue = "something");
// console.log(simpleMath2.multiplyValue = "something else");

// Decorators

const logged = (constructorFn: Function) => console.log(constructorFn) 

@logged
class Person {
    constructor() {
        console.log("Hi")
    }
}

// Factory

const logging = (value: boolean) => value ? logged : null;

@logging(true)
class Car {
}

// Advanced

const printable = (constructorFn: Function) => {
    constructorFn.prototype.print = () => console.log(this)
}

@printable
class Plant {
    name = "green plant";
}

const plant = new Plant();

(<any>plant).print();

// param decorator 

const printInfo = (target: any, methodName: string, paramIndex: number) => {
    console.log("Target: ", target);
    console.log("method Name: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name?: string) {
        this.name = name;
    }

    printStudentNumber(mode: string, @printInfo printAll: boolean){
        if (printAll) {
            console.log(10000)
        } else {
            console.log(20000)
        }
    }
}

const course = new Course("Super Course");

course.printStudentNumber("anything", true);
course.printStudentNumber("anything", false)

