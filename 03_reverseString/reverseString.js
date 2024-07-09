const reverseString = function(string) {
    const stringArray = string.split("")

    const len = string.length
    let output = ""
    
    for (let i = 1; i <= len; i++) {
        output += stringArray[len-i]
    }
    
    return output
};

// Do not edit below this line
module.exports = reverseString;
