// const printMessage = () => {
//     console.log('Hello there');
// }
// setTimeout(printMessage, 2000);

// --------------------------------------
// // The function given is the same, but it's not
// // assigned to a name before using the `const` keyword.
// setTimeout(() => {
//     console.log('Hello there');
// }, 2000);

// --------------------------------------
// console.log('1. The program starts');
// setTimeout(() => {
//     console.log('4. The timer is lapsed, this callback function is now called');
// }, 2000); // 2000ms = 2 seconds
// console.log('2. The timer has started, and the callback function registered to be called later');
// console.log('3. The rest of the program below (immediate tasks) will keep running immediately');

// --------------------------------------
////// Exercise
const printHello = () => {
    console.log('Hello there');
}
setTimeout(printHello, 2000);

// --------------------------------------
////// Exercise
const executeAfterDelay = (delay, transformFunction) => {
    return setTimeout(transformFunction, delay * 1000);
}
executeAfterDelay(5, printHello);

