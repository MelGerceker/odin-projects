const fibonacci = function (n) {
    n = parseInt(n);
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    } else if (n > 2) {
        return fibonacci(n - 2) + fibonacci(n - 1);
    } else {
        return "OOPS"; // for negatives
    }

};

// Do not edit below this line
module.exports = fibonacci;
