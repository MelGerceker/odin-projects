const findTheOldest = function (array) {

    let age = array.map((people) => people.yearOfDeath - people.yearOfBirth);

    const oldestAge =  Math.max(...age)

    return oldestAge;

};

//console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
