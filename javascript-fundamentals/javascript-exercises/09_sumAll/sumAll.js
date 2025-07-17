const sumAll = function (arrStart, arrEnd) {

    if (arrStart > arrEnd) {
        let temp = arrStart;
        arrStart = arrEnd;
        arrEnd = temp;
    }

    if (arrEnd < 0 || arrStart < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(arrEnd) || !Number.isInteger(arrStart)) {
        return "ERROR";
    }

    let sum = 0;

    let arr = [];

    for (let i = 0; i < arrEnd - arrStart + 1; i++) {
        arr.push(arrEnd - i);
    }

    console.log(arr);

    const result = arr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);

    console.log(result);

    return result;

};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
