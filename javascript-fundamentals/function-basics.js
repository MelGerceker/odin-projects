/*
Write a function called add7 that takes one number and returns that number + 7.
Write a function called multiply that takes 2 numbers and returns their product.
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d"
*/

function add7(number) {
    return number + 7;
}

console.log(add7(5));

function multiply(num1,num2) {
    return num1*num2;
}

console.log(multiply(2,4));

function capitalize(string) {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase();
    return string;
}

console.log(capitalize("TeeSTT"));
console.log(capitalize("teeSTT"));

function lastLetter(string) {
    return string.slice(-1);
}

console.log(lastLetter("last"));