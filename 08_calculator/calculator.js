const add = function(num_1, num_2) {
	return num_1 + num_2
};

const subtract = function(num_1, num_2) {
	return num_1 - num_2
};

const sum = function(numArr) {
  return numArr.reduce((total, currenItem) => {
    return total + currenItem
  }, 0)
};

const multiply = function(numArr) {
  return numArr.reduce((total, currenItem) => {
    return total * currenItem
  }, 1)
};

const power = function(num, to_power_of) {
	return Math.pow(num, to_power_of)
};

const factorial = function(num_1) {
  let factorial = 1;
  for (let i = num_1; i > 0; i--) {
    factorial *= i
  }

  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
