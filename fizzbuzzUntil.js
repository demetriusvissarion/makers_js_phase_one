const fizzbuzzUntil = (num) => {
    let i = 0;

    while (i <= num - 1) {
        i += 1;
        // console.log('this is i now: ' + i)
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    };

};

module.exports = fizzbuzzUntil;
/////// for REPR
// const fizzbuzzUntil = require('./fizzbuzzUntil');
// fizzbuzzUntil(10);