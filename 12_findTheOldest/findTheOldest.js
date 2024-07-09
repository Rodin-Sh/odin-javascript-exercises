const findTheOldest = function(people) {
    let max = 0
    let oldest = 0
    const date = new Date()

    const lifetimes = people.map((person) => {
        if (person.yearOfDeath == null) {
            lifetime = date.getFullYear() - person.yearOfBirth
        } else {
            lifetime = person.yearOfDeath - person.yearOfBirth
        }

        return lifetime
    })
    
    for (let i = 0; i < lifetimes.length; i++) {
        if (lifetimes[i] > max) {
            max = lifetimes[i]
            oldest = i
        }
    }

    return people[oldest]
};

// Do not edit below this line
module.exports = findTheOldest;
