const palindromes = function (string) {
    string = string.replace(/\s/g, "")
    string = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
    string = string.toLowerCase()
    string = string.split("")

    reverseString = []

    for (let i = 0; i < string.length; i++) {
        reverseString[string.length-1-i] = string[i]
    }

    if (reverseString.toString() === string.toString()) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
