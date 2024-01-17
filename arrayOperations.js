// const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

// // 1. Using a predicate function and `filter` to get only names shorter than 3 letters.
// const isShorterThanThree = (name) => {
//     if (name.length < 3) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const namesShorterThanThreeLetters = names.filter(isShorterThanThree);
// console.log(namesShorterThanThreeLetters)

// // 2. Create a new array of all names uppercased by applying
// // the `getUppercased` function to all elements in the `names` array.

// const getUppercased = (name) => {
//     return name.toUpperCase();
// }

// const uppercasedNames = names.map(getUppercased);
// console.log(uppercasedNames)

//////// Exercise - phone numbers
// const numbers = [
//     '1763687364',
//     '4763687363',
//     '7867867862',
//     'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
// ];
// const checkLength = (phoneNumber) => {
//     if (phoneNumber.length <= 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const filterLongNumbers = (numbers) => {
//     return numbers.filter(checkLength)
// }
// filterLongNumbers(numbers);
// // [ '1763687364', '4763687363', '7867867862' ]

// filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
// // [ '4763687363', '7867867862' ]

// filterLongNumbers([])
// // [ ]


//////// Exercise - personalised messages
// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// const generateMessages = (names) => {
//     const addmessage = (name) => {
//         return `Hi ${name}! 50% off our best candies for you today!`
//     }
//     return names.map(addmessage);
// }

// generateMessages(names);


//////// Challenge
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const generateMessages = (namesAndDiscounts) => {
    const addmessage = (object) => {
        return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`
    }
    return namesAndDiscounts.map(addmessage);
}

generateMessages(namesAndDiscounts);
// [
//     'Hi Anna! 50% off our best candies for you today!',
//     'Hi Laura! 40% off our best candies for you today!',
//     'Hi Josh! 30% off our best candies for you today!',
//     'Hi Min! 50% off our best candies for you today!',
//     'Hi Karla! 60% off our best candies for you today!'
// ]