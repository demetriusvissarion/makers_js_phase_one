const fizzBuzz = (num) => {
    if (num % 5 === 0 && num % 3 === 0) {
        return 'FizzBuzz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else {
        return num;
    }
};

module.exports = fizzBuzz;
/////// for REPR
// const fizzBuzz = require('./fizzBuzz');
// fizzBuzz(3);
// fizzBuzz(5);
// fizzBuzz(8);
// fizzBuzz(15);
// fizzBuzz(18);
// fizzBuzz(20);