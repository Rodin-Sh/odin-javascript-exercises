const sumAll = function(a, b) {
    let sum = 0
    if (a > b) {
        let b_copy = b
        b = a
        a = b_copy
    }

    if (a >= 0 && b >= 0 && typeof a === "number" && typeof b === "number") {
        for (let i = a; i <= b; i++) {
            sum += i
        }
    } else {
        return "ERROR"
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
