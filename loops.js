const oddOrEven = (num) => {
    if (num % 5 === 0 ) {
        return num + ' is even'
    } else {
        return num + ' is odd'
    }
}

module.exports = oddOrEven;
/////// for REPR
// const oddOrEven = require('./loops');
// oddOrEven(1);
// oddOrEven(2);
// oddOrEven(3);