const reverseString = function (string) {

    let tempStringArray = [];
    let resultArray = [];

    for (let i = 0; i < string.length; i++) {

        tempStringArray.push(string.charAt(i));
    }

    console.log(tempStringArray);

    for (let i = string.length-1; i >= 0; i--) {
        resultArray.push(tempStringArray[i]);
    }

    console.log(resultArray);

    return resultArray.join("");
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
