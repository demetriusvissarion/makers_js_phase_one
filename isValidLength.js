const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length == validLength) {
        return true;
    } else {
        return false;
    }
}

module.exports = isValidLength;
/////// for REPR
// const isValidLength = require('./isValidLength');
// console.log(isValidLength('00'));
// console.log(isValidLength('00112233445'));
