"use strict";
// let myRealAge: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // type sample
// myRealAge = 34;
// myRealAge = 27;
// // array
// let hobbies: any[] = ["cooking", "sports"];
// hobbies.push(1);
// console.log(hobbies)
//tuples
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
// SETTING UP TYPESCRIPT CONFIG <------------------------------------------------------------------------------------>
// let myName: string = "Michael";
// let myAge: number = 34;
// let anything;
// anything = 12
// function controlMe(isTrue: boolean, somethingElse: boolean){
//     let result: number;
//     if(isTrue){
//         result = 12;
//     }
//     result = 33;
//     return result
// }
// ES6 SUPPORT <------------------------------------------------------------------------------------------------------>
// let and const
// console.log("CONST AND LET: ")
// let variable = "TEST";
// console.log(variable);
// variable = "hi there";
// console.log(variable);
// // block scope
// console.log("BLOCK SCOPE: ")
// function reset(){
//     let variable = null;
//     console.log(variable);
// }
// reset();
// console.log(variable);
// // arrow functions <------------------------------------------------------------------------------------------------------->
// console.log("ARROW FUNCITONS: <------------------------------------------------------------------------------------------- ")
// const addNumbers = function(number1: number, number2: number){
//     return number1 + number2;
// }
// console.log(addNumbers(10,3))
// const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
// const addNumbersArrow = (number1: number, number2: number ) => number1 + number2;
// console.log(multiplyNumbers(10,3));
// // arrow functions variations 
// const greet = () => {
//     console.log("Hello")
// }
// greet();
// const greetFriend = friend => console.log(friend)
// greetFriend("Michael");
// // default parameters
// console.log("DEFAULT PARAMS <-------------------------------------------------------------------------------------------")
// const countDown = (start: number = 10): void => {
//     let realStart = start;
//     while (start > 0){
//         start--
//         console.log(start)
//     }
//     console.log("done: from ", realStart, `to 0 in ${realStart} miliseconds` )
// }
// countDown(10);
// Rest and spread operators
// console.log("REST AND SPREAD OPERATORS <-------------------------------------------------------------------------------------------");
// console.log("REST")
// let numbers = [1, 10, 99, -5];
// console.log(Math.max(...numbers))
// console.log("SPREAD")
// const makeArray = (...args: number[]) => {
//     return args;
// }
// console.log(makeArray(1, 2, 3))
// console.log("DESTRUCTURING ARRAYS <-------------------------------------------------------------------------------------------");
// const myHobbies = ["cooking", "sports"];
// const hobbie1 = myHobbies[0];
// const hobbie2 = myHobbies[1];
// console.log(hobbie1, hobbie2);
// // Destructuring arrays :
// const [hobby1, hobby2] = myHobbies;
// console.log(hobby1, "from destructuring myhoobies array")
// // Destructuring objects :
// const userData = {
//     userName: "Michael",
//     userAge: 34
// }
// // const userName = userData.userName;
// // const userAge = userData.userAge;
// const {userName, userAge} = userData;
// console.log(userName, userAge)
// console.log("TEMPLATE LITERALS <-------------------------------------------------------------------------------------------");
// const myName = "Michael";
// const greeting = "hello, i'm " + myName;
// console.log(greeting);
// const newGreeting = `This is a heading! 
// I'm ${myName}
// Hi there!
// `
// console.log(newGreeting);
// console.log("CLASSES <-------------------------------------------------------------------------------------------");
// class Person {
//     name!: string;
//     type!: string;
//     age!: string;
//     constructor(name:string, public username: string){
//         this.name = name;
//     }
//     printAge() {
//         this.age = "34"        
//         console.log(this.age);
//     }
//     printType(type: string) {
//         this.type = type
//         console.log(this.type);
//     }
// }
// const person = new Person("Michael", "mike01");
// console.log(person);
// person.printAge();
// person.printType("cool guy");
// console.log("INHERITANCE <-------------------------------------------------------------------------------------------");
// class Michael extends Person {
//     constructor(username: string){
//     super("Michael", username)
//     }
// }
// const michael = new Michael("Mik");
// console.log(michael)
// console.log("getters and setters <-------------------------------------------------------------------------------------------");
// class Plant {
//     private _species: string = "Default";
//     set species(value: string) {
//         if(value.length > 3) {
//             this._species = value
//         } else {
//             this._species = "Default"
//         }
//     }
//     get species(){
//         return this._species;
//     }
// }
// let plant = new Plant();
// console.log(plant.species)
// plant.species = "AB"
// console.log(plant.species);
// plant.species = "Green plant";
// console.log(plant.species);
console.log("static class and methods <-------------------------------------------------------------------------------------------");
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(80));
console.log("abstract classes <-------------------------------------------------------------------------------------------");
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
newProject.changeName("My new project name");
newProject.budget = 2000;
console.log(newProject, newProject.calcBudget());
