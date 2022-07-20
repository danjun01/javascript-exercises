const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;

};

const sum = function(arr) {
	let total;
  for(i = 0; i < arr.length() - 1; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const power = function(base, pow) {
	return Math.pow(base, pow);
};

const factorial = function(num) {
	return Math.factorial(num);
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
