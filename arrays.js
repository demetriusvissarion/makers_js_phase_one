/////// Exercise
// const friends = ['Mircea', 'Simi', 'Gabi', 'Sergiu']

// console.log(friends.length);
// console.log(friends[1]);

// const newFriends = friends.concat('Obo');

// console.log(friends);
// console.log(newFriends);

/////// Exercise
// myArray = Array.from(Array(11).keys())
// console.log(myArray);

// let sum = 0;
// for (let i = 0; i < myArray.length; i++ ) {
//     sum += myArray[i];
// }
// console.log(sum)

/////// Challenge
const addToBatch = (array, number) => {
    if (array.length < 5) {
        const newArray = array.concat(number);
        return newArray
    } else {
        return array
    }
}

addToBatch([1], 3); 
// [ 1, 3 ]

addToBatch([1, 2, 3], 4); 
// [ 1, 2, 3, 4 ]

addToBatch([], 8); 
// [ 8 ]

addToBatch([1, 2, 3, 4, 5, 6], 7); 
// [ 1, 2, 3, 4, 5, 6 ]

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]