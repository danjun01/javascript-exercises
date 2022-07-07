const reverseString = function(str) {
    if (str.length < 1) return '';
    if (str.length == 1) return str;
    else {
        return str[str.length - 1] + reverseString(str.slice(0,-1));
    }
};

// Do not edit below this line
module.exports = reverseString;
