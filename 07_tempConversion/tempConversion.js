const convertToCelsius = function(fahrTemperature) {
    return parseFloat(((fahrTemperature - 32) * (5/9)).toFixed(1))
};

const convertToFahrenheit = function(celTemperature) {
    return parseFloat((celTemperature * (9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
