const getNumberSign = (num) => {
    if (num === 0) {
        return 'zero'
    } else if (num > 0) {
        return 'positive'
    } else {
        return 'negative'
    }
}

module.exports = getNumberSign;
/////// for REPR
// const getNumberSign = require('./getNumberSign');
// console.log(getNumberSign(3));
// console.log(getNumberSign(0));
// console.log(getNumberSign(-5));