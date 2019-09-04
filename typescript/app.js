"use strict";
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
var echo = function (data) { return data; };
console.log(echo("Michael"));
console.log(echo(34));
var genericEcho = function (data) { return data; };
console.log(genericEcho("Michael").length);
console.log(genericEcho(34));
// built-in generics
var testResults = [1.94, 2, 5.33];
testResults.push(20);
console.log(testResults);
// arrays
var printAll = function (args) {
    args.forEach(function (element) { return console.log(element); });
};
printAll(["Apple", "Banana"]);
// generic types
var echo2 = genericEcho;
console.log(echo2("Something"));
// generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());
var simpleMath2 = new SimpleMath();
console.log(simpleMath2.baseValue = "something");
console.log(simpleMath2.multiplyValue = "something else");
