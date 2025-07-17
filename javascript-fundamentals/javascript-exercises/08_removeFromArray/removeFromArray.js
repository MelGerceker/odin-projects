const removeFromArray = function (arr, ...removeItems) {

    // ... makes it a rest parameter

    return arr.filter(item => !removeItems.includes(item));
};


console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
