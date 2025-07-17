const sumAll = function (arrStart, arrEnd) {

    let sum = 0;

    let arr = [];

    for (let i = 0; i < arrEnd - arrStart + 1; i++) {
        arr.push(arrEnd - i);
    }


    const result = arr.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);


};



// Do not edit below this line
module.exports = sumAll;
