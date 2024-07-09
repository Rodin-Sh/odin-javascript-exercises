const repeatString = function(text, n) {
    output = ""
    for (let i = 0; i < n; i++) {
        output = output + text
    }
    if (n  < 0) {
        return "ERROR"
    } else {
        return output
    }
};

// Do not edit below this line
module.exports = repeatString;
