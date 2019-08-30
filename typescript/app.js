"use strict";
var myRealAge;
// type sample
myRealAge = 34;
myRealAge = 27;
// array
var hobbies = ["cooking", "sports"];
hobbies.push(1);
console.log(hobbies);
//tuples
var address = ["superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//functions
var returnMyAge = function () {
    return myRealAge;
};
console.log("my real age is : ", returnMyAge());
// argument types
var multiply = function (value1, value2) {
    return value1 * value2;
};
console.log(multiply(2, 2));
//function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 2));
//objects
var useData = {
    name: "Michael",
    age: 34
};
console.log(useData.name);
//complex objects
var complex = {
    data: [100, 20, 30],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge2 = "thirty four";
console.log(myRealAge2);
// check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("final value is of type string");
}
