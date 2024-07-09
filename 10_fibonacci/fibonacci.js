const fibonacci = function(member_of_fibonacci) {
    if (member_of_fibonacci > 0) {
        before_member = 0
        member = 1
        for (let i = 0; i < parseInt(member_of_fibonacci)-1; i++) {
            before_member_copy = before_member
            before_member = member
            member += before_member_copy
            console.log(`${before_member}, ${member}`)
        }
        
        return member
    } else if (member_of_fibonacci < 0) {
        return "OOPS"
    } else {
        return 0
    }

};

// Do not edit below this line
module.exports = fibonacci;
