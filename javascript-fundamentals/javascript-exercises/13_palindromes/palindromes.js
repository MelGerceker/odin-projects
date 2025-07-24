const palindromes = function (string) {

    const cleaned = string
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // handles punctuation & spaces

    const n = cleaned.length;

    for (let i = 0; i <  Math.floor(n / 2); i++) {
         if (cleaned[i] !== cleaned[n - 1 - i]) {
            return false;
        }
    }
    return true;

};


// Do not edit below this line
module.exports = palindromes;
